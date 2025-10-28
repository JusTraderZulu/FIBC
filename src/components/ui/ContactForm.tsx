"use client";
import { useState } from "react";
import { ContactFormData, FormState } from "@/lib/types";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({ status: 'idle' });
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Hidden field for spam protection
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic spam protection
    if (formData.honeypot) {
      return;
    }
    
    setFormState({ status: 'loading' });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setFormState({ 
          status: 'success', 
          message: 'Thank you for your message. We will get back to you soon.' 
        });
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        setFormState({ 
          status: 'error', 
          message: result.error || 'Something went wrong. Please try again.' 
        });
      }
    } catch (error) {
      setFormState({ 
        status: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const isLoading = formState.status === 'loading';

  return (
    <div className="bg-white/50 rounded-brand p-6 border border-black/5">
      <h2 className="text-xl font-serif tracking-tight mb-6">Send us a message</h2>
      
      {formState.status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-brand text-green-800">
          {formState.message}
        </div>
      )}
      
      {formState.status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-brand text-red-800">
          {formState.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          className="sr-only"
          tabIndex={-1}
          autoComplete="off"
        />
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-black/80 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={isLoading}
            className="w-full px-4 py-3 rounded-brand border border-black/10 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Enter your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black/80 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
            className="w-full px-4 py-3 rounded-brand border border-black/10 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Enter your email address"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-black/80 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            disabled={isLoading}
            className="w-full px-4 py-3 rounded-brand border border-black/10 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed resize-vertical"
            placeholder="How can we help you?"
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading || !formData.name || !formData.email || !formData.message}
          className="w-full inline-flex items-center justify-center rounded-brand bg-[hsl(var(--brand))] text-white px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
}
