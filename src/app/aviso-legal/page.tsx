import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal | Motor Local",
  description: "Aviso legal e información identificativa sobre el titular de Motor Local de conformidad con la LSSI-CE.",
  alternates: {
    canonical: "https://www.agenciamotorlocal.es/aviso-legal",
  },
};

export default function AvisoLegalPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8 text-sm text-amber-800">
          <strong>Aviso legal importante:</strong> Este texto es una plantilla estándar conforme a la LSSI-CE y la normativa española aplicable a servicios de marketing digital y desarrollo web. [[NOTA: UN ABOGADO DEBE REVISAR ESTE TEXTO ANTES DE SU APLICACIÓN DEFINITIVA]].
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Aviso Legal</h1>

        <p className="text-sm text-gray-500 mb-8">Última actualización: 21 de octubre de 2026</p>

        <section className="space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-900">1. Datos Identificativos del Responsable</h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios de los datos identificativos del titular de este sitio web:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Titular / Razón Social:</strong> [[NOMBRE O RAZÓN SOCIAL]]</li>
            <li><strong>NIF/CIF:</strong> [[NIF]]</li>
            <li><strong>Domicilio de actividad:</strong> [[DIRECCIÓN]] (Sierra de Madrid, España)</li>
            <li><strong>Correo electrónico de contacto:</strong> [[EMAIL]]</li>
            <li><strong>Teléfono de contacto:</strong> [[TELÉFONO]]</li>
            <li><strong>Nombre comercial:</strong> Motor Local</li>
            <li><strong>Dominio web:</strong> https://www.agenciamotorlocal.es</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900">2. Objeto y Ámbito de Aplicación</h2>
          <p>
            El presente Aviso Legal regula el acceso, navegación y uso del sitio web <strong>Motor Local</strong>, así como las responsabilidades derivadas de la utilización de sus contenidos (textos, gráficos, códigos, diseños, fotografías y software).
          </p>
          <p>
            El acceso o utilización del sitio web atribuye la condición de Usuario, implicando la adhesión plena y sin reservas a todas y cada una de las condiciones publicadas en el momento en que se acceda al mismo.
          </p>

          <h2 className="text-xl font-bold text-gray-900">3. Condiciones de Uso del Sitio Web</h2>
          <p>
            El Usuario se compromete a hacer un uso diligente, lícito y conforme a la buena fe y al orden público del sitio web y de los servicios ofrecidos, absteniéndose de utilizar el sitio con fines ilícitos, lesivos de derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar o deteriorar el funcionamiento habitual de la plataforma.
          </p>

          <h2 className="text-xl font-bold text-gray-900">4. Propiedad Intelectual e Industrial</h2>
          <p>
            Todos los contenidos de este sitio web, incluyendo marcas, nombres comerciales, logotipos, código fuente, estructura de navegación, bases de datos y diseños, son titularidad de [[NOMBRE O RAZÓN SOCIAL]] o de terceros que han autorizado expresamente su uso, estando protegidos por la legislación española e internacional sobre propiedad intelectual e industrial.
          </p>

          <h2 className="text-xl font-bold text-gray-900">5. Exclusión de Garantías y Responsabilidad</h2>
          <p>
            El titular no garantiza la total ausencia de interrupciones o errores en el acceso a la web, si bien adoptará todas las medidas técnicas razonables a su alcance para evitarlos y subsanarlos a la mayor brevedad.
          </p>
          <p>
            Asimismo, el titular no se responsabiliza de los contenidos o enlaces externos de terceros que pudieran ser enlazados desde este sitio web, al carecer de control sobre los mismos.
          </p>

          <h2 className="text-xl font-bold text-gray-900">6. Legislación Aplicable y Jurisdicción</h2>
          <p>
            Para la resolución de cualquier controversia o cuestión litigiosa relativa a este sitio web o a las actividades en él desarrolladas, será de aplicación la legislación española vigente, sometiéndose las partes expresamente a la jurisdicción de los Juzgados y Tribunales competentes de [[JURISDICCIÓN / PARTIDO JUDICIAL, EJ: COLMENAR VIEJO O MADRID]].
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
