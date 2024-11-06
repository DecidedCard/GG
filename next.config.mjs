/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["https://gg-ashen-five.vercel.app/", "http://localhost:3000"],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "open.api.nexon.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
