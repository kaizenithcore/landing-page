"use client"

import { RefreshCw, BarChart3, Layers, Share2 } from "lucide-react"
import { useLocale } from "@/lib/i18n/locale-context"

export function PrinciplesSection() {
  const { t } = useLocale()

  const principles = [
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: t.principles.iteration.title,
      description: t.principles.iteration.description,
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: t.principles.measured.title,
      description: t.principles.measured.description,
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: t.principles.small.title,
      description: t.principles.small.description,
    },
    {
      icon: <Share2 className="w-5 h-5" />,
      title: t.principles.share.title,
      description: t.principles.share.description,
    },
  ]

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t.principles.title}
          </h2>
        </div>

        {/* Principles grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  {principle.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
