/* @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["strapi-ksrw.onrender.com"],
    // remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "strapi-ksrw.onrender.com",
      // },
    // ],
  },
};

module.exports = nextConfig;
