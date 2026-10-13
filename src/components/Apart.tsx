"use client";

import type { Differentiator } from "@/lib/api";
import { useI18n } from "@/i18n/locale-context";
import { Reveal } from "./Reveal";

export function Apart({ items }: { items: Differentiator[] }) {
  const { t } = useI18n();

  return (
    <section id="apart" className="bg-paper px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-[0.78rem] font-semibold tracking-[0.14em] text-muted uppercase">
          {t.apart.kicker}
        </p>
        <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.12] tracking-[-0.03em] text-ink">
          {t.apart.title}
        </h2>

        <div className="mt-10 grid gap-x-10 md:grid-cols-2">
          {items.map((item) => (
            <Reveal key={item.title}>
              <div className="border-t border-[var(--line)] py-7">
                <h3 className="mb-2 text-[1.1rem] font-semibold tracking-[-0.02em] text-ink">
                  {item.title}
                </h3>
                <p className="m-0 text-[0.95rem] leading-relaxed text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
