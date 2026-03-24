import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-zinc-950 overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(39,39,42,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(39,39,42,0.5)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      
      {/* Blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <span className="text-zinc-400 text-sm">+200 projetos entregues com sucesso</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
          <span className="text-balance">Sites que transformam</span>
          <br />
          <span className="text-blue-500">visitantes em clientes</span>
        </h1>

        <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Desenvolvemos sites estratégicos focados em conversão. 
          Cada pixel é pensado para gerar resultados reais para o seu negócio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 text-base gap-2">
            Começar Projeto
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-zinc-700 bg-transparent text-white hover:bg-zinc-800 h-14 px-8 text-base gap-2">
            <Play className="w-4 h-4" />
            Ver Portfólio
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: "200+", label: "Projetos Entregues" },
            { value: "98%", label: "Clientes Satisfeitos" },
            { value: "3.5x", label: "Aumento Médio de Conversão" },
            { value: "5", label: "Anos de Experiência" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                {stat.value}
              </div>
              <div className="text-zinc-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-zinc-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
