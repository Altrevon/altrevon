"use client";

import { useI18n } from "@/i18n/locale-context";
import { localeLabels, locales, type Locale } from "@/i18n/types";

export function LocaleSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <label className="inline-flex items-center gap-2">
      <span className="sr-only">{t.language}</span>
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
        className="h-9 rounded-lg border border-[var(--line)] bg-surface px-2 text-[0.8rem] font-medium text-ink outline-none transition hover:border-[var(--line-strong)] focus:border-jade-bright"
        aria-label={t.language}
      >
        {locales.map((code) => (
          <option key={code} value={code}>
            {localeLabels[code]}
          </option>
        ))}
      </select>
    </label>
  );
}
