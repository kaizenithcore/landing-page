"use client"

import { Check, Code, LifeBuoy, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/i18n/locale-context"

const TRACK_ICONS: LucideIcon[] = [Code, LifeBuoy]

export function ServicesSection() {
  const { t } = useLocale()
  const s = t.works.services

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">{s.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{s.subtitle}</p>
        </div>

        {/* Two closed offers: custom software (mid-sized) and digital care (small) */}
        <div className="grid md:grid-cols-2 gap-6">
          {s.tracks.map((track, index) => {
            const Icon = TRACK_ICONS[index] ?? Code
            return (
              <div
                key={track.title}
                className="p-7 rounded-xl bg-primary/5 border border-primary/20 flex flex-col"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{track.audience}</p>
                <h3 className="text-xl font-semibold text-foreground mb-3">{track.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{track.description}</p>
                <ul className="space-y-2.5 mb-7 flex-1">
                  {track.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-foreground/90">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="rounded-full bg-transparent self-start">
                  <a href="#contact">{track.cta}</a>
                </Button>
              </div>
            )
          })}
        </div>

        <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto mt-10 leading-relaxed">
          {s.closing}
        </p>
      </div>
    </section>
  )
}
