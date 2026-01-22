"use client"

import Image from "next/image"
import { useTheme } from "@/lib/theme/theme-context"

export type LogoVariant = "studio" | "labs" | "works"
export type LogoOrientation = "vertical" | "horizontal"
export type LogoTheme = "light" | "dark"

interface LogoProps {
  className?: string
  dontShowWordmark?: boolean
  size?: "sm" | "md" | "lg" | "xl" | "xxl"
  orientation?: LogoOrientation
  variant?: LogoVariant
  forceTheme?: LogoTheme
}

// Logo file naming convention:
// /logos/{variant}-{orientation}-{theme}.png
// e.g., /logos/studio-vertical-dark.png, /logos/labs-horizontal-light.png
function getLogoPath(variant: LogoVariant, orientation: LogoOrientation, theme: LogoTheme, dontShowWordmark: boolean): string {
  if (dontShowWordmark) {
    return `/logos/${orientation}-${theme}.png`
  }
  return `/logos/${variant}-${orientation}-${theme}.png`
}

export function KaizenithLogo({ 
  className = "", 
  dontShowWordmark = false, 
  size = "md", 
  orientation = "vertical",
  variant = "studio",
  forceTheme,
}: LogoProps) {
  const { theme: currentTheme } = useTheme()
  const theme = forceTheme || currentTheme

  const sizes = {
    sm: { width: 100, height: 100 },
    md: { width: 140, height: 140 },
    lg: { width: 180, height: 180 },
    xl: { width: 240, height: 240 },
    xxl: { width: 360, height: 360 },
  }

  const { width, height } = sizes[size]
  const src = getLogoPath(variant, orientation, theme, dontShowWordmark)

  const variantNames: Record<LogoVariant, string> = {
    studio: "Kaizenith Studio",
    labs: "Kaizenith Labs",
    works: "Kaizenith Works",
  }

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={variantNames[variant]}
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  )
}

interface MarkProps {
  className?: string
  size?: number
  orientation?: LogoOrientation
  variant?: LogoVariant
  forceTheme?: LogoTheme
}

export function KaizenithMark({ 
  className = "", 
  size = 60, 
  orientation = "vertical",
  variant = "studio",
  forceTheme,
}: MarkProps) {
  const { theme: currentTheme } = useTheme()
  const theme = forceTheme || currentTheme
  const src = getLogoPath(variant, orientation, theme, false)

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt="Kaizenith"
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  )
}
