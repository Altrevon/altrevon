export const locales = ["en", "zh", "es"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  es: "Español",
};

export const defaultLocale: Locale = "en";

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}
