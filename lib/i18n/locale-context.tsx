"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Locale, type TranslationKeys, translations } from "./translations"

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationKeys
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

const LOCALE_STORAGE_KEY = "kaizenith-locale"

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Try to get locale from localStorage
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null
    if (stored && (stored === "es" || stored === "en")) {
      setLocaleState(stored)
    } else {
      // Try to detect from browser
      const browserLang = navigator.language.split("-")[0]
      if (browserLang === "en") {
        setLocaleState("en")
      }
      // Default is already "es"
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
    // Update html lang attribute
    document.documentElement.lang = newLocale
  }

  const t = translations[locale]

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <LocaleContext.Provider value={{ locale: "es", setLocale, t: translations["es"] }}>
        {children}
      </LocaleContext.Provider>
    )
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
