import type { Metadata } from "next"
import { Fraunces } from "next/font/google"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display-vision",
  display: "swap",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Kaizenith Vision | Brands with character",
  description:
    "Kaizenith Vision is Kaizenith's design studio: logo design, branding, web design, and marketing for projects that want to stand out for what they are.",
  alternates: {
    canonical: "/design",
  },
  openGraph: {
    title: "Kaizenith Vision | Brands with character",
    description:
      "Kaizenith Vision is Kaizenith's design studio: logo design, branding, web design, and marketing for projects that want to stand out for what they are.",
    type: "website",
    url: "https://kaizenith.es/design",
  },
}

export default function DesignLayout({ children }: { children: React.ReactNode }) {
  return <div className={fraunces.variable}>{children}</div>
}
