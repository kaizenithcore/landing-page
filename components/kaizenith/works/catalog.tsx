"use client"

import Image from "next/image"
import {
  ExternalLink,
  LayoutDashboard,
  Landmark,
  ShieldCheck,
  HeartPulse,
  GraduationCap,
  Wallet,
  Building2,
  Globe,
  type LucideIcon,
} from "lucide-react"
import { useLocale } from "@/lib/i18n/locale-context"

type ProjectTier = "complete" | "advanced" | "almostReady" | "inDevelopment"

interface ProjectEntry {
  id: string
  tier: ProjectTier
  title: string
  subtitle: string
  description: string
  image?: string
  url?: string
  icon: LucideIcon
}

export function CatalogSection() {
  const { t } = useLocale()
  const items = t.projects.items

  const getTierLabel = (tier: ProjectTier): string => {
    switch (tier) {
      case "complete":
        return t.projects.statusComplete
      case "advanced":
        return t.projects.statusAdvanced
      case "almostReady":
        return t.projects.statusAlmostReady
      case "inDevelopment":
        return t.projects.statusInDevelopment
    }
  }

  const getTierColor = (tier: ProjectTier): string => {
    switch (tier) {
      case "complete":
        return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
      case "advanced":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
      case "almostReady":
        return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20"
      case "inDevelopment":
        return "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20"
    }
  }

  const products: ProjectEntry[] = [
    {
      id: "workspace",
      tier: "complete",
      title: items.workspace.title,
      subtitle: items.workspace.subtitle,
      description: items.workspace.description,
      image: "/images/proyects/workspaceCaptura.png",
      url: "https://workspace.kaizenith.es",
      icon: LayoutDashboard,
    },
    {
      id: "cashpilot",
      tier: "almostReady",
      title: items.cashpilot.title,
      subtitle: items.cashpilot.subtitle,
      description: items.cashpilot.description,
      image: "/images/proyects/cashpilot.png",
      // url: add when it's public
      icon: Wallet,
    },
    {
      id: "enlace",
      tier: "advanced",
      title: items.enlace.title,
      subtitle: items.enlace.subtitle,
      description: items.enlace.description,
      image: "/images/proyects/Enlace.png",
      url: "https://enlace.kaizenith.es",
      icon: Landmark,
    },
    {
      id: "cronista",
      tier: "advanced",
      title: items.cronista.title,
      subtitle: items.cronista.subtitle,
      description: items.cronista.description,
      image: "/images/proyects/cronista.png",
      icon: ShieldCheck,
    },
    {
      id: "serena",
      tier: "advanced",
      title: items.serena.title,
      subtitle: items.serena.subtitle,
      description: items.serena.description,
      image: "/images/proyects/Serena.png",
      // url: add when it's public
      icon: HeartPulse,
    },
    {
      id: "nexa",
      tier: "advanced",
      title: items.nexa.title,
      subtitle: items.nexa.subtitle,
      description: items.nexa.description,
      image: "/images/proyects/nexa.png",
      // url: add when it's public
      icon: GraduationCap,
    },
    
    {
      id: "urbana",
      tier: "inDevelopment",
      title: items.urbana.title,
      subtitle: items.urbana.subtitle,
      description: items.urbana.description,
      image: "/images/proyects/urbana.png",

      // image/url: add when ready
      icon: Building2,
    },
    {
      id: "petCarePocket",
      tier: "complete",
      title: items.petCarePocket.title,
      subtitle: items.petCarePocket.subtitle,
      description: items.petCarePocket.description,
      image: "/images/proyects/petCarePocket.png",
      url: "https://petcarepocket.kaizenith.es",
      icon: Building2,
    },
  ]

  const services: ProjectEntry[] = [
    {
      id: "zarpe",
      tier: "complete",
      title: items.zarpe.title,
      subtitle: items.zarpe.subtitle,
      description: items.zarpe.description,
      image: "/images/proyects/zarpe.png",
      url: "https://zarpe.kaizenith.es",
      icon: Globe,
    },
  ]

  return (
    <section id="projects" className="py-24 md:py-32 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <p className="text-sm text-muted-foreground max-w-2xl">{t.works.catalog.intro}</p>
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider whitespace-nowrap">
              {t.works.catalog.productsTitle}
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {products.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                tierLabel={getTierLabel(project.tier)}
                tierColor={getTierColor(project.tier)}
                viewLabel={t.projects.viewProject}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider whitespace-nowrap">
              {t.works.catalog.servicesTitle}
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {services.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                tierLabel={getTierLabel(project.tier)}
                tierColor={getTierColor(project.tier)}
                viewLabel={t.projects.viewProject}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  tierLabel,
  tierColor,
  viewLabel,
}: {
  project: ProjectEntry
  tierLabel: string
  tierColor: string
  viewLabel: string
}) {
  const Icon = project.icon

  return (
    <article className="group rounded-xl bg-card border border-border p-5 flex flex-col gap-3 transition-all duration-300 hover:border-primary/30 hover:-translate-y-0.5">
      {project.image ? (
        <div className="aspect-video relative -mx-1 -mt-1 rounded-lg overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={project.subtitle}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
      )}

      <div className="flex items-start justify-between gap-2">
        <h4 className="font-semibold text-foreground">{project.title}</h4>
        <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full border whitespace-nowrap ${tierColor}`}>
          {tierLabel}
        </span>
      </div>

      <p className="text-sm text-muted-foreground">{project.subtitle}</p>
      <p className="text-sm text-foreground/80 flex-1">{project.description}</p>

      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          {viewLabel}
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      )}
    </article>
  )
}
