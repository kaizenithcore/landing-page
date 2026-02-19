"use client";

import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Download,
  Check,
  Copy,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocale } from "@/lib/i18n/locale-context";
import { SettingsToggles } from "@/components/kaizenith/settings-toggle";
import { DevAuth } from "@/lib/dev-auth";
import { DEV_AUTH_TOOLS } from "@/lib/dev";
import type { SignupContext } from "@/lib/types";

// =============================================================================
// CONFIGURATION - Toggle gating on/off here
// =============================================================================
const GATING_ENABLED = false; // Set to true to require email before download

// =============================================================================
// ANALYTICS HELPER
// =============================================================================
function trackEvent(eventName: string, payload?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
    if (w.gtag) {
      w.gtag("event", eventName, payload);
    } else {
      console.log(`[Analytics] ${eventName}`, payload);
    }
  }
}

// =============================================================================
// CONTENT DATA - BILINGUAL CTAs
// =============================================================================
type Lang = "es" | "en";

interface BilingualCTA {
  id: string;
  text: { es: string; en: string };
  category: 1 | 2 | 3 | 4;
}

const ctasData: BilingualCTA[] = [
  // Category 1: Gain followers (13 CTAs)
  { id: "cta1", text: { es: "Sígueme para ver cómo evoluciona este juego cada semana.", en: "Follow me to see how this game evolves each week." }, category: 1 },
  { id: "cta2", text: { es: "Si te interesa el desarrollo indie sin humo, lo cuento todo aquí.", en: "If you're interested in smoke-free indie development, I share everything here." }, category: 1 },
  { id: "cta3", text: { es: "Únete mientras convierto esta idea en un juego real.", en: "Join me as I turn this idea into a real game." }, category: 1 },
  { id: "cta4", text: { es: "Si quieres ver más errores reales de desarrollo, sígueme.", en: "If you want to see more real development mistakes, follow me." }, category: 1 },
  { id: "cta5", text: { es: "Si estás creando tu primer juego, esto es para ti.", en: "If you're creating your first game, this is for you." }, category: 1 },
  { id: "cta6", text: { es: "Guarda este perfil si estás en etapas tempranas.", en: "Save this profile if you're in early stages." }, category: 1 },
  { id: "cta7", text: { es: "Sigue la serie completa aquí.", en: "Follow the complete series here." }, category: 1 },
  { id: "cta8", text: { es: "Próximo episodio mañana.", en: "Next episode tomorrow." }, category: 1 },
  { id: "cta9", text: { es: "Esto es solo el comienzo.", en: "This is just the beginning." }, category: 1 },
  { id: "cta10", text: { es: "Documentando el proceso sin filtros.", en: "Documenting the process without filters." }, category: 1 },
  { id: "cta11", text: { es: "Desarrollo en público, semana a semana.", en: "Development in public, week by week." }, category: 1 },
  { id: "cta12", text: { es: "Si también eres indie dev, este perfil es para ti.", en: "If you're also an indie dev, this profile is for you." }, category: 1 },
  { id: "cta13", text: { es: "Comparto todo el proceso aquí.", en: "I share the entire process here." }, category: 1 },
  
  // Category 2: Increase traffic (13 CTAs)
  { id: "cta14", text: { es: "El desglose completo está en mi canal de YouTube.", en: "The full breakdown is on my YouTube channel." }, category: 2 },
  { id: "cta15", text: { es: "Demo y recursos en el link del perfil.", en: "Demo and resources in the profile link." }, category: 2 },
  { id: "cta16", text: { es: "Explico todo el sistema en la newsletter.", en: "I explain the entire system in the newsletter." }, category: 2 },
  { id: "cta17", text: { es: "Hilo detallado en Twitter.", en: "Detailed thread on Twitter." }, category: 2 },
  { id: "cta18", text: { es: "Roadmap completo en Discord.", en: "Full roadmap on Discord." }, category: 2 },
  { id: "cta19", text: { es: "Acceso anticipado en Patreon.", en: "Early access on Patreon." }, category: 2 },
  { id: "cta20", text: { es: "Tutorial extendido en el canal.", en: "Extended tutorial on the channel." }, category: 2 },
  { id: "cta21", text: { es: "Plantillas gratis en la bio.", en: "Free templates in the bio." }, category: 2 },
  { id: "cta22", text: { es: "Lista de herramientas en el link.", en: "List of tools in the link." }, category: 2 },
  { id: "cta23", text: { es: "Devlog completo en YouTube.", en: "Complete devlog on YouTube." }, category: 2 },
  { id: "cta24", text: { es: "Análisis largo en la newsletter.", en: "Long analysis in the newsletter." }, category: 2 },
  { id: "cta25", text: { es: "Recursos descargables en la web.", en: "Downloadable resources on the web." }, category: 2 },
  { id: "cta26", text: { es: "El proceso completo paso a paso en mi perfil.", en: "The complete process step by step on my profile." }, category: 2 },
  
  // Category 3: Get testers/demos (12 CTAs)
  { id: "cta27", text: { es: "Ya puedes probar la demo.", en: "You can now try the demo." }, category: 3 },
  { id: "cta28", text: { es: "Busco testers para esta versión.", en: "I'm looking for testers for this version." }, category: 3 },
  { id: "cta29", text: { es: "Si quieres jugar antes que nadie, comenta.", en: "If you want to play before anyone else, comment." }, category: 3 },
  { id: "cta30", text: { es: "Demo abierta por tiempo limitado.", en: "Demo open for a limited time." }, category: 3 },
  { id: "cta31", text: { es: "Playtest privado disponible.", en: "Private playtest available." }, category: 3 },
  { id: "cta32", text: { es: "Necesito feedback real.", en: "I need real feedback." }, category: 3 },
  { id: "cta33", text: { es: "¿Quieres probarlo?", en: "Want to try it?" }, category: 3 },
  { id: "cta34", text: { es: "Regístrate para el playtest.", en: "Sign up for the playtest." }, category: 3 },
  { id: "cta35", text: { es: "Acceso anticipado para la comunidad.", en: "Early access for the community." }, category: 3 },
  { id: "cta36", text: { es: "Link de la demo en el perfil.", en: "Demo link in the profile." }, category: 3 },
  { id: "cta37", text: { es: "Si quieres participar, escríbeme.", en: "If you want to participate, write to me." }, category: 3 },
  { id: "cta38", text: { es: "Próximo test cerrado esta semana.", en: "Next closed test this week." }, category: 3 },
  
  // Category 4: Get sales/wishlists (12 CTAs)
  { id: "cta39", text: { es: "Agrégalo a tu lista de deseados.", en: "Add it to your wishlist." }, category: 4 },
  { id: "cta40", text: { es: "Ya disponible en Steam.", en: "Now available on Steam." }, category: 4 },
  { id: "cta41", text: { es: "Lanzamiento oficial hoy.", en: "Official launch today." }, category: 4 },
  { id: "cta42", text: { es: "Descuento de lanzamiento.", en: "Launch discount." }, category: 4 },
  { id: "cta43", text: { es: "Si te gusta este género, guárdalo.", en: "If you like this genre, save it." }, category: 4 },
  { id: "cta44", text: { es: "Disponible ahora mismo.", en: "Available right now." }, category: 4 },
  { id: "cta45", text: { es: "Apoya el proyecto comprándolo.", en: "Support the project by buying it." }, category: 4 },
  { id: "cta46", text: { es: "Early access abierto.", en: "Early access open." }, category: 4 },
  { id: "cta47", text: { es: "Últimos días de la oferta.", en: "Last days of the offer." }, category: 4 },
  { id: "cta48", text: { es: "Si quieres apoyar el desarrollo, puedes hacerlo aquí.", en: "If you want to support development, you can do so here." }, category: 4 },
  { id: "cta49", text: { es: "Disponible en la tienda.", en: "Available in the store." }, category: 4 },
  { id: "cta50", text: { es: "Reserva tu copia ahora.", en: "Pre-order your copy now." }, category: 4 },
];

// Content type mapping examples
interface ContentTypeExample {
  type: { es: string; en: string };
  recommendedCTAs: { es: string; en: string };
}

const contentTypeExamples: ContentTypeExample[] = [
  {
    type: { es: "Contenido educativo", en: "Educational content" },
    recommendedCTAs: { es: "CTAs de seguimiento + tráfico a contenido profundo", en: "Follow CTAs + traffic to deep content" }
  },
  {
    type: { es: "Devlog", en: "Devlog" },
    recommendedCTAs: { es: "Proceso transparente + seguimiento", en: "Transparent process + follow" }
  },
  {
    type: { es: "Gameplay", en: "Gameplay" },
    recommendedCTAs: { es: "Wishlists + demos", en: "Wishlists + demos" }
  },
  {
    type: { es: "Anuncio importante", en: "Important announcement" },
    recommendedCTAs: { es: "Acción directa (wishlist, compra, demo)", en: "Direct action (wishlist, purchase, demo)" }
  },
  {
    type: { es: "Contenido viral/trending", en: "Viral/trending content" },
    recommendedCTAs: { es: "Seguimiento + perfil", en: "Follow + profile" }
  },
];

// Audience adaptation examples
interface AudienceExample {
  audience: { es: string; en: string };
  base: { es: string; en: string };
  adapted: { es: string; en: string };
}

const audienceExamples: AudienceExample[] = [
  {
    audience: { es: "Otros devs", en: "Other devs" },
    base: { es: "Agrégalo a tu lista de deseados", en: "Add it to your wishlist" },
    adapted: { es: "Si trabajas en algo similar, chequea cómo resolvimos esto", en: "If you're working on something similar, check how we solved this" }
  },
  {
    audience: { es: "Gamers casuales", en: "Casual gamers" },
    base: { es: "Demo disponible", en: "Demo available" },
    adapted: { es: "Pruébalo gratis y dime qué te parece", en: "Try it for free and tell me what you think" }
  },
  {
    audience: { es: "Early adopters", en: "Early adopters" },
    base: { es: "Ya disponible", en: "Now available" },
    adapted: { es: "Acceso anticipado abierto para la comunidad", en: "Early access open for the community" }
  },
];

// Helper to get localized CTAs
function useLocalizedCTAs() {
  const { locale } = useLocale();
  const lang = locale as Lang;
  
  return {
    ctas: ctasData.map(cta => ({
      id: cta.id,
      text: cta.text[lang],
      category: cta.category
    })),
    contentTypes: contentTypeExamples.map(ex => ({
      type: ex.type[lang],
      recommendedCTAs: ex.recommendedCTAs[lang]
    })),
    audiences: audienceExamples.map(ex => ({
      audience: ex.audience[lang],
      base: ex.base[lang],
      adapted: ex.adapted[lang]
    }))
  };
}

// =============================================================================
// SIGNUP MODAL COMPONENT
// =============================================================================
function SignupModal({
  isOpen,
  onClose,
  onSuccess,
  context,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  context?: SignupContext;
}) {
  const { t } = useLocale();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Get UTM params
  const getUtmParams = useCallback(() => {
    if (typeof window === "undefined")
      return { source: "", medium: "", campaign: "" };
    const params = new URLSearchParams(window.location.search);
    return {
      source: params.get("utm_source") || "leadmagnet",
      medium: params.get("utm_medium") || "internal",
      campaign: params.get("utm_campaign") || "ctas-gamedev",
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || "Lead Magnet User",
          email,
          utm: getUtmParams(),
          context,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Error al suscribirse");
      }

      trackEvent("signup_submitted", { status: "success", source: "ctas-gamedev" });
      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
      trackEvent("signup_submitted", { status: "error", source: "ctas-gamedev" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Reset form and success state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsSuccess(false);
      setError("");
      setName("");
      setEmail("");
      setIsSubmitting(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;
  
  if (isSuccess) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
      >
        <div className="relative w-full max-w-md p-6 rounded-xl bg-card border border-border animate-scale-in text-center space-y-6">
          <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
            <Check className="w-7 h-7 text-primary" />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-foreground">
              ¡Gracias por registrarte!
            </h2>
            <p className="text-sm text-muted-foreground">
              Ya tienes acceso completo a todos los recursos.
            </p>
          </div>

          <div className="space-y-3">
            <Button
              className="w-full bg-primary hover:bg-primary/90"
              onClick={() => {
                onSuccess();
                setTimeout(() => {
                  onClose();
                }, 2000);
              }}
            >
              Ver contenido completo
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-md p-6 rounded-xl bg-card border border-border animate-scale-in"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div>
            <h2 id="modal-title" className="text-xl font-bold text-foreground">
              Desbloquea el contenido completo
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Accede a todas las CTAs y la guía de estrategia completa.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="modal-name">Nombre (opcional)</Label>
              <Input
                id="modal-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                className="bg-input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="modal-email">Email *</Label>
              <Input
                id="modal-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="bg-input"
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
              className="w-full bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? "Procesando..." : "Desbloquear ahora"}
            </Button>

            {DEV_AUTH_TOOLS && (
              <Button
                type="button"
                variant="outline"
                className="w-full text-xs"
                onClick={() => {
                  DevAuth.signIn({
                    context,
                    utm: getUtmParams(),
                  });
                  trackEvent("signup_simulated", { source: "ctas-gamedev" });
                  onSuccess();
                }}
              >
                ⚡ Simular registro (DEV)
              </Button>
            )}
          </form>

          <p className="text-xs text-muted-foreground text-center">
            Gratis · sin spam · acceso inmediato
          </p>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// GATED CONTENT COMPONENT
// =============================================================================
function GatedContent({
  locked,
  children,
}: {
  locked: boolean;
  children: React.ReactNode;
}) {
  const { t } = useLocale();

  return (
    <div className="relative">
      <div
        className={
          locked
            ? "blur-sm pointer-events-none select-none transition-all"
            : "transition-all"
        }
      >
        {children}
      </div>

      {locked && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="max-w-md mx-auto p-6 rounded-xl bg-background/90 border border-border backdrop-blur shadow-xl text-center space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              {t.ctasLeadMagnet.signupTitle}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.ctasLeadMagnet.signupSubtitle}
            </p>
            <Button
              onClick={() => {
                const event = new CustomEvent("open-signup");
                window.dispatchEvent(event);
              }}
              className="bg-primary hover:bg-primary/90"
            >
              {t.ctasLeadMagnet.signupButton}
            </Button>
            <p className="text-xs text-muted-foreground">
              {t.ctasLeadMagnet.signupDisclaimer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// =============================================================================
// CTA CARD COMPONENT WITH COPY FUNCTIONALITY
// =============================================================================
function CTACard({ cta }: { cta: { id: string; text: string; category: number } }) {
  const [copied, setCopied] = useState(false);
  const { t } = useLocale();

  const handleCopy = () => {
    navigator.clipboard.writeText(cta.text);
    setCopied(true);
    trackEvent("cta_copied", { ctaId: cta.id, category: cta.category });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
      <p className="text-foreground pr-12">{cta.text}</p>
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 p-2 rounded-md bg-secondary hover:bg-primary/10 transition-colors"
        aria-label={t.ctasLeadMagnet.copyBtnLabel}
      >
        {copied ? (
          <Check className="w-4 h-4 text-primary" />
        ) : (
          <Copy className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
        )}
      </button>
    </div>
  );
}

// =============================================================================
// MAIN PAGE COMPONENT
// =============================================================================
export default function CTAsGameDevPage() {
  const { t, locale } = useLocale();
  const { ctas, contentTypes, audiences } = useLocalizedCTAs();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [hasSignedUp, setHasSignedUp] = useState(false);

  // Check if user has previously signed up
  useEffect(() => {
    setHasSignedUp(DevAuth.isSignedIn());
  }, []);

  // Listen for open-signup events
  useEffect(() => {
    const openSignup = () => setShowSignupModal(true);
    window.addEventListener("open-signup", openSignup);
    return () => window.removeEventListener("open-signup", openSignup);
  }, []);

  // Track page view
  useEffect(() => {
    trackEvent("leadmagnet_viewed", { source: "ctas-gamedev", locale });
  }, [locale]);

  const handleDownload = () => {
    if (GATING_ENABLED && !hasSignedUp) {
      setShowSignupModal(true);
      return;
    }

    trackEvent("download_ctas_html");
    window.open("/leadmagnet_CTA.html", "_blank");
  };

  const handleSignupSuccess = () => {
    setHasSignedUp(true);
    localStorage.setItem("kaizenith-ctas-signup", "true");
    setShowSignupModal(false);
  };

  // Group CTAs by category
  const category1 = ctas.filter(c => c.category === 1);
  const category2 = ctas.filter(c => c.category === 2);
  const category3 = ctas.filter(c => c.category === 3);
  const category4 = ctas.filter(c => c.category === 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "50 CTAs Específicas para Videojuegos y Estudios Indie",
            description: "Llamadas a la acción diseñadas para creadores de contenido de videojuegos.",
            inLanguage: locale,
            isPartOf: {
              "@type": "WebSite",
              name: "Kaizenith",
              url: "https://kaizenith.es",
            },
          }),
        }}
      />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Volver</span>
              </Link>

              <div className="flex items-center gap-2">
                <SettingsToggles />
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="sm:hidden p-2 text-muted-foreground hover:text-foreground"
                  aria-label="Menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
            {/* Sidebar TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-20 space-y-6">
                <nav className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                    Contenido
                  </p>
                  <a href="#intro" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors">
                    Introducción
                  </a>
                  <a href="#ctas" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors">
                    50 CTAs
                  </a>
                  <a href="#strategy" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors">
                    Guía de Estrategia
                  </a>
                </nav>

                <div className="pt-4 border-t border-border">
                  <Button
                    disabled={!hasSignedUp}
                    onClick={handleDownload}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Descargar HTML
                  </Button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="space-y-12">
              {/* Hero */}
              <section className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                    {t.ctasLeadMagnet.title}
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {t.ctasLeadMagnet.subtitle}
                  </p>
                </div>
              </section>

              {/* Introduction */}
              <section id="intro" className="scroll-mt-20 space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  {t.ctasLeadMagnet.introTitle}
                </h2>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl border border-border bg-card">
                    <p className="text-foreground leading-relaxed">{t.ctasLeadMagnet.intro1}</p>
                  </div>
                  <div className="p-6 rounded-xl border border-border bg-card">
                    <p className="text-foreground leading-relaxed">{t.ctasLeadMagnet.intro2}</p>
                  </div>
                  <div className="p-6 rounded-xl border border-border bg-card">
                    <p className="text-foreground leading-relaxed">{t.ctasLeadMagnet.intro3}</p>
                  </div>
                  <div className="p-6 rounded-xl border border-primary/30 bg-primary/5">
                    <p className="text-foreground leading-relaxed font-medium">{t.ctasLeadMagnet.intro4}</p>
                  </div>
                </div>
              </section>

              {/* 50 CTAs */}
              <section id="ctas" className="scroll-mt-20 space-y-8">
                <h2 className="text-3xl font-bold text-foreground">
                  {t.ctasLeadMagnet.ctasTitle}
                </h2>

                {/* Category 1 - Always visible */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-foreground">
                      {t.ctasLeadMagnet.category1Title}
                    </h3>
                    <p className="text-muted-foreground">{t.ctasLeadMagnet.category1Desc}</p>
                  </div>
                  <div className="grid gap-3">
                    {category1.map(cta => (
                      <CTACard key={cta.id} cta={cta} />
                    ))}
                  </div>
                </div>

                {/* Categories 2-4 - Gated */}
                <GatedContent locked={!hasSignedUp}>
                  {/* Category 2 */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-foreground">
                        {t.ctasLeadMagnet.category2Title}
                      </h3>
                      <p className="text-muted-foreground">{t.ctasLeadMagnet.category2Desc}</p>
                    </div>
                    <div className="grid gap-3">
                      {category2.map(cta => (
                        <CTACard key={cta.id} cta={cta} />
                      ))}
                    </div>
                  </div>
                  </GatedContent>
                <GatedContent locked={!hasSignedUp}>

                  {/* Category 3 */}
                  <div className="space-y-4 mt-8">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-foreground">
                        {t.ctasLeadMagnet.category3Title}
                      </h3>
                      <p className="text-muted-foreground">{t.ctasLeadMagnet.category3Desc}</p>
                    </div>
                    <div className="grid gap-3">
                      {category3.map(cta => (
                        <CTACard key={cta.id} cta={cta} />
                      ))}
                    </div>
                  </div>
                </GatedContent>
                <GatedContent locked={!hasSignedUp}>

                  {/* Category 4 */}
                  <div className="space-y-4 mt-8">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-foreground">
                        {t.ctasLeadMagnet.category4Title}
                      </h3>
                      <p className="text-muted-foreground">{t.ctasLeadMagnet.category4Desc}</p>
                    </div>
                    <div className="grid gap-3">
                      {category4.map(cta => (
                        <CTACard key={cta.id} cta={cta} />
                      ))}
                    </div>
                  </div>
                </GatedContent>
              </section>

              {/* Strategy Guide - Gated */}
              <GatedContent locked={!hasSignedUp}>
                <section id="strategy" className="scroll-mt-20 space-y-8">
                  <h2 className="text-3xl font-bold text-foreground">
                    {t.ctasLeadMagnet.strategyTitle}
                  </h2>

                {/* Content Type Guide */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {t.ctasLeadMagnet.contentTypeTitle}
                  </h3>
                  <p className="text-muted-foreground">{t.ctasLeadMagnet.contentTypeDesc}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {contentTypes.map((ex, i) => (
                      <div key={i} className="p-5 rounded-xl border border-border bg-card space-y-2">
                        <h4 className="font-semibold text-foreground">{ex.type}</h4>
                        <p className="text-sm text-muted-foreground">{ex.recommendedCTAs}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Audience Adaptation */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {t.ctasLeadMagnet.audienceTitle}
                  </h3>
                  <p className="text-muted-foreground">{t.ctasLeadMagnet.audienceDesc}</p>
                  <div className="space-y-3">
                    {audiences.map((ex, i) => (
                      <div key={i} className="p-5 rounded-xl border border-border bg-card space-y-3">
                        <h4 className="font-semibold text-primary">{ex.audience}</h4>
                        <div className="space-y-2">
                          <div>
                            <span className="text-xs text-muted-foreground uppercase tracking-wider">Base:</span>
                            <p className="text-foreground">{ex.base}</p>
                          </div>
                          <div>
                            <span className="text-xs text-muted-foreground uppercase tracking-wider">Adaptado:</span>
                            <p className="text-foreground font-medium">{ex.adapted}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Rules */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {t.ctasLeadMagnet.rulesTitle}
                  </h3>
                  <div className="space-y-2">
                    <div className="p-4 rounded-lg border border-border bg-card">
                      <p className="text-foreground">{t.ctasLeadMagnet.rule1}</p>
                    </div>
                    <div className="p-4 rounded-lg border border-border bg-card">
                      <p className="text-foreground">{t.ctasLeadMagnet.rule2}</p>
                    </div>
                    <div className="p-4 rounded-lg border border-border bg-card">
                      <p className="text-foreground">{t.ctasLeadMagnet.rule3}</p>
                    </div>
                    <div className="p-4 rounded-lg border border-border bg-card">
                      <p className="text-foreground">{t.ctasLeadMagnet.rule4}</p>
                    </div>
                    <div className="p-4 rounded-lg border border-border bg-card">
                      <p className="text-foreground">{t.ctasLeadMagnet.rule5}</p>
                    </div>
                  </div>
                </div>
                </section>
              </GatedContent>

              {/* Final CTA */}
              <section className="p-8 rounded-xl border border-border bg-card text-center space-y-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Descarga la versión HTML
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Guarda esta lista para consulta offline. Archivo HTML autónomo y listo para usar.
                </p>
                <Button
                  disabled={!hasSignedUp}
                  onClick={handleDownload}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Descargar HTML
                </Button>
              </section>

              {/* Footer */}
              <footer className="pt-8 border-t border-border">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                  <Link href="/" className="hover:text-foreground transition-colors">
                    ← Volver a Kaizenith
                  </Link>
                  <p>© {new Date().getFullYear()} Kaizenith Lab</p>
                </div>
              </footer>
            </main>
          </div>
        </div>
      </div>

      {/* DEV Panel */}
      {DEV_AUTH_TOOLS && (
        <div className="fixed bottom-4 right-4 z-50 p-3 rounded-lg bg-card border border-border shadow-lg space-y-2 text-xs w-48">
          <p className="font-medium text-foreground">DEV · CTAs Lead Magnet</p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              DevAuth.signIn({
                context: {
                  source: "lead-magnet-ctas",
                  variant: "preview",
                  section: "core",
                },
                utm: {
                  source: "leadmagnet",
                  medium: "internal",
                  campaign: "ctas-gamedev",
                },
              });
              setHasSignedUp(true);
            }}
            className="w-full"
          >
            Simular signup
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              DevAuth.signOut();
              setHasSignedUp(false);
            }}
            className="w-full"
          >
            Resetear estado
          </Button>
        </div>
      )}

      {/* Signup Modal */}
      <SignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSuccess={handleSignupSuccess}
        context={{
          source: "lead-magnet-ctas",
          section: "core",
          variant: "preview",
        }}
      />
    </>
  );
}
