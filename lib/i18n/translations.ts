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
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string;
    cosmeticsLabel: string;
  };
  // Intro/About
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
  // CTA Banner
  ctaBanner: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaTertiary: string;
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
  // Ping Pong Mate roadmap (featured game roadmap section)
  gameRoadmap: {
    badge: string;
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
  // Projects
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    statusComplete: string;
    statusAdvanced: string;
    statusAlmostReady: string;
    categoryProductivity: string;
    categoryBusiness: string;
    categoryGames: string;
    items: {
      workspace: { title: string; subtitle: string; description: string };
      zarpe: { title: string; subtitle: string; description: string };
      serena: { title: string; subtitle: string; description: string };
      enlace: { title: string; subtitle: string; description: string };
      nexa: { title: string; subtitle: string; description: string };
      cashpilot: { title: string; subtitle: string; description: string };
      paranormalDetector: { title: string; subtitle: string; description: string };
      mhadle: { title: string; subtitle: string; description: string };
    };
    ctaCard: {
      title: string;
      description: string;
      button: string;
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
    support: string;
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
      badge: "Ping Pong Mate · En desarrollo",
      title: "Tu espera, convertida en arcade.",
      subtitle:
        "Ping Pong Mate se queda en una esquina de tu pantalla mientras haces otras cosas. Encadena combos, gana puntos y canjéalos por cosméticos coleccionables, sin dejar lo que estabas haciendo.",
      ctaPrimary: "Añadir a la lista de deseos",
      ctaSecondary: "Ver la hoja de ruta",
      trust: "Ayuda a que el juego llegue a más gente.",
      cosmeticsLabel: "Cosméticos: 3/12 desbloqueados",
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
    ctaBanner: {
      headline: "Ping Pong Mate ya se puede añadir a tu wishlist",
      subheadline:
        "Sigue su desarrollo en Steam y apóyanos. Tu apoyo hace la diferencia.",
      ctaPrimary: "Añadir a la wishlist",
      ctaSecondary: "Apoyar en Patreon",
      ctaTertiary: "Apoyar en Ko-fi",
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
      badge: "Ping Pong Mate · Hoja de ruta",
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
          date: "Agosto 2026",
          title: "Wishlist en Steam",
          description:
            "La página de Steam estará lista para añadir Ping Pong Mate a tu lista de deseos.",
        },
        launch: {
          status: "Fecha provisional",
          date: "29 de septiembre 2026",
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
          status: "Si el proyecto despega",
          date: "Más adelante",
          title: "Nuevos modos y competición",
          description:
            "Modos de juego (retos, contrarreloj), leaderboards, y cosméticos temáticos exclusivos por eventos especiales.",
        },
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
      },
      ctaCard: {
        title: "¿Quieres que el tuyo también esté aquí?",
        description:
          "Desarrollamos apps y SaaS a medida. Si tienes una idea o necesitas una herramienta para tu negocio, hablemos.",
        button: "Cuéntanos tu proyecto",
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
    footer: {
      tagline: "Planificación, creación y lanzamiento.",
      roadmap: "Hoja de Ruta",
      about: "Nosotros",
      projects: "Proyectos",
      support: "Soporte",
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
      badge: "Ping Pong Mate · In development",
      title: "Your waiting time, turned into arcade.",
      subtitle:
        "Ping Pong Mate sits in a corner of your screen while you do other things. Chain combos, earn points, and trade them for collectible cosmetics, without stopping what you were doing.",
      ctaPrimary: "Add to wishlist",
      ctaSecondary: "View the roadmap",
      trust: "Helps the game reach more people.",
      cosmeticsLabel: "Cosmetics: 3/12 unlocked",
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
    ctaBanner: {
      headline: "You can now wishlist Ping Pong Mate",
      subheadline:
        "Follow its development on Steam and support us. Your support makes a difference.",
      ctaPrimary: "Add to wishlist",
      ctaSecondary: "Support on Patreon",
      ctaTertiary: "Support on Ko-fi",
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
      badge: "Ping Pong Mate · Roadmap",
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
          date: "August 2026",
          title: "Wishlist on Steam",
          description:
            "The Steam page will be ready for you to add Ping Pong Mate to your wishlist.",
        },
        launch: {
          status: "Provisional date",
          date: "September 29, 2026",
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
          status: "If the project takes off",
          date: "Later on",
          title: "New modes and competition",
          description:
            "Game modes (challenges, time attack), leaderboards, and themed cosmetics exclusive to special events.",
        },
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
      },
      ctaCard: {
        title: "Want yours here too?",
        description:
          "We build custom apps and SaaS. If you have an idea or need a tool for your business, let's talk.",
        button: "Tell us about your project",
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
      support: "Support",
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
