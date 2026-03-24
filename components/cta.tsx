import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(39,39,42,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(39,39,42,0.3)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
          <span className="text-balance">Pronto para transformar seu</span>
          <br />
          <span className="text-blue-500">site em uma máquina de vendas?</span>
        </h2>
        
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Agende uma consultoria gratuita e descubra como podemos aumentar suas conversões. Sem compromisso, apenas insights valiosos para o seu negócio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 text-base gap-2">
            Agendar Consultoria Gratuita
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <p className="mt-6 text-zinc-600 text-sm">
          Resposta em até 24 horas • Sem compromisso • 100% gratuito
        </p>
      </div>
    </section>
  )
}
