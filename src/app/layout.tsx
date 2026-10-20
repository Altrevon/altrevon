import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Sora } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { JsonLd } from "@/components/JsonLd";
import { getDictionary } from "@/i18n/get-dictionary";
import { defaultLocale } from "@/i18n/types";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | AI & Blockchain Products`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Nexoryna",
    "blockchain",
    "tokenomics",
    "smart contracts",
    "AI blockchain",
    "RWA tokenization",
    "on-chain AI agents",
    "Web3 development",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | AI & Blockchain Products`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/hero-ai-chain.jpg",
        width: 1200,
        height: 630,
        alt: "Nexoryna — AI and blockchain infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | AI & Blockchain Products`,
    description: siteConfig.description,
    images: ["/images/hero-ai-chain.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#070f0d" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const dictionary = await getDictionary(defaultLocale);

  return (
    <html
      lang="en"
      className={`dark ${sora.variable} ${instrument.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <AppProviders locale={defaultLocale} dictionary={dictionary}>
          <JsonLd />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
