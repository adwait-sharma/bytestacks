/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is now the default in Next.js 14, so we don't need the experimental flag
  images: {
    domains: ['images.unsplash.com'],
  }
}

module.exports = nextConfig 