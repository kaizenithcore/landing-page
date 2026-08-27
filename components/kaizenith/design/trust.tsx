"use client"

import { useLocale } from "@/lib/i18n/locale-context"

export function TrustSection() {
  const { t } = useLocale()

  const stats = [
    { value: t.design.trust.stat1Value, label: t.design.trust.stat1Label },
    { value: t.design.trust.stat2Value, label: t.design.trust.stat2Label },
    { value: t.design.trust.stat3Value, label: t.design.trust.stat3Label },
    { value: t.design.trust.stat4Value, label: t.design.trust.stat4Label },
  ]

  return (
    <section className="py-12 border-y border-border bg-card/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-[family-name:var(--font-display-vision)] italic font-semibold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
