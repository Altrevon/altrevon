import type { Dictionary } from "./dictionaries/en";
import type { Locale } from "./types";

const dictionaries = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  zh: () => import("./dictionaries/zh").then((m) => m.default),
  es: () => import("./dictionaries/es").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
