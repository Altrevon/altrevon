"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Dictionary } from "./dictionaries/en";
import { defaultLocale, isLocale, type Locale } from "./types";

type LocaleContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const dictionaries: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  en: () => import("./dictionaries/en"),
  zh: () => import("./dictionaries/zh"),
  es: () => import("./dictionaries/es"),
};

export function LocaleProvider({
  children,
  locale: initialLocale,
  dictionary: initialDictionary,
}: {
  children: ReactNode;
  locale: Locale;
  dictionary: Dictionary;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [dictionary, setDictionary] = useState<Dictionary>(initialDictionary);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("nexora-locale");
      if (isLocale(stored) && stored !== locale) {
        void dictionaries[stored]().then((mod) => {
          setLocaleState(stored);
          setDictionary(mod.default);
          document.documentElement.lang = stored === "zh" ? "zh-CN" : stored;
        });
      }
    } catch {
      /* ignore */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLocale = useCallback(async (next: Locale) => {
    if (!isLocale(next)) return;
    const mod = await dictionaries[next]();
    setLocaleState(next);
    setDictionary(mod.default);
    document.documentElement.lang = next === "zh" ? "zh-CN" : next;
    try {
      localStorage.setItem("nexora-locale", next);
      document.cookie = `nexora-locale=${next}; path=/; max-age=31536000; samesite=lax`;
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(
    () => ({
      locale,
      dictionary,
      setLocale,
      t: dictionary,
    }),
    [locale, dictionary, setLocale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useI18n must be used within LocaleProvider");
  }
  return ctx;
}

export function readStoredLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  try {
    const stored = localStorage.getItem("nexora-locale");
    if (isLocale(stored)) return stored;
  } catch {
    /* ignore */
  }
  return defaultLocale;
}
