/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        //hostname: "line-admin.coopmsds.com",
        hostname: "msd.coopmsds.com",
        pathname: "/**", // ⭐ อนุญาตให้โหลดจากทุก path ในโดเมนนี้
      },
      {
        protocol: "https",
        //hostname: "line-admin.coopmsds.com",
        hostname: "coopmsds.com",
        pathname: "/**", // ⭐ อนุญาตให้โหลดจากทุก path ในโดเมนนี้
      },
      {
        protocol: "https",
        //hostname: "line-admin.coopmsds.com",
        hostname: "legacy.coopmsds.com",
        pathname: "/**", // ⭐ อนุญาตให้โหลดจากทุก path ในโดเมนนี้
      },
    ],
  },
};

export default nextConfig;
