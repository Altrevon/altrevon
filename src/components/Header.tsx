"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/locale-context";
import { BrandLogo } from "./BrandLogo";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#platform", label: t.nav.services },
    { href: "/#products", label: t.nav.products },
    { href: "/#solutions", label: t.nav.howItWorks },
    { href: "/#insights", label: t.nav.insights },
    { href: "/careers", label: t.nav.careers },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const resolveHref = (href: string) => {
    if (href.startsWith("/#") && onHome) return href.slice(1);
    return href;
  };

  return (
    <>
      <header
        className={`site-header sticky top-0 z-40 flex items-center justify-between gap-3 px-5 py-3.5 md:px-8 ${
          scrolled ? "is-scrolled" : ""
        }`}
      >
        <BrandLogo href="/" size={34} priority />

        <nav className="hidden items-center gap-5 text-[0.9rem] font-medium lg:flex" aria-label="Primary">
          {links.map((link) => {
            const href = resolveHref(link.href);
            const active = pathname === link.href;

            if (link.href.startsWith("/#") || href.startsWith("#")) {
              return (
                <a
                  key={link.href}
                  href={href}
                  className="text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={link.href}
                href={href}
                className={`transition-colors ${active ? "text-ink" : "text-muted hover:text-ink"}`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="ml-1 flex items-center gap-2">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
          <a
            href={resolveHref("/#contact")}
            className="rounded-lg border border-[var(--line)] bg-surface/70 px-4 py-2 text-ink transition hover:border-jade-bright/40 hover:bg-jade-bright/10"
          >
            {t.nav.speak}
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LocaleSwitcher />
          <ThemeToggle />
          <button
            type="button"
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-30 flex flex-col gap-5 bg-paper px-6 pt-24 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {links.map((link) => {
            const href = resolveHref(link.href);

            if (link.href.startsWith("/#") || href.startsWith("#")) {
              return (
                <a
                  key={link.href}
                  href={href}
                  className="font-display text-3xl tracking-[-0.03em] text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={link.href}
                href={href}
                className="font-display text-3xl tracking-[-0.03em] text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={resolveHref("/#contact")}
            className="mt-2 w-fit rounded-lg bg-jade-bright px-5 py-3 font-semibold text-on-accent"
            onClick={() => setOpen(false)}
          >
            {t.nav.speak}
          </a>
        </div>
      )}
    </>
  );
}
