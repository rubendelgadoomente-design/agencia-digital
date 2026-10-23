import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '¡Solicitud Recibida! | Motor Local',
  description: 'Hemos recibido tu solicitud de análisis local correctamente.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function GraciasPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-20 px-4">
      <div className="max-w-2xl w-full bg-gray-800/80 border border-gray-700 rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-600 opacity-20 blur-3xl pointer-events-none"></div>

        <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
          ✓
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
          ¡Solicitud recibida correctamente!
        </h1>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Ya tenemos los datos de tu negocio. Hemos iniciado el análisis de posicionamiento de tu zona y competidores.
        </p>

        <div className="bg-gray-900/70 border border-gray-700/80 rounded-2xl p-6 mb-8 text-left space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span>📋</span> ¿Qué va a pasar a continuación?
          </h2>
          <ol className="list-decimal pl-5 space-y-3 text-sm text-gray-300">
            <li>
              <strong>Auditoría previa (próximas horas):</strong> Analizamos tu ficha de Google Maps, tu web actual (si tienes) y los 3 competidores que más llamadas se están llevando en tu municipio.
            </li>
            <li>
              <strong>Llamada directa:</strong> Te llamaremos en menos de 24 horas laborables para enseñarte los resultados y decirte con total franqueza si podemos ayudarte a dominar tu zona.
            </li>
            <li>
              <strong>Sin compromiso:</strong> El análisis es 100% gratuito. Si no vemos encaje, te lo diremos directamente.
            </li>
          </ol>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-gray-400">
            ¿Tienes prisa o quieres comentar algún detalle urgente sobre tu negocio?
          </p>
          <a
            href="https://wa.me/34616063682?text=Hola,%20acabo%20de%20enviar%20el%20formulario%20en%20Motor%20Local%20para%20el%20an%C3%A1lisis%20de%20mi%20zona"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 px-8 rounded-xl transition-colors shadow-lg"
          >
            <span>💬</span> Hablar por WhatsApp ahora con Rubén Delgado (616 06 36 82)
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700">
          <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
            &larr; Volver a la portada de Motor Local
          </Link>
        </div>
      </div>
    </div>
  );
}
