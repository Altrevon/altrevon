"use client";

import type { CareersData } from "@/lib/api";
import { localizeCareers } from "@/i18n/careers";
import { useI18n } from "@/i18n/locale-context";
import { siteConfig } from "@/lib/site";
import { Reveal } from "./Reveal";

export function CareersOpenings({ data }: { data: CareersData }) {
  const { t, locale } = useI18n();
  const careers = localizeCareers(data, locale);

  return (
    <>
      <section className="relative overflow-hidden px-5 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_0%,rgba(45,212,168,0.12),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl">
          <p className="mb-4 text-[0.78rem] font-semibold tracking-[0.16em] text-jade-bright uppercase">
            {t.careersPage.kicker}
          </p>
          <h1 className="font-display max-w-3xl text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.05] tracking-[-0.04em] text-ink">
            {careers.intro.headline}
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-muted">
            {careers.intro.lede}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#openings"
              className="rounded-lg bg-jade-bright px-5 py-3.5 text-[0.95rem] font-semibold text-on-accent transition hover:-translate-y-0.5 hover:brightness-110"
            >
              {t.careersPage.seeRoles}
            </a>
            <a
              href="/#contact"
              className="rounded-lg border border-[var(--line)] bg-surface/70 px-5 py-3.5 text-[0.95rem] font-semibold text-ink transition hover:border-jade-bright/40"
            >
              {t.careersPage.talk}
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-surface px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-[0.78rem] font-semibold tracking-[0.14em] text-muted uppercase">
            {t.careersPage.whyJoin}
          </p>
          <h2 className="font-display mb-10 text-[clamp(1.7rem,3.5vw,2.3rem)] tracking-[-0.03em] text-ink">
            {t.careersPage.howWeWork}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {careers.benefits.map((item) => (
              <Reveal key={item.title}>
                <div className="border-t border-[var(--line)] pt-6">
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

      <section id="openings" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-[0.78rem] font-semibold tracking-[0.14em] text-muted uppercase">
            {t.careersPage.openRoles}
          </p>
          <h2 className="font-display mb-10 text-[clamp(1.7rem,3.5vw,2.3rem)] tracking-[-0.03em] text-ink">
            {t.careersPage.currentOpenings}
          </h2>

          <div className="space-y-0">
            {careers.openings.map((role) => (
              <Reveal key={role.id}>
                <article className="group grid gap-5 border-t border-[var(--line)] py-8 last:border-b lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.78rem] font-semibold tracking-[0.06em] text-muted uppercase">
                      <span>{role.team}</span>
                      <span className="text-ink/20">·</span>
                      <span>{role.type}</span>
                      <span className="text-ink/20">·</span>
                      <span>{role.location}</span>
                    </div>
                    <h3 className="font-display text-[1.45rem] tracking-[-0.03em] text-ink transition group-hover:text-jade-bright">
                      {role.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-muted">
                      {role.summary}
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-lg border border-[var(--line)] bg-surface px-4 py-3">
                        <p className="m-0 text-[0.72rem] font-semibold tracking-[0.08em] text-muted uppercase">
                          {t.careersPage.responsibility}
                        </p>
                        <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-soft">
                          {role.responsibility}
                        </p>
                      </div>
                      <div className="rounded-lg border border-[var(--line)] bg-surface px-4 py-3">
                        <p className="m-0 text-[0.72rem] font-semibold tracking-[0.08em] text-muted uppercase">
                          {t.careersPage.idealBudget}
                        </p>
                        <p className="mt-1.5 text-[0.95rem] font-semibold text-jade-bright">
                          {role.budget}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:justify-self-end lg:pt-8">
                    <a
                      href={`mailto:${siteConfig.careersEmail}?subject=${encodeURIComponent(
                        `Application: ${role.title}`
                      )}`}
                      className="inline-flex rounded-lg border border-[var(--line)] bg-surface/70 px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-jade-bright/40 hover:bg-jade-bright/10"
                    >
                      {t.careersPage.apply}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 border border-[var(--line)] bg-surface px-6 py-8 md:px-8">
            <h3 className="font-display text-[1.4rem] tracking-[-0.03em] text-ink">
              {t.careersPage.noRoleTitle}
            </h3>
            <p className="mt-3 max-w-2xl text-muted">{t.careersPage.noRoleBody}</p>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
              <a
                href={`mailto:${siteConfig.careersEmail}`}
                className="inline-block font-semibold text-jade-bright hover:text-jade"
              >
                {siteConfig.careersEmail} →
              </a>
              <a
                href={siteConfig.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold text-jade-bright hover:text-jade"
              >
                Telegram {siteConfig.telegram} →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
