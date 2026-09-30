import { sectores, SectorSlug } from "@/data/sectores";
import { ciudades } from "@/data/ciudades";
import { ContactForm } from "@/components/ContactForm";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  const params = [];
  for (const sector of Object.keys(sectores)) {
    for (const ciudad of ciudades) {
      params.push({ sector, ciudad: ciudad.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ sector: string, ciudad: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const sectorData = sectores[resolvedParams.sector as keyof typeof sectores];
  const ciudadData = ciudades.find(c => c.slug === resolvedParams.ciudad);
  
  if (!sectorData || !ciudadData) return { title: 'Not Found' };
  
  return {
    title: `Agencia de Marketing y Captación para ${sectorData.nombre} en ${ciudadData.nombre} | Motor Local`,
    description: `Sistema automatizado de captación de clientes para ${sectorData.nombre.toLowerCase()} en ${ciudadData.nombre}. Olvídate de competir por precio y domina tu zona.`,
  };
}

export default async function SectorCiudadPage({ params }: { params: Promise<{ sector: string, ciudad: string }> }) {
  const resolvedParams = await params;
  const sectorData = sectores[resolvedParams.sector as keyof typeof sectores];
  const ciudadData = ciudades.find(c => c.slug === resolvedParams.ciudad);

  if (!sectorData || !ciudadData) {
    notFound();
  }

  const benefits = [
    `Sin intermediarios: Posicionamos tu negocio directamente en las búsquedas de ${ciudadData.nombre}.`,
    `Urgencias locales: Cuando un cliente en ${ciudadData.nombre} necesite un ${sectorData.oficio.toLowerCase()} urgente, aparecerás tú primero.`,
    `Automatización de WhatsApp: Atiende presupuestos 24/7 sin interrumpir tu trabajo.`
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gray-900 text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">Ecosistema {sectorData.nombre} Exclusivo en {ciudadData.nombre}</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            {sectorData.heroTitle} <span className="text-blue-500 block mt-2">en {ciudadData.nombre}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {sectorData.dolor} Adaptamos nuestro sistema probado al mercado local de <strong>{ciudadData.nombre}</strong> para que te quedes con los mejores clientes de tu provincia.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">¿Por qué nuestro sistema funciona en {ciudadData.nombre}?</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                {index + 1}
              </div>
              <p className="text-gray-700 text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
