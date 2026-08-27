"use client"

import { useLocale } from "@/lib/i18n/locale-context"

export function ProcessSection() {
  const { t } = useLocale()

  const steps = [t.works.process.step1, t.works.process.step2, t.works.process.step3, t.works.process.step4]

  return (
    <section id="process" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.works.process.title}</h2>
          <p className="text-muted-foreground">{t.works.process.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="space-y-3 border-l border-primary/20 pl-4">
              <div className="text-3xl font-mono font-bold text-primary/50 tabular-nums tracking-tight">
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
