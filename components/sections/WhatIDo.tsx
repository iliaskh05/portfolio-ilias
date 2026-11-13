"use client";

import { useLocale } from "next-intl";
import { services } from "@/content/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/system/Reveal";

export function WhatIDo() {
  const locale = useLocale() as "fr" | "en";

  return (
    <section
      id="services"
      data-section="what-i-do"
      className="relative flex min-h-[80vh] snap-start items-center overflow-hidden px-6 py-28 md:px-16 md:pl-24 lg:px-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-1/3 h-80 w-80 rounded-full bg-accent/20 blur-[110px]"
      />

      <div className="relative mx-auto w-full max-w-content">
        <Reveal>
          <h2 className="mb-10 font-extrabold uppercase leading-[0.92] tracking-tight md:mb-14">
            {locale === "fr" ? (
              <>
                <span className="block text-[clamp(2.2rem,6vw,4.8rem)] text-ink">CE QUE</span>
                <span className="block text-[clamp(2.2rem,6vw,4.8rem)] text-accent-soft">JE FAIS</span>
              </>
            ) : (
              <>
                <span className="block text-[clamp(2.4rem,6.5vw,5rem)] text-ink">WHAT</span>
                <span className="block text-[clamp(2.4rem,6.5vw,5rem)] text-accent-soft">I DO</span>
              </>
            )}
          </h2>
        </Reveal>

        <RevealGroup className="grid gap-6 md:grid-cols-2 md:gap-8">
          {services.map((service) => (
            <RevealItem key={service.id}>
              <div className="group relative h-full overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] p-6 transition-all duration-500 hover:border-accent/35 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] md:p-8">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <h3 className="text-2xl font-bold tracking-wide text-ink md:text-3xl">{service.title[locale]}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">{service.subtitle[locale]}</p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-2 md:text-[15px]">
                  {service.body[locale]}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
