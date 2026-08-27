"use client"

import { KaizenithLogo } from "./logo"
import { SettingsToggles } from "./settings-toggle"
import { useLocale } from "@/lib/i18n/locale-context"
import { GENERAL_EMAIL } from "@/lib/site-links"
import type { Area } from "./site-nav"

interface SiteFooterProps {
  area: Area
  tagline: string
}

export function SiteFooter({ area, tagline }: SiteFooterProps) {
  const currentYear = new Date().getFullYear()
  const { t } = useLocale()

  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="space-y-4">
            <KaizenithLogo size="md" dontShowWordmark orientation="horizontal" className="mb-0" />
            <p className="text-sm text-muted-foreground max-w-xs ms-2">{tagline}</p>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-12">
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                {t.common.footer.areas}
              </h3>
              <nav className="flex flex-col gap-2">
                <a
                  href="/"
                  className={`text-sm transition-colors ${
                    area === "root" ? "text-foreground font-medium" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  Kaizenith
                </a>
                <a
                  href="/studio"
                  className={`text-sm transition-colors ${
                    area === "studio" ? "text-foreground font-medium" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {t.common.nav.studio}
                </a>
                <a
                  href="/works"
                  className={`text-sm transition-colors ${
                    area === "works" ? "text-foreground font-medium" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {t.common.nav.works}
                </a>
                <a
                  href="/design"
                  className={`text-sm transition-colors ${
                    area === "design" ? "text-foreground font-medium" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {t.common.nav.design}
                </a>
              </nav>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                {t.common.footer.legal}
              </h3>
              <nav className="flex flex-col gap-2">
                <a href="#contact" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                  {t.common.nav.contact}
                </a>
                <a href="/soporte" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                  {t.common.footer.support}
                </a>
                {/* {area === "studio" && (
                  <a href="/support" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                    {t.studio.footer.supportTheProject}
                  </a>
                )} */}
                <a href="/privacy" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                  {t.common.footer.privacyPolicy}
                </a>
                <a href="/cookies" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                  {t.common.footer.cookiePolicy}
                </a>
                <a
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors hover:cursor-pointer"
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).openCookieSettings) {
                      ;(window as any).openCookieSettings()
                    } else {
                      const checkAndOpen = () => {
                        if ((window as any).openCookieSettings) {
                          ;(window as any).openCookieSettings()
                        } else {
                          setTimeout(checkAndOpen, 100)
                        }
                      }
                      checkAndOpen()
                    }
                  }}
                >
                  {t.common.footer.cookieConfig}
                </a>
              </nav>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                {t.common.footer.connect}
              </h3>
              <nav className="flex flex-col gap-2">
                <a
                  href="https://github.com/kaizenith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  {t.common.footer.github}
                </a>
                <a
                  href={`mailto:${GENERAL_EMAIL}`}
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  Email
                </a>
              </nav>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                {t.settings.theme}
              </h3>
              <div className="flex">
                <SettingsToggles />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Kaizenith. {t.common.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
