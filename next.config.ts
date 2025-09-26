import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2jfx0w9sp915a.cloudfront.net',
        port: '', // để trống nếu không có port
        pathname: '/**', // cho phép tất cả path
      },
    ],
  },
};

export default nextConfig;
