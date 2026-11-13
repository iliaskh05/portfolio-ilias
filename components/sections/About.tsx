"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { bio, site } from "@/content/data";

export function About() {
  const locale = useLocale() as "fr" | "en";

  return (
    <section
      id="me"
      data-section="about"
      className="relative flex min-h-screen snap-start items-center overflow-hidden px-6 py-28 md:px-16 md:pl-24 lg:px-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-accent/15 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full bg-accent/20 blur-[100px]"
      />

      <div className="relative mx-auto grid w-full max-w-content items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative mx-auto h-[420px] w-full max-w-md lg:h-[560px]">
          <div aria-hidden className="absolute inset-x-8 bottom-8 top-20 rounded-full bg-accent/30 blur-[80px]" />
          <Image
            src={site.avatarAbout}
            alt={locale === "fr" ? "Avatar Ilias — about" : "Ilias avatar — about"}
            fill
            sizes="(max-width:1024px) 90vw, 440px"
            className="object-cover object-[50%_20%]"
            style={{
              maskImage:
                "radial-gradient(ellipse 70% 80% at 50% 45%, #000 55%, transparent 88%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 80% at 50% 45%, #000 55%, transparent 88%)",
            }}
          />
        </div>

        <div className="max-w-md lg:justify-self-end">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-accent-deep md:text-base">
            {locale === "fr" ? "À propos" : "About me"}
          </h2>
          <p className="text-[15px] leading-[1.75] text-muted md:text-base">{bio[locale]}</p>
        </div>
      </div>
    </section>
  );
}
