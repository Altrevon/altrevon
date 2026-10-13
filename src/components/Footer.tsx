"use client";

import Link from "next/link";
import type { Company } from "@/lib/api";
import { useI18n } from "@/i18n/locale-context";
import { siteConfig } from "@/lib/site";
import { BrandLogo } from "./BrandLogo";

export function Footer({ company }: { company: Company }) {
  const { t } = useI18n();

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--footer-bg)] px-5 pt-14 pb-8 text-muted md:px-8">
      <div className="mx-auto mb-10 grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_1.4fr]">
        <div>
          <BrandLogo href="/" size={34} />
          <p className="mt-4 max-w-sm text-[0.92rem] leading-relaxed text-muted">
            {company.tagline}{" "}
            {t.footer.blurb.replace("{n}", String(company.teamSize))}
          </p>
          <div className="mt-4 flex flex-col gap-1.5 text-[0.92rem] font-medium">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-jade-bright hover:text-jade"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-jade-bright hover:text-jade"
            >
              Telegram {siteConfig.telegram}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          <div>
            <h4 className="mb-3 text-[0.78rem] tracking-[0.08em] text-muted uppercase">
              {t.footer.products}
            </h4>
            <Link href="/#products" className="mb-2 block text-[0.92rem] hover:text-ink">
              {t.footer.tokens}
            </Link>
            <Link href="/#products" className="mb-2 block text-[0.92rem] hover:text-ink">
              {t.footer.aiChain}
            </Link>
            <Link href="/#products" className="mb-2 block text-[0.92rem] hover:text-ink">
              {t.footer.rwa}
            </Link>
          </div>
          <div>
            <h4 className="mb-3 text-[0.78rem] tracking-[0.08em] text-muted uppercase">
              {t.footer.company}
            </h4>
            <Link href="/#apart" className="mb-2 block text-[0.92rem] hover:text-ink">
              {t.footer.about}
            </Link>
            <Link href="/careers" className="mb-2 block text-[0.92rem] hover:text-ink">
              {t.footer.careers}
            </Link>
            <Link href="/#insights" className="mb-2 block text-[0.92rem] hover:text-ink">
              {t.footer.insights}
            </Link>
            <Link href="/#contact" className="mb-2 block text-[0.92rem] hover:text-ink">
              {t.footer.contact}
            </Link>
          </div>
          <div>
            <h4 className="mb-3 text-[0.78rem] tracking-[0.08em] text-muted uppercase">
              {t.footer.focus}
            </h4>
            {(company.focus.length ? company.focus : siteConfig.focus).map((item) => (
              <span key={item} className="mb-2 block text-[0.92rem]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-6 text-sm">
        <p className="m-0">
          © 2026 {company.name}. {t.footer.rights}
        </p>
        <div className="flex gap-5">
          <Link href="/#contact" className="hover:text-ink">
            {t.footer.privacy}
          </Link>
          <Link href="/#contact" className="hover:text-ink">
            {t.footer.terms}
          </Link>
        </div>
      </div>
    </footer>
  );
}
