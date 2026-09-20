import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <span className="font-extrabold text-3xl tracking-tighter text-white mb-6 block">
            <span className="text-blue-600">Motor</span>Local
          </span>
          <p className="text-base text-gray-400 max-w-sm mb-6">
            Construimos infraestructuras digitales para negocios locales que quieren dejar de perseguir clientes y empezar a automatizar sus ventas.
          </p>
          <p className="text-sm font-semibold text-gray-500">
            Especialistas en captación B2B y B2C local.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Sectores</h4>
          <ul className="space-y-3 text-sm font-medium">
            <li><Link href="/sectores/reformas" className="hover:text-blue-400 transition-colors">Empresas de Reformas</Link></li>
            <li><Link href="/sectores/fontaneria" className="hover:text-blue-400 transition-colors">Fontaneros</Link></li>
            <li><Link href="/sectores/instalaciones" className="hover:text-blue-400 transition-colors">Instaladores</Link></li>
            <li><Link href="/sectores/clinicas" className="hover:text-blue-400 transition-colors">Clínicas Locales</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Agencia</h4>
          <ul className="space-y-3 text-sm font-medium">
            <li><Link href="/#casos-exito" className="hover:text-blue-400 transition-colors">Sistemas Implementados</Link></li>
            <li><Link href="/#contacto" className="hover:text-blue-400 transition-colors">Solicitar Análisis</Link></li>
            <li><Link href="#" className="hover:text-blue-400 transition-colors">Aviso Legal y Privacidad</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 mt-16 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Motor Local. Todos los derechos reservados.</p>
        <p>Sistemas de Alta Conversión</p>
      </div>
    </footer>
  );
}
