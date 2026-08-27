"use client"

import { RefreshCw, BarChart3, Layers, Share2 } from "lucide-react"
import { useLocale } from "@/lib/i18n/locale-context"

export function WhyUsSection() {
  const { t } = useLocale()

  const principles = [
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: t.root.whyUs.iteration.title,
      description: t.root.whyUs.iteration.description,
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: t.root.whyUs.measured.title,
      description: t.root.whyUs.measured.description,
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: t.root.whyUs.small.title,
      description: t.root.whyUs.small.description,
    },
    {
      icon: <Share2 className="w-5 h-5" />,
      title: t.root.whyUs.share.title,
      description: t.root.whyUs.share.description,
    },
  ]

  return (
    // Always-dark full-bleed band, independent of the site's light/dark theme toggle —
    // this is what creates the Riverside-style alternating rhythm against the sections around it.
    <section className="py-24 md:py-32 bg-[var(--band-bg)] border-y border-[var(--band-edge)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--band-foreground)]">{t.root.whyUs.title}</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="p-6 rounded-xl bg-[var(--band-card)] border border-[var(--band-border)] hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/15 text-primary shrink-0">{principle.icon}</div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-[var(--band-foreground)]">{principle.title}</h3>
                  <p className="text-sm text-[var(--band-foreground-muted)] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
