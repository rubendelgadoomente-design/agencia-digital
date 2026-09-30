import { MetadataRoute } from 'next';
import { sectores } from '../data/sectores';
import { ciudades } from '../data/ciudades';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.agenciamotorlocal.es';

  // Rutas estáticas principales
  const routes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 }
  ];

  // Añadir rutas de sectores y combinaciones sector + ciudad
  Object.keys(sectores).forEach((sector) => {
    // Página general del sector
    routes.push({
      url: `${baseUrl}/sectores/${sector}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });

    // Páginas locales (Programmatic SEO)
    ciudades.forEach((ciudad) => {
      routes.push({
        url: `${baseUrl}/sectores/${sector}/${ciudad.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  });

  return routes;
}
