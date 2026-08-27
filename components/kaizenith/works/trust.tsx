"use client"

import { useLocale } from "@/lib/i18n/locale-context"

export function TrustSection() {
  const { t } = useLocale()

  const stats = [
    { value: t.works.trust.stat1Value, label: t.works.trust.stat1Label },
    { value: t.works.trust.stat2Value, label: t.works.trust.stat2Label },
    { value: t.works.trust.stat3Value, label: t.works.trust.stat3Label },
  ]

  return (
    // Always-dark technical band — deliberately different rhythm from Root's light/dark alternation:
    // here it reads as a "panel" of stack + numbers, not a section break.
    <section className="py-14 bg-[var(--band-bg)] border-y border-[var(--band-edge)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div>
          <p className="text-xs font-medium text-[var(--band-foreground-muted)] uppercase tracking-wider mb-4 text-center">
            {t.works.stack.title}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {t.works.stack.items.map((item) => (
              <span
                key={item}
                className="text-xs font-mono font-medium text-[var(--band-foreground)] px-3 py-1.5 rounded-full border border-[var(--band-border-strong)] bg-[var(--band-card)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--band-border)]">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-mono font-bold tabular-nums text-[var(--band-foreground)] mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-[var(--band-foreground-muted)] uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
