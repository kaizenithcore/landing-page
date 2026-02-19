import React from "react"
import type { Metadata } from "next"
import CTAsGameDevLayout from "./layout-client"

export const metadata: Metadata = {
  title: "50 CTAs para Videojuegos y Estudios Indie | Kaizenith Lab",
  description: "Llamadas a la acción específicas para creadores de contenido de videojuegos y estudios indie.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <CTAsGameDevLayout>{children}</CTAsGameDevLayout>
}
