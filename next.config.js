// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled:
    process.env.NODE_ENV === "development" && process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128],
    deviceSizes: [480, 640, 769, 1024, 1280, 1920],
    domains: [
      "noriyan-shokudo2688.com",
      "d3i6atji99eg6.cloudfront.net",
      "dining-menu.com",
    ],
  },
};

module.exports = (_phase, { defaultConfig }) => {
  const plugins = [withBundleAnalyzer];
  return plugins.reduce((acc, plugin) => plugin(acc), {
    ...nextConfig,
  });
};
