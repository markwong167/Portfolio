/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "build",
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [{ name: "removeViewBox", active: false }],
              },
            },
          },
        ],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
