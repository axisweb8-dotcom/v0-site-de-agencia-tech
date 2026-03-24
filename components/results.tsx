import { ArrowUpRight, TrendingUp } from "lucide-react"

const cases = [
  {
    company: "TechFlow",
    industry: "SaaS B2B",
    metric: "+340%",
    description: "Aumento em leads qualificados",
    result: "Landing page estratégica com copy persuasivo e design focado em conversão. ROI positivo no primeiro mês.",
  },
  {
    company: "Bella Store",
    industry: "E-commerce",
    metric: "+215%",
    description: "Crescimento em vendas online",
    result: "Redesign completo com checkout otimizado e páginas de produto que convertem 3x mais.",
  },
  {
    company: "Lima & Associados",
    industry: "Advocacia",
    metric: "+180%",
    description: "Mais consultas agendadas",
    result: "Site institucional premium com posicionamento de autoridade e captação estratégica de leads.",
  },
]

export function Results() {
  return (
    <section id="resultados" className="py-32 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f6c72d]/20 to-transparent" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#f6c72d]/3 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <span className="inline-block text-[#f6c72d] text-sm font-semibold tracking-[0.2em] uppercase mb-6">
            Cases de Sucesso
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-balance">Resultados que</span>
            <br />
            <span className="text-white/30">falam por si</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Números reais de clientes reais. Veja como transformamos negócios através de sites estratégicos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((caseStudy, index) => (
            <div
              key={caseStudy.company}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#f6c72d]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              <div className="relative h-full p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-[#f6c72d]/30 transition-all duration-500 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                      {caseStudy.company}
                    </h3>
                    <span className="text-white/30 text-sm">{caseStudy.industry}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#f6c72d]/50 group-hover:bg-[#f6c72d]/10 transition-all">
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#f6c72d] transition-colors" />
                  </div>
                </div>

                <div className="mb-8 flex-grow">
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-6xl font-bold text-[#f6c72d]" style={{ fontFamily: 'var(--font-display)' }}>
                      {caseStudy.metric}
                    </span>
                    <TrendingUp className="w-6 h-6 text-[#f6c72d]/50 mb-3" />
                  </div>
                  <p className="text-white font-medium text-lg">{caseStudy.description}</p>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <p className="text-white/40 text-sm leading-relaxed">
                    {caseStudy.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
