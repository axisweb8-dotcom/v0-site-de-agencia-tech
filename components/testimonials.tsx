import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "A Axis Web entendeu exatamente o que precisávamos. Nosso site antigo não gerava nenhum lead, agora recebemos consultas diariamente. O investimento se pagou no primeiro mês.",
    author: "Ricardo Mendes",
    role: "CEO",
    company: "TechFlow",
  },
  {
    quote: "Profissionalismo e resultado. Eles não só criaram um site bonito, mas pensaram em cada detalhe para converter visitantes em clientes. Recomendo fortemente.",
    author: "Ana Paula Silva",
    role: "Diretora de Marketing",
    company: "Bella Store",
  },
  {
    quote: "Trabalhar com a Axis Web foi uma experiência transformadora. Eles trouxeram insights estratégicos que nem imaginávamos. Nosso faturamento cresceu 3x em 6 meses.",
    author: "Dr. Carlos Lima",
    role: "Sócio-Fundador",
    company: "Advocacia Lima",
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 sm:py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-500 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-balance">O que nossos clientes</span>
            <br />
            <span className="text-zinc-500">dizem sobre nós</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative p-8 rounded-2xl border border-zinc-800 bg-zinc-800/30"
            >
              <Quote className="w-10 h-10 text-blue-600/30 mb-6" />
              <blockquote className="text-zinc-300 leading-relaxed mb-8">
                {`"${testimonial.quote}"`}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-zinc-500 text-sm">
                    {testimonial.role}, {testimonial.company}
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
