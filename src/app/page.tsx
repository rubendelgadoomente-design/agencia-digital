import { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Agencia de captación local en la Sierra de Madrid | Motor Local",
  description: "SEO local, Google Maps y webs que convierten para oficios y clínicas de Colmenar Viejo, Soto del Real, Manzanares, Moralzarzal y Collado Villalba. Análisis de tu zona gratis.",
  alternates: {
    canonical: "https://www.agenciamotorlocal.es",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Motor Local",
    "url": "https://www.agenciamotorlocal.es",
    "telephone": "+34616063682",
    "email": "hola@agenciamotorlocal.es",
    "priceRange": "€€",
    "description": "Agencia de captación local, SEO en Google Maps y herramientas de automatización para oficios y clínicas de la Sierra de Madrid.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Manzanares el Real",
      "addressRegion": "Madrid",
      "addressCountry": "ES"
    },
    "founder": {
      "@type": "Person",
      "name": "Rubén Delgado"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Colmenar Viejo" },
      { "@type": "AdministrativeArea", "name": "Tres Cantos" },
      { "@type": "AdministrativeArea", "name": "Soto del Real" },
      { "@type": "AdministrativeArea", "name": "Manzanares el Real" },
      { "@type": "AdministrativeArea", "name": "Miraflores de la Sierra" },
      { "@type": "AdministrativeArea", "name": "Moralzarzal" },
      { "@type": "AdministrativeArea", "name": "Collado Villalba" }
    ]
  };

  return (
    <div className="bg-gray-50">
      {/* Datos estructurados JSON-LD Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-4 py-24 text-center">
        <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
          Sierra de Madrid • Negocios y Profesionales Locales
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
          Captación de clientes para oficios y clínicas de la Sierra de Madrid
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Posicionamiento en Google Maps, webs que convierten y herramientas para cerrar presupuestos. Probado en mi propia empresa de reparaciones.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contacto" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg text-lg">
            Quiero el análisis gratuito de mi zona
          </a>
          <a href="#casos-exito" className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold py-4 px-8 rounded-xl transition-colors flex items-center justify-center">
            Ver Sistemas Implementados
          </a>
        </div>
      </section>

      {/* Casos de Éxito Section (Social Proof) */}
      <section id="casos-exito" className="bg-white py-24 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Sistemas que ya están generando dinero</h2>
            <p className="mt-4 text-lg text-gray-600">No vendemos webs bonitas. Vendemos infraestructuras digitales comprobadas.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Caso 1: Reparaciones Manzanares (Mi propia empresa) */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              {/* Contenedor de Imagen */}
              <div className="w-full h-48 rounded-xl mb-6 overflow-hidden relative shadow-inner border border-gray-200">
                <img src="/manzanares.png" alt="Reparaciones Manzanares" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Mi propia empresa</span>
                <span className="text-sm font-semibold text-gray-500">Manzanares el Real</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Reparaciones Manzanares: el sistema probado en mi negocio</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Antes de ofrecerlo a nadie, lo apliqué en mi empresa de reparaciones de la Sierra de Madrid: posicionamiento local en Google Maps y un generador de presupuestos en PDF que reduce el tiempo de gestión con cada cliente.
              </p>
              <div className="grid grid-cols-3 gap-3 p-4 bg-white rounded-xl border border-gray-200 text-center mb-6">
                <div>
                  <span className="block text-xs text-gray-400 uppercase font-semibold">Antes</span>
                  <span className="text-sm font-bold text-gray-700">7 llamadas/mes (jun. 2026)</span>
                </div>
                <div className="border-x border-gray-100">
                  <span className="block text-xs text-blue-500 uppercase font-semibold">Ahora</span>
                  <span className="text-sm font-bold text-blue-600">21 llamadas/mes (sep. 2026)</span>
                </div>
                <div>
                  <span className="block text-xs text-green-500 uppercase font-semibold">Google Maps</span>
                  <span className="text-sm font-bold text-green-600">1.º en «fontanero manzanares el real»</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm font-medium text-gray-700">
                <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Más llamadas desde Google Maps en la Sierra</li>
                <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Presupuestos en PDF desde el móvil</li>
              </ul>
            </div>

            {/* Caso 2: Autocaravanas */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              {/* Contenedor de Imagen */}
              <div className="w-full h-48 rounded-xl mb-6 overflow-hidden relative shadow-inner border border-gray-200">
                <img src="/camperbot.png" alt="Proyecto CamperBot" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Turismo y Alquiler</span>
                <span className="text-sm font-semibold text-gray-500">Proyecto propio · en fase piloto</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Atención al Cliente y Reservas con IA</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Desarrollo de un Asistente Virtual Inteligente para reservas de autocaravanas. El sistema resuelve dudas repetitivas (fianzas, seguros, mascotas, kilometraje) y guía hacia la reserva 24/7 sin que se pierdan horas al teléfono.
              </p>
              <ul className="space-y-2 text-sm font-medium text-gray-700 pt-4">
                <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Diseñado para resolver dudas por WhatsApp sin atender cada mensaje</li>
                <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Pensado para captar reservas fuera de horario</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Rutas Programáticas de Sectores */}
      <section id="sectores" className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Sistemas empaquetados por oficio</h2>
          <p className="text-gray-400 mb-10 text-lg">Selecciona tu gremio para ver la estrategia exacta que usamos para llenarte la agenda.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sectores/reformas" className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white font-semibold hover:bg-blue-600 hover:border-blue-600 transition-colors shadow-sm">
              👷‍♂️ Empresas de Reformas
            </Link>
            <Link href="/sectores/fontaneria" className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white font-semibold hover:bg-blue-600 hover:border-blue-600 transition-colors shadow-sm">
              🔧 Fontaneros
            </Link>
            <Link href="/sectores/instalaciones" className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white font-semibold hover:bg-blue-600 hover:border-blue-600 transition-colors shadow-sm">
              🪟 Instaladores (Toldos, Clima)
            </Link>
            <Link href="/sectores/clinicas" className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white font-semibold hover:bg-blue-600 hover:border-blue-600 transition-colors shadow-sm">
              🦷 Clínicas y Salud
            </Link>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
