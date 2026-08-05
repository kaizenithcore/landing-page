import type { ReactNode } from "react"

interface EyebrowBadgeProps {
  children: ReactNode
  className?: string
}

export function EyebrowBadge({ children, className = "" }: EyebrowBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
      <span className="text-sm font-medium text-primary uppercase tracking-wider">{children}</span>
    </div>
  )
}
