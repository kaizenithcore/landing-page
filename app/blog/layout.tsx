import type { Metadata } from "next"
import { Fraunces } from "next/font/google"

// Loaded here (not just under /design) so "design"-category posts can use
// the same serif voice as Vision's pages even though /blog lives outside /design.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display-vision",
  display: "swap",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Blog | Kaizenith",
  description:
    "Cómo pensamos y cómo trabajamos en Kaizenith: diseño de marca, desarrollo de software, y el proceso real detrás de los proyectos del portfolio.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Kaizenith",
    description:
      "Cómo pensamos y cómo trabajamos en Kaizenith: diseño de marca, desarrollo de software, y el proceso real detrás de los proyectos del portfolio.",
    type: "website",
    url: "https://kaizenith.es/blog",
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <div className={fraunces.variable}>{children}</div>
}
