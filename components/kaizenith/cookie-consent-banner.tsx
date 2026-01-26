"use client";

import React, { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/locale-context";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

// Declare global gtag function and dataLayer for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

type CookiePreferences = {
  essential: boolean;
  analytics: boolean;
};

const COOKIE_KEY = "kaizenith-cookie-consent";
const COOKIE_DURATION_DAYS = 365;

export function CookieConsentBanner() {
  const { t } = useLocale();
  const [isVisible, setIsVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
  });

  // Check if user has already made a choice
  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY);
    if (!saved) {
      setIsVisible(true);
      return;
    }

    try {
      const stored = JSON.parse(saved);
      if (stored.expiresAt && new Date(stored.expiresAt) < new Date()) {
        localStorage.removeItem(COOKIE_KEY);
        setIsVisible(true);
        return;
      }

      setPreferences(stored);
      
      // Load analytics if user has already consented
      if (stored.analytics) {
        loadAnalytics();
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    (window as any).openCookieSettings = () => {
      setShowConfig(true);
      setIsVisible(true);
    };
  }, []);

  const saveCookiePreferences = (prefs: CookiePreferences) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + COOKIE_DURATION_DAYS);

    localStorage.setItem(
      COOKIE_KEY,
      JSON.stringify({
        ...prefs,
        timestamp: new Date().toISOString(),
        expiresAt: expirationDate.toISOString(),
      }),
    );

    setPreferences(prefs);
    setIsVisible(false);
    setShowConfig(false);

    // Load analytics if accepted
    if (prefs.analytics) {
      loadAnalytics();
    }
  };

  const handleAcceptAll = () => {
    saveCookiePreferences({
      essential: true,
      analytics: true,
    });
  };

  const handleRejectNonEssential = () => {
    saveCookiePreferences({
      essential: true,
      analytics: false,
    });
  };

  const handleSavePreferences = () => {
    saveCookiePreferences(preferences);
  };

  const loadAnalytics = () => {
    // Initialize Google Analytics with the Vercel Analytics GA approach
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"; // Replace with your Google Analytics ID

    // Set default consent state
    if (typeof window !== "undefined") {
      // Initialize gtag if not already present
      if (!window.gtag) {
        // Initialize dataLayer
        window.dataLayer = window.dataLayer || [];

        // Initialize gtag function
        function gtag(...args: any[]) {
          window.dataLayer!.push(arguments);
        }
        window.gtag = gtag;

        // Load Google Analytics script
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        document.head.appendChild(script);

        // Initialize gtag with config
        gtag("js", new Date());
        gtag("config", GA_ID, {
          allow_google_signals: false,
          allow_ad_personalization_signals: false,
        });
      }

      // Update consent based on user preferences
      window.gtag!("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  };

  // Initialize consent system on mount
  useEffect(() => {
    if (typeof window !== "undefined" && !window.gtag) {
      // Set default consent state before analytics is loaded
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer!.push(arguments);
      }
      window.gtag = gtag;
      gtag("consent", "default", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Banner */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card shadow-lg transition-all duration-300 ease-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          {showConfig ? (
            // Configuration Panel
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-sm font-semibold text-foreground">
                  {t.cookies.configTitle}
                </h3>
                <button
                  onClick={() => setShowConfig(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close configuration"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Essential Cookies */}
              <div className="rounded-lg border border-border bg-secondary/50 p-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center pt-0.5">
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="h-4 w-4 rounded border-border bg-primary text-primary-foreground cursor-not-allowed"
                      aria-label={t.cookies.essentialCookies}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium text-foreground block">
                      {t.cookies.essentialCookies}
                      <span className="ml-2 text-xs text-muted-foreground">
                        ({t.cookies.required})
                      </span>
                    </label>
                    <p className="text-xs text-muted-foreground mt-1">
                      {t.cookies.essentialDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="rounded-lg border border-border p-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center pt-0.5">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          analytics: e.target.checked,
                        })
                      }
                      className="h-4 w-4 rounded border-border bg-card cursor-pointer"
                      aria-label={t.cookies.analyticsCookies}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium text-foreground block cursor-pointer">
                      {t.cookies.analyticsCookies}
                    </label>
                    <p className="text-xs text-muted-foreground mt-1">
                      {t.cookies.analyticsDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Policy Links */}
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                <a
                  href="/privacy"
                  className="underline hover:text-foreground transition-colors"
                >
                  {t.cookies.privacyPolicy}
                </a>
              </div>

              {/* Save Button */}
              <Button
                onClick={handleSavePreferences}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {t.cookies.savePreferences}
              </Button>
            </div>
          ) : (
            // Main Banner Content
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {t.cookies.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t.cookies.description}{" "}
                  <a
                    href="/privacy"
                    className="underline hover:text-foreground transition-colors"
                  >
                    {t.cookies.learnMore}
                  </a>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-2">
                <Button
                  onClick={handleRejectNonEssential}
                  variant="outline"
                  className="text-xs font-medium border-border hover:bg-secondary bg-transparent"
                >
                  {t.cookies.reject}
                </Button>
                <Button
                  onClick={() => setShowConfig(true)}
                  variant="outline"
                  className="text-xs font-medium border-border hover:bg-secondary"
                >
                  {t.cookies.configure}
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="text-xs font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {t.cookies.accept}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay - optional, removed for minimal design */}
    </>
  );
}
