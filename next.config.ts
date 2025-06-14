import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure we're using the App Router (default in Next.js 13+)
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

export default nextConfig;