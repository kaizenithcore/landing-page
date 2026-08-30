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
  // Shared nav/footer, used by SiteNav and SiteFooter across all 4 areas
  common: {
    nav: {
      studio: string;
      works: string;
      design: string;
      blog: string;
      contact: string;
    };
    footer: {
      areas: string;
      legal: string;
      connect: string;
      support: string;
      privacyPolicy: string;
      cookiePolicy: string;
      cookieConfig: string;
      github: string;
      copyright: string;
    };
  };
  // Shared contact form, used by ContactSection across all 4 areas
  contact: {
    root: { title: string; subtitle: string };
    studio: { title: string; subtitle: string };
    works: { title: string; subtitle: string };
    design: { title: string; subtitle: string };
    areaChipGeneral: string;
    areaChipStudio: string;
    areaChipWorks: string;
    areaChipDesign: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    sendAnother: string;
    errorMessage: string;
  };
  // Root — kaizenith.es corporate landing
  root: {
    featured: {
      title: string;
      subtitle: string;
      studio: { label: string; title: string; description: string; cta: string };
      works: { label: string; title: string; description: string; cta: string };
      design: { label: string; title: string; description: string; cta: string };
    };
    hero: {
      title: string;
      subtitle: string;
      areasLabel: string;
      areaStudio: { name: string; tagline: string; cta: string };
      areaWorks: { name: string; tagline: string; cta: string };
      areaDesign: { name: string; tagline: string; cta: string };
    };
    whyUs: {
      title: string;
      iteration: { title: string; description: string };
      measured: { title: string; description: string };
      small: { title: string; description: string };
      share: { title: string; description: string };
    };
    about: {
      title: string;
      description: string;
    };
    stats: {
      title: string;
      stat1Value: string;
      stat1Label: string;
      stat2Value: string;
      stat2Label: string;
      stat3Value: string;
      stat3Label: string;
    };
    footer: {
      tagline: string;
    };
  };
  // Studio — Kaizenith Studio (games)
  studio: {
    hero: {
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
      trust: string;
      playVideo: string;
      pauseVideo: string;
    };
    intro: {
      title: string;
      lead: string;
      buildLogs: string;
      buildLogsDesc: string;
      realNumbers: string;
      realNumbersDesc: string;
      earlyAccess: string;
      earlyAccessDesc: string;
    };
    projects: {
      title: string;
      subtitle: string;
    };
    trajectory: {
      title: string;
      subtitle: string;
      milestones: {
        origin: { date: string; title: string; description: string };
        prototypes: { date: string; title: string; description: string };
        current: { date: string; title: string; description: string };
        next: { date: string; title: string; description: string };
      };
    };
    // "El Sistema" — deactivated studio-wide roadmap, kept for reference
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
          status: string;
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
    gameRoadmap: {
      title: string;
      subtitle: string;
      countdownLabel: string;
      countdownDays: string;
      countdownHours: string;
      countdownMinutes: string;
      countdownSeconds: string;
      futureNote: string;
      milestones: {
        development: { status: string; date: string; title: string; description: string };
        wishlist: { status: string; date: string; title: string; description: string };
        launch: { status: string; date: string; title: string; description: string };
        postLaunch: { status: string; date: string; title: string; description: string };
        future: { status: string; date: string; title: string; description: string };
      };
    };
    ctaBanner: {
      headline: string;
      subheadline: string;
      ctaPrimary: string;
      ctaSecondary: string;
      ctaTertiary: string;
    };
    footer: {
      tagline: string;
      supportTheProject: string;
      twitter: string;
    };
  };
  // Shared project catalog — used by Studio (games only) and Works (SaaS + services)
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    statusComplete: string;
    statusAdvanced: string;
    statusAlmostReady: string;
    statusInDevelopment: string;
    categoryProductivity: string;
    categoryBusiness: string;
    categoryGames: string;
    items: {
      workspace: { title: string; subtitle: string; description: string };
      zarpe: { title: string; subtitle: string; description: string };
      serena: { title: string; subtitle: string; description: string };
      enlace: { title: string; subtitle: string; description: string };
      cronista: { title: string; subtitle: string; description: string };
      nexa: { title: string; subtitle: string; description: string };
      cashpilot: { title: string; subtitle: string; description: string };
      urbana: { title: string; subtitle: string; description: string };
      paranormalDetector: { title: string; subtitle: string; description: string };
      mhadle: { title: string; subtitle: string; description: string };
      itNeverEnds: { title: string; subtitle: string; description: string };
      teenRomantic: { title: string; subtitle: string; description: string };
      iudexInquisitor: { title: string; subtitle: string; description: string };
      fromHell: { title: string; subtitle: string; description: string };
      devoClicker: { title: string; subtitle: string; description: string };
      maldicionAprendiz: { title: string; subtitle: string; description: string };
      charmMiner: { title: string; subtitle: string; description: string };
      voidSurvivor: { title: string; subtitle: string; description: string };
      petCarePocket: { title: string; subtitle: string; description: string };
    };
    ctaCard: {
      title: string;
      description: string;
      button: string;
    };
  };
  // Works — Kaizenith Works (software/SaaS/custom development)
  works: {
    hero: {
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    stack: {
      title: string;
      items: string[];
    };
    services: {
      title: string;
      subtitle: string;
      saas: { title: string; description: string };
      custom: { title: string; description: string };
      detailedTitle: string;
      detailed: { title: string; description: string }[];
    };
    process: {
      title: string;
      subtitle: string;
      step1: { title: string; description: string };
      step2: { title: string; description: string };
      step3: { title: string; description: string };
      step4: { title: string; description: string };
    };
    trust: {
      stat1Value: string;
      stat1Label: string;
      stat2Value: string;
      stat2Label: string;
      stat3Value: string;
      stat3Label: string;
    };
    catalog: {
      intro: string;
      productsTitle: string;
      servicesTitle: string;
    };
    footer: {
      tagline: string;
    };
  };
  // Design — Kaizenith Vision (working name, not yet final; branding/design/marketing)
  design: {
    hero: {
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    trust: {
      stat1Value: string;
      stat1Label: string;
      stat2Value: string;
      stat2Label: string;
      stat3Value: string;
      stat3Label: string;
      stat4Value: string;
      stat4Label: string;
    };
    services: {
      title: string;
      logo: { title: string; description: string };
      branding: { title: string; description: string };
      web: { title: string; description: string };
      marketing: { title: string; description: string };
    };
    whyUs: {
      title: string;
      item1: { title: string; description: string };
      item2: { title: string; description: string };
      item3: { title: string; description: string };
      item4: { title: string; description: string };
    };
    portfolio: {
      title: string;
      subtitle: string;
      items: {
        seisSentidos: { client: string; category: string; description: string };
        moratalaz: { client: string; category: string; description: string };
        teresaDeLaRosa: { client: string; category: string; description: string };
        aeda: { client: string; category: string; description: string };
        marDePosibilidades: { client: string; category: string; description: string };
        babiloniaWorld: { client: string; category: string; description: string };
        maymol: { client: string; category: string; description: string };
        graficasIllescas: { client: string; category: string; description: string };
        zenkyu: { client: string; category: string; description: string };
        carlosSotomayor: { client: string; category: string; description: string };
        aytoGrinon: { client: string; category: string; description: string };
        anthique: { client: string; category: string; description: string };
        reikiMilleGrazie: { client: string; category: string; description: string };
        danzante: { client: string; category: string; description: string };
      };
      ctaCard: {
        title: string;
        description: string;
        button: string;
      };
      detail: {
        back: string;
        moreProjects: string;
        ctaTitle: string;
        ctaDescription: string;
        ctaButton: string;
      };
    };
    clients: {
      label: string;
      names: string[];
    };
    objection: {
      eyebrow: string;
      title: string;
      body: string;
    };
    rates: {
      title: string;
      subtitle: string;
      recommendedLabel: string;
      tier1: { name: string; price: string; description: string; features: string[] };
      tier2: { name: string; price: string; description: string; features: string[] };
      tier3: { name: string; price: string; description: string; features: string[] };
      alaCarteTitle: string;
      alaCarteToggle: string;
      alaCarteNote: string;
      alaCarteItems: { name: string; price: string }[];
    };
    process: {
      title: string;
      step1: { title: string; description: string };
      step2: { title: string; description: string };
      step3: { title: string; description: string };
      step4: { title: string; description: string };
    };
    footer: {
      tagline: string;
    };
  };
  // Blog
  blog: {
    title: string;
    subtitle: string;
    footerTagline: string;
    readMore: string;
    back: string;
    categoryLabels: {
      general: string;
      design: string;
      development: string;
    };
  };
  // Support Contact Page (/soporte)
  supportContact: {
    title: string;
    subtitle: string;
    description: string;
    emailCta: string;
    note: string;
  };
  // Affiliate Support Page
  affiliate: {
    hero: {
      headline: string;
      subheadline: string;
      intro: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    why: {
      title: string;
      p1: string;
      p2: string;
      p3: string;
    };
    how: {
      title: string;
      step1Title: string;
      step1Desc: string;
      step2Title: string;
      step2Desc: string;
      step3Title: string;
      step3Desc: string;
      note: string;
    };
    what: {
      title: string;
      intro: string;
      item1: string;
      item2: string;
      item3: string;
      item4: string;
      item5: string;
      footer: string;
    };
    transparency: {
      title: string;
      disclosure: string;
      noPaidReviews: string;
      noSponsored: string;
      linksMarked: string;
      editorial: string;
      faqTitle: string;
      faq1Q: string;
      faq1A: string;
      faq2Q: string;
      faq2A: string;
      faq3Q: string;
      faq3A: string;
    };
    alternatives: {
      title: string;
      intro: string;
      use: string;
      share: string;
      newsletter: string;
      feedback: string;
    };
  };
  // CTAs Lead Magnet
  ctasLeadMagnet: {
    title: string;
    subtitle: string;
    introTitle: string;
    intro1: string;
    intro2: string;
    intro3: string;
    intro4: string;
    ctasTitle: string;
    category1Title: string;
    category1Desc: string;
    category2Title: string;
    category2Desc: string;
    category3Title: string;
    category3Desc: string;
    category4Title: string;
    category4Desc: string;
    strategyTitle: string;
    contentTypeTitle: string;
    contentTypeDesc: string;
    audienceTitle: string;
    audienceDesc: string;
    rulesTitle: string;
    rule1: string;
    rule2: string;
    rule3: string;
    rule4: string;
    rule5: string;
    copyBtnLabel: string;
    copiedLabel: string;
    signupTitle: string;
    signupSubtitle: string;
    signupButton: string;
    signupDisclaimer: string;
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
    common: {
      nav: {
        studio: "Studio",
        works: "Works",
        design: "Vision",
        blog: "Blog",
        contact: "Contacto",
      },
      footer: {
        areas: "Áreas",
        legal: "Legal",
        connect: "Conectar",
        support: "Soporte",
        privacyPolicy: "Política de Privacidad",
        cookiePolicy: "Política de Cookies",
        cookieConfig: "Configuración de cookies",
        github: "GitHub",
        copyright: "Todos los derechos reservados.",
      },
    },
    contact: {
      root: {
        title: "¿Hablamos?",
        subtitle:
          "Para cualquier cosa que no encaje en un área concreta, o si no sabes por dónde empezar, escríbenos.",
      },
      studio: {
        title: "¿Prensa, colaboración o algo que no encaja arriba?",
        subtitle: "Escríbenos, leemos todo.",
      },
      works: {
        title: "¿Tienes un proyecto en mente?",
        subtitle: "Cuéntanos qué necesitas. Sin compromiso, sin jerga innecesaria.",
      },
      design: {
        title: "¿Le damos forma a tu marca?",
        subtitle: "Cuéntanos tu proyecto y te decimos cómo podemos ayudar.",
      },
      areaChipGeneral: "General",
      areaChipStudio: "Studio",
      areaChipWorks: "Works",
      areaChipDesign: "Vision",
      emailPlaceholder: "tu@email.com",
      messagePlaceholder: "Cuéntanos en qué podemos ayudarte...",
      submit: "Enviar mensaje",
      submitting: "Enviando...",
      successTitle: "Mensaje enviado",
      successMessage: "Gracias por escribirnos. Te responderemos lo antes posible.",
      sendAnother: "Enviar otro mensaje",
      errorMessage: "Algo salió mal. Inténtalo de nuevo o escríbenos a hola@kaizenith.es.",
    },
    root: {
      featured: {
        title: "Lo que estamos construyendo",
        subtitle: "Un vistazo real a cada área, no solo enlaces.",
        studio: {
          label: "Kaizenith Studio",
          title: "Ping Pong Mate",
          description: "Nuestro primer lanzamiento en Steam, con hoja de ruta pública y wishlist abierta.",
          cta: "Ver Studio",
        },
        works: {
          label: "Kaizenith Works",
          title: "Kaizenith Workspace",
          description: "Nuestra propia herramienta de productividad, en uso diario, y el resto del catálogo SaaS.",
          cta: "Ver Works",
        },
        design: {
          label: "Kaizenith Vision",
          title: "Trabajo real, para negocios reales",
          description: "14 proyectos de identidad de marca y diseño entregados a clientes reales.",
          cta: "Ver Vision",
        },
      },
      hero: {
        title: "Construimos software, juegos y marcas con el mismo método.",
        subtitle:
          "Kaizenith es una agencia de desarrollo y diseño. Kaizen (mejora continua) + Zenith (el punto más alto): ciclos cortos, decisiones medidas, y trabajo que se nota en cada área.",
        areasLabel: "Nuestras áreas",
        areaStudio: {
          name: "Kaizenith Studio",
          tagline: "Videojuegos hechos con cariño y datos, no con humo.",
          cta: "Explorar Studio",
        },
        areaWorks: {
          name: "Kaizenith Works",
          tagline:
            "Software y SaaS para negocios y administraciones que necesitan que las cosas funcionen.",
          cta: "Explorar Works",
        },
        areaDesign: {
          name: "Kaizenith Vision",
          tagline: "Marcas, diseño e identidad visual con carácter.",
          cta: "Explorar Vision",
        },
      },
      whyUs: {
        title: "Por qué Kaizenith",
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
      about: {
        title: "Quiénes somos",
        description:
          "Kaizenith empezó como un pequeño estudio de videojuegos y ha crecido hacia el software y el diseño sin perder la forma de trabajar: equipos pequeños, ciclos cortos, y productos probados con gente real antes de prometérselos a nadie.",
      },
      stats: {
        title: "En marcha ahora mismo",
        stat1Value: "3",
        stat1Label: "áreas de negocio activas",
        stat2Value: "8+",
        stat2Label: "proyectos en distintas fases",
        stat3Value: "100%",
        stat3Label: "autofinanciado, sin inversores",
      },
      footer: {
        tagline: "Software, juegos y marcas, con el mismo método.",
      },
    },
    studio: {
      hero: {
        title: "Tu espera, convertida en arcade.",
        subtitle:
          "Ping Pong Mate se queda en una esquina de tu pantalla mientras haces otras cosas. Encadena combos, gana puntos y canjéalos por cosméticos coleccionables, sin dejar lo que estabas haciendo.",
        ctaPrimary: "Añadir a la lista de deseos",
        ctaSecondary: "Ver la hoja de ruta",
        trust: "Ayuda a que el juego llegue a más gente.",
        playVideo: "Reproducir el tráiler",
        pauseVideo: "Pausar el tráiler",
      },
      intro: {
        title: "Planificación, creación y lanzamiento",
        lead: "Kaizen (mejora continua) + Zenith (el punto más alto): ciclos cortos, hipótesis claras y métricas que no mienten, en vez de lanzamientos de humo.",
        buildLogs: "Registro Técnico",
        buildLogsDesc: "Qué probamos, qué medimos, qué aprendimos.",
        realNumbers: "Métricas Reales",
        realNumbersDesc: "Descargas, retención, conversión. Sin vanity metrics.",
        earlyAccess: "Acceso Anticipado",
        earlyAccessDesc: "Prueba juegos y herramientas antes que nadie.",
      },
      projects: {
        title: "Nuestros juegos",
        subtitle: "Dos prototipos completos, con más por llegar.",
      },
      trajectory: {
        title: "De prototipo a lanzamiento",
        subtitle: "Así hemos llegado hasta aquí.",
        milestones: {
          origin: {
            date: "Los inicios",
            title: "Aprender construyendo",
            description:
              "Kaizenith Studio nace para aprender desarrollo de juegos en público, sin humo ni promesas vacías.",
          },
          prototypes: {
            date: "Primeros juegos",
            title: "Con 6 juegos publicados en itch.io + 2 prototipos web",
            description:
              "6 juegos de alcance reducido y diferentes géneros, pequeños y jugables, para aprender el ciclo entero: crear, publicar, aprender. La mayoría proyectos de JAMs",
          },
          current: {
            date: "Ahora",
            title: "Ping Pong Mate",
            description:
              "Nuestro primer lanzamiento serio en Steam, con hoja de ruta pública y wishlist abierta.",
          },
          next: {
            date: "Después",
            title: "Lo que la comunidad decida",
            description:
              "Nuevos juegos o expansiones, según cómo responda la gente al primero.",
          },
        },
      },
      roadmap: {
        title: "El sistema",
        liveLabel: "En vivo",
        subtitle: "Cuatro trimestres, cuatro apuestas. Toca uno para ver el detalle.",
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
      gameRoadmap: {
        title: "Del desarrollo a tu escritorio",
        subtitle: "Así de cerca está Ping Pong Mate de llegar a Steam, y qué viene después.",
        countdownLabel: "Lanzamiento previsto en",
        countdownDays: "Días",
        countdownHours: "Horas",
        countdownMinutes: "Min",
        countdownSeconds: "Seg",
        futureNote:
          "Estos planes dependen del éxito del lanzamiento. Se irán confirmando según la respuesta de la comunidad.",
        milestones: {
          development: {
            status: "En desarrollo",
            date: "Ahora",
            title: "Puliendo la base",
            description:
              "Ajustes, rendimiento y las últimas piezas antes de abrir la wishlist.",
          },
          wishlist: {
            status: "Próximamente",
            date: "Septiembre 2026",
            title: "Wishlist en Steam",
            description:
              "La página de Steam estará lista para añadir Ping Pong Mate a tu lista de deseos.",
          },
          launch: {
            status: "Fecha provisional",
            date: "Octubre 2026",
            title: "Lanzamiento",
            description: "El día que Ping Pong Mate llega a tu escritorio.",
          },
          postLaunch: {
            status: "Compromiso",
            date: "Después del lanzamiento",
            title: "Más contenido, sin parar",
            description:
              "Logros, nuevos cosméticos (¡música y estelas!), más personalización y ajustes continuos.",
          },
          future: {
            status: "Futuro",
            date: "Más adelante",
            title: "Nuevos modos y competición",
            description:
              "Modos de juego (retos, contrarreloj), leaderboards, y cosméticos temáticos exclusivos por eventos especiales.",
          },
        },
      },
      ctaBanner: {
        headline: "Ping Pong Mate ya se puede añadir a tu wishlist",
        subheadline:
          "Sigue su desarrollo en Steam y apóyanos. Tu apoyo hace la diferencia.",
        ctaPrimary: "Añadir a la wishlist",
        ctaSecondary: "Apoyar en Patreon",
        ctaTertiary: "Apoyar en Ko-fi",
      },
      footer: {
        tagline: "Planificación, creación y lanzamiento.",
        supportTheProject: "Apoya el proyecto",
        twitter: "Twitter",
      },
    },
    projects: {
      title: "Proyectos",
      subtitle:
        "Estudio activo, catálogo variado: herramientas propias, SaaS para negocios y administraciones, y juegos.",
      viewProject: "Ver",
      statusComplete: "Completo",
      statusAdvanced: "Muy avanzado",
      statusAlmostReady: "Casi listo",
      statusInDevelopment: "En desarrollo",
      categoryProductivity: "Productividad interna",
      categoryBusiness: "SaaS para negocios y administraciones",
      categoryGames: "Juegos",
      items: {
        workspace: {
          title: "Kaizenith Workspace",
          subtitle: "Herramienta de gestión de tiempo y productividad.",
          description:
            "Nuestro propio espacio de trabajo, diseñado para optimizar el flujo y la concentración. Es nuestro laboratorio de productividad, en uso diario.",
        },
        zarpe: {
          title: "Zarpe",
          subtitle: "Webs a medida para negocio local.",
          description:
            "Presencia online rápida y profesional para negocios que todavía no la tienen.",
        },
        serena: {
          title: "Serena",
          subtitle: "Reservas de citas para psicología privada.",
          description:
            "Agenda especializada pensada para el día a día de un gabinete de psicología privado.",
        },
        enlace: {
          title: "Enlace",
          subtitle: "Gestión de servicios sociales para ayuntamientos.",
          description:
            "Centraliza casos, seguimiento y coordinación de los servicios sociales municipales.",
        },
        cronista: {
          title: "Cronista",
          subtitle: "Gestión TI y cumplimiento ENS para organizaciones.",
          description:
            "Inventario de activos, incidentes y cumplimiento del Esquema Nacional de Seguridad en un solo sitio.",
        },
        nexa: {
          title: "Nexa",
          subtitle: "Matrículas, alumnado y clases para escuelas de danza.",
          description:
            "Gestión de matrículas, alumnado, profesorado y horarios. Ya maduro en danza; en construcción para gimnasios e idiomas.",
        },
        cashpilot: {
          title: "CashPilot",
          subtitle: "Nombre provisional.",
          description:
            "Herramienta de gestión financiera personal, en su recta final antes de lanzarse.",
        },
        petCarePocket: {
          title: "Pet Care Pocket",
          subtitle: "Control sanitario para tu mascota.",
          description:
            "Ficha de control sanitario, citas, historial médico y recordatorios, todo desde tu móvil. Cuida su salud como cuidas la tuya.",
        },
        urbana: {
          title: "Urbana",
          subtitle: "Gestión de licencias urbanísticas para ayuntamientos.",
          description:
            "Digitaliza la tramitación de licencias urbanísticas municipales. Todavía en fase temprana.",
        },
        paranormalDetector: {
          title: "Paranormal Detector",
          subtitle: "Buscaminas + battleships multijugador para streamers.",
          description:
            "Juego de navegador con ambientación paranormal, pensado para retransmitirse en directo.",
        },
        mhadle: {
          title: "MHAdle",
          subtitle: "Adivina el personaje, estilo Wordle.",
          description:
            "Un reto diario para fans de My Hero Academia. Sin monetización, hecho por diversión.",
        },
        itNeverEnds: {
          title: "It Never Ends",
          subtitle: "Juego de estrategia en tiempo real.",
          description:
            "Un juego de estrategia en tiempo real con un mensaje claro sobre la guerra.",
        },
        teenRomantic: {
          title: "My teen romanti comedy won't start so no one else's will",
          subtitle: "Odio las comedias románticas por que nunca soy la protagonista :(",
          description:
            "Juego de 'acción' sobre el día a día de una estudiante cuya comedia romántica no empieza, y por lo tanto, debe asegurarse de que la de nadie más tampoco. Proyecto hecho para la primera GirlyJam",
        },
        iudexInquisitor: {
          title: "Iudex Inquisitor",
          subtitle: "Juego de toma de decisiones.",
          description:
            "¿Qᴜᴇ́ ᴇs ʟᴏ ǫᴜᴇ ɴᴏs ʜᴀᴄᴇ ʜᴜᴍᴀɴᴏs? Acompaña a Conrad en aquella noche en la que todo va a cambiar. Proyecto hecho en equipo para la Level Up Game Jam 2023.",
        },
        fromHell: {
          title: "From Hell",
          subtitle: "Juego de plataformas rápido y preciso.",
          description:
            "Has acabado en el infierno y debe buscar la forma de salir en el menor tiempo posible (con mecánicas de speedrun integradas). Proyecto hecho en equipo para la SpeedJam 5",
        },
        devoClicker: {
          title: "Devo Clicker Game",
          subtitle: "Juego clicker sobre minar una criptomoneda.",
          description:
            "Tienes media hora para minar la mayor cantidad de criptomonedas posible, atento a la fluctuación del mercado!. Proyecto creado por completo con HTML, CSS y JS",
        },
        maldicionAprendiz: {
          title: "La maldición del aprendiz",
          subtitle: "Juego de acción con mecánicas de roguelike.",
          description:
            "Una horrible maldición ha caído sobre ti y debes encontrar la forma de romperla.",
        },
        charmMiner: {
          title: "Charm Miners SL",
          subtitle: "Juego clicker sobre crear y vender colgantes de una preciosa gema.",
          description:
            "Tienes que conseguir tanto dinero como sea posible rápidamente, acercarte a esa preciosa gema y usarla para crear y vender colgantes puede que no sea del todo legal. Proyecto para la Winter Melon Jam 2024",
        },
        voidSurvivor: {
          title: "Void Survivor",
          subtitle: "Juego de acción rápido, sobrevive!",
          description:
            "Estas flotando en medio de un cinturon de asteroides y deberás sobrevivir tanto tiempo como sea posible antes de que el vacío te engulla. Ganador del segundo puesto en la categoría de diversión de la IGDB Beginner's Jam Sept. 2023",
        },
      },
      ctaCard: {
        title: "¿Quieres que el tuyo también esté aquí?",
        description:
          "Desarrollamos apps y SaaS a medida. Si tienes una idea o necesitas una herramienta para tu negocio, hablemos.",
        button: "Cuéntanos tu proyecto",
      },
    },
    works: {
      hero: {
        title: "Software que funciona, no solo que se ve bien.",
        subtitle:
          "Somos una agencia de desarrollo. Construimos software a medida para negocios y administraciones — y documentamos en abierto los productos SaaS que hemos creado por el camino, como prueba de lo que sabemos hacer.",
        ctaPrimary: "Hablemos de tu proyecto",
        ctaSecondary: "Ver proyectos",
      },
      stack: {
        title: "Con qué construimos",
        items: ["Next.js", "Supabase", "Stripe", "Vercel", "PostgreSQL", "TypeScript"],
      },
      services: {
        title: "Lo que hacemos",
        subtitle: "Desarrollo a medida, respaldado por proyectos reales que ya hemos construido.",
        saas: {
          title: "Proyectos propios, documentados en abierto",
          description:
            "Herramientas verticales que construimos y mantenemos nosotros mismos — la prueba de que sabemos construir software real, no solo prometerlo.",
        },
        custom: {
          title: "Desarrollo a medida",
          description:
            "Webs y aplicaciones a medida para negocios que necesitan algo propio, no una plantilla. Como hicimos con Zarpe.",
        },
        detailedTitle: "Con más detalle",
        detailed: [
          {
            title: "Landing pages y webs corporativas",
            description: "Presencia online rápida, profesional y lista para convertir.",
          },
          {
            title: "Aplicaciones web a medida",
            description: "SaaS y herramientas internas construidas para tu proceso, no al revés.",
          },
          {
            title: "Integraciones",
            description: "Pagos, IA, APIs externas — conectamos tu negocio con las herramientas que necesitas.",
          },
          {
            title: "Migración y modernización",
            description: "Actualizamos sistemas existentes sin parar la operación.",
          },
          {
            title: "Mantenimiento y soporte",
            description: "Seguimos ahí después del lanzamiento: actualizaciones, seguridad, rendimiento.",
          },
          {
            title: "Partimos de una base real",
            description:
              "Si tu problema se parece al de Workspace, Enlace o Cronista, no empezamos de cero: adaptamos esa base a tu caso.",
          },
        ],
      },
      process: {
        title: "Cómo trabajamos",
        subtitle: "Cuatro pasos, sin sorpresas.",
        step1: {
          title: "Descubrimiento",
          description: "Entendemos el problema real antes de escribir una línea de código.",
        },
        step2: {
          title: "Diseño",
          description: "Prototipamos la solución y la validamos contigo antes de construir.",
        },
        step3: {
          title: "Desarrollo",
          description: "Ciclos cortos, avances visibles, sin cajas negras de meses.",
        },
        step4: {
          title: "Lanzamiento y soporte",
          description: "Publicamos, medimos, y seguimos ahí después del lanzamiento.",
        },
      },
      trust: {
        stat1Value: "7+",
        stat1Label: "productos SaaS en distintas fases",
        stat2Value: "100%",
        stat2Label: "stack moderno y mantenido",
        stat3Value: "1",
        stat3Label: "interlocutor: quien construye tu software",
      },
      catalog: {
        intro:
          "Esto no es una tienda de SaaS: son proyectos que hemos construido y mantenemos, documentados en abierto. Si quieres algo parecido para tu negocio, hablemos.",
        productsTitle: "Proyectos propios",
        servicesTitle: "Desarrollo a medida",
      },
      footer: {
        tagline: "Software que funciona, no solo que se ve bien.",
      },
    },
    design: {
      hero: {
        title: "Marcas con carácter, sin ruido.",
        subtitle:
          "Diseño de marca, identidad visual y marketing para proyectos que quieren destacar por lo que son, no por gritar más fuerte.",
        ctaPrimary: "Empezar un proyecto",
        ctaSecondary: "Ver trabajo",
      },
      trust: {
        stat1Value: "20+",
        stat1Label: "años de experiencia",
        stat2Value: "100%",
        stat2Label: "satisfacción de clientes",
        stat3Value: "14",
        stat3Label: "proyectos documentados",
        stat4Value: "100%",
        stat4Label: "trabajo real, sin relleno",
      },
      services: {
        title: "Qué hacemos",
        logo: { title: "Diseño de logo", description: "Una marca reconocible, construida para durar." },
        branding: {
          title: "Branding",
          description: "Identidad visual completa: color, tipografía, tono, sistema.",
        },
        web: { title: "Diseño web", description: "Webs que se ven tan bien como funcionan." },
        marketing: {
          title: "Marketing y redes",
          description: "Contenido y creatividades pensadas para tu audiencia real.",
        },
      },
      whyUs: {
        title: "Por qué elegirnos",
        item1: {
          title: "Experiencia",
          description: "Más de 20 años diseñando marcas, papelería y webs para negocios reales.",
        },
        item2: {
          title: "Enfoque personalizado",
          description: "Cada proyecto se adapta a tu negocio, no al revés. Sin plantillas genéricas.",
        },
        item3: {
          title: "Calidad al detalle",
          description: "Cuidamos cada archivo, cada tipografía, cada milímetro. Nada se deja al azar.",
        },
        item4: {
          title: "Soporte continuo",
          description: "No desaparecemos al entregar el logo. Seguimos disponibles para lo que necesites.",
        },
      },
      portfolio: {
        title: "Trabajo real, para negocios reales",
        subtitle: "Esto no son maquetas: son marcas que ya están funcionando.",
        items: {
          seisSentidos: {
            client: "Seis Sentidos",
            category: "Elaboraciones gourmet",
            description: "Identidad de marca para un obrador de elaboraciones gourmet.",
          },
          moratalaz: {
            client: "Distrito de Moratalaz",
            category: "Cartelería institucional",
            description: "Cartelería y roll-up para la campaña de Reyes del distrito.",
          },
          teresaDeLaRosa: {
            client: "Teresa de la Rosa",
            category: "Identidad de marca",
            description: "Identidad visual y papelería para una marca de accesorios.",
          },
          aeda: {
            client: "AEDA",
            category: "Asociación de estudiantes de danza",
            description: "Identidad visual para una asociación de estudiantes de danza.",
          },
          marDePosibilidades: {
            client: "Mar de Posibilidades",
            category: "Distribución de productos del mar",
            description: "Identidad de marca para una distribuidora de productos del mar.",
          },
          babiloniaWorld: {
            client: "Babilonia World",
            category: "Criadero felino",
            description: "Identidad de marca para un criadero felino.",
          },
          maymol: {
            client: "Maymol",
            category: "Componentes industriales",
            description: "Identidad visual para un fabricante de componentes industriales.",
          },
          graficasIllescas: {
            client: "Gráficas Illescas",
            category: "Servicios de impresión",
            description: "Identidad y papelería corporativa para una imprenta.",
          },
          zenkyu: {
            client: "Zenkyu",
            category: "Productos del mar",
            description: "Identidad de marca para una empresa de productos del mar.",
          },
          carlosSotomayor: {
            client: "Estudio Carlos Sotomayor",
            category: "Arquitectura e ingeniería",
            description: "Diseño web para un estudio de arquitectura e ingeniería.",
          },
          aytoGrinon: {
            client: "Ayuntamiento de Griñón",
            category: "Identidad institucional",
            description: "Diseño del escudo institucional del ayuntamiento.",
          },
          anthique: {
            client: "Anthique",
            category: "Arte en la mesa",
            description: "Identidad de marca para una firma de vajilla y arte en la mesa.",
          },
          reikiMilleGrazie: {
            client: "Reiki Mille Grazie",
            category: "Identidad y web",
            description: "Identidad visual y diseño web para un centro de terapias.",
          },
          danzante: {
            client: "Danzante",
            category: "Escuela de danza",
            description: "Identidad visual para una escuela de danza.",
          },
        },
        ctaCard: {
          title: "¿Quieres que tu marca esté aquí?",
          description: "Hablemos de tu proyecto y te decimos cómo podemos ayudarte.",
          button: "Empezar un proyecto",
        },
        detail: {
          back: "Volver a proyectos",
          moreProjects: "Más proyectos",
          ctaTitle: "¿Quieres algo así para tu marca?",
          ctaDescription: "Hablemos de tu proyecto y te decimos cómo podemos ayudarte.",
          ctaButton: "Empezar un proyecto",
        },
      },
      clients: {
        label: "Clientes con los que hemos trabajado",
        names: [
          "Seis Sentidos",
          "AEDA",
          "Mar de Posibilidades",
          "Babilonia World",
          "Zenkyu",
          "Gráficas Illescas",
          "Maymol",
          "Danzante",
          "Anthique",
          "Distrito de Moratalaz",
          "Ayuntamiento de Griñón",
          "Reiki Mille Grazie",
          "Estudio Carlos Sotomayor",
          "Teresa de la Rosa",
        ],
      },
      objection: {
        eyebrow: "¿Ya tienes un logo?",
        title:
          "Si te lo hizo un amigo, una plantilla online o tú mismo, probablemente te está costando clientes sin que lo sepas.",
        body: "Un logo casero no es solo un tema estético: es la primera señal de confianza que ve alguien antes de decidir si te llama a ti o al de al lado. No hace falta tirarlo todo y empezar de cero — podemos evolucionar tu logo actual manteniendo lo que ya reconocen tus clientes, o construir uno nuevo si lo prefieres. Tú decides.",
      },
      rates: {
        title: "Tarifas",
        subtitle: "Cada proyecto es distinto — estas son las líneas de partida.",
        recommendedLabel: "Recomendado",
        tier1: {
          name: "Identidad Esencial",
          price: "390 €",
          description: "Para un negocio que necesita dejar de tener una imagen improvisada.",
          features: [
            "Logotipo personalizado (2 propuestas, 1 ronda de ajustes)",
            "Versiones principal, horizontal y monocroma",
            "Paleta de colores y tipografías",
            "Icono/favicón cuando proceda",
            "Archivos PNG, JPG, PDF y SVG + mini guía de uso",
          ],
        },
        tier2: {
          name: "Identidad de Marca",
          price: "790 €",
          description: "El producto recomendado: sistema visual completo, no solo un logo más caro.",
          features: [
            "Todo lo de Identidad Esencial, con 3 propuestas y 2 rondas de ajustes",
            "Sistema visual completo, usos correctos e incorrectos",
            "Manual de identidad visual (15-25 páginas)",
            "Tarjeta de visita y firma de email",
            "Avatar + portada para una red social",
            "3 mockups de aplicación de la identidad",
          ],
        },
        tier3: {
          name: "Identidad Completa",
          price: "1.490 €",
          description: "Para negocios que quieren profesionalizar completamente su imagen.",
          features: [
            "Todo lo de Identidad de Marca, con 4 propuestas y 2 rondas de ajustes",
            "Manual de identidad ampliado y sistema gráfico",
            "Iconografía básica y plantillas de documentos",
            "Papelería: tarjeta, hoja corporativa, firma de email",
            "Redes sociales y flyer/cartel",
            "5-6 aplicaciones de marca, mockups profesionales",
          ],
        },
        alaCarteTitle: "¿Necesitas algo puntual?",
        alaCarteToggle: "Ver catálogo de diseño gráfico",
        alaCarteNote:
          "Todos los diseños incluyen una ronda de ajustes. Cambios adicionales o modificaciones sustanciales se presupuestan aparte.",
        alaCarteItems: [
          { name: "Tarjeta de visita", price: "75 €" },
          { name: "Cartel / póster", price: "75 €" },
          { name: "Firma de email", price: "60 €" },
          { name: "Flyer", price: "120 €" },
          { name: "Creatividad publicitaria", price: "150 €" },
          { name: "Pack 3 creatividades", price: "290 €" },
          { name: "Díptico", price: "175 €" },
          { name: "Tríptico", price: "225 €" },
          { name: "Portada + contraportada", price: "225 €" },
          { name: "Diseño para vinilo", price: "desde 180 €" },
          { name: "Adaptación de diseño existente", price: "desde 50 €" },
          { name: "Vectorización", price: "desde 50 €/hora" },
          { name: "Maquetación editorial", price: "desde 45 €/página" },
          { name: "Catálogo 50 páginas", price: "desde 1.950 €" },
          { name: "Revista / publicación", price: "presupuesto a medida" },
        ],
      },
      process: {
        title: "Cómo trabajamos",
        step1: { title: "Brief", description: "Entendemos tu proyecto, tu audiencia y tus referencias." },
        step2: { title: "Estrategia", description: "Definimos la dirección antes de diseñar nada." },
        step3: { title: "Creación", description: "Diseñamos, iteramos, afinamos contigo." },
        step4: { title: "Entrega", description: "Archivos, guía de marca, y todo listo para usar." },
      },
      footer: {
        tagline: "Marcas con carácter, sin ruido.",
      },
    },
    blog: {
      title: "Blog",
      subtitle: "Cómo pensamos, cómo trabajamos, y cómo se hacen los proyectos que ves en el portfolio.",
      footerTagline: "Cómo pensamos y cómo trabajamos.",
      readMore: "Leer entrada",
      back: "Volver al blog",
      categoryLabels: {
        general: "General",
        design: "Diseño",
        development: "Desarrollo",
      },
    },
    supportContact: {
      title: "Soporte",
      subtitle: "¿Algo no funciona como debería?",
      description:
        "Soporte técnico general para todos los juegos y herramientas de Kaizenith. Escríbenos y te responderemos lo antes posible.",
      emailCta: "Escribir a soporte",
      note: "También puedes copiar el correo directamente: soporte@kaizenith.es",
    },
    ctasLeadMagnet: {
      title: "50 CTAs Específicas para Videojuegos y Estudios Indie",
      subtitle: "Llamadas a la acción diseñadas para creadores de contenido de videojuegos y estudios indie que quieren crecer su audiencia, generar tráfico, conseguir testers, o vender.",
      introTitle: "Por qué esta lista existe",
      intro1: "Los CTAs genéricos ('dale like', 'sígueme') no funcionan igual en el nicho de videojuegos. Los desarrolladores indie y creadores de contenido de gaming necesitan CTAs que conecten con objetivos específicos: conseguir wishlists, capturar testers, llevar tráfico a Steam, o construir comunidad antes del lanzamiento.",
      intro2: "Los CTAs cambian según la etapa del funnel. Un devlog temprano necesita CTAs de seguimiento. Un anuncio de demo necesita CTAs de acción inmediata. Una semana antes del lanzamiento necesita urgencia. Esta lista cubre todo el espectro.",
      intro3: "Úsala como referencia rápida. Copia, adapta, y prueba. Cada CTA está diseñada para un contexto y objetivo específico, pero todas se pueden personalizar a tu tono y proyecto.",
      intro4: "No uses todas. Elige las que encajan con tu etapa actual y tu estilo. La mejor CTA es la que suena natural viniendo de ti.",
      ctasTitle: "50 CTAs por Objetivo",
      category1Title: "Ganar seguidores",
      category1Desc: "Para cuando necesitas crecer tu audiencia base y que la gente te siga en el proceso.",
      category2Title: "Aumentar tráfico a otras redes",
      category2Desc: "Redirigir audiencia a donde tienes contenido más profundo o lanzamientos importantes.",
      category3Title: "Conseguir usuarios para demos/playtests",
      category3Desc: "Capturar gente dispuesta a probar tu juego y darte feedback real.",
      category4Title: "Conseguir ventas o wishlists",
      category4Desc: "Convertir interés en acción comercial: compras, pre-órdenes, o wishlists en Steam.",
      strategyTitle: "Guía de Estrategia",
      contentTypeTitle: "Qué CTA usar según tu tipo de contenido",
      contentTypeDesc: "El contexto importa. Un devlog técnico permite CTAs más informales de seguimiento. Un anuncio de lanzamiento requiere CTAs directas. Usa esta guía para elegir bien.",
      audienceTitle: "Adapta el CTA según tu audiencia",
      audienceDesc: "No todos tus seguidores son iguales. Devs indies responden a transparencia y proceso. Gamers casuales responden a diversión y novedad. Early adopters responden a exclusividad. Ajusta el mensaje.",
      rulesTitle: "Reglas prácticas",
      rule1: "1 CTA principal por pieza de contenido. No mezcles objetivos.",
      rule2: "No mezcles 'sígueme' con 'compra' en el mismo post. Elige uno.",
      rule3: "Adapta según la fase del funnel: awareness → interés → consideración → acción.",
      rule4: "Repite CTAs estratégicas en series de contenido para reforzar.",
      rule5: "Testea variaciones. Lo que funciona para un dev no funciona igual para otro.",
      copyBtnLabel: "Copiar",
      copiedLabel: "Copiado",
      signupTitle: "Desbloquear la lista completa",
      signupSubtitle: "Accede a todas las CTAs y la guía completa de estrategia.",
      signupButton: "Desbloquear ahora",
      signupDisclaimer: "Gratis · sin spam · acceso inmediato",
    },
    affiliate: {
      hero: {
        headline: "Apoya el Proyecto\nSin Coste Adicional",
        subheadline:
        "En preparación...",
          // "Una forma transparente de apoyar el desarrollo a través de colaboraciones de afiliación.",
        intro:
          "Algunos enlaces en esta página son enlaces de afiliado. Si compras a través de ellos, puede generarse una pequeña comisión para apoyar el desarrollo continuo del proyecto sin aumentar el precio para ti.",
        ctaPrimary: "Ver Herramientas Recomendadas",
        ctaSecondary: "Cómo funciona",
      },

      why: {
        title: "¿Por Qué Enlaces de Afiliado?",
        p1: "Este proyecto se desarrolla de forma independiente. Para garantizar la sostenibilidad a largo plazo, se diversifican intencionalmente las fuentes de ingresos.",
        p2: "Los enlaces de afiliado son completamente opcionales. Permiten que las personas que ya planeaban adquirir estos productos o servicios apoyen el proyecto sin realizar donaciones directas.",
        p3: "En la mayoría de los casos, no hay impacto en tu coste. La comisión la paga el proveedor, no tú.",
      },

      how: {
        title: "Cómo Funcionan las Colaboraciones de Afiliación",
        step1Title: "1. Haces clic en un enlace",
        step1Desc:
          "Al hacer clic en un enlace recomendado, puede activarse un mecanismo de seguimiento de afiliación.",
        step2Title: "2. Compras normalmente",
        step2Desc:
          "Realizas tu compra directamente en la plataforma del proveedor, como lo harías habitualmente.",
        step3Title: "3. Puede generarse una pequeña comisión",
        step3Desc:
          "Si la compra cumple los requisitos, el proveedor paga una pequeña comisión para apoyar el desarrollo. El precio que pagas no aumenta.",
        note: "Solo se recomiendan herramientas y recursos alineados con la filosofía del proyecto.",
      },

      what: {
        title: "Qué Encontrarás Aquí",
        intro:
          "No es promoción aleatoria de productos. Es una selección curada alineada con el trabajo enfocado y los sistemas intencionales:",
        item1: "Herramientas seleccionadas",
        item2: "Recursos de productividad",
        item3: "Hardware / herramientas de setup",
        item4: "Libros",
        item5: "Software y servicios digitales",
        footer:
          "Cada recomendación se elige con intención y visión a largo plazo.",
      },

      transparency: {
        title: "Transparencia Primero",
        disclosure:
          "Divulgación de afiliación: Algunos enlaces en esta página son enlaces de afiliado y pueden generar una comisión.",
        noPaidReviews:
          "No hay reseñas pagadas. Las recomendaciones son independientes.",
        noSponsored:
          "No hay colocaciones patrocinadas salvo que se indique explícitamente.",
        linksMarked:
          "Los enlaces de afiliado están claramente marcados cuando es posible.",
        editorial: "Se mantiene la independencia editorial completa.",
        faqTitle: "Preguntas Frecuentes",

        faq1Q: "¿Pago más si uso estos enlaces?",
        faq1A:
          "En la mayoría de los casos, no. El precio se mantiene igual. La comisión la paga el proveedor, no tú.",

        faq2Q: "¿Todos los enlaces son de afiliado?",
        faq2A:
          "No necesariamente. Algunos enlaces pueden ser simples referencias. Las relaciones de afiliación se indican cuando aplican.",

        faq3Q: "¿Puedo apoyar de otras formas?",
        faq3A:
          "Sí. Puedes usar los productos que construimos, compartir el proyecto, unirte al newsletter o proporcionar feedback.",
      },

      alternatives: {
        title: "Otras Formas de Apoyar",
        intro:
          "Los enlaces de afiliado son solo una opción. También puedes apoyar:",
        use: "Usando los productos que construimos",
        share: "Compartiendo el proyecto",
        newsletter: "Uniéndote al newsletter",
        feedback: "Proporcionando feedback y sugerencias",
      },
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
      flowFocusCtaBtn: "Probar FlowFocus por 7 días gratis",
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
    signup: {
      title: "Accede al Proceso",
      subtitle:
        "Próximamente únete a la newsletter semanal con experimentos, métricas y lecciones. Sin motivación vacía. Solo lo que funciona (y lo que no).",
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
    common: {
      nav: {
        studio: "Studio",
        works: "Works",
        design: "Vision",
        blog: "Blog",
        contact: "Contact",
      },
      footer: {
        areas: "Areas",
        legal: "Legal",
        connect: "Connect",
        support: "Support",
        privacyPolicy: "Privacy Policy",
        cookiePolicy: "Cookie Policy",
        cookieConfig: "Cookie Settings",
        github: "GitHub",
        copyright: "All rights reserved.",
      },
    },
    contact: {
      root: {
        title: "Let's talk",
        subtitle: "For anything that doesn't fit a specific area, or if you're not sure where to start, write to us.",
      },
      studio: {
        title: "Press, collaborations, or something that doesn't fit above?",
        subtitle: "Write to us, we read everything.",
      },
      works: {
        title: "Got a project in mind?",
        subtitle: "Tell us what you need. No commitment, no unnecessary jargon.",
      },
      design: {
        title: "Let's shape your brand",
        subtitle: "Tell us about your project and we'll tell you how we can help.",
      },
      areaChipGeneral: "General",
      areaChipStudio: "Studio",
      areaChipWorks: "Works",
      areaChipDesign: "Vision",
      emailPlaceholder: "you@email.com",
      messagePlaceholder: "Tell us how we can help...",
      submit: "Send message",
      submitting: "Sending...",
      successTitle: "Message sent",
      successMessage: "Thanks for writing to us. We'll get back to you as soon as possible.",
      sendAnother: "Send another message",
      errorMessage: "Something went wrong. Try again or email us at hola@kaizenith.es.",
    },
    root: {
      featured: {
        title: "What we're building",
        subtitle: "A real look at each area, not just links.",
        studio: {
          label: "Kaizenith Studio",
          title: "Ping Pong Mate",
          description: "Our first Steam launch, with a public roadmap and an open wishlist.",
          cta: "View Studio",
        },
        works: {
          label: "Kaizenith Works",
          title: "Kaizenith Workspace",
          description: "Our own productivity tool, used daily, and the rest of the SaaS catalog.",
          cta: "View Works",
        },
        design: {
          label: "Kaizenith Vision",
          title: "Real work, for real businesses",
          description: "14 brand identity and design projects delivered to real clients.",
          cta: "View Vision",
        },
      },
      hero: {
        title: "We build software, games, and brands with the same method.",
        subtitle:
          "Kaizenith is a group of independent studios. Kaizen (continuous improvement) + Zenith (the highest point): short cycles, measured decisions, and work that shows in every area.",
        areasLabel: "Our areas",
        areaStudio: {
          name: "Kaizenith Studio",
          tagline: "Games made with care and data, not smoke.",
          cta: "Explore Studio",
        },
        areaWorks: {
          name: "Kaizenith Works",
          tagline:
            "Software and SaaS for businesses and administrations that need things to work.",
          cta: "Explore Works",
        },
        areaDesign: {
          name: "Kaizenith Vision",
          tagline: "Brands, design, and visual identity with character.",
          cta: "Explore Vision",
        },
      },
      whyUs: {
        title: "Why Kaizenith",
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
      about: {
        title: "Who we are",
        description:
          "Kaizenith started as a small game studio and has grown into software and design without losing the way it works: small teams, short cycles, and products tested with real people before they're promised to anyone.",
      },
      stats: {
        title: "Happening right now",
        stat1Value: "3",
        stat1Label: "active business areas",
        stat2Value: "8+",
        stat2Label: "projects at different stages",
        stat3Value: "100%",
        stat3Label: "self-funded, no investors",
      },
      footer: {
        tagline: "Software, games, and brands, with the same method.",
      },
    },
    studio: {
      hero: {
        title: "Your waiting time, turned into arcade.",
        subtitle:
          "Ping Pong Mate sits in a corner of your screen while you do other things. Chain combos, earn points, and trade them for collectible cosmetics, without stopping what you were doing.",
        ctaPrimary: "Add to wishlist",
        ctaSecondary: "View the roadmap",
        trust: "Helps the game reach more people.",
        playVideo: "Play the trailer",
        pauseVideo: "Pause the trailer",
      },
      intro: {
        title: "Planification, creation and launch.",
        lead: "Kaizen (continuous improvement) + Zenith (the highest point): short cycles, clear hypotheses, and metrics that don't lie, instead of smoke-and-mirrors launches.",
        buildLogs: "Technical Log",
        buildLogsDesc: "What we tested, what we measured, what we learned.",
        realNumbers: "Real Metrics",
        realNumbersDesc: "Downloads, retention, conversion. No vanity metrics.",
        earlyAccess: "Early Access",
        earlyAccessDesc: "Test games and tools before anyone else.",
      },
      projects: {
        title: "Our games",
        subtitle: "Six complete prototypes, with more on the way.",
      },
      trajectory: {
        title: "From prototype to launch",
        subtitle: "How we got here.",
        milestones: {
          origin: {
            date: "The beginning",
            title: "Learning by building",
            description:
              "Kaizenith Studio started to learn game development in public, no smoke, no empty promises.",
          },
          prototypes: {
            date: "First games",
            title: "Six games published on itch.io + 2 web based prototypes",
            description:
              "Six small, complete, playable games, to learn the full cycle: build, ship, learn. Most of them made for game JAMs",
          },
          current: {
            date: "Now",
            title: "Ping Pong Mate",
            description:
              "Our first serious Steam launch, with a public roadmap and an open wishlist.",
          },
          next: {
            date: "What's next",
            title: "Whatever the community decides",
            description:
              "New games or expansions, depending on how people respond to the first one.",
          },
        },
      },
      roadmap: {
        title: "The System",
        liveLabel: "Live",
        subtitle: "Four quarters, four bets. Tap one to see the detail.",
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
      gameRoadmap: {
        title: "From development to your desktop",
        subtitle: "How close Ping Pong Mate is to Steam, and what comes next.",
        countdownLabel: "Launching in",
        countdownDays: "Days",
        countdownHours: "Hours",
        countdownMinutes: "Min",
        countdownSeconds: "Sec",
        futureNote:
          "These plans depend on how launch goes. They'll be confirmed based on community response.",
        milestones: {
          development: {
            status: "In development",
            date: "Now",
            title: "Polishing the core",
            description: "Tuning, performance, and the last pieces before opening the wishlist.",
          },
          wishlist: {
            status: "Coming soon",
            date: "September 2026",
            title: "Wishlist on Steam",
            description:
              "The Steam page will be ready for you to add Ping Pong Mate to your wishlist.",
          },
          launch: {
            status: "Provisional date",
            date: "October, 2026",
            title: "Launch",
            description: "The day Ping Pong Mate lands on your desktop.",
          },
          postLaunch: {
            status: "Ongoing",
            date: "After launch",
            title: "More content, no stopping",
            description:
              "Achievements, new cosmetics (music and trails!), more customization, and continuous tweaks.",
          },
          future: {
            status: "Future plans",
            date: "Later on",
            title: "New modes and competition",
            description:
              "Game modes (challenges, time attack), leaderboards, and themed cosmetics exclusive to special events.",
          },
        },
      },
      ctaBanner: {
        headline: "You can now wishlist Ping Pong Mate",
        subheadline:
          "Follow its development on Steam and support us. Your support makes a difference.",
        ctaPrimary: "Add to wishlist",
        ctaSecondary: "Support on Patreon",
        ctaTertiary: "Support on Ko-fi",
      },
      footer: {
        tagline: "Planification, creation and launch",
        supportTheProject: "Support the project",
        twitter: "Twitter",
      },
    },
    projects: {
      title: "Projects",
      subtitle:
        "An active studio with a varied catalog: our own tools, SaaS for businesses and public administrations, and games.",
      viewProject: "View",
      statusComplete: "Complete",
      statusAdvanced: "Very advanced",
      statusAlmostReady: "Almost ready",
      statusInDevelopment: "In development",
      categoryProductivity: "Internal productivity",
      categoryBusiness: "SaaS for businesses and administrations",
      categoryGames: "Games",
      items: {
        workspace: {
          title: "Kaizenith Workspace",
          subtitle: "Time management and productivity tool.",
          description:
            "Our own workspace, designed to optimize flow and focus. It's our productivity lab, used daily.",
        },
        zarpe: {
          title: "Zarpe",
          subtitle: "Custom websites for local businesses.",
          description: "Fast, professional online presence for businesses that don't have one yet.",
        },
        serena: {
          title: "Serena",
          subtitle: "Appointment booking for private psychology practices.",
          description:
            "Specialized scheduling built for the day-to-day of a private psychology practice.",
        },
        enlace: {
          title: "Enlace",
          subtitle: "Social services management for city councils.",
          description:
            "Centralizes cases, follow-up, and coordination of municipal social services.",
        },
        cronista: {
          title: "Cronista",
          subtitle: "IT management and ENS compliance for organizations.",
          description:
            "Asset inventory, incidents, and Spanish National Security Framework (ENS) compliance in one place.",
        },
        nexa: {
          title: "Nexa",
          subtitle: "Enrollment, students, and classes for dance schools.",
          description:
            "Manages enrollment, students, teachers, and schedules. Mature for dance; being built out for gyms and language schools.",
        },
        cashpilot: {
          title: "CashPilot",
          subtitle: "Working name.",
          description: "Personal finance management tool, in its final stretch before launch.",
        },
        petCarePocket: {
          title: "Pet Care Pocket",
          subtitle: "Health tracking for your pet.",
          description:
            "Health records, appointments, medical history, and reminders, all from your phone. Take care of their health like you take care of your own.",
        },
        urbana: {
          title: "Urbana",
          subtitle: "Urban planning license management for city councils.",
          description: "Digitizes municipal urban planning license processing. Still in an early stage.",
        },
        paranormalDetector: {
          title: "Paranormal Detector",
          subtitle: "Multiplayer minesweeper + battleship for streamers.",
          description: "A browser game with a paranormal theme, built to be fun to watch live.",
        },
        mhadle: {
          title: "MHAdle",
          subtitle: "Guess the character, Wordle-style.",
          description: "A daily challenge for My Hero Academia fans. No monetization, made for fun.",
        },
        itNeverEnds: {
          title: "It Never Ends",
          subtitle: "Casual war game with a clear message...",
          description:
            "A real-time strategy game with a strong anti-war message. Made for a game jam.",
        },
        teenRomantic: {
          title: "My teen romantic comedy won't start so no one else's will",
          subtitle: "I hate romcoms. Because I'm never the main character :(",
          description:
            "An action game about the day-to-day life of a student whose romantic comedy never starts, and therefore has to make sure no one else's does either. Made for the first GirlyJam.",
        },
        iudexInquisitor: {
          title: "Iudex Inquisitor",
          subtitle: "A decision-making game.",
          description:
            "What makes us human? Join Conrad on the night when everything is about to change. Made as part of a team for Level Up Game Jam 2023.",
        },
        fromHell: {
          title: "From Hell",
          subtitle: "Fast and precise platformer.",
          description:
            "You've ended up in hell and must find a way out as quickly as possible, with speedrun mechanics built in. Made as part of a team for SpeedJam 5.",
        },
        devoClicker: {
          title: "Devo Clicker Game",
          subtitle: "A clicker game about mining cryptocurrency.",
          description:
            "You have half an hour to mine as much cryptocurrency as possible. Watch the market fluctuate! Created entirely with HTML, CSS, and JavaScript.",
        },
        maldicionAprendiz: {
          title: "The Apprentice's Curse",
          subtitle: "Action game with roguelike mechanics.",
          description:
            "A terrible curse has fallen upon you, and you must find a way to break it.",
        },
        charmMiner: {
          title: "Charm Miners SL",
          subtitle: "A clicker game about creating and selling pendants made from a precious gem.",
          description:
            "Make as much money as possible, as quickly as possible. Getting close to that precious gem and using it to create and sell pendants may not be entirely legal. Made for Winter Melon Jam 2024.",
        },
        voidSurvivor: {
          title: "Void Survivor",
          subtitle: "Fast-paced action game. Survive!",
          description:
            "You're floating in the middle of an asteroid belt and must survive as long as possible before the void swallows you. Winner of second place in the fun category at IGDB Beginner's Jam, September 2023.",
        },
      },
      ctaCard: {
        title: "Want yours here too?",
        description:
          "We build custom apps and SaaS. If you have an idea or need a tool for your business, let's talk.",
        button: "Tell us about your project",
      },
    },
    works: {
      hero: {
        title: "Software that works, not just looks good.",
        subtitle:
          "We're a software development agency. We build custom software for businesses and public administrations — and we openly document the SaaS products we've built along the way, as proof of what we can do.",
        ctaPrimary: "Let's talk about your project",
        ctaSecondary: "View projects",
      },
      stack: {
        title: "What we build with",
        items: ["Next.js", "Supabase", "Stripe", "Vercel", "PostgreSQL", "TypeScript"],
      },
      services: {
        title: "What we do",
        subtitle: "Custom development, backed by real projects we've already built.",
        saas: {
          title: "Our own projects, documented in the open",
          description:
            "Vertical tools we build and maintain ourselves — proof that we know how to build real software, not just promise it.",
        },
        custom: {
          title: "Custom development",
          description:
            "Custom websites and applications for businesses that need something of their own, not a template. Like we did with Zarpe.",
        },
        detailedTitle: "In more detail",
        detailed: [
          {
            title: "Landing pages and corporate websites",
            description: "Fast, professional online presence, ready to convert.",
          },
          {
            title: "Custom web applications",
            description: "SaaS and internal tools built for your process, not the other way around.",
          },
          {
            title: "Integrations",
            description: "Payments, AI, external APIs — we connect your business to the tools it needs.",
          },
          {
            title: "Migration and modernization",
            description: "We update existing systems without stopping the operation.",
          },
          {
            title: "Maintenance and support",
            description: "We stay around after launch: updates, security, performance.",
          },
          {
            title: "Starting from a proven base",
            description:
              "If your problem looks like Workspace's, Enlace's, or Cronista's, we don't start from zero: we adapt that base to your case.",
          },
        ],
      },
      process: {
        title: "How we work",
        subtitle: "Four steps, no surprises.",
        step1: {
          title: "Discovery",
          description: "We understand the real problem before writing a line of code.",
        },
        step2: {
          title: "Design",
          description: "We prototype the solution and validate it with you before building.",
        },
        step3: {
          title: "Development",
          description: "Short cycles, visible progress, no months-long black boxes.",
        },
        step4: {
          title: "Launch and support",
          description: "We ship, measure, and stay around after launch.",
        },
      },
      trust: {
        stat1Value: "7+",
        stat1Label: "SaaS products at different stages",
        stat2Value: "100%",
        stat2Label: "modern, maintained stack",
        stat3Value: "1",
        stat3Label: "point of contact: the person who builds your software",
      },
      catalog: {
        intro:
          "This isn't a SaaS storefront: these are projects we've built and maintain, documented openly. If you want something like this for your business, let's talk.",
        productsTitle: "Our own projects",
        servicesTitle: "Custom development",
      },
      footer: {
        tagline: "Software that works, not just looks good.",
      },
    },
    design: {
      hero: {
        title: "Brands with character, no noise.",
        subtitle:
          "Brand design, visual identity, and marketing for projects that want to stand out for what they are, not for shouting louder.",
        ctaPrimary: "Start a project",
        ctaSecondary: "View work",
      },
      trust: {
        stat1Value: "20+",
        stat1Label: "years of experience",
        stat2Value: "100%",
        stat2Label: "client satisfaction",
        stat3Value: "14",
        stat3Label: "documented projects",
        stat4Value: "100%",
        stat4Label: "real work, no filler",
      },
      services: {
        title: "What we do",
        logo: { title: "Logo design", description: "A recognizable mark, built to last." },
        branding: { title: "Branding", description: "Full visual identity: color, type, tone, system." },
        web: { title: "Web design", description: "Websites that look as good as they work." },
        marketing: {
          title: "Marketing & social",
          description: "Content and creative built for your real audience.",
        },
      },
      whyUs: {
        title: "Why choose us",
        item1: {
          title: "Experience",
          description: "Over 20 years designing brands, print, and websites for real businesses.",
        },
        item2: {
          title: "Personalized approach",
          description: "Every project adapts to your business, not the other way around. No generic templates.",
        },
        item3: {
          title: "Attention to detail",
          description: "We care about every file, every typeface, every millimeter. Nothing is left to chance.",
        },
        item4: {
          title: "Ongoing support",
          description: "We don't disappear once the logo is delivered. We're here for whatever comes next.",
        },
      },
      portfolio: {
        title: "Real work, for real businesses",
        subtitle: "These aren't mockups: they're brands already up and running.",
        items: {
          seisSentidos: {
            client: "Seis Sentidos",
            category: "Gourmet food",
            description: "Brand identity for a gourmet food workshop.",
          },
          moratalaz: {
            client: "Distrito de Moratalaz",
            category: "Institutional posters",
            description: "Posters and roll-up for the district's holiday season campaign.",
          },
          teresaDeLaRosa: {
            client: "Teresa de la Rosa",
            category: "Brand identity",
            description: "Visual identity and stationery for an accessories brand.",
          },
          aeda: {
            client: "AEDA",
            category: "Dance students association",
            description: "Visual identity for a dance students association.",
          },
          marDePosibilidades: {
            client: "Mar de Posibilidades",
            category: "Seafood distribution",
            description: "Brand identity for a seafood distributor.",
          },
          babiloniaWorld: {
            client: "Babilonia World",
            category: "Cat breeder",
            description: "Brand identity for a cat breeder.",
          },
          maymol: {
            client: "Maymol",
            category: "Industrial components",
            description: "Visual identity for an industrial components manufacturer.",
          },
          graficasIllescas: {
            client: "Gráficas Illescas",
            category: "Print services",
            description: "Identity and corporate stationery for a print shop.",
          },
          zenkyu: {
            client: "Zenkyu",
            category: "Seafood products",
            description: "Brand identity for a seafood products company.",
          },
          carlosSotomayor: {
            client: "Estudio Carlos Sotomayor",
            category: "Architecture & engineering",
            description: "Website design for an architecture and engineering studio.",
          },
          aytoGrinon: {
            client: "Ayuntamiento de Griñón",
            category: "Institutional identity",
            description: "Design of the city council's institutional coat of arms.",
          },
          anthique: {
            client: "Anthique",
            category: "Tableware",
            description: "Brand identity for a tableware and homeware brand.",
          },
          reikiMilleGrazie: {
            client: "Reiki Mille Grazie",
            category: "Identity & website",
            description: "Visual identity and website design for a therapy center.",
          },
          danzante: {
            client: "Danzante",
            category: "Dance school",
            description: "Visual identity for a dance school.",
          },
        },
        ctaCard: {
          title: "Want your brand here?",
          description: "Let's talk about your project and how we can help.",
          button: "Start a project",
        },
        detail: {
          back: "Back to projects",
          moreProjects: "More projects",
          ctaTitle: "Want something like this for your brand?",
          ctaDescription: "Let's talk about your project and how we can help.",
          ctaButton: "Start a project",
        },
      },
      clients: {
        label: "Clients we've worked with",
        names: [
          "Seis Sentidos",
          "AEDA",
          "Mar de Posibilidades",
          "Babilonia World",
          "Zenkyu",
          "Gráficas Illescas",
          "Maymol",
          "Danzante",
          "Anthique",
          "Distrito de Moratalaz",
          "Ayuntamiento de Griñón",
          "Reiki Mille Grazie",
          "Estudio Carlos Sotomayor",
          "Teresa de la Rosa",
        ],
      },
      objection: {
        eyebrow: "Already have a logo?",
        title:
          "If a friend, an online template, or you made it yourself, it's probably costing you customers without you knowing.",
        body: "A homemade logo isn't just an aesthetic issue: it's the first signal of trust someone sees before deciding whether to call you or the business next door. You don't need to scrap it and start over — we can evolve your current logo while keeping what your customers already recognize, or build a new one if you'd rather. You decide.",
      },
      rates: {
        title: "Rates",
        subtitle: "Every project is different — these are the starting lines.",
        recommendedLabel: "Recommended",
        tier1: {
          name: "Essential Identity",
          price: "€390",
          description: "For a business that needs to stop having an improvised image.",
          features: [
            "Custom logo (2 proposals, 1 round of revisions)",
            "Primary, horizontal, and monochrome versions",
            "Color palette and typefaces",
            "Icon/favicon where applicable",
            "PNG, JPG, PDF, and SVG files + mini usage guide",
          ],
        },
        tier2: {
          name: "Brand Identity",
          price: "€790",
          description: "The recommended product: a full visual system, not just a pricier logo.",
          features: [
            "Everything in Essential Identity, with 3 proposals and 2 rounds of revisions",
            "Full visual system, correct and incorrect uses",
            "Brand identity manual (15-25 pages)",
            "Business card and email signature",
            "Avatar + cover for one social network",
            "3 identity application mockups",
          ],
        },
        tier3: {
          name: "Complete Identity",
          price: "€1,490",
          description: "For businesses that want to fully professionalize their image.",
          features: [
            "Everything in Brand Identity, with 4 proposals and 2 rounds of revisions",
            "Extended identity manual and graphic system",
            "Basic iconography and document templates",
            "Stationery: business card, letterhead, email signature",
            "Social media and flyer/poster",
            "5-6 brand applications, professional mockups",
          ],
        },
        alaCarteTitle: "Need something one-off?",
        alaCarteToggle: "View the graphic design catalog",
        alaCarteNote:
          "All designs include one round of revisions. Additional changes or substantial modifications are quoted separately.",
        alaCarteItems: [
          { name: "Business card", price: "€75" },
          { name: "Poster", price: "€75" },
          { name: "Email signature", price: "€60" },
          { name: "Flyer", price: "€120" },
          { name: "Ad creative", price: "€150" },
          { name: "3-creative pack", price: "€290" },
          { name: "Bi-fold brochure", price: "€175" },
          { name: "Tri-fold brochure", price: "€225" },
          { name: "Front + back cover", price: "€225" },
          { name: "Vinyl design", price: "from €180" },
          { name: "Adaptation of existing design", price: "from €50" },
          { name: "Vectorization", price: "from €50/hour" },
          { name: "Editorial layout", price: "from €45/page" },
          { name: "50-page catalog", price: "from €1,950" },
          { name: "Magazine / publication", price: "custom quote" },
        ],
      },
      process: {
        title: "How we work",
        step1: { title: "Brief", description: "We understand your project, audience, and references." },
        step2: { title: "Strategy", description: "We define the direction before designing anything." },
        step3: { title: "Creation", description: "We design, iterate, and refine with you." },
        step4: { title: "Delivery", description: "Files, brand guide, and everything ready to use." },
      },
      footer: {
        tagline: "Brands with character, no noise.",
      },
    },
    blog: {
      title: "Blog",
      subtitle: "How we think, how we work, and how the projects in the portfolio actually get made.",
      footerTagline: "How we think and how we work.",
      readMore: "Read post",
      back: "Back to blog",
      categoryLabels: {
        general: "General",
        design: "Design",
        development: "Development",
      },
    },
    supportContact: {
      title: "Support",
      subtitle: "Something not working as it should?",
      description:
        "General technical support for all Kaizenith games and tools. Write to us and we'll get back to you as soon as possible.",
      emailCta: "Email support",
      note: "You can also copy the email directly: soporte@kaizenith.es",
    },
    ctasLeadMagnet: {
      title: "50 Specific CTAs for Video Games and Indie Studios",
      subtitle: "Calls to action designed for video game content creators and indie studios who want to grow their audience, generate traffic, get testers, or sell.",
      introTitle: "Why this list exists",
      intro1: "Generic CTAs ('hit like', 'follow me') don't work the same in the gaming niche. Indie developers and game content creators need CTAs that connect with specific goals: getting wishlists, capturing testers, driving traffic to Steam, or building community before launch.",
      intro2: "CTAs change depending on the funnel stage. An early devlog needs follow CTAs. A demo announcement needs immediate action CTAs. A week before launch needs urgency. This list covers the full spectrum.",
      intro3: "Use it as a quick reference. Copy, adapt, and test. Each CTA is designed for a specific context and goal, but all can be personalized to your tone and project.",
      intro4: "Don't use all of them. Choose the ones that fit your current stage and style. The best CTA is the one that sounds natural coming from you.",
      ctasTitle: "50 CTAs by Objective",
      category1Title: "Gain followers",
      category1Desc: "For when you need to grow your base audience and have people follow your process.",
      category2Title: "Increase traffic to other networks",
      category2Desc: "Redirect audience to where you have deeper content or important launches.",
      category3Title: "Get users for demos/playtests",
      category3Desc: "Capture people willing to try your game and give you real feedback.",
      category4Title: "Get sales or wishlists",
      category4Desc: "Convert interest into commercial action: purchases, pre-orders, or Steam wishlists.",
      strategyTitle: "Strategy Guide",
      contentTypeTitle: "What CTA to use based on your content type",
      contentTypeDesc: "Context matters. A technical devlog allows more informal follow CTAs. A launch announcement requires direct CTAs. Use this guide to choose wisely.",
      audienceTitle: "Adapt the CTA to your audience",
      audienceDesc: "Not all your followers are the same. Indie devs respond to transparency and process. Casual gamers respond to fun and novelty. Early adopters respond to exclusivity. Adjust the message.",
      rulesTitle: "Practical rules",
      rule1: "1 main CTA per piece of content. Don't mix objectives.",
      rule2: "Don't mix 'follow me' with 'buy' in the same post. Choose one.",
      rule3: "Adapt based on funnel phase: awareness → interest → consideration → action.",
      rule4: "Repeat strategic CTAs in content series to reinforce.",
      rule5: "Test variations. What works for one dev doesn't work the same for another.",
      copyBtnLabel: "Copy",
      copiedLabel: "Copied",
      signupTitle: "Unlock the full list",
      signupSubtitle: "Access all CTAs and the complete strategy guide.",
      signupButton: "Unlock now",
      signupDisclaimer: "Free · no spam · immediate access",
    },
    affiliate: {
      hero: {
        headline: "Support the Project\nAt No Extra Cost",
        subheadline:
        "Comming soon...",
          // "A transparent way to support development through affiliate partnerships.",
        intro:
          "Some links on this page are affiliate links. If you purchase through them, a small commission may be earned to support ongoing project development without increasing the price for you.",
        ctaPrimary: "Browse Recommended Tools",
        ctaSecondary: "Learn how it works",
      },

      why: {
        title: "Why Affiliate Links?",
        p1: "This project is independently developed. To ensure long-term sustainability, revenue sources are intentionally diversified.",
        p2: "Affiliate links are completely optional. They allow people who were already planning to purchase these products or services to support the project without making direct donations.",
        p3: "In most cases, there is no impact on your cost. The commission is paid by the provider, not by you.",
      },

      how: {
        title: "How Affiliate Partnerships Work",
        step1Title: "1. You click a link",
        step1Desc:
          "When you click a recommended link, an affiliate tracking mechanism may be activated.",
        step2Title: "2. You purchase normally",
        step2Desc:
          "You complete your purchase directly on the provider's platform, just as you normally would.",
        step3Title: "3. A small commission may be paid",
        step3Desc:
          "If the purchase qualifies, a small commission is paid by the provider to support development. Your price does not increase.",
        note: "Only tools and resources that align with the project's philosophy are recommended.",
      },

      what: {
        title: "What You'll Find Here",
        intro:
          "This is not random product promotion. It is a curated selection aligned with focused work and intentional systems:",
        item1: "Curated tools",
        item2: "Productivity resources",
        item3: "Hardware / setup tools",
        item4: "Books",
        item5: "Software and digital services",
        footer:
          "Every recommendation is selected with intention and long-term value in mind.",
      },

      transparency: {
        title: "Transparency First",
        disclosure:
          "Affiliate disclosure: Some links on this page are affiliate links and may generate a commission.",
        noPaidReviews: "No paid reviews. Recommendations are independent.",
        noSponsored: "No sponsored placements unless explicitly stated.",
        linksMarked: "Affiliate links are clearly marked whenever possible.",
        editorial: "Full editorial independence is maintained.",
        faqTitle: "Frequently Asked Questions",

        faq1Q: "Do I pay more if I use these links?",
        faq1A:
          "In most cases, no. The price remains the same. The commission is paid by the provider, not by you.",

        faq2Q: "Are all recommendations affiliate links?",
        faq2A:
          "Not necessarily. Some links may be standard references. Affiliate relationships are disclosed when applicable.",

        faq3Q: "Can I support in other ways?",
        faq3A:
          "Yes. You can use the products we build, share the project, join the newsletter, or provide feedback.",
      },

      alternatives: {
        title: "Other Ways to Support",
        intro: "Affiliate links are just one option. You can also support by:",
        use: "Using the products we build",
        share: "Sharing the project with others",
        newsletter: "Joining the newsletter",
        feedback: "Providing feedback and suggestions",
      },
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
      flowFocusCtaBtn: "Try FlowFocus for 7 days free",
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
