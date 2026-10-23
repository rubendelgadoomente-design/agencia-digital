import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies | Motor Local",
  description: "Información detallada sobre el uso de cookies y tecnologías similares en el sitio web de Motor Local.",
  alternates: {
    canonical: "https://www.agenciamotorlocal.es/politica-de-cookies",
  },
};

export default function PoliticaCookiesPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-slate">
        {/* NOTA: Un abogado debe revisar este texto antes de su aplicación definitiva. */}

        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Política de Cookies</h1>

        <p className="text-sm text-gray-500 mb-8">Última actualización: 21 de octubre de 2026</p>

        <section className="space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-900">1. ¿Qué son las cookies?</h2>
          <p>
            Una cookie es un pequeño archivo de texto que los sitios web descargan en su navegador o dispositivo al navegar. Su finalidad es almacenar y recuperar información sobre los hábitos de navegación del usuario o de su equipo para mejorar la experiencia de usuario y analizar el rendimiento web.
          </p>

          <h2 className="text-xl font-bold text-gray-900">2. Tipos de cookies utilizadas en este sitio web</h2>
          <p>
            De conformidad con la normativa española (art. 22.2 de la LSSI-CE), le informamos sobre las categorías de cookies que pueden instalarse a través de nuestro sitio web:
          </p>

          <h3 className="text-lg font-semibold text-gray-800">A) Cookies técnicas y estrictamente necesarias (Exentas de consentimiento)</h3>
          <p>
            Son aquellas necesarias para el funcionamiento básico del sitio web y no pueden ser desactivadas en nuestros sistemas. Incluyen, por ejemplo, el almacenamiento de su preferencia sobre el consentimiento de cookies (aceptado o rechazado) o el control de tráfico y seguridad.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">B) Cookies de análisis o medición (Requieren su consentimiento)</h3>
          <p>
            Son aquellas que nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico del uso que hacen los usuarios de nuestra web (páginas más vistas, tiempo de navegación, fuentes de tráfico). 
          </p>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm">
            <p><strong>Proveedor:</strong> Google LLC (cookies <code>_ga</code> y <code>_ga_&lt;ID&gt;</code> de Google Analytics 4)</p>
            <p><strong>Finalidad:</strong> Medición analítica anónima y eventos de navegación.</p>
            <p><strong>Duración:</strong> Máximo 2 años.</p>
            <p><strong>Condición:</strong> <em>No se cargan ni instalan en su navegador a menos que usted pulse expresamente el botón &quot;Aceptar&quot; en nuestro banner de cookies.</em></p>
          </div>

          <h2 className="text-xl font-bold text-gray-900">3. Gestión y Configuración del Consentimiento</h2>
          <p>
            Al entrar por primera vez a nuestro sitio web, se le muestra un banner donde puede <strong>Aceptar todas las cookies</strong> o <strong>Rechazar cookies no necesarias</strong> con la misma facilidad y en un solo clic.
          </p>
          <p>
            Asimismo, usted puede en cualquier momento restringir, bloquear o borrar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador que utilice:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
            <li><strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad y Seguridad &gt; Cookies y datos del sitio.</li>
            <li><strong>Safari:</strong> Preferencias &gt; Privacidad.</li>
            <li><strong>Microsoft Edge:</strong> Configuración &gt; Permisos del sitio &gt; Cookies y datos del sitio.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900">4. Contacto</h2>
          <p>
            Si tiene alguna duda sobre el uso de cookies en nuestro sitio web, puede dirigirse a <a href="mailto:hola@agenciamotorlocal.es" className="text-blue-600 hover:underline">hola@agenciamotorlocal.es</a>.
          </p>
        </section>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <Link href="/" className="text-blue-600 hover:underline font-semibold text-sm">
            &larr; Volver a la portada de Motor Local
          </Link>
        </div>
      </div>
    </div>
  );
}
