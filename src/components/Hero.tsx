"use client";

import Image from "next/image";
import type { Company } from "@/lib/api";
import { useI18n } from "@/i18n/locale-context";

export function Hero({ company }: { company: Company }) {
  const { t } = useI18n();

  return (
    <section className="hero-atmosphere grain relative min-h-[min(94vh,920px)] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-ai-chain.jpg"
          alt="Abstract visualization of AI neural networks and blockchain infrastructure"
          fill
          priority
          className="object-cover object-center opacity-45 dark:opacity-55"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-end gap-12 px-5 pt-16 pb-20 md:px-8 md:pt-24 md:pb-24 lg:min-h-[min(94vh,920px)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="animate-rise max-w-xl">
          <p className="mb-4 text-[0.78rem] font-semibold tracking-[0.16em] text-jade-bright uppercase">
            {t.hero.eyebrow}
          </p>
          <h1 className="font-display text-[clamp(3.6rem,11vw,6.8rem)] leading-[0.92] font-normal tracking-[-0.04em] text-ink">
            {company.name}
          </h1>
          <p className="font-display mt-5 text-[clamp(1.35rem,3vw,1.9rem)] leading-snug tracking-[-0.02em] text-ink-soft">
            {company.tagline}
          </p>
          <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-muted">
            {company.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-lg bg-jade-bright px-5 py-3.5 text-[0.95rem] font-semibold text-on-accent shadow-[0_14px_36px_rgba(45,212,168,0.22)] transition hover:-translate-y-0.5 hover:brightness-110"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#solutions"
              className="rounded-lg border border-[var(--line)] bg-surface/70 px-5 py-3.5 text-[0.95rem] font-semibold text-ink backdrop-blur-sm transition hover:border-jade-bright/40 hover:bg-surface"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div
          className="animate-rise-delay relative mx-auto hidden aspect-square w-full max-w-[420px] lg:block"
          aria-hidden="true"
        >
          <div className="orbit-ring orbit-ring-dashed absolute inset-[8%]" />
          <div className="orbit-ring orbit-ring-soft absolute inset-[20%]" />
          <div className="orbit-ring absolute inset-[34%] border-jade-bright/35" />
          <div className="animate-core absolute inset-[38%] grid place-items-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#5dffc2,#2dd4a8_48%,#0f6b5c)]">
            <span className="font-display text-[clamp(1.3rem,4vw,1.9rem)] tracking-[-0.04em] text-on-accent">
              CN
            </span>
          </div>
          <Node className="top-[12%] left-[42%]" label="AI" delay="0s" />
          <Node className="top-[48%] right-[4%]" label="Chain" delay="0.5s" />
          <Node className="bottom-[14%] left-[26%]" label="Data" delay="1s" />
          <Node className="top-[28%] left-[6%]" label="Secure" delay="1.4s" />
        </div>
      </div>
    </section>
  );
}

function Node({
  className,
  label,
  delay,
}: {
  className: string;
  label: string;
  delay: string;
}) {
  return (
    <span
      className={`animate-float absolute rounded-md border border-[var(--line)] bg-surface/90 px-3 py-1.5 text-[0.72rem] font-semibold text-jade-bright shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-md ${className}`}
      style={{ animationDelay: delay }}
    >
      {label}
    </span>
  );
}
