import type { NextConfig } from "next";

const nextConfig ={
  output: "export",
  images: {
    domains: ["cdn.sanity.io"], // Allow Sanity's image CDN
  },
};

export default nextConfig;
