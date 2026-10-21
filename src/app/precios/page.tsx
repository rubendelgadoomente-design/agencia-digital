import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Planes y Precios Transparentes | Motor Local',
  description: 'Precios claros para captación local, posicionamiento en Google Maps y desarrollo web en la Sierra de Madrid. Sin permanencias ocultas.',
  alternates: {
    canonical: 'https://www.agenciamotorlocal.es/precios',
  },
};

export default function PreciosPage() {
  const planes = [
    {
      nombre: 'Análisis de Zona',
      badge: 'Punto de partida',
      precioAlta: 'Gratis',
      precioMes: 'Sin cuota',
      destacado: false,
      descripcion: 'Para saber con datos reales si tu competencia se está llevando tus clientes en Google.',
      incluye: [
        'Posición en Google y Maps para 3 búsquedas clave',
        'Análisis de tus 3 principales competidores locales',
        'Revisión técnica de tu web y ficha de Google Maps',
        'Coste por clic estimado de tu sector en la Sierra',
        'Informe detallado en PDF sin compromiso',
      ],
      cta: 'Solicitar análisis gratis',
      href: '/#contacto',
    },
    {
      nombre: 'Arranque Local',
      badge: 'Base sólida',
      precioAlta: 'Desde 990 €',
      precioMes: 'Desde 90 € / mes',
      destacado: false,
      descripcion: 'Ideal para autónomos y oficios que necesitan salir bien en Google Maps y tener web profesional.',
      incluye: [
        'Todo lo incluido en el Análisis de Zona',
        'Optimización completa del Perfil de Empresa de Google',
        'Datos unificados y citas en 10 directorios locales',
        'Web ultra rápida de 3 a 5 páginas adaptada a móvil',
        'Textos legales conformes a LSSI y RGPD incluidos',
        'Botón directo a WhatsApp y llamada rápida',
        'Informe mensual de visibilidad y llamadas',
      ],
      cta: 'Elegir Arranque Local',
      href: '/#contacto',
    },
    {
      nombre: 'Ecosistema Local',
      badge: 'El más demandado',
      precioAlta: 'Desde 1.900 €',
      precioMes: 'Desde 190 € / mes',
      destacado: true,
      descripcion: 'Para empresas de reformas, instaladores y clínicas que quieren dominar toda la comarca.',
      incluye: [
        'Todo lo incluido en Arranque Local',
        'Páginas especializadas por servicio y por municipio',
        'Campaña activa de captación y gestión de reseñas',
        'Medición avanzada de llamadas y formularios',
        '1 artículo mensual de posicionamiento local',
        'Revisión estratégica trimestral de resultados',
      ],
      cta: 'Elegir Ecosistema Local',
      href: '/#contacto',
    },
    {
      nombre: 'Dominio Total',
      badge: 'Liderazgo absoluto',
      precioAlta: 'Desde 3.000 €',
      precioMes: 'Desde 290 € / mes',
      destacado: false,
      descripcion: 'El sistema completo con herramientas de automatización a medida para maximizar el margen.',
      incluye: [
        'Todo lo incluido en Ecosistema Local',
        'Generador de presupuestos en PDF a medida o Asistente de IA para WhatsApp 24/7',
        'Gestión profesional de campañas en Google Ads (si las tienes)',
        'Reunión mensual de seguimiento y optimización de conversión',
        'Soporte prioritario directo por WhatsApp',
      ],
      cta: 'Elegir Dominio Total',
      href: '/#contacto',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Link href="/" className="text-sm font-semibold text-blue-600 hover:underline mb-4 inline-block">
            &larr; Volver a Motor Local
          </Link>
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs block mb-2">
            Inversión transparente • Sin costes ocultos
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Planes y Precios para Negocios de la Sierra
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Precios orientativos "desde". Todos los importes expresados son <strong>IVA no incluido</strong>. La inversión final se ajusta a la dimensión y necesidades específicas de tu zona.
          </p>
        </div>

        {/* Rejilla de Precios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {planes.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.destacado
                  ? 'bg-gray-900 text-white shadow-2xl ring-2 ring-blue-500 scale-105 z-10'
                  : 'bg-white text-gray-900 border border-gray-200 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
                    plan.destacado ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {plan.badge}
                </span>

                <h3 className="text-2xl font-bold mb-2">{plan.nombre}</h3>
                <p className={`text-sm mb-6 ${plan.destacado ? 'text-gray-300' : 'text-gray-500'}`}>
                  {plan.descripcion}
                </p>

                <div className="mb-6 pb-6 border-b border-gray-200/50">
                  <div className="text-2xl font-extrabold tracking-tight">{plan.precioAlta}</div>
                  <div className={`text-sm font-medium mt-1 ${plan.destacado ? 'text-blue-300' : 'text-gray-600'}`}>
                    Cuota: {plan.precioMes}
                  </div>
                  <span className="text-[11px] text-gray-400 block mt-1">+ IVA</span>
                </div>

                <ul className="space-y-3 text-sm mb-8">
                  {plan.incluye.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className={plan.destacado ? 'text-blue-400 font-bold' : 'text-green-600 font-bold'}>✓</span>
                      <span className={plan.destacado ? 'text-gray-200' : 'text-gray-700'}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href={plan.href}
                  className={`block text-center w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-colors shadow-sm ${
                    plan.destacado
                      ? 'bg-blue-600 hover:bg-blue-500 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Garantía y llamada a la acción */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-2">¿Tienes dudas sobre cuál encaja con tu negocio?</h3>
          <p className="text-gray-600 text-sm mb-6">
            Te recomendamos empezar siempre por el <strong>Análisis de Zona gratuito</strong>. Te mostraremos las búsquedas reales en tu municipio y te aconsejaremos el paquete adecuado sin ningún compromiso.
          </p>
          <a
            href="/#contacto"
            className="inline-block bg-gray-900 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-sm transition-colors"
          >
            Pedir mi análisis sin coste
          </a>
        </div>
      </div>
    </div>
  );
}
