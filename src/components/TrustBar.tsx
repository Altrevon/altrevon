"use client";

import { useI18n } from "@/i18n/locale-context";

export function TrustBar() {
  const { t } = useI18n();

  return (
    <div className="flex items-center justify-center gap-2.5 border-b border-[var(--line)] bg-[var(--trust-bg)] px-4 py-2.5 text-center text-[0.8rem] text-muted">
      <span className="inline-flex text-jade-bright" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1.5l5 2v4.2c0 3.1-2.1 5.9-5 6.8-2.9-.9-5-3.7-5-6.8V3.5l5-2z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M5.5 8l1.8 1.8L10.8 6"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <p className="m-0 max-w-3xl">{t.trustBar}</p>
    </div>
  );
}
