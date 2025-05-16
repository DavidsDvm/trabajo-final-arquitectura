import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/trabajo-final-arquitectura' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/trabajo-final-arquitectura' : '',
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
