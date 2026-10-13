export const siteConfig = {
  name: "Altrevon",
  legalName: "Altrevon",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description:
    "Altrevon builds blockchain & token infrastructure and AI-powered on-chain products — from smart contracts and tokenomics to agents that can act, settle, and prove results on-chain.",
  email: "support@altrevon.com",
  careersEmail: "support@altrevon.com",
  telegram: "@eric_altrevon",
  telegramUrl: "https://t.me/eric_altrevon",
  tagline: "AI systems and blockchain products that ship.",
  teamSize: 50,
  nav: [
    { href: "/#platform", label: "Services" },
    { href: "/#products", label: "Products" },
    { href: "/#solutions", label: "How it works" },
    { href: "/#insights", label: "Insights" },
    { href: "/careers", label: "Careers" },
  ],
  focus: ["Blockchain & Tokens", "AI + Blockchain Products", "Smart Contracts"],
} as const;
