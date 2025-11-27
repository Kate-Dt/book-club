import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  transpilePackages: ["@bc/ui", "@bc/core", "@bc/ai"],
};

export default nextConfig;
