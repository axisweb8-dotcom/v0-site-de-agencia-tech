const steps = [
  {
    number: "01",
    title: "Descoberta",
    description: "Entendemos seu negócio, objetivos e público-alvo. Analisamos a concorrência e definimos a estratégia ideal.",
  },
  {
    number: "02",
    title: "Estratégia",
    description: "Criamos o wireframe e a arquitetura de informação focada em conversão. Cada página com propósito claro.",
  },
  {
    number: "03",
    title: "Design",
    description: "Desenvolvemos o design visual alinhado à sua marca, com foco em usabilidade e experiência do usuário.",
  },
  {
    number: "04",
    title: "Desenvolvimento",
    description: "Codificamos com as melhores tecnologias. Site rápido, responsivo e otimizado para SEO.",
  },
  {
    number: "05",
    title: "Lançamento",
    description: "Publicamos seu site e configuramos analytics. Acompanhamento contínuo para garantir os melhores resultados.",
  },
]

export function Process() {
  return (
    <section id="processo" className="py-24 sm:py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-500 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Nosso Processo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-balance">Do conceito ao resultado</span>
            <br />
            <span className="text-zinc-500">em 5 etapas</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Metodologia comprovada que garante entregas no prazo e resultados acima das expectativas.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-zinc-800 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Number circle */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-zinc-950 border-2 border-blue-600 flex items-center justify-center z-10 hidden md:flex">
                  <span className="text-blue-500 font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-20 lg:text-right" : "lg:pl-20"}`}>
                  <div className="bg-zinc-800/50 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-4 mb-4 md:hidden">
                      <div className="w-12 h-12 rounded-full bg-zinc-950 border-2 border-blue-600 flex items-center justify-center">
                        <span className="text-blue-500 font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                        {step.title}
                      </h3>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 hidden md:block" style={{ fontFamily: 'var(--font-display)' }}>
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
