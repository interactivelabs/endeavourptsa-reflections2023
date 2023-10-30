/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'endeavourptsa-reflections2023.s3.us-west-2.amazonaws.com',
        pathname: '/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;
