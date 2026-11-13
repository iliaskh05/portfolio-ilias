"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { services, site } from "@/content/data";

export function WhatIDo() {
  const locale = useLocale() as "fr" | "en";

  return (
    <section
      id="services"
      data-section="what-i-do"
      className="relative flex min-h-screen snap-start items-center overflow-hidden px-6 py-28 md:px-16 md:pl-24 lg:px-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-1/3 h-80 w-80 rounded-full bg-accent/20 blur-[110px]"
      />

      <div className="relative mx-auto grid w-full max-w-content items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative">
          <h2 className="mb-6 font-extrabold uppercase leading-[0.9] tracking-tight">
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
          <div className="relative mx-auto h-[320px] w-full max-w-md lg:h-[440px]">
            <Image
              src={site.avatarWork}
              alt={locale === "fr" ? "Avatar Ilias au bureau" : "Ilias avatar at desk"}
              fill
              sizes="(max-width:1024px) 90vw, 420px"
              className="object-contain object-bottom"
            />
          </div>
        </div>

        <div className="relative border border-dashed border-[var(--line)] p-6 md:p-8">
          <span aria-hidden className="absolute -left-px -top-px h-3 w-3 border-l border-t border-ink" />
          <span aria-hidden className="absolute -right-px -top-px h-3 w-3 border-r border-t border-ink" />
          <span aria-hidden className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-ink" />
          <span aria-hidden className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-ink" />

          {services.map((service, i) => (
            <div
              key={service.id}
              className={i > 0 ? "mt-8 border-t border-dashed border-[var(--line)] pt-8" : ""}
            >
              <h3 className="text-2xl font-bold tracking-wide text-ink md:text-3xl">{service.title[locale]}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">{service.subtitle[locale]}</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-2 md:text-[15px]">
                {service.body[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
