/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "https://strapi-b4ct.onrender.com/",
          port: "1337",
          pathname: "/uploads/**",
        },
        {
            protocol: "http",
            hostname: "https://strapi-b4ct.onrender.com/",
            port: "1337",
            pathname: "/uploads/**",
          },
      ],
    },
  };
  
  module.exports = nextConfig;
