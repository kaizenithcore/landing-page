"use client"

import { useLocale } from "@/lib/i18n/locale-context"

export function ProcessSection() {
  const { t } = useLocale()

  const steps = [t.design.process.step1, t.design.process.step2, t.design.process.step3, t.design.process.step4]

  return (
    <section className="py-28 md:py-40 bg-card/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display-vision)] font-semibold text-foreground">
            {t.design.process.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center space-y-4">
              <div className="text-6xl md:text-7xl font-[family-name:var(--font-display-vision)] italic font-semibold text-primary/25 leading-none">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
