import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/My-Portfolio" : "",
  assetPrefix: isProd ? "/My-Portfolio/" : "",
  devIndicators: {
    buildActivity: false,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
