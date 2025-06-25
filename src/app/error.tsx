'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-blue-100">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-red-500 mb-4">Error</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong</h2>
          <p className="text-gray-600 mb-8">
            We apologize for the inconvenience. An unexpected error has occurred.
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
          
          <Link href="/">
            <Button 
              variant="outline" 
              className="w-full border-sky-500 text-sky-500 hover:bg-sky-50"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </Link>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Need help? <Link href="/#contact" className="text-sky-500 hover:underline">Contact us</Link></p>
        </div>
      </div>
    </div>
  );
}
