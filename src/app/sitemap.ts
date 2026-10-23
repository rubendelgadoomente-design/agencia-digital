import { MetadataRoute } from 'next';
import { sectores } from '../data/sectores';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.agenciamotorlocal.es';
  const lastModified = new Date();

  // Páginas estáticas principales e indexables
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/quien-soy`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/herramientas`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/precios`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/aviso-legal`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/politica-de-privacidad`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/politica-de-cookies`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Páginas de los 4 sectores
  const sectorPages: MetadataRoute.Sitemap = Object.keys(sectores).map((sector) => ({
    url: `${baseUrl}/sectores/${sector}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // NOTA: Se excluyen /gracias y /zona/[municipio] por ser noindex
  return [...staticPages, ...sectorPages];
}
