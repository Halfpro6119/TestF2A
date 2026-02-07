import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Netlify deployment
  output: "export",
  
  // Disable default Image optimization since we're doing static export
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "img.youtube.com", pathname: "/**" }],
  },
  
  devIndicators: false,
};

export default nextConfig;
