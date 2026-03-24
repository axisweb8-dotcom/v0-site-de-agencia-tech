import Link from "next/link"
import { Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Axis Web
              </span>
            </Link>
            <p className="text-zinc-400 max-w-sm mb-6 leading-relaxed">
              Criamos sites estratégicos que transformam visitantes em clientes. Especialistas em conversão e design de alta performance.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#servicos" className="text-zinc-400 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#processo" className="text-zinc-400 hover:text-white transition-colors">
                  Processo
                </Link>
              </li>
              <li>
                <Link href="#resultados" className="text-zinc-400 hover:text-white transition-colors">
                  Resultados
                </Link>
              </li>
              <li>
                <Link href="#depoimentos" className="text-zinc-400 hover:text-white transition-colors">
                  Depoimentos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="text-zinc-400">
                contato@axisweb.com.br
              </li>
              <li className="text-zinc-400">
                (11) 99999-9999
              </li>
              <li className="text-zinc-400">
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © 2024 Axis Web. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
