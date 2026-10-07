import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // gera site 100% estático na pasta /out
  images: { unoptimized: true }, // necessário para export estático
};

export default nextConfig;
