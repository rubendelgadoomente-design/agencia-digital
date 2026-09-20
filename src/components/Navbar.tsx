import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-2xl tracking-tighter">
          <span className="text-blue-600">Motor</span>
          <span className="text-gray-900">Local</span>
        </Link>
        
        <nav className="hidden md:flex gap-8 font-medium text-gray-600 text-sm">
          <Link href="/#casos-exito" className="hover:text-blue-600 transition-colors">Casos de Éxito</Link>
          <Link href="/#sectores" className="hover:text-blue-600 transition-colors">Sectores</Link>
          <Link href="/#saas" className="hover:text-blue-600 transition-colors">Herramientas SaaS</Link>
        </nav>
        
        <a href="/#contacto" className="bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors shadow-sm">
          Analizar mi zona
        </a>
      </div>
    </header>
  );
}
