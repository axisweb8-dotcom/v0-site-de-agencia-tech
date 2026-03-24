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
    <section id="processo" className="py-32 bg-gradient-to-b from-black via-[#0a0a0a] to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f6c72d]/3 rounded-full blur-[200px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <span className="inline-block text-[#f6c72d] text-sm font-semibold tracking-[0.2em] uppercase mb-6">
            Nosso Processo
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-balance">Do conceito ao resultado</span>
            <br />
            <span className="text-white/30">em 5 etapas precisas</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Metodologia refinada que garante entregas impecáveis e resultados que superam expectativas.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#f6c72d]/50 via-[#f6c72d]/20 to-transparent hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Number circle */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-black border-2 border-[#f6c72d] flex items-center justify-center z-10 hidden md:flex shadow-[0_0_30px_rgba(246,199,45,0.3)]">
                  <span className="text-[#f6c72d] font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-24 md:text-right" : "md:pl-24"}`}>
                  <div className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-[#f6c72d]/20 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f6c72d]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-4 md:hidden">
                        <div className="w-12 h-12 rounded-full bg-black border-2 border-[#f6c72d] flex items-center justify-center shadow-[0_0_20px_rgba(246,199,45,0.2)]">
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
                      <p className="text-white/40 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
