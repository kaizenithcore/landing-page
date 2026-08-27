"use client"

import { Lightbulb, LineChart, Zap } from "lucide-react"
import { useLocale } from "@/lib/i18n/locale-context"

export function IntroSection() {
  const { t } = useLocale()

  const items = [
    { icon: <Lightbulb className="w-4 h-4" />, title: t.studio.intro.buildLogs, description: t.studio.intro.buildLogsDesc },
    { icon: <LineChart className="w-4 h-4" />, title: t.studio.intro.realNumbers, description: t.studio.intro.realNumbersDesc },
    { icon: <Zap className="w-4 h-4" />, title: t.studio.intro.earlyAccess, description: t.studio.intro.earlyAccessDesc },
  ]

  return (
    <section id="about" className="py-12 md:py-16 border-y border-border bg-card/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          {/* Lead */}
          <div className="md:max-w-xs shrink-0 space-y-2">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              {t.studio.intro.title}
            </span>
            <p className="text-foreground/90 leading-relaxed">{t.studio.intro.lead}</p>
          </div>

          {/* Compact item row */}
          <div className="flex-1 grid sm:grid-cols-3 gap-6 md:gap-8 md:border-l md:border-border md:pl-8">
            {items.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-foreground">{item.title}</h2>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
