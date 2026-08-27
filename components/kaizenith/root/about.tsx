"use client"

import { useLocale } from "@/lib/i18n/locale-context"

export function AboutSection() {
  const { t } = useLocale()

  const stats = [
    { value: t.root.stats.stat1Value, label: t.root.stats.stat1Label },
    { value: t.root.stats.stat2Value, label: t.root.stats.stat2Label },
    { value: t.root.stats.stat3Value, label: t.root.stats.stat3Label },
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.root.about.title}</h2>
          <p className="text-muted-foreground leading-relaxed">{t.root.about.description}</p>
        </div>

        <div className="space-y-6">
          <p className="text-center text-xs font-medium text-primary uppercase tracking-wider">
            {t.root.stats.title}
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl font-extrabold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
