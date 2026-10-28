import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kaizenith Works | Software that works",
  description:
    "Kaizenith Works builds custom software for mid-sized companies and looks after small businesses' digital presence: website, maintenance and automations.",
  alternates: {
    canonical: "/works",
  },
  openGraph: {
    title: "Kaizenith Works | Software that works",
    description:
      "Kaizenith Works builds custom software for mid-sized companies and looks after small businesses' digital presence: website, maintenance and automations.",
    type: "website",
    url: "https://kaizenith.es/works",
  },
}

export default function WorksLayout({ children }: { children: React.ReactNode }) {
  return children
}
