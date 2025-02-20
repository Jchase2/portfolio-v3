import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/hn-clone",
        destination: "/hn-clone/index.html",
      },
      {
        source: "/torque",
        destination: "/torque/index.html",
      },
    ];
  },
  trailingSlash: true, // Ensures relative asset paths resolve correctly
};

export default nextConfig;
