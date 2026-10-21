import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Redirección permanente 301 de las 40 páginas de ciudad a la página del sector correspondiente
        source: '/sectores/:sector/:ciudad',
        destination: '/sectores/:sector',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
