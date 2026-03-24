import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Política de Privacidade | Axis Web",
  description: "Política de privacidade e proteção de dados da Axis Web.",
}

export default function PoliticaDePrivacidade() {
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
            Política de Privacidade
          </h1>
          <p className="text-white/40">Última atualização: Março de 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Introdução</h2>
            <p>
              A Axis Web está comprometida com a proteção da sua privacidade. Esta política 
              descreve como coletamos, usamos, armazenamos e protegemos suas informações 
              pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Dados Coletados</h2>
            <p className="mb-4">Podemos coletar os seguintes tipos de informações:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-white/90">Dados de identificação:</strong> nome, e-mail, telefone e empresa</li>
              <li><strong className="text-white/90">Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas</li>
              <li><strong className="text-white/90">Dados de comunicação:</strong> mensagens enviadas através de formulários ou WhatsApp</li>
              <li><strong className="text-white/90">Dados de projetos:</strong> informações fornecidas para desenvolvimento de projetos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Finalidade do Tratamento</h2>
            <p className="mb-4">Utilizamos seus dados para:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Responder às suas solicitações de contato e propostas</li>
              <li>Desenvolver e entregar os serviços contratados</li>
              <li>Enviar comunicações relevantes sobre nossos serviços</li>
              <li>Melhorar a experiência de navegação em nosso site</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Base Legal</h2>
            <p>
              O tratamento dos seus dados pessoais é realizado com base no seu consentimento, 
              na execução de contrato, no cumprimento de obrigação legal ou no legítimo interesse 
              da Axis Web, conforme aplicável a cada situação.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Compartilhamento de Dados</h2>
            <p className="mb-4">
              Seus dados podem ser compartilhados com:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Prestadores de serviços essenciais (hospedagem, e-mail, analytics)</li>
              <li>Autoridades públicas, quando exigido por lei</li>
              <li>Parceiros comerciais, mediante seu consentimento prévio</li>
            </ul>
            <p className="mt-4">
              Não vendemos ou alugamos suas informações pessoais a terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Segurança dos Dados</h2>
            <p>
              Implementamos medidas técnicas e organizacionais apropriadas para proteger 
              seus dados contra acesso não autorizado, alteração, divulgação ou destruição. 
              Isso inclui criptografia, controles de acesso e monitoramento contínuo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Retenção de Dados</h2>
            <p>
              Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades 
              descritas nesta política, salvo quando um período de retenção mais longo seja 
              exigido ou permitido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Seus Direitos</h2>
            <p className="mb-4">De acordo com a LGPD, você tem direito a:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
              <li>Solicitar a portabilidade dos dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">9. Cookies</h2>
            <p>
              Nosso site pode utilizar cookies e tecnologias similares para melhorar sua 
              experiência de navegação. Você pode configurar seu navegador para recusar 
              cookies, embora isso possa afetar algumas funcionalidades do site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">10. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta política periodicamente. Recomendamos que você revise 
              esta página regularmente para se manter informado sobre nossas práticas de privacidade.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">11. Contato</h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em 
              contato conosco através do WhatsApp{" "}
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
