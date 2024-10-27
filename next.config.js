/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'finchat.io',
        port: '',
        pathname: '/_next/image/**',
      },
    ],
  },
};

module.exports = nextConfig;
