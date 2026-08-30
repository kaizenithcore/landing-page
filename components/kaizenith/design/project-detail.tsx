"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useLocale } from "@/lib/i18n/locale-context"
import { SiteNav } from "@/components/kaizenith/site-nav"
import { SiteFooter } from "@/components/kaizenith/site-footer"
import { ContactSection } from "@/components/kaizenith/contact-section"
import { designProjects, type DesignProjectId } from "@/lib/design-projects"

export function ProjectDetail({ id }: { id: DesignProjectId }) {
  const { t } = useLocale()
  const project = t.design.portfolio.items[id]
  const meta = designProjects.find((p) => p.id === id)!
  const related = designProjects.filter((p) => p.id !== id).slice(0, 3)

  return (
    <>
      <SiteNav area="design" />

      <main>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36">
          <Link
            href="/design#work"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.design.portfolio.detail.back}
          </Link>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <header className="space-y-4 mb-8">
            <p className="text-xs font-medium text-primary uppercase tracking-wider">{project.category}</p>
            <h1 className="text-3xl md:text-5xl font-[family-name:var(--font-display-vision)] font-semibold text-foreground text-balance">
              {project.client}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{project.description}</p>
          </header>

          <div className="aspect-[16/10] relative rounded-2xl overflow-hidden border border-border bg-muted mb-12">
            <Image
              src={meta.image}
              alt={`${project.client} — ${project.category}`}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-8 text-center space-y-3">
            <h2 className="font-[family-name:var(--font-display-vision)] italic font-semibold text-xl text-foreground text-balance">
              {t.design.portfolio.detail.ctaTitle}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
              {t.design.portfolio.detail.ctaDescription}
            </p>
            <Link
              href="/design#contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              {t.design.portfolio.detail.ctaButton}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-t border-border">
          <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
            {t.design.portfolio.detail.moreProjects}
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {related.map((p) => {
              const relatedProject = t.design.portfolio.items[p.id]
              return (
                <Link
                  key={p.id}
                  href={`/design/${p.slug}`}
                  className="group relative rounded-xl overflow-hidden border border-border bg-card block"
                >
                  <div className="aspect-[4/3] relative bg-muted">
                    <Image
                      src={p.image}
                      alt={`${relatedProject.client} — ${relatedProject.category}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                      {relatedProject.category}
                    </p>
                    <h3 className="text-sm font-semibold text-foreground">{relatedProject.client}</h3>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        <ContactSection area="design" />
      </main>

      <SiteFooter area="design" tagline={t.design.footer.tagline} />
    </>
  )
}
