'use client';

import Link from "next/link";

export function Navbar() {
  const trackContact = (type: 'tel' | 'whatsapp') => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', type === 'tel' ? 'click_tel' : 'click_whatsapp', {
        event_category: 'header_contact',
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
      {/* Barra superior de contacto rápido visible */}
      <div className="bg-gray-900 text-gray-300 text-xs py-1.5 px-4 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <span className="text-gray-400 hidden sm:inline">
            📍 Sierra de Madrid (Manzanares el Real, Soto, Colmenar, Villalba)
          </span>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="tel:[[TELÉFONO]]"
              onClick={() => trackContact('tel')}
              className="hover:text-blue-400 transition-colors flex items-center gap-1 font-medium"
            >
              <span>📞</span> [[TELÉFONO]]
            </a>
            <a
              href="https://wa.me/34XXXXXXXXX?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20Motor%20Local"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContact('whatsapp')}
              className="hover:text-green-400 transition-colors flex items-center gap-1 font-medium"
            >
              <span>💬</span> WhatsApp [[WHATSAPP]]
            </a>
            <a
              href="mailto:[[EMAIL]]"
              className="hover:text-blue-400 transition-colors hidden md:flex items-center gap-1"
            >
              <span>✉️</span> [[EMAIL]]
            </a>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-2xl tracking-tighter">
          <span className="text-blue-600">Motor</span>
          <span className="text-gray-900">Local</span>
        </Link>
        
        <nav className="hidden md:flex gap-7 font-medium text-gray-600 text-sm">
          <Link href="/quien-soy" className="hover:text-blue-600 transition-colors">Quién Soy</Link>
          <Link href="/#casos-exito" className="hover:text-blue-600 transition-colors">Casos de Éxito</Link>
          <Link href="/#sectores" className="hover:text-blue-600 transition-colors">Sectores</Link>
          <Link href="/herramientas" className="hover:text-blue-600 transition-colors">Herramientas</Link>
          <Link href="/precios" className="hover:text-blue-600 transition-colors">Precios</Link>
        </nav>
        
        <a href="/#contacto" className="bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors shadow-sm">
          Analizar mi zona
        </a>
      </div>
    </header>
  );
}
