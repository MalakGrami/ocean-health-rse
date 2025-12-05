import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Optimize for performance and minimal bundle size
  reactStrictMode: true,
  poweredByHeader: false, // Remove X-Powered-By header for privacy
};

export default nextConfig;
