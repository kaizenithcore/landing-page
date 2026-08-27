"use client"

import { PenTool, Palette, LayoutTemplate, Megaphone } from "lucide-react"
import { useLocale } from "@/lib/i18n/locale-context"

export function ServicesSection() {
  const { t } = useLocale()

  const services = [
    { icon: PenTool, ...t.design.services.logo },
    { icon: Palette, ...t.design.services.branding },
    { icon: LayoutTemplate, ...t.design.services.web },
    { icon: Megaphone, ...t.design.services.marketing },
  ]

  return (
    <section id="services" className="py-28 md:py-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display-vision)] font-semibold text-foreground">
            {t.design.services.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
