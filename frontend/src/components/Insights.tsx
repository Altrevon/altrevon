"use client";

import type { Insight } from "@/lib/api";
import { useI18n } from "@/i18n/locale-context";
import { Reveal } from "./Reveal";

function formatDate(value: string, locale: string) {
  return new Date(value).toLocaleDateString(locale === "zh" ? "zh-CN" : locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function Insights({ items }: { items: Insight[] }) {
  const { t, locale } = useI18n();

  return (
    <section id="insights" className="bg-paper px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-[0.78rem] font-semibold tracking-[0.14em] text-muted uppercase">
              {t.insights.kicker}
            </p>
            <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.12] tracking-[-0.03em] text-ink">
              {t.insights.title}
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden font-semibold whitespace-nowrap text-jade-bright sm:inline"
          >
            {t.insights.viewAll}
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <Reveal key={item.id}>
              <a
                href="#contact"
                className="group block border-t border-[var(--line)] pt-6 md:border-0 md:pt-0"
              >
                <span className="mb-3 inline-block text-[0.75rem] font-semibold tracking-[0.08em] text-muted uppercase">
                  {item.tag}
                </span>
                <h3 className="mb-3 text-[1.15rem] leading-snug font-semibold tracking-[-0.02em] text-ink transition-colors group-hover:text-jade-bright">
                  {item.title}
                </h3>
                <p className="mb-4 text-[0.92rem] leading-relaxed text-muted">{item.excerpt}</p>
                <time className="text-[0.85rem] text-muted/80" dateTime={item.date}>
                  {formatDate(item.date, locale)}
                </time>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
