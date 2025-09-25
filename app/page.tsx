"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
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
      title: "Enterprise AI as Code",
      subtitle:
        "Deploy secure, compliant RAG solutions declaratively with complete control over data isolation, performance, and cost. Ingesto gives you AI options tailored to any enterprise workload.",
      cta: "Try Ingesto",
      demo: "Enterprise demo",
      tagline: "Secure AI, real isolation.",
    },
    bookDemo: "Book Demo",
    howItWorks: "How it Works",
    useCases: "Use Cases",
    team: "Team",
    requestDemo: "Request a Demo",
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
      title: "IA d'Entreprise as Code",
      subtitle:
        "Déployez des solutions RAG sécurisées et conformes de manière déclarative avec un contrôle total sur l'isolation des données, les performances et les coûts. Ingesto vous offre des options IA adaptées à toute charge de travail d'entreprise.",
      cta: "Essayer Ingesto",
      demo: "Démo entreprise",
      tagline: "IA sécurisée, isolation réelle.",
    },
    bookDemo: "Réserver une démo",
    howItWorks: "Fonctionnement",
    useCases: "Cas d'usage",
    team: "Équipe",
    requestDemo: "Demander une Démo",
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
      title: "IA Empresarial as Code",
      subtitle:
        "Implante soluções RAG seguras e conformes de forma declarativa com controle total sobre isolamento de dados, performance e custo. Ingesto oferece opções de IA adaptadas a qualquer carga de trabalho empresarial.",
      cta: "Experimentar Ingesto",
      demo: "Demo empresarial",
      tagline: "IA segura, isolamento real.",
    },
    bookDemo: "Agendar demonstração",
    howItWorks: "Como Funciona",
    useCases: "Casos de Uso",
    team: "Equipe",
    requestDemo: "Solicitar Demo",
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
      title: "IA Empresarial as Code",
      subtitle:
        "Despliegue soluciones RAG seguras y conformes de manera declarativa con control total sobre aislamiento de datos, rendimiento y costo. Ingesto le ofrece opciones de IA adaptadas a cualquier carga de trabajo empresarial.",
      cta: "Probar Ingesto",
      demo: "Demo empresarial",
      tagline: "IA segura, aislamiento real.",
    },
    bookDemo: "Reservar demo",
    howItWorks: "Cómo Funciona",
    useCases: "Casos de Uso",
    team: "Equipo",
    requestDemo: "Solicitar Demo",
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
    <div className="min-h-screen bg-white">
      {/* Header - vCluster style: Clean and minimal */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">Ingesto</span>
            </div>

            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex items-center space-x-8">
                <a href="/how-it-works" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                  {t.howItWorks}
                </a>
                <a href="/use-cases" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                  {t.useCases}
                </a>
                <a href="#team" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                  {t.team}
                </a>
              </nav>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-white border border-gray-200 rounded-md px-3 py-1 text-sm text-gray-700"
              >
                <option value="en">🇺🇸 EN</option>
                <option value="fr">🇫🇷 FR</option>
                <option value="pt">🇧🇷 PT</option>
                <option value="es">🇪🇸 ES</option>
              </select>

              <Button
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                onClick={openCalendly}
              >
                {t.requestDemo}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - vCluster inspired: Bold, clean, focused */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">{t.hero.title}</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">{t.hero.subtitle}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-base font-medium"
                onClick={openCalendly}
              >
                {t.hero.cta}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 text-base font-medium bg-transparent"
                onClick={() => (window.location.href = "/how-it-works")}
              >
                {t.hero.demo}
              </Button>
            </div>

            <p className="text-lg text-gray-500 mb-8">{t.hero.tagline}</p>

            <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
              {language === "fr"
                ? "Chaque solution RAG a son propre serveur API, fonctionne sur une infrastructure partagée ou dédiée, et vous offre des options de déploiement flexibles — des espaces de noms simples aux clusters entièrement dédiés et tout ce qui se trouve entre les deux."
                : language === "pt"
                  ? "Cada solução RAG tem seu próprio servidor API, roda em infraestrutura compartilhada ou dedicada, e oferece opções de implantação flexíveis — desde namespaces simples até clusters totalmente dedicados e tudo entre eles."
                  : language === "es"
                    ? "Cada solución RAG tiene su propio servidor API, funciona en infraestructura compartilhada o dedicada, y le ofrece opciones de despliegue flexibles — desde namespaces simples hasta clusters totalmente dedicados y todo lo que está en el medio."
                    : "Each RAG solution has its own API server, runs on shared or dedicated infrastructure, and gives you flexible deployment options — from simple namespaces to fully dedicated clusters and everything in between."}
            </p>

            <Button
              variant="link"
              className="text-emerald-600 hover:text-emerald-700 p-0 h-auto font-medium"
              onClick={() => (window.location.href = "/how-it-works")}
            >
              {language === "fr"
                ? "Explorer les modèles de déploiement"
                : language === "pt"
                  ? "Explorar modelos de implantação"
                  : language === "es"
                    ? "Explorar modelos de despliegue"
                    : "Explore deployment models"}{" "}
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Rethink Section - vCluster style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              {language === "fr"
                ? "Repensez votre architecture IA"
                : language === "pt"
                  ? "Repense sua arquitetura de IA"
                  : language === "es"
                    ? "Repiense su arquitectura de IA"
                    : "Rethink your AI architecture"}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* GPU & AI */}
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === "fr"
                    ? "GPU & IA"
                    : language === "pt"
                      ? "GPU & IA"
                      : language === "es"
                        ? "GPU & IA"
                        : "GPU & AI"}
                </h3>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  {language === "fr"
                    ? "Obtenez la plus haute utilisation GPU sans sacrifier l'isolation"
                    : language === "pt"
                      ? "Obtenha a maior utilização de GPU sem sacrificar o isolamento"
                      : language === "es"
                        ? "Obtenga la mayor utilización de GPU sin sacrificar el aislamiento"
                        : "Achieve the highest GPU utilization without sacrificing isolation"}
                </h4>
                <p className="text-gray-600 mb-6">
                  {language === "fr"
                    ? "Construisez votre cloud GPU interne avec Ingesto pour que les développeurs aient un accès rapide et sécurisé aux GPU, et votre organisation tire le maximum de chaque carte."
                    : language === "pt"
                      ? "Construa sua nuvem GPU interna com Ingesto para que os desenvolvedores tenham acesso rápido e seguro às GPUs, e sua organização tire o máximo de cada placa."
                      : language === "es"
                        ? "Construya su nube GPU interna con Ingesto para que los desarrolladores tengan acceso rápido y seguro a las GPUs, y su organización obtenga el máximo de cada tarjeta."
                        : "Build your internal GPU cloud with Ingesto so developers get fast, secure access to GPUs, and your organization gets the most from every card."}
                </p>
                <Button variant="link" className="text-emerald-600 hover:text-emerald-700 p-0 h-auto">
                  {language === "fr"
                    ? "Voir la solution"
                    : language === "pt"
                      ? "Ver solução"
                      : language === "es"
                        ? "Ver solución"
                        : "View solution"}{" "}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>

            {/* Enterprise Security */}
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === "fr"
                    ? "Sécurité Entreprise"
                    : language === "pt"
                      ? "Segurança Empresarial"
                      : language === "es"
                        ? "Seguridad Empresarial"
                        : "Enterprise Security"}
                </h3>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  {language === "fr"
                    ? "Exécutez l'IA sur votre infrastructure, zéro fuite de données"
                    : language === "pt"
                      ? "Execute IA em sua infraestrutura, zero vazamento de dados"
                      : language === "es"
                        ? "Ejecute IA en su infraestructura, cero fuga de datos"
                        : "Run AI on your infrastructure, zero data leakage"}
                </h4>
                <p className="text-gray-600 mb-6">
                  {language === "fr"
                    ? "L'infrastructure privée est enfin viable — plus de VMs coûteuses et gaspilleuses. Les solutions RAG virtuelles vous donnent l'isolation sans la surcharge."
                    : language === "pt"
                      ? "Infraestrutura privada é finalmente viável — sem VMs caras e desperdiçadoras. Soluções RAG virtuais oferecem isolamento sem sobrecarga."
                      : language === "es"
                        ? "La infraestructura privada es finalmente viable — sin VMs caras y desperdiciadas. Las soluciones RAG virtuales ofrecen aislamiento sin sobrecarga."
                        : "Private infrastructure is finally viable—no more expensive, wasteful VMs. Virtual RAG solutions give you isolation without the overhead."}
                </p>
                <Button variant="link" className="text-emerald-600 hover:text-emerald-700 p-0 h-auto">
                  {language === "fr"
                    ? "Voir la solution"
                    : language === "pt"
                      ? "Ver solução"
                      : language === "es"
                        ? "Ver solución"
                        : "View solution"}{" "}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>

            {/* Platform Engineering */}
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === "fr"
                    ? "Ingénierie de Plateforme"
                    : language === "pt"
                      ? "Engenharia de Plataforma"
                      : language === "es"
                        ? "Ingeniería de Plataforma"
                        : "Platform Engineering"}
                </h3>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  {language === "fr"
                    ? "Alimentez votre plateforme IA interne avec des solutions RAG virtuelles"
                    : language === "pt"
                      ? "Alimente sua plataforma IA interna com soluções RAG virtuais"
                      : language === "es"
                        ? "Alimente su plataforma IA interna con soluciones RAG virtuales"
                        : "Power your internal AI platform with virtual RAG solutions"}
                </h4>
                <p className="text-gray-600 mb-6">
                  {language === "fr"
                    ? "Construisez des environnements IA sécurisés, évolutifs et multi-locataires. Donnez à chaque équipe un accès isolé et en libre-service, sans le coût et la complexité de gérer plus de clusters physiques."
                    : language === "pt"
                      ? "Construa ambientes IA seguros, escaláveis e multi-tenant. Dê a cada equipe acesso isolado e self-service, sem o custo e complexidade de gerenciar mais clusters físicos."
                      : language === "es"
                        ? "Construya entornos IA seguros, escalables y multi-tenant. Dé a cada equipo acceso aislado y autoservicio, sin el costo y complejidad de gestionar más clusters físicos."
                        : "Build secure, scalable, multi-tenant AI environments. Empower every team with isolated, self-service access, without the cost and complexity of managing more physical clusters."}
                </p>
                <Button variant="link" className="text-emerald-600 hover:text-emerald-700 p-0 h-auto">
                  {language === "fr"
                    ? "Voir la solution"
                    : language === "pt"
                      ? "Ver solução"
                      : language === "es"
                        ? "Ver solución"
                        : "View solution"}{" "}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - vCluster style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-emerald-50 rounded-lg p-8 border border-emerald-200">
              <div className="text-4xl font-bold text-emerald-600 mb-2">48h</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {language === "fr"
                  ? "Pour lancer la plateforme IA leader en France"
                  : language === "pt"
                    ? "Para lançar a plataforma IA líder no Brasil"
                    : language === "es"
                      ? "Para lanzar la plataforma IA líder en España"
                      : "To launch France's leading AI platform"}
              </div>
              <Button variant="link" className="text-emerald-600 hover:text-emerald-700 p-0 h-auto text-sm">
                {language === "fr"
                  ? "Voir l'étude de cas"
                  : language === "pt"
                    ? "Ver estudo de caso"
                    : language === "es"
                      ? "Ver caso de estudio"
                      : "View case study"}
              </Button>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {language === "fr"
                  ? "Réduction des coûts cloud en passant à l'infrastructure privée"
                  : language === "pt"
                    ? "Redução de custos cloud mudando para infraestrutura privada"
                    : language === "es"
                      ? "Reducción de costos cloud cambiando a infraestructura privada"
                      : "Cloud cost reduction by switching to private infrastructure"}
              </div>
              <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0 h-auto text-sm">
                {language === "fr"
                  ? "Voir l'étude de cas"
                  : language === "pt"
                    ? "Ver estudo de caso"
                    : language === "es"
                      ? "Ver caso de estudio"
                      : "View case study"}
              </Button>
            </div>

            <div className="bg-purple-50 rounded-lg p-8 border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">75%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {language === "fr"
                  ? "Provisioning plus rapide en activant l'IA en libre-service"
                  : language === "pt"
                    ? "Provisionamento mais rápido habilitando IA self-service"
                    : language === "es"
                      ? "Aprovisionamiento más rápido habilitando IA autoservicio"
                      : "Faster provisioning by enabling self-service AI"}
              </div>
              <Button variant="link" className="text-purple-600 hover:text-purple-700 p-0 h-auto text-sm">
                {language === "fr"
                  ? "Voir l'étude de cas"
                  : language === "pt"
                    ? "Ver estudo de caso"
                    : language === "es"
                      ? "Ver caso de estudio"
                      : "View case study"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section - vCluster style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mb-12">
            <div className="text-sm font-medium text-emerald-600 uppercase tracking-wide mb-4">
              {language === "fr"
                ? "COMMENCER"
                : language === "pt"
                  ? "COMEÇAR"
                  : language === "es"
                    ? "EMPEZAR"
                    : "GET STARTED"}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === "fr"
                ? "Déployez Ingesto en minutes."
                : language === "pt"
                  ? "Implante Ingesto em minutos."
                  : language === "es"
                    ? "Despliegue Ingesto en minutos."
                    : "Deploy Ingesto in minutes."}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {language === "fr"
                ? "Avec quelques commandes simples, vous pouvez créer votre première solution RAG et définir comment les charges de travail sont isolées — le tout avec un fichier de configuration ingesto.yaml léger."
                : language === "pt"
                  ? "Com alguns comandos simples, você pode criar sua primeira solução RAG e definir como as cargas de trabalho são isoladas — tudo com um arquivo de configuração ingesto.yaml leve."
                  : language === "es"
                    ? "Con algunos comandos simples, puede crear su primera solución RAG y definir cómo se aíslan las cargas de trabajo — todo con un archivo de configuración ingesto.yaml ligero."
                    : "With a few simple commands, you can create your first RAG solution and define how workloads are isolated — all with a lightweight ingesto.yaml config."}
            </p>

            <div className="flex gap-4 mb-12">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3" onClick={openCalendly}>
                {language === "fr"
                  ? "Installer"
                  : language === "pt"
                    ? "Instalar"
                    : language === "es"
                      ? "Instalar"
                      : "Install"}
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 bg-transparent"
                onClick={() => (window.location.href = "/documentation")}
              >
                {language === "fr" ? "Docs" : language === "pt" ? "Docs" : language === "es" ? "Docs" : "Docs"}
              </Button>
            </div>
          </div>

          {/* Configuration Examples */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {language === "fr"
                  ? "Nœuds Partagés"
                  : language === "pt"
                    ? "Nós Compartilhados"
                    : language === "es"
                      ? "Nodos Compartidos"
                      : "Shared Nodes"}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {language === "fr"
                  ? "Les solutions RAG virtuelles partagent les nœuds de l'hôte et les plugins"
                  : language === "pt"
                    ? "Soluções RAG virtuais compartilham os nós do host e plugins"
                    : language === "es"
                      ? "Las soluciones RAG virtuales comparten los nodos del host y plugins"
                      : "Virtual RAG solutions share the host's nodes and plugins"}
              </p>
              <div className="bg-gray-900 rounded-md p-4 text-sm text-gray-300 font-mono">
                <div className="text-gray-500"># ingesto.yaml</div>
                <div>sync:</div>
                <div className="ml-2">fromHost:</div>
                <div className="ml-4">nodes:</div>
                <div className="ml-6 text-gray-500"># set to true for real node specs</div>
                <div className="ml-6">enabled: false</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {language === "fr"
                  ? "Nœuds Dédiés"
                  : language === "pt"
                    ? "Nós Dedicados"
                    : language === "es"
                      ? "Nodos Dedicados"
                      : "Dedicated Nodes"}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {language === "fr"
                  ? "Les solutions RAG virtuelles s'exécutent sur leur propre ensemble de nœuds assignés par l'hôte"
                  : language === "pt"
                    ? "Soluções RAG virtuais rodam em seu próprio conjunto de nós atribuídos pelo host"
                    : language === "es"
                      ? "Las soluciones RAG virtuales se ejecutan en su propio conjunto de nodos asignados por el host"
                      : "Virtual RAG solutions run on their own set of host-assigned nodes"}
              </p>
              <div className="bg-gray-900 rounded-md p-4 text-sm text-gray-300 font-mono">
                <div className="text-gray-500"># ingesto.yaml</div>
                <div>sync:</div>
                <div className="ml-2">fromHost:</div>
                <div className="ml-4">nodes:</div>
                <div className="ml-6">enabled: true</div>
                <div className="ml-6">selector:</div>
                <div className="ml-8">labels:</div>
                <div className="ml-10">tenant: tenant-1</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {language === "fr"
                  ? "Nœuds Privés"
                  : language === "pt"
                    ? "Nós Privados"
                    : language === "es"
                      ? "Nodos Privados"
                      : "Private Nodes"}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {language === "fr"
                  ? "Les solutions RAG virtuelles s'exécutent sur des nœuds entièrement séparés avec leur propre contrôle"
                  : language === "pt"
                    ? "Soluções RAG virtuais rodam em nós totalmente separados com seu próprio controle"
                    : language === "es"
                      ? "Las soluciones RAG virtuales se ejecutan en nodos totalmente separados con su propio control"
                      : "Virtual RAG solutions run on fully separate nodes with their own control"}
              </p>
              <div className="bg-gray-900 rounded-md p-4 text-sm text-gray-300 font-mono">
                <div className="text-gray-500"># ingesto.yaml</div>
                <div>privateNodes:</div>
                <div className="ml-2">enabled: true</div>
                <div>controlPlane:</div>
                <div className="ml-2">service:</div>
                <div className="ml-4">spec:</div>
                <div className="ml-6">type: NodePort</div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button variant="link" className="text-emerald-600 hover:text-emerald-700">
              {language === "fr"
                ? "Voir la documentation complète ingesto.yaml"
                : language === "pt"
                  ? "Ver documentação completa ingesto.yaml"
                  : language === "es"
                    ? "Ver documentación completa ingesto.yaml"
                    : "View full ingesto.yaml docs"}{" "}
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Deploy On Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {language === "fr"
                ? "Déployez sur..."
                : language === "pt"
                  ? "Implante em..."
                  : language === "es"
                    ? "Despliegue en..."
                    : "Deploy on..."}
            </h2>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 items-center justify-items-center">
            {["AWS", "GCP", "Azure", "OVH", "Bare Metal", "Docker", "K8s", "OpenShift", "Private Cloud"].map(
              (platform) => (
                <div key={platform} className="bg-gray-100 rounded-lg p-4 w-20 h-16 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">{platform}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === "fr"
                ? "Adopté à grande échelle. Façonné par notre communauté."
                : language === "pt"
                  ? "Adotado em escala. Moldado por nossa comunidade."
                  : language === "es"
                    ? "Adoptado a escala. Moldeado por nuestra comunidad."
                    : "Adopted at scale. Shaped by our community."}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "fr"
                ? "Des environnements de développement flexibles à l'isolation sécurisée des locataires, Ingesto est devenu la fondation de la façon dont les équipes mettent à l'échelle l'IA."
                : language === "pt"
                  ? "De ambientes de desenvolvimento flexíveis ao isolamento seguro de inquilinos, Ingesto se tornou a base de como as equipes escalam IA."
                  : language === "es"
                    ? "Desde entornos de desarrollo flexibles hasta aislamiento seguro de inquilinos, Ingesto se ha convertido en la base de cómo los equipos escalan IA."
                    : "From flexible dev environments to secure tenant isolation, Ingesto has become the foundation for how teams scale AI."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">40M+</div>
              <div className="text-lg text-gray-600">
                {language === "fr"
                  ? "Solutions RAG"
                  : language === "pt"
                    ? "Soluções RAG"
                    : language === "es"
                      ? "Soluciones RAG"
                      : "RAG Solutions"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">150+</div>
              <div className="text-lg text-gray-600">
                {language === "fr"
                  ? "Contributeurs actifs"
                  : language === "pt"
                    ? "Contribuidores ativos"
                    : language === "es"
                      ? "Contribuidores activos"
                      : "Active contributors"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">27K+</div>
              <div className="text-lg text-gray-600">
                {language === "fr"
                  ? "Étoiles GitHub"
                  : language === "pt"
                    ? "Estrelas GitHub"
                    : language === "es"
                      ? "Estrellas GitHub"
                      : "GitHub stars"}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <blockquote className="text-lg text-gray-700 mb-6">
                {language === "fr"
                  ? "« Réduire les coûts en migrant des clusters individuels vers des solutions RAG virtuelles, c'est formidable. »"
                  : language === "pt"
                    ? "« Reduzir custos migrando clusters individuais para soluções RAG virtuais é ótimo. »"
                    : language === "es"
                      ? "« Reducir costos migrando clusters individuales a soluciones RAG virtuales se siente genial. »"
                      : "« Cutting costs by migrating individual clusters to virtual RAG solutions feels great. »"}
              </blockquote>
              <div className="flex items-center">
                <div>
                  <div className="font-semibold text-gray-900">Jean Balin</div>
                  <div className="text-gray-600">Co-Founder</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <blockquote className="text-lg text-gray-700 mb-6">
                {language === "fr"
                  ? "« Toute organisation qui exécute beaucoup de solutions IA devrait sérieusement regarder Ingesto. Avec Ingesto, vous pouvez réduire les coûts et augmenter l'agilité et la sécurité. »"
                  : language === "pt"
                    ? "« Qualquer organização que executa muitas soluções IA deveria seriamente olhar para Ingesto. Com Ingesto você pode reduzir custos e aumentar agilidade e segurança. »"
                    : language === "es"
                      ? "« Cualquier organización que ejecute muchas soluciones IA debería mirar seriamente Ingesto. Con Ingesto puedes reducir costos y aumentar agilidad y seguridad. »"
                      : "« Any organization that runs a lot of AI solutions should seriously look at Ingesto. With Ingesto you can bring down the cost and increase agility and security. »"}
              </blockquote>
              <div className="flex items-center">
                <div>
                  <div className="font-semibold text-gray-900">Darren Shepherd</div>
                  <div className="text-gray-600">Chief Architect & Co-Founder</div>
                  <div className="text-sm text-gray-500">Formerly: Founder & CTO of Rancher</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3"
              onClick={() => window.open("https://slack.loft.sh/", "_blank")}
            >
              {language === "fr"
                ? "Rejoindre la communauté"
                : language === "pt"
                  ? "Juntar-se à comunidade"
                  : language === "es"
                    ? "Unirse a la comunidad"
                    : "Join the community"}
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === "fr"
                ? "Plongez plus profondément. Apprenez plus."
                : language === "pt"
                  ? "Mergulhe mais fundo. Aprenda mais."
                  : language === "es"
                    ? "Profundice más. Aprenda más."
                    : "Dive deeper. Learn more."}
            </h2>
            <p className="text-xl text-gray-600">
              {language === "fr"
                ? "Améliorez votre jeu IA avec des insights pratiques et des ressources."
                : language === "pt"
                  ? "Melhore seu jogo de IA com insights práticos e recursos."
                  : language === "es"
                    ? "Mejore su juego de IA con insights prácticos y recursos."
                    : "Level up your AI game with practical insights and resources."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-sm font-medium text-emerald-600 uppercase tracking-wide mb-2">EBOOK</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {language === "fr"
                  ? "Construire des Plateformes IA sur Infrastructure Privée"
                  : language === "pt"
                    ? "Construindo Plataformas IA em Infraestrutura Privada"
                    : language === "es"
                      ? "Construyendo Plataformas IA en Infraestructura Privada"
                      : "Building AI Platforms on Private Infrastructure"}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === "fr"
                  ? "Un guide pratique pour les ingénieurs de plateforme construisant des environnements IA directement sur infrastructure privée."
                  : language === "pt"
                    ? "Um guia prático para engenheiros de plataforma construindo ambientes IA diretamente em infraestrutura privada."
                    : language === "es"
                      ? "Una guía práctica para ingenieros de plataforma construyendo entornos IA directamente en infraestructura privada."
                      : "A practical guide for platform engineers building AI environments directly on private infrastructure."}
              </p>
              <Button variant="link" className="text-emerald-600 hover:text-emerald-700 p-0 h-auto">
                {language === "fr"
                  ? "Lire plus"
                  : language === "pt"
                    ? "Ler mais"
                    : language === "es"
                      ? "Leer más"
                      : "Read more"}{" "}
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-2">
                {language === "fr"
                  ? "SÉRIE ÉDUCATIVE"
                  : language === "pt"
                    ? "SÉRIE EDUCACIONAL"
                    : language === "es"
                      ? "SERIE EDUCATIVA"
                      : "EDUCATIONAL SERIES"}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {language === "fr"
                  ? "Plateformes GPU pour l'IA"
                  : language === "pt"
                    ? "Plataformas GPU para IA"
                    : language === "es"
                      ? "Plataformas GPU para IA"
                      : "GPU-Enabled AI Platforms"}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === "fr"
                  ? "Apprenez les stratégies et architectures pour construire une infrastructure GPU sécurisée et évolutive pour l'IA."
                  : language === "pt"
                    ? "Aprenda as estratégias e arquiteturas para construir infraestrutura GPU segura e escalável para IA."
                    : language === "es"
                      ? "Aprenda las estrategias y arquitecturas para construir infraestructura GPU segura y escalable para IA."
                      : "Learn the strategies and architectures to build secure, scalable, GPU-enabled infrastructure for AI."}
              </p>
              <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0 h-auto">
                {language === "fr"
                  ? "S'inscrire"
                  : language === "pt"
                    ? "Registrar"
                    : language === "es"
                      ? "Registrarse"
                      : "Register"}{" "}
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-sm font-medium text-purple-600 uppercase tracking-wide mb-2">
                {language === "fr"
                  ? "ÉVÉNEMENT"
                  : language === "pt"
                    ? "EVENTO"
                    : language === "es"
                      ? "EVENTO"
                      : "EVENT"}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {language === "fr"
                  ? "Sommet Leadership Tech Entreprise 2025"
                  : language === "pt"
                    ? "Cúpula Liderança Tech Empresarial 2025"
                    : language === "es"
                      ? "Cumbre Liderazgo Tech Empresarial 2025"
                      : "Enterprise Tech Leadership Summit 2025"}
              </h3>
              <p className="text-gray-600 mb-6">
                {language === "fr"
                  ? "Rejoignez les leaders tech pour discuter de l'avenir de l'IA d'entreprise et des meilleures pratiques."
                  : language === "pt"
                    ? "Junte-se aos líderes tech para discutir o futuro da IA empresarial e melhores práticas."
                    : language === "es"
                      ? "Únase a los líderes tech para discutir el futuro de la IA empresarial y mejores prácticas."
                      : "Join tech leaders to discuss the future of enterprise AI and best practices."}
              </p>
              <Button variant="link" className="text-purple-600 hover:text-purple-700 p-0 h-auto">
                {language === "fr"
                  ? "En savoir plus"
                  : language === "pt"
                    ? "Saber mais"
                    : language === "es"
                      ? "Saber más"
                      : "Learn more"}{" "}
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-emerald-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {language === "fr"
                ? "Prêt à transformer votre infrastructure IA ?"
                : language === "pt"
                  ? "Pronto para transformar sua infraestrutura IA?"
                  : language === "es"
                    ? "¿Listo para transformar su infraestructura IA?"
                    : "Ready to transform your AI infrastructure?"}
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              {language === "fr"
                ? "Découvrez comment Ingesto peut sécuriser et optimiser vos solutions IA d'entreprise."
                : language === "pt"
                  ? "Descubra como Ingesto pode proteger e otimizar suas soluções IA empresariais."
                  : language === "es"
                    ? "Descubra cómo Ingesto puede asegurar y optimizar sus soluciones IA empresariales."
                    : "Discover how Ingesto can secure and optimize your enterprise AI solutions."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-50 px-8 py-3 text-lg font-medium"
                onClick={openCalendly}
              >
                {t.requestDemo}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 text-lg font-medium bg-transparent"
                onClick={() => (window.location.href = "/how-it-works")}
              >
                {language === "fr"
                  ? "Voir comment ça marche"
                  : language === "pt"
                    ? "Ver como funciona"
                    : language === "es"
                      ? "Ver cómo funciona"
                      : "See how it works"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
