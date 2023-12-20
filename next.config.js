/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {},

  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `${process.env.TRADER_SERVER_BASE_URL}/api/v1/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
