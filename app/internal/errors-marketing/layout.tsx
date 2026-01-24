import React from "react"
import type { Metadata } from "next"
import Providers from "@/components/Providers"

export const metadata: Metadata = {
  title: "7 errores que frenan tu crecimiento indie | Kaizenith Lab",
  description: "Guía práctica y narrativa de marketing para desarrolladores indie. Errores reales, ejemplos documentados, soluciones aplicables.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ErrorsMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Providers>{children}</Providers>
}
