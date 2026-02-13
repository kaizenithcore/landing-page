"use client";

import { KaizenithLogo } from "./logo";
import { useLocale } from "@/lib/i18n/locale-context";
import { SettingsToggles } from "./settings-toggle";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLocale();

  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Logo and tagline */}
          <div className="space-y-4">
            <KaizenithLogo
              size="md"
              dontShowWordmark
              orientation="horizontal"
              className="mb-0"
            />
            <p className="text-sm text-muted-foreground max-w-xs ms-2">
              {t.footer.tagline}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8 md:gap-12">
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                {t.footer.navigate}
              </h4>
              <nav className="flex flex-col gap-2">
                <a
                  href="#roadmap"
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  {t.footer.roadmap}
                </a>
                <a
                  href="#about"
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  {t.footer.about}
                </a>
                <a
                  href="#projects"
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  {t.footer.projects}
                </a>
                <a
                  href="/support"
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  Support the Project
                </a>
                <a
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                  href="/privacy"
                >
                  {t.footer.privacyPolicy}
                </a>
                <a
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                  href="/cookies"
                >
                  {t.footer.cookiePolicy}
                </a>
                <a
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors hover:cursor-pointer"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).openCookieSettings) {
                      (window as any).openCookieSettings()
                    } else {
                      // Si la función no existe aún, espera y reintenta
                      const checkAndOpen = () => {
                        if ((window as any).openCookieSettings) {
                          (window as any).openCookieSettings()
                        } else {
                          setTimeout(checkAndOpen, 100)
                        }
                      }
                      checkAndOpen()
                    }
                  }}
                >
                  {t.footer.cookieConfig}
                </a>
              </nav>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                {t.footer.connect}
              </h4>
              <nav className="flex flex-col gap-2">
                {/* <a
                  href="https://twitter.com/kaizenith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="https://tiktok.com/kaizenith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  Tiktok
                </a>
                <a
                  href="https://instagram.com/kaizenith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://discord.gg/kaizenith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  Discord
                </a> */}
                <a
                  href="https://github.com/kaizenith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  {t.footer.github}
                </a>
                <a
                  href="mailto:contacto@kaizenith.es"
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  Email
                </a>
              </nav>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                {t.settings.theme}
              </h4>
              <div className="flex">
                <SettingsToggles />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Kaizenith. {t.footer.copyright}
          </p>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            <a className="hover:text-accent " 
             href="/"
            >
              KAIZENITH
            </a> ·{" "}
            <a className="hover:text-accent " 
            // href="/labs"
            >
              LABS
            </a>
            ·{" "}
            <a className="hover:text-accent " 
            // href="/works"
            >
              WORKS
            </a>{" "}
            ·
            <a
              className="hover:text-accent "
              // href="/studio"
            >
              STUDIO
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
