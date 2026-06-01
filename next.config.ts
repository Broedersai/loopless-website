import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cache Components: data is request-time by default; published content wordt
  // expliciet gecacht via 'use cache' in src/lib/supabase/content.ts.
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        // Portal-project (Siteup-portaal). Beelden komen uit de gedeelde
        // public bucket tenant-assets onder {tenant_id}/...
        protocol: "https",
        hostname: "rixcftsqezmvtucuwupc.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
