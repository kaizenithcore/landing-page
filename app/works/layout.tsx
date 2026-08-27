import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kaizenith Works | Software that works",
  description:
    "Kaizenith Works builds SaaS products and custom applications for businesses and public administrations: Zarpe, Enlace, Cronista, Serena, Nexa, and more.",
  openGraph: {
    title: "Kaizenith Works | Software that works",
    description:
      "Kaizenith Works builds SaaS products and custom applications for businesses and public administrations: Zarpe, Enlace, Cronista, Serena, Nexa, and more.",
    type: "website",
  },
}

export default function WorksLayout({ children }: { children: React.ReactNode }) {
  return children
}
