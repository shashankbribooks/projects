/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "youbooks-storage-5fd6173683748-webdev.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
