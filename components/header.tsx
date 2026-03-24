"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Axis Web
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="#servicos" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
              Serviços
            </Link>
            <Link href="#processo" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
              Processo
            </Link>
            <Link href="#resultados" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
              Resultados
            </Link>
            <Link href="#depoimentos" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
              Depoimentos
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-zinc-400 hover:text-white">
              Contato
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Solicitar Orçamento
            </Button>
          </div>

          <button
            className="lg:hidden text-zinc-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-zinc-800/50">
            <nav className="flex flex-col gap-4">
              <Link href="#servicos" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                Serviços
              </Link>
              <Link href="#processo" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                Processo
              </Link>
              <Link href="#resultados" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                Resultados
              </Link>
              <Link href="#depoimentos" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                Depoimentos
              </Link>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" className="text-zinc-400 hover:text-white justify-start">
                  Contato
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Solicitar Orçamento
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
