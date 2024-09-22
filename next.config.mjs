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
};

export default nextConfig;
