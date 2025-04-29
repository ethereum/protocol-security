/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/',
  assetPrefix: '/assets/',
}

module.exports = nextConfig 