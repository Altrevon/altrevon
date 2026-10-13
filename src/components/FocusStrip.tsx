"use client";

import { useI18n } from "@/i18n/locale-context";

export function FocusStrip() {
  const { t } = useI18n();

  return (
    <section className="border-y border-[var(--line)] bg-surface px-5 py-10 text-center md:px-8">
      <p className="mb-5 text-[0.9rem] text-muted">{t.focus.label}</p>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[0.92rem] font-semibold tracking-[-0.01em] text-ink-soft/80">
        {t.focus.items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
