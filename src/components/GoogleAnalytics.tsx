'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

export function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);
  const gaId = process.env.NEXT_PUBLIC_GA4_ID;

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem('cookie_consent');
      if (consent === 'accepted') {
        setHasConsent(true);
      } else {
        setHasConsent(false);
      }
    };

    checkConsent();
    window.addEventListener('cookie_consent_updated', checkConsent);
    return () => window.removeEventListener('cookie_consent_updated', checkConsent);
  }, []);

  // No cargar nada si no hay ID configurado o si el usuario no ha dado consentimiento
  if (!gaId || !hasConsent) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
              anonymize_ip: true
            });
          `,
        }}
      />
    </>
  );
}
