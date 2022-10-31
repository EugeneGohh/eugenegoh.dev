/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flowbite.com", "cdn.sanity.io"],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
