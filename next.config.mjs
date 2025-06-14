/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  // Add redirects configuration
  redirects: async () => {
    return [
      {
        source: "/clubsneu",
        destination: "/projects/clubsneu",
        permanent: true, // 308 status code (permanent redirect)
      },
    ];
  },
};

export default nextConfig;
