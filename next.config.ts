import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Netlify deployment
  output: "export",
  
  // Disable default Image optimization since we're doing static export
  images: {
    unoptimized: true,
  },
  
  devIndicators: false,
};

export default nextConfig;
