/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
