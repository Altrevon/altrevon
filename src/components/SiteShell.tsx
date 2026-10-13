"use client";

import type { ReactNode } from "react";
import type { Company } from "@/lib/api";
import { useI18n } from "@/i18n/locale-context";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TrustBar } from "./TrustBar";

export function SiteShell({
  company,
  children,
}: {
  company: Company;
  children: ReactNode;
}) {
  const { t } = useI18n();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-jade-bright focus:px-4 focus:py-2 focus:text-on-accent"
      >
        {t.skip}
      </a>
      <div id="top">
        <TrustBar />
        <Header />
      </div>
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer company={company} />
    </>
  );
}
