"use client"

import React from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface SignupFormContentProps {
  name: string
  email: string
  error: string
  isSubmitting: boolean
  onNameChange: (value: string) => void
  onEmailChange: (value: string) => void
  onSubmit: (e: React.FormEvent) => void
  firstInputRef: React.RefObject<HTMLInputElement | null>
  t: {
    signup: {
      title: string
      subtitle: string
      namePlaceholder: string
      emailPlaceholder: string
      button: string
      privacy: string
    }
  }
}

export function SignupFormContent({
  name,
  email,
  error,
  isSubmitting,
  onNameChange,
  onEmailChange,
  onSubmit,
  firstInputRef,
  t,
}: SignupFormContentProps) {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 id="modal-title" className="text-2xl font-bold text-foreground">
          {t.signup.title}
        </h2>
        <p className="text-muted-foreground">
          {t.signup.subtitle}
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="signup-name" className="sr-only">
            {t.signup.namePlaceholder}
          </Label>
          <Input
            ref={firstInputRef}
            id="signup-name"
            type="text"
            placeholder={t.signup.namePlaceholder}
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            required
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus-visible-ring"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="signup-email" className="sr-only">
            {t.signup.emailPlaceholder}
          </Label>
          <Input
            id="signup-email"
            type="email"
            placeholder={t.signup.emailPlaceholder}
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            required
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus-visible-ring"
          />
        </div>

        {error && (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            t.signup.button
          )}
        </Button>
      </form>

      <p className="text-xs text-center text-muted-foreground">
        {t.signup.privacy}
      </p>
    </div>
  )
}
