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
      about: "Nosotros",
      projects: "Proyectos",
      joinBuild: "Únete",
    },
    hero: {
      title:
        "Construimos en público. Iteramos. Creamos mejores herramientas y juegos.",
      subtitle:
        "Kaizenith documenta experimentos, fracasos y lecciones — actualizaciones cortas y útiles, y acceso anticipado a nuestros proyectos.",
      ctaPrimary: "Únete al build — Recibe el newsletter",
      ctaSecondary: "Ver hoja de ruta",
      noSpam: "Sin spam, nunca",
      unsubscribe: "Cancela cuando quieras",
        ctaCommingSoon: "Próximamente podrás unirte al build",
        thankYou: "¡Gracias por tu interés! Por ahora estamos preparando todo, pronto podrás suscribirte al newsletter.",
    },
    intro: {
      title: "Kaizen + Zenith: mejora continua hacia la cima",
      p1: "Somos un estudio indie que cree en el poder de la iteración. Cada proyecto empieza pequeño, se prueba, mide y refina. Sin grandes lanzamientos — solo progreso constante, documentado honestamente.",
      p2: 'Nuestro nombre combina "Kaizen" (mejora continua) con "Zenith" (el punto más alto). Apuntamos alto, pero llegamos paso a paso.',
      p3: "El newsletter es nuestro registro de construcción. Verás qué funciona, qué falla, y las lecciones que aprendemos en el camino. Actualizaciones cortas, sin relleno.",
      buildLogs: "Registros de Build",
      buildLogsDesc:
        "Insights semanales de nuestros experimentos: qué probamos, medimos y aprendimos.",
      realNumbers: "Números Reales",
      realNumbersDesc:
        "Métricas y resultados reales — descargas, retención, tasas de conversión.",
      earlyAccess: "Acceso Anticipado",
      earlyAccessDesc:
        "Sé el primero en probar nuevas herramientas y juegos antes del lanzamiento público.",
    },
    leadMagnet: {
      badge: "Guía Gratuita",
      title: "7 Errores que Cometen los Indies",
      description:
        "Descarga nuestra guía con los errores más comunes que cometen los desarrolladores indie y cómo evitarlos.",
      cta: "Obtener la guía gratis",
    },
    roadmap: {
      title: "La Hoja de Ruta",
      subtitle:
        "Este es nuestro plan para los próximos 6 meses. Cada punto es un experimento real. Haz clic para ver qué intentaremos y por qué.",
      what: "Qué",
      why: "Por qué",
      next: "Siguiente",
      milestones: {
        validation: {
          title: "Validación de Idea",
          timeframe: "Mes 0",
          status: "Completado",
          what: "Encuestas, entrevistas con usuarios potenciales, análisis de competencia.",
          why: "Antes de construir, necesitamos saber si alguien quiere esto.",
          next: "Prototipo funcional basado en feedback.",
        },
        prototype: {
          title: "Prototipo MVP",
          timeframe: "Mes 1-2",
          status: "En Progreso",
          what: "Versión mínima funcional con características core.",
          why: "Probar la hipótesis principal con usuarios reales.",
          next: "Beta cerrada con early adopters.",
        },
        betaLaunch: {
          title: "Lanzamiento Beta",
          timeframe: "Mes 2-3",
          status: "Próximo",
          what: "Beta privada con grupo selecto de usuarios.",
          why: "Obtener feedback real antes del lanzamiento público.",
          next: "Iterar basado en métricas y feedback.",
        },
        iteration: {
          title: "Ciclo de Iteración",
          timeframe: "Mes 3-5",
          status: "Planificado",
          what: "2-3 ciclos de mejora basados en datos.",
          why: "Cada iteración nos acerca al product-market fit.",
          next: "Preparar para lanzamiento público.",
        },
        publicLaunch: {
          title: "Lanzamiento Público",
          timeframe: "Mes 6",
          status: "Planificado",
          what: "Lanzamiento completo con marketing y PR.",
          why: "El producto está listo para escalar.",
          next: "Continuar iterando y expandiendo.",
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
      title: "Nuestros Principios",
      iteration: {
        title: "Iteración",
        description:
          "Pequeños cambios consistentes llevan a grandes resultados.",
      },
      measured: {
        title: "Experimentos Medidos",
        description:
          "Cada decisión está respaldada por datos, no por suposiciones.",
      },
      small: {
        title: "Incrementos Pequeños",
        description: "Lanzamos temprano, lanzamos seguido, aprendemos rápido.",
      },
      share: {
        title: "Compartir Resultados",
        description: "La transparencia genera confianza y comunidad.",
      },
    },
    signup: {
      title: "Únete al Build",
      subtitle:
        "Recibe actualizaciones semanales sobre nuestros experimentos, métricas reales y acceso anticipado a proyectos.",
      emailPlaceholder: "tu@email.com",
      namePlaceholder: "Tu nombre (opcional)",
      submit: "Suscribirme",
      submitting: "Suscribiendo...",
      successTitle: "¡Bienvenido al build!",
      successMessage: "Revisa tu correo para confirmar la suscripción.",
      errorTitle: "Algo salió mal",
      errorMessage: "Por favor intenta de nuevo más tarde.",
    },
    footer: {
      tagline: "Construyendo en público, una iteración a la vez.",
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
      about: "About",
      projects: "Projects",
      joinBuild: "Join the build",
    },
    hero: {
      title: "We build in public. We iterate. We ship better tools and games.",
      subtitle:
        "Kaizenith documents experiments, failures and lessons — short, useful updates and early access to our projects.",
      ctaPrimary: "Join the build — Get the newsletter",
      ctaSecondary: "View roadmap",
      noSpam: "No spam, ever",
      unsubscribe: "Unsubscribe anytime",
        ctaCommingSoon: "Soon you'll be able to join the build",
        thankYou: "Thank you for your interest! For now we are preparing everything, soon you will be able to subscribe to the newsletter.",
    },
    intro: {
      title: "Kaizen + Zenith: continuous improvement toward the peak",
      p1: "We're an indie studio that believes in the power of iteration. Every project starts small, gets tested, measured, and refined. No grand launches — just steady progress, documented honestly.",
      p2: 'Our name combines "Kaizen" (continuous improvement) with "Zenith" (the highest point). We aim high, but we get there one step at a time.',
      p3: "The newsletter is our build log. You'll see what works, what fails, and the lessons we learn along the way. Short updates, no fluff.",
      buildLogs: "Build Logs",
      buildLogsDesc:
        "Weekly insights from our experiments: what we tried, measured, and learned.",
      realNumbers: "Real Numbers",
      realNumbersDesc:
        "Actual metrics and results — downloads, retention, conversion rates.",
      earlyAccess: "Early Access",
      earlyAccessDesc:
        "Be the first to test new tools and games before public release.",
    },
    leadMagnet: {
      badge: "Free Guide",
      title: "7 Mistakes Indies Make",
      description:
        "Download our guide with the most common mistakes indie developers make and how to avoid them.",
      cta: "Get the free guide",
    },
    roadmap: {
      title: "The Roadmap",
      subtitle:
        "This is our plan for the next 6 months. Each point is a real experiment. Click to unfold what we'll try and why.",
      what: "What",
      why: "Why",
      next: "Next",
      milestones: {
        validation: {
          title: "Idea Validation",
          timeframe: "Month 0",
          status: "Completed",
          what: "Surveys, interviews with potential users, competitive analysis.",
          why: "Before building, we need to know if anyone wants this.",
          next: "Functional prototype based on feedback.",
        },
        prototype: {
          title: "MVP Prototype",
          timeframe: "Month 1-2",
          status: "In Progress",
          what: "Minimum viable version with core features.",
          why: "Test the main hypothesis with real users.",
          next: "Closed beta with early adopters.",
        },
        betaLaunch: {
          title: "Beta Launch",
          timeframe: "Month 2-3",
          status: "Next",
          what: "Private beta with select group of users.",
          why: "Get real feedback before public launch.",
          next: "Iterate based on metrics and feedback.",
        },
        iteration: {
          title: "Iteration Cycle",
          timeframe: "Month 3-5",
          status: "Planned",
          what: "2-3 improvement cycles based on data.",
          why: "Each iteration brings us closer to product-market fit.",
          next: "Prepare for public launch.",
        },
        publicLaunch: {
          title: "Public Launch",
          timeframe: "Month 6",
          status: "Planned",
          what: "Full launch with marketing and PR.",
          why: "The product is ready to scale.",
          next: "Continue iterating and expanding.",
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
      title: "Our Principles",
      iteration: {
        title: "Iteration",
        description: "Small consistent changes lead to big results.",
      },
      measured: {
        title: "Measured Experiments",
        description: "Every decision is backed by data, not assumptions.",
      },
      small: {
        title: "Small Increments",
        description: "Ship early, ship often, learn fast.",
      },
      share: {
        title: "Share Results",
        description: "Transparency builds trust and community.",
      },
    },
    signup: {
      title: "Join the Build",
      subtitle:
        "Get weekly updates about our experiments, real metrics, and early access to projects.",
      emailPlaceholder: "you@email.com",
      namePlaceholder: "Your name (optional)",
      submit: "Subscribe",
      submitting: "Subscribing...",
      successTitle: "Welcome to the build!",
      successMessage: "Check your email to confirm your subscription.",
      errorTitle: "Something went wrong",
      errorMessage: "Please try again later.",
    },
    footer: {
      tagline: "Building in public, one iteration at a time.",
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
