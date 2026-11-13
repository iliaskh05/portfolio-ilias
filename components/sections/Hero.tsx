"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { bio, site } from "@/content/data";

const tags = [
  { id: "code", fr: "</> Full-Stack", en: "</> Full-Stack", pos: "left-[-6%] top-[8%] md:left-[-10%] md:top-[10%]" },
  { id: "ai", fr: "IA · ML · Santé", en: "AI · ML · Health", pos: "right-[-8%] top-[18%] md:right-[-12%] md:top-[16%]" },
  { id: "sail", fr: "ILCA 7 · CNOM", en: "ILCA 7 · CNOM", pos: "left-[-4%] bottom-[10%] md:left-[-8%] md:bottom-[12%]" },
] as const;

export function Hero() {
  const locale = useLocale() as "fr" | "en";
  const photoAlt =
    locale === "fr"
      ? "Ilias Kharbouch, athlète ILCA 7 et champion avec médaille"
      : "Ilias Kharbouch, ILCA 7 athlete with championship medal";

  return (
    <section
      id="top"
      data-section="hero"
      className="relative flex min-h-[100svh] snap-start items-center overflow-x-clip px-5 pb-16 pt-24 md:min-h-screen md:px-12 md:pb-10 md:pt-24 lg:px-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 20%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-10 h-[360px] w-[360px] rounded-full bg-accent/15 blur-[120px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-content items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent-soft backdrop-blur md:mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {locale === "fr" ? "Disponible pour des opportunités" : "Open to opportunities"}
          </div>

          <h1 className="text-[clamp(2.5rem,6.5vw,4.6rem)] font-extrabold leading-[0.94] tracking-[-0.04em]">
            <span className="block text-ink">{site.firstName}</span>
            <span className="block text-accent">{site.lastName}</span>
          </h1>

          <p className="mt-4 max-w-xl text-base font-medium text-ink-soft md:text-lg">
            {locale === "fr"
              ? "Génie Digital & IA en santé · Full-Stack · Athlète ILCA 7"
              : "Digital Engineering & Health AI · Full-Stack · ILCA 7 athlete"}
          </p>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted md:text-[15px]">{bio[locale]}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-soft"
            >
              {locale === "fr" ? "Contactez-moi" : "Contact me"}
              <span aria-hidden>→</span>
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-ink transition hover:border-accent/40 hover:text-accent"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12V23h-4v-5.9c0-1.41-.03-3.22-1.96-3.22-1.96 0-2.26 1.53-2.26 3.12V23h-4V8.5z" />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 mx-auto w-full max-w-[420px] lg:order-2 lg:max-w-none"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px] lg:max-w-[440px]">
            <div
              aria-hidden
              className="absolute inset-[8%] rounded-[2rem] bg-accent/25 blur-3xl"
            />

            <div className="hero-frame relative z-[1] h-full w-full overflow-hidden rounded-[1.75rem] bg-[var(--surface-strong)] md:rounded-[2rem]">
              <Image
                src={site.avatarHero}
                alt={photoAlt}
                fill
                priority
                sizes="(max-width:1024px) 380px, 440px"
                className="object-cover object-[52%_28%]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, var(--photo-fade) 0%, transparent 22%), linear-gradient(to bottom, color-mix(in srgb, var(--bg) 18%, transparent) 0%, transparent 14%)",
                }}
              />
            </div>

            {tags.map((tag, i) => (
              <motion.span
                key={tag.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + i * 0.1, duration: 0.55 }}
                className={`floating-tag pointer-events-none absolute z-20 whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-semibold shadow-lg ${tag.pos}`}
              >
                {tag[locale]}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
