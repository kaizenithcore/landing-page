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
    ctaTertiary: string;
    kickstarterNote: string;
    ctaSupport: string;
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
  // Projects
  projects: {
    title: string;
    subtitle: string;
    comingSoon: string;
    viewProject: string;
    statusActive: string;
    statusInPreparation: string;
    statusOnHold: string;
    project0: {
      title: string;
      subtitle: string;
      description: string;
      status: string;
      cta: string;
    };
    project1: {
      title: string;
      subtitle: string;
      description: string;
      status: string;
      cta: string;
    };
    project2: {
      title: string;
      subtitle: string;
      description: string;
      status: string;
      cta: string;
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
      ctaPrimary: "Accede al proceso: Newsletter semanal",
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
        "Síguelo en Steam y apóyanos. Tu support hace la diferencia.",
      ctaPrimary: "Seguir en Steam",
      ctaSecondary: "Apoyar en Patreon",
      kickstarterNote:
        "Kickstarter planeado para más adelante en el desarrollo",
      ctaSupport: "Otras formas de apoyar",
      ctaTertiary: "Apoyar en Ko-fi",
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
      statusActive: "Activo",
      statusInPreparation: "En preparación",
      statusOnHold: "En reposo",
      project0: {
        title: "Kaizenith Workspace",
        subtitle: "Herramienta de gestión de tiempo y productividad.",
        description:
          "Nuestro espacio de trabajo, diseñado para optimizar el flujo y la concentración. No es un producto genérico, es nuestro laboratorio de productividad.",
        status: "active",
        cta: "Ver workspace",
      },
      project1: {
        title: "AutoForge",
        subtitle: "Juego en desarrollo: automatización, pixel art cozy y espadas.",
        description:
          "Déjate llevar en este juego de automatización y pixel art cozy. Crea tu propia forja y automatízala!. No es un juego de nicho, es nuestro proyecto principal para aprender y compartir cada paso del proceso de desarrollo.",
        status: "preparation",
        cta: "Ver en Steam",
      },
      project2: {
        title: "Newsletter Kaizenith",
        subtitle: "Actualización semanal de estados de los proyectos.",
        description:
          "La transparencia genera confianza. Números reales, lecciones reales. Semanal, sin filtros ni spam. Comenzaremos con lo básico: qué estamos haciendo, qué estamos aprendiendo, y cómo lo estamos haciendo",
        status: "preparation",
        cta: "Suscribirse",
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
      ctaPrimary: "Access the process: Weekly newsletter",
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
      ctaPrimary: "Follow on Steam",
      ctaSecondary: "Support on Patreon",
      kickstarterNote: "Kickstarter planned for later in development",
      ctaSupport: "Other ways to support",
      ctaTertiary: "Support on Ko-fi",
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
      statusActive: "Active",
      statusInPreparation: "In preparation",
      statusOnHold: "On hold",
      project0: {
        title: "Kaizenith Workspace",
        subtitle: "Time management and productivity tool.",
        description:
          "Our workspace, designed to optimize flow and concentration. Not a generic product, it's our productivity lab.",
        status: "active",
        cta: "View workspace",
      },
      project1: {
        title: "AutoForge",
        subtitle: "Game in development: automation, cozy pixel art and swords.",
        description:
          "Get carried away in this automation and cozy pixel art game. Create your own forge and automate it! Not a niche game, it's our main project to learn and share every step of the development process.",
        status: "preparation",
        cta: "View on Steam",
      },
      project2: {
        title: "Kaizenith Newsletter",
        subtitle: "Weekly project status update.",
        description:
          "Transparency builds trust. Real numbers, real lessons. Weekly, unfiltered and spam-free. We'll start with the basics: what we're doing, what we're learning, and how we're doing it.",
        status: "preparation",
        cta: "Subscribe",
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
