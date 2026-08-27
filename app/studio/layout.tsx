import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kaizenith Studio | We build in public",
  description:
    "Kaizenith Studio documents game development in public | build logs, real numbers, and early access to our games, including Ping Pong Mate.",
  openGraph: {
    title: "Kaizenith Studio | We build in public",
    description:
      "Kaizenith Studio documents game development in public | build logs, real numbers, and early access to our games, including Ping Pong Mate.",
    type: "website",
  },
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children
}
