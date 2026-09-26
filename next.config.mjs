/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/request-demo", destination: "/contact", permanent: true },
      { source: "/waitlist", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
