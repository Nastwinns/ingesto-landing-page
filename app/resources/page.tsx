"use client"
import { useState } from "react"

type Language = "en" | "fr" | "pt" | "es"

export default function ResourcesPage() {
  const [language, setLanguage] = useState<Language>("en")

  const translations = {
    en: {
      title: "Free Resources for IT Leaders",
      subtitle: "Expert guides and tools to accelerate your enterprise AI journey",
      downloadNow: "Download Now",
      getTemplate: "Get Template",
      accessGuide: "Access Guide",
      getPlaybook: "Get Playbook",
    },
    fr: {
      title: "Ressources Gratuites pour Dirigeants IT",
      subtitle: "Guides d'experts et outils pour accélérer votre parcours IA d'entreprise",
      downloadNow: "Télécharger Maintenant",
      getTemplate: "Obtenir le Template",
      accessGuide: "Accéder au Guide",
      getPlaybook: "Obtenir le Playbook",
    },
    pt: {
      title: "Recursos Gratuitos para Líderes de TI",
      subtitle: "Guias de especialistas e ferramentas para acelerar sua jornada de IA empresarial",
      downloadNow: "Baixar Agora",
      getTemplate: "Obter Template",
      accessGuide: "Acessar Guia",
      getPlaybook: "Obter Playbook",
    },
    es: {
      title: "Recursos Gratuitos para Líderes de TI",
      subtitle: "Guías de expertos y herramientas para acelerar su viaje de IA empresarial",
      downloadNow: "Descargar Ahora",
      getTemplate: "Obtener Plantilla",
      accessGuide: "Acceder a la Guía",
      getPlaybook: "Obtener Playbook",
    },
  }

  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-emerald-900 sm:text-5xl font-sans">{t.title}</h1>
          <p className="mt-6 text-xl text-emerald-700 font-serif">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* All the lead magnet cards would go here */}
        </div>
      </div>
    </div>
  )
}
