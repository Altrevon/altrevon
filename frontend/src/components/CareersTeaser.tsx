"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/locale-context";
import { Reveal } from "./Reveal";

export function CareersTeaser({ teamSize }: { teamSize: number }) {
  const { t } = useI18n();

  return (
    <section className="border-y border-[var(--line)] bg-surface px-5 py-16 md:px-8 md:py-20">
      <Reveal>
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-3 text-[0.78rem] font-semibold tracking-[0.14em] text-muted uppercase">
              {t.careersTeaser.kicker}
            </p>
            <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.4rem)] leading-[1.15] tracking-[-0.03em] text-ink">
              {t.careersTeaser.title.replace("{n}", String(teamSize))}
            </h2>
            <p className="mt-4 text-muted">{t.careersTeaser.body}</p>
          </div>
          <Link
            href="/careers"
            className="rounded-lg bg-jade-bright px-5 py-3.5 text-[0.95rem] font-semibold text-on-accent transition hover:-translate-y-0.5 hover:brightness-110"
          >
            {t.careersTeaser.cta}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
