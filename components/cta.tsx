import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(246,199,45,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(246,199,45,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f6c72d]/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded border border-[#f6c72d]/30 bg-[#f6c72d]/5 mb-10">
          <span className="w-2 h-2 bg-[#f6c72d] rounded-sm" />
          <span className="text-[#f6c72d] text-sm font-medium">Consultoria gratuita e sem compromisso</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
          <span className="text-balance">Pronto para ter um site que</span>
          <br />
          <span className="text-[#f6c72d]">realmente vende?</span>
        </h2>
        
        <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Agende uma call estratégica e descubra exatamente como podemos multiplicar suas conversões. 
          Insights valiosos, mesmo se você não fechar.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-[#f6c72d] hover:bg-[#e5b828] text-black h-16 px-12 text-lg font-semibold gap-3 rounded group transition-all duration-300"
          >
            Agendar Consultoria Gratuita
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-white/40 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#f6c72d] rounded-sm" />
            Resposta em até 24h
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#f6c72d] rounded-sm" />
            100% gratuito
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#f6c72d] rounded-sm" />
            Sem compromisso
          </span>
        </div>
      </div>
    </section>
  )
}
