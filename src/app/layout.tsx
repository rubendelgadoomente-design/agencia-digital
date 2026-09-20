import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistemas de Captación para Negocios Locales | Motor Local",
  description: "Ecosistemas digitales, SEO Local y herramientas de presupuestos para empresas de reformas, instalaciones y servicios locales.",
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
      </body>
    </html>
  );
}
