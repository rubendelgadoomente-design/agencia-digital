'use server';

import { Resend } from 'resend';

// Si no hay API Key configurada, no fallará, solo avisará en consola.
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function submitLead(formData: FormData) {
  const nombre = formData.get('nombre');
  const telefono = formData.get('telefono');
  const cuello = formData.get('cuello');
  const inversion = formData.get('inversion');

  // Validaciones básicas de seguridad
  if (!nombre || !telefono || !cuello || !inversion) {
    return { success: false, error: "Faltan campos obligatorios por rellenar." };
  }

  // 1. MODO DESARROLLO (Si aún no has puesto tu API Key)
  if (!resend) {
    console.log("=========================================");
    console.log("🔥 NUEVO LEAD CUALIFICADO RECIBIDO");
    console.log("=========================================");
    console.log(`Nombre: ${nombre}`);
    console.log(`Teléfono: ${telefono}`);
    console.log(`Problema Principal: ${cuello}`);
    console.log(`Inversión: ${inversion}`);
    console.log("=========================================");
    console.log("(Aviso: No se ha enviado email porque falta RESEND_API_KEY en .env.local)");
    
    // Simulamos un retraso de red de 1.5s para que se vea la animación de carga en la web
    await new Promise(resolve => setTimeout(resolve, 1500));
    return { success: true, message: "Modo Desarrollo: Lead procesado correctamente." };
  }

  // 2. MODO PRODUCCIÓN (Envío de Email Real)
  try {
    const { data, error } = await resend.emails.send({
      from: 'Leads Motor Local <onboarding@resend.dev>', // Email remitente (por defecto de pruebas)
      to: 'tucorreo@gmail.com', // AQUÍ LUEGO PONDREMOS TU EMAIL REAL
      subject: `🔥 NUEVO LEAD CUALIFICADO: ${nombre}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #2563eb;">Nuevo cliente potencial ha solicitado análisis</h2>
          <p><strong>Nombre/Empresa:</strong> ${nombre}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <hr style="margin: 20px 0; border: 1px solid #eee;" />
          <h3>Cualificación del Lead:</h3>
          <p><strong>Problema Principal:</strong> ${cuello}</p>
          <p><strong>Capacidad de Inversión:</strong> ${inversion}</p>
        </div>
      `
    });

    if (error) {
      console.error(error);
      return { success: false, error: 'Hubo un error al enviar el email. Inténtalo de nuevo.' };
    }

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Fallo crítico en el servidor.' };
  }
}
