/** @type {import('next').NextConfig} */
const prefix =
  process.env.NODE_ENV === "development" ? "" : "/kasvunmahdollistajat-fi";

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
