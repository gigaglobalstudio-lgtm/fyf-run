import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async rewrites() {
    return [
      {
        source: "/cap",
        destination: "/cap/index.html",
      },
    ];
  },
};

export default nextConfig;
