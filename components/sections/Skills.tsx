"use client";

import { useLocale, useTranslations } from "next-intl";
import { languages, skillGroups } from "@/content/data";
import { SplitReveal } from "@/components/system/SplitReveal";
import { ScrambleText } from "@/components/system/ScrambleText";
import { GlassCard } from "@/components/system/GlassCard";

export function Skills() {
  const t = useTranslations("skills");
  const locale = useLocale() as "fr" | "en";

  return (
    <section id="skills" className="relative z-10 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-brand">
          {t("label")}
        </p>
        <SplitReveal className="mb-14 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {t("title")}
        </SplitReveal>

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <GlassCard key={group.id} className="p-6 md:p-8">
              <h3 className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                {group.label[locale]}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <ScrambleText
                    key={item}
                    text={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs tracking-wide text-ink"
                  />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {languages.map((lang) => (
            <GlassCard key={lang.id} className="flex items-center justify-between p-5">
              <span className="font-display text-lg">{lang.label[locale]}</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-brand">
                {lang.level[locale]}
              </span>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
