export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

export const localeFlags: Record<Locale, string> = {
  es: "ES",
  en: "EN",
};

export type TranslationKeys = {
  // Navigation
  nav: {
    roadmap: string;
    about: string;
    projects: string;
    joinBuild: string;
  };
  // Hero
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    noSpam: string;
    unsubscribe: string;
    ctaCommingSoon: string;
    thankYou: string;
  };
  // Intro/About
  intro: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    buildLogs: string;
    buildLogsDesc: string;
    realNumbers: string;
    realNumbersDesc: string;
    earlyAccess: string;
    earlyAccessDesc: string;
  };
  // Lead Magnet
  leadMagnet: {
    badge: string;
    title: string;
    description: string;
    cta: string;
  };
  // Roadmap
  roadmap: {
    title: string;
    subtitle: string;
    what: string;
    why: string;
    next: string;
    // Milestones
    milestones: {
      validation: {
        title: string;
        timeframe: string;
        status: string;
        what: string;
        why: string;
        next: string;
      };
      prototype: {
        title: string;
        timeframe: string;
        status: string;
        what: string;
        why: string;
        next: string;
      };
      betaLaunch: {
        title: string;
        timeframe: string;
        status: string;
        what: string;
        why: string;
        next: string;
      };
      iteration: {
        title: string;
        timeframe: string;
        status: string;
        what: string;
        why: string;
        next: string;
      };
      publicLaunch: {
        title: string;
        timeframe: string;
        status: string;
        what: string;
        why: string;
        next: string;
      };
    };
  };
  // Projects
  projects: {
    title: string;
    subtitle: string;
    comingSoon: string;
    viewProject: string;
    project0: {
      title: string;
      subtitle: string;
      description: string;
    },
    project1: {
      title: string;
      subtitle: string;
      description: string;
    },project2: {
      title: string;
      subtitle: string;
      description: string;
    };
  };
  // Principles
  principles: {
    title: string;
    iteration: {
      title: string;
      description: string;
    };
    measured: {
      title: string;
      description: string;
    };
    small: {
      title: string;
      description: string;
    };
    share: {
      title: string;
      description: string;
    };
  };
  // Signup Form
  signup: {
    title: string;
    subtitle: string;
    emailPlaceholder: string;
    namePlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    errorTitle: string;
    errorMessage: string;
  };
  // Footer
  footer: {
    tagline: string;
    roadmap: string;
    about: string;
    projects: string;
    newsletter: string;
    twitter: string;
    github: string;
    discord: string;
    copyright: string;
    builtWith: string;
    navigate: string;
    connect: string;
  };
  // Theme
  theme: {
    light: string;
    dark: string;
    system: string;
  };
  // Settings
  settings: {
    language: string;
    theme: string;
  };
};

export const translations: Record<Locale, TranslationKeys> = {
  es: {
    nav: {
      roadmap: "Hoja de Ruta",
      about: "Filosofía",
      projects: "Proyectos",
      joinBuild: "Únete",
    },
    hero: {
      title: "El ruido mata proyectos indie. El proceso los salva.",
      subtitle:
        "La mayoría de estudios indie fallan en silencio. Nosotros documentamos cada experimento, cada métrica, cada error. Sin filtros. Si buscas claridad sobre cómo construir sin depender de la suerte, esto es para ti.",
      ctaPrimary: "Accede al proceso — Newsletter semanal",
      ctaSecondary: "Ver la hoja de ruta",
      noSpam: "Solo contenido útil",
      unsubscribe: "Cancela cuando quieras",
      ctaCommingSoon: "Acceso al proceso",
      thankYou: "Gracias por tu interés. Estamos preparando todo. Pronto podrás acceder al newsletter.",
    },
    intro: {
      title: "Proceso sobre hype. Datos sobre intuición.",
      p1: "No creemos en lanzamientos épicos ni en marketing de humo. Creemos en ciclos cortos, hipótesis claras y métricas que no mienten. Cada decisión se prueba, se mide, se ajusta.",
      p2: "Kaizen (mejora continua) + Zenith (el punto más alto). Apuntamos alto, pero el camino es metodológico: pequeños incrementos, resultados compuestos.",
      p3: "El newsletter no es contenido motivacional. Es un registro técnico de lo que funciona, lo que falla, y por qué. Si prefieres claridad sobre inspiración, estás en el lugar correcto.",
      buildLogs: "Registro Técnico",
      buildLogsDesc:
        "Cada semana: qué hipótesis probamos, qué medimos, qué aprendimos. Sin adornos.",
      realNumbers: "Métricas Reales",
      realNumbersDesc:
        "Descargas, retención, conversión. Los números que importan, no vanity metrics.",
      earlyAccess: "Acceso Anticipado",
      earlyAccessDesc:
        "Prueba herramientas y juegos antes que nadie. Tu feedback moldea el producto.",
    },
    leadMagnet: {
      badge: "Guía Gratuita",
      title: "7 Errores Fatales del Marketing Indie",
      description:
        "Los errores que hemos cometido (y visto repetirse). Directos, sin rodeos. Descárgala al unirte.",
      cta: "Obtener la guía",
    },
    roadmap: {
      title: "El Sistema",
      subtitle:
        "No es un timeline. Es un sistema de experimentos activos. Cada nodo es una hipótesis que estamos probando. Haz clic para ver qué estamos testeando y qué buscamos aprender.",
      what: "Qué estamos probando",
      why: "Hipótesis",
      next: "Siguiente iteración",
      milestones: {
        validation: {
          title: "Validación de Demanda",
          timeframe: "Semana 1-2",
          status: "Completado",
          what: "Landing con signup. Análisis de competencia directa e indirecta.",
          why: "Construir sin validar es el error #1. Necesitamos señales antes de invertir tiempo.",
          next: "Si >50 signups en 2 semanas → prototipo. Si no → pivotar propuesta de valor.",
        },
        prototype: {
          title: "Prototipo Funcional",
          timeframe: "Semana 3-6",
          status: "En Progreso",
          what: "MVP con el core loop completo. Funcionalidad mínima, experiencia máxima en lo esencial.",
          why: "El prototipo responde una pregunta: ¿el core loop engancha? Todo lo demás es ruido.",
          next: "10 usuarios activos con >3 sesiones/semana → beta. Si no → iterar core loop.",
        },
        betaLaunch: {
          title: "Lanzamiento Beta",
          timeframe: "Semana 7-10",
          status: "Próximo",
          what: "Métricas de retención y engagement. Feedback cualitativo estructurado.",
          why: "La beta no es para pulir. Es para encontrar el PMF signal: ¿los usuarios vuelven sin que les recordemos?",
          next: "Retención D7 >30% → escalar. Si no → analizar churns y ajustar.",
        },
        iteration: {
          title: "Ciclos de Iteración",
          timeframe: "Semana 11-20",
          status: "Planificado",
          what: "Sprints de 2 semanas. Una hipótesis por sprint. Métricas antes/después. Documentación pública.",
          why: "El crecimiento no es lineal. Es una serie de micro-experimentos que compound.",
          next: "Cada sprint documenta: hipótesis, experimento, resultado, aprendizaje.",
        },
        publicLaunch: {
          title: "Lanzamiento Público",
          timeframe: "Semana 21+",
          status: "Planificado",
          what: "Lanzamiento con product hunt, comunidades relevantes, PR selectivo. Base de usuarios validada.",
          why: "Lanzar no es el objetivo. Es el punto donde el producto ha probado que merece atención.",
          next: "Post-launch: seguir iterando. El lanzamiento es un milestone, no el final.",
        },
      },
    },
    projects: {
      title: "Proyectos",
      subtitle: "Lo que estamos construyendo actualmente.",
      comingSoon: "Próximamente",
      viewProject: "Ver proyecto",
      project0: {
        title: "FlowFocus",
        subtitle: "Herramienta de productividad.",
        description: "Probando mejora de enfoque basada en datos vs temporizadores tradicionales.",
      },
      project1: {
        title: "Forja Pixel",
        subtitle: "Conceptos tempranos de pixel art.",
        description: "Mecánicas de automatización, pixel art y espadas, todo en un juego.",
      },
      project2: {
        title: "Build Log",
        subtitle: "Actualización semanal de estados de los proyectos.",
        description: "La transparencia genera confianza. Números reales, lecciones reales.",
      }
    },
    principles: {
      title: "Lo Que Creemos",
      iteration: {
        title: "Iteración > Perfección",
        description:
          "Lanzar rápido, medir, ajustar. Repetir. La perfección es el enemigo del progreso.",
      },
      measured: {
        title: "Datos > Opiniones",
        description:
          "Cada decisión tiene una métrica. Si no puedes medirlo, no sabes si funciona.",
      },
      small: {
        title: "Pequeño > Grande",
        description: "Incrementos pequeños, resultados compuestos. Sin apuestas épicas.",
      },
      share: {
        title: "Abierto > Cerrado",
        description: "Documentamos todo. Los errores enseñan más que los éxitos.",
      },
    },
    signup: {
      title: "Accede al Proceso",
      subtitle:
        "Newsletter semanal con experimentos, métricas y lecciones. Sin motivación vacía. Solo lo que funciona (y lo que no).",
      emailPlaceholder: "tu@email.com",
      namePlaceholder: "Tu nombre (opcional)",
      submit: "Quiero acceso",
      submitting: "Procesando...",
      successTitle: "Estás dentro",
      successMessage: "Revisa tu correo. El primer email llega pronto.",
      errorTitle: "Algo salió mal",
      errorMessage: "Intenta de nuevo en unos minutos.",
    },
    footer: {
      tagline: "Proceso sobre hype. Datos sobre intuición.",
      roadmap: "Hoja de Ruta",
      about: "Nosotros",
      projects: "Proyectos",
      newsletter: "Newsletter",
      twitter: "Twitter",
      github: "GitHub",
      discord: "Discord",
      copyright: "Todos los derechos reservados.",
      builtWith: "Construido con",
      connect: "Conectar",
      navigate: "Navegar",
    },
    theme: {
      light: "Claro",
      dark: "Oscuro",
      system: "Sistema",
    },
    settings: {
      language: "Idioma",
        theme: "Tema",
    },
  },
  en: {
    nav: {
      roadmap: "Roadmap",
      about: "Philosophy",
      projects: "Projects",
      joinBuild: "Join",
    },
    hero: {
      title: "Noise kills indie projects. Process saves them.",
      subtitle:
        "Most indie studios fail in silence. We document every experiment, every metric, every mistake. Unfiltered. If you want clarity on how to build without relying on luck, this is for you.",
      ctaPrimary: "Access the process — Weekly newsletter",
      ctaSecondary: "View the roadmap",
      noSpam: "Useful content only",
      unsubscribe: "Unsubscribe anytime",
      ctaCommingSoon: "Access the process",
      thankYou: "Thanks for your interest. We're setting everything up. You'll get access to the newsletter soon.",
    },
    intro: {
      title: "Process over hype. Data over intuition.",
      p1: "We don't believe in epic launches or smoke-and-mirrors marketing. We believe in short cycles, clear hypotheses, and metrics that don't lie. Every decision is tested, measured, adjusted.",
      p2: "Kaizen (continuous improvement) + Zenith (the highest point). We aim high, but the path is methodical: small increments, compounding results.",
      p3: "The newsletter isn't motivational content. It's a technical log of what works, what fails, and why. If you prefer clarity over inspiration, you're in the right place.",
      buildLogs: "Technical Log",
      buildLogsDesc:
        "Every week: what hypothesis we tested, what we measured, what we learned. No fluff.",
      realNumbers: "Real Metrics",
      realNumbersDesc:
        "Downloads, retention, conversion. Numbers that matter, not vanity metrics.",
      earlyAccess: "Early Access",
      earlyAccessDesc:
        "Test tools and games before anyone else. Your feedback shapes the product.",
    },
    leadMagnet: {
      badge: "Free Guide",
      title: "7 Fatal Indie Marketing Mistakes",
      description:
        "Mistakes we've made (and seen repeated). Direct, no sugarcoating. Download when you join.",
      cta: "Get the guide",
    },
    roadmap: {
      title: "The System",
      subtitle:
        "Not a timeline. A system of active experiments. Each node is a hypothesis we're testing. Click to see what we're testing and what we're trying to learn.",
      what: "What we're testing",
      why: "Hypothesis",
      next: "Next iteration",
      milestones: {
        validation: {
          title: "Demand Validation",
          timeframe: "Week 1-2",
          status: "Completed",
          what: "User interviews. Landing page with signup. Direct and indirect competitive analysis.",
          why: "Building without validating is mistake #1. We need signals before investing time.",
          next: "If >50 signups in 2 weeks → prototype. If not → pivot value proposition.",
        },
        prototype: {
          title: "Functional Prototype",
          timeframe: "Week 3-6",
          status: "In Progress",
          what: "MVP with complete core loop. Minimum functionality, maximum experience on essentials.",
          why: "The prototype answers one question: does the core loop hook? Everything else is noise.",
          next: "10 active users with >3 sessions/week → beta. If not → iterate core loop.",
        },
        betaLaunch: {
          title: "Closed Beta",
          timeframe: "Week 7-10",
          status: "Next",
          what: "50-100 selected beta testers. Retention and engagement metrics. Structured qualitative feedback.",
          why: "Beta isn't for polishing. It's for finding the PMF signal: do users return without reminders?",
          next: "D7 retention >30% → scale. If not → analyze churns and adjust.",
        },
        iteration: {
          title: "Iteration Cycles",
          timeframe: "Week 11-20",
          status: "Planned",
          what: "2-week sprints. One hypothesis per sprint. Before/after metrics. Public documentation.",
          why: "Growth isn't linear. It's a series of micro-experiments that compound.",
          next: "Each sprint documents: hypothesis, experiment, result, learning.",
        },
        publicLaunch: {
          title: "Public Launch",
          timeframe: "Week 21+",
          status: "Planned",
          what: "Launch via Product Hunt, relevant communities, selective PR. Validated user base.",
          why: "Launching isn't the goal. It's the point where the product has proven it deserves attention.",
          next: "Post-launch: keep iterating. Launch is a milestone, not the end.",
        },
      },
    },
    projects: {
      title: "Projects",
      subtitle: "What we're currently building.",
      comingSoon: "Coming Soon",
      viewProject: "View project",
      project0: {
        title: "FlowFocus",
        subtitle: "Productivity tool UI mock",
        description: "Testing data-driven focus improvement vs traditional timers.",
      },
      project1: {
        title: "Forja Pixel",
        subtitle: "Early pixel art concepts.",
        description: "Combining automation mechanics with satisfying visual craft.",
      },
      project2: {
        title: "Build Log",
        subtitle: "Weekly update screenshot.",
        description: "Transparency builds trust. Real numbers, real lessons.",
      }
    },
    principles: {
      title: "What We Believe",
      iteration: {
        title: "Iteration > Perfection",
        description: "Ship fast, measure, adjust. Repeat. Perfection is the enemy of progress.",
      },
      measured: {
        title: "Data > Opinions",
        description: "Every decision has a metric. If you can't measure it, you don't know if it works.",
      },
      small: {
        title: "Small > Big",
        description: "Small increments, compounding results. No epic bets.",
      },
      share: {
        title: "Open > Closed",
        description: "We document everything. Mistakes teach more than successes.",
      },
    },
    signup: {
      title: "Access the Process",
      subtitle:
        "Weekly newsletter with experiments, metrics, and lessons. No empty motivation. Just what works (and what doesn't).",
      emailPlaceholder: "you@email.com",
      namePlaceholder: "Your name (optional)",
      submit: "Get access",
      submitting: "Processing...",
      successTitle: "You're in",
      successMessage: "Check your email. First message arrives soon.",
      errorTitle: "Something went wrong",
      errorMessage: "Try again in a few minutes.",
    },
    footer: {
      tagline: "Process over hype. Data over intuition.",
      roadmap: "Roadmap",
      about: "About",
      projects: "Projects",
      newsletter: "Newsletter",
      twitter: "Twitter",
      github: "GitHub",
      discord: "Discord",
      copyright: "All rights reserved.",
      builtWith: "Built with",
        connect: "Connect",
        navigate: "Navigate",
    },
    theme: {
      light: "Light",
      dark: "Dark",
      system: "System",
    },
    settings: {
      language: "Language",
      theme: "Theme",
    },
  },
};

export function getTranslation(locale: Locale): TranslationKeys {
  return translations[locale];
}
