"use client"

import { Moon, Sun, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/lib/theme/theme-context"
import { useLocale } from "@/lib/i18n/locale-context"
import { locales, localeNames, type Locale } from "@/lib/i18n/translations"

export function ThemeToggle() {
  const { theme, toggleTheme, setTheme } = useTheme()
  const { t } = useLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-9 w-9 text-muted-foreground hover:text-foreground"
          aria-label={theme === "dark" ? t.theme.dark : t.theme.light}
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{theme === "dark" ? t.theme.dark : t.theme.light}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card border-border">
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="cursor-pointer"
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>{t.theme.light}</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="cursor-pointer"
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>{t.theme.dark}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function ThemeToggleSimple() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLocale()

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="h-9 w-9 text-muted-foreground hover:text-foreground"
      aria-label={theme === "dark" ? t.theme.light : t.theme.dark}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-9 gap-2 text-muted-foreground hover:text-foreground px-3"
          aria-label={t.settings.language}
        >
          <Globe className="h-4 w-4" />
          <span className="text-xs font-medium uppercase">{locale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card border-border">
        {locales.map((loc) => (
          <DropdownMenuItem 
            key={loc}
            onClick={() => setLocale(loc)}
            className={`cursor-pointer ${locale === loc ? "bg-secondary" : ""}`}
          >
            <span className="mr-2 text-xs font-medium uppercase w-6">{loc}</span>
            <span>{localeNames[loc]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function SettingsToggles() {
  return (
    <div className="flex items-center gap-1">
      <LanguageToggle />
      <ThemeToggleSimple />
    </div>
  )
}
