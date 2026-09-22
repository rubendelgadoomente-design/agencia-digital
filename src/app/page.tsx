import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-4 py-24 text-center">
        <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
          Agencia para Negocios Locales
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6">
          Tu competencia se está llevando a los clientes de tu zona. <br />
          <span className="text-blue-600">Nosotros te los traemos a ti.</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Sistemas de captación, SEO Local y herramientas SaaS para <strong>Empresas de Reformas, Instaladores y Oficios</strong>. Olvídate de perseguir clientes, haz que te llamen ellos.
        </p>
        
        <div className="flex justify-center gap-4">
          <a href="#contacto" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-lg transition-colors shadow-lg">
            Quiero dominar mi zona
          </a>
          <a href="#casos-exito" className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold py-3.5 px-8 rounded-lg transition-colors flex items-center justify-center">
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
            {/* Caso 1: Reparaciones Manzanares */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              {/* Contenedor de Imagen */}
              <div className="w-full h-48 rounded-xl mb-6 overflow-hidden relative shadow-inner border border-gray-200">
                <img src="/manzanares.png" alt="Reparaciones Manzanares" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Reformas y Mantenimiento</span>
                <span className="text-sm font-semibold text-gray-500">Reparaciones Manzanares</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ecosistema Local + SaaS de Presupuestos</h3>
              <p className="text-gray-600 mb-6">
                Dominio total de las búsquedas locales en la zona de la Sierra de Madrid. Además de captar llamadas semanales, les implementamos un <strong>generador de presupuestos en PDF automatizado</strong> (SaaS interno) para reducir el tiempo de gestión con el cliente en un 80%.
              </p>
              <ul className="space-y-2 text-sm font-medium text-gray-700">
                <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Tráfico orgánico geolocalizado</li>
                <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Cierre de ventas automatizado</li>
              </ul>
            </div>

            {/* Caso 2: Autocaravanas */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              {/* Contenedor de Imagen */}
              <div className="w-full h-48 rounded-xl mb-6 overflow-hidden relative shadow-inner border border-gray-200">
                <img src="/camperbot.png" alt="Proyecto CamperBot" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Turismo y Alquiler</span>
                <span className="text-sm font-semibold text-gray-500">Proyecto Camper</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Atención al Cliente y Reservas con IA</h3>
              <p className="text-gray-600 mb-6">
                Desarrollo de un Asistente Virtual Inteligente para reservas de autocaravanas. El sistema resuelve el 90% de las dudas repetitivas (fianzas, seguros, mascotas, kilometraje) y guía al cliente hacia la compra 24/7 sin que el personal pierda horas al teléfono.
              </p>
              <ul className="space-y-2 text-sm font-medium text-gray-700">
                <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Ahorro radical de tiempo en WhatsApp</li>
                <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Cierre de reservas fuera de horario comercial</li>
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
