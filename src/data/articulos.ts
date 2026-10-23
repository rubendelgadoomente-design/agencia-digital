export interface Articulo {
  slug: string;
  titulo: string;
  fecha: string;
  categoria: string;
  resumen: string;
  tiempoLectura: string;
  publicado: boolean;
}

export const articulos: Articulo[] = [
  {
    slug: 'cuanto-cuesta-clic-google-ads-pergolas-madrid',
    titulo: 'Cuánto cuesta un clic en Google Ads para una empresa de pérgolas en Madrid (y cómo no tirarlo)',
    fecha: 'Octubre 2026',
    categoria: 'Publicidad Local',
    resumen: 'Análisis de los costes reales por clic en Google Ads para instaladores de pérgolas y toldos en la Comunidad de Madrid, y las fugas de presupuesto más comunes.',
    tiempoLectura: 'Borrador (noindex)',
    publicado: false,
  },
  {
    slug: 'lo-que-aprendi-posicionando-empresa-reparaciones-sierra-madrid',
    titulo: 'Lo que aprendí posicionando mi propia empresa de reparaciones en la Sierra de Madrid',
    fecha: 'Octubre 2026',
    categoria: 'Caso Real',
    resumen: 'De depender del boca a boca a recibir llamadas semanales constantes en Manzanares el Real y pueblos vecinos: las lecciones técnicas y comerciales del proceso.',
    tiempoLectura: 'Borrador (noindex)',
    publicado: false,
  },
  {
    slug: '5-errores-ficha-google-negocios-sierra',
    titulo: '5 errores en la ficha de Google que vemos en negocios de la Sierra',
    fecha: 'Octubre 2026',
    categoria: 'Google Maps & SEO',
    resumen: 'Categorías mal elegidas, áreas de servicio mal configuradas y falta de reseñas locales: los cinco fallos que impiden a los autónomos de la Sierra salir en el Top 3.',
    tiempoLectura: 'Borrador (noindex)',
    publicado: false,
  },
];
