import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.agenciamotorlocal.es';

  // Rutas estáticas principales
  const routes = [
    '',
    '/sectores/reformas',
    '/sectores/fontaneria',
    '/sectores/instalaciones',
    '/sectores/clinicas',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
