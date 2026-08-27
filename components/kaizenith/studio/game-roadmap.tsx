"use client"

import { useEffect, useState } from "react"
import { Wrench, Heart, Rocket, Sparkles, Trophy, type LucideIcon } from "lucide-react"
import { useLocale } from "@/lib/i18n/locale-context"

// Provisional release date. Update here if the date changes.
const LAUNCH_DATE = new Date("2026-09-29T00:00:00")

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function computeTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  }
}

/** Starts at null so server and first client render match; the real value fills in after mount. */
function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    const update = () => setTimeLeft(computeTimeLeft(target))
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [target])

  return timeLeft
}

type MilestoneState = "current" | "upcoming" | "committed" | "tentative"

interface MilestoneData {
  status: string
  date: string
  title: string
  description: string
}

export function GameRoadmap() {
  const { t } = useLocale()
  const timeLeft = useCountdown(LAUNCH_DATE)
  const m = t.studio.gameRoadmap.milestones

  const milestones: Array<{ key: string; icon: LucideIcon; data: MilestoneData; state: MilestoneState }> = [
    { key: "development", icon: Wrench, data: m.development, state: "current" },
    { key: "wishlist", icon: Heart, data: m.wishlist, state: "upcoming" },
    { key: "launch", icon: Rocket, data: m.launch, state: "upcoming" },
    { key: "postLaunch", icon: Sparkles, data: m.postLaunch, state: "committed" },
    { key: "future", icon: Trophy, data: m.future, state: "tentative" },
  ]

  return (
    <section id="roadmap" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            {t.studio.gameRoadmap.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.studio.gameRoadmap.subtitle}
          </p>
        </div>

        {/* Countdown to launch */}
        {/* <div className="mb-16 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 text-center space-y-4">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">
            {t.studio.gameRoadmap.countdownLabel}
          </p>
          <div className="flex justify-center gap-3 sm:gap-4">
            <CountdownUnit value={timeLeft?.days} label={t.studio.gameRoadmap.countdownDays} />
            <CountdownUnit value={timeLeft?.hours} label={t.studio.gameRoadmap.countdownHours} />
            <CountdownUnit value={timeLeft?.minutes} label={t.studio.gameRoadmap.countdownMinutes} />
            <CountdownUnit value={timeLeft?.seconds} label={t.studio.gameRoadmap.countdownSeconds} />
          </div>
          <p className="text-sm text-muted-foreground">{m.launch.date}</p>
        </div> */}

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border" aria-hidden="true" />

          <div className="space-y-8">
            {milestones.map(({ key, icon: Icon, data, state }) => (
              <div key={key} className="relative pl-16">
                <div
                  className={`absolute left-0 top-0 w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    state === "current"
                      ? "bg-primary border-primary text-primary-foreground"
                      : state === "tentative"
                        ? "bg-card border-dashed border-muted-foreground/40 text-muted-foreground"
                        : "bg-card border-primary/40 text-primary"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div
                  className={`rounded-xl border p-5 ${
                    state === "tentative" ? "border-dashed border-border bg-transparent" : "border-border bg-card"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="text-xs px-2 py-0.5 rounded-full border bg-primary/10 text-primary border-primary/30">
                      {data.status}
                    </span>
                    <span className="text-xs text-muted-foreground">{data.date}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{data.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 italic">{t.studio.gameRoadmap.futureNote}</p>
      </div>
    </section>
  )
}

function CountdownUnit({ value, label }: { value: number | undefined; label: string }) {
  return (
    <div className="min-w-[4.5rem] rounded-xl bg-card border border-border px-3 py-2">
      <div className="text-2xl md:text-3xl font-extrabold text-foreground tabular-nums">
        {value !== undefined ? String(value).padStart(2, "0") : "—"}
      </div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  )
}
