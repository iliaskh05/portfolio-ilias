"use client";

import { useLocale, useTranslations } from "next-intl";
import { caps } from "@/content/data";
import { SplitReveal } from "@/components/system/SplitReveal";
import { GlassCard } from "@/components/system/GlassCard";

export function Caps() {
  const t = useTranslations("caps");
  const locale = useLocale() as "fr" | "en";

  return (
    <section id="caps" className="relative z-10 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-brand">
          {t("label")}
        </p>
        <SplitReveal className="mb-14 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {t("title")}
        </SplitReveal>

        <div className="space-y-4">
          {caps.map((cap) => (
            <GlassCard key={cap.id} className="group grid gap-4 p-6 md:grid-cols-[120px_1fr_160px] md:items-center">
              <span className="font-mono text-sm text-cyan-brand">{cap.year[locale]}</span>
              <div>
                <h3 className="font-display text-xl font-medium md:text-2xl">{cap.title[locale]}</h3>
                <p className="mt-2 text-sm text-muted md:text-base">{cap.detail[locale]}</p>
              </div>
              <span className="justify-self-start rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted md:justify-self-end">
                {t(`status.${cap.status}`)}
              </span>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
