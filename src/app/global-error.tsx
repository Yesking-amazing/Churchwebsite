'use client';

import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Log the error to an error reporting service
  console.error('Global error occurred:', error);
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-blue-100">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-red-500 mb-4">500</h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Server Error</h2>
            <p className="text-gray-600 mb-8">
              We apologize for the inconvenience. The server encountered an unexpected condition.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button 
              onClick={() => reset()}
              className="w-full bg-sky-500 hover:bg-sky-600 text-white"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
