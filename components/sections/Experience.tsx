"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { education, experience, type Cap } from "@/content/data";
import { getGsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";

const statusLabel = {
  shipped: { fr: "Livré", en: "Shipped" },
  ongoing: { fr: "En cours", en: "Ongoing" },
  next: { fr: "Prochain", en: "Next" },
} as const;

function TimelineBlock({
  title,
  items,
  locale,
}: {
  title: string;
  items: Cap[];
  locale: "fr" | "en";
}) {
  return (
    <div className="relative">
      <div className="mb-7 flex items-center gap-3 md:mb-10">
        <h3 className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-soft">
          {title}
        </h3>
        <span className="h-px flex-1 bg-gradient-to-r from-[var(--line)] to-transparent" />
      </div>

      <ul className="relative space-y-0 border-l border-[var(--line)] pl-5 sm:pl-6 md:border-l md:pl-8">
        {items.map((cap) => (
          <li key={cap.id} data-cap className="relative pb-8 last:pb-0 md:pb-11">
            <span
              aria-hidden
              className="absolute -left-[1.41rem] top-1.5 h-2.5 w-2.5 rounded-full border border-accent/80 bg-bg shadow-[0_0_12px_var(--accent-glow)] sm:-left-[1.66rem] md:-left-[2.16rem]"
            />

            <div className="flex flex-wrap items-center gap-2 gap-y-2">
              <span className="text-sm font-bold tracking-tight text-ink md:text-base">
                {cap.year[locale]}
              </span>
              <span className="rounded-full border border-[var(--line)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-2">
                {statusLabel[cap.status][locale]}
              </span>
            </div>

            <h4 className="mt-2 text-base font-semibold leading-snug text-ink md:text-xl">
              {cap.title[locale]}
            </h4>

            {cap.company ? (
              <p className="mt-1 text-sm text-accent">
                {cap.url ? (
                  <a
                    href={cap.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 transition-colors hover:text-accent-soft hover:underline"
                  >
                    {cap.company[locale]}
                  </a>
                ) : (
                  cap.company[locale]
                )}
              </p>
            ) : null}

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-[15px]">
              {cap.detail[locale]}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  const locale = useLocale() as "fr" | "en";
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const root = rootRef.current;
    if (!root) return;
    const { gsap } = getGsap();

    const items = root.querySelectorAll("[data-cap]");
    const reveals = gsap.fromTo(
      items,
      { opacity: 0.2, y: 28 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.06,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
          end: "center center",
          scrub: 0.75,
        },
      }
    );

    return () => {
      reveals.scrollTrigger?.kill();
      reveals.kill();
    };
  }, []);

  return (
    <section
      id="experience"
      data-section="experience"
      ref={rootRef}
      className="relative min-h-screen snap-start px-5 py-20 sm:px-6 md:px-16 md:py-28 md:pl-24 lg:px-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-accent/15 blur-[100px]"
      />

      <h2 className="mb-12 text-center text-[clamp(1.85rem,5vw,3.5rem)] font-semibold tracking-tight text-ink-soft md:mb-20">
        {locale === "fr" ? "Mon parcours & " : "My path & "}
        <span className="text-gradient-lilac">{locale === "fr" ? "expérience" : "experience"}</span>
      </h2>

      <div className="mx-auto flex max-w-3xl flex-col gap-14 md:max-w-4xl md:gap-20">
        <TimelineBlock
          title={locale === "fr" ? "Parcours académique" : "Academic path"}
          items={education}
          locale={locale}
        />
        <TimelineBlock
          title={locale === "fr" ? "Expérience professionnelle" : "Professional experience"}
          items={experience}
          locale={locale}
        />
      </div>
    </section>
  );
}
