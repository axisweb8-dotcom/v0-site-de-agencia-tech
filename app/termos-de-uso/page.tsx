import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Termos de Uso | Axis Web",
  description: "Termos e condições de uso dos serviços da Axis Web.",
}

export default function TermosDeUso() {
  return (
    <main className="min-h-screen bg-black">
      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(246,199,45,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(246,199,45,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back button */}
        <Button
          asChild
          variant="ghost"
          className="text-white/60 hover:text-white hover:bg-white/5 mb-12 -ml-4"
        >
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-16">
          <h1 
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Termos de Uso
          </h1>
          <p className="text-white/40">Última atualização: Março de 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar os serviços da Axis Web, você concorda com estes Termos de Uso 
              em sua totalidade. Se você não concordar com qualquer parte destes termos, 
              não deverá utilizar nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Descrição dos Serviços</h2>
            <p className="mb-4">A Axis Web oferece serviços de:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Desenvolvimento de sites e landing pages focados em conversão</li>
              <li>Design de interfaces (UI/UX)</li>
              <li>Otimização para mecanismos de busca (SEO)</li>
              <li>Consultoria em estratégia digital</li>
              <li>Manutenção e suporte técnico</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Obrigações do Cliente</h2>
            <p className="mb-4">Ao contratar nossos serviços, o cliente compromete-se a:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fornecer informações precisas e atualizadas para o desenvolvimento do projeto</li>
              <li>Responder às solicitações de feedback dentro dos prazos acordados</li>
              <li>Realizar os pagamentos conforme estabelecido em contrato</li>
              <li>Não utilizar os serviços para fins ilegais ou não autorizados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Propriedade Intelectual</h2>
            <p>
              Todos os direitos de propriedade intelectual dos trabalhos desenvolvidos pela 
              Axis Web são transferidos ao cliente após a conclusão do projeto e o pagamento 
              integral. A Axis Web reserva-se o direito de utilizar os trabalhos em seu 
              portfólio, salvo acordo em contrário.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Pagamentos e Reembolsos</h2>
            <p>
              Os pagamentos devem ser realizados conforme acordado em proposta comercial. 
              Solicitações de reembolso serão analisadas caso a caso, considerando o 
              estágio de desenvolvimento do projeto e os termos específicos do contrato.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Limitação de Responsabilidade</h2>
            <p>
              A Axis Web não se responsabiliza por danos indiretos, incidentais ou 
              consequenciais decorrentes do uso ou impossibilidade de uso dos serviços. 
              Nossa responsabilidade máxima está limitada ao valor pago pelo cliente 
              pelos serviços contratados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Modificações dos Termos</h2>
            <p>
              A Axis Web reserva-se o direito de modificar estes termos a qualquer momento. 
              As alterações entrarão em vigor imediatamente após sua publicação. 
              O uso continuado dos serviços após as modificações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Contato</h2>
            <p>
              Para dúvidas sobre estes Termos de Uso, entre em contato conosco através do 
              WhatsApp{" "}
              <Link href="https://wa.me/5511978319221" className="text-[#f6c72d] hover:underline">
                (11) 97831-9221
              </Link>{" "}
              ou pelo e-mail{" "}
              <Link href="mailto:contato@axisweb.com.br" className="text-[#f6c72d] hover:underline">
                contato@axisweb.com.br
              </Link>.
            </p>
          </section>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Axis Web. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </main>
  )
}
