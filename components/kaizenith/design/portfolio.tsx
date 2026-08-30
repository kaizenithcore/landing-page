"use client"

import Image from "next/image"
import Link from "next/link"
import { useLocale } from "@/lib/i18n/locale-context"
import { designProjects } from "@/lib/design-projects"

interface PortfolioItem {
  id: string
  slug: string
  image: string
  client: string
  category: string
  description: string
}

export function PortfolioSection() {
  const { t } = useLocale()
  const items = t.design.portfolio.items

  const projects: PortfolioItem[] = designProjects.map((project) => ({
    id: project.id,
    slug: project.slug,
    image: project.image,
    ...items[project.id],
  }))

  return (
    <section id="work" className="py-28 md:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display-vision)] font-semibold text-foreground text-balance">
            {t.design.portfolio.title}
          </h2>
          <p className="text-muted-foreground">{t.design.portfolio.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/design/${project.slug}`}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card block"
            >
              <div className="aspect-[4/3] relative bg-muted">
                <Image
                  src={project.image}
                  alt={`${project.client} — ${project.category}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay, darkens on hover to surface the case info */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-300 flex items-end">
                  <div className="p-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-xs font-medium text-white/70 uppercase tracking-wider mb-1">
                      {project.category}
                    </p>
                    <p className="text-sm text-white/90 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">{project.category}</p>
                <h3 className="font-semibold text-foreground">{project.client}</h3>
              </div>
            </Link>
          ))}

          <a
            href="#contact"
            className="group rounded-2xl border border-dashed border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors flex flex-col items-center justify-center text-center p-8 gap-2 aspect-[4/3]"
          >
            <h3 className="font-[family-name:var(--font-display-vision)] italic font-semibold text-lg text-foreground text-balance">
              {t.design.portfolio.ctaCard.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.design.portfolio.ctaCard.description}</p>
            <span className="text-sm font-medium text-primary group-hover:underline mt-2">
              {t.design.portfolio.ctaCard.button}
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
