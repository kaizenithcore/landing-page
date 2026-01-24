"use client";

import React from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ChevronDown,
  ChevronLeft,
  Download,
  Check,
  ExternalLink,
  Menu,
  X,
  Clock,
  Target,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useLocale } from "@/lib/i18n/locale-context";
import { SettingsToggles } from "@/components/kaizenith/settings-toggle";
import { DEV_AUTH_TOOLS } from "@/lib/dev";
import { DevAuth } from "@/lib/dev-auth";
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
// CONTENT DATA - BILINGUAL
// =============================================================================
// Content style: "practical" for direct approach, "narrative" for story-based
// Maps to URL params for backwards compatibility: A=practical, B=narrative
type ContentStyle = "practical" | "narrative";
type Lang = "es" | "en";

// Bilingual content interface
interface BilingualErrorNode {
  id: string;
  title: { es: string; en: string };
  symptom: { es: string; en: string };
  explanation: {
    practical: { es: string; en: string };
    narrative: { es: string; en: string };
  };
  example: {
    practical: { es: string; en: string };
    narrative: { es: string; en: string };
  };
  solution: {
    practical: { es: string[]; en: string[] };
    narrative: { es: string[]; en: string[] };
  };
  tools: { es: string[]; en: string[] };
  kpi: { es: string; en: string };
  doThisNow: { es: string; en: string };
}

interface BilingualChecklistItem {
  id: string;
  error: number;
  text: { es: string; en: string };
}

interface BilingualCaseStudy {
  title: { es: string; en: string };
  description: { es: string; en: string };
  metric: string;
  source: string;
}

const errorNodesData: BilingualErrorNode[] = [
  {
    id: "copywriting",
    title: {
      es: "1. Copywriting confuso: vendes features, no beneficios",
      en: "1. Confusing copywriting: selling features, not benefits",
    },
    symptom: {
      es: "Tu Steam page tiene muchas palabras pero pocas conversiones.",
      en: "Your Steam page has lots of words but few conversions.",
    },
    explanation: {
      practical: {
        es: "El error: listar mecánicas sin explicar por qué importan. Los jugadores no compran 'sistema de crafteo procedural', compran 'crear armas únicas que nadie más tendrá'. Cada feature debe traducirse a un beneficio emocional o funcional claro.",
        en: "The mistake: listing mechanics without explaining why they matter. Players don't buy 'procedural crafting system', they buy 'create unique weapons no one else will have'. Every feature must translate to a clear emotional or functional benefit.",
      },
      narrative: {
        es: "Recuerdo cuando lancé mi primer trailer. Estaba orgulloso de las 47 mecánicas que habíamos implementado. Lo pusimos todo en la descripción. Resultado: 12 wishlists en una semana. El problema no era el juego, era que hablábamos de lo que habíamos construido, no de lo que el jugador iba a sentir.",
        en: "I remember when I launched my first trailer. I was proud of the 47 mechanics we had implemented. We put everything in the description. Result: 12 wishlists in a week. The problem wasn't the game, it was that we talked about what we had built, not what the player would feel.",
      },
    },
    example: {
      practical: {
        es: "Before: 'Sistema de combate con 50+ habilidades y árbol de talentos dinámico.' After: 'Construye el guerrero que siempre quisiste ser. Sin builds predefinidas, sin límites.' Resultado: CTR +47% en la misma página.",
        en: "Before: 'Combat system with 50+ abilities and dynamic talent tree.' After: 'Build the warrior you always wanted to be. No predefined builds, no limits.' Result: CTR +47% on the same page.",
      },
      narrative: {
        es: "Un dev en el Discord de indie games compartió su experimento: cambió 'Roguelike con generación procedural' por 'Cada muerte te enseña algo nuevo. Cada run es diferente.' Sus wishlists pasaron de 200 a 890 en 3 semanas.",
        en: "A dev in the indie games Discord shared his experiment: he changed 'Roguelike with procedural generation' to 'Every death teaches you something new. Every run is different.' His wishlists went from 200 to 890 in 3 weeks.",
      },
    },
    solution: {
      practical: {
        es: [
          "Lista tus 5 features principales",
          "Para cada una, escribe: '...para que el jugador pueda [beneficio]'",
          "Reescribe tu descripción usando solo los beneficios",
        ],
        en: [
          "List your 5 main features",
          "For each one, write: '...so the player can [benefit]'",
          "Rewrite your description using only the benefits",
        ],
      },
      narrative: {
        es: [
          "Lee tu página como si fueras un jugador que nunca oyó de tu juego",
          "Pregúntate: '¿Qué voy a SENTIR jugando esto?'",
          "Reescribe cada párrafo respondiendo esa pregunta",
        ],
        en: [
          "Read your page as if you were a player who never heard of your game",
          "Ask yourself: 'What will I FEEL playing this?'",
          "Rewrite each paragraph answering that question",
        ],
      },
    },
    tools: {
      es: [
        "Hemingway Editor para simplificar",
        "ChatGPT para generar variantes A/B",
      ],
      en: ["Hemingway Editor to simplify", "ChatGPT to generate A/B variants"],
    },
    kpi: {
      es: "CTR de Steam page → wishlist (objetivo: >10%)",
      en: "Steam page CTR → wishlist (goal: >10%)",
    },
    doThisNow: {
      es: "Abre tu Steam page. Encuentra una frase con jerga técnica. Reescríbela en 10 palabras que tu madre entendería.",
      en: "Open your Steam page. Find a sentence with technical jargon. Rewrite it in 10 words your mother would understand.",
    },
  },
  {
    id: "no-hypothesis",
    title: {
      es: "2. Publicar sin hipótesis ni objetivos",
      en: "2. Publishing without hypotheses or goals",
    },
    symptom: {
      es: "Publicas contenido pero no sabes si 'funcionó' o no.",
      en: "You publish content but don't know if it 'worked' or not.",
    },
    explanation: {
      practical: {
        es: "Sin hipótesis, cada publicación es un disparo al aire. Una hipótesis es: 'Si publico X, espero Y porque Z.' Sin esto, no hay forma de aprender ni iterar. El contenido sin objetivo es contenido perdido.",
        en: "Without a hypothesis, every post is a shot in the dark. A hypothesis is: 'If I post X, I expect Y because Z.' Without this, there's no way to learn or iterate. Content without a goal is lost content.",
      },
      narrative: {
        es: "Durante meses publiqué devlogs 'porque hay que publicar'. Un día me senté a revisar los números: 50 posts, engagement errático, cero correlación con wishlists. No había aprendido nada porque nunca definí qué quería aprender.",
        en: "For months I posted devlogs 'because you have to post'. One day I sat down to review the numbers: 50 posts, erratic engagement, zero correlation with wishlists. I hadn't learned anything because I never defined what I wanted to learn.",
      },
    },
    example: {
      practical: {
        es: "Hipótesis: 'Si publico GIFs de gameplay el martes a las 6pm, obtendré +30% engagement vs. screenshots.' Después de 4 semanas: confirmado para GIFs de combate, refutado para GIFs de menús.",
        en: "Hypothesis: 'If I post gameplay GIFs on Tuesday at 6pm, I'll get +30% engagement vs. screenshots.' After 4 weeks: confirmed for combat GIFs, refuted for menu GIFs.",
      },
      narrative: {
        es: "Un dev que conozco empezó a tratar cada post como un experimento. Su hipótesis simple: 'Los posts que muestran el proceso creativo generan más comentarios que los que muestran el producto final.' 12 semanas después, había triplicado su comunidad.",
        en: "A dev I know started treating every post as an experiment. His simple hypothesis: 'Posts showing the creative process generate more comments than those showing the final product.' 12 weeks later, he had tripled his community.",
      },
    },
    solution: {
      practical: {
        es: [
          "Antes de publicar, escribe: Hipótesis → Métrica → Umbral de éxito",
          "Publica y espera 48-72h antes de evaluar",
          "Documenta resultado en una hoja de cálculo simple",
        ],
        en: [
          "Before posting, write: Hypothesis → Metric → Success threshold",
          "Post and wait 48-72h before evaluating",
          "Document results in a simple spreadsheet",
        ],
      },
      narrative: {
        es: [
          "Pregúntate: '¿Qué quiero descubrir con este post?'",
          "Define cómo sabrás si lo lograste",
          "Después de cada post, escribe una oración: 'Aprendí que...'",
        ],
        en: [
          "Ask yourself: 'What do I want to discover with this post?'",
          "Define how you'll know if you succeeded",
          "After each post, write one sentence: 'I learned that...'",
        ],
      },
    },
    tools: {
      es: [
        "Notion/spreadsheet para tracking",
        "FlowFocus para trackear tiempo",
      ],
      en: ["Notion/spreadsheet for tracking", "FlowFocus to track time"],
    },
    kpi: {
      es: "Tasa de experimentos con aprendizaje documentado (objetivo: 100%)",
      en: "Rate of experiments with documented learning (goal: 100%)",
    },
    doThisNow: {
      es: "Tu próximo post: escribe la hipótesis antes de crear el contenido. Solo toma 30 segundos.",
      en: "Your next post: write the hypothesis before creating the content. It only takes 30 seconds.",
    },
  },
  {
    id: "vanity-metrics",
    title: {
      es: "3. Obsesionarte con métricas de vanidad",
      en: "3. Obsessing over vanity metrics",
    },
    symptom: {
      es: "Tienes 10k followers pero 50 wishlists.",
      en: "You have 10k followers but 50 wishlists.",
    },
    explanation: {
      practical: {
        es: "Likes y followers son métricas de vanidad: se sienten bien pero no predicen ventas. Las métricas que importan son señales de intención: clics a Steam, wishlists, signups, tiempo en página. Optimiza para conversión, no para ego.",
        en: "Likes and followers are vanity metrics: they feel good but don't predict sales. The metrics that matter are signals of intent: clicks to Steam, wishlists, signups, time on page. Optimize for conversion, not ego.",
      },
      narrative: {
        es: "Me pasó: un tweet se hizo viral. 5,000 likes. Me sentí invencible. Revisé mis wishlists al día siguiente: +7. Siete. Ahí entendí que el algoritmo y el mercado son cosas diferentes.",
        en: "It happened to me: a tweet went viral. 5,000 likes. I felt invincible. I checked my wishlists the next day: +7. Seven. That's when I understood that the algorithm and the market are different things.",
      },
    },
    example: {
      practical: {
        es: "Comparativa real: Post A con 2,000 likes → 12 wishlists (0.6%). Post B con 200 likes → 45 wishlists (22.5%). Post B incluía CTA claro y link directo a Steam.",
        en: "Real comparison: Post A with 2,000 likes → 12 wishlists (0.6%). Post B with 200 likes → 45 wishlists (22.5%). Post B included a clear CTA and direct link to Steam.",
      },
      narrative: {
        es: "Un estudio de Gamalytic mostró que la correlación entre Twitter followers y ventas de juegos indie es casi nula (r=0.12). Lo que sí correlaciona: engagement en comunidades específicas de tu género.",
        en: "A Gamalytic study showed that the correlation between Twitter followers and indie game sales is almost zero (r=0.12). What does correlate: engagement in genre-specific communities.",
      },
    },
    solution: {
      practical: {
        es: [
          "Define 3 métricas de intención para tu juego (ej: clics a Steam, signups beta, replies preguntando fecha)",
          "Ignora likes/follows en tu análisis semanal",
          "Crea un dashboard simple con solo las métricas que importan",
        ],
        en: [
          "Define 3 intent metrics for your game (e.g., clicks to Steam, beta signups, replies asking for date)",
          "Ignore likes/follows in your weekly analysis",
          "Create a simple dashboard with only the metrics that matter",
        ],
      },
      narrative: {
        es: [
          "Cada semana, pregúntate: '¿Cuántas personas tomaron una acción hacia comprar?'",
          "Separa 'alcance' de 'interés real'",
          "Celebra las conversiones, no los números bonitos",
        ],
        en: [
          "Every week, ask yourself: 'How many people took an action toward buying?'",
          "Separate 'reach' from 'real interest'",
          "Celebrate conversions, not pretty numbers",
        ],
      },
    },
    tools: {
      es: ["Steam Analytics", "UTM tracking con Bitly o similar"],
      en: ["Steam Analytics", "UTM tracking with Bitly or similar"],
    },
    kpi: {
      es: "Ratio engagement → wishlist (objetivo: >5% de interacciones llevan a acción)",
      en: "Engagement → wishlist ratio (goal: >5% of interactions lead to action)",
    },
    doThisNow: {
      es: "Revisa tu último post exitoso. ¿Cuántos de esos likes se convirtieron en algo medible?",
      en: "Review your last successful post. How many of those likes converted to something measurable?",
    },
  },
  {
    id: "no-cta",
    title: {
      es: "4. No incluir CTAs ni lead magnets",
      en: "4. Not including CTAs or lead magnets",
    },
    symptom: {
      es: "Tu contenido entretiene pero no convierte.",
      en: "Your content entertains but doesn't convert.",
    },
    explanation: {
      practical: {
        es: "Cada pieza de contenido necesita un próximo paso claro. Sin CTA, el usuario disfruta y se va. Un CTA no es agresivo: es una invitación. 'Si te gustó esto, wishlist en Steam' es suficiente. Hazlo fácil, hazlo obvio.",
        en: "Every piece of content needs a clear next step. Without a CTA, the user enjoys and leaves. A CTA isn't aggressive: it's an invitation. 'If you liked this, wishlist on Steam' is enough. Make it easy, make it obvious.",
      },
      narrative: {
        es: "Publiqué devlogs durante 8 meses sin pedir nada. Pensaba que 'el trabajo habla por sí mismo'. No lo hace. El día que empecé a terminar cada post con '¿Quieres probarlo? Wishlist aquí' mis conversiones se quintuplicaron.",
        en: "I posted devlogs for 8 months without asking for anything. I thought 'the work speaks for itself'. It doesn't. The day I started ending every post with 'Want to try it? Wishlist here' my conversions quintupled.",
      },
    },
    example: {
      practical: {
        es: "Test real: mismo contenido, con y sin CTA al final. Sin CTA: 2 clics a Steam. Con CTA '¿Quieres probarlo? Link en bio': 34 clics. Mismo post, 17x diferencia.",
        en: "Real test: same content, with and without CTA at the end. Without CTA: 2 clicks to Steam. With CTA 'Want to try it? Link in bio': 34 clicks. Same post, 17x difference.",
      },
      narrative: {
        es: "Un dev de un city builder añadió un lead magnet simple: 'Descarga el mapa de la primera ciudad gratis.' 400 emails en 2 semanas. Cuando lanzó, esos 400 representaron el 30% de sus ventas del primer día.",
        en: "A city builder dev added a simple lead magnet: 'Download the first city map for free.' 400 emails in 2 weeks. When he launched, those 400 represented 30% of his day-one sales.",
      },
    },
    solution: {
      practical: {
        es: [
          "Añade un CTA a tu bio de todas las redes",
          "Termina cada post con una invitación específica",
          "Crea al menos un lead magnet (demo, artbook, soundtrack preview)",
        ],
        en: [
          "Add a CTA to your bio on all networks",
          "End every post with a specific invitation",
          "Create at least one lead magnet (demo, artbook, soundtrack preview)",
        ],
      },
      narrative: {
        es: [
          "Piensa: '¿Qué le puedo dar a alguien que quiera más?'",
          "No tengas miedo de pedir: los fans QUIEREN apoyarte",
          "Haz el CTA natural, como recomendarías algo a un amigo",
        ],
        en: [
          "Think: 'What can I give someone who wants more?'",
          "Don't be afraid to ask: fans WANT to support you",
          "Make the CTA natural, like recommending something to a friend",
        ],
      },
    },
    tools: {
      es: [
        "Mailchimp/ConvertKit para email capture",
        "Gumroad para lead magnets gratuitos",
      ],
      en: [
        "Mailchimp/ConvertKit for email capture",
        "Gumroad for free lead magnets",
      ],
    },
    kpi: {
      es: "Conversión contenido → acción (objetivo: >3% de views llevan a clic en CTA)",
      en: "Content → action conversion (goal: >3% of views lead to CTA click)",
    },
    doThisNow: {
      es: "Revisa tu bio de Twitter/TikTok. ¿Hay un link claro a tu Steam? Si no, añádelo ahora.",
      en: "Check your Twitter/TikTok bio. Is there a clear link to your Steam? If not, add it now.",
    },
  },
  {
    id: "inconsistency",
    title: {
      es: "5. Estrategia de contenido dispersa",
      en: "5. Scattered content strategy",
    },
    symptom: {
      es: "Publicas cuando puedes, en las plataformas que recuerdas.",
      en: "You post when you can, on whatever platforms you remember.",
    },
    explanation: {
      practical: {
        es: "La consistencia gana a la intensidad. Mejor 2 posts semanales durante un año que 30 posts en un mes y luego silencio. El algoritmo recompensa la regularidad, y tu audiencia aprende cuándo esperarte. Elige menos canales, hazlos bien.",
        en: "Consistency beats intensity. Better 2 posts weekly for a year than 30 posts in a month then silence. The algorithm rewards regularity, and your audience learns when to expect you. Choose fewer channels, do them well.",
      },
      narrative: {
        es: "Intenté estar en todas partes: Twitter, TikTok, Reddit, Discord, YouTube, Instagram. Resultado: burnout en 3 meses y ningún canal con tracción real. Cuando me enfoqué solo en Twitter y Discord, todo cambió.",
        en: "I tried to be everywhere: Twitter, TikTok, Reddit, Discord, YouTube, Instagram. Result: burnout in 3 months and no channel with real traction. When I focused only on Twitter and Discord, everything changed.",
      },
    },
    example: {
      practical: {
        es: "Caso: Dev elige solo TikTok. Publica 3 veces por semana durante 6 meses. Resultado: 50k followers, 8,000 wishlists. Otro dev intenta 5 plataformas: 2k followers totales, 200 wishlists.",
        en: "Case: Dev chooses only TikTok. Posts 3 times a week for 6 months. Result: 50k followers, 8,000 wishlists. Another dev tries 5 platforms: 2k total followers, 200 wishlists.",
      },
      narrative: {
        es: "El creador de Vampire Survivors famosamente dijo que su única estrategia de marketing fue 'hacer el juego más adictivo posible y dejarlo en Steam.' No intentó todo. Hizo una cosa extraordinariamente bien.",
        en: "The creator of Vampire Survivors famously said his only marketing strategy was 'make the game as addictive as possible and leave it on Steam.' He didn't try everything. He did one thing extraordinarily well.",
      },
    },
    solution: {
      practical: {
        es: [
          "Elige 2 plataformas máximo donde esté tu audiencia",
          "Define un calendario semanal realista (ej: martes y viernes)",
          "Batch-produce contenido: crea una semana entera en una sesión",
        ],
        en: [
          "Choose max 2 platforms where your audience is",
          "Define a realistic weekly calendar (e.g., Tuesday and Friday)",
          "Batch-produce content: create a whole week in one session",
        ],
      },
      narrative: {
        es: [
          "Pregúntate: '¿Dónde me gusta pasar tiempo y crear?'",
          "Di no a las plataformas que te estresan",
          "La sostenibilidad > la optimización",
        ],
        en: [
          "Ask yourself: 'Where do I like spending time and creating?'",
          "Say no to platforms that stress you",
          "Sustainability > optimization",
        ],
      },
    },
    tools: {
      es: [
        "Buffer/Later para scheduling",
        "Notion para calendario de contenido",
      ],
      en: ["Buffer/Later for scheduling", "Notion for content calendar"],
    },
    kpi: {
      es: "Tasa de consistencia (objetivo: >90% de posts planeados publicados)",
      en: "Consistency rate (goal: >90% of planned posts published)",
    },
    doThisNow: {
      es: "Elige UNA plataforma para abandonar esta semana. Redirige esa energía a tu canal principal.",
      en: "Choose ONE platform to abandon this week. Redirect that energy to your main channel.",
    },
  },
  {
    id: "no-iteration",
    title: {
      es: "6. No revisar datos ni iterar",
      en: "6. Not reviewing data or iterating",
    },
    symptom: {
      es: "Cada post es como el primero: no aplicas lo aprendido.",
      en: "Every post is like the first: you don't apply what you've learned.",
    },
    explanation: {
      practical: {
        es: "Publicar sin revisar es como tirar piedras a ciegas. Cada semana deberías saber: qué funcionó, qué no, y qué vas a probar diferente. Sin este loop, no hay mejora. Los datos están ahí, úsalos.",
        en: "Publishing without reviewing is like throwing stones blindly. Every week you should know: what worked, what didn't, and what you'll try differently. Without this loop, there's no improvement. The data is there, use it.",
      },
      narrative: {
        es: "Durante un año trackeé nada. Cuando finalmente exporté mis analytics, vi patrones obvios: mis posts de los martes tenían 3x más engagement. Un año de datos que nunca usé.",
        en: "For a year I tracked nothing. When I finally exported my analytics, I saw obvious patterns: my Tuesday posts had 3x more engagement. A year of data I never used.",
      },
    },
    example: {
      practical: {
        es: "Dev implementa review semanal de 30 min. En 3 meses: identifica que GIFs de <10 segundos tienen 2x más shares. Ajusta formato. Engagement sube 80%.",
        en: "Dev implements 30-min weekly review. In 3 months: identifies that GIFs under 10 seconds get 2x more shares. Adjusts format. Engagement goes up 80%.",
      },
      narrative: {
        es: "El equipo de Hollow Knight documentó que cada vez que mostraban al Knight en situaciones vulnerables (cayendo, fallando), el engagement subía. Iteraron: más posts 'humanos', menos poses heroicas. Funcionó.",
        en: "The Hollow Knight team documented that every time they showed the Knight in vulnerable situations (falling, failing), engagement went up. They iterated: more 'human' posts, fewer heroic poses. It worked.",
      },
    },
    solution: {
      practical: {
        es: [
          "Bloquea 30 min semanales para review (viernes ideal)",
          "Crea un template: Top 3 posts, Bottom 3, Patrón, Próximo experimento",
          "Implementa al menos un cambio basado en datos cada semana",
        ],
        en: [
          "Block 30 min weekly for review (Friday ideal)",
          "Create a template: Top 3 posts, Bottom 3, Pattern, Next experiment",
          "Implement at least one data-based change every week",
        ],
      },
      narrative: {
        es: [
          "Cada viernes, hazte una pregunta: '¿Qué funcionó y por qué?'",
          "No busques perfección, busca patrones",
          "Comparte tus aprendizajes con otros devs: se aprende enseñando",
        ],
        en: [
          "Every Friday, ask yourself: 'What worked and why?'",
          "Don't look for perfection, look for patterns",
          "Share your learnings with other devs: you learn by teaching",
        ],
      },
    },
    tools: {
      es: [
        "Analytics nativas de cada plataforma",
        "Spreadsheet para tracking histórico",
      ],
      en: [
        "Native analytics from each platform",
        "Spreadsheet for historical tracking",
      ],
    },
    kpi: {
      es: "Mejora mes a mes en métrica principal (objetivo: +10% mensual)",
      en: "Month-over-month improvement in main metric (goal: +10% monthly)",
    },
    doThisNow: {
      es: "Abre tus analytics de la última semana. Identifica tu mejor post. ¿Qué tuvo de diferente?",
      en: "Open your analytics from the last week. Identify your best post. What was different about it?",
    },
  },
  {
    id: "no-community",
    title: {
      es: "7. Ignorar el loop de comunidad",
      en: "7. Ignoring the community loop",
    },
    symptom: {
      es: "Tienes seguidores pero no tienes fans.",
      en: "You have followers but no fans.",
    },
    explanation: {
      practical: {
        es: "La diferencia entre audiencia y comunidad: la audiencia consume, la comunidad participa y evangeliza. Sin un espacio para que los fans se conecten (Discord, subreddit, foro), pierdes el multiplicador viral. Los fans quieren un lugar para ser fans.",
        en: "The difference between audience and community: audience consumes, community participates and evangelizes. Without a space for fans to connect (Discord, subreddit, forum), you lose the viral multiplier. Fans want a place to be fans.",
      },
      narrative: {
        es: "Tenía 5,000 followers pero ningún lugar para ellos. Cuando abrí un Discord pequeño, 200 personas entraron el primer día. Esas 200 personas generaron más wishlists que mis 5,000 followers silenciosos.",
        en: "I had 5,000 followers but nowhere for them. When I opened a small Discord, 200 people joined the first day. Those 200 people generated more wishlists than my 5,000 silent followers.",
      },
    },
    example: {
      practical: {
        es: "Cult of the Lamb: Discord de 200k miembros antes del lanzamiento. Cada miembro es un mini-influencer que comparte clips, memes, teorías. Marketing orgánico multiplicado.",
        en: "Cult of the Lamb: 200k member Discord before launch. Each member is a mini-influencer sharing clips, memes, theories. Organic marketing multiplied.",
      },
      narrative: {
        es: "Undertale no tuvo marketing tradicional. Tuvo una comunidad obsesiva que creó fanart, teorías, y música. Toby Fox no compró ads: construyó un espacio para que los fans crearan valor.",
        en: "Undertale had no traditional marketing. It had an obsessive community that created fanart, theories, and music. Toby Fox didn't buy ads: he built a space for fans to create value.",
      },
    },
    solution: {
      practical: {
        es: [
          "Abre un Discord (o subreddit) incluso con solo 50 interesados",
          "Crea roles y canales que incentiven participación",
          "Celebra y amplifica el contenido de tu comunidad",
        ],
        en: [
          "Open a Discord (or subreddit) even with only 50 interested people",
          "Create roles and channels that encourage participation",
          "Celebrate and amplify your community's content",
        ],
      },
      narrative: {
        es: [
          "Piensa: '¿Cómo puedo hacer que mis fans se sientan parte de esto?'",
          "Responde a cada mensaje al principio: la atención es rara y valiosa",
          "Deja que la comunidad te sorprenda con lo que crean",
        ],
        en: [
          "Think: 'How can I make my fans feel part of this?'",
          "Respond to every message at first: attention is rare and valuable",
          "Let the community surprise you with what they create",
        ],
      },
    },
    tools: {
      es: [
        "Discord para comunidad en tiempo real",
        "Reddit para discusiones largas",
      ],
      en: ["Discord for real-time community", "Reddit for long discussions"],
    },
    kpi: {
      es: "Ratio de miembros activos en comunidad (objetivo: >10% activos semanalmente)",
      en: "Active community member ratio (goal: >10% active weekly)",
    },
    doThisNow: {
      es: "Si no tienes Discord: créalo hoy y anuncia en tu próximo post. Si lo tienes: postea una pregunta para generar discusión.",
      en: "If you don't have Discord: create it today and announce in your next post. If you have it: post a question to generate discussion.",
    },
  },
];

const checklistItemsData: BilingualChecklistItem[] = [
  {
    id: "cl1",
    error: 1,
    text: {
      es: "Reescribir Steam page con beneficios, no features",
      en: "Rewrite Steam page with benefits, not features",
    },
  },
  {
    id: "cl2",
    error: 1,
    text: {
      es: "Simplificar descripción con Hemingway Editor",
      en: "Simplify description with Hemingway Editor",
    },
  },
  {
    id: "cl3",
    error: 2,
    text: {
      es: "Escribir hipótesis antes del próximo post",
      en: "Write hypothesis before next post",
    },
  },
  {
    id: "cl4",
    error: 2,
    text: {
      es: "Crear spreadsheet de experimentos",
      en: "Create experiments spreadsheet",
    },
  },
  {
    id: "cl5",
    error: 3,
    text: {
      es: "Definir 3 métricas de intención",
      en: "Define 3 intent metrics",
    },
  },
  {
    id: "cl6",
    error: 3,
    text: {
      es: "Eliminar métricas de vanidad del dashboard",
      en: "Remove vanity metrics from dashboard",
    },
  },
  {
    id: "cl7",
    error: 4,
    text: {
      es: "Añadir CTA a bio de todas las redes",
      en: "Add CTA to bio on all networks",
    },
  },
  {
    id: "cl8",
    error: 4,
    text: { es: "Crear un lead magnet", en: "Create a lead magnet" },
  },
  {
    id: "cl9",
    error: 5,
    text: {
      es: "Elegir 2 plataformas y abandonar el resto",
      en: "Choose 2 platforms and abandon the rest",
    },
  },
  {
    id: "cl10",
    error: 5,
    text: {
      es: "Crear calendario semanal de contenido",
      en: "Create weekly content calendar",
    },
  },
  {
    id: "cl11",
    error: 6,
    text: {
      es: "Bloquear 30 min viernes para review",
      en: "Block 30 min Friday for review",
    },
  },
  {
    id: "cl12",
    error: 6,
    text: {
      es: "Crear template de análisis semanal",
      en: "Create weekly analysis template",
    },
  },
  {
    id: "cl13",
    error: 7,
    text: { es: "Abrir Discord o comunidad", en: "Open Discord or community" },
  },
  {
    id: "cl14",
    error: 7,
    text: {
      es: "Responder a cada mensaje de la comunidad",
      en: "Respond to every community message",
    },
  },
];

const caseStudiesData: BilingualCaseStudy[] = [
  {
    title: {
      es: "De 70 a 300 wishlists con copy",
      en: "From 70 to 300 wishlists with copy",
    },
    description: {
      es: "Un dev de puzzle games cambió su descripción de Steam: eliminó jerga técnica, añadió beneficios emocionales. Resultado en 3 semanas.",
      en: "A puzzle games dev changed their Steam description: removed technical jargon, added emotional benefits. Result in 3 weeks.",
    },
    metric: "Wishlists x4",
    source: "r/gamedev caso anónimo 2023",
  },
  {
    title: {
      es: "TikTok + consistencia = 8k wishlists",
      en: "TikTok + consistency = 8k wishlists",
    },
    description: {
      es: "Dev de RPG eligió solo TikTok. 3 posts semanales durante 6 meses. Contenido simple: gameplay de 15 segundos con música trending.",
      en: "RPG dev chose only TikTok. 3 posts weekly for 6 months. Simple content: 15-second gameplay with trending music.",
    },
    metric: "8,000 wishlists",
    source: "GDC Talk 2024",
  },
  {
    title: {
      es: "El poder del lead magnet",
      en: "The power of the lead magnet",
    },
    description: {
      es: "City builder ofreció mapa descargable gratis. 400 emails capturados. El día del lanzamiento, esos 400 representaron 30% de ventas día 1.",
      en: "City builder offered free downloadable map. 400 emails captured. On launch day, those 400 represented 30% of day-1 sales.",
    },
    metric: "30% D1 sales",
    source: "Newsletter How To Market A Game",
  },
];

// Helper function to get localized content
function useLocalizedContent() {
  const { locale } = useLocale();
  const lang = locale as Lang;

  const errorNodes = errorNodesData.map((node) => ({
    id: node.id,
    title: node.title[lang],
    symptom: node.symptom[lang],
    explanation: {
      practical: node.explanation.practical[lang],
      narrative: node.explanation.narrative[lang],
    },
    example: {
      practical: node.example.practical[lang],
      narrative: node.example.narrative[lang],
    },
    solution: {
      practical: node.solution.practical[lang],
      narrative: node.solution.narrative[lang],
    },
    tools: node.tools[lang],
    kpi: node.kpi[lang],
    doThisNow: node.doThisNow[lang],
  }));

  const checklistItems = checklistItemsData.map((item) => ({
    id: item.id,
    error: item.error,
    text: item.text[lang],
  }));

  const caseStudies = caseStudiesData.map((study) => ({
    title: study.title[lang],
    description: study.description[lang],
    metric: study.metric,
    source: study.source,
  }));

  return { errorNodes, checklistItems, caseStudies };
}

// =============================================================================
// SIGNUP MODAL COMPONENT
// =============================================================================
function SignupModal({
  isOpen,
  onClose,
  onSuccess,
  contentStyle,
  context,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  contentStyle: ContentStyle;
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
      campaign:
        params.get("utm_campaign") || `errors-marketing-${contentStyle}`,
    };
  }, [contentStyle]);

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

      trackEvent("signup_submitted", { status: "success", contentStyle });
      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
      trackEvent("signup_submitted", { status: "error", contentStyle });
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
              {t.leadMagnetPage.signupSuccessTitle}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t.leadMagnetPage.signupSuccessDesc}
            </p>
          </div>

          <div className="space-y-3">
            <Button
              className="w-full bg-primary hover:bg-primary/90"
              onClick={() => {
                // Call onSuccess to handle state updates (localStorage, etc)
                onSuccess();
                // Close after a short delay to allow user to see the success message
                setTimeout(() => {
                  onClose();
                }, 2000);
              }}
            >
              {t.leadMagnetPage.signupSuccessBtn}
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
              {t.leadMagnetPage.signupModalTitle}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {t.leadMagnetPage.signupModalDesc}
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
              {isSubmitting ? "Procesando..." : "Descargar PDF"}
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
                  trackEvent("signup_simulated", { contentStyle });
                  onSuccess();
                }}
              >
                ⚡ Simular registro (DEV)
              </Button>
            )}
          </form>

          <p className="text-xs text-muted-foreground text-center">
            {t.leadMagnetPage.lockedFooter}
          </p>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// ACCORDION COMPONENT
// Localized error node interface (returned from useLocalizedContent)
interface LocalizedErrorNode {
  id: string;
  title: string;
  symptom: string;
  explanation: { practical: string; narrative: string };
  example: { practical: string; narrative: string };
  solution: { practical: string[]; narrative: string[] };
  tools: string[];
  kpi: string;
  doThisNow: string;
}

// =============================================================================
function ErrorAccordion({
  node,
  contentStyle,
  isOpen,
  onToggle,
}: {
  node: LocalizedErrorNode;
  contentStyle: ContentStyle;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { t } = useLocale();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      trackEvent("leadmagnet_toggled", { nodeId: node.id, contentStyle });
    }
  }, [isOpen, node.id, contentStyle]);

  return (
    <div
      id={node.id}
      className="rounded-xl border border-border bg-card overflow-hidden scroll-mt-24"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-secondary/50 transition-colors focus-visible-ring"
        aria-expanded={isOpen}
        aria-controls={`content-${node.id}`}
      >
        <div className="space-y-1 pr-4">
          <h3 className="text-lg font-semibold text-foreground">
            {node.title}
          </h3>
          <p className="text-sm text-muted-foreground">{node.symptom}</p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 mt-1 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        id={`content-${node.id}`}
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!isOpen}
      >
        <div className="px-6 pb-6 space-y-6 border-t border-border pt-4">
          {/* Explanation */}
          <div>
            <h4 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
              {contentStyle === "practical"
                ? t.leadMagnetPage.whatLabel
                : t.leadMagnetPage.storyLabel}
            </h4>
            <p className="text-foreground leading-relaxed">
              {node.explanation[contentStyle]}
            </p>
          </div>

          {/* Example */}
          <div className="p-4 rounded-lg bg-secondary/50 border border-border">
            <h4 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
              {t.leadMagnetPage.exampleLabel}
            </h4>
            <p className="text-sm text-foreground leading-relaxed">
              {node.example[contentStyle]}
            </p>
          </div>

          {/* Solution */}
          <div>
            <h4 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
              {contentStyle === "practical"
                ? t.leadMagnetPage.solutionPracticalLabel
                : t.leadMagnetPage.solutionNarrativeLabel}
            </h4>
            <ol className="space-y-2">
              {node.solution[contentStyle].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-medium flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Toolbox */}
          <div className="flex flex-wrap gap-4 items-start">
            <div className="flex-1 min-w-[200px]">
              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                {t.leadMagnetPage.toolsLabel}
              </h4>
              <ul className="space-y-1">
                {node.tools.map((tool, i) => (
                  <li
                    key={i}
                    className="text-sm text-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 min-w-[200px]">
              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                {t.leadMagnetPage.kpiLabel}
              </h4>
              <p className="text-sm text-foreground">{node.kpi}</p>
            </div>
          </div>

          {/* Do This Now */}
          <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
            <h4 className="text-sm font-bold text-primary mb-2">
              {t.leadMagnetPage.doThisNowLabel}:
            </h4>
            <p className="text-foreground">{node.doThisNow}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// COMPLETION MODAL COMPONENT
// =============================================================================
function CompletionModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { t } = useLocale();
  const modalRef = useRef<HTMLDivElement>(null);

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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="completion-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg p-6 rounded-xl bg-card border border-border animate-scale-in"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          {/* Success Header */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Check className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2
                id="completion-modal-title"
                className="text-xl font-bold text-foreground"
              >
                {t.leadMagnetPage.completionTitle}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {t.leadMagnetPage.completionDesc}
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {t.leadMagnetPage.nextStepsTitle}
            </h3>
            <div className="space-y-2">
              {/* FlowFocus - Time Tracking CTA */}
              <a
                href="/?utm_source=leadmagnet&utm_medium=internal&utm_campaign=checklist-completion"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {t.leadMagnetPage.flowFocusTitle}
                    </h4>
                    <span className="px-2 py-0.5 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                      {t.leadMagnetPage.flowFocusTrialBadge}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {t.leadMagnetPage.flowFocusDesc}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
              </a>

              {/* Secondary CTAs in grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {/* Blog */}
                <a
                  href="https://kaizenith.com/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-3 rounded-lg border border-border bg-card hover:bg-secondary transition-colors group text-center"
                >
                  <Target className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <h4 className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                      {t.leadMagnetPage.blogTitle}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5 hidden sm:block">
                      {t.leadMagnetPage.blogDesc}
                    </p>
                  </div>
                </a>

                {/* Community */}
                <a
                  href="https://discord.gg/kaizenith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-3 rounded-lg border border-border bg-card hover:bg-secondary transition-colors group text-center"
                >
                  <BarChart3 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <h4 className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                      {t.leadMagnetPage.communityTitle}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5 hidden sm:block">
                      {t.leadMagnetPage.communityDesc}
                    </p>
                  </div>
                </a>

                {/* Social */}
                <a
                  href="https://allmylinks.org/kaizenith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-3 rounded-lg border border-border bg-card hover:bg-secondary transition-colors group text-center"
                >
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <h4 className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                      {t.leadMagnetPage.socialTitle}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5 hidden sm:block">
                      {t.leadMagnetPage.socialDesc}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <Button
            onClick={onClose}
            variant="outline"
            className="w-full bg-transparent"
          >
            {t.leadMagnetPage.continueBtn}
          </Button>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// CHECKLIST COMPONENT
// =============================================================================
function InteractiveChecklist() {
  const { t } = useLocale();
  const { checklistItems } = useLocalizedContent();
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [showCompletion, setShowCompletion] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("kaizenith-checklist");
    if (saved) {
      try {
        setChecked(JSON.parse(saved));
      } catch {
        // Invalid JSON, ignore
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("kaizenith-checklist", JSON.stringify(checked));
  }, [checked]);

  const toggleItem = (id: string) => {
    const newChecked = { ...checked, [id]: !checked[id] };
    setChecked(newChecked);

    // Check if all items are now completed
    const allChecked = checklistItems.every((item) => newChecked[item.id]);
    if (allChecked && !showCompletion) {
      setShowCompletion(true);
      trackEvent("checklist_completed", { completedAll: true });
    }
  };

  const completedCount = Object.values(checked).filter(Boolean).length;

  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">
            {t.leadMagnetPage.checklistTitle}
          </h3>
          <span className="text-sm text-muted-foreground">
            {completedCount}/{checklistItems.length}{" "}
            {t.leadMagnetPage.completed}
          </span>
        </div>

        <div className="space-y-2">
          {checklistItems.map((item) => (
            <label
              key={item.id}
              className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                checked[item.id]
                  ? "bg-primary/10 border-primary/30"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              <Checkbox
                checked={checked[item.id] || false}
                onCheckedChange={() => toggleItem(item.id)}
                className="shrink-0"
              />
              <span
                className={`text-sm ${checked[item.id] ? "text-muted-foreground line-through" : "text-foreground"}`}
              >
                {item.text}
              </span>
              <span className="ml-auto text-xs text-muted-foreground shrink-0">
                {t.leadMagnetPage.errorLabel} {item.error}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Completion Modal */}
      <CompletionModal
        isOpen={showCompletion}
        onClose={() => setShowCompletion(false)}
      />
    </>
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
              {t.leadMagnetPage.lockedTitle}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.leadMagnetPage.lockedDesc}
            </p>
            <Button
              onClick={() => {
                const event = new CustomEvent("open-signup");
                window.dispatchEvent(event);
              }}
              className="bg-primary hover:bg-primary/90"
            >
              {t.leadMagnetPage.lockedBtn}
            </Button>
            <p className="text-xs text-muted-foreground">
              {t.leadMagnetPage.lockedFooter}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// =============================================================================
// MAIN PAGE COMPONENT
// =============================================================================
export default function ErrorsMarketingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t, locale } = useLocale();
  const { errorNodes, caseStudies } = useLocalizedContent();

  // Content style: practical or narrative (URL params A/B for backwards compat)
  const [contentStyle, setContentStyle] = useState<ContentStyle>("practical");
  const [variant, setVariant] = useState<string>("A");
  const [openAccordions, setOpenAccordions] = useState<Set<string>>(new Set());
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize content style from URL (A=practical, B=narrative)
  useEffect(() => {
    const urlVariant = searchParams.get("variant");
    if (urlVariant === "A") {
      setContentStyle("practical");
      setVariant("A");
    } else if (urlVariant === "B") {
      setContentStyle("narrative");
      setVariant("B");
    }
  }, [searchParams]);

  useEffect(() => {
    const openSignup = () => setShowSignupModal(true);
    window.addEventListener("open-signup", openSignup);
    return () => window.removeEventListener("open-signup", openSignup);
  }, []);
  useEffect(() => {
    if (!hasSignedUp) {
      document.body.classList.add("overflow-x-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-x-hidden");
    };
  }, [hasSignedUp]);

  // Track page view
  useEffect(() => {
    trackEvent("leadmagnet_viewed", { contentStyle, locale });
  }, [contentStyle, locale]);

  // Check if user has previously signed up
  useEffect(() => {
    setHasSignedUp(DevAuth.isSignedIn());
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleDownload = () => {
    if (GATING_ENABLED && !hasSignedUp) {
      setShowSignupModal(true);
      return;
    }

    // Map content style to file variant for backwards compatibility
    const fileVariant = contentStyle === "practical" ? "A" : "B";
    trackEvent("download_pdf", { contentStyle });
    window.open(`/leadmagnet_${fileVariant}.html`, "_blank");
  };

  const handleSignupSuccess = () => {
    setHasSignedUp(true);
    localStorage.setItem("kaizenith-leadmagnet-signup", "true");
    setShowSignupModal(false);
    //handleDownload();
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "7 errores que frenan tu crecimiento indie",
            description:
              "Guía práctica de marketing para desarrolladores indie de juegos.",
            inLanguage: "es",
            isPartOf: {
              "@type": "WebSite",
              name: "Kaizenith",
              url: "https://kaizenith.com",
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
                <span className="hidden sm:inline">
                  {t.leadMagnetPage.backToHome}
                </span>
              </Link>

              {/* Settings Toggle */}
              <div className="flex items-center gap-2">
                <SettingsToggles />

                {/* Mobile menu button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="sm:hidden p-2 text-muted-foreground hover:text-foreground"
                  aria-label="Menu"
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div className="sm:hidden py-4 border-t border-border space-y-4">
                <div className="px-2 pb-2 border-b border-border">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>{t.leadMagnetPage.backToHome}</span>
                  </Link>
                </div>
                <nav className="space-y-1">
                  {errorNodes.map((node) => (
                    <a
                      key={node.id}
                      href={`#${node.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                    >
                      {node.title}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
            {/* Sidebar TOC - Desktop */}
            <aside className="hidden lg:block">
              <div className="sticky top-20 space-y-6">
                <nav className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                    {t.leadMagnetPage.contentLabel}
                  </p>
                  {errorNodes.map((node) => (
                    <a
                      key={node.id}
                      href={`#${node.id}`}
                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                    >
                      {node.title}
                    </a>
                  ))}
                  <a
                    href="#checklist"
                    className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                  >
                    {t.leadMagnetPage.checklist}
                  </a>
                  <a
                    href="#cases"
                    className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                  >
                    {t.leadMagnetPage.caseStudies}
                  </a>
                </nav>

                <div className="pt-4 border-t border-border">
                  <Button
                    disabled={!hasSignedUp}
                    onClick={handleDownload}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t.leadMagnetPage.downloadPdf}
                  </Button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="space-y-12">
              {/* Hero */}
              <section className="space-y-6">
                <div className="space-y-4">
                  <p className="text-sm text-primary font-medium uppercase tracking-wider">
                    {t.leadMagnetPage.internalArchive}
                  </p>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                    {t.leadMagnetPage.pageTitle}
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-2xl">
                    {t.leadMagnetPage.pageSubtitle}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">
                      {t.leadMagnetPage.noteTitle}
                    </strong>{" "}
                    {t.leadMagnetPage.noteText}
                  </p>
                </div>

                {/* Download CTA - Mobile */}
                <div className="lg:hidden flex gap-4">
                  <Button
                    disabled={!hasSignedUp}
                    onClick={handleDownload}
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t.leadMagnetPage.downloadPdf}
                  </Button>
                </div>
              </section>

              {/* Error Nodes */}
              {/* Error Nodes */}
              <section className="space-y-4">
                {/* Primer error siempre visible */}
                <ErrorAccordion
                  node={errorNodes[0]}
                  contentStyle={contentStyle}
                  isOpen={openAccordions.has(errorNodes[0].id)}
                  onToggle={() => toggleAccordion(errorNodes[0].id)}
                />

                {/* Resto gated */}
                <GatedContent locked={!hasSignedUp}>
                  <div className="space-y-4">
                    {errorNodes.slice(1).map((node) => (
                      <ErrorAccordion
                        key={node.id}
                        node={node}
                        contentStyle={contentStyle}
                        isOpen={openAccordions.has(node.id)}
                        onToggle={() => toggleAccordion(node.id)}
                      />
                    ))}
                  </div>
                </GatedContent>
              </section>

              <GatedContent locked={!hasSignedUp}>
                {/* Checklist */}
                <section
                  id="checklist"
                  className="scroll-mt-20 p-6 rounded-xl border border-border bg-card"
                >
                  <InteractiveChecklist />
                </section>

                {/* Case Studies */}
                <section id="cases" className="scroll-mt-20 space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">
                    {t.leadMagnetPage.caseStudiesTitle}
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {caseStudies.map((study, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-xl border border-border bg-card space-y-3"
                      >
                        <div className="text-2xl font-bold text-primary">
                          {study.metric}
                        </div>
                        <h3 className="font-semibold text-foreground">
                          {study.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {study.description}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {t.leadMagnetPage.sourceLabel}: {study.source}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </GatedContent>
              <GatedContent locked={!hasSignedUp}>
                {/* 10-Minute Task */}
                <section className="p-6 rounded-xl border-2 border-primary/30 bg-primary/5">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded">
                        {t.leadMagnetPage.tenMinTask}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground">
                        {t.leadMagnetPage.tenMinTaskTitle}
                      </h3>
                    </div>
                    <p className="text-foreground">
                      {t.leadMagnetPage.tenMinTaskDesc}
                    </p>
                  </div>
                </section>
              </GatedContent>
              <GatedContent locked={!hasSignedUp}>
                {/* FlowFocus Integration - Time Tracking */}
                <section className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">
                    {t.leadMagnetPage.flowFocusSectionTitle}
                  </h2>
                  <div className="p-6 rounded-xl border border-border bg-card space-y-4">
                    <p className="text-muted-foreground">
                      {t.leadMagnetPage.flowFocusSectionDesc}
                    </p>
                    <div className="p-4 rounded-lg bg-secondary font-mono text-sm overflow-x-auto">
                      <pre className="text-foreground">{`{
                      "task": "Marketing Content Creation",
                      "project": "Steam Page Optimization",
                      "time_tracked": "2h 15m",
                      "session_notes": "Rewrote description focusing on benefits",
                      "tags": ["marketing", "copywriting", "steam"],
                      "date": "${new Date().toISOString().split("T")[0]}"
                    }`}</pre>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        asChild
                        className="bg-primary hover:bg-primary/90"
                      >
                        <a href="/?utm_source=leadmagnet&utm_medium=internal&utm_campaign=flowfocus-cta">
                          {t.leadMagnetPage.flowFocusCtaBtn}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </section>
              </GatedContent>

              {/* Final CTA */}
              <section className="p-8 rounded-xl border border-border bg-card text-center space-y-6">
                <h2 className="text-2xl font-bold text-foreground">
                  {t.leadMagnetPage.downloadGuide}
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  {t.leadMagnetPage.downloadGuideDesc}
                </p>
                <div className="flex justify-center">
                  <Button
                    disabled={!hasSignedUp}
                    onClick={handleDownload}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t.leadMagnetPage.download}
                  </Button>
                </div>
              </section>

              {/* Footnote */}
              <footer className="pt-8 border-t border-border space-y-6">
                <p className="text-sm text-muted-foreground text-center italic">
                  {t.leadMagnetPage.footerNote}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <Link
                      href="/"
                      className="hover:text-foreground transition-colors"
                    >
                      {t.leadMagnetPage.backToHomeLink}
                    </Link>
                    <a
                      href="https://twitter.com/kaizenith"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors"
                    >
                      Twitter
                    </a>
                    <Link
                      href="/privacy"
                      className="hover:text-foreground transition-colors"
                    >
                      {t.leadMagnetPage.privacy}
                    </Link>
                  </div>
                  <p>
                    © {new Date().getFullYear()} Kaizenith.{" "}
                    {t.leadMagnetPage.allRightsReserved}
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    <strong>{t.leadMagnetPage.hiddenPageNote}</strong>{" "}
                    {t.leadMagnetPage.hiddenPageNoteText}{" "}
                    <Link href="/" className="text-primary hover:underline">
                      {t.leadMagnetPage.backToHomeLink} →
                    </Link>
                  </p>
                </div>
              </footer>

              {/* DEV Panel */}
              {DEV_AUTH_TOOLS && (
                <div className="fixed bottom-4 right-4 z-50 p-3 rounded-lg bg-card border border-border shadow-lg space-y-2 text-xs w-48">
                  <p className="font-medium text-foreground">DEV · Lead Magnet</p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      DevAuth.signIn({
                        context: {
                          source: "lead-magnet-main",
                          variant,
                          section: "core",
                        },
                        utm: {
                          source: "leadmagnet",
                          medium: "internal",
                          campaign: `errors-marketing-${contentStyle}`,
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
            </main>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      <SignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSuccess={handleSignupSuccess}
        contentStyle={contentStyle}
        context={{
          source: "lead-magnet-main",
          variant,
          section: "core",
        }}
      />

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          header,
          aside,
          .no-print {
            display: none !important;
          }
          body {
            background: white !important;
            color: black !important;
          }
          .bg-card,
          .bg-secondary,
          .bg-primary\/10 {
            background: #f5f5f5 !important;
          }
          .text-foreground {
            color: black !important;
          }
          .text-muted-foreground {
            color: #666 !important;
          }
        }
      `}</style>
    </>
  );
}
