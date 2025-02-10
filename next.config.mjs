/** @type {import('next').NextConfig} */

const nextConfig = {
  compress: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/maple",
        permanent: false,
      },
    ];
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "open.api.nexon.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gg-ashen-five.vercel.app",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
