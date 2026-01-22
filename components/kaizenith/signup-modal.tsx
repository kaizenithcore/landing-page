"use client"

import React from "react"
import { useState, useEffect, useRef } from "react"
import { X, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLocale } from "@/lib/i18n/locale-context"
import { SignupFormContent } from "@/components/SignupFormContent" // Import SignupFormContent

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const modalRef = useRef<HTMLDivElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)
  const { t } = useLocale()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      firstInputRef.current?.focus()
    } else {
      document.body.style.overflow = ""
      setIsSuccess(false)
      setError("")
      setName("")
      setEmail("")
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
    }

    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    // Get UTM params
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

      // Track event
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

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative w-full max-w-md rounded-2xl bg-card border border-border p-8 shadow-2xl animate-scale-in"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors focus-visible-ring"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <SuccessContent onClose={onClose} t={t} />
        ) : (
          <SignupFormContent
            name={name}
            email={email}
            error={error}
            isSubmitting={isSubmitting}
            onNameChange={setName}
            onEmailChange={setEmail}
            onSubmit={handleSubmit}
            firstInputRef={firstInputRef}
            t={t}
          />
        )}
      </div>
    </div>
  )
}

interface SignupFormContentProps {
  name: string
  email: string
  error: string
  isSubmitting: boolean
  onNameChange: (value: string) => void
  onEmailChange: (value: string) => void
  onSubmit: (e: React.FormEvent) => void
  firstInputRef: React.RefObject<HTMLInputElement | null>
  t: ReturnType<typeof useLocale>["t"]
}

function SuccessContent({ onClose, t }: { onClose: () => void; t: ReturnType<typeof useLocale>["t"] }) {
  return (
    <div className="text-center space-y-6">
      <div className="mx-auto w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
        <Check className="w-8 h-8 text-green-500" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">{t.signup.successTitle}</h2>
        <p className="text-muted-foreground">
          {t.signup.successMessage}
        </p>
      </div>

      <div className="space-y-4">
        <a
          href="/downloads/7-mistakes-guide.pdf"
          download
          className="inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
          onClick={() => {
            if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
              (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "lead_magnet_downloaded", {
                event_category: "engagement",
              })
            }
          }}
        >
          {t.leadMagnet.title}
        </a>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://twitter.com/kaizenith"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.footer.twitter}
          </a>
          <span className="text-muted-foreground">·</span>
          <a
            href="https://tiktok.com/@kaizenith"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            TikTok
          </a>
        </div>
      </div>

      <Button
        variant="outline"
        onClick={onClose}
        className="mt-4 border-border text-foreground hover:bg-secondary bg-transparent"
      >
        Close
      </Button>
    </div>
  )
}
