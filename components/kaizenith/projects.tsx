"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/i18n/locale-context"

type ProjectStatus = "active" | "preparation" | "onHold"
type ProjectActionType = "link" | "modal"

interface ProjectAction {
  type: ProjectActionType
  url?: string
  onAction?: () => void
}

interface ProjectsProps {
  onOpenSignup?: () => void
}

export function ProjectsSection({ onOpenSignup }: ProjectsProps) {
  const { t } = useLocale()

  const getStatusLabel = (status: ProjectStatus): string => {
    switch (status) {
      case "active":
        return t.projects.statusActive
      case "preparation":
        return t.projects.statusInPreparation
      case "onHold":
        return t.projects.statusOnHold
      default:
        return ""
    }
  }

  const getStatusColor = (status: ProjectStatus): string => {
    switch (status) {
      case "active":
        return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
      case "preparation":
        return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20"
      case "onHold":
        return "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20"
      default:
        return "bg-muted text-muted-foreground border-border"
    }
  }

  const projects: Array<{
    id: string
    title: string
    image: string
    caption: string
    why: string
    status: ProjectStatus
    cta: string
    action: ProjectAction
  }> = [
    {
      id: "workspace",
      title: t.projects.project0.title,
      image: "/images/proyects/workspaceCaptura.png?height=200&width=300",
      caption: t.projects.project0.subtitle,
      why: t.projects.project0.description,
      status: t.projects.project0.status as ProjectStatus,
      cta: t.projects.project0.cta,
      action: {
        type: "link",
        url: "https://workspace.kaizenith.es",
      },
    },
    {
      id: "autoforge",
      title: t.projects.project1.title,
      image: "/images/proyects/forjaConceptArt.png?height=200&width=300",
      caption: t.projects.project1.subtitle,
      why: t.projects.project1.description,
      status: t.projects.project1.status as ProjectStatus,
      cta: t.projects.project1.cta,
      action: {
        type: "link",
        url: "https://steamcommunity.com/groups/kaizenith", // Replace with actual Steam URL when available
      },
    },
    {
      id: "newsletter",
      title: t.projects.project2.title,
      image: "/images/proyects/newsletter.png?height=200&width=300",
      caption: t.projects.project2.subtitle,
      why: t.projects.project2.description,
      status: t.projects.project2.status as ProjectStatus,
      cta: t.projects.project2.cta,
      action: {
        type: "modal",
        onAction: onOpenSignup,
      },
    },
  ]

  const handleProjectAction = (action: ProjectAction) => {
    if (action.type === "link" && action.url) {
      window.open(action.url, "_blank", "noopener,noreferrer")
    } else if (action.type === "modal" && action.onAction) {
      action.onAction()
    }
  }

  return (
    <section id="projects" className="py-24 md:py-32 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t.projects.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group rounded-xl bg-card border border-border overflow-hidden transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 flex flex-col"
            >
              <div className="aspect-video relative bg-muted overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {getStatusLabel(project.status)}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-3 flex flex-col flex-1">
                <h3 className="font-semibold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.caption}</p>
                <p className="text-sm text-foreground/80 border-l-2 border-primary/40 pl-3 flex-1">
                  {project.why}
                </p>
                {/* CTA Button */}
                <Button
                  onClick={() => handleProjectAction(project.action)}
                  variant="outline"
                  className="w-full group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  <span>{project.cta}</span>
                  {project.action.type === "link" && (
                    <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-0.5" />
                  )}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
