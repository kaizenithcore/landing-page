import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kaizenith Works | Software that works",
  description:
    "Kaizenith Works builds SaaS products and custom applications for businesses and public administrations: Kaizenith Workspace, Entrelazo, Armazón, and more.",
  alternates: {
    canonical: "/works",
  },
  openGraph: {
    title: "Kaizenith Works | Software that works",
    description:
      "Kaizenith Works builds SaaS products and custom applications for businesses and public administrations: Kaizenith Workspace, Entrelazo, Armazón, and more.",
    type: "website",
    url: "https://kaizenith.es/works",
  },
}

export default function WorksLayout({ children }: { children: React.ReactNode }) {
  return children
}
