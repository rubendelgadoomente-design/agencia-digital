'use server';

export async function submitLead(formData: FormData) {
  const nombre = formData.get('nombre');
  const telefono = formData.get('telefono');
  const cuello = formData.get('cuello');
  const inversion = formData.get('inversion');

  // Validaciones básicas de seguridad
  if (!nombre || !telefono || !cuello || !inversion) {
    return { success: false, error: "Faltan campos obligatorios por rellenar." };
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: "8579a69c-e7a0-412b-9679-46792d42e9b3",
        subject: `🔥 NUEVO LEAD CUALIFICADO: ${nombre}`,
        from_name: "Motor Local Automations",
        "Nombre del Cliente": nombre,
        "Teléfono": telefono,
        "Problema Principal": cuello,
        "Capacidad de Inversión": inversion,
      })
    });

    const result = await response.json();
    
    if (result.success) {
      return { success: true };
    } else {
      console.error("Web3Forms Error:", result);
      return { success: false, error: 'Hubo un error en el envío. Inténtalo de nuevo.' };
    }
  } catch (error) {
    console.error("Critical Error:", error);
    return { success: false, error: 'Fallo crítico en el servidor.' };
  }
}
