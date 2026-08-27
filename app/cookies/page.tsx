"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";
import { SiteNav } from "@/components/kaizenith/site-nav";
import { SiteFooter } from "@/components/kaizenith/site-footer";

type SectionId =
  | "intro"
  | "what-are-cookies"
  | "types"
  | "cookies-used"
  | "consent"
  | "manage"
  | "third-parties"
  | "changes";

export default function CookiesPolicyPage() {
  const { locale, t } = useLocale();
  const [activeSection, setActiveSection] =
    React.useState<SectionId>("intro");

  const content = {
    es: {
      pageTitle: "Política de Cookies",
      pageSubtitle: "Información clara sobre el uso de cookies en Kaizenith",
      lastUpdated: "Última actualización: 26 de enero de 2025",

      sections: {
        intro: {
          title: "1. Introducción",
          content: `Este sitio web, operado por Kaizenith, utiliza cookies y tecnologías similares para garantizar el correcto funcionamiento del sitio y, en algunos casos, para analizar su uso.

La presente Política de Cookies explica qué son las cookies, qué tipos utilizamos, con qué finalidad y cómo puedes gestionarlas.`,
        },

        "what-are-cookies": {
          title: "2. ¿Qué son las cookies?",
          content: `Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten que el sitio recuerde información sobre tu visita, como tus preferencias o decisiones de consentimiento.

Las cookies no dañan tu dispositivo y no ejecutan programas ni contienen virus.`,
        },

        types: {
          title: "3. Tipos de cookies",
          content: `Según su finalidad, las cookies pueden ser:

• Cookies estrictamente necesarias: permiten el funcionamiento básico del sitio y no requieren consentimiento.
• Cookies de analítica o rendimiento: nos ayudan a entender cómo se utiliza el sitio y a mejorar su funcionamiento (requieren consentimiento).
• Cookies de terceros: establecidas por servicios externos integrados en el sitio.

Según su duración:
• Cookies de sesión: se eliminan al cerrar el navegador.
• Cookies persistentes: permanecen durante un periodo determinado.`,
        },

        "cookies-used": {
          title: "4. Cookies utilizadas en este sitio",
          content: `Actualmente, este sitio utiliza las siguientes cookies:

• Cookies técnicas esenciales: necesarias para recordar tus preferencias de consentimiento y garantizar la funcionalidad básica del sitio.
• Cookies de analítica (opcional): utilizadas únicamente si aceptas cookies analíticas, por ejemplo a través de Google Analytics u herramientas similares.

No se instalan cookies analíticas ni de terceros sin tu consentimiento previo.`,
        },

        consent: {
          title: "5. Base legal y consentimiento",
          content: `La base legal para el uso de cookies no esenciales es tu consentimiento, otorgado mediante el banner de cookies al acceder al sitio.

Puedes aceptar todas las cookies, rechazarlas o configurarlas de forma granular. El consentimiento puede retirarse en cualquier momento.`,
        },

        manage: {
          title: "6. Cómo gestionar o revocar tu consentimiento",
          content: `Puedes modificar o retirar tu consentimiento en cualquier momento mediante el panel de configuración de cookies disponible en el sitio.

Además, puedes eliminar o bloquear cookies desde la configuración de tu navegador. Ten en cuenta que desactivar cookies técnicas puede afectar al funcionamiento del sitio.`,
        },

        "third-parties": {
          title: "7. Cookies de terceros",
          content: `Algunos servicios de terceros, como herramientas de analítica, pueden establecer cookies propias si otorgas tu consentimiento.

Estos terceros pueden procesar datos fuera del Espacio Económico Europeo, aplicando las garantías legales correspondientes. Para más información sobre el tratamiento de datos personales, consulta nuestra Política de Privacidad.`,
        },

        changes: {
          title: "8. Cambios en la Política de Cookies",
          content: `Esta Política de Cookies puede actualizarse para reflejar cambios normativos o técnicos. La versión vigente estará siempre disponible en esta página, indicando la fecha de la última actualización.`,
        },
      },
    },

    en: {
      pageTitle: "Cookies Policy",
      pageSubtitle: "Clear information about cookie usage on Kaizenith",
      lastUpdated: "Last updated: January 26, 2025",

      sections: {
        intro: {
          title: "1. Introduction",
          content: `This website, operated by Kaizenith, uses cookies and similar technologies to ensure proper site functionality and, in some cases, to analyze its usage.

This Cookies Policy explains what cookies are, which types we use, for what purposes, and how you can manage them.`,
        },

        "what-are-cookies": {
          title: "2. What are cookies?",
          content: `Cookies are small text files stored on your device when you visit a website. They allow the site to remember information about your visit, such as preferences or consent decisions.

Cookies do not harm your device and do not run programs or contain viruses.`,
        },

        types: {
          title: "3. Types of cookies",
          content: `According to their purpose, cookies may be:

• Strictly necessary cookies: required for basic site functionality and do not require consent.
• Analytics or performance cookies: help us understand site usage and improve performance (require consent).
• Third-party cookies: set by external services integrated into the site.

According to duration:
• Session cookies: deleted when you close your browser.
• Persistent cookies: remain for a defined period.`,
        },

        "cookies-used": {
          title: "4. Cookies used on this site",
          content: `This site currently uses:

• Essential technical cookies: required to store consent preferences and ensure basic functionality.
• Analytics cookies (optional): used only if you consent, for example via Google Analytics or similar tools.

No analytics or third-party cookies are installed without your prior consent.`,
        },

        consent: {
          title: "5. Legal basis and consent",
          content: `The legal basis for using non-essential cookies is your consent, provided through the cookie banner.

You may accept, reject or configure cookies and withdraw consent at any time.`,
        },

        manage: {
          title: "6. How to manage or withdraw consent",
          content: `You can modify or withdraw your consent at any time using the cookie settings available on the site.

You may also delete or block cookies through your browser settings. Please note that disabling technical cookies may affect site functionality.`,
        },

        "third-parties": {
          title: "7. Third-party cookies",
          content: `Some third-party services, such as analytics tools, may set their own cookies if you provide consent.

These providers may process data outside the European Economic Area, applying appropriate legal safeguards. For more information, see our Privacy Policy.`,
        },

        changes: {
          title: "8. Changes to the Cookies Policy",
          content: `This Cookies Policy may be updated to reflect legal or technical changes. The current version will always be available on this page with the last update date.`,
        },
      },
    },
  };

  const currentContent = locale === "es" ? content.es : content.en;
  const sections = Object.entries(currentContent.sections).map(
    ([key, value]) => ({
      id: key as SectionId,
      title: value.title,
      content: value.content,
    }),
  );

  return (
    <>
      <SiteNav area="root" />

      <main className="min-h-screen bg-background mt-8">
        {/* Header */}
        <section className="py-8 md:py-12 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              {locale === "es" ? "Volver al inicio" : "Back to home"}
            </Link>

            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {currentContent.pageTitle}
              </h1>
              <p className="text-lg text-muted-foreground">
                {currentContent.pageSubtitle}
              </p>
              <p className="text-sm text-muted-foreground">
                {currentContent.lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Sidebar */}
              <aside className="md:col-span-1">
                <nav className="sticky top-8 space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                        activeSection === section.id
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {section.title}.
                    </button>
                  ))}
                </nav>
              </aside>

              {/* Main */}
              <div className="md:col-span-3 space-y-8">
                {sections.map((section) => (
                  <article
                    key={section.id}
                    className={`scroll-mt-8 ${
                      activeSection === section.id
                        ? "block"
                        : "hidden md:block"
                    }`}
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {section.title}
                    </h2>
                    <div className="prose prose-invert max-w-none">
                      {section.content.split("\n").map((line, idx) => {
                        if (!line.trim()) return <br key={idx} />;
                        if (line.trim().startsWith("•")) {
                          return (
                            <p
                              key={idx}
                              className="text-foreground/80 ml-4"
                            >
                              {line.trim()}
                            </p>
                          );
                        }
                        return (
                          <p key={idx} className="text-foreground/80">
                            {line}
                          </p>
                        );
                      })}
                    </div>
                  </article>
                ))}
                {/* Contact Section */}
                <article className="pt-12 border-t border-border">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {locale === "es"
                      ? "Preguntas o Inquietudes"
                      : "Questions or Concerns"}
                  </h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    {locale === "es"
                      ? "Si tienes preguntas sobre esta Política de Cookies o cómo manejamos tus datos, no dudes en contactarnos:"
                      : "If you have questions about this Cookies Policy or how we handle your data, please feel free to contact us:"}
                  </p>
                  <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                    <p className="text-foreground font-medium">
                      hola@kaizenith.es
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        
      </main>

      <SiteFooter area="root" tagline={t.root.footer.tagline} />
    </>
  );
}
