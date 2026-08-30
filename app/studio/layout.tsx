import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kaizenith Studio | We build in public",
  description:
    "Kaizenith Studio documents game development in public | build logs, real numbers, and early access to our games, including Ping Pong Mate.",
  alternates: {
    canonical: "/studio",
  },
  openGraph: {
    title: "Kaizenith Studio | We build in public",
    description:
      "Kaizenith Studio documents game development in public | build logs, real numbers, and early access to our games, including Ping Pong Mate.",
    type: "website",
    url: "https://kaizenith.es/studio",
  },
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children
}
