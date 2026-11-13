"use client";

import { useLocale } from "next-intl";
import { sailing } from "@/content/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/system/Reveal";

export function Sailing() {
  const locale = useLocale() as "fr" | "en";

  return (
    <section
      id="sailing"
      data-section="sailing"
      className="relative flex min-h-[85vh] snap-start items-center overflow-hidden px-5 py-24 md:px-12 md:py-28 lg:px-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-accent/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 bottom-16 h-64 w-64 rounded-full bg-accent/20 blur-[110px]"
      />

      <div className="relative mx-auto w-full max-w-content">
        <Reveal>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-soft">
            {sailing.label[locale]}
          </p>
          <h2 className="max-w-3xl text-[clamp(1.85rem,4.5vw,3.25rem)] font-extrabold leading-[1.08] tracking-tight text-ink">
            {sailing.title[locale]}
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted md:text-[15px]">{sailing.body[locale]}</p>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sailing.proofs.map((proof) => (
            <RevealItem key={proof.title.en}>
              <div className="h-full rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 py-4 backdrop-blur transition-colors duration-300 hover:border-accent/35">
                <p className="text-sm font-semibold text-ink">{proof.title[locale]}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{proof.detail[locale]}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-12">
          <Reveal>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent-soft">
              {locale === "fr" ? "Ce que ça apporte au métier" : "What it brings to the work"}
            </h3>
          </Reveal>
          <RevealGroup className="grid gap-4 md:grid-cols-3">
            {sailing.transfers.map((item) => (
              <RevealItem key={item.title.en}>
                <div className="h-full rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-5 py-5 backdrop-blur transition-colors duration-300 hover:border-accent/35">
                  <p className="text-sm font-semibold text-accent">{item.title[locale]}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail[locale]}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
