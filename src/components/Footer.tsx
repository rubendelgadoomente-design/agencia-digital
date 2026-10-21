'use client';

import Link from 'next/link';

export function Footer() {
  const trackContact = (type: 'tel' | 'whatsapp') => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', type === 'tel' ? 'click_tel' : 'click_whatsapp', {
        event_category: 'footer_contact',
      });
    }
  };

  return (
    <footer className="bg-gray-950 text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Columna 1: Marca y Propuesta */}
        <div className="md:col-span-1">
          <span className="font-extrabold text-3xl tracking-tighter text-white mb-4 block">
            <span className="text-blue-600">Motor</span>Local
          </span>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            Captación de clientes, SEO local y herramientas automatizadas para oficios y clínicas de la Sierra de Madrid. Probado en mi propio negocio.
          </p>
          <div className="text-xs text-gray-500 space-y-1">
            <p><strong>Ubicación:</strong> Manzanares el Real (Madrid)</p>
            <p><strong>Cobertura:</strong> Comarca Sierra de Guadarrama</p>
          </div>
        </div>

        {/* Columna 2: Contacto Directo */}
        <div>
          <h4 className="text-white font-bold mb-4 text-base">Contacto Directo</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="tel:[[TELÉFONO]]"
                onClick={() => trackContact('tel')}
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <span>📞</span> [[TELÉFONO]]
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/34XXXXXXXXX?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20Motor%20Local"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContact('whatsapp')}
                className="hover:text-green-400 transition-colors flex items-center gap-2"
              >
                <span>💬</span> WhatsApp [[WHATSAPP]]
              </a>
            </li>
            <li>
              <a
                href="mailto:[[EMAIL]]"
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <span>✉️</span> [[EMAIL]]
              </a>
            </li>
          </ul>
        </div>
        
        {/* Columna 3: Sectores */}
        <div>
          <h4 className="text-white font-bold mb-4 text-base">Sectores</h4>
          <ul className="space-y-2.5 text-sm font-medium">
            <li><Link href="/sectores/reformas" className="hover:text-blue-400 transition-colors">Empresas de Reformas</Link></li>
            <li><Link href="/sectores/fontaneria" className="hover:text-blue-400 transition-colors">Fontaneros</Link></li>
            <li><Link href="/sectores/instalaciones" className="hover:text-blue-400 transition-colors">Instaladores</Link></li>
            <li><Link href="/sectores/clinicas" className="hover:text-blue-400 transition-colors">Clínicas Locales</Link></li>
          </ul>
        </div>
        
        {/* Columna 4: Navegación y Legal */}
        <div>
          <h4 className="text-white font-bold mb-4 text-base">Agencia y Legal</h4>
          <ul className="space-y-2.5 text-sm font-medium">
            <li><Link href="/quien-soy" className="hover:text-blue-400 transition-colors">Quién Soy</Link></li>
            <li><Link href="/herramientas" className="hover:text-blue-400 transition-colors">Herramientas SaaS</Link></li>
            <li><Link href="/precios" className="hover:text-blue-400 transition-colors">Planes y Precios</Link></li>
            <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
            <li className="pt-2 border-t border-gray-800/80"><Link href="/aviso-legal" className="text-xs text-gray-400 hover:text-white transition-colors">Aviso Legal</Link></li>
            <li><Link href="/politica-de-privacidad" className="text-xs text-gray-400 hover:text-white transition-colors">Política de Privacidad</Link></li>
            <li><Link href="/politica-de-cookies" className="text-xs text-gray-400 hover:text-white transition-colors">Política de Cookies</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Motor Local. [[NOMBRE O RAZÓN SOCIAL]] - NIF: [[NIF]]. Todos los derechos reservados.</p>
        <p>Sistemas de Captación Local • Sierra de Madrid</p>
      </div>
    </footer>
  );
}
