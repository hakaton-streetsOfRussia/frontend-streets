/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
      {
        source: "/disciplines",
        destination: "/disciplines/street-art",
        permanent: true,
      },
    ];
  },

  assetPrefix:
    process.env.NODE_ENV === "production" ? "/frontend-streets/" : "",
  basePath: process.env.NODE_ENV === "production" ? "/frontend-streets" : "",
  trailingSlash: true,
  output: "export",
};

export default nextConfig;
