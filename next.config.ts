import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Evita que o Next tente otimizar imagens em um servidor que não existe no GitHub Pages
  },
};

export default nextConfig;