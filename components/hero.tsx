"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const WHATSAPP_NUMBER = "5511978319221"
const WHATSAPP_MESSAGE = "Olá! Vim pelo site da Axis Web e gostaria de solicitar uma proposta."
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(246,199,45,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(246,199,45,0.07)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,black_100%)]" />
      </div>
      
      {/* Subtle accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#f6c72d]/5 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded border border-[#f6c72d]/30 bg-[#f6c72d]/5 mb-10 animate-fade-in-up">
          <span className="w-2 h-2 bg-[#f6c72d] rounded-sm" />
          <span className="text-[#f6c72d] text-sm font-medium tracking-wide">+200 projetos de alta conversão entregues</span>
        </div>

        <h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8 animate-fade-in-up animation-delay-100" 
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="block text-balance">Criamos sites que</span>
          <span className="block mt-2 text-[#f6c72d]">vendem.</span>
        </h1>

        <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-200">
          Não apenas sites bonitos. Sites estratégicos que transformam cada visitante 
          em uma oportunidade real de negócio para sua empresa.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up animation-delay-300">
          <Button 
            asChild
            size="lg" 
            className="bg-[#f6c72d] hover:bg-[#e5b828] text-black h-14 px-10 text-base font-semibold gap-3 rounded group transition-all duration-300 hover:scale-[1.02]"
          >
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Solicitar Proposta
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="border-white/20 bg-transparent text-white hover:bg-white/5 hover:border-white/40 h-14 px-10 text-base font-medium rounded transition-all duration-300"
          >
            <Link href="#resultados">
              Ver Cases de Sucesso
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto animate-fade-in-up animation-delay-400">
          {[
            { value: "200+", label: "Projetos Entregues" },
            { value: "98%", label: "Clientes Satisfeitos" },
            { value: "3.5x", label: "Aumento em Conversão" },
            { value: "5+", label: "Anos de Mercado" },
          ].map((stat) => (
            <div 
              key={stat.label} 
              className="p-6 sm:p-8 rounded border border-white/10 bg-white/[0.02] hover:border-[#f6c72d]/30 transition-all duration-500 hover:bg-white/[0.04]"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f6c72d] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {stat.value}
              </div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
