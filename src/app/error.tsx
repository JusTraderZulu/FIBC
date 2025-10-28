"use client";
import { useEffect } from "react";
import { Section } from "@/components/ui/Section";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section>
      <div className="text-center max-w-lg mx-auto">
        <div className="text-6xl mb-6">⚠️</div>
        <h1 className="text-3xl font-serif tracking-tight text-[hsl(var(--ink))] mb-4">
          Something went wrong
        </h1>
        <p className="text-black/70 mb-8 leading-relaxed">
          We encountered an unexpected error. Please try again or return to the homepage.
        </p>
        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-flex items-center rounded-brand bg-[hsl(var(--brand))] text-white px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors mr-4"
          >
            Try Again
          </button>
          <a
            href="/"
            className="inline-flex items-center rounded-brand border border-[hsl(var(--brand))] text-[hsl(var(--brand))] px-6 py-3 font-semibold hover:bg-[hsl(var(--brand))]/5 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] transition-colors"
          >
            Back to Home
          </a>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="text-sm text-black/60 cursor-pointer hover:text-black/80">
              Error Details (Development)
            </summary>
            <pre className="mt-2 text-xs bg-gray-100 p-4 rounded overflow-auto text-gray-800">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
      </div>
    </Section>
  );
}
