import { Apart } from "@/components/Apart";
import { CareersTeaser } from "@/components/CareersTeaser";
import { ContactForm } from "@/components/ContactForm";
import { FocusStrip } from "@/components/FocusStrip";
import { Hero } from "@/components/Hero";
import { Insights } from "@/components/Insights";
import { Platform } from "@/components/Platform";
import { Products } from "@/components/Products";
import { SiteShell } from "@/components/SiteShell";
import { Solutions } from "@/components/Solutions";
import {
  getCompany,
  getDifferentiators,
  getInsights,
  getProducts,
  getSolutions,
} from "@/lib/api";

export default async function Home() {
  const [company, solutions, products, differentiators, insights] = await Promise.all([
    getCompany(),
    getSolutions(),
    getProducts(),
    getDifferentiators(),
    getInsights(),
  ]);

  return (
    <SiteShell company={company}>
      <Hero company={company} />
      <FocusStrip />
      <Platform solutions={solutions} />
      <Products items={products} />
      <Solutions solutions={solutions} />
      <Apart items={differentiators} />
      <Insights items={insights} />
      <CareersTeaser teamSize={company.teamSize} />
      <ContactForm />
    </SiteShell>
  );
}
