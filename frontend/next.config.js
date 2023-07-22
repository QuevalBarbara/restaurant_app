/* @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "strapi-b4ct.onrender.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
