"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { competencies, type Competency } from "@/content/data";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/system/Reveal";

function BrandLogo({
  skill,
  size = 28,
  className,
}: {
  skill: Competency;
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={skill.logo}
      alt=""
      width={size}
      height={size}
      unoptimized
      draggable={false}
      className={cn("pointer-events-none select-none object-contain", skill.invertOnDark && "dark:invert", className)}
    />
  );
}

export function TechStack() {
  const locale = useLocale() as "fr" | "en";
  const [activeId, setActiveId] = useState<string>(competencies[0].id);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const byId = useMemo(() => {
    const map = new Map<string, Competency>();
    competencies.forEach((c) => map.set(c.id, c));
    return map;
  }, []);

  const active = byId.get(activeId) ?? competencies[0];
  const activeColor = active.brand;

  const edges = useMemo(() => {
    const seen = new Set<string>();
    const list: { a: Competency; b: Competency }[] = [];
    for (const node of competencies) {
      for (const link of node.links) {
        const key = [node.id, link].sort().join(":");
        if (seen.has(key)) continue;
        const other = byId.get(link);
        if (!other) continue;
        seen.add(key);
        list.push({ a: node, b: other });
      }
    }
    return list;
  }, [byId]);

  const selectSkill = (id: string) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setActiveId(id), 40);
  };

  useEffect(() => {
    return () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };
  }, []);

  return (
    <section
      id="stack"
      data-section="tech"
      className="relative flex min-h-screen snap-start flex-col justify-center overflow-hidden px-5 py-24 md:px-12 md:py-28 lg:px-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 65% 55% at 50% 40%, #000 15%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[28%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/18 blur-[140px]"
      />

      <Reveal className="relative mx-auto mb-8 w-full max-w-content text-center md:mb-10">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-soft">
          {locale === "fr" ? "Compétences" : "Skills"}
        </p>
        <h2 className="text-[clamp(1.9rem,4.5vw,3.2rem)] font-extrabold tracking-tight text-ink">
          {locale === "fr" ? "Stack & savoir-faire" : "Stack & craft"}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
          {locale === "fr"
            ? "Les technologies que j’utilise vraiment — Full-Stack, data, IA santé, automation et design."
            : "Technologies I actually ship with — Full-Stack, data, health AI, automation and design."}
        </p>
      </Reveal>

      <div className="relative mx-auto w-full max-w-content">
        <div className="relative mx-auto h-[320px] w-full max-w-3xl overflow-visible sm:h-[360px] md:h-[400px]">
          <div className="absolute inset-0 rounded-[2rem] border border-[var(--line)] bg-[var(--surface)]/55 shadow-[0_30px_80px_rgba(0,0,0,0.16)] backdrop-blur-md" />

          <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
            {edges.map(({ a, b }) => {
              const linked = a.id === activeId || b.id === activeId;
              return (
                <line
                  key={`${a.id}-${b.id}`}
                  x1={`${a.x}%`}
                  y1={`${a.y}%`}
                  x2={`${b.x}%`}
                  y2={`${b.y}%`}
                  stroke={linked ? activeColor : "var(--line)"}
                  strokeWidth={linked ? 1.7 : 1}
                  strokeOpacity={linked ? 0.85 : 0.35}
                />
              );
            })}
          </svg>

          {competencies.map((skill) => {
            const isActive = skill.id === activeId;

            return (
              <button
                key={skill.id}
                type="button"
                onMouseEnter={() => selectSkill(skill.id)}
                onFocus={() => setActiveId(skill.id)}
                onClick={() => setActiveId(skill.id)}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2 outline-none"
                style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
                aria-pressed={isActive}
                aria-label={skill.label[locale]}
              >
                <span
                  className={cn(
                    "relative flex h-14 w-14 items-center justify-center rounded-full border bg-[var(--surface-strong)] transition-[transform,box-shadow,border-color] duration-200 md:h-16 md:w-16",
                    isActive ? "scale-110" : "hover:scale-105"
                  )}
                  style={{
                    borderColor: isActive ? skill.brand : "var(--line)",
                    boxShadow: isActive
                      ? `0 0 0 1px ${skill.brand}55, 0 0 28px ${skill.brand}55, 0 10px 24px rgba(0,0,0,0.22)`
                      : "0 8px 22px rgba(0,0,0,0.14)",
                  }}
                >
                  <BrandLogo skill={skill} size={26} />
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative z-20 mx-auto mt-6 min-h-[108px] w-full max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="rounded-2xl border px-4 py-4 backdrop-blur-xl md:px-5"
              style={{
                borderColor: `${activeColor}66`,
                background: "var(--surface)",
                boxShadow: `0 16px 40px rgba(0,0,0,0.18), 0 0 20px ${activeColor}33`,
              }}
            >
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface-strong)]">
                  <BrandLogo skill={active} size={24} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink md:text-base">{active.label[locale]}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted md:text-sm">{active.description[locale]}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5 lg:grid-cols-5">
          {competencies.map((skill) => {
            const isActive = skill.id === activeId;

            return (
              <button
                key={`card-${skill.id}`}
                type="button"
                onMouseEnter={() => selectSkill(skill.id)}
                onFocus={() => setActiveId(skill.id)}
                onClick={() => setActiveId(skill.id)}
                className={cn(
                  "rounded-2xl border px-3 py-4 text-center transition-all duration-200",
                  isActive ? "bg-[var(--surface-strong)]" : "bg-[var(--surface)] hover:border-accent/30"
                )}
                style={{
                  borderColor: isActive ? skill.brand : "var(--line)",
                  boxShadow: isActive ? `0 0 24px ${skill.brand}35` : undefined,
                }}
              >
                <span className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface-strong)]">
                  <BrandLogo skill={skill} size={24} />
                </span>
                <p className="text-[11px] font-semibold leading-tight text-ink md:text-xs">{skill.card[locale]}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
