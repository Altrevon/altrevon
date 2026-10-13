import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    logo: `${siteConfig.url}/images/logo.png`,
    sameAs: [siteConfig.telegramUrl],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: siteConfig.teamSize,
    },
    knowsAbout: [
      "Blockchain",
      "Tokenomics",
      "Smart Contracts",
      "Artificial Intelligence",
      "AI Agents",
      "RWA Tokenization",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
