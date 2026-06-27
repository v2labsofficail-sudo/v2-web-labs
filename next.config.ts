import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  allowedDevOrigins: ['192.168.1.11'],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/plan",
        destination: "/plans",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
