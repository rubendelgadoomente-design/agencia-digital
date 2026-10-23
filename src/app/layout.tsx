import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agenciamotorlocal.es"),
  title: {
    default: "Agencia de captación local en la Sierra de Madrid | Motor Local",
    template: "%s | Motor Local",
  },
  description: "SEO local, Google Maps y webs que convierten para oficios y clínicas de Colmenar Viejo, Soto del Real, Manzanares, Moralzarzal y Collado Villalba.",
  alternates: {
    canonical: "https://www.agenciamotorlocal.es",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.agenciamotorlocal.es",
    siteName: "Motor Local",
    title: "Agencia de captación local en la Sierra de Madrid | Motor Local",
    description: "SEO local, Google Maps y webs que convierten para oficios y clínicas de Colmenar Viejo, Soto del Real, Manzanares, Moralzarzal y Collado Villalba. Análisis de tu zona gratis.",
    // TODO og-image.jpg 1200x630
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencia de captación local en la Sierra de Madrid | Motor Local",
    description: "SEO local, Google Maps y webs que convierten para oficios y clínicas de la Sierra de Madrid.",
    // TODO og-image.jpg 1200x630
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gray-50 text-slate-900">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
