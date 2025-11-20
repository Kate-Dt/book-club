import type { NextConfig } from "next";


const nextConfig: NextConfig = {
experimental: {
typedRoutes: true,
},
transpilePackages: ["@bc/ui", "@bc/core", "@bc/ai"],
};


export default nextConfig;
