"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { LocaleProvider } from "@/i18n/locale-context";
import type { Locale } from "@/i18n/types";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function AppProviders({
  children,
  locale,
  dictionary,
}: {
  children: ReactNode;
  locale: Locale;
  dictionary: Dictionary;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="nexoryna-theme">
      <LocaleProvider locale={locale} dictionary={dictionary}>
        {children}
      </LocaleProvider>
    </ThemeProvider>
  );
}
