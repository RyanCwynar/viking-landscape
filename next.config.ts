import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/viking-landscape",
  assetPrefix: "/viking-landscape/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
