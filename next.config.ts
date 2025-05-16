import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/trabajo-final-arquitectura' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/trabajo-final-arquitectura' : '',
  /* config options here */
};

export default nextConfig;
