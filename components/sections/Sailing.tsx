"use client";

import Image from "next/image";
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
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-16">
          <Reveal>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-soft">
              {sailing.label[locale]}
            </p>
            <h2 className="max-w-xl text-[clamp(1.85rem,4.5vw,3.25rem)] font-extrabold leading-[1.08] tracking-tight text-ink">
              {sailing.title[locale]}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted md:text-[15px]">{sailing.body[locale]}</p>
          </Reveal>

          <Reveal delay={0.06} className="relative mx-auto w-full max-w-[540px] lg:mx-0 lg:max-w-none">
            <div className="sailing-photo relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] md:aspect-[5/4] md:rounded-[1.75rem]">
              <Image
                src={sailing.image}
                alt={sailing.imageAlt[locale]}
                fill
                sizes="(max-width:1024px) 92vw, 540px"
                className="object-cover object-[38%_40%] scale-[1.06]"
                priority
              />

              {/* Edge fades — merge photo into page atmosphere */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `
                    linear-gradient(to right, var(--bg) 0%, transparent 18%, transparent 78%, color-mix(in srgb, var(--bg) 55%, transparent) 100%),
                    linear-gradient(to top, var(--bg) 0%, transparent 22%, transparent 82%, color-mix(in srgb, var(--bg) 35%, transparent) 100%),
                    linear-gradient(135deg, color-mix(in srgb, var(--accent) 18%, transparent) 0%, transparent 42%)
                  `,
                }}
              />

              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[inherit] border border-accent/25"
              />

              <span className="absolute bottom-4 left-4 z-10 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md md:bottom-5 md:left-5">
                {sailing.imageCaption[locale]}
              </span>
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-6 -right-6 h-36 w-36 rounded-full bg-accent/25 blur-[70px] md:-bottom-8 md:-right-8"
            />
          </Reveal>
        </div>

        <RevealGroup className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
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
