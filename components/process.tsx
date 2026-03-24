"use client"

import { AnimateOnScroll } from "./animate-on-scroll"

const steps = [
  {
    number: "01",
    title: "Imersão",
    description: "Mergulhamos no seu negócio. Entendemos objetivos, público e concorrência para criar a estratégia perfeita.",
  },
  {
    number: "02",
    title: "Estratégia",
    description: "Arquitetura de informação focada em conversão. Cada página com propósito claro e jornada definida.",
  },
  {
    number: "03",
    title: "Design",
    description: "Visual premium alinhado à sua marca. Design que impressiona e conduz o usuário à ação.",
  },
  {
    number: "04",
    title: "Desenvolvimento",
    description: "Código de elite com as melhores tecnologias. Performance, segurança e escalabilidade.",
  },
  {
    number: "05",
    title: "Lançamento",
    description: "Go-live estratégico com tracking completo. Acompanhamento contínuo para otimizar resultados.",
  },
]

export function Process() {
  return (
    <section id="processo" className="py-32 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(246,199,45,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(246,199,45,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimateOnScroll className="text-center mb-20">
          <span className="inline-block text-[#f6c72d] text-sm font-semibold tracking-[0.2em] uppercase mb-6">
            Nosso Processo
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-balance">Do conceito ao resultado</span>
            <br />
            <span className="text-[#f6c72d]">em 5 etapas precisas</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Metodologia refinada que garante entregas impecáveis e resultados que superam expectativas.
          </p>
        </AnimateOnScroll>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#f6c72d]/60 via-[#f6c72d]/30 to-transparent hidden md:block" />

          <div className="space-y-6 md:space-y-0">
            {steps.map((step, index) => (
              <AnimateOnScroll key={step.number} delay={index * 150}>
                <div
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Number */}
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-16 h-16 bg-black border-2 border-[#f6c72d] flex items-center justify-center z-10 hidden md:flex transition-all duration-500 hover:bg-[#f6c72d]/10">
                    <span className="text-[#f6c72d] font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-20 md:text-right" : "md:pl-20"}`}>
                    <div className="group relative p-8 rounded border border-white/10 bg-black hover:border-[#f6c72d]/40 transition-all duration-500 hover:bg-white/[0.02]">
                      <div className="flex items-center gap-4 mb-4 md:hidden">
                        <div className="w-12 h-12 bg-black border-2 border-[#f6c72d] flex items-center justify-center">
                          <span className="text-[#f6c72d] font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                          {step.title}
                        </h3>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 hidden md:block" style={{ fontFamily: 'var(--font-display)' }}>
                        {step.title}
                      </h3>
                      <p className="text-white/50 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
