"use client";

import React from "react";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { ThemeProvider } from "@/components/kaizenith/theme-provider";

export default function CTAsGameDevLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <LocaleProvider>{children}</LocaleProvider>
    </ThemeProvider>
  );
}
