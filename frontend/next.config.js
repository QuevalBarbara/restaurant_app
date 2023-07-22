/* @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["onrender.com"],
    // remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "strapi-b4ct.onrender.com",
      // },
    // ],
  },
};

module.exports = nextConfig;
