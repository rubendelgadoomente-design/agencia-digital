'use client';

export function WhatsAppButton() {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_whatsapp', {
        event_category: 'contact',
        event_label: 'floating_button',
      });
    }
  };

  return (
    <aside aria-label="Contacto rápido por WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/34616063682?text=Hola,%20he%20visto%20la%20web%20de%20Motor%20Local%20y%20quiero%20informaci%C3%B3n"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group border-2 border-white/20"
        title="Contactar por WhatsApp"
      >
        <span className="text-xl">💬</span>
        <span className="text-sm hidden sm:inline font-semibold">WhatsApp</span>
      </a>
    </aside>
  );
}
