import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Herramientas Propias de Automatización | Motor Local',
  description: 'Generador de presupuestos en PDF y Asistente de IA para WhatsApp: tecnología propia probada en negocios reales de la Sierra.',
  alternates: {
    canonical: 'https://www.agenciamotorlocal.es/herramientas',
  },
};

export default function HerramientasPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Link href="/" className="text-sm font-semibold text-blue-600 hover:underline mb-4 inline-block">
            &larr; Volver a Motor Local
          </Link>
          <span className="text-blue-600 font-bold uppercase tracking-wider text-xs block mb-2">
            La base tecnológica del plan Dominio Total
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Herramientas que cierran ventas mientras estás en la obra
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            No vendemos software de terceros con comisiones mensuales abusivas. Desarrollamos herramientas propias, ligeras y adaptadas a la operativa real de negocios técnicos y de servicios.
          </p>
        </div>

        {/* Herramienta 1: Generador de Presupuestos en PDF */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              Herramienta 1 • Operativa Diaria
            </span>
            <span className="text-xs text-gray-400 font-semibold">Probado en Reparaciones Manzanares</span>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Generador de Presupuestos en PDF Automatizado
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-bold text-gray-900">¿Qué problema resuelve?</h3>
              <p className="text-sm leading-relaxed">
                El mayor agujero negro de tiempo para un autónomo o instalador es llegar a casa agotado a las 20:00 y ponerse a redactar presupuestos en Word o Excel. Muchos presupuestos se envían tarde, mal presentados o directamente se pierden clientes por tardar 3 días en contestar.
              </p>

              <h3 className="text-lg font-bold text-gray-900 pt-2">¿Para quién es?</h3>
              <p className="text-sm leading-relaxed">
                Empresas de reformas, fontaneros, instaladores de clima, cerrajeros y electricistas que necesitan enviar presupuestos formales, desglosados y con validez legal en el mismo momento de visitar al cliente.
              </p>
            </div>

            {/* Espacio para Captura con marcador */}
            <div className="w-full aspect-[4/3] bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-6 text-center shadow-inner">
              <span className="text-4xl mb-3">📄</span>
              <p className="font-bold text-gray-800 text-sm">[[CAPTURA GENERADOR: Vista de la interfaz móvil del generador de presupuestos o ejemplo de PDF generado para Reparaciones Manzanares]]</p>
              <p className="text-xs text-gray-500 mt-2">Presupuesto con logotipo, partidas y firma digital</p>
            </div>
          </div>

          {/* Cómo funciona en 3 pasos */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mb-8">
            <h3 className="text-base font-bold text-gray-900 mb-4">¿Cómo funciona en 3 pasos?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-1">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm mb-2">1</span>
                <h4 className="font-semibold text-gray-900 text-sm">Seleccionas las partidas</h4>
                <p className="text-xs text-gray-600">Introduces metros, materiales o mano de obra desde un selector táctil en tu propio móvil.</p>
              </div>
              <div className="space-y-1">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm mb-2">2</span>
                <h4 className="font-semibold text-gray-900 text-sm">Generación instantánea</h4>
                <p className="text-xs text-gray-600">El sistema calcula importes, IVA y condiciones legales, maquetando un documento PDF profesional.</p>
              </div>
              <div className="space-y-1">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm mb-2">3</span>
                <h4 className="font-semibold text-gray-900 text-sm">Envío por WhatsApp</h4>
                <p className="text-xs text-gray-600">Envías el enlace al PDF al cliente por WhatsApp antes de arrancar la furgoneta. [[TIEMPO MEDIO DE GENERACIÓN: EJ. MENOS DE 2 MINUTOS]].</p>
              </div>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-blue-600 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-colors shadow-sm"
            >
              Quiero verlo funcionando &rarr;
            </a>
          </div>
        </section>

        {/* Herramienta 2: Asistente Virtual Inteligente de WhatsApp */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              Herramienta 2 • Atención 24/7
            </span>
            <span className="text-xs text-gray-400 font-semibold">Probado en Proyecto Camper</span>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Asistente de IA para WhatsApp y Cualificación de Clientes
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-bold text-gray-900">¿Qué problema resuelve?</h3>
              <p className="text-sm leading-relaxed">
                Los clientes escriben por WhatsApp a cualquier hora: noches, fines de semana y festivos. Responder tarde significa que el cliente busca a otro; responder tú mismo significa no desconectar nunca de tu negocio ni poder cenar tranquilo.
              </p>

              <h3 className="text-lg font-bold text-gray-900 pt-2">¿Para quién es?</h3>
              <p className="text-sm leading-relaxed">
                Clínicas de fisioterapia o dentales que reciben dudas recurrentes sobre citas y seguros, empresas de alquiler/turismo con preguntas sobre condiciones y negocios de averías que necesitan clasificar la gravedad antes de llamar.
              </p>
            </div>

            {/* Espacio para Captura con marcador */}
            <div className="w-full aspect-[4/3] bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-6 text-center shadow-inner">
              <span className="text-4xl mb-3">🤖</span>
              <p className="font-bold text-gray-800 text-sm">[[CAPTURA ASISTENTE: Captura de pantalla de una conversación real de WhatsApp resolviendo dudas y guiando hacia la reserva o cita]]</p>
              <p className="text-xs text-gray-500 mt-2">Interacción fluida entrenada con las respuestas de tu negocio</p>
            </div>
          </div>

          {/* Cómo funciona en 3 pasos */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mb-8">
            <h3 className="text-base font-bold text-gray-900 mb-4">¿Cómo funciona en 3 pasos?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-1">
                <span className="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm mb-2">1</span>
                <h4 className="font-semibold text-gray-900 text-sm">El cliente escribe su duda</h4>
                <p className="text-xs text-gray-600">Pregunta por tarifas, disponibilidad de citas o requisitos directamente en tu WhatsApp.</p>
              </div>
              <div className="space-y-1">
                <span className="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm mb-2">2</span>
                <h4 className="font-semibold text-gray-900 text-sm">Respuesta instantánea</h4>
                <p className="text-xs text-gray-600">El asistente entrenado responde en segundos con el tono exacto de tu negocio sin dar respuestas inventadas.</p>
              </div>
              <div className="space-y-1">
                <span className="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm mb-2">3</span>
                <h4 className="font-semibold text-gray-900 text-sm">Petición de cita en caliente</h4>
                <p className="text-xs text-gray-600">Recoge nombre, servicio requerido y franja horaria, avisándote para que solo tengas que confirmar. [[PORCENTAJE DUDAS RESUELTAS AUTOMÁTICAMENTE]].</p>
              </div>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-amber-600 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-colors shadow-sm"
            >
              Quiero verlo funcionando &rarr;
            </a>
          </div>
        </section>

        {/* Llamada final */}
        <div className="text-center bg-gray-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
            ¿Quieres incluir estas herramientas en tu negocio?
          </h3>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
            Ambas herramientas están integradas dentro de nuestro plan <strong>Dominio Total</strong>, configuradas y adaptadas a medida a la operativa de tu empresa.
          </p>
          <a
            href="/#contacto"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg text-base"
          >
            Quiero verlo funcionando
          </a>
        </div>
      </div>
    </div>
  );
}
