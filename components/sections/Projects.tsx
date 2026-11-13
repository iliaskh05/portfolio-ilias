"use client";

import { useLocale, useTranslations } from "next-intl";
import { projects } from "@/content/data";
import { SplitReveal } from "@/components/system/SplitReveal";
import { GlassCard } from "@/components/system/GlassCard";
import { Magnetic } from "@/components/system/Magnetic";
import { cn } from "@/lib/utils";

export function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale() as "fr" | "en";

  return (
    <section id="projects" className="relative z-10 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-brand">
          {t("label")}
        </p>
        <SplitReveal className="mb-14 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {t("title")}
        </SplitReveal>

        <div className="grid auto-rows-[minmax(220px,auto)] gap-4 md:grid-cols-6">
          {projects.map((project) => (
            <GlassCard
              key={project.id}
              className={cn(
                "group flex flex-col justify-between p-6 md:p-8",
                project.span === "wide" && "md:col-span-4",
                project.span === "tall" && "md:col-span-2 md:row-span-2",
                !project.span && "md:col-span-2",
                project.id === "autolinkedin" && "md:col-span-2",
                project.id === "commohedge" && "md:col-span-2"
              )}
            >
              <div>
                <div className="mb-6 flex items-start justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    {t(`status.${project.status}`)}
                  </span>
                  {project.url ? (
                    <Magnetic strength={0.2}>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-brand"
                      >
                        {t("visit")} ↗
                      </a>
                    </Magnetic>
                  ) : null}
                </div>
                <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-cyan-brand/90">{project.tagline[locale]}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                  {project.description[locale]}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
