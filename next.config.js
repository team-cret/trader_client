/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  env: {
    TRADER_SERVER_BASE_URL_SOCKET: process.env.TRADER_SERVER_BASE_URL_SOCKET,
  },

  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `${process.env.TRADER_SERVER_BASE_URL}/api/v1/:path*`,
      },

      // {
      //   source: "/ws/:path*",
      //   destination: `${process.env.TRADER_SERVER_BASE_URL_SOCKET}/ws/:path*`,
      // },
    ];
  },
};

module.exports = nextConfig;
