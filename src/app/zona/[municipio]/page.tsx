import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';

export const municipiosValidos = [
  { slug: 'colmenar-viejo', nombre: 'Colmenar Viejo', listo: false },
  { slug: 'soto-del-real', nombre: 'Soto del Real', listo: false },
  { slug: 'manzanares-el-real', nombre: 'Manzanares el Real', listo: false },
  { slug: 'moralzarzal', nombre: 'Moralzarzal', listo: false },
  { slug: 'collado-villalba', nombre: 'Collado Villalba', listo: false },
];

export function generateStaticParams() {
  return municipiosValidos.filter((m) => m.listo).map((m) => ({
    municipio: m.slug,
  }));
}

type Props = {
  params: Promise<{ municipio: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolved = await params;
  const municipio = municipiosValidos.find((m) => m.slug === resolved.municipio && m.listo);

  if (!municipio) return { title: 'Municipio no encontrado | Motor Local' };

  return {
    title: `Captación y SEO Local en ${municipio.nombre} | Motor Local`,
    description: `Servicios de posicionamiento en Google Maps y captación de clientes para negocios y clínicas en ${municipio.nombre}.`,
    // Marcada noindex hasta que el usuario redacte el contenido único
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: `https://www.agenciamotorlocal.es/zona/${resolved.municipio}`,
    },
  };
}

export default async function MunicipioPage({ params }: Props) {
  const resolved = await params;
  const municipio = municipiosValidos.find((m) => m.slug === resolved.municipio && m.listo);

  if (!municipio) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-sm font-semibold text-blue-600 hover:underline">
            &larr; Volver a Motor Local
          </Link>
        </div>

        {/* Banner de estado de redacción */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 text-xs text-amber-800 rounded-r-lg">
          <strong>Página en borrador (noindex):</strong> Esta plantilla contiene la estructura base para {municipio.nombre}. Pendiente de redactar el contenido único local. No indexable hasta completar los marcadores.
        </div>

        {/* H1 */}
        <header className="mb-12">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-xs block mb-2">
            Sierra de Madrid • {municipio.nombre}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Captación de clientes y SEO Local en {municipio.nombre}
          </h1>
        </header>

        {/* Introducción con marcador de contenido único */}
        <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-10 space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Situación del mercado local en {municipio.nombre}</h2>
          <div className="p-4 bg-gray-50 border border-dashed border-gray-300 rounded-xl text-gray-600 text-sm leading-relaxed">
            <p className="font-semibold text-gray-800 mb-2">Contenido pendiente de redacción: Introducción</p>
            <p>
              [Espacio reservado para describir la tipología de viviendas (chalets, urbanizaciones, casco urbano), cómo busca el vecino de {municipio.nombre} y por qué las empresas de fuera se están llevando las llamadas si no hay presencia local fuerte].
            </p>
          </div>
        </section>

        {/* Sectores destacados en el municipio */}
        <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-10 space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Sectores prioritarios en {municipio.nombre}</h2>
          <div className="p-4 bg-gray-50 border border-dashed border-gray-300 rounded-xl text-gray-600 text-sm leading-relaxed">
            <p className="font-semibold text-gray-800 mb-2">Contenido pendiente de redacción: Sectores destacados</p>
            <p>
              [Espacio reservado para detallar la demanda específica en {municipio.nombre}: reformas de chalets, averías urgentes de fontanería, mantenimiento de climatización/aerotermia o pacientes para clínicas dentales y de fisioterapia].
            </p>
          </div>
        </section>

        {/* Ejemplo de búsqueda real */}
        <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-10 space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Ejemplo de búsqueda real en Google y Google Maps</h2>
          <div className="p-4 bg-gray-50 border border-dashed border-gray-300 rounded-xl text-gray-600 text-sm leading-relaxed">
            <p className="font-semibold text-gray-800 mb-2">Contenido pendiente de redacción: Ejemplo de búsqueda real</p>
            <p>
              [Espacio reservado para incluir una captura o desglose de qué sale al buscar por ejemplo: &quot;reformas {municipio.nombre}&quot; o &quot;fisioterapia {municipio.nombre}&quot;, mostrando qué competidor sale en el Top 3 y cuántas llamadas mensuales genera esa posición].
            </p>
          </div>
        </section>

        {/* Llamada a la acción hacia el formulario */}
        <div className="text-center py-6 mb-12">
          <a
            href="#contacto"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl transition-colors shadow-lg text-base"
          >
            Solicitar análisis gratuito de mi negocio en {municipio.nombre}
          </a>
        </div>

        {/* Formulario integrado */}
        <ContactForm />
      </div>
    </div>
  );
}
