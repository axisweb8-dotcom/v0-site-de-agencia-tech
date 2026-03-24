import { ArrowUpRight } from "lucide-react"

const cases = [
  {
    company: "TechFlow",
    industry: "SaaS",
    metric: "+340%",
    description: "Aumento de leads qualificados",
    result: "Landing page otimizada para conversão com copy persuasivo e design focado em ação.",
  },
  {
    company: "Bella Store",
    industry: "E-commerce",
    metric: "+215%",
    description: "Crescimento em vendas",
    result: "Redesign completo do site com checkout simplificado e páginas de produto otimizadas.",
  },
  {
    company: "Advocacia Lima",
    industry: "Serviços",
    metric: "+180%",
    description: "Mais consultas agendadas",
    result: "Site institucional com foco em autoridade e formulários estrategicamente posicionados.",
  },
]

export function Results() {
  return (
    <section id="resultados" className="py-24 sm:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-500 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Resultados Reais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-balance">Números que falam</span>
            <br />
            <span className="text-zinc-500">por si só</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Veja como ajudamos empresas como a sua a multiplicar seus resultados online.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((caseStudy) => (
            <div
              key={caseStudy.company}
              className="group relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-blue-600/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    {caseStudy.company}
                  </h3>
                  <span className="text-zinc-500 text-sm">{caseStudy.industry}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-blue-500 transition-colors" />
              </div>

              <div className="mb-6">
                <div className="text-5xl font-bold text-blue-500 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {caseStudy.metric}
                </div>
                <p className="text-white font-medium">{caseStudy.description}</p>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed">
                {caseStudy.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
