import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quién Soy | Motor Local - Rubén Delgado',
  description: 'Conoce a la persona detrás de Motor Local: sistemas de captación probados en mi propia empresa de reparaciones en la Sierra de Madrid.',
  alternates: {
    canonical: 'https://www.agenciamotorlocal.es/quien-soy',
  },
};

export default function QuienSoyPage() {
  return (
    <div className="bg-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <Link href="/" className="text-sm font-semibold text-blue-600 hover:underline">
            &larr; Volver a la portada de Motor Local
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Columna Foto */}
          <div className="md:col-span-1">
            {/* Foto pendiente: public/ruben.jpg */}
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-sm text-gray-600 space-y-3">
              <p><strong>Fundador:</strong> Rubén Delgado</p>
              <p><strong>Base:</strong> Manzanares el Real (Madrid)</p>
              <p><strong>Negocio propio:</strong> Reparaciones Manzanares</p>
              <p><strong>Especialidad:</strong> SEO Local y Automatización</p>
            </div>
          </div>

          {/* Columna Historia y Manifiesto */}
          <div className="md:col-span-2 space-y-6 text-gray-700 leading-relaxed text-lg">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs block">
              La persona detrás de Motor Local
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Sin corbata, sin humo de agencia: probado en mi propio negocio.
            </h1>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl text-gray-800 font-medium">
              &quot;Soy Rubén Delgado y tengo una empresa de reparaciones en Manzanares el Real, Reparaciones Manzanares. Cuando empecé, dependía del boca a boca. Monté para mi propio negocio un sistema de posicionamiento local y un generador de presupuestos, y empezamos a recibir llamadas cada semana. Motor Local nace para hacer lo mismo con otros oficios y clínicas de la Sierra de Madrid: con sistemas probados en un negocio real, no con promesas.&quot;
            </div>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">¿Por qué confiar en Motor Local?</h2>
            
            <p>
              Sé exactamente lo que siente un autónomo o el responsable de una clínica en la Sierra:
            </p>
            <ul className="space-y-3 pl-2 text-base">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg">✓</span>
                <span><strong>Sé lo que cuesta cada llamada:</strong> Conozco el día a día de las urgencias, los desplazamientos por la M-607 y la M-608 y el tiempo perdido haciendo presupuestos que luego no se cierran.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg">✓</span>
                <span><strong>No experimento con tu dinero:</strong> Todo lo que ofrecemos en Motor Local (la ficha de Google Maps, el SEO local, el generador de presupuestos en PDF y los asistentes automáticos) lo he programado, probado y validado primero en mi propia empresa de reparaciones y en proyectos reales.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg">✓</span>
                <span><strong>Trato directo de vecino a vecino:</strong> Vivo y trabajo aquí en Manzanares el Real. Si surge cualquier duda, podemos vernos o hablar directamente por teléfono sin pasar por comerciales intermediarios.</span>
              </li>
            </ul>

            <div className="pt-8">
              <a
                href="/#contacto"
                className="inline-block bg-gray-900 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg text-base"
              >
                Solicitar análisis gratuito de mi zona &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
