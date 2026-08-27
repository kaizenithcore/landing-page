"use client"

import Image from "next/image"
import { ExternalLink, Ghost, Puzzle, type LucideIcon } from "lucide-react"
import { useLocale } from "@/lib/i18n/locale-context"

type ProjectTier = "complete" | "advanced" | "almostReady"

interface ProjectEntry {
  id: string
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

  const games: ProjectEntry[] = [
    {
      id: "paranormal-detector",
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
      tier: "complete",
      title: items.mhadle.title,
      subtitle: items.mhadle.subtitle,
      description: items.mhadle.description,
      image: "/images/proyects/mhadle.png",
      // url: paused (Supabase project limit) — add back once resumed
      icon: Puzzle,
    },
    {
      id: "it-never-ends",
      tier: "complete",
      title: items.itNeverEnds.title,
      subtitle: items.itNeverEnds.subtitle,
      description: items.itNeverEnds.description,
      image: "/images/proyects/itNeverEnds.gif",
      url: "https://dev3r3nze.itch.io/it-never-ends",
      icon: Puzzle,
    },
    {
      id: "teen-romantic",
      tier: "complete",
      title: items.teenRomantic.title,
      subtitle: items.teenRomantic.subtitle,
      description: items.teenRomantic.description,
      image: "/images/proyects/teenRomantic.png",
      url: "https://dev3r3nze.itch.io/my-teen-romantic-comedy-wont-start",
      icon: Puzzle,
    },
    {
      id: "iudex-inquisitor",
      tier: "complete",
      title: items.iudexInquisitor.title,
      subtitle: items.iudexInquisitor.subtitle,
      description: items.iudexInquisitor.description,
      image: "/images/proyects/iudexInquisitor.png",
      url: "https://nanakii-chan.itch.io/iudex-inquisitor",
      icon: Puzzle,
    },
    {
      id: "from-hell",
      tier: "complete",
      title: items.fromHell.title,
      subtitle: items.fromHell.subtitle,
      description: items.fromHell.description,
      image: "/images/proyects/fromHell.gif",
      url: "https://dev3r3nze.itch.io/from-hell", 
      icon: Puzzle,
    },
    {
      id: "devo-clicker",
      tier: "complete",
      title: items.devoClicker.title,
      subtitle: items.devoClicker.subtitle,
      description: items.devoClicker.description,
      image: "/images/proyects/devoClicker.png",
      url: "https://dev3r3nze.itch.io/devo-clicker-game",
      icon: Puzzle,
    },
    {
      id: "maldicion-aprendiz",
      tier: "complete",
      title: items.maldicionAprendiz.title,
      subtitle: items.maldicionAprendiz.subtitle,
      description: items.maldicionAprendiz.description,
      image: "/images/proyects/maldicionAprendiz.gif",
      url: "https://dev3r3nze.itch.io/la-maldicin-del-aprendiz",
      icon: Puzzle,
    },
    {
      id: "charm-miners",
      tier: "complete",
      title: items.charmMiner.title,
      subtitle: items.charmMiner.subtitle,
      description: items.charmMiner.description,
      image: "/images/proyects/charmMiner.gif",
      url: "https://dev3r3nze.itch.io/charmminerssl",
      icon: Puzzle,
    },
    {
      id: "void-survivor",
      tier: "complete",
      title: items.voidSurvivor.title,
      subtitle: items.voidSurvivor.subtitle,
      description: items.voidSurvivor.description,
      image: "/images/proyects/voidSurvivor.png",
      url: "https://dev3r3nze.itch.io/voidsurvivor",
      icon: Puzzle,
    },
  ]

  return (
    <section id="projects" className="py-24 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.studio.projects.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.studio.projects.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {games.map((project) => (
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
    <article className="group rounded-xl bg-card border border-border overflow-hidden transition-all duration-300 hover:border-primary/30 hover:-translate-y-0.5 flex flex-col">
      {project.image ? (
        <div className="aspect-video relative bg-muted overflow-hidden">
          <Image
            src={project.image}
            alt={project.subtitle}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="aspect-video flex items-center justify-center bg-primary/5">
          <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
            <Icon className="w-6 h-6" />
          </div>
        </div>
      )}

      <div className="p-6 space-y-2 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-foreground">{project.title}</h3>
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
      </div>
    </article>
  )
}
