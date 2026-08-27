"use client"

import { Flag, Gamepad2, Rocket, Sparkles, type LucideIcon } from "lucide-react"
import { useLocale } from "@/lib/i18n/locale-context"

interface MilestoneData {
  date: string
  title: string
  description: string
}

export function Trajectory() {
  const { t } = useLocale()
  const m = t.studio.trajectory.milestones

  const milestones: Array<{ key: string; icon: LucideIcon; data: MilestoneData }> = [
    { key: "origin", icon: Flag, data: m.origin },
    { key: "prototypes", icon: Gamepad2, data: m.prototypes },
    { key: "current", icon: Rocket, data: m.current },
    { key: "next", icon: Sparkles, data: m.next },
  ]

  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            {t.studio.trajectory.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.studio.trajectory.subtitle}
          </p>
        </div>

        {/* Milestones */}
        <div className="relative">
          <div
            className="hidden md:block absolute left-0 right-0 top-6 h-px bg-border"
            aria-hidden="true"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map(({ key, icon: Icon, data }) => (
              <div key={key} className="relative">
                <div className="hidden md:flex w-3 h-3 rounded-full bg-primary border-2 border-primary absolute -top-[1.85rem] left-0" />
                <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                  {data.date}
                </p>
                <h3 className="font-semibold text-foreground mb-1">{data.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
