/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "chevaldemo.xyz",
      },
      {
        protocol: "https",
        hostname: "synergydemo.b-cdn.net",
      },
    ],
  },
};

export default nextConfig;
