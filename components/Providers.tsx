"use client"

import React from "react"
import { LocaleProvider } from "@/lib/i18n/locale-context"
import { ThemeProvider } from "@/lib/theme/theme-context"
import { CookieConsentBanner } from "@/components/kaizenith/cookie-consent-banner"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        {children}
        <CookieConsentBanner />
      </LocaleProvider>
    </ThemeProvider>
  )
}
