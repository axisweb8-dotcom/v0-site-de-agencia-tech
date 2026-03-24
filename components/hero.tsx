"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(246,199,45,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(246,199,45,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_20%,transparent_100%)]" />
      </div>
      
      {/* Premium glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#f6c72d]/5 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#f6c72d]/3 rounded-full blur-[120px]" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#f6c72d]/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Premium badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#f6c72d]/20 bg-[#f6c72d]/5 backdrop-blur-sm mb-10">
          <Sparkles className="w-4 h-4 text-[#f6c72d]" />
          <span className="text-[#f6c72d] text-sm font-medium tracking-wide">+200 projetos de alta conversão entregues</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8" style={{ fontFamily: 'var(--font-display)' }}>
          <span className="block text-balance">Criamos sites que</span>
          <span className="block mt-2">
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#f6c72d] via-[#ffd966] to-[#f6c72d]">
                vendem.
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-[#f6c72d]/20 blur-xl" />
            </span>
          </span>
        </h1>

        <p className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Não apenas sites bonitos. Sites estratégicos que transformam cada visitante 
          em uma oportunidade real de negócio para sua empresa.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button 
            size="lg" 
            className="bg-[#f6c72d] hover:bg-[#ffd966] text-black h-14 px-10 text-base font-semibold gap-3 rounded-full group transition-all duration-300 hover:shadow-[0_0_40px_rgba(246,199,45,0.3)]"
          >
            Solicitar Proposta
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 h-14 px-10 text-base font-medium rounded-full backdrop-blur-sm"
          >
            Ver Cases de Sucesso
          </Button>
        </div>

        {/* Stats with premium styling */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-4xl mx-auto">
          {[
            { value: "200+", label: "Projetos Entregues" },
            { value: "98%", label: "Clientes Satisfeitos" },
            { value: "3.5x", label: "Aumento em Conversão" },
            { value: "5+", label: "Anos de Mercado" },
          ].map((stat, index) => (
            <div key={stat.label} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#f6c72d]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                <div className="text-4xl sm:text-5xl font-bold text-[#f6c72d] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {stat.value}
                </div>
                <div className="text-white/40 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#f6c72d] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
