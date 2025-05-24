import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    transpilePackages : ["three"],

    images: {
        remotePatterns: [
            {
                hostname: 'avatar.vercel.sh'
            }
        ]
    }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
