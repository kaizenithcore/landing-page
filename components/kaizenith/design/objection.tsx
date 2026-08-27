"use client"

import { useLocale } from "@/lib/i18n/locale-context"

export function ObjectionSection() {
  const { t } = useLocale()

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display-vision)] font-semibold text-foreground text-balance leading-snug">
          <span className="block text-base md:text-lg font-sans font-medium text-muted-foreground mb-3">
            {t.design.objection.eyebrow}
          </span>
          {t.design.objection.title}
        </h2>
        <p className="text-muted-foreground leading-relaxed">{t.design.objection.body}</p>
      </div>
    </section>
  )
}
