"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const WHATSAPP_NUMBER = "5511978319221"
const WHATSAPP_MESSAGE = "Olá! Vim pelo site da Axis Web e gostaria de iniciar um projeto."
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-black/95 backdrop-blur-sm border-b border-[#f6c72d]/10" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-[#f6c72d] rounded transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-black font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>A</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                AXIS WEB
              </span>
              <span className="text-[#f6c72d]/70 text-[10px] tracking-[0.3em] uppercase">Digital Agency</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {["Serviços", "Processo", "Resultados", "Depoimentos"].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="relative text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f6c72d] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button 
              asChild
              className="bg-[#f6c72d] hover:bg-[#e5b828] text-black font-semibold px-6 h-11 rounded transition-all duration-300 hover:scale-[1.02]"
            >
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Iniciar Projeto
              </Link>
            </Button>
          </div>

          <button
            className="lg:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="py-6 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {["Serviços", "Processo", "Resultados", "Depoimentos"].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-white/70 hover:text-white transition-colors text-sm font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Button 
                asChild
                className="bg-[#f6c72d] hover:bg-[#e5b828] text-black font-semibold mt-4 h-12 rounded"
              >
                <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Iniciar Projeto
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
