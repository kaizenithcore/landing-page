"use client"

import Image from "next/image"
import { useLocale } from "@/lib/i18n/locale-context"

export function ProjectsSection() {
  const { t } = useLocale()

  const projects = [
  {
    id: "flowfocus",
    title: "FlowFocus",
    image: "/placeholder.svg?height=200&width=300",
    caption: t.projects.project0.subtitle,
    why: t.projects.project0.description,
  },
  {
    id: "forja",
    title: "Forja Pixel",
    image: "/placeholder.svg?height=200&width=300",
    caption: t.projects.project1.subtitle,
    why: t.projects.project1.description,
  },
  {
    id: "buildlog",
    title: "Build Log",
    image: "/placeholder.svg?height=200&width=300",
    caption: t.projects.project2.subtitle,
    why: t.projects.project2.description,
  },
]

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
              className="group rounded-xl bg-card border border-border overflow-hidden transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="aspect-video relative bg-muted overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-semibold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.caption}</p>
                <p className="text-sm text-foreground/80 border-l-2 border-primary/40 pl-3">
                  {project.why}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
