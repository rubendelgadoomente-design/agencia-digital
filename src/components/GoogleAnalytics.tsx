'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

export function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);
  const gaId = "[[GA4_ID]]";

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

  // No cargar nada si el usuario no ha dado consentimiento expreso
  if (!hasConsent || !gaId || gaId.includes('GA4_ID')) {
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
