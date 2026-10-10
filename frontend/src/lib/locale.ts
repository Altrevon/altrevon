import { cookies } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "@/i18n/types";

export async function getRequestLocale(): Promise<Locale> {
  const jar = await cookies();
  const value = jar.get("nexora-locale")?.value;
  return isLocale(value) ? value : defaultLocale;
}
