"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

const WHATSAPP_NUMBER = "5511978319221"

export function Footer() {
  return (
    <footer className="py-20 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(246,199,45,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(246,199,45,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f6c72d]/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimateOnScroll>
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            {/* Brand section */}
            <div className="lg:col-span-5">
              <Link href="/" className="flex items-center gap-4 mb-6 group">
                <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="/logo-axis-web.png"
                    alt="Axis Web"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-bold text-2xl tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                    AXIS
                  </span>
                  <span className="text-[#f6c72d] font-bold text-2xl tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                    WEB
                  </span>
                </div>
              </Link>
              <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
                Transformamos negócios através de sites estratégicos que convertem. 
                Especialistas em design de alta performance e otimização de conversão.
              </p>
              <div className="flex items-center gap-3">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                ].map(({ icon: Icon, href }, index) => (
                  <a 
                    key={index}
                    href={href} 
                    className="w-11 h-11 rounded border border-white/10 flex items-center justify-center text-white/50 hover:text-[#f6c72d] hover:border-[#f6c72d]/50 hover:bg-[#f6c72d]/5 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links section */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-bold mb-6 text-sm tracking-wider uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                Navegação
              </h4>
              <ul className="space-y-4">
                {["Serviços", "Processo", "Resultados", "Depoimentos"].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`#${item.toLowerCase()}`} 
                      className="text-white/50 hover:text-[#f6c72d] transition-colors duration-300 text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact section */}
            <div className="lg:col-span-4">
              <h4 className="text-white font-bold mb-6 text-sm tracking-wider uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                Contato
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:contato@axisweb.com.br" className="flex items-center gap-3 text-white/50 hover:text-[#f6c72d] transition-colors duration-300 text-sm group">
                    <div className="w-9 h-9 rounded border border-white/10 flex items-center justify-center group-hover:border-[#f6c72d]/40 transition-colors duration-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    contato@axisweb.com.br
                  </a>
                </li>
                <li>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/50 hover:text-[#f6c72d] transition-colors duration-300 text-sm group">
                    <div className="w-9 h-9 rounded border border-white/10 flex items-center justify-center group-hover:border-[#f6c72d]/40 transition-colors duration-300">
                      <Phone className="w-4 h-4" />
                    </div>
                    (11) 97831-9221
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 text-white/50 text-sm">
                    <div className="w-9 h-9 rounded border border-white/10 flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>
                    São Paulo, SP - Brasil
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2024 Axis Web. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/politica-de-privacidade" className="text-white/40 hover:text-[#f6c72d] text-sm transition-colors duration-300">
                Política de Privacidade
              </Link>
              <Link href="/termos-de-uso" className="text-white/40 hover:text-[#f6c72d] text-sm transition-colors duration-300">
                Termos de Uso
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  )
}
