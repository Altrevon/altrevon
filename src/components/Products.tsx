"use client";

import type { Product } from "@/lib/api";
import { useI18n } from "@/i18n/locale-context";
import { Reveal } from "./Reveal";

export function Products({ items }: { items: Product[] }) {
  const { t } = useI18n();
  const blockchain = items.filter((item) => item.category === "Blockchain & tokens");
  const aiChain = items.filter((item) => item.category === "AI + blockchain");

  return (
    <section id="products" className="bg-paper px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-[0.78rem] font-semibold tracking-[0.14em] text-muted uppercase">
          {t.products.kicker}
        </p>
        <h2 className="font-display max-w-3xl text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.12] tracking-[-0.03em] text-ink">
          {t.products.title}
        </h2>
        <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted">{t.products.lede}</p>

        <div className="mt-14 space-y-16">
          <ProductGroup
            label={t.products.chainLabel}
            title={t.products.chainTitle}
            intro={t.products.chainIntro}
            items={blockchain}
          />
          <ProductGroup
            label={t.products.aiLabel}
            title={t.products.aiTitle}
            intro={t.products.aiIntro}
            items={aiChain}
          />
        </div>
      </div>
    </section>
  );
}

function ProductGroup({
  label,
  title,
  intro,
  items,
}: {
  label: string;
  title: string;
  intro: string;
  items: Product[];
}) {
  return (
    <div>
      <p className="mb-2 text-[0.78rem] font-semibold tracking-[0.12em] text-jade-bright uppercase">
        {label}
      </p>
      <h3 className="font-display text-[clamp(1.4rem,2.5vw,1.85rem)] tracking-[-0.03em] text-ink">
        {title}
      </h3>
      <p className="mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-muted">{intro}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <Reveal key={item.id}>
            <article className="flex h-full flex-col border border-[var(--line)] bg-surface p-6">
              <h4 className="text-[1.08rem] font-semibold tracking-[-0.02em] text-ink">
                {item.title}
              </h4>
              <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-muted">
                {item.explanation}
              </p>
              <ul className="mt-5 space-y-2 border-t border-[var(--line)] pt-4">
                {item.examples.map((example) => (
                  <li
                    key={example}
                    className="flex gap-2 text-[0.85rem] text-ink-soft before:mt-[0.55em] before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-jade-bright before:content-['']"
                  >
                    {example}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
