import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // This fixes the error
    domains: ["cdn.sanity.io"],
  },
};

export default nextConfig;