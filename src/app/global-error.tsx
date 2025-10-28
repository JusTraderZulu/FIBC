"use client";
import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center max-w-lg mx-auto px-4">
            <div className="text-6xl mb-6">⚠️</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Application Error
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              A critical error occurred. Please refresh the page or contact support if the problem persists.
            </p>
            <div className="space-y-4">
              <button
                onClick={reset}
                className="inline-flex items-center rounded-lg bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 transition-colors mr-4"
              >
                Try Again
              </button>
              <a
                href="/"
                className="inline-flex items-center rounded-lg border border-blue-600 text-blue-600 px-6 py-3 font-semibold hover:bg-blue-50 transition-colors"
              >
                Go Home
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
