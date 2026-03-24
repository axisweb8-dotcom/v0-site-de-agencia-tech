import { Code, Palette, TrendingUp, Zap, Search, Shield } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Design Estratégico",
    description: "Interfaces que vendem. Cada elemento visual posicionado para guiar o usuário até a conversão.",
  },
  {
    icon: Code,
    title: "Desenvolvimento de Elite",
    description: "Código de alta performance. Sites que carregam em milissegundos e funcionam perfeitamente.",
  },
  {
    icon: TrendingUp,
    title: "CRO Avançado",
    description: "Otimização contínua baseada em dados. Testes A/B e análises para maximizar conversões.",
  },
  {
    icon: Zap,
    title: "Performance Máxima",
    description: "Nota 100 no Google PageSpeed. Velocidade que impressiona e converte visitantes.",
  },
  {
    icon: Search,
    title: "SEO de Resultado",
    description: "Estrutura otimizada para dominar o Google. Seu site encontrado por clientes qualificados.",
  },
  {
    icon: Shield,
    title: "Infraestrutura Sólida",
    description: "SSL, proteção DDoS, backups automáticos. Seu investimento sempre seguro e online.",
  },
]

export function Services() {
  return (
    <section id="serviços" className="py-32 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f6c72d]/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(246,199,45,0.05),transparent)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <span className="inline-block text-[#f6c72d] text-sm font-semibold tracking-[0.2em] uppercase mb-6">
            Nossos Serviços
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-balance">Soluções completas para</span>
            <br />
            <span className="text-white/30">dominar seu mercado</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Cada serviço pensado para entregar resultados mensuráveis e escaláveis para o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#f6c72d]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              <div className="relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-[#f6c72d]/20 transition-all duration-500 h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#f6c72d]/10 border border-[#f6c72d]/20 flex items-center justify-center mb-6 group-hover:bg-[#f6c72d]/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-[#f6c72d]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  {service.title}
                </h3>
                <p className="text-white/40 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
