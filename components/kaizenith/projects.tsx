"use client"

import Image from "next/image"
import {
  ExternalLink,
  Rocket,
  Globe,
  HeartPulse,
  Landmark,
  GraduationCap,
  Wallet,
  Ghost,
  Puzzle,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/i18n/locale-context"
import { GENERAL_EMAIL } from "@/lib/site-links"

type ProjectTier = "complete" | "advanced" | "almostReady"
type ProjectCategory = "productivity" | "business" | "games"

interface ProjectEntry {
  id: string
  category: ProjectCategory
  tier: ProjectTier
  title: string
  subtitle: string
  description: string
  /** Screenshot path. When absent, the card shows an icon tile instead. */
  image?: string
  /** Live URL. When absent, the card shows no action button (avoids dead links). */
  url?: string
  icon: LucideIcon
}

export function ProjectsSection() {
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
    }
  }

  const getTierColor = (tier: ProjectTier): string => {
    switch (tier) {
      case "complete":
        return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
      case "advanced":
      case "almostReady":
        return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20"
    }
  }

  const projects: ProjectEntry[] = [
    {
      id: "workspace",
      category: "productivity",
      tier: "complete",
      title: items.workspace.title,
      subtitle: items.workspace.subtitle,
      description: items.workspace.description,
      image: "/images/proyects/workspaceCaptura.png",
      url: "https://workspace.kaizenith.es",
      icon: Rocket,
    },
    {
      id: "zarpe",
      category: "business",
      tier: "almostReady",
      title: items.zarpe.title,
      subtitle: items.zarpe.subtitle,
      description: items.zarpe.description,
      image: "/images/proyects/zarpe.png",
      // url: add when it's public
      icon: Globe,
    },
    {
      id: "enlace",
      category: "business",
      tier: "almostReady",
      title: items.enlace.title,
      subtitle: items.enlace.subtitle,
      description: items.enlace.description,
      image: "/images/proyects/enlace.png",
      url: "https://enlace.kaizenith.es",
      icon: Landmark,
    },
    {
      id: "serena",
      category: "business",
      tier: "advanced",
      title: items.serena.title,
      subtitle: items.serena.subtitle,
      description: items.serena.description,
      image: "/images/proyects/serena.png",
      // url: add when it's public
      icon: HeartPulse,
    },
    
    {
      id: "nexa",
      category: "business",
      tier: "advanced",
      title: items.nexa.title,
      subtitle: items.nexa.subtitle,
      description: items.nexa.description,
      image: "/images/proyects/nexa.png",
      // url: add when it's public
      icon: GraduationCap,
    },
    // {
    //   id: "cashpilot",
    //   category: "business",
    //   tier: "almostReady",
    //   title: items.cashpilot.title,
    //   subtitle: items.cashpilot.subtitle,
    //   description: items.cashpilot.description,
    //   // url: add when it's public
    //   icon: Wallet,
    // },
    {
      id: "paranormal-detector",
      category: "games",
      tier: "complete",
      title: items.paranormalDetector.title,
      subtitle: items.paranormalDetector.subtitle,
      description: items.paranormalDetector.description,
      image: "/images/proyects/paranormalDetector.png",
      // url: paused (Supabase project limit) — add back once resumed
      icon: Ghost,
    },
    {
      id: "mhadle",
      category: "games",
      tier: "complete",
      title: items.mhadle.title,
      subtitle: items.mhadle.subtitle,
      description: items.mhadle.description,
      image: "/images/proyects/mhadle.png",
      // url: paused (Supabase project limit) — add back once resumed
      icon: Puzzle,
    },
  ]

  const categories: Array<{ key: ProjectCategory; label: string }> = [
    { key: "productivity", label: t.projects.categoryProductivity },
    { key: "business", label: t.projects.categoryBusiness },
    { key: "games", label: t.projects.categoryGames },
  ]

  return (
    <section id="projects" className="py-24 md:py-32 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.projects.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.projects.subtitle}</p>
        </div>

        {/* Categories */}
        <div className="space-y-14">
          {categories.map((category) => {
            const categoryProjects = projects.filter((p) => p.category === category.key)
            if (categoryProjects.length === 0) return null

            return (
              <div key={category.key}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider whitespace-nowrap">
                    {category.label}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {categoryProjects.map((project) => (
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
            )
          })}
        </div>

        {/* "Yours could be next" CTA */}
        <div className="mt-16 rounded-2xl bg-primary text-primary-foreground p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Rocket className="w-5 h-5 shrink-0" />
              <h3 className="text-xl md:text-2xl font-bold text-balance">{t.projects.ctaCard.title}</h3>
            </div>
            <p className="text-primary-foreground/90 max-w-xl leading-relaxed">
              {t.projects.ctaCard.description}
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="rounded-full shrink-0 bg-background text-foreground hover:bg-background/90"
          >
            <a href={`mailto:${GENERAL_EMAIL}`}>{t.projects.ctaCard.button}</a>
          </Button>
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
