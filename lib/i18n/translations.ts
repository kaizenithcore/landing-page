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
  // CTA Banner
  ctaBanner: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    kickstarterNote: string;
  };
  // Lead Magnet
  leadMagnet: {
    badge: string;
    title: string;
    description: string;
    cta: string;
  };
  // Lead Magnet Page
  leadMagnetPage: {
    backToHome: string;
    internalArchive: string;
    pageTitle: string;
    pageSubtitle: string;
    noteTitle: string;
    noteText: string;
    downloadPdf: string;
    download: string;
    lockedTitle: string;
    lockedDesc: string;
    lockedFooter: string;
    lockedBtn: string;
    contentLabel: string;
    checklist: string;
    caseStudies: string;
    checklistTitle: string;
    completed: string;
    errorLabel: string;
    caseStudiesTitle: string;
    sourceLabel: string;
    tenMinTask: string;
    tenMinTaskTitle: string;
    tenMinTaskDesc: string;
    downloadGuide: string;
    downloadGuideDesc: string;
    footerNote: string;
    privacy: string;
    allRightsReserved: string;
    hiddenPageNote: string;
    hiddenPageNoteText: string;
    backToHomeLink: string;
    // Completion Modal
    completionTitle: string;
    completionDesc: string;
    nextStepsTitle: string;
    flowFocusTitle: string;
    flowFocusDesc: string;
    flowFocusTrialBadge: string;
    blogTitle: string;
    blogDesc: string;
    communityTitle: string;
    communityDesc: string;
    socialTitle: string;
    socialDesc: string;
    continueBtn: string;
    // FlowFocus Section
    flowFocusSectionTitle: string;
    flowFocusSectionDesc: string;
    flowFocusCtaBtn: string;
    // Signup Modal
    signupModalTitle: string;
    signupModalDesc: string;
    // Signup Success
    signupSuccessTitle: string;
    signupSuccessDesc: string;
    signupSuccessBtn: string;
    // Error Node Labels
    whatLabel: string;
    whyLabel: string;
    storyLabel: string;
    exampleLabel: string;
    solutionPracticalLabel: string;
    solutionNarrativeLabel: string;
    nextLabel: string;
    toolsLabel: string;
    kpiLabel: string;
    doThisNowLabel: string;
  };
  // Roadmap
  roadmap: {
    title: string;
    focus: string;
    subtitle: string;
    why: string;
    unlocks: string;
    liveLabel: string;
    quarters: {
      q1: {
        title: string;
        status: string; // Launched / Completed / Planned / Active / Validation / Prototype / Concept
        timeframe: string;
        why: string;
        summary: string;
        focus: string;
        unlocks: string;
      };
      q2: {
        title: string;
        status: string;
        timeframe: string;
        why: string;
        summary: string;
        focus: string;
        unlocks: string;
      };
      q3: {
        title: string;
        status: string;
        timeframe: string;
        why: string;
        summary: string;
        focus: string;
        unlocks: string;
      };
      q4: {
        title: string;
        status: string;
        timeframe: string;
        why: string;
        summary: string;
        focus: string;
        unlocks: string;
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
    };
    project1: {
      title: string;
      subtitle: string;
      description: string;
    };
    project2: {
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
    privacy: string;
    privacyAuxText: string;
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
    privacyPolicy: string;
    cookiePolicy: string;
    cookieConfig: string;
  };
  // Theme
  theme: {
    light: string;
    dark: string;
    system: string;
  };
  // Cookie Consent
  cookies: {
    title: string;
    description: string;
    learnMore: string;
    privacyPolicy: string;
    accept: string;
    reject: string;
    configure: string;
    // Configuration panel
    configTitle: string;
    essentialCookies: string;
    essentialDesc: string;
    analyticsCookies: string;
    analyticsDesc: string;
    savePreferences: string;
    required: string;
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
      ctaCommingSoon: "Próximamente: acceso al proceso",
      thankYou:
        "Gracias por tu interés. Estamos preparando todo. Pronto podrás acceder al newsletter.",
    },
    intro: {
      title: "Planificación, creación y lanzamiento",
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
    ctaBanner: {
      headline: "Estamos desarrollando un juego!",
      subheadline:
        "Síguelo en wishlist y apóyanos. Tu support hace la diferencia.",
      ctaPrimary: "Agregar a deseados en Steam",
      ctaSecondary: "Apoyar en Patreon",
      kickstarterNote:
        "Kickstarter planeado para más adelante en el desarrollo",
    },
    leadMagnet: {
      badge: "Guía Gratuita",
      title: "7 Errores Fatales del Marketing Indie",
      description:
        "Los errores que hemos cometido (y visto repetirse). Directos, sin rodeos. Descárgala al unirte.",
      cta: "Obtener la guía",
    },
    leadMagnetPage: {
      backToHome: "Volver a inicio",
      internalArchive: "Archivo interno de Kaizenith",
      pageTitle: "7 errores que frenan tu crecimiento indie",
      pageSubtitle:
        "Errores reales, ejemplos documentados, soluciones que puedes aplicar hoy.",
      noteTitle: "Nota:",
      noteText:
        "Este es un archivo interno del lab de Kaizenith. Errores testeados, ejemplos reales, soluciones prácticas para marketing de juegos indie. No indexado.",
      downloadPdf: "Descargar PDF",
      lockedTitle: "Desbloquea la guía completa",
      lockedDesc:
        "Accede al checklist, casos reales y el plan accionable completo.",
      lockedBtn: "Acceder ahora",
      lockedFooter: "Es gratis · sin spam · acceso inmediato",
      download: "Descargar",
      contentLabel: "Contenido",
      checklist: "Checklist",
      caseStudies: "Casos de estudio",
      checklistTitle: "Checklist de acción",
      completed: "completados",
      errorLabel: "Error",
      caseStudiesTitle: "Casos de estudio",
      sourceLabel: "Fuente",
      tenMinTask: "10 minutos",
      tenMinTaskTitle: "Tarea inmediata",
      tenMinTaskDesc:
        "Abre tu Steam page ahora mismo. Lee la primera frase de tu descripción. Si contiene jerga técnica o una feature sin beneficio, reescríbela en 10 palabras que expliquen qué va a SENTIR el jugador. Eso es todo. 10 minutos. Hazlo ahora.",
      downloadGuide: "Descarga esta guía",
      downloadGuideDesc:
        "PDF completo con los 7 errores, ejemplos y checklist.",
      footerNote:
        "Este material es parte del lab público de Kaizenith. Úsalo, pruébalo y comparte lo que funciona.",
      privacy: "Privacidad",
      allRightsReserved: "Todos los derechos reservados.",
      hiddenPageNote: "¿Por qué está oculta esta página?",
      hiddenPageNoteText:
        "Es un recurso interno del lab. No está indexada para mantener el contenido fresco y exclusivo para quienes lo encuentran.",
      backToHomeLink: "Volver al inicio",
      completionTitle: "Has completado el checklist",
      completionDesc:
        "Excelente trabajo. Ahora tienes un plan claro para mejorar tu estrategia de marketing. Aquí tienes algunos recursos para continuar:",
      nextStepsTitle: "Próximos pasos recomendados",
      flowFocusTitle: "Trackea tu tiempo con FlowFocus",
      flowFocusDesc:
        "Mide cuánto tiempo dedicas a cada tarea de marketing. Datos reales para optimizar tu proceso.",
      flowFocusTrialBadge: "Prueba gratis 7 días",
      blogTitle: "Sigue aprendiendo",
      blogDesc: "Nuevos posts sobre estrategia, analytics y growth",
      communityTitle: "Únete a la comunidad",
      communityDesc: "Comparte tus resultados y aprende de otros devs",
      socialTitle: "Síguenos en redes",
      socialDesc: "Tips diarios y casos de estudio",
      continueBtn: "Continuar",
      flowFocusSectionTitle: "Cómo usar FlowFocus para esto",
      flowFocusSectionDesc:
        "FlowFocus te ayuda a trackear el tiempo que dedicas a cada experimento de marketing. Aquí tienes un ejemplo de cómo estructurar una sesión de trabajo:",
      flowFocusCtaBtn: "Probar FlowFocus — 7 días gratis",
      signupModalTitle: "Descarga la guía",
      signupModalDesc:
        "Deja tu email para descargar el PDF y recibir actualizaciones del lab.",
      signupSuccessTitle: "¡Gracias por apuntarte!",
      signupSuccessDesc:
        "Ya tienes acceso completo a la guía y al contenido interactivo.",
      signupSuccessBtn: "Ver la guía completa",
      whatLabel: "El problema",
      whyLabel: "Por qué",
      storyLabel: "La historia",
      exampleLabel: "Ejemplo real",
      solutionPracticalLabel: "Solución paso a paso",
      solutionNarrativeLabel: "Cómo solucionarlo",
      nextLabel: "Siguiente",
      toolsLabel: "Herramientas",
      kpiLabel: "KPI a medir",
      doThisNowLabel: "Si no haces nada más, haz esto",
    },
    roadmap: {
      title: "El sistema",
      liveLabel: "En vivo",
      subtitle: "Nuestro camino al éxito",
      focus: "En qué estamos centrados",
      why: "Por qué importa ahora",
      unlocks: "Qué conseguimos después",

      quarters: {
        q1: {
          title: "Fase inicial",
          status: "Active",
          timeframe: "2026 · Q1",
          summary:
            "Establecer presencia y lanzar la primera herramienta (FlowFocus).",
          focus: `Comenzar a crear audiencia.
Terminar y publicar FlowFocus.
Implementar estrategia de redes, lead magnet y posible newsletter.
Desarrollo y publicación de la web.`,
          why: "Prioridad: validar canales y generar señales de interés antes de empujar el juego.",
          unlocks:
            "Señales positivas → intensificar promoción del juego y preparar Q2 (Kickstarter).",
        },

        q2: {
          title: "Primeros pasos",
          status: "Prototype",
          timeframe: "2026 · Q2",
          summary: "Dar empuje al juego principal y preparar el crowdfunding.",
          focus: `Ajustar estrategia según resultados.
Intensificar promoción del juego.
Lanzar Kickstarter.
Crear Discord para la comunidad.`,
          why: "Kickstarter es la palanca de visibilidad y financiación si la comunidad responde.",
          unlocks:
            "Éxito en crowdfunding → fondos para producción y alcance ampliado.",
        },

        q3: {
          title: "Lanzamiento!",
          status: "Planificado",
          timeframe: "2026 · Q3",
          summary:
            "Publicar el juego y recoger métricas reales de los jugadores.",
          focus: `Publicar el juego (release principal).
Decidir: DLC/expansión o nuevo proyecto según feedback.
Buscar colaboraciones para la newsletter.`,
          why: "El lanzamiento valida el producto en condiciones reales y guía el roadmap de contenido.",
          unlocks:
            "Decisión clara: expansión / DLC o iniciar nuevo proyecto según datos.",
        },

        q4: {
          title: "Expansión",
          status: "Planificado",
          timeframe: "2026 · Q4",
          summary: "Consolidar pipeline y buscar acuerdos mayores.",
          focus: `Continuar desarrollo del siguiente juego / expansión.
Buscar acuerdos y colaboraciones más grandes.`,
          why: "Escalar con prudencia y convertir señales tempranas en acuerdos y alcance.",
          unlocks:
            "Preparar 2027: priorizar roadmap en función de ingresos y comunidad.",
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
        description:
          "Probando mejora de enfoque basada en datos vs temporizadores tradicionales.",
      },
      project1: {
        title: "Forja Pixel",
        subtitle: "Conceptos tempranos de pixel art.",
        description:
          "Mecánicas de automatización, pixel art y espadas, todo en un juego.",
      },
      project2: {
        title: "Build Log",
        subtitle: "Actualización semanal de estados de los proyectos.",
        description:
          "La transparencia genera confianza. Números reales, lecciones reales.",
      },
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
        description:
          "Incrementos pequeños, resultados compuestos. Sin apuestas épicas.",
      },
      share: {
        title: "Abierto > Cerrado",
        description:
          "Documentamos todo. Los errores enseñan más que los éxitos.",
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
      privacy: "la política de privacidad.",
      privacyAuxText: "Al hacer clic en 'Quiero acceso', aceptas ",
    },
    footer: {
      tagline: "Planificación, creación y lanzamiento.",
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
      privacyPolicy: "Política de Privacidad",
      cookieConfig: "Configuración de cookies",
      cookiePolicy: "Política de Cookies",
    },
    theme: {
      light: "Claro",
      dark: "Oscuro",
      system: "Sistema",
    },
    cookies: {
      title: "Preferencias de cookies",
      description:
        "Usamos cookies para mejorar tu experiencia y analizar cómo usas nuestro sitio. Puedes aceptarlas todas o configurar cuáles deseas usar.",
      learnMore: "Más información",
      privacyPolicy: "Política de Privacidad",
      accept: "Aceptar todas",
      reject: "Rechazar no esenciales",
      configure: "Configurar cookies",
      configTitle: "Configuración de cookies",
      essentialCookies: "Cookies esenciales",
      essentialDesc:
        "Necesarias para que el sitio funcione correctamente. No se pueden desactivar.",
      analyticsCookies: "Cookies analíticas",
      analyticsDesc:
        "Nos ayudan a entender cómo usas el sitio para mejorarlo continuamente.",
      savePreferences: "Guardar preferencias",
      required: "Requerida",
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
      ctaCommingSoon: "Coming soon: access the process",
      thankYou:
        "Thanks for your interest. We're setting everything up. You'll get access to the newsletter soon.",
    },
    intro: {
      title: "Planification, creation and launch.",
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
    ctaBanner: {
      headline: "We are making a game!",
      subheadline:
        "Follow its development and support the journey. Your support makes a difference.",
      ctaPrimary: "Add to Wishlist on Steam",
      ctaSecondary: "Support on Patreon",
      kickstarterNote: "Kickstarter planned for later in development",
    },
    leadMagnet: {
      badge: "Free Guide",
      title: "7 Fatal Indie Marketing Mistakes",
      description:
        "Mistakes we've made (and seen repeated). Direct, no sugarcoating. Download when you join.",
      cta: "Get the guide",
    },
    leadMagnetPage: {
      backToHome: "Back to home",
      internalArchive: "Kaizenith Internal Archive",
      pageTitle: "7 mistakes that stall your indie growth",
      pageSubtitle:
        "Real mistakes, documented examples, solutions you can apply today.",
      noteTitle: "Note:",
      noteText:
        "This is an internal archive from the Kaizenith lab. Tested errors, real examples, practical solutions for indie game marketing. Not indexed.",
      downloadPdf: "Download PDF",
      lockedTitle: "Get the guide",
      lockedDesc: "Get the complete guide, checkboxs, and case studies.",
      lockedBtn: "Access the process",
      lockedFooter: "Free· no spam · inmediate access",
      download: "Download",
      contentLabel: "Contents",
      checklist: "Checklist",
      caseStudies: "Case studies",
      checklistTitle: "Action checklist",
      completed: "completed",
      errorLabel: "Error",
      caseStudiesTitle: "Case studies",
      sourceLabel: "Source",
      tenMinTask: "10 minutes",
      tenMinTaskTitle: "Immediate task",
      tenMinTaskDesc:
        "Open your Steam page right now. Read the first sentence of your description. If it contains technical jargon or a feature without a benefit, rewrite it in 10 words that explain what the player will FEEL. That's it. 10 minutes. Do it now.",
      downloadGuide: "Download this guide",
      downloadGuideDesc:
        "Complete PDF with all 7 errors, examples, and checklist.",
      footerNote:
        "This material is part of the public Kaizenith lab. Use it, test it, and share what works.",
      privacy: "Privacy",
      allRightsReserved: "All rights reserved.",
      hiddenPageNote: "Why is this page hidden?",
      hiddenPageNoteText:
        "It's an internal lab resource. Not indexed to keep the content fresh and exclusive for those who find it.",
      backToHomeLink: "Back to home",
      completionTitle: "You completed the checklist",
      completionDesc:
        "Great work. Now you have a clear plan to improve your marketing strategy. Here are some resources to continue:",
      nextStepsTitle: "Recommended next steps",
      flowFocusTitle: "Track your time with FlowFocus",
      flowFocusDesc:
        "Measure how much time you spend on each marketing task. Real data to optimize your process.",
      flowFocusTrialBadge: "7-day free trial",
      blogTitle: "Keep learning",
      blogDesc: "New posts about strategy, analytics, and growth",
      communityTitle: "Join the community",
      communityDesc: "Share your results and learn from other devs",
      socialTitle: "Follow us on social",
      socialDesc: "Daily tips and case studies",
      continueBtn: "Continue",
      flowFocusSectionTitle: "How to use FlowFocus for this",
      flowFocusSectionDesc:
        "FlowFocus helps you track the time you spend on each marketing experiment. Here's an example of how to structure a work session:",
      flowFocusCtaBtn: "Try FlowFocus — 7 days free",
      signupModalTitle: "Download the guide",
      signupModalDesc:
        "Leave your email to download the PDF and receive lab updates.",
      signupSuccessTitle: "Thanks for signing up!",
      signupSuccessDesc:
        "You now have full access to the guide and interactive content.",
      signupSuccessBtn: "View the complete guide",
      whatLabel: "The problem",
      whyLabel: "Why",
      storyLabel: "The story",
      exampleLabel: "Real example",
      solutionPracticalLabel: "Step-by-step solution",
      solutionNarrativeLabel: "How to fix it",
      nextLabel: "Next",
      toolsLabel: "Tools",
      kpiLabel: "KPI to measure",
      doThisNowLabel: "If you do nothing else, do this",
    },
    roadmap: {
      title: "The System",
      liveLabel: "Live",
      subtitle: "Our path to success",
      focus: "Focus",
      why: "Why now?",
      unlocks: "Unlocks",

      quarters: {
        q1: {
          title: "Starting path",
          status: "In progress",
          timeframe: "2026 · Q1",
          summary: "Establish presence and launch the first tool (FlowFocus).",
          focus: `Start building an audience.
Finish and publish FlowFocus.
Implement social strategy, lead magnet, and possible newsletter.
Develop and publish the website.`,
          why: "Priority: validate channels and generate interest signals before pushing the game.",
          unlocks:
            "Positive signals → ramp up game promotion and prepare Q2 (Kickstarter).",
        },

        q2: {
          title: "First steps",
          status: "Planned",
          timeframe: "2026 · Q2",
          summary: "Push the main game and prepare crowdfunding.",
          focus: `Adjust strategy based on results.
Ramp up game promotion.
Launch Kickstarter.
Create a Discord community.`,
          why: "Kickstarter is the visibility and funding lever if the community responds.",
          unlocks:
            "Successful crowdfunding → funds for production and expanded reach.",
        },

        q3: {
          title: "Launching!",
          status: "Planned",
          timeframe: "2026 · Q3",
          summary: "Release the game and collect real player metrics.",
          focus: `Ship the game (main release).
Decide: DLC/expansion or new project based on feedback.
Seek newsletter collaborations.`,
          why: "Release validates the product in real conditions and informs the content roadmap.",
          unlocks:
            "Clear decision: expansion / DLC or start a new project based on data.",
        },

        q4: {
          title: "Expansion",
          status: "Planned",
          timeframe: "2026 · Q4",
          summary: "Consolidate pipeline and pursue larger partnerships.",
          focus: `Continue development of the next game / expansion.
Seek larger deals and collaborations.`,
          why: "Scale carefully and convert early signals into partnerships and reach.",
          unlocks:
            "Prepare 2027: prioritize roadmap based on revenue and community.",
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
        description:
          "Testing data-driven focus improvement vs traditional timers.",
      },
      project1: {
        title: "Forja Pixel",
        subtitle: "Early pixel art concepts.",
        description:
          "Combining automation mechanics with satisfying visual craft.",
      },
      project2: {
        title: "Build Log",
        subtitle: "Weekly update screenshot.",
        description: "Transparency builds trust. Real numbers, real lessons.",
      },
    },
    principles: {
      title: "What We Believe",
      iteration: {
        title: "Iteration > Perfection",
        description:
          "Ship fast, measure, adjust. Repeat. Perfection is the enemy of progress.",
      },
      measured: {
        title: "Data > Opinions",
        description:
          "Every decision has a metric. If you can't measure it, you don't know if it works.",
      },
      small: {
        title: "Small > Big",
        description: "Small increments, compounding results. No epic bets.",
      },
      share: {
        title: "Open > Closed",
        description:
          "We document everything. Mistakes teach more than successes.",
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
      privacy: "Privacy Policy.",
      privacyAuxText: "By signing up, you agree to our ",
    },
    footer: {
      tagline: "Planification, creation and launch",
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
      privacyPolicy: "Privacy Policy",
      cookieConfig: "Cookie Settings",
      cookiePolicy: "Cookie Policy",
    },
    theme: {
      light: "Light",
      dark: "Dark",
      system: "System",
    },
    cookies: {
      title: "Cookie Preferences",
      description:
        "We use cookies to improve your experience and analyze how you use our site. You can accept all or customize which ones you'd like to use.",
      learnMore: "Learn more",
      privacyPolicy: "Privacy Policy",
      accept: "Accept all",
      reject: "Reject non-essential",
      configure: "Customize cookies",
      configTitle: "Cookie Settings",
      essentialCookies: "Essential cookies",
      essentialDesc:
        "Required for the site to work properly. These cannot be disabled.",
      analyticsCookies: "Analytics cookies",
      analyticsDesc:
        "Help us understand how you use the site so we can improve it continuously.",
      savePreferences: "Save preferences",
      required: "Required",
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
