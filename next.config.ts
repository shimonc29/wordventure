import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/wordventure',
  assetPrefix: '/wordventure/',
  images: { unoptimized: true },
};

export default nextConfig;
