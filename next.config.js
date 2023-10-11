const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["127.0.0.1", "localhost", "192.168.100.172"],
  },

  i18n,

  webpack(config, options) {
    config.module.rules.push({
      loader: "@svgr/webpack",
      issuer: /\.[jt]sx?$/,
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                override: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
};

module.exports = nextConfig;
