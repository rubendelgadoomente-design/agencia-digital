'use client';
import { useState, useTransition, useRef } from 'react';
import { submitLead } from '@/actions/contact';

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    setStatus('idle');
    startTransition(async () => {
      try {
        const payload = {
          access_key: "8579a69c-e7a0-412b-9679-46792d42e9b3",
          subject: `🔥 NUEVO LEAD CUALIFICADO: ${formData.get('nombre')}`,
          from_name: "Motor Local Web",
          "Nombre del Cliente": formData.get('nombre'),
          "Teléfono": formData.get('telefono'),
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
          formRef.current?.reset();
        } else {
          setStatus('error');
          setErrorMsg('Hubo un error al enviar. Inténtalo de nuevo.');
        }
      } catch (error) {
        setStatus('error');
        setErrorMsg('Fallo de conexión. Por favor revisa tu internet.');
      }
    });
  };

  return (
    <section id="contacto" className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Efecto visual de fondo */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-600 opacity-20 blur-3xl"></div>
          
          <div className="relative z-10 text-center mb-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">¿Preparado para dominar tu zona?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              No trabajamos con cualquiera. Analizamos tu caso sin compromiso para ver si realmente podemos multiplicar tu facturación. Rellena el formulario y nosotros te llamaremos.
            </p>
          </div>

          {status === 'success' ? (
            <div className="relative z-10 bg-green-900/40 border border-green-500/50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-2">¡Solicitud Recibida!</h3>
              <p className="text-green-200">Hemos registrado tu perfil correctamente. Un analista revisará tus datos y, si vemos encaje para multiplicar tus ventas, te llamaremos al número indicado en las próximas 48h.</p>
              <button onClick={() => setStatus('idle')} className="mt-6 text-sm text-gray-400 underline hover:text-white">Volver al formulario</button>
            </div>
          ) : (
            <form ref={formRef} action={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Nombre o Empresa</label>
                <input required name="nombre" type="text" className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="Ej: Reformas García" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Teléfono (Te llamaremos nosotros)</label>
                <input required name="telefono" type="tel" className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="Ej: 600 000 000" />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-gray-300">¿Cuál es tu mayor cuello de botella ahora mismo?</label>
                <select required name="cuello" defaultValue="" className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none">
                  <option value="" disabled>Selecciona tu problema principal...</option>
                  <option value="No tengo visibilidad en mi zona (Falta de llamadas)">No tengo visibilidad en mi zona (Falta de llamadas)</option>
                  <option value="Pierdo mucho tiempo haciendo presupuestos a mano">Pierdo mucho tiempo haciendo presupuestos a mano</option>
                  <option value="Necesito filtrar clientes baratos y automatizar atención">Necesito filtrar clientes baratos y automatizar atención</option>
                  <option value="Quiero el ecosistema digital completo">Quiero el ecosistema digital completo</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-gray-300">Nivel de inversión para tu negocio</label>
                <select required name="inversion" defaultValue="" className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none">
                  <option value="" disabled>Selecciona tu capacidad de inversión...</option>
                  <option value="Menos de 1.000€ (Alta probabilidad de rechazo)">Menos de 1.000€ (No recomendado - Alta probabilidad de rechazo)</option>
                  <option value="1.000€ - 3.000€ (Ecosistema Local Avanzado)">1.000€ - 3.000€ (Ecosistema Local Avanzado)</option>
                  <option value="Más de 3.000€ (Dominio Total y SaaS a medida)">Más de 3.000€ (Dominio Total y SaaS a medida)</option>
                </select>
              </div>

              {status === 'error' && (
                <div className="md:col-span-2 text-red-400 text-sm bg-red-900/20 p-3 rounded-lg">
                  {errorMsg}
                </div>
              )}

              <div className="md:col-span-2 mt-4">
                <button disabled={isPending} type="submit" className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg text-lg">
                  {isPending ? 'Procesando tu perfil...' : 'Solicitar Análisis de mi Negocio'}
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Al enviar aceptas que nuestro equipo revise tu caso. Si vemos potencial de crecimiento, te contactaremos.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
