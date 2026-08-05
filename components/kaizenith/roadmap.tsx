"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";
import { EyebrowBadge } from "./eyebrow-badge";

interface RoadmapNode {
  id: string;
  title: string; // “— 2026 · Q1 —”
  timeframe: string; // “2026 · Q1”
  status?: string; // e.g. "In progress" / "Planned" / "Completed"
  summary: string; // Short visible sentence
  focus: string; // What we're doing this quarter
  why: string; // Why it matters now
  unlocks: string; // What it unlocks next
}

const statusColors: Record<string, string> = {
  Launched: "bg-green-500/20 text-green-400 border-green-500/30",
  Completed: "bg-green-500/20 text-green-400 border-green-500/30",
  "In progress": "bg-primary/20 text-primary border-primary/30",
  Planned:
    "bg-muted-foreground/20 text-muted-foreground border-muted-foreground/30",
  Active: "bg-primary/20 text-primary border-primary/30",
  Validation: "bg-primary/20 text-primary border-primary/30",
  Prototype: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Concept: "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

export function Roadmap() {
  const [expandedNode, setExpandedNode] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNodes, setAnimatedNodes] = useState<Set<string>>(new Set());
  const [lineProgress, setLineProgress] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { t } = useLocale();

  // Get translated roadmap data (Q1-Q4 2026, games-first)
  const roadmapData: RoadmapNode[] = [
    {
      id: "q1-2026",
      title: t?.roadmap?.quarters?.q1?.title ?? "— 2026 · Q1 —",
      status: t?.roadmap?.quarters?.q1?.status ?? "In progress",
      timeframe: t?.roadmap?.quarters?.q1?.timeframe ?? "2026 · Q1",
      summary:
        t?.roadmap?.quarters?.q1?.summary ??
        "Establecer presencia y lanzar la primera herramienta (FlowFocus).",
      focus:
        t?.roadmap?.quarters?.q1?.focus ??
        `Comenzar a crear audiencia.
Terminar y publicar FlowFocus.
Implementar estrategia de redes, lead magnet y posible newsletter.
Desarrollo y publicación de la web.`,
      why:
        t?.roadmap?.quarters?.q1?.why ??
        "Prioridad: validar canales y generar señales de interés antes de empujar el juego.",
      unlocks:
        t?.roadmap?.quarters?.q1?.unlocks ??
        "Señales positivas → intensificar promoción del juego y preparar Q2 (Kickstarter).",
    },
    {
      id: "q2-2026",
      title: t?.roadmap?.quarters?.q2?.title ?? "— 2026 · Q2 —",
      status: t?.roadmap?.quarters?.q2?.status ?? "Planned",
      timeframe: t?.roadmap?.quarters?.q2?.timeframe ?? "2026 · Q2",
      summary:
        t?.roadmap?.quarters?.q2?.summary ??
        "Dar empuje al juego principal y preparar el crowdfunding.",
      focus:
        t?.roadmap?.quarters?.q2?.focus ??
        `Ajustar estrategia según resultados.
Intensificar promoción del juego.
Lanzar Kickstarter.
Crear Discord para la comunidad.`,
      why:
        t?.roadmap?.quarters?.q2?.why ??
        "Kickstarter es la palanca de visibilidad y financiación si la comunidad responde.",
      unlocks:
        t?.roadmap?.quarters?.q2?.unlocks ??
        "Éxito en crowdfunding → fondos para producción y alcance ampliado.",
    },
    {
      id: "q3-2026",
      title: t?.roadmap?.quarters?.q3?.title ?? "— 2026 · Q3 —",
      status: t?.roadmap?.quarters?.q3?.status ?? "Planned",
      timeframe: t?.roadmap?.quarters?.q3?.timeframe ?? "2026 · Q3",
      summary:
        t?.roadmap?.quarters?.q3?.summary ??
        "Publicar el juego y recoger métricas reales de los jugadores.",
      focus:
        t?.roadmap?.quarters?.q3?.focus ??
        `Publicar el juego (release principal).
Decidir: DLC/expansión o nuevo proyecto según feedback.
Buscar colaboraciones para la newsletter.`,
      why:
        t?.roadmap?.quarters?.q3?.why ??
        "El lanzamiento valida el producto en condiciones reales y guía el roadmap de contenido.",
      unlocks:
        t?.roadmap?.quarters?.q3?.unlocks ??
        "Decisión clara: expansión / DLC o iniciar nuevo proyecto según datos.",
    },
    {
      id: "q4-2026",
      title: t?.roadmap?.quarters?.q4?.title ?? "— 2026 · Q4 —",
      status: t?.roadmap?.quarters?.q4?.status ?? "Planned",
      timeframe: t?.roadmap?.quarters?.q4?.timeframe ?? "2026 · Q4",
      summary:
        t?.roadmap?.quarters?.q4?.summary ??
        "Consolidar pipeline y buscar acuerdos mayores.",
      focus:
        t?.roadmap?.quarters?.q4?.focus ??
        `Continuar desarrollo del siguiente juego / expansión.
Buscar acuerdos y colaboraciones más grandes.`,
      why:
        t?.roadmap?.quarters?.q4?.why ??
        "Escalar con prudencia y convertir señales tempranas en acuerdos y alcance.",
      unlocks:
        t?.roadmap?.quarters?.q4?.unlocks ??
        "Preparar 2027: priorizar roadmap en función de ingresos y comunidad.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Animate line progress
          const duration = 1200;
          const startTime = Date.now();
          const animateLine = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setLineProgress(progress);
            if (progress < 1) {
              requestAnimationFrame(animateLine);
            }
          };
          requestAnimationFrame(animateLine);

          // Animate nodes sequentially
          roadmapData.forEach((node, index) => {
            setTimeout(
              () => {
                setAnimatedNodes(
                  (prev) => new Set([...Array.from(prev), node.id]),
                );
              },
              300 + index * 180,
            );
          });
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleNode = (id: string) => {
    setExpandedNode((prev) => (prev === id ? null : id));
  };

  const labels = {
    focus: t?.roadmap?.focus ?? "En qué estamos centrados",
    why: t?.roadmap?.why ?? "Por qué importa ahora",
    unlocks: t?.roadmap?.unlocks ?? "Qué desbloquea después",
  };

  const expandedNodeData = roadmapData.find((n) => n.id === expandedNode) ?? null;

  return (
    <section id="roadmap" ref={sectionRef} className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex justify-center">
            <EyebrowBadge>{t?.roadmap?.liveLabel ?? "Live System"}</EyebrowBadge>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            {t?.roadmap?.title ?? "El Sistema"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t?.roadmap?.subtitle ?? "Cuatro trimestres, cuatro apuestas."}
          </p>
        </div>

        {/* Desktop: horizontal stepper */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Horizontal connecting line with glow */}
            <div
              className="absolute left-0 right-0 top-7 h-0.5 bg-border pointer-events-none"
              aria-hidden="true"
            >
              <div
                className="absolute top-0 left-0 h-full bg-primary transition-all duration-100 ease-out"
                style={{
                  width: `${lineProgress * 100}%`,
                  boxShadow:
                    "0 0 12px 2px rgba(133, 76, 173, 0.5), 0 0 24px 4px rgba(133, 76, 173, 0.3)",
                }}
              />
            </div>

            <div className="relative z-10 grid grid-cols-4 gap-4">
              {roadmapData.map((node, index) => {
                const isAnimated = animatedNodes.has(node.id);
                const isExpanded = expandedNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => toggleNode(node.id)}
                    className={`text-left transition-all duration-500 focus-visible-ring rounded-xl ${
                      isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                    aria-expanded={isExpanded}
                    aria-controls="roadmap-shared-panel"
                  >
                    {/* Node marker */}
                    <div className="flex justify-center mb-4">
                      <div
                        className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                          isAnimated
                            ? isExpanded
                              ? "bg-primary border-primary scale-125"
                              : "bg-primary border-primary"
                            : "bg-card border-border"
                        }`}
                        style={{
                          boxShadow: isAnimated
                            ? isExpanded
                              ? "0 0 16px 4px rgba(133, 76, 173, 0.6)"
                              : "0 0 8px 2px rgba(133, 76, 173, 0.4)"
                            : "none",
                        }}
                      />
                    </div>

                    <div
                      className={`rounded-xl border p-5 h-full transition-all duration-300 group ${
                        isExpanded
                          ? "bg-primary/10 border-primary/30"
                          : "bg-card border-border hover:border-primary/30 hover:bg-card/80"
                      }`}
                    >
                      <div className="text-3xl font-extrabold tracking-tight text-foreground/90">
                        Q{index + 1}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{node.timeframe}</p>
                      {node.status && (
                        <span
                          className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full border ${
                            statusColors[node.status] ??
                            "bg-muted-foreground/20 text-muted-foreground border-muted-foreground/30"
                          }`}
                        >
                          {node.status}
                        </span>
                      )}
                      <p className="text-sm text-foreground/80 mt-3 leading-relaxed">
                        {node.summary}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Shared detail panel */}
            <div
              id="roadmap-shared-panel"
              className={`overflow-hidden transition-all duration-300 ${
                expandedNodeData ? "max-h-[28rem] opacity-100 mt-6" : "max-h-0 opacity-0"
              }`}
            >
              {expandedNodeData && (
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                  <dl className="grid sm:grid-cols-3 gap-6 text-sm">
                    <div>
                      <dt className="font-medium text-foreground mb-1">{labels.focus}</dt>
                      <dd className="text-muted-foreground whitespace-pre-line">
                        {expandedNodeData.focus}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium text-foreground mb-1">{labels.why}</dt>
                      <dd className="text-muted-foreground whitespace-pre-line">
                        {expandedNodeData.why}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium text-foreground mb-1">{labels.unlocks}</dt>
                      <dd className="text-muted-foreground whitespace-pre-line">
                        {expandedNodeData.unlocks}
                      </dd>
                    </div>
                  </dl>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile: vertical accordion */}
        <div className="md:hidden relative">
          <div
            className="absolute left-[1.75rem] top-6 w-0.5 bg-border pointer-events-none"
            style={{ height: "calc(100% - 3rem)" }}
            aria-hidden="true"
          >
            <div
              className="absolute top-0 left-0 w-full bg-primary transition-all duration-100 ease-out"
              style={{
                height: `${lineProgress * 100}%`,
                boxShadow:
                  "0 0 12px 2px rgba(133, 76, 173, 0.5), 0 0 24px 4px rgba(133, 76, 173, 0.3)",
              }}
            />
          </div>

          <div className="space-y-6 relative z-10">
            {roadmapData.map((node, index) => (
              <RoadmapCard
                key={node.id}
                node={node}
                isExpanded={expandedNode === node.id}
                isAnimated={animatedNodes.has(node.id)}
                onToggle={() => toggleNode(node.id)}
                index={index}
                labels={labels}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface RoadmapCardProps {
  node: RoadmapNode;
  isExpanded: boolean;
  isAnimated: boolean;
  onToggle: () => void;
  index: number;
  labels: {
    focus: string;
    why: string;
    unlocks: string;
  };
}

function RoadmapCard({
  node,
  isExpanded,
  isAnimated,
  onToggle,
  index,
  labels,
}: RoadmapCardProps) {
  return (
    <div
      className={`ml-14 transition-all duration-500 relative ${
        isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Node marker */}
      <div
        className={`absolute -left-[2.25rem] top-7 w-4 h-4 rounded-full border-2 z-10 transition-all duration-300 ${
          isAnimated
            ? isExpanded
              ? "bg-primary border-primary scale-125"
              : "bg-primary border-primary"
            : "bg-card border-border"
        }`}
        style={{
          boxShadow: isAnimated
            ? isExpanded
              ? "0 0 16px 4px rgba(133, 76, 173, 0.6)"
              : "0 0 8px 2px rgba(133, 76, 173, 0.4)"
            : "none",
        }}
      />

      {/* Card */}
      <button
        onClick={onToggle}
        className={`w-full text-left rounded-xl border transition-all duration-300 focus-visible-ring group ${
          isExpanded
            ? "bg-primary/10 border-primary/30"
            : "bg-card border-border hover:border-primary/30 hover:bg-card/80"
        }`}
        aria-expanded={isExpanded}
        aria-controls={`roadmap-content-${node.id}`}
      >
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {node.title}
                </h3>
                {node.status && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border ${
                      statusColors[node.status] ??
                      "bg-muted-foreground/20 text-muted-foreground border-muted-foreground/30"
                    }`}
                  >
                    {node.status}
                  </span>
                )}
              </div>

              <p className="text-sm text-muted-foreground">{node.timeframe}</p>

              <p className="text-foreground/90 leading-relaxed">
                {node.summary}
              </p>
            </div>

            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </button>

      {/* Expanded content */}
      <div
        id={`roadmap-content-${node.id}`}
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-3 ml-0 border-l-2 border-primary/20 mt-2">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-medium text-foreground mb-1">
                {labels.focus}
              </dt>
              <dd className="text-muted-foreground whitespace-pre-line">
                {node.focus}
              </dd>
            </div>

            <div>
              <dt className="font-medium text-foreground mb-1">{labels.why}</dt>
              <dd className="text-muted-foreground whitespace-pre-line">
                {node.why}
              </dd>
            </div>

            <div>
              <dt className="font-medium text-foreground mb-1">
                {labels.unlocks}
              </dt>
              <dd className="text-muted-foreground whitespace-pre-line">
                {node.unlocks}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
