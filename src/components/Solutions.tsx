"use client";

import Image from "next/image";
import type { Solution } from "@/lib/api";
import { useI18n } from "@/i18n/locale-context";
import { Reveal } from "./Reveal";

const visuals = [
  {
    src: "/images/solution-chain.jpg",
    alt: "Blockchain and token infrastructure visualization",
  },
  {
    src: "/images/solution-ai.jpg",
    alt: "AI and blockchain product systems visualization",
  },
  {
    src: "/images/solution-data.jpg",
    alt: "End-to-end product delivery and analytics visualization",
  },
];

export function Solutions({ solutions }: { solutions: Solution[] }) {
  const { t } = useI18n();

  return (
    <section id="solutions" className="bg-surface px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-[0.78rem] font-semibold tracking-[0.14em] text-muted uppercase">
          {t.solutions.kicker}
        </p>
        <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.12] tracking-[-0.03em] text-ink">
          {t.solutions.title}
        </h2>
        <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted">{t.solutions.lede}</p>

        <div className="mt-14 space-y-16 md:space-y-20">
          {solutions.map((item, index) => (
            <Reveal key={item.id}>
              <article
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <h3 className="font-display text-[clamp(1.4rem,2.5vw,1.75rem)] tracking-[-0.03em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted">{item.body}</p>
                  <a
                    href="#products"
                    className="mt-5 inline-block font-semibold text-jade-bright transition hover:text-jade"
                  >
                    {t.solutions.more}
                  </a>
                </div>
                <div className="img-frame relative aspect-[4/3] w-full">
                  <Image
                    src={visuals[index].src}
                    alt={visuals[index].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
