import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Note: output: "export" removed to support News admin (Server Actions, middleware, dynamic data).
  // Deploy to Vercel, Netlify (Node), or similar for full functionality.
  async headers() {
    return [
      {
        source: "/embed/map",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors *",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com", pathname: "/**" },
      { protocol: "https", hostname: "*.supabase.co", pathname: "/storage/v1/object/public/**" },
    ],
  },
  
  devIndicators: false,
};

export default nextConfig;
