const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Adicione suas configurações do Next.js aqui, se houver
  // Por exemplo:
  // experimental: {
  //   serverActions: true,
  // },
};

export default nextConfig;
