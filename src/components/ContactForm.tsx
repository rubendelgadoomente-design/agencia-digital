'use client';

import { useState, useTransition, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    setStatus('idle');
    startTransition(async () => {
      try {
        const payload = {
          access_key: "8579a69c-e7a0-412b-9679-46792d42e9b3",
          subject: `🔥 NUEVO LEAD CUALIFICADO: ${formData.get('nombre')} (${formData.get('municipio')})`,
          from_name: "Motor Local Web",
          "Nombre del Cliente": formData.get('nombre'),
          "Teléfono": formData.get('telefono'),
          "Email": formData.get('email'),
          "Municipio": formData.get('municipio'),
          "Problema Principal": formData.get('cuello'),
          "Capacidad de Inversión": formData.get('inversion'),
        };

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        
        const result = await response.json();
        
        if (result.success) {
          setStatus('success');
          // Disparar evento de conversión GA4 SOLO tras confirmación de éxito de Web3Forms
          if (typeof window !== 'undefined') {
            if ((window as any).gtag) {
              (window as any).gtag('event', 'generate_lead', {
                event_category: 'engagement',
                event_label: formData.get('municipio') || 'general',
              });
            }
            window.dispatchEvent(new CustomEvent('generate_lead', { detail: { municipio: formData.get('municipio') } }));
          }

          formRef.current?.reset();
          router.push('/gracias');
        } else {
          setStatus('error');
          setErrorMsg('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo o contáctanos por WhatsApp.');
        }
      } catch (error) {
        setStatus('error');
        setErrorMsg('Fallo de conexión. Por favor revisa tu internet o escríbenos directamente.');
      }
    });
  };

  return (
    <section id="contacto" className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Efecto visual de fondo */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-600 opacity-20 blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 text-center mb-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">¿Preparado para dominar tu zona?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Analizamos tu negocio sin compromiso para ver si realmente podemos ayudarte a captar más clientes en la Sierra de Madrid. Rellena el formulario y te llamaremos.
            </p>
          </div>

          <form ref={formRef} action={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Nombre o Empresa *</label>
              <input
                required
                name="nombre"
                type="text"
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="Ej: Reformas García / Clínica Dental Soto"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Teléfono *</label>
              <input
                required
                name="telefono"
                type="tel"
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="Ej: 600 000 000"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Correo Electrónico *</label>
              <input
                required
                name="email"
                type="email"
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Municipio de actividad *</label>
              <input
                required
                name="municipio"
                type="text"
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="Ej: Manzanares el Real, Colmenar Viejo, Villalba..."
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-300">¿Cuál es tu mayor cuello de botella ahora mismo? *</label>
              <select
                required
                name="cuello"
                defaultValue=""
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none"
              >
                <option value="" disabled>Selecciona tu problema principal...</option>
                <option value="No tengo visibilidad en mi zona (Falta de llamadas)">No tengo visibilidad en mi zona (Falta de llamadas)</option>
                <option value="Pierdo mucho tiempo haciendo presupuestos a mano">Pierdo mucho tiempo haciendo presupuestos a mano</option>
                <option value="Necesito filtrar clientes baratos y automatizar atención">Necesito filtrar clientes baratos y automatizar atención</option>
                <option value="Quiero el ecosistema digital completo">Quiero el ecosistema digital completo</option>
              </select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-300">Nivel de inversión estimado para tu negocio *</label>
              <select
                required
                name="inversion"
                defaultValue=""
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none"
              >
                <option value="" disabled>Selecciona tu capacidad de inversión...</option>
                <option value="Menos de 1.000 € (Arranque Local)">Menos de 1.000 € (paquete Arranque Local)</option>
                <option value="1.000 € – 3.000 € (Ecosistema Local)">1.000 € – 3.000 € (Ecosistema Local)</option>
                <option value="Más de 3.000 € (Dominio Total y SaaS a medida)">Más de 3.000 € (Dominio Total y SaaS a medida)</option>
              </select>
            </div>

            {/* Casilla de aceptación RGPD obligatoria sin marcar */}
            <div className="md:col-span-2 pt-2">
              <label className="flex items-start gap-3 cursor-pointer text-sm text-gray-300">
                <input
                  required
                  type="checkbox"
                  name="politica_privacidad"
                  className="mt-1 w-4 h-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500 focus:ring-2 shrink-0 cursor-pointer"
                />
                <span>
                  He leído y acepto la{' '}
                  <Link href="/politica-de-privacidad" target="_blank" className="text-blue-400 underline hover:text-blue-300">
                    política de privacidad
                  </Link>
                  . *
                </span>
              </label>
            </div>

            {status === 'error' && (
              <div className="md:col-span-2 text-red-400 text-sm bg-red-900/20 p-4 rounded-lg border border-red-800">
                {errorMsg}
              </div>
            )}

            <div className="md:col-span-2 mt-2">
              <button
                disabled={isPending}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg text-lg"
              >
                {isPending ? 'Procesando tu solicitud...' : 'Solicitar Análisis de mi Zona'}
              </button>
              <p className="text-xs text-gray-400 text-center mt-4">
                Te llamaremos en menos de 24 horas laborables para enseñarte el análisis de tu zona.
              </p>
            </div>

            {/* Información básica de protección de datos (Primera Capa RGPD) */}
            <div className="md:col-span-2 mt-6 pt-6 border-t border-gray-800 text-[11px] text-gray-400 leading-relaxed space-y-1 bg-gray-950/40 p-4 rounded-xl">
              <p className="font-semibold text-gray-300 text-xs mb-1">Información básica sobre protección de datos:</p>
              <p><strong>Responsable:</strong> Rubén Delgado Omente (Motor Local).</p>
              <p><strong>Finalidad:</strong> Atender su solicitud de contacto y remitirle el análisis de posicionamiento local de su zona.</p>
              <p><strong>Legitimación:</strong> Consentimiento del interesado (art. 6.1.a RGPD) al enviar este formulario.</p>
              <p><strong>Destinatarios:</strong> Encargado de tratamiento Web3Forms (plataforma técnica de recepción de formularios). Web3Forms puede tratar los datos fuera del EEE con cláusulas contractuales tipo.</p>
              <p><strong>Derechos:</strong> Acceder, rectificar y suprimir los datos, así como otros derechos explicados en la{' '}
                <Link href="/politica-de-privacidad" target="_blank" className="text-blue-400 underline">
                  Política de Privacidad
                </Link>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
