import { Metadata } from 'next';
import Link from 'next/link';
import { articulos } from '@/data/articulos';

export const metadata: Metadata = {
  title: 'Blog de Captación Local y Negocios | Motor Local',
  description: 'Estrategias, análisis de costes y casos reales de SEO Local y captación de clientes en la Sierra de Madrid.',
  alternates: {
    canonical: 'https://www.agenciamotorlocal.es/blog',
  },
};

export default function BlogIndexPage() {
  const articulosPublicados = articulos.filter((a) => a.publicado);

  return (
    <div className="bg-gray-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Link href="/" className="text-sm font-semibold text-blue-600 hover:underline mb-4 inline-block">
            &larr; Volver a Motor Local
          </Link>
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs block mb-2">
            Estrategia y Realidad de Negocio
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Artículos y Casos de Estudio
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Análisis honestos, costes de clics y aprendizajes directos de gestionar posicionamiento local en la Sierra de Madrid.
          </p>
        </div>

        {articulosPublicados.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 border border-gray-200 text-center max-w-xl mx-auto shadow-sm">
            <span className="text-4xl block mb-4">✍️</span>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Primer artículo en preparación</h2>
            <p className="text-gray-600 text-sm mb-6">
              Estamos redactando análisis reales sobre costes de clics, posicionamiento en Google Maps y conversión para oficios de la Sierra.
            </p>
            <Link
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2.5 px-6 rounded-xl transition-colors"
            >
              Volver a la portada
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {articulosPublicados.map((art) => (
              <article
                key={art.slug}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs mb-3">
                    <span className="bg-blue-100 text-blue-800 font-bold px-2.5 py-0.5 rounded-full uppercase">
                      {art.categoria}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">{art.fecha}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[11px] font-semibold">
                      {art.tiempoLectura}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${art.slug}`}>{art.titulo}</Link>
                  </h2>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {art.resumen}
                  </p>
                </div>

                <div>
                  <Link
                    href={`/blog/${art.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center gap-1"
                  >
                    Leer artículo &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
