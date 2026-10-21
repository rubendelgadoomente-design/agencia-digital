import { notFound } from 'next';
import { Metadata } from 'next';
import Link from 'next/link';
import { articulos } from '@/data/articulos';

export function generateStaticParams() {
  return articulos.map((a) => ({
    slug: a.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const articulo = articulos.find((a) => a.slug === resolved.slug);

  if (!articulo) return { title: 'Artículo no encontrado | Motor Local' };

  return {
    title: `${articulo.titulo} | Blog Motor Local`,
    description: articulo.resumen,
    // Borrador marcado como noindex hasta su redacción definitiva
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: `https://www.agenciamotorlocal.es/blog/${resolved.slug}`,
    },
  };
}

export default async function ArticuloBorradorPage({ params }: Props) {
  const resolved = await params;
  const articulo = articulos.find((a) => a.slug === resolved.slug);

  if (!articulo) notFound();

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/blog" className="text-sm font-semibold text-blue-600 hover:underline">
            &larr; Volver al blog
          </Link>
        </div>

        {/* Aviso de borrador noindex */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 text-xs text-amber-800 rounded-r-lg">
          <strong>Artículo en estado de borrador (noindex):</strong> Este artículo aún no está publicado ni indexado en buscadores. Pendiente de redacción de contenido definitivo.
        </div>

        <header className="mb-10">
          <div className="flex items-center gap-3 text-xs mb-3">
            <span className="bg-blue-100 text-blue-800 font-bold px-2.5 py-0.5 rounded-full uppercase">
              {articulo.categoria}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">{articulo.fecha}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            {articulo.titulo}
          </h1>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed italic">
            {articulo.resumen}
          </p>
        </header>

        <main className="prose prose-slate max-w-none text-gray-700 leading-relaxed border-t border-gray-200 pt-8 space-y-6">
          <div className="bg-gray-50 border border-dashed border-gray-300 p-8 rounded-2xl text-center text-gray-500">
            <span className="text-4xl block mb-2">📝</span>
            <h2 className="text-lg font-bold text-gray-800 mb-1">
              [[CONTENIDO DEL ARTÍCULO: {articulo.titulo}]]
            </h2>
            <p className="text-sm text-gray-600 max-w-md mx-auto mt-2">
              [Espacio reservado para el texto completo del artículo, gráficos comparativos de costes por clic, pantallazos de Google Search Console y análisis de métricas locales].
            </p>
          </div>
        </main>

        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center text-sm">
          <Link href="/blog" className="text-blue-600 font-semibold hover:underline">
            &larr; Ver otros artículos
          </Link>
          <a href="/#contacto" className="bg-gray-900 hover:bg-blue-600 text-white font-bold py-2.5 px-5 rounded-lg transition-colors">
            Solicitar análisis de mi zona
          </a>
        </div>
      </div>
    </div>
  );
}
