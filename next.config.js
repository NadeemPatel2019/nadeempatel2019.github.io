/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  async rewrites() {
    return [
      {
        source: '/projects/:path*',
        destination: '/pages/projects/:path*'
      }
    ]
  }
}

module.exports = nextConfig 