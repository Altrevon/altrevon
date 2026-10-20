import type { Metadata } from "next";
import Image from "next/image";
import { CareersOpenings } from "@/components/CareersOpenings";
import { SiteShell } from "@/components/SiteShell";
import { getCareers, getCompany } from "@/lib/api";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Nexoryna — open roles in AI systems, blockchain engineering, product, and protocol design.",
  openGraph: {
    title: `Careers | ${siteConfig.name}`,
    description:
      "Join Nexoryna — open roles in AI systems, blockchain engineering, product, and protocol design.",
  },
};

export default async function CareersPage() {
  const [company, careers] = await Promise.all([getCompany(), getCareers()]);

  return (
    <SiteShell company={company}>
      <div className="relative">
        <div className="pointer-events-none absolute top-10 right-[8%] hidden h-56 w-56 opacity-80 lg:block">
          <Image
            src="/images/logo.png"
            alt=""
            fill
            className="object-contain drop-shadow-[0_30px_80px_rgba(45,212,168,0.18)]"
            sizes="224px"
          />
        </div>
        <CareersOpenings data={careers} />
      </div>
    </SiteShell>
  );
}
