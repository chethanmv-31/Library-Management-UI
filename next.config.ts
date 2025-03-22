import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',  // Export static files
  basePath: '/Library-Management-UI', // Change this to your repo name
  images: {
    unoptimized: true,  // Required for GitHub Pages
  },
};

export default nextConfig;
