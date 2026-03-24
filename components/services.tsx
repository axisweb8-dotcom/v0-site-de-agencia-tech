import { Code, Palette, TrendingUp, Zap, Search, Shield } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Design Estratégico",
    description: "Interfaces pensadas para converter. Cada elemento visual é posicionado para guiar o usuário até a ação desejada.",
  },
  {
    icon: Code,
    title: "Desenvolvimento Premium",
    description: "Código limpo, performático e escalável. Sites que carregam rápido e funcionam perfeitamente em qualquer dispositivo.",
  },
  {
    icon: TrendingUp,
    title: "Otimização de Conversão",
    description: "Análise de dados, testes A/B e melhorias contínuas para maximizar a taxa de conversão do seu site.",
  },
  {
    icon: Zap,
    title: "Alta Performance",
    description: "Sites ultra-rápidos com nota máxima no Google PageSpeed. Velocidade que impressiona e converte.",
  },
  {
    icon: Search,
    title: "SEO Avançado",
    description: "Estrutura otimizada para mecanismos de busca. Seu site encontrado por quem realmente importa.",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Certificado SSL, proteção contra ataques e backups automáticos. Seu site sempre seguro e online.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 sm:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-500 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-balance">Tudo que você precisa para</span>
            <br />
            <span className="text-zinc-500">converter mais</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Oferecemos soluções completas para criar sites que realmente geram resultados para o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors">
                <service.icon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                {service.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
