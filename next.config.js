/** @type {import('next').NextConfig} */
const prefix =
  process.env.NODE_ENV === "development" ? "" : "/kasvunmahdollistajat-fi";

const nextConfig = {
  reactStrictMode: true,
  basePath: "/kasvunmahdollistajat-fi",
  assetPrefix: `/kasvunmahdollistajat-fi/`,
};

module.exports = nextConfig;
