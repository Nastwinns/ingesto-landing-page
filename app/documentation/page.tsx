"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Book, Code, Download, ExternalLink, FileText, Zap } from "lucide-react"
import { useState } from "react"

type Language = "en" | "fr" | "pt" | "es"

const translations = {
  en: {
    title: "Documentation & Resources",
    subtitle: "Everything you need to get started with Ingesto",
    backToHome: "← Back to Home",
    bookDemo: "Book Demo",
    quickStart: "Quick Start Guide",
    apiDocs: "API Documentation",
    cliReference: "CLI Reference",
    examples: "Code Examples",
    tutorials: "Video Tutorials",
    support: "Support & FAQ",
  },
  fr: {
    title: "Documentation & Ressources",
    subtitle: "Tout ce dont vous avez besoin pour commencer avec Ingesto",
    backToHome: "← Retour à l'accueil",
    bookDemo: "Réserver une Démo",
    quickStart: "Guide de Démarrage Rapide",
    apiDocs: "Documentation API",
    cliReference: "Référence CLI",
    examples: "Exemples de Code",
    tutorials: "Tutoriels Vidéo",
    support: "Support & FAQ",
  },
  pt: {
    title: "Documentação & Recursos",
    subtitle: "Tudo que você precisa para começar com a Ingesto",
    backToHome: "← Voltar ao Início",
    bookDemo: "Agendar Demo",
    quickStart: "Guia de Início Rápido",
    apiDocs: "Documentação da API",
    cliReference: "Referência CLI",
    examples: "Exemplos de Código",
    tutorials: "Tutoriais em Vídeo",
    support: "Suporte & FAQ",
  },
  es: {
    title: "Documentación & Recursos",
    subtitle: "Todo lo que necesitas para comenzar con Ingesto",
    backToHome: "← Volver al Inicio",
    bookDemo: "Reservar Demo",
    quickStart: "Guía de Inicio Rápido",
    apiDocs: "Documentación API",
    cliReference: "Referencia CLI",
    examples: "Ejemplos de Código",
    tutorials: "Tutoriales en Video",
    support: "Soporte & FAQ",
  },
}

export default function DocumentationPage() {
  const [language, setLanguage] = useState<Language>("en")
  const t = translations[language]

  const docSections = [
    {
      icon: Zap,
      title: t.quickStart,
      description: "Get up and running in 10 minutes",
      color: "from-emerald-600 to-emerald-800",
      items: ["Installation & Setup", "First RAG Deployment", "Basic Configuration", "Testing Your Setup"],
    },
    {
      icon: Code,
      title: t.apiDocs,
      description: "Complete API reference and endpoints",
      color: "from-blue-600 to-blue-800",
      items: ["Authentication", "Data Ingestion API", "Query API", "Management API"],
    },
    {
      icon: FileText,
      title: t.cliReference,
      description: "Command-line interface documentation",
      color: "from-purple-600 to-purple-800",
      items: ["Installation Commands", "Deployment Commands", "Data Management", "Monitoring & Logs"],
    },
    {
      icon: Book,
      title: t.examples,
      description: "Ready-to-use code examples",
      color: "from-orange-600 to-orange-800",
      items: ["Python Integration", "JavaScript/Node.js", "REST API Examples", "Webhook Integration"],
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

      {/* Documentation Sections */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {docSections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`bg-gradient-to-br ${section.color} rounded-xl p-3`}>
                      <section.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 font-sans">{section.title}</h3>
                      <p className="text-gray-600 font-serif text-sm">{section.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700 font-serif text-sm">{item}</span>
                        <ExternalLink className="h-4 w-4 text-gray-400 ml-auto" />
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                    View Documentation
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 font-sans">Additional Resources</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 font-sans">{t.tutorials}</h3>
                <p className="text-gray-600 mb-4 font-serif">Step-by-step video guides for common scenarios</p>
                <ul className="space-y-2 text-sm">
                  <li>• Setting up your first RAG system</li>
                  <li>• Advanced configuration options</li>
                  <li>• Troubleshooting common issues</li>
                  <li>• Performance optimization tips</li>
                </ul>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  Watch Tutorials
                </Button>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 font-sans">{t.support}</h3>
                <p className="text-gray-600 mb-4 font-serif">Get help from our expert team</p>
                <ul className="space-y-2 text-sm">
                  <li>• 24/7 technical support</li>
                  <li>• Community forum</li>
                  <li>• Knowledge base</li>
                  <li>• Direct expert consultation</li>
                </ul>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  Get Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6 font-sans">Download Resources</h2>
            <p className="text-xl text-emerald-200 mb-8 font-serif">Get our comprehensive guides and tools</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-900 hover:bg-gray-100 px-8 py-3">
                <Download className="h-5 w-5 mr-2" />
                CLI Tool
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-3 bg-transparent"
              >
                <FileText className="h-5 w-5 mr-2" />
                Implementation Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
