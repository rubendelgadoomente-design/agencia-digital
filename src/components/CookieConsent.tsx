'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);
    window.dispatchEvent(new Event('cookie_consent_updated'));
  };

  const handleReject = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    setShowBanner(false);
    window.dispatchEvent(new Event('cookie_consent_updated'));
  };

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentimiento de cookies"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-gray-900/95 backdrop-blur-md border-t border-gray-800 text-white shadow-2xl transition-all"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300 max-w-3xl leading-relaxed">
          <p>
            Utilizamos cookies técnicas necesarias para el funcionamiento del sitio y, si nos das tu consentimiento, cookies analíticas anónimas (Google Analytics 4) para medir el tráfico y mejorar la web. Puedes aceptar o rechazar las cookies no técnicas con la misma facilidad. Consulta nuestra{' '}
            <Link href="/politica-de-cookies" className="text-blue-400 underline hover:text-blue-300">
              Política de Cookies
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
          <button
            onClick={handleReject}
            type="button"
            className="flex-1 md:flex-initial px-5 py-2.5 rounded-lg border border-gray-600 text-sm font-semibold text-gray-200 hover:bg-gray-800 transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={handleAccept}
            type="button"
            className="flex-1 md:flex-initial px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm font-bold text-white transition-colors shadow-sm"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}
