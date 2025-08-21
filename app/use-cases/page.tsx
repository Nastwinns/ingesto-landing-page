"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Building2,
  Stethoscope,
  Shield,
  Banknote,
  Cog,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react"
import { useState } from "react"

type Language = "en" | "fr" | "pt" | "es"

const translations = {
  en: {
    title: "Use Cases - Real Business Impact",
    subtitle: "Discover how Ingesto transforms businesses across industries",
    backToHome: "← Back to Home",
    bookDemo: "Book Demo",
    enterprise: {
      title: "Enterprise Knowledge Management",
      problem: "Problem: 70% of company knowledge is trapped in documents, emails, and systems",
      solution: "Solution: Centralized RAG system for instant, secure knowledge access",
      metrics: "Results: 85% faster information retrieval, 60% reduction in duplicate work",
      roi: "ROI: $2.3M saved annually for 1000+ employee companies",
    },
    medical: {
      title: "Medical Research & Healthcare",
      problem: "Problem: Researchers spend 40% of time searching through medical literature",
      solution: "Solution: HIPAA-compliant RAG for medical documents and research papers",
      metrics: "Results: 75% faster research, 90% accuracy in finding relevant studies",
      roi: "ROI: 300% increase in research productivity, faster drug discovery",
    },
    government: {
      title: "Government & Public Sector",
      problem: "Problem: Citizens wait weeks for information, staff overwhelmed by queries",
      solution: "Solution: Secure RAG for policy documents, regulations, and public records",
      metrics: "Results: 24/7 citizen service, 80% reduction in response time",
      roi: "ROI: 50% cost reduction in citizen services, improved satisfaction",
    },
    financial: {
      title: "Financial Services",
      problem: "Problem: Compliance officers spend days researching regulations and precedents",
      solution: "Solution: SOX-compliant RAG for financial regulations and internal policies",
      metrics: "Results: 90% faster compliance research, 100% audit trail",
      roi: "ROI: $1.8M saved in compliance costs, zero regulatory violations",
    },
    manufacturing: {
      title: "Manufacturing & Engineering",
      problem: "Problem: Engineers waste 30% of time searching for technical documentation",
      solution: "Solution: RAG system for technical specs, manuals, and quality procedures",
      metrics: "Results: 70% faster problem resolution, 40% reduction in downtime",
      roi: "ROI: $5M saved annually through reduced downtime and faster innovation",
    },
  },
  fr: {
    title: "Cas d'Usage - Impact Business Réel",
    subtitle: "Découvrez comment Ingesto transforme les entreprises dans tous les secteurs",
    backToHome: "← Retour à l'accueil",
    bookDemo: "Réserver une Démo",
    enterprise: {
      title: "Gestion des Connaissances d'Entreprise",
      problem: "Problème: 70% des connaissances d'entreprise sont piégées dans des documents",
      solution: "Solution: Système RAG centralisé pour un accès sécurisé instantané",
      metrics: "Résultats: 85% plus rapide, 60% de réduction du travail dupliqué",
      roi: "ROI: 2,3M€ économisés annuellement pour les entreprises de 1000+ employés",
    },
    medical: {
      title: "Recherche Médicale & Santé",
      problem: "Problème: Les chercheurs passent 40% de leur temps à chercher dans la littérature",
      solution: "Solution: RAG conforme HIPAA pour documents médicaux et recherches",
      metrics: "Résultats: 75% plus rapide, 90% de précision dans la recherche d'études",
      roi: "ROI: 300% d'augmentation de productivité, découverte de médicaments plus rapide",
    },
    government: {
      title: "Gouvernement & Secteur Public",
      problem: "Problème: Les citoyens attendent des semaines, le personnel est débordé",
      solution: "Solution: RAG sécurisé pour politiques, réglementations et archives publiques",
      metrics: "Résultats: Service citoyen 24/7, 80% de réduction du temps de réponse",
      roi: "ROI: 50% de réduction des coûts, satisfaction améliorée",
    },
    financial: {
      title: "Services Financiers",
      problem: "Problème: Les agents de conformité passent des jours à rechercher les réglementations",
      solution: "Solution: RAG conforme SOX pour réglementations et politiques internes",
      metrics: "Résultats: 90% plus rapide, 100% de traçabilité d'audit",
      roi: "ROI: 1,8M€ économisés en coûts de conformité, zéro violation réglementaire",
    },
    manufacturing: {
      title: "Fabrication & Ingénierie",
      problem: "Problème: Les ingénieurs perdent 30% de leur temps à chercher la documentation",
      solution: "Solution: Système RAG pour spécifications, manuels et procédures qualité",
      metrics: "Résultats: 70% plus rapide, 40% de réduction des temps d'arrêt",
      roi: "ROI: 5M€ économisés annuellement grâce à la réduction des temps d'arrêt",
    },
  },
  pt: {
    title: "Casos de Uso - Impacto Real nos Negócios",
    subtitle: "Descubra como a Ingesto transforma empresas em todos os setores",
    backToHome: "← Voltar ao Início",
    bookDemo: "Agendar Demo",
    enterprise: {
      title: "Gestão de Conhecimento Empresarial",
      problem: "Problema: 70% do conhecimento da empresa está preso em documentos",
      solution: "Solução: Sistema RAG centralizado para acesso seguro instantâneo",
      metrics: "Resultados: 85% mais rápido, 60% de redução no trabalho duplicado",
      roi: "ROI: R$ 12M economizados anualmente para empresas com 1000+ funcionários",
    },
    medical: {
      title: "Pesquisa Médica & Saúde",
      problem: "Problema: Pesquisadores gastam 40% do tempo procurando na literatura médica",
      solution: "Solução: RAG compatível com HIPAA para documentos médicos e pesquisas",
      metrics: "Resultados: 75% mais rápido, 90% de precisão em encontrar estudos relevantes",
      roi: "ROI: 300% de aumento na produtividade, descoberta de medicamentos mais rápida",
    },
    government: {
      title: "Governo & Setor Público",
      problem: "Problème: Cidadãos esperam semanas por informações, equipe sobrecarregada",
      solution: "Solução: RAG seguro para políticas, regulamentações e registros públicos",
      metrics: "Resultados: Atendimento 24/7, 80% de redução no tempo de resposta",
      roi: "ROI: 50% de redução nos custos, satisfação melhorada",
    },
    financial: {
      title: "Serviços Financeiros",
      problem: "Problème: Oficiais de compliance gastam dias pesquisando regulamentações",
      solution: "Solução: RAG compatível com SOX para regulamentações e políticas internas",
      metrics: "Resultados: 90% mais rápido, 100% de trilha de auditoria",
      roi: "ROI: R$ 9M economizados em custos de compliance, zero violações regulatórias",
    },
    manufacturing: {
      title: "Manufatura & Engenharia",
      problem: "Problème: Engenheiros desperdiçam 30% do tempo procurando documentação técnica",
      solution: "Solução: Sistema RAG para especificações, manuais e procedimentos de qualidade",
      metrics: "Resultados: 70% mais rápido, 40% de redução no tempo de inatividade",
      roi: "ROI: R$ 25M economizados anualmente através da redução do tempo de inatividade",
    },
  },
  es: {
    title: "Casos de Uso - Impacto Real en el Negocio",
    subtitle: "Descubra cómo Ingesto transforma empresas en todas las industrias",
    backToHome: "← Volver al Inicio",
    bookDemo: "Reservar Demo",
    enterprise: {
      title: "Gestión de Conocimiento Empresarial",
      problem: "Problema: 70% del conocimiento empresarial está atrapado en documentos",
      solution: "Solución: Sistema RAG centralizado para acceso seguro instantáneo",
      metrics: "Resultados: 85% más rápido, 60% de reducción en trabajo duplicado",
      roi: "ROI: $2.3M ahorrados anualmente para empresas de 1000+ empleados",
    },
    medical: {
      title: "Investigación Médica y Salud",
      problem: "Problema: Los investigadores gastan 40% del tiempo buscando en literatura médica",
      solution: "Solución: RAG compatible con HIPAA para documentos médicos e investigaciones",
      metrics: "Resultados: 75% más rápido, 90% de precisión en encontrar estudios relevantes",
      roi: "ROI: 300% de aumento en productividad, descubrimiento de medicamentos más rápido",
    },
    government: {
      title: "Gobierno y Sector Público",
      problem: "Problema: Los ciudadanos esperan semanas por información, personal abrumado",
      solution: "Solución: RAG seguro para políticas, regulaciones y registros públicos",
      metrics: "Resultados: Servicio ciudadano 24/7, 80% de reducción en tiempo de respuesta",
      roi: "ROI: 50% de reducción en costos, satisfacción mejorada",
    },
    financial: {
      title: "Servicios Financieros",
      problem: "Problema: Los oficiales de cumplimiento gastan días investigando regulaciones",
      solution: "Solución: RAG compatible con SOX para regulaciones y políticas internas",
      metrics: "Resultados: 90% más rápido, 100% de rastro de auditoría",
      roi: "ROI: $1.8M ahorrados en costos de cumplimiento, cero violaciones regulatorias",
    },
    manufacturing: {
      title: "Manufactura e Ingeniería",
      problem: "Problema: Los ingenieros desperdician 30% del tiempo buscando documentación técnica",
      solution: "Solución: Sistema RAG para especificaciones, manuales y procedimientos de calidad",
      metrics: "Resultados: 70% más rápido, 40% de reducción en tiempo de inactividad",
      roi: "ROI: $5M ahorrados anualmente a través de la reducción del tiempo de inactividad",
    },
  },
}

export default function UseCasesPage() {
  const [language, setLanguage] = useState<Language>("en")
  const t = translations[language]

  const useCases = [
    {
      icon: Building2,
      color: "from-blue-600 to-blue-800",
      data: t.enterprise,
      clientName: "TechCorp Global",
      clientLogo: "/abstract-tech-logo.png",
      testimonial: "Ingesto transformed our knowledge management. Our teams now find information 10x faster.",
      implementation: "3-week deployment across 15 departments",
      beforeAfter: {
        before: "45 minutes average search time",
        after: "4 minutes average search time",
      },
    },
    {
      icon: Stethoscope,
      color: "from-red-600 to-red-800",
      data: t.medical,
      clientName: "MedResearch Institute",
      clientLogo: "/medical-research-institute-logo.png",
      testimonial: "Our researchers can now access 20 years of studies instantly. Game-changing for drug discovery.",
      implementation: "HIPAA-compliant deployment in 2 weeks",
      beforeAfter: {
        before: "3 days to find relevant research",
        after: "15 minutes to find relevant research",
      },
    },
    {
      icon: Shield,
      color: "from-purple-600 to-purple-800",
      data: t.government,
      clientName: "City of Innovation",
      clientLogo: "/placeholder-j8b8f.png",
      testimonial: "Citizens get instant answers 24/7. Our staff can focus on complex cases instead of basic queries.",
      implementation: "Secure deployment with full audit trail",
      beforeAfter: {
        before: "2-3 weeks response time",
        after: "Instant responses 24/7",
      },
    },
    {
      icon: Banknote,
      color: "from-green-600 to-green-800",
      data: t.financial,
      clientName: "SecureBank Corp",
      clientLogo: "/generic-bank-logo.png",
      testimonial: "Zero compliance violations since implementation. Our audit preparation time dropped by 90%.",
      implementation: "SOX-compliant with full encryption",
      beforeAfter: {
        before: "2 weeks for compliance research",
        after: "2 hours for compliance research",
      },
    },
    {
      icon: Cog,
      color: "from-orange-600 to-orange-800",
      data: t.manufacturing,
      clientName: "IndustrialTech Manufacturing",
      clientLogo: "/manufacturing-logo.png",
      testimonial: "Our engineers solve problems 5x faster. Downtime reduced dramatically across all facilities.",
      implementation: "Multi-site deployment with real-time sync",
      beforeAfter: {
        before: "4 hours average problem resolution",
        after: "45 minutes average problem resolution",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => (window.location.href = "/")}
                className="text-emerald-700 hover:text-emerald-900"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t.backToHome}
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-white border border-emerald-200 rounded-lg px-3 py-2 text-sm font-medium text-emerald-700"
              >
                <option value="en">🇺🇸 EN</option>
                <option value="fr">🇫🇷 FR</option>
                <option value="pt">🇧🇷 PT</option>
                <option value="es">🇪🇸 ES</option>
              </select>

              <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">{t.bookDemo}</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-sans">{t.title}</h1>
            <p className="mt-6 text-xl text-emerald-200 font-serif">{t.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-8 lg:p-12">
                  <div className="flex items-start space-x-6">
                    <div
                      className={`bg-gradient-to-br ${useCase.color} rounded-2xl p-4 flex-shrink-0 animate-pulse-slow`}
                    >
                      <useCase.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 font-sans">{useCase.data.title}</h3>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-6">
                          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                            <h4 className="font-semibold text-red-800 mb-2 font-sans">Challenge</h4>
                            <p className="text-red-700 font-serif text-sm">{useCase.data.problem}</p>
                          </div>

                          <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-r-lg">
                            <h4 className="font-semibold text-emerald-800 mb-2 font-sans">Ingesto Solution</h4>
                            <p className="text-emerald-700 font-serif text-sm">{useCase.data.solution}</p>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                            <h4 className="font-semibold text-blue-800 mb-2 font-sans">Measurable Results</h4>
                            <p className="text-blue-700 font-serif text-sm">{useCase.data.metrics}</p>
                          </div>

                          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                            <h4 className="font-semibold text-yellow-800 mb-2 font-sans">Business Impact</h4>
                            <p className="text-yellow-700 font-serif text-sm font-bold">{useCase.data.roi}</p>
                          </div>
                        </div>
                      </div>

                      {/* Client Success Story Section */}
                      <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-xl p-6 border border-emerald-100">
                        <div className="flex items-start space-x-4 mb-4">
                          <img
                            src={useCase.clientLogo || "/placeholder.svg"}
                            alt={`${useCase.clientName} logo`}
                            className="h-12 w-auto opacity-80"
                          />
                          <div className="flex-1">
                            <h5 className="font-bold text-gray-900 font-sans">{useCase.clientName}</h5>
                            <p className="text-emerald-700 font-serif italic">"{useCase.testimonial}"</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-5 w-5 text-emerald-600" />
                            <div>
                              <p className="text-xs text-gray-500 font-sans">Implementation</p>
                              <p className="text-sm font-semibold text-gray-900 font-serif">{useCase.implementation}</p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-5 w-5 text-red-500" />
                            <div>
                              <p className="text-xs text-gray-500 font-sans">Before</p>
                              <p className="text-sm font-semibold text-red-700 font-serif">
                                {useCase.beforeAfter.before}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-emerald-600" />
                            <div>
                              <p className="text-xs text-gray-500 font-sans">After</p>
                              <p className="text-sm font-semibold text-emerald-700 font-serif">
                                {useCase.beforeAfter.after}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Implementation Architecture */}
                      <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6">
                        <h5 className="font-bold text-gray-900 mb-4 font-sans">Implementation Architecture</h5>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col items-center space-y-2">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                              <Users className="h-8 w-8 text-blue-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-700 font-serif">Users</span>
                          </div>

                          <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-300 to-emerald-300 mx-4 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-emerald-300 animate-pulse"></div>
                          </div>

                          <div className="flex flex-col items-center space-y-2">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xs">I</span>
                              </div>
                            </div>
                            <span className="text-sm font-medium text-gray-700 font-serif">Ingesto RAG</span>
                          </div>

                          <div className="flex-1 h-0.5 bg-gradient-to-r from-emerald-300 to-purple-300 mx-4 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-purple-300 animate-pulse"></div>
                          </div>

                          <div className="flex flex-col items-center space-y-2">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                              <useCase.icon className="h-8 w-8 text-purple-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-700 font-serif">Data Sources</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Overview Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 font-sans">Proven Results Across Industries</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-300 mb-2 font-sans">85%</div>
                <div className="text-emerald-200 font-serif">Faster Information Retrieval</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-300 mb-2 font-sans">$12M+</div>
                <div className="text-emerald-200 font-serif">Total Client Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-300 mb-2 font-sans">50+</div>
                <div className="text-emerald-200 font-serif">Enterprise Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-300 mb-2 font-sans">99.9%</div>
                <div className="text-emerald-200 font-serif">System Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6 font-sans">Ready to Transform Your Business?</h2>
            <p className="text-xl text-emerald-200 mb-8 font-serif">
              Join industry leaders who've already unlocked their data's potential
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 text-lg transform hover:scale-110 transition-all duration-300 shadow-2xl"
            >
              {t.bookDemo}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
