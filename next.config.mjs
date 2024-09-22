/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.rri.co.id",
        port: "",
      },

      {
        hostname: "https://d1vbn70lmn1nqe.cloudfront.net",
        port: "",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_VERTIFICATION_API_KEY:
      process.env.NEXT_PUBLIC_VERTIFICATION_API_KEY,
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
