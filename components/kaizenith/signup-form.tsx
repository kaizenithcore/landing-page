"use client"

import React from "react"

import { useState } from "react"
import { Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLocale } from "@/lib/i18n/locale-context"

export function SignupForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const { t } = useLocale()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    const urlParams = new URLSearchParams(window.location.search)
    const utm = {
      source: urlParams.get("utm_source") || "",
      medium: urlParams.get("utm_medium") || "",
      campaign: urlParams.get("utm_campaign") || "",
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, utm }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      setIsSuccess(true)

      if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "newsletter_submitted", {
          event_category: "engagement",
        })
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="rounded-2xl bg-card border border-border p-8 md:p-12 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">{t.signup.successTitle}</h3>
        <p className="text-muted-foreground mb-6">
          {t.signup.successMessage}
        </p>
        {/* <a
          href="/downloads/7-mistakes-guide.pdf"
          download
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
        >
          {t.leadMagnet.title}
        </a> */}
      </div>
    )
  }

  return (
    <div className="rounded-2xl bg-card border border-border p-8 md:p-12">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            {t.signup.title}
          </h3>
          <p className="text-muted-foreground">
            {t.signup.subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="text"
              placeholder={t.signup.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="flex-1 bg-input border-border text-foreground placeholder:text-muted-foreground"
              aria-label={t.signup.namePlaceholder}
            />
            <Input
              type="email"
              placeholder={t.signup.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-input border-border text-foreground placeholder:text-muted-foreground"
              aria-label={t.signup.emailPlaceholder}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 whitespace-nowrap"
            >
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                t.signup.submit
              )}
            </Button>
          </div>

          {error && (
            <p className="text-sm text-destructive" role="alert">
              {error}
            </p>
          )}

          <p className="text-xs text-muted-foreground">
            {t.hero.noSpam}. {t.hero.unsubscribe}.
          </p>
        </form>
      </div>
    </div>
  )
}
