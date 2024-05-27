/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  basePath: isProd ? '/frontend-streets' : '',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/disciplines',
        destination: '/disciplines/street-art',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
