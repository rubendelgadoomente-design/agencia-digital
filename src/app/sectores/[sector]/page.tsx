import { sectores, SectorSlug } from "@/data/sectores";
import { notFound } from "next/navigation";
import Link from "next/link";

// Generar rutas estáticas para rendimiento máximo
export function generateStaticParams() {
  return Object.keys(sectores).map((sector) => ({
    sector: sector,
  }));
}

// Next.js 15 requiere que params sea tratado de forma asíncrona (Promise)
type Props = {
  params: Promise<{ sector: string }>;
};

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const data = sectores[resolvedParams.sector as SectorSlug];
  
  if (!data) return { title: "Sector no encontrado | Motor Local" };
  
  return {
    title: `SEO y Captación para ${data.nombre} | Motor Local`,
    description: data.dolor,
  };
}

export default async function SectorPage({ params }: Props) {
  const resolvedParams = await params;
  const data = sectores[resolvedParams.sector as SectorSlug];
  
  if (!data) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-24 text-center">
      <Link href="/" className="text-sm font-semibold text-blue-600 hover:underline mb-8 inline-block">
        &larr; Volver a Motor Local
      </Link>
      
      <div className="mb-6">
        <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
          Especialistas en {data.nombre}
        </span>
      </div>
      
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-8 leading-tight">
        {data.heroTitle}
      </h1>
      
      <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
        {data.dolor} En <strong>Motor Local</strong> tenemos el sistema exacto para que como {data.oficio.toLowerCase()} dejes de perseguir clientes y automatices tus ventas.
      </p>
      
      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100 max-w-3xl mx-auto text-left">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">¿Por qué trabajar con nosotros?</h3>
        <ul className="space-y-5 text-gray-600">
          <li className="flex gap-4 items-start">
            <span className="text-green-500 text-xl font-bold mt-1">✓</span>
            <div>
              <strong className="block text-gray-900">Sin humo ni palabras raras</strong>
              Entendemos el día a día de un {data.oficio.toLowerCase()}. Nada de métricas vanidosas, hablamos de obras, urgencias y euros en caja.
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <span className="text-green-500 text-xl font-bold mt-1">✓</span>
            <div>
              <strong className="block text-gray-900">Ecosistemas Probados (Caso de Éxito)</strong>
              Aplicamos el mismo sistema exacto que ya está generando decenas de llamadas semanales a otras empresas del sector.
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <span className="text-green-500 text-xl font-bold mt-1">✓</span>
            <div>
              <strong className="block text-gray-900">Herramientas Privadas Incluidas</strong>
              No solo te traemos al cliente. Te instalamos un generador de presupuestos automatizado para que cierres la venta en 2 minutos.
            </div>
          </li>
        </ul>
        
        <div className="mt-10 text-center">
          <button className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-10 rounded-lg transition-colors">
            Analizar mi negocio gratis
          </button>
        </div>
      </div>
    </div>
  );
}
