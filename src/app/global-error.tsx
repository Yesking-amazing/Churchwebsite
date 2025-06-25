'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error occurred:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom right, #f0f9ff, #dbeafe)',
          fontFamily: 'system-ui, sans-serif'
        }}>
          <div style={{
            maxWidth: '28rem',
            margin: '0 auto',
            textAlign: 'center',
            padding: '1rem'
          }}>
            <div style={{ marginBottom: '2rem' }}>
              <h1 style={{
                fontSize: '4rem',
                fontWeight: 'bold',
                color: '#ef4444',
                marginBottom: '1rem'
              }}>500</h1>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1rem'
              }}>Server Error</h2>
              <p style={{
                color: '#6b7280',
                marginBottom: '2rem'
              }}>
                We apologize for the inconvenience. The server encountered an unexpected condition.
              </p>
            </div>
            
            <button 
              onClick={() => reset()}
              style={{
                width: '100%',
                backgroundColor: '#0ea5e9',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.375rem',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500'
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
