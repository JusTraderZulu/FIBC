import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }
    
    // Basic spam protection
    if (body.honeypot) {
      return NextResponse.json(
        { error: 'Spam detected.' },
        { status: 400 }
      );
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }
    
    // Message length validation
    if (body.message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long.' },
        { status: 400 }
      );
    }
    
    if (body.message.length > 2000) {
      return NextResponse.json(
        { error: 'Message must be less than 2000 characters.' },
        { status: 400 }
      );
    }
    
    // Check for Resend API key
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (resendApiKey) {
      // Send email via Resend
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'website@fibc.org', // Configure your domain
            to: ['contact@fibc.org'], // Configure recipient
            subject: `Contact Form: Message from ${body.name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${body.name}</p>
              <p><strong>Email:</strong> ${body.email}</p>
              <p><strong>Message:</strong></p>
              <p>${body.message.replace(/\n/g, '<br>')}</p>
              <hr>
              <p><small>Sent from FIBC website contact form</small></p>
            `,
          }),
        });
        
        if (!response.ok) {
          throw new Error('Failed to send email');
        }
        
        return NextResponse.json({ 
          success: true, 
          message: 'Message sent successfully!' 
        });
      } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
          { error: 'Failed to send email. Please try again later.' },
          { status: 500 }
        );
      }
    } else {
      // Development mode - mock success
      console.log('Contact form submission (dev mode):', {
        name: body.name,
        email: body.email,
        message: body.message,
        timestamp: new Date().toISOString(),
      });
      
      return NextResponse.json({ 
        success: true, 
        message: 'Message received! (Development mode - no email sent)' 
      });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
