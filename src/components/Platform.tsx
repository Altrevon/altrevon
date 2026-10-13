"use client";

import type { Solution } from "@/lib/api";
import { useI18n } from "@/i18n/locale-context";
import { Reveal } from "./Reveal";

const icons = [
  <svg key="1" viewBox="0 0 40 40" fill="none" className="h-9 w-9">
    <rect x="6" y="10" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <rect x="22" y="18" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M18 16h4M18 28h4" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  <svg key="2" viewBox="0 0 40 40" fill="none" className="h-9 w-9">
    <circle cx="20" cy="20" r="7" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M20 4v6M20 30v6M4 20h6M30 20h6M8.5 8.5l4.2 4.2M27.3 27.3l4.2 4.2M31.5 8.5l-4.2 4.2M12.7 27.3l-4.2 4.2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>,
  <svg key="3" viewBox="0 0 40 40" fill="none" className="h-9 w-9">
    <path d="M8 28V12l12-6 12 6v16l-12 6-12-6z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 12l12 6 12-6M20 18v16" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
];

export function Platform({ solutions }: { solutions: Solution[] }) {
  const { t } = useI18n();

  return (
    <section id="platform" className="bg-paper px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-[0.78rem] font-semibold tracking-[0.14em] text-muted uppercase">
          {t.platform.kicker}
        </p>
        <h2 className="font-display max-w-2xl text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.12] tracking-[-0.03em] text-ink">
          {t.platform.title}
        </h2>
        <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted">{t.platform.lede}</p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {solutions.map((item, index) => (
            <Reveal key={item.id}>
              <a
                href="#products"
                className="group block h-full border border-[var(--line)] bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--line-strong)] hover:bg-surface-2"
              >
                <span className="mb-5 inline-flex text-jade-bright">{icons[index]}</span>
                <h3 className="mb-2 text-[1.12rem] font-semibold tracking-[-0.02em] text-ink">
                  {item.title}
                </h3>
                <p className="m-0 text-[0.95rem] leading-relaxed text-muted">{item.summary}</p>
                <span className="mt-5 inline-block text-[0.9rem] font-semibold text-jade-bright transition group-hover:translate-x-1">
                  {t.platform.more}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
