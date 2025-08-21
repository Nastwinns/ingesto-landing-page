"use client"

import { Button } from "@/components/ui/button"
import { Zap, CheckCircle, Code, Target, Cog, Rocket, TrendingUp, Heart, Shield, Server, X } from "lucide-react"
import { useState, useEffect } from "react"

type Language = "en" | "fr" | "pt" | "es"

const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      useCases: "Use Cases",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Secure RAG Solutions for Your Confidential Data",
      subtitle: "Ingesto - Your Trusted Tech Partner for Private AI-Powered Insights",
      description:
        "We deploy a custom Retrieval-Augmented Generation (RAG) system on AWS EKS, ensuring your data remains confidential while unlocking powerful insights. From setup to optimization, we handle it all.",
      cta: "Get Started Today",
    },
    services: {
      title: "Our Services",
      deployment: {
        title: "Custom RAG Deployment",
        description:
          "We set up a tailored RAG infrastructure on AWS EKS with FastAPI and pgvector for secure data ingestion.",
      },
      security: {
        title: "Data Confidentiality",
        description: "End-to-end encryption and private hosting ensure your data stays secure.",
      },
      optimization: {
        title: "Ongoing Optimization",
        description: "Continuous tuning and monitoring to enhance RAG performance.",
      },
      learnMore: "Learn More",
    },
    useCases: {
      title: "Who Benefits from Ingesto?",
      enterprise: {
        title: "Enterprise Knowledge Management",
        description: "Centralize confidential documents for instant, secure queries.",
      },
      support: {
        title: "Customer Support Automation",
        description: "Enable agents to access private data for accurate responses.",
      },
      research: {
        title: "Research and Development",
        description: "Securely analyze internal reports with AI insights.",
      },
    },
    cli: {
      title: "Power at Your Fingertips with CLI",
      description:
        "Our intuitive CLI simplifies deployment, ingestion, and querying. Integrate seamlessly with your workflow.",
      setup: "Initial Setup",
      ingestion: "Data Ingestion",
      query: "Query Data",
      monitor: "Monitor Status",
    },
    about: {
      title: "About Ingesto",
      description:
        "We are a specialized tech service agency focused on deploying secure, enterprise-grade RAG solutions. Our team combines deep expertise in AI, cloud infrastructure, and data security to deliver solutions that keep your confidential data private while unlocking its full potential.",
      cta: "Learn More About Us",
    },
    footer: {
      description: "Secure RAG solutions for enterprise data.",
      services: "Services",
      company: "Company",
      contact: "Contact",
      ready: "Ready to secure your data?",
      getInTouch: "Get in touch today.",
      contactUs: "Contact Us",
      copyright: "© 2024 Ingesto. All rights reserved.",
    },
    requestDemo: "Request a Demo",
    ragArchitecture: "Secure RAG Architecture",
    ragDescription: "Discover how our infrastructure ensures your data confidentiality with optimized RAG flow",
    howItWorks: "How it Works",
    useCases: "Use Cases",
    team: "Team",
    bookDemo: "Book Demo",
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      useCases: "Cas d'usage",
      about: "À propos",
      contact: "Contact",
    },
    hero: {
      title: "Solutions RAG Sécurisées pour Vos Données Confidentielles",
      subtitle: "Ingesto - Votre Partenaire Tech de Confiance pour des Insights IA Privés",
      description:
        "Nous déployons un système RAG personnalisé sur AWS EKS, garantissant que vos données restent confidentielles tout en libérant des insights puissants. De la configuration à l'optimisation, nous gérons tout.",
      cta: "Commencer Aujourd'hui",
    },
    services: {
      title: "Nos Services",
      deployment: {
        title: "Déploiement RAG Personnalisé",
        description:
          "Nous configurons une infrastructure RAG sur mesure sur AWS EKS avec FastAPI et pgvector pour l'ingestion sécurisée des données.",
      },
      security: {
        title: "Confidentialité des Données",
        description: "Le chiffrement de bout en bout et l'hébergement privé garantissent la sécurité de vos données.",
      },
      optimization: {
        title: "Optimisation Continue",
        description: "Réglage et surveillance continus pour améliorer les performances RAG.",
      },
      learnMore: "En Savoir Plus",
    },
    useCases: {
      title: "Qui Bénéficie d'Ingesto ?",
      enterprise: {
        title: "Gestion des Connaissances d'Entreprise",
        description: "Centralisez les documents confidentiels pour des requêtes instantanées et sécurisées.",
      },
      support: {
        title: "Automatisation du Support Client",
        description: "Permettez aux agents d'accéder aux données privées pour des réponses précises.",
      },
      research: {
        title: "Recherche et Développement",
        description: "Analysez en toute sécurité les rapports internes avec des insights IA.",
      },
    },
    cli: {
      title: "Puissance à Portée de Main avec CLI",
      description:
        "Notre CLI intuitif simplifie le déploiement, l'ingestion et les requêtes. Intégrez-vous parfaitement à votre workflow.",
      setup: "Configuration Initiale",
      ingestion: "Ingestion de Données",
      query: "Requête de Données",
      monitor: "Surveillance du Statut",
    },
    about: {
      title: "À Propos d'Ingesto",
      description:
        "Nous sommes une agence de services tech spécialisée dans le déploiement de solutions RAG sécurisées de niveau entreprise. Notre équipe combine une expertise approfondie en IA, infrastructure cloud et sécurité des données.",
      cta: "En Savoir Plus Sur Nous",
    },
    footer: {
      description: "Solutions RAG sécurisées pour données d'entreprise.",
      services: "Services",
      company: "Entreprise",
      contact: "Contact",
      ready: "Prêt à sécuriser vos données ?",
      getInTouch: "Contactez-nous dès aujourd'hui.",
      contactUs: "Nous Contacter",
      copyright: "© 2024 Ingesto. Tous droits réservés.",
    },
    requestDemo: "Demander une Démo",
    ragArchitecture: "Architecture RAG Sécurisée",
    ragDescription:
      "Découvrez comment notre infrastructure garantit la confidentialité de vos données avec un flux RAG optimisé",
    howItWorks: "Fonctionnement",
    useCases: "Cas d'usage",
    team: "Équipe",
    bookDemo: "Réserver une démo",
  },
  pt: {
    nav: {
      home: "Início",
      services: "Serviços",
      useCases: "Casos de Uso",
      about: "Sobre",
      contact: "Contato",
    },
    hero: {
      title: "Soluções RAG Seguras para Seus Dados Confidenciais",
      subtitle: "Ingesto - Seu Parceiro Tech Confiável para Insights de IA Privados",
      description:
        "Implantamos um sistema RAG personalizado no AWS EKS, garantindo que seus dados permaneçam confidenciais enquanto desbloqueiam insights poderosos. Da configuração à otimização, cuidamos de tudo.",
      cta: "Comece Hoje",
    },
    services: {
      title: "Nossos Serviços",
      deployment: {
        title: "Implantação RAG Personalizada",
        description:
          "Configuramos uma infraestrutura RAG sob medida no AWS EKS com FastAPI e pgvector para ingestão segura de dados.",
      },
      security: {
        title: "Confidencialidade de Dados",
        description: "Criptografia ponta a ponta e hospedagem privada garantem que seus dados permaneçam seguros.",
      },
      optimization: {
        title: "Otimização Contínua",
        description: "Ajuste e monitoramento contínuos para melhorar o desempenho do RAG.",
      },
      learnMore: "Saiba Mais",
    },
    useCases: {
      title: "Quem se Beneficia do Ingesto?",
      enterprise: {
        title: "Gestão de Conhecimento Empresarial",
        description: "Centralize documentos confidenciais para consultas instantâneas e seguras.",
      },
      support: {
        title: "Automação de Suporte ao Cliente",
        description: "Permita que agentes acessem dados privados para respostas precisas.",
      },
      research: {
        title: "Pesquisa e Desenvolvimento",
        description: "Analise com segurança relatórios internos com insights de IA.",
      },
    },
    cli: {
      title: "Poder na Ponta dos Dedos com CLI",
      description:
        "Nosso CLI intuitivo simplifica implantação, ingestão e consultas. Integre perfeitamente ao seu fluxo de trabalho.",
      setup: "Configuração Inicial",
      ingestion: "Ingestão de Dados",
      query: "Consulta de Dados",
      monitor: "Monitorar Status",
    },
    about: {
      title: "Sobre a Ingesto",
      description:
        "Somos uma agência de serviços tech especializada na implantação de soluções RAG seguras de nível empresarial. Nossa equipe combina expertise profunda em IA, infraestrutura em nuvem e segurança de dados.",
      cta: "Saiba Mais Sobre Nós",
    },
    footer: {
      description: "Soluções RAG seguras para dados empresariais.",
      services: "Serviços",
      company: "Empresa",
      contact: "Contato",
      ready: "Pronto para proteger seus dados?",
      getInTouch: "Entre em contato hoje.",
      contactUs: "Fale Conosco",
      copyright: "© 2024 Ingesto. Todos os direitos reservados.",
    },
    requestDemo: "Solicitar Demo",
    ragArchitecture: "Arquitetura RAG Segura",
    ragDescription:
      "Descubra como nossa infraestrutura garante a confidencialidade dos seus dados com fluxo RAG otimizado",
    howItWorks: "Como Funciona",
    useCases: "Casos de Uso",
    team: "Equipe",
    bookDemo: "Agendar demonstração",
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      useCases: "Casos de Uso",
      about: "Acerca de",
      contact: "Contacto",
    },
    hero: {
      title: "Soluciones RAG Seguras para Sus Datos Confidenciales",
      subtitle: "Ingesto - Su Socio Tech de Confianza para Insights de IA Privados",
      description:
        "Desplegamos un sistema RAG personalizado en AWS EKS, asegurando que sus datos permanezcan confidenciales mientras desbloquean insights poderosos. Desde la configuración hasta la optimización, nos encargamos de todo.",
      cta: "Comenzar Hoy",
    },
    services: {
      title: "Nuestros Servicios",
      deployment: {
        title: "Despliegue RAG Personalizado",
        description:
          "Configuramos una infraestructura RAG a medida en AWS EKS con FastAPI y pgvector para ingestión segura de datos.",
      },
      security: {
        title: "Confidencialidad de Datos",
        description: "Cifrado de extremo a extremo y alojamiento privado aseguran que sus datos permanezcan seguros.",
      },
      optimization: {
        title: "Optimización Continua",
        description: "Ajuste y monitoreo continuos para mejorar el rendimiento RAG.",
      },
      learnMore: "Saber Más",
    },
    useCases: {
      title: "¿Quién se Beneficia de Ingesto?",
      enterprise: {
        title: "Gestión de Conocimiento Empresarial",
        description: "Centralice documentos confidenciales para consultas instantáneas y seguras.",
      },
      support: {
        title: "Automatización de Soporte al Cliente",
        description: "Permita que los agentes accedan a datos privados para respuestas precisas.",
      },
      research: {
        title: "Investigación y Desarrollo",
        description: "Analice de forma segura informes internos con insights de IA.",
      },
    },
    cli: {
      title: "Poder al Alcance de Sus Dedos con CLI",
      description:
        "Nuestro CLI intuitivo simplifica el despliegue, ingestión y consultas. Integre perfectamente con su flujo de trabajo.",
      setup: "Configuración Inicial",
      ingestion: "Ingestión de Datos",
      query: "Consulta de Datos",
      monitor: "Monitorear Estado",
    },
    about: {
      title: "Acerca de Ingesto",
      description:
        "Somos una agencia de servicios tech especializada en el despliegue de soluções RAG seguras de nivel empresarial. Nuestro equipo combina experiencia profunda en IA, infraestructura en la nube y seguridad de datos.",
      cta: "Saber Más Sobre Nosotros",
    },
    footer: {
      description: "Soluciones RAG seguras para datos empresariales.",
      services: "Servicios",
      company: "Empresa",
      contact: "Contacto",
      ready: "¿Listo para asegurar sus datos?",
      getInTouch: "Póngase en contacto hoy.",
      contactUs: "Contáctanos",
      copyright: "© 2024 Ingesto. Todos los derechos reservados.",
    },
    requestDemo: "Solicitar Demo",
    ragArchitecture: "Arquitectura RAG Segura",
    ragDescription:
      "Descubra cómo nuestra infraestructura garantiza la confidencialidad de sus datos con flujo RAG optimizado",
    howItWorks: "Cómo Funciona",
    useCases: "Casos de Uso",
    team: "Equipo",
    bookDemo: "Reservar demo",
  },
}

export default function IngestoLanding() {
  const [language, setLanguage] = useState<Language>("en")
  const t = translations[language]

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/balinjean/30min",
      })
    } else {
      window.open("https://calendly.com/balinjean/30min", "_blank")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full"></div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-sans">
                Ingesto
              </span>
            </div>

            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex items-center space-x-6">
                <a
                  href="/how-it-works"
                  className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors duration-200"
                >
                  {translations[language].howItWorks}
                </a>
                <a
                  href="/use-cases"
                  className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors duration-200"
                >
                  {translations[language].useCases}
                </a>
                <a
                  href="#team"
                  className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors duration-200"
                >
                  {translations[language].team}
                </a>
              </nav>

              {/* Language Selector */}
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-white border border-emerald-200 rounded-lg px-3 py-2 text-sm font-medium text-emerald-700 hover:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
              >
                <option value="en">🇺🇸 EN</option>
                <option value="fr">🇫🇷 FR</option>
                <option value="pt">🇧🇷 PT</option>
                <option value="es">🇪🇸 ES</option>
              </select>

              {/* Book Demo Button */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-2 rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg"
                onClick={openCalendly}
              >
                {translations[language].bookDemo}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Enhanced for conversion */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 py-24 sm:py-32 animate-gradient-xy"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-green-500/10 rounded-full blur-2xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-sans animate-fade-in-up">
              {language === "fr"
                ? "L'Alternative Européenne à AWS Bedrock"
                : language === "pt"
                  ? "A Alternativa Europeia ao AWS Bedrock"
                  : language === "es"
                    ? "La Alternativa Europea a AWS Bedrock"
                    : "The European Alternative to AWS Bedrock"}
            </h1>
            <p className="mt-6 text-xl leading-8 text-emerald-100 font-serif animate-fade-in-up animation-delay-200">
              {language === "fr"
                ? "RAG sécurisé, déployé en 48h, conforme RGPD par design - Sans les surprises de facturation cloud"
                : language === "pt"
                  ? "RAG seguro, implantado em 48h, conforme LGPD por design - Sem surpresas de faturamento cloud"
                  : language === "es"
                    ? "RAG seguro, desplegado en 48h, conforme GDPR por diseño - Sin sorpresas de facturación cloud"
                    : "Secure RAG, deployed in 48h, GDPR-compliant by design - No cloud billing surprises"}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm animate-fade-in-up animation-delay-300">
              <span className="bg-emerald-700/50 px-3 py-1 rounded-full text-emerald-100 border border-emerald-500/30">
                {language === "fr"
                  ? "🇫🇷 Équipe française"
                  : language === "pt"
                    ? "🇫🇷 Equipe francesa"
                    : language === "es"
                      ? "🇫🇷 Equipo francés"
                      : "🇫🇷 French team"}
              </span>
              <span className="bg-emerald-700/50 px-3 py-1 rounded-full text-emerald-100 border border-emerald-500/30">
                {language === "fr"
                  ? "⚡ 48h vs 6 mois"
                  : language === "pt"
                    ? "⚡ 48h vs 6 meses"
                    : language === "es"
                      ? "⚡ 48h vs 6 meses"
                      : "⚡ 48h vs 6 months"}
              </span>
              <span className="bg-emerald-700/50 px-3 py-1 rounded-full text-emerald-100 border border-emerald-500/30">
                {language === "fr"
                  ? "💰 Prix fixe"
                  : language === "pt"
                    ? "💰 Preço fixo"
                    : language === "es"
                      ? "💰 Precio fijo"
                      : "💰 Fixed pricing"}
              </span>
              <span className="bg-emerald-700/50 px-3 py-1 rounded-full text-emerald-100 border border-emerald-500/30">
                {language === "fr"
                  ? "🔒 Zero-Trust"
                  : language === "pt"
                    ? "🔒 Zero-Trust"
                    : language === "es"
                      ? "🔒 Zero-Trust"
                      : "🔒 Zero-Trust"}
              </span>
            </div>
            <p className="mt-4 text-lg leading-7 text-emerald-200 font-serif max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              {language === "fr"
                ? "Pendant qu'AWS vous facture par token et vous enferme dans leur écosystème, nous déployons votre RAG sur VOTRE infrastructure avec un prix transparent."
                : language === "pt"
                  ? "Enquanto a AWS cobra por token e te prende em seu ecossistema, implantamos seu RAG na SUA infraestrutura com preço transparente."
                  : language === "es"
                    ? "Mientras AWS cobra por token y te encierra en su ecosistema, desplegamos tu RAG en TU infraestructura con precio transparente."
                    : "While AWS charges per token and locks you into their ecosystem, we deploy your RAG on YOUR infrastructure with transparent pricing."}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 text-lg transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/50 animate-bounce-subtle w-full sm:w-auto"
                onClick={openCalendly}
              >
                {translations[language].bookDemo}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-emerald-300 text-emerald-100 hover:bg-emerald-800 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 bg-transparent w-full sm:w-auto"
                onClick={() => (window.location.href = "/how-it-works")}
              >
                {language === "fr"
                  ? "Voir Comment Ça Marche"
                  : language === "pt"
                    ? "Ver Como Funciona"
                    : language === "es"
                      ? "Ver Cómo Funciona"
                      : "See How It Works"}
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/secure-data-flow.png"
            alt="Secure data visualization"
            className="h-full w-full object-cover opacity-10 animate-slow-zoom"
          />
        </div>
      </section>

      {/* Business Promise Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-sans animate-fade-in-up">
              {language === "fr"
                ? "Notre Promesse Business"
                : language === "pt"
                  ? "Nossa Promessa de Negócio"
                  : language === "es"
                    ? "Nuestra Promesa de Negocio"
                    : "Our Business Promise"}
            </h2>
            <p className="mt-6 text-lg text-emerald-200 font-serif animate-fade-in-up animation-delay-200">
              {language === "fr"
                ? "Transformez vos données en avantage concurrentiel avec une sécurité enterprise-grade"
                : language === "pt"
                  ? "Transforme seus dados em vantagem competitiva com segurança enterprise-grade"
                  : language === "es"
                    ? "Transforme sus datos en ventaja competitiva con seguridad enterprise-grade"
                    : "Transform your data into competitive advantage with enterprise-grade security"}
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Why */}
              <div className="text-center animate-fade-in-up animation-delay-400">
                <div className="bg-emerald-700 rounded-full p-6 mx-auto w-20 h-20 flex items-center justify-center mb-6 hover:scale-110 transition-all duration-300">
                  <Target className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-sans">
                  {language === "fr"
                    ? "Pourquoi"
                    : language === "pt"
                      ? "Por Que"
                      : language === "es"
                        ? "Por Qué"
                        : "Why"}
                </h3>
                <p className="text-emerald-200 font-serif text-sm">
                  {language === "fr"
                    ? "80% des données d'entreprise restent inexploitées. Nous libérons cette valeur cachée avec une IA sécurisée qui respecte votre confidentialité."
                    : language === "pt"
                      ? "80% dos dados empresariais permanecem inexplorados. Liberamos esse valor oculto com IA segura que respeita sua confidencialidade."
                      : language === "es"
                        ? "80% de los datos empresariales permanecen sin explotar. Liberamos ese valor oculto con IA segura que respeta su confidencialidad."
                        : "80% of enterprise data remains untapped. We unlock this hidden value with secure AI that respects your confidentiality."}
                </p>
              </div>

              {/* How */}
              <div className="text-center animate-fade-in-up animation-delay-600">
                <div className="bg-teal-700 rounded-full p-6 mx-auto w-20 h-20 flex items-center justify-center mb-6 hover:scale-110 transition-all duration-300">
                  <Cog className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-sans">
                  {language === "fr" ? "Comment" : language === "pt" ? "Como" : language === "es" ? "Cómo" : "How"}
                </h3>
                <p className="text-emerald-200 font-serif text-sm">
                  {language === "fr"
                    ? "Infrastructure RAG clé-en-main sur votre cloud privé. Déploiement en 10 minutes, sécurité militaire, performance enterprise."
                    : language === "pt"
                      ? "Infraestrutura RAG pronta para uso em sua nuvem privada. Implantação em 10 minutos, segurança militar, performance enterprise."
                      : language === "es"
                        ? "Infraestructura RAG lista para usar en su nuve privada. Despliegue en 10 minutos, seguridad militar, rendimiento enterprise."
                        : "Turn-key RAG infrastructure on your private cloud. 10-minute deployment, military-grade security, enterprise performance."}
                </p>
              </div>

              {/* What */}
              <div className="text-center animate-fade-in-up animation-delay-800">
                <div className="bg-green-700 rounded-full p-6 mx-auto w-20 h-20 flex items-center justify-center mb-6 hover:scale-110 transition-all duration-300">
                  <Rocket className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-sans">
                  {language === "fr"
                    ? "Résultat"
                    : language === "pt"
                      ? "Resultado"
                      : language === "es"
                        ? "Resultado"
                        : "Result"}
                </h3>
                <p className="text-emerald-200 font-serif text-sm">
                  {language === "fr"
                    ? "ROI de 300% en 6 mois. Réduction de 70% du temps de recherche d'information. Conformité RGPD garantie."
                    : language === "pt"
                      ? "ROI de 300% em 6 meses. Redução de 70% no tempo de busca de informações. Conformidade LGPD garantida."
                      : language === "es"
                        ? "ROI del 300% en 6 meses. Reducción del 70% en tiempo de búsqueda de información. Cumplimiento GDPR garantizado."
                        : "300% ROI in 6 months. 70% reduction in information search time. GDPR compliance guaranteed."}
                </p>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="mt-12 bg-emerald-800 rounded-2xl p-6 animate-fade-in-up animation-delay-1000">
              <h3 className="text-xl font-bold text-center mb-6 font-sans">
                {language === "fr"
                  ? "Garanties Ingesto"
                  : language === "pt"
                    ? "Garantias Ingesto"
                    : language === "es"
                      ? "Garantías Ingesto"
                      : "Ingesto Guarantees"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold font-sans text-sm">
                      {language === "fr"
                        ? "Sécurité Zero-Trust"
                        : language === "pt"
                          ? "Segurança Zero-Trust"
                          : language === "es"
                            ? "Seguridad Zero-Trust"
                            : "Zero-Trust Security"}
                    </h4>
                    <p className="text-xs text-emerald-200 font-serif">
                      {language === "fr"
                        ? "Vos données ne quittent jamais votre infrastructure"
                        : language === "pt"
                          ? "Seus dados nunca saem de sua infraestrutura"
                          : language === "es"
                            ? "Sus datos nunca salen de su infraestructura"
                            : "Your data never leaves your infrastructure"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold font-sans text-sm">
                      {language === "fr"
                        ? "Performance Garantie"
                        : language === "pt"
                          ? "Performance Garantida"
                          : language === "es"
                            ? "Rendimiento Garantizado"
                            : "Guaranteed Performance"}
                    </h4>
                    <p className="text-xs text-emerald-200 font-serif">
                      {language === "fr"
                        ? "SLA 99.9% avec réponses <5 secondes"
                        : language === "pt"
                          ? "SLA 99.9% com respostas <5 segundos"
                          : language === "es"
                            ? "SLA 99.9% con respuestas <5 segundos"
                            : "99.9% SLA with <5 second responses"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold font-sans text-sm">
                      {language === "fr"
                        ? "Support 24/7"
                        : language === "pt"
                          ? "Suporte 24/7"
                          : language === "es"
                            ? "Soporte 24/7"
                            : "24/7 Support"}
                    </h4>
                    <p className="text-xs text-emerald-200 font-serif">
                      {language === "fr"
                        ? "Équipe d'experts dédiée à votre succès"
                        : language === "pt"
                          ? "Equipe de especialistas dedicada ao seu sucesso"
                          : language === "es"
                            ? "Equipo de expertos dedicado a su éxito"
                            : "Expert team dedicated to your success"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold font-sans text-sm">
                      {language === "fr"
                        ? "ROI Mesurable"
                        : language === "pt"
                          ? "ROI Mensurável"
                          : language === "es"
                            ? "ROI Medible"
                            : "Measurable ROI"}
                    </h4>
                    <p className="text-xs text-emerald-200 font-serif">
                      {language === "fr"
                        ? "Métriques business et tableaux de bord inclus"
                        : language === "pt"
                          ? "Métricas de negócio e dashboards inclusos"
                          : language === "es"
                            ? "Métricas de negocio y dashboards incluidos"
                            : "Business metrics and dashboards included"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 to-emerald-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-sans animate-fade-in-up">
              {language === "fr"
                ? "L'Équipe Ingesto"
                : language === "pt"
                  ? "A Equipe Ingesto"
                  : language === "es"
                    ? "El Equipo Ingesto"
                    : "The Ingesto Team"}
            </h2>
            <p className="mt-6 text-lg text-emerald-200 font-serif animate-fade-in-up animation-delay-200">
              {language === "fr"
                ? "5 experts passionnés, fondée en 2024, dédiée à votre succès"
                : language === "pt"
                  ? "5 especialistas apaixonados, fundada em 2024, dedicados ao seu sucesso"
                  : language === "es"
                    ? "5 expertos apasionados, fundada en 2024, dedicados a su éxito"
                    : "5 passionate experts, founded in 2024, dedicated to your success"}
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12 justify-items-center">
              <div className="text-center animate-fade-in-up animation-delay-300">
                <div className="bg-blue-700 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                  <Code className="h-8 w-8" />
                </div>
                <h3 className="font-semibold font-sans">Dev Lead</h3>
                <p className="text-sm text-emerald-200 font-serif">Architecture & Backend</p>
              </div>
              <div className="text-center animate-fade-in-up animation-delay-400">
                <div className="bg-purple-700 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                  <Server className="h-8 w-8" />
                </div>
                <h3 className="font-semibold font-sans">DevOps</h3>
                <p className="text-sm text-emerald-200 font-serif">Infrastructure & Security</p>
              </div>
              <div className="text-center animate-fade-in-up animation-delay-500">
                <div className="bg-green-700 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="font-semibold font-sans">IA Expert</h3>
                <p className="text-sm text-emerald-200 font-serif">RAG & ML Models</p>
              </div>
              <div className="text-center animate-fade-in-up animation-delay-600">
                <div className="bg-orange-700 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="font-semibold font-sans">Marketing</h3>
                <p className="text-sm text-emerald-200 font-serif">Growth & Strategy</p>
              </div>
              <div className="text-center animate-fade-in-up animation-delay-700 col-span-2 md:col-span-1">
                <div className="bg-red-700 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="font-semibold font-sans">Business</h3>
                <p className="text-sm text-emerald-200 font-serif">Sales & Partnerships</p>
              </div>
            </div>

            {/* Values & Pillars */}
            <div className="bg-emerald-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center mb-8 font-sans">
                {language === "fr"
                  ? "Nos Valeurs & Piliers"
                  : language === "pt"
                    ? "Nossos Valores & Pilares"
                    : language === "es"
                      ? "Nuestros Valores & Pilares"
                      : "Our Values & Pillars"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Shield className="h-12 w-12 mx-auto mb-4 text-emerald-300" />
                  <h4 className="font-semibold font-sans mb-2">
                    {language === "fr"
                      ? "Sécurité d'Abord"
                      : language === "pt"
                        ? "Segurança em Primeiro"
                        : language === "es"
                          ? "Seguridad Primero"
                          : "Security First"}
                  </h4>
                  <p className="text-sm text-emerald-200 font-serif">
                    {language === "fr"
                      ? "Vos données restent dans votre infrastructure, toujours"
                      : language === "pt"
                        ? "Seus dados permanecem em sua infraestrutura, sempre"
                        : language === "es"
                          ? "Sus datos permanecen en su infraestructura, siempre"
                          : "Your data stays in your infrastructure, always"}
                  </p>
                </div>
                <div className="text-center">
                  <Rocket className="h-12 w-12 mx-auto mb-4 text-emerald-300" />
                  <h4 className="font-semibold font-sans mb-2">
                    {language === "fr"
                      ? "Innovation Continue"
                      : language === "pt"
                        ? "Inovação Contínua"
                        : language === "es"
                          ? "Innovación Continua"
                          : "Continuous Innovation"}
                  </h4>
                  <p className="text-sm text-emerald-200 font-serif">
                    {language === "fr"
                      ? "Technologies de pointe pour des résultats exceptionnels"
                      : language === "pt"
                        ? "Tecnologias de ponta para resultados excepcionais"
                        : language === "es"
                          ? "Tecnologías de punta para resultados excepcionales"
                          : "Leading-edge technologies for exceptional results"}
                  </p>
                </div>
                <div className="text-center">
                  <Heart className="h-12 w-12 mx-auto mb-4 text-emerald-300" />
                  <h4 className="font-semibold font-sans mb-2">
                    {language === "fr"
                      ? "Passion"
                      : language === "pt"
                        ? "Paixão"
                        : language === "es"
                          ? "Pasión"
                          : "Passion"}
                  </h4>
                  <p className="text-sm text-emerald-200 font-serif">
                    {language === "fr"
                      ? "Nous sommes passionnés par la transformation des entreprises"
                      : language === "pt"
                        ? "Somos apaixonados pela transformação das empresas"
                        : language === "es"
                          ? "Estamos apasionados por la transformación de las empresas"
                          : "We are passionate about transforming businesses"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnets Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl font-sans animate-fade-in-up">
              {language === "fr"
                ? "Ressources Gratuites pour Décideurs IT"
                : language === "pt"
                  ? "Recursos Gratuitos para Decisores de TI"
                  : language === "es"
                    ? "Recursos Gratuitos para Decisores de TI"
                    : "Free Resources for IT Decision Makers"}
            </h2>
            <p className="mt-6 text-lg text-emerald-700 font-serif animate-fade-in-up animation-delay-200">
              {language === "fr"
                ? "Guides pratiques et outils d'évaluation pour réussir votre projet IA d'entreprise"
                : language === "pt"
                  ? "Guias práticos e ferramentas de avaliação para o sucesso do seu projeto de IA empresarial"
                  : language === "es"
                    ? "Guías prácticas y herramientas de evaluación para el éxito de su proyecto de IA empresarial"
                    : "Practical guides and evaluation tools for your enterprise AI project success"}
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* RAG Security Checklist */}
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-300">
                <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-4 font-sans">
                  {language === "fr"
                    ? "Checklist Sécurité RAG"
                    : language === "pt"
                      ? "Checklist de Segurança RAG"
                      : language === "es"
                        ? "Checklist de Seguridad RAG"
                        : "RAG Security Checklist"}
                </h3>
                <p className="text-emerald-700 mb-6 font-serif">
                  {language === "fr"
                    ? "25 points de contrôle essentiels pour évaluer la sécurité de votre solution RAG. Conformité RGPD incluse."
                    : language === "pt"
                      ? "25 pontos de controle essenciais para avaliar a segurança da sua solução RAG. Conformidade LGPD incluída."
                      : language === "es"
                        ? "25 puntos de control esenciales para evaluar la seguridad de su solución RAG. Cumplimiento GDPR incluido."
                        : "25 essential checkpoints to evaluate your RAG solution security. GDPR compliance included."}
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
                  onClick={() =>
                    window.open(
                      "mailto:contact@ingesto.ai?subject=RAG Security Checklist Request&body=Please send me the RAG Security Checklist",
                      "_blank",
                    )
                  }
                >
                  {language === "fr"
                    ? "Télécharger Gratuitement"
                    : language === "pt"
                      ? "Baixar Gratuitamente"
                      : language === "es"
                        ? "Descargar Gratis"
                        : "Download Free"}
                </Button>
              </div>

              {/* ROI Calculator */}
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400">
                <div className="bg-teal-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-4 font-sans">
                  {language === "fr"
                    ? "Calculateur ROI IA"
                    : language === "pt"
                      ? "Calculadora ROI IA"
                      : language === "es"
                        ? "Calculadora ROI IA"
                        : "AI ROI Calculator"}
                </h3>
                <p className="text-emerald-700 mb-6 font-serif">
                  {language === "fr"
                    ? "Template Excel pour calculer le ROI de votre projet IA. Métriques business et projections financières incluses."
                    : language === "pt"
                      ? "Template Excel para calcular o ROI do seu projeto de IA. Métricas de negócio e projeções financeiras incluídas."
                      : language === "es"
                        ? "Template Excel para calcular el ROI de su proyecto de IA. Métricas de negocio y proyecciones financieras incluidas."
                        : "Excel template to calculate your AI project ROI. Business metrics and financial projections included."}
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white"
                  onClick={() =>
                    window.open(
                      "mailto:contact@ingesto.ai?subject=AI ROI Calculator Request&body=Please send me the AI ROI Calculator template",
                      "_blank",
                    )
                  }
                >
                  {language === "fr"
                    ? "Obtenir le Template"
                    : language === "pt"
                      ? "Obter o Template"
                      : language === "es"
                        ? "Obtener la Plantilla"
                        : "Get Template"}
                </Button>
              </div>

              {/* GDPR Compliance Guide */}
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-500">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-4 font-sans">
                  {language === "fr"
                    ? "Guide Conformité RGPD"
                    : language === "pt"
                      ? "Guia de Conformidade LGPD"
                      : language === "es"
                        ? "Guía de Cumplimiento GDPR"
                        : "GDPR Compliance Guide"}
                </h3>
                <p className="text-emerald-700 mb-6 font-serif">
                  {language === "fr"
                    ? "Guide complet pour implémenter l'IA en respectant le RGPD. Checklist légale et bonnes pratiques incluses."
                    : language === "pt"
                      ? "Guia completo para implementar IA respeitando a LGPD. Checklist legal e boas práticas incluídas."
                      : language === "es"
                        ? "Guía completa para implementar IA respetando el GDPR. Checklist legal y buenas prácticas incluidas."
                        : "Complete guide to implement AI while respecting GDPR. Legal checklist and best practices included."}
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
                  onClick={() =>
                    window.open(
                      "mailto:contact@ingesto.ai?subject=GDPR Compliance Guide Request&body=Please send me the GDPR Compliance Guide for AI",
                      "_blank",
                    )
                  }
                >
                  {language === "fr"
                    ? "Recevoir le Guide"
                    : language === "pt"
                      ? "Receber o Guia"
                      : language === "es"
                        ? "Recibir la Guía"
                        : "Get Guide"}
                </Button>
              </div>

              {/* Implementation Playbook */}
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-600">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <Rocket className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-4 font-sans">
                  {language === "fr"
                    ? "Playbook Implémentation RAG"
                    : language === "pt"
                      ? "Playbook de Implementação RAG"
                      : language === "es"
                        ? "Playbook de Implementación RAG"
                        : "RAG Implementation Playbook"}
                </h3>
                <p className="text-emerald-700 mb-6 font-serif">
                  {language === "fr"
                    ? "Guide étape par étape pour déployer une solution RAG en entreprise. Architecture, timeline et budget inclus."
                    : language === "pt"
                      ? "Guia passo a passo para implantar uma solução RAG na empresa. Arquitetura, cronograma e orçamento inclusos."
                      : language === "es"
                        ? "Guía paso a paso para desplegar una solución RAG en la empresa. Arquitectura, cronograma y presupuesto incluidos."
                        : "Step-by-step guide to deploy enterprise RAG solution. Architecture, timeline and budget included."}
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700 text-white"
                  onClick={() =>
                    window.open(
                      "mailto:contact@ingesto.ai?subject=RAG Implementation Playbook Request&body=Please send me the RAG Implementation Playbook",
                      "_blank",
                    )
                  }
                >
                  {language === "fr"
                    ? "Accéder au Playbook"
                    : language === "pt"
                      ? "Acessar o Playbook"
                      : language === "es"
                        ? "Acceder al Playbook"
                        : "Access Playbook"}
                </Button>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white animate-fade-in-up animation-delay-700">
              <h3 className="text-2xl font-bold mb-4 font-sans">
                {language === "fr"
                  ? "Besoin d'Aide Personnalisée ?"
                  : language === "pt"
                    ? "Precisa de Ajuda Personalizada?"
                    : language === "es"
                      ? "¿Necesita Ayuda Personalizada?"
                      : "Need Personalized Help?"}
              </h3>
              <p className="text-emerald-100 mb-6 font-serif">
                {language === "fr"
                  ? "Réservez un audit gratuit de 30 minutes avec nos experts pour évaluer votre projet IA"
                  : language === "pt"
                    ? "Reserve uma auditoria gratuita de 30 minutos com nossos especialistas para avaliar seu projeto de IA"
                    : language === "es"
                      ? "Reserve una auditoría gratuita de 30 minutos con nuestros expertos para evaluar su proyecto de IA"
                      : "Book a free 30-minute audit with our experts to evaluate your AI project"}
              </p>
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
                onClick={openCalendly}
              >
                {translations[language].bookDemo}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-sans">
              {language === "fr"
                ? "Prêt à Transformer Vos Données ?"
                : language === "pt"
                  ? "Pronto para Transformar Seus Dados?"
                  : language === "es"
                    ? "¿Listo para Transformar Sus Datos?"
                    : "Ready to Transform Your Data?"}
            </h2>
            <p className="mt-6 text-xl text-emerald-100 font-serif">
              {language === "fr"
                ? "Réservez une démo de 30 minutes et découvrez comment Ingesto peut générer 300% de ROI pour votre entreprise"
                : language === "pt"
                  ? "Reserve uma demo de 30 minutos e descubra como o Ingesto pode gerar 300% de ROI para sua empresa"
                  : language === "es"
                    ? "Reserve una demo de 30 minutos y descubra cómo Ingesto puede generar 300% de ROI para su empresa"
                    : "Book a 30-minute demo and discover how Ingesto can generate 300% ROI for your business"}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl w-full sm:w-auto"
                onClick={openCalendly}
              >
                {translations[language].bookDemo}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto bg-transparent"
                onClick={() => (window.location.href = "/how-it-works")}
              >
                {language === "fr"
                  ? "Voir la Démo Technique"
                  : language === "pt"
                    ? "Ver Demo Técnica"
                    : language === "es"
                      ? "Ver Demo Técnica"
                      : "View Technical Demo"}
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-sans">
              {language === "fr"
                ? "Pourquoi Pas AWS/Azure/GCP ?"
                : language === "pt"
                  ? "Por Que Não AWS/Azure/GCP?"
                  : language === "es"
                    ? "¿Por Qué No AWS/Azure/GCP?"
                    : "Why Not AWS/Azure/GCP?"}
            </h2>
            <p className="text-slate-300 text-lg font-serif max-w-3xl mx-auto">
              {language === "fr"
                ? "Les géants du cloud vous vendent de la complexité. Nous vendons de la simplicité."
                : language === "pt"
                  ? "Os gigantes da nuvem vendem complexidade. Nós vendemos simplicidade."
                  : language === "es"
                    ? "Los gigantes de la nube venden complejidad. Nosotros vendemos simplicidad."
                    : "Cloud giants sell complexity. We sell simplicity."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Cloud Giants Problems */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-300 mb-4 font-sans flex items-center">
                <X className="h-6 w-6 mr-2" />
                {language === "fr"
                  ? "Avec les Géants du Cloud"
                  : language === "pt"
                    ? "Com os Gigantes da Nuvem"
                    : language === "es"
                      ? "Con los Gigantes de la Nube"
                      : "With Cloud Giants"}
              </h3>
              <ul className="space-y-3 text-red-200 font-serif">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  {language === "fr"
                    ? "6+ mois de développement avec une équipe ML"
                    : language === "pt"
                      ? "6+ meses de desenvolvimento com equipe ML"
                      : language === "es"
                        ? "6+ meses de desarrollo con equipo ML"
                        : "6+ months development with ML team"}
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  {language === "fr"
                    ? "Facturation imprévisible (tokens, compute, storage)"
                    : language === "pt"
                      ? "Faturamento imprevisível (tokens, compute, storage)"
                      : language === "es"
                        ? "Facturación impredecible (tokens, compute, storage)"
                        : "Unpredictable billing (tokens, compute, storage)"}
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  {language === "fr"
                    ? "Vos données transitent par leurs serveurs US"
                    : language === "pt"
                      ? "Seus dados transitam por servidores US"
                      : language === "es"
                        ? "Sus datos transitan por servidores US"
                        : "Your data transits through their US servers"}
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  {language === "fr"
                    ? "Support généraliste, pas d'expertise RAG"
                    : language === "pt"
                      ? "Suporte generalista, sem expertise RAG"
                      : language === "es"
                        ? "Soporte generalista, sin expertise RAG"
                        : "Generic support, no RAG expertise"}
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  {language === "fr"
                    ? "Vendor lock-in avec leurs outils propriétaires"
                    : language === "pt"
                      ? "Vendor lock-in com ferramentas proprietárias"
                      : language === "es"
                        ? "Vendor lock-in con herramientas propietarias"
                        : "Vendor lock-in with proprietary tools"}
                </li>
              </ul>
            </div>

            {/* Ingesto Solution */}
            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-emerald-300 mb-4 font-sans flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                {language === "fr"
                  ? "Avec Ingesto"
                  : language === "pt"
                    ? "Com Ingesto"
                    : language === "es"
                      ? "Con Ingesto"
                      : "With Ingesto"}
              </h3>
              <ul className="space-y-3 text-emerald-200 font-serif">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  {language === "fr"
                    ? "48h de déploiement clé-en-main"
                    : language === "pt"
                      ? "48h de implantação pronta para uso"
                      : language === "es"
                        ? "48h de despliegue listo para usar"
                        : "48h turn-key deployment"}
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  {language === "fr"
                    ? "Prix fixe mensuel, pas de surprises"
                    : language === "pt"
                      ? "Preço fixo mensal, sem surpresas"
                      : language === "es"
                        ? "Precio fijo mensual, sin sorpresas"
                        : "Fixed monthly price, no surprises"}
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  {language === "fr"
                    ? "Vos données restent sur VOTRE infrastructure"
                    : language === "pt"
                      ? "Seus dados ficam na SUA infraestrutura"
                      : language === "es"
                        ? "Sus datos quedan en SU infraestructura"
                        : "Your data stays on YOUR infrastructure"}
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  {language === "fr"
                    ? "Équipe d'experts RAG dédiée 24/7"
                    : language === "pt"
                      ? "Equipe de especialistas RAG dedicada 24/7"
                      : language === "es"
                        ? "Equipo de expertos RAG dedicado 24/7"
                        : "Dedicated RAG experts team 24/7"}
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  {language === "fr"
                    ? "Open-source, portable sur tout cloud"
                    : language === "pt"
                      ? "Open-source, portável em qualquer nuvem"
                      : language === "es"
                        ? "Open-source, portable en cualquier nube"
                        : "Open-source, portable across any cloud"}
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 text-lg transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/50"
              onClick={openCalendly}
            >
              {language === "fr"
                ? "Voir la Différence en 30min"
                : language === "pt"
                  ? "Ver a Diferença em 30min"
                  : language === "es"
                    ? "Ver la Diferencia en 30min"
                    : "See the Difference in 30min"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
