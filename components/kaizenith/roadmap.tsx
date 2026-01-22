"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { useLocale } from "@/lib/i18n/locale-context"

interface RoadmapNode {
  id: string
  title: string
  status: string
  timeframe: string
  goal: string
  what: string
  why: string
  next: string
}

const statusColors: Record<string, string> = {
  Launched: "bg-green-500/20 text-green-400 border-green-500/30",
  Validation: "bg-primary/20 text-primary border-primary/30",
  Prototype: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Concept: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Ongoing: "bg-muted-foreground/20 text-muted-foreground border-muted-foreground/30",
}

export function Roadmap() {
  const [expandedNode, setExpandedNode] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [animatedNodes, setAnimatedNodes] = useState<Set<string>>(new Set())
  const [lineProgress, setLineProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([])
  const { t } = useLocale()

  // Get translated roadmap data
  const roadmapData: RoadmapNode[] = [
    {
      id: "validation",
      title: t.roadmap.milestones.validation.title,
      status: t.roadmap.milestones.validation.status,
      timeframe: t.roadmap.milestones.validation.timeframe,
      goal: t.roadmap.milestones.validation.what,
      what: t.roadmap.milestones.validation.what,
      why: t.roadmap.milestones.validation.why,
      next: t.roadmap.milestones.validation.next,
    },
    {
      id: "prototype",
      title: t.roadmap.milestones.prototype.title,
      status: t.roadmap.milestones.prototype.status,
      timeframe: t.roadmap.milestones.prototype.timeframe,
      goal: t.roadmap.milestones.prototype.what,
      what: t.roadmap.milestones.prototype.what,
      why: t.roadmap.milestones.prototype.why,
      next: t.roadmap.milestones.prototype.next,
    },
    {
      id: "betaLaunch",
      title: t.roadmap.milestones.betaLaunch.title,
      status: t.roadmap.milestones.betaLaunch.status,
      timeframe: t.roadmap.milestones.betaLaunch.timeframe,
      goal: t.roadmap.milestones.betaLaunch.what,
      what: t.roadmap.milestones.betaLaunch.what,
      why: t.roadmap.milestones.betaLaunch.why,
      next: t.roadmap.milestones.betaLaunch.next,
    },
    {
      id: "iteration",
      title: t.roadmap.milestones.iteration.title,
      status: t.roadmap.milestones.iteration.status,
      timeframe: t.roadmap.milestones.iteration.timeframe,
      goal: t.roadmap.milestones.iteration.what,
      what: t.roadmap.milestones.iteration.what,
      why: t.roadmap.milestones.iteration.why,
      next: t.roadmap.milestones.iteration.next,
    },
    {
      id: "publicLaunch",
      title: t.roadmap.milestones.publicLaunch.title,
      status: t.roadmap.milestones.publicLaunch.status,
      timeframe: t.roadmap.milestones.publicLaunch.timeframe,
      goal: t.roadmap.milestones.publicLaunch.what,
      what: t.roadmap.milestones.publicLaunch.what,
      why: t.roadmap.milestones.publicLaunch.why,
      next: t.roadmap.milestones.publicLaunch.next,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          
          // Animate line progress
          const duration = 1500
          const startTime = Date.now()
          const animateLine = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            setLineProgress(progress)
            if (progress < 1) {
              requestAnimationFrame(animateLine)
            }
          }
          requestAnimationFrame(animateLine)
          
          // Animate nodes sequentially
          roadmapData.forEach((node, index) => {
            setTimeout(() => {
              setAnimatedNodes((prev) => new Set([...prev, node.id]))
            }, 400 + index * 250)
          })
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleNode = (id: string) => {
    setExpandedNode(expandedNode === id ? null : id)
  }

  return (
    <section id="roadmap" ref={sectionRef} className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Live System</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            {t.roadmap.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.roadmap.subtitle}
          </p>
        </div>

        {/* Roadmap visualization */}
        <div className="relative">
          {/* Vertical connecting line with glow */}
          <div 
            className="absolute left-[1.75rem] md:left-[2.75rem] top-6 w-0.5 bg-border pointer-events-none"
            style={{ height: 'calc(100% - 3rem)' }}
            aria-hidden="true"
          >
            {/* Animated progress line */}
            <div 
              className="absolute top-0 left-0 w-full bg-primary transition-all duration-100 ease-out"
              style={{ 
                height: `${lineProgress * 100}%`,
                boxShadow: '0 0 12px 2px rgba(133, 76, 173, 0.5), 0 0 24px 4px rgba(133, 76, 173, 0.3)'
              }}
            />
          </div>

          {/* Nodes */}
          <div className="space-y-6 relative z-10">
            {roadmapData.map((node, index) => (
              <RoadmapCard
                key={node.id}
                node={node}
                isExpanded={expandedNode === node.id}
                isAnimated={animatedNodes.has(node.id)}
                onToggle={() => toggleNode(node.id)}
                index={index}
                nodeRef={(el) => { nodeRefs.current[index] = el }}
                labels={{ what: t.roadmap.what, why: t.roadmap.why, next: t.roadmap.next }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface RoadmapCardProps {
  node: RoadmapNode
  isExpanded: boolean
  isAnimated: boolean
  onToggle: () => void
  index: number
  nodeRef: (el: HTMLDivElement | null) => void
  labels: { what: string; why: string; next: string }
}

function RoadmapCard({ node, isExpanded, isAnimated, onToggle, index, nodeRef, labels }: RoadmapCardProps) {
  return (
    <div
      ref={nodeRef}
      className={`ml-14 md:ml-20 transition-all duration-500 relative ${
        isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Node marker */}
      <div
        className={`absolute -left-[2.25rem] md:-left-[2.75rem] top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 ${
          isAnimated
            ? isExpanded
              ? "bg-primary border-primary scale-125"
              : "bg-primary border-primary"
            : "bg-card border-border"
        }`}
        style={{ 
          boxShadow: isAnimated 
            ? isExpanded 
              ? '0 0 16px 4px rgba(133, 76, 173, 0.6)' 
              : '0 0 8px 2px rgba(133, 76, 173, 0.4)'
            : 'none'
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
                <h3 className="text-lg font-semibold text-foreground">{node.title}</h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full border ${statusColors[node.status]}`}
                >
                  {node.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{node.timeframe}</p>
              <p className="text-foreground/90">{node.goal}</p>
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
        <div className="px-6 pb-6 pt-2 ml-0 border-l-2 border-primary/20 mt-2">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-medium text-foreground mb-1">{labels.what}</dt>
              <dd className="text-muted-foreground">{node.what}</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground mb-1">{labels.why}</dt>
              <dd className="text-muted-foreground">{node.why}</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground mb-1">{labels.next}</dt>
              <dd className="text-muted-foreground">{node.next}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
