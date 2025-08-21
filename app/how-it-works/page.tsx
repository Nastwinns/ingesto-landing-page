"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Database, Server, Shield, Zap, Code, Cloud, ArrowRight, Terminal, FileText, Users, Globe } from "lucide-react"

type Language = "en" | "fr" | "pt" | "es"

const translations = {
  en: {
    title: "How Ingesto Works",
    subtitle: "Deep dive into our secure RAG architecture and technical implementation",
    architecture: {
      title: "RAG Architecture Overview",
      description: "Cloud-agnostic infrastructure currently deployed on AWS, with GCP/Azure and on-premise coming soon",
    },
    dataFlow: {
      title: "Secure Data Flow",
      step1: "Document Ingestion",
      step1Desc: "Your documents are securely uploaded to your private S3 bucket",
      step2: "Vector Processing",
      step2Desc: "Documents are transformed into embeddings using enterprise AI models",
      step3: "Secure Storage",
      step3Desc: "Vectors stored in pgvector database within your private infrastructure",
      step4: "Query Processing",
      step4Desc: "RAG queries processed entirely within your secure environment",
    },
    stack: {
      title: "Technology Stack",
      kubernetes: "Kubernetes orchestration for scalability and reliability",
      terraform: "Infrastructure as Code with Terraform for consistent deployments",
      helm: "Helm charts for streamlined application management",
      aws: "Currently on AWS (GCP/Azure coming soon)",
      alternatives: "Support for PostgreSQL alternatives and vector databases",
    },
    cli: {
      title: "CLI Output Example",
      description: "Real deployment output from our Ingesto CLI tool",
    },
    connectors: {
      title: "Available Connectors",
      description: "Seamless integration with your existing tools and platforms",
    },
    documentation: {
      title: "Documentation & Resources",
      apiDocs: "API Documentation",
      apiDocsDesc: "Complete REST API reference with examples",
      deployment: "Deployment Guide",
      deploymentDesc: "Step-by-step infrastructure setup",
      security: "Security Whitepaper",
      securityDesc: "Detailed security architecture and compliance",
      support: "24/7 Support",
      supportDesc: "Expert technical support and consultation",
    },
    bookDemo: "Book Demo",
  },
  fr: {
    title: "Comment Fonctionne Ingesto",
    subtitle: "Plongée approfondie dans notre architecture RAG sécurisée et implémentation technique",
    architecture: {
      title: "Vue d'ensemble de l'Architecture RAG",
      description:
        "Infrastructure agnostique du cloud actuellement déployée sur AWS, avec GCP/Azure et on-premise bientôt disponibles",
    },
    dataFlow: {
      title: "Flux de Données Sécurisé",
      step1: "Ingestion de Documents",
      step1Desc: "Vos documents sont téléchargés en sécurité dans votre bucket S3 privé",
      step2: "Traitement Vectoriel",
      step2Desc: "Les documents sont transformés en embeddings avec des modèles IA enterprise",
      step3: "Stockage Sécurisé",
      step3Desc: "Vecteurs stockés dans la base pgvector au sein de votre infrastructure privée",
      step4: "Traitement des Requêtes",
      step4Desc: "Les requêtes RAG sont traitées entièrement dans votre environnement sécurisé",
    },
    stack: {
      title: "Stack Technologique",
      kubernetes: "Orchestration Kubernetes pour la scalabilité et la fiabilité",
      terraform: "Infrastructure as Code avec Terraform pour des déploiements cohérents",
      helm: "Charts Helm pour une gestion d'application simplifiée",
      aws: "Actuellement sur AWS (GCP/Azure bientôt disponibles)",
      alternatives: "Support pour les alternatives PostgreSQL et bases de données vectorielles",
    },
    cli: {
      title: "Exemple de Sortie CLI",
      description: "Sortie de déploiement réelle de notre outil CLI Ingesto",
    },
    connectors: {
      title: "Connecteurs Disponibles",
      description: "Intégration transparente avec vos outils et plateformes existants",
    },
    documentation: {
      title: "Documentation & Ressources",
      apiDocs: "Documentation API",
      apiDocsDesc: "Référence API REST complète avec exemples",
      deployment: "Guide de Déploiement",
      deploymentDesc: "Configuration d'infrastructure étape par étape",
      security: "Livre Blanc Sécurité",
      securityDesc: "Architecture de sécurité détaillée et conformité",
      support: "Support 24/7",
      supportDesc: "Support technique expert et consultation",
    },
    bookDemo: "Réserver une Démo",
  },
  pt: {
    title: "Como Funciona o Ingesto",
    subtitle: "Mergulho profundo em nossa arquitetura RAG segura e implementação técnica",
    architecture: {
      title: "Visão Geral da Arquitetura RAG",
      description:
        "Infraestrutura agnóstica de nuvem atualmente implantada na AWS, com GCP/Azure e on-premise em breve",
    },
    dataFlow: {
      title: "Fluxo de Dados Seguro",
      step1: "Ingestão de Documentos",
      step1Desc: "Seus documentos são carregados com segurança em seu bucket S3 privado",
      step2: "Processamento Vetorial",
      step2Desc: "Documentos são transformados em embeddings usando modelos de IA enterprise",
      step3: "Armazenamento Seguro",
      step3Desc: "Vetores armazenados no banco pgvector dentro de sua infraestrutura privada",
      step4: "Processamento de Consultas",
      step4Desc: "Consultas RAG processadas inteiramente dentro de seu ambiente seguro",
    },
    stack: {
      title: "Stack Tecnológico",
      kubernetes: "Orquestração Kubernetes para escalabilidade e confiabilidade",
      terraform: "Infraestrutura como Código com Terraform para implantações consistentes",
      helm: "Charts Helm para gerenciamento simplificado de aplicações",
      aws: "Atualmente na AWS (GCP/Azure em breve)",
      alternatives: "Suporte para alternativas PostgreSQL e bancos de dados vetoriais",
    },
    cli: {
      title: "Exemplo de Saída CLI",
      description: "Saída real de implantação de nossa ferramenta CLI Ingesto",
    },
    connectors: {
      title: "Conectores Disponíveis",
      description: "Integração perfeita com suas ferramentas e plataformas existentes",
    },
    documentation: {
      title: "Documentação & Recursos",
      apiDocs: "Documentação da API",
      apiDocsDesc: "Referência completa da API REST com exemplos",
      deployment: "Guia de Implantação",
      deploymentDesc: "Configuração de infraestrutura passo a passo",
      security: "Whitepaper de Segurança",
      securityDesc: "Arquitetura de segurança detalhada e conformidade",
      support: "Suporte 24/7",
      supportDesc: "Suporte técnico especializado e consultoria",
    },
    bookDemo: "Agendar Demo",
  },
  es: {
    title: "Cómo Funciona Ingesto",
    subtitle: "Inmersión profunda en nuestra arquitectura RAG segura e implementación técnica",
    architecture: {
      title: "Visión General de la Arquitectura RAG",
      description:
        "Infraestructura agnóstica de nube actualmente desplegada en AWS, con GCP/Azure y on-premise próximamente",
    },
    dataFlow: {
      title: "Flujo de Datos Seguro",
      step1: "Ingestión de Documentos",
      step1Desc: "Sus documentos se cargan de forma segura en su bucket S3 privado",
      step2: "Procesamiento Vectorial",
      step2Desc: "Los documentos se transforman en embeddings usando modelos de IA enterprise",
      step3: "Almacenamiento Seguro",
      step3Desc: "Vectores almacenados en base de datos pgvector dentro de su infraestructura privada",
      step4: "Procesamiento de Consultas",
      step4Desc: "Las consultas RAG se procesan completamente dentro de su entorno seguro",
    },
    stack: {
      title: "Stack Tecnológico",
      kubernetes: "Orquestación Kubernetes para escalabilidad y confiabilidad",
      terraform: "Infraestructura como Código con Terraform para despliegues consistentes",
      helm: "Charts Helm para gestión simplificada de aplicaciones",
      aws: "Actualmente en AWS (GCP/Azure próximamente)",
      alternatives: "Soporte para alternativas PostgreSQL y bases de datos vectoriales",
    },
    cli: {
      title: "Ejemplo de Salida CLI",
      description: "Salida real de despliegue de nuestra herramienta CLI Ingesto",
    },
    connectors: {
      title: "Conectores Disponibles",
      description: "Integración perfecta con sus herramientas y plataformas existentes",
    },
    documentation: {
      title: "Documentación & Recursos",
      apiDocs: "Documentación API",
      apiDocsDesc: "Referencia completa de API REST con ejemplos",
      deployment: "Guía de Despliegue",
      deploymentDesc: "Configuración de infraestructura paso a paso",
      security: "Whitepaper de Seguridad",
      securityDesc: "Arquitectura de seguridad detallada y cumplimiento",
      support: "Soporte 24/7",
      supportDesc: "Soporte técnico experto y consultoría",
    },
    bookDemo: "Reservar Demo",
  },
}

export default function HowItWorksPage() {
  const [language, setLanguage] = useState<Language>("en")
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <a href="/">Back to Home</a>
              </Button>
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
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                {t.bookDemo}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Technical Content */}
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-sans animate-fade-in-up">{t.title}</h1>
              <p className="mt-6 text-xl leading-8 text-emerald-100 font-serif animate-fade-in-up animation-delay-200">
                {t.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* RAG Architecture */}
        <section className="py-16 sm:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-sans animate-fade-in-up">
                {t.architecture.title}
              </h2>
              <p className="mt-6 text-lg text-gray-600 font-serif animate-fade-in-up animation-delay-200">
                {t.architecture.description}
              </p>
            </div>

            <div className="mx-auto max-w-6xl">
              <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in-up animation-delay-400">
                <img
                  src="/images/architecture-diagram.png"
                  alt="RAG Architecture Diagram"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Secure Data Flow */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-sans animate-fade-in-up">
                {t.dataFlow.title}
              </h2>
            </div>

            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg text-center animate-fade-in-up animation-delay-200">
                  <div className="bg-blue-100 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 font-sans">{t.dataFlow.step1}</h3>
                  <p className="text-sm text-gray-600 font-serif">{t.dataFlow.step1Desc}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg text-center animate-fade-in-up animation-delay-400">
                  <div className="bg-purple-100 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 font-sans">{t.dataFlow.step2}</h3>
                  <p className="text-sm text-gray-600 font-serif">{t.dataFlow.step2Desc}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg text-center animate-fade-in-up animation-delay-600">
                  <div className="bg-green-100 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                    <Database className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 font-sans">{t.dataFlow.step3}</h3>
                  <p className="text-sm text-gray-600 font-serif">{t.dataFlow.step3Desc}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg text-center animate-fade-in-up animation-delay-800">
                  <div className="bg-orange-100 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 font-sans">{t.dataFlow.step4}</h3>
                  <p className="text-sm text-gray-600 font-serif">{t.dataFlow.step4Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 sm:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-sans animate-fade-in-up">
                {t.stack.title}
              </h2>
            </div>

            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg animate-fade-in-up animation-delay-200">
                  <div className="flex items-center mb-4">
                    <Server className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="font-semibold text-lg font-sans">Kubernetes</h3>
                  </div>
                  <p className="text-gray-600 font-serif">{t.stack.kubernetes}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg animate-fade-in-up animation-delay-400">
                  <div className="flex items-center mb-4">
                    <Code className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="font-semibold text-lg font-sans">Terraform</h3>
                  </div>
                  <p className="text-gray-600 font-serif">{t.stack.terraform}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg animate-fade-in-up animation-delay-600">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="font-semibold text-lg font-sans">Helm</h3>
                  </div>
                  <p className="text-gray-600 font-serif">{t.stack.helm}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg animate-fade-in-up animation-delay-800">
                  <div className="flex items-center mb-4">
                    <Cloud className="h-8 w-8 text-orange-600 mr-3" />
                    <h3 className="font-semibold text-lg font-sans">Cloud Providers</h3>
                  </div>
                  <p className="text-gray-600 font-serif">{t.stack.aws}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg animate-fade-in-up animation-delay-1000">
                  <div className="flex items-center mb-4">
                    <Database className="h-8 w-8 text-teal-600 mr-3" />
                    <h3 className="font-semibold text-lg font-sans">Vector Databases</h3>
                  </div>
                  <p className="text-gray-600 font-serif">{t.stack.alternatives}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLI Output Example */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 to-emerald-900 text-white">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-sans animate-fade-in-up">
                {t.cli.title}
              </h2>
              <p className="mt-6 text-lg text-emerald-200 font-serif animate-fade-in-up animation-delay-200">
                {t.cli.description}
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="bg-gray-900 rounded-xl p-6 shadow-2xl animate-fade-in-up animation-delay-400">
                <div className="flex items-center mb-4">
                  <Terminal className="h-5 w-5 text-emerald-400 mr-2" />
                  <span className="text-emerald-400 font-mono text-sm">ingesto deploy --env production</span>
                </div>
                <div className="font-mono text-sm space-y-1 text-gray-300">
                  <div className="text-emerald-400">✓ Validating infrastructure requirements...</div>
                  <div className="text-blue-400">→ Deploying Terraform modules...</div>
                  <div className="text-yellow-400"> ├── Creating VPC and security groups</div>
                  <div className="text-yellow-400"> ├── Setting up EKS cluster</div>
                  <div className="text-yellow-400"> └── Configuring RDS with pgvector</div>
                  <div className="text-emerald-400">✓ Infrastructure deployed successfully (2m 34s)</div>
                  <div className="text-blue-400">→ Installing Helm charts...</div>
                  <div className="text-yellow-400"> ├── FastAPI application</div>
                  <div className="text-yellow-400"> ├── Worker processes</div>
                  <div className="text-yellow-400"> └── Monitoring stack</div>
                  <div className="text-emerald-400">✓ Applications deployed successfully (1m 12s)</div>
                  <div className="text-purple-400">🚀 RAG system ready at: https://your-domain.com</div>
                  <div className="text-gray-400"> API endpoint: https://api.your-domain.com</div>
                  <div className="text-gray-400"> Dashboard: https://dashboard.your-domain.com</div>
                  <div className="text-emerald-400">✓ Deployment completed in 4m 18s</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connectors Flow */}
        <section className="py-16 sm:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-sans animate-fade-in-up">
                {t.connectors.title}
              </h2>
              <p className="mt-6 text-lg text-gray-600 font-serif animate-fade-in-up animation-delay-200">
                {t.connectors.description}
              </p>
            </div>

            <div className="mx-auto max-w-6xl">
              <div className="relative bg-white rounded-2xl shadow-xl p-8 overflow-hidden animate-fade-in-up animation-delay-400">
                <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
                  {/* Input Sources */}
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-lg font-semibold text-center font-sans mb-4">Data Sources</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                      <div className="connector-node bg-blue-100 text-blue-700 hover:scale-110 transition-all duration-300">
                        <Globe className="h-5 w-5" />
                        <span className="text-xs font-medium">Gmail</span>
                      </div>
                      <div className="connector-node bg-purple-100 text-purple-700 hover:scale-110 transition-all duration-300">
                        <Users className="h-5 w-5" />
                        <span className="text-xs font-medium">Slack</span>
                      </div>
                      <div className="connector-node bg-orange-100 text-orange-700 hover:scale-110 transition-all duration-300">
                        <FileText className="h-5 w-5" />
                        <span className="text-xs font-medium">OneDrive</span>
                      </div>
                      <div className="connector-node bg-green-100 text-green-700 hover:scale-110 transition-all duration-300">
                        <Cloud className="h-5 w-5" />
                        <span className="text-xs font-medium">Google Drive</span>
                      </div>
                      <div className="connector-node bg-red-100 text-red-700 hover:scale-110 transition-all duration-300">
                        <Database className="h-5 w-5" />
                        <span className="text-xs font-medium">SharePoint</span>
                      </div>
                      <div className="connector-node bg-yellow-100 text-yellow-700 hover:scale-110 transition-all duration-300">
                        <FileText className="h-5 w-5" />
                        <span className="text-xs font-medium">Confluence</span>
                      </div>
                    </div>
                  </div>

                  {/* Arrows */}
                  <div className="hidden lg:block">
                    <div className="flex flex-col items-center space-y-2">
                      <ArrowRight className="h-6 w-6 text-emerald-600 animate-pulse" />
                      <div className="text-xs text-gray-500 font-medium">Secure Ingestion</div>
                      <ArrowRight className="h-6 w-6 text-emerald-600 animate-pulse animation-delay-500" />
                    </div>
                  </div>

                  {/* Ingesto Core */}
                  <div className="text-center">
                    <div className="connector-node-large bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-2xl hover:scale-105 transition-all duration-300">
                      <Zap className="h-10 w-10" />
                      <span className="text-base font-bold">Ingesto RAG</span>
                      <div className="text-xs opacity-90 mt-1">Vector Processing</div>
                    </div>
                    <div className="mt-4 text-sm text-gray-600 font-serif max-w-xs">
                      Secure processing with pgvector, embeddings, and AI models
                    </div>
                  </div>

                  {/* Arrows */}
                  <div className="hidden lg:block">
                    <div className="flex flex-col items-center space-y-2">
                      <ArrowRight className="h-6 w-6 text-emerald-600 animate-pulse animation-delay-300" />
                      <div className="text-xs text-gray-500 font-medium">Query & Response</div>
                      <ArrowRight className="h-6 w-6 text-emerald-600 animate-pulse animation-delay-800" />
                    </div>
                  </div>

                  {/* Output Destinations */}
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-lg font-semibold text-center font-sans mb-4">Access Points</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                      <div className="connector-node bg-green-100 text-green-700 hover:scale-110 transition-all duration-300">
                        <Users className="h-5 w-5" />
                        <span className="text-xs font-medium">Mattermost</span>
                      </div>
                      <div className="connector-node bg-teal-100 text-teal-700 hover:scale-110 transition-all duration-300">
                        <Code className="h-5 w-5" />
                        <span className="text-xs font-medium">REST API</span>
                      </div>
                      <div className="connector-node bg-indigo-100 text-indigo-700 hover:scale-110 transition-all duration-300">
                        <Terminal className="h-5 w-5" />
                        <span className="text-xs font-medium">Custom UI</span>
                      </div>
                      <div className="connector-node bg-pink-100 text-pink-700 hover:scale-110 transition-all duration-300">
                        <Globe className="h-5 w-5" />
                        <span className="text-xs font-medium">Web Portal</span>
                      </div>
                      <div className="connector-node bg-cyan-100 text-cyan-700 hover:scale-110 transition-all duration-300">
                        <Zap className="h-5 w-5" />
                        <span className="text-xs font-medium">Webhooks</span>
                      </div>
                      <div className="connector-node bg-violet-100 text-violet-700 hover:scale-110 transition-all duration-300">
                        <Users className="h-5 w-5" />
                        <span className="text-xs font-medium">Teams</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="text-center mb-6">
                    <h4 className="text-lg font-semibold font-sans text-gray-900">Real-time Data Flow</h4>
                    <p className="text-sm text-gray-600 font-serif">
                      Watch how your data flows securely through the system
                    </p>
                  </div>
                  <div className="flex items-center justify-center space-x-4 overflow-x-auto pb-4">
                    <div className="flex items-center space-x-2 bg-blue-50 rounded-lg px-4 py-2 animate-pulse">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                      <span className="text-sm font-medium text-blue-700">Document Upload</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                    <div className="flex items-center space-x-2 bg-purple-50 rounded-lg px-4 py-2 animate-pulse animation-delay-300">
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce animation-delay-300"></div>
                      <span className="text-sm font-medium text-purple-700">Vector Processing</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                    <div className="flex items-center space-x-2 bg-green-50 rounded-lg px-4 py-2 animate-pulse animation-delay-600">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce animation-delay-600"></div>
                      <span className="text-sm font-medium text-green-700">Secure Storage</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                    <div className="flex items-center space-x-2 bg-orange-50 rounded-lg px-4 py-2 animate-pulse animation-delay-900">
                      <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce animation-delay-900"></div>
                      <span className="text-sm font-medium text-orange-700">Query Response</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation & Resources */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-sans animate-fade-in-up">
                {t.documentation.title}
              </h2>
            </div>

            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-200">
                  <div className="bg-blue-100 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                    <Code className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 font-sans">{t.documentation.apiDocs}</h3>
                  <p className="text-sm text-gray-600 font-serif mb-4">{t.documentation.apiDocsDesc}</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View Docs
                  </Button>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-400">
                  <div className="bg-green-100 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                    <Server className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 font-sans">{t.documentation.deployment}</h3>
                  <p className="text-sm text-gray-600 font-serif mb-4">{t.documentation.deploymentDesc}</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Get Started
                  </Button>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-600">
                  <div className="bg-red-100 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 font-sans">{t.documentation.security}</h3>
                  <p className="text-sm text-gray-600 font-serif mb-4">{t.documentation.securityDesc}</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Download PDF
                  </Button>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-800">
                  <div className="bg-purple-100 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 font-sans">{t.documentation.support}</h3>
                  <p className="text-sm text-gray-600 font-serif mb-4">{t.documentation.supportDesc}</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Contact Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-sans animate-fade-in-up">
                Ready to Transform Your Data?
              </h2>
              <p className="mt-6 text-xl leading-8 text-emerald-100 font-serif animate-fade-in-up animation-delay-200">
                Let's discuss how Ingesto can unlock the value in your confidential data
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up animation-delay-400">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 text-lg transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/50"
                >
                  {t.bookDemo}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-emerald-300 text-emerald-100 hover:bg-emerald-800 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  <a href="/">Back to Home</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
