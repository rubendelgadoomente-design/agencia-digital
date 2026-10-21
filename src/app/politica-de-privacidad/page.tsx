import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Motor Local",
  description: "Información detallada sobre el tratamiento de datos personales conforme al Reglamento General de Protección de Datos (RGPD) y la LOPDGDD.",
  alternates: {
    canonical: "https://www.agenciamotorlocal.es/politica-de-privacidad",
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 text-sm text-amber-800">
          <strong>Aviso legal importante:</strong> Texto redactado conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD). [[NOTA: UN ABOGADO DEBE REVISAR ESTE TEXTO ANTES DE SU APLICACIÓN DEFINITIVA]].
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Política de Privacidad</h1>

        <p className="text-sm text-gray-500 mb-8">Última actualización: 21 de octubre de 2026</p>

        <section className="space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-900">1. Responsable del Tratamiento de sus Datos</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Identidad:</strong> [[NOMBRE O RAZÓN SOCIAL]] (Motor Local)</li>
            <li><strong>NIF/CIF:</strong> [[NIF]]</li>
            <li><strong>Dirección postal:</strong> [[DIRECCIÓN]] (Madrid, España)</li>
            <li><strong>Correo electrónico de contacto:</strong> [[EMAIL]]</li>
            <li><strong>Teléfono de contacto:</strong> [[TELÉFONO]]</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900">2. Finalidad del Tratamiento de los Datos</h2>
          <p>
            Tratamos la información que nos facilitan los usuarios interesados con las siguientes finalidades:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Gestión de solicitudes de contacto y análisis de negocio:</strong> Dar respuesta a las peticiones de información comercial, realizar el análisis preliminar de posicionamiento local de su zona o municipio y coordinar una llamada de asesoramiento en menos de 24 horas laborables.
            </li>
            <li>
              <strong>Comunicaciones comerciales y seguimiento:</strong> Remitir propuestas de presupuesto, presupuestos formalizados y novedades relativas a los servicios contratados cuando exista una relación contractual previa o consentimiento explícito.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900">3. Legitimación para el Tratamiento</h2>
          <p>
            La base jurídica que legitima el tratamiento de sus datos es el <strong>consentimiento explícito del interesado</strong> (artículo 6.1.a del RGPD), otorgado mediante la marcación afirmativa e informada de la casilla de aceptación de la política de privacidad en nuestro formulario de contacto.
          </p>

          <h2 className="text-xl font-bold text-gray-900">4. Destinatarios y Encargados del Tratamiento</h2>
          <p>
            No se cederán datos personales a terceros, salvo obligación legal expresa. Para la correcta prestación técnica del servicio, contamos con los siguientes proveedores en calidad de encargados del tratamiento:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Web3Forms:</strong> Proveedor tecnológico utilizado para el procesamiento y reenvío seguro de los datos consignados en el formulario web hacia nuestro buzón de correo. [[REVISAR TRANSFERENCIA INTERNACIONAL WEB3FORMS: Confirmar si Web3Forms procesa datos dentro del EEE o en EE.UU. bajo el marco Data Privacy Framework (DPF) o cláusulas contractuales tipo]].
            </li>
            <li>
              <strong>Vercel Inc.:</strong> Proveedor de infraestructura y alojamiento web de alto rendimiento.
            </li>
            <li>
              <strong>Google LLC (Google Analytics 4):</strong> Herramienta de analítica estadística web, cargada únicamente tras el consentimiento expreso del usuario a través del banner de cookies.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900">5. Plazo de Conservación de los Datos</h2>
          <p>
            Los datos personales proporcionados se conservarán durante el tiempo estrictamente necesario para atender la solicitud comercial y, posteriormente, durante los plazos legalmente exigibles para la prescripción de posibles responsabilidades legales.
          </p>

          <h2 className="text-xl font-bold text-gray-900">6. Derechos de los Usuarios</h2>
          <p>
            El usuario tiene derecho a obtener confirmación sobre si en Motor Local estamos tratando datos personales que le conciernen y a ejercer sus derechos de:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Acceso a sus datos personales.</li>
            <li>Rectificación de datos inexactos o incompletos.</li>
            <li>Supresión (derecho al olvido) cuando los datos ya no sean necesarios para los fines que fueron recogidos.</li>
            <li>Limitación del tratamiento.</li>
            <li>Oposición al tratamiento de sus datos.</li>
            <li>Portabilidad de los datos.</li>
          </ul>
          <p>
            Para ejercer estos derechos, puede remitir una solicitud por escrito acompañada de una copia de su documento de identidad a [[EMAIL]] indicando en el asunto "Protección de Datos". Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD, <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.aepd.es</a>) si considera vulnerados sus derechos.
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
