"use client"

import { useState } from "react"
import { Check, Loader2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLocale } from "@/lib/i18n/locale-context"
import type { Area } from "./site-nav"

interface ContactSectionProps {
  area: Exclude<Area, "blog">
}

type ChipArea = "general" | "studio" | "works" | "design"
type Status = "idle" | "submitting" | "success" | "error"

export function ContactSection({ area }: ContactSectionProps) {
  const { t } = useLocale()
  const [chipArea, setChipArea] = useState<ChipArea>(area === "root" ? "general" : area)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<Status>("idle")

  const copy = t.contact[area]

  const chips: Array<{ key: ChipArea; label: string }> = [
    { key: "general", label: t.contact.areaChipGeneral },
    { key: "studio", label: t.contact.areaChipStudio },
    { key: "works", label: t.contact.areaChipWorks },
    { key: "design", label: t.contact.areaChipDesign },
  ]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("submitting")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message, area: chipArea }),
      })
      if (!response.ok) throw new Error("Request failed")
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-card/30">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">{copy.title}</h2>
          <p className="text-muted-foreground">{copy.subtitle}</p>
        </div>

        {status === "success" ? (
          <div
            role="status"
            aria-live="polite"
            className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center space-y-3"
          >
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Check className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">{t.contact.successTitle}</h3>
            <p className="text-sm text-muted-foreground">{t.contact.successMessage}</p>
            <button
              type="button"
              onClick={() => {
                setEmail("")
                setMessage("")
                setStatus("idle")
              }}
              className="text-sm font-medium text-primary hover:underline"
            >
              {t.contact.sendAnother}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {area === "root" && (
              <div className="flex flex-wrap justify-center gap-2">
                {chips.map((chip) => (
                  <button
                    key={chip.key}
                    type="button"
                    onClick={() => setChipArea(chip.key)}
                    className={`px-3.5 py-2 rounded-full text-xs font-medium uppercase tracking-wider border transition-colors ${
                      chipArea === chip.key
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            )}

            <Input
              type="email"
              required
              placeholder={t.contact.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label={t.contact.emailPlaceholder}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
            <Textarea
              required
              rows={4}
              placeholder={t.contact.messagePlaceholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-label={t.contact.messagePlaceholder}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />

            <Button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all"
            >
              <span className="flex items-center gap-2">
                {t.contact.submit}
                {status === "submitting" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </span>
            </Button>

            {status === "error" && (
              <p className="text-sm text-destructive text-center" role="alert">
                {t.contact.errorMessage}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
