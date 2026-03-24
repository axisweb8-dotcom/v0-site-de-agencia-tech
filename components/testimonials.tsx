import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote: "A Axis Web transformou completamente nosso negócio online. O site antigo não gerava resultados, agora recebemos leads qualificados todos os dias. O investimento se pagou no primeiro mês.",
    author: "Ricardo Mendes",
    role: "CEO",
    company: "TechFlow",
  },
  {
    quote: "Profissionalismo e expertise de outro nível. Eles não só criaram um site visualmente impressionante, mas pensaram em cada detalhe estratégico para converter. Resultado: vendas triplicaram.",
    author: "Ana Paula Silva",
    role: "Diretora de Marketing",
    company: "Bella Store",
  },
  {
    quote: "Trabalhar com a Axis Web foi transformador. Trouxeram insights que nem imaginávamos. Hoje somos referência no digital do nosso segmento. Parceria que vale ouro.",
    author: "Dr. Carlos Lima",
    role: "Sócio-Fundador",
    company: "Lima & Associados",
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-32 bg-gradient-to-b from-black via-[#0a0a0a] to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#f6c72d]/3 rounded-full blur-[200px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <span className="inline-block text-[#f6c72d] text-sm font-semibold tracking-[0.2em] uppercase mb-6">
            Depoimentos
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-balance">Clientes que confiam</span>
            <br />
            <span className="text-white/30">e recomendam</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#f6c72d]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              <div className="relative h-full p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-[#f6c72d]/20 transition-all duration-500 flex flex-col">
                {/* Quote icon and stars */}
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-10 h-10 text-[#f6c72d]/20" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f6c72d] text-[#f6c72d]" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-white/70 leading-relaxed mb-8 flex-grow text-lg">
                  {`"${testimonial.quote}"`}
                </blockquote>
                
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f6c72d] to-[#f6c72d]/50 flex items-center justify-center">
                    <span className="text-black font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-white/40 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
