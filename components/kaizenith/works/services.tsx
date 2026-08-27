"use client"

import { Layers, Code, Globe, Code2, Plug, RefreshCw, LifeBuoy, KeyRound, type LucideIcon } from "lucide-react"
import { useLocale } from "@/lib/i18n/locale-context"

const DETAILED_ICONS: LucideIcon[] = [Globe, Code2, Plug, RefreshCw, LifeBuoy, KeyRound]

export function ServicesSection() {
  const { t } = useLocale()

  const pillars = [
    { icon: Layers, title: t.works.services.saas.title, description: t.works.services.saas.description },
    { icon: Code, title: t.works.services.custom.title, description: t.works.services.custom.description },
  ]

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.works.services.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t.works.services.subtitle}</p>
        </div>

        {/* Two top-level pillars */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div key={title} className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Detailed breakdown */}
        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-6 text-center">
            {t.works.services.detailedTitle}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.works.services.detailed.map((service, index) => {
              const Icon = DETAILED_ICONS[index] ?? Globe
              return (
                <div
                  key={service.title}
                  className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors flex gap-4"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{service.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
