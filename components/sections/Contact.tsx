"use client";

import { useLocale } from "next-intl";
import { bio, competencies, site } from "@/content/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/system/Reveal";

const quickLinks = {
  fr: [
    { href: "#top", label: "Maison" },
    { href: "#experience", label: "À propos" },
    { href: "#work", label: "Projets" },
    { href: "#sailing", label: "Performance" },
    { href: "#stack", label: "Compétences" },
  ],
  en: [
    { href: "#top", label: "Home" },
    { href: "#experience", label: "About" },
    { href: "#work", label: "Projects" },
    { href: "#sailing", label: "Performance" },
    { href: "#stack", label: "Skills" },
  ],
} as const;

export function Contact() {
  const locale = useLocale() as "fr" | "en";
  const year = new Date().getFullYear();
  const links = quickLinks[locale];
  const skillLabels = competencies.slice(0, 6).map((c) => c.card[locale]);

  const social = [
    { label: "LinkedIn", href: site.linkedin },
    { label: "GitHub", href: site.github },
    { label: "E-mail", href: `mailto:${site.email}` },
  ];

  return (
    <section
      id="contact"
      data-section="contact"
      className="relative overflow-hidden px-5 pb-10 pt-28 md:px-12 md:pb-12 md:pt-32 lg:px-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 70% 55% at 50% 20%, #000 10%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/20 blur-[130px]"
      />

      <div className="relative mx-auto w-full max-w-content">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(2.4rem,7vw,4.8rem)] font-extrabold leading-[1.05] tracking-tight">
            <span className="text-ink">{locale === "fr" ? "Prêt à" : "Ready to"} </span>
            <span className="text-accent">{locale === "fr" ? "Collaborer ?" : "Collaborate?"}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted md:text-base">
            {locale === "fr"
              ? "Parlons de la manière dont je peux contribuer à vos projets de développement numérique, d’IA et web."
              : "Let’s talk about how I can contribute to your digital, AI and web product projects."}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_40px_var(--accent-glow)] transition hover:bg-accent-soft hover:scale-[1.02]"
            >
              {site.email}
              <span aria-hidden>↗</span>
            </a>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm font-medium text-muted transition hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-20 border-t border-[var(--line)] pt-12 md:mt-24 md:pt-14">
          <RevealGroup className="grid gap-10 md:grid-cols-[1.3fr_0.85fr_0.95fr] md:gap-8">
            <RevealItem>
              <p className="text-xl font-bold tracking-tight">
                <span className="text-ink">{site.firstName} </span>
                <span className="text-accent">{site.lastName}</span>
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{bio[locale]}</p>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-ink transition hover:border-accent/40 hover:text-accent"
                  aria-label="LinkedIn"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12V23h-4v-5.9c0-1.41-.03-3.22-1.96-3.22-1.96 0-2.26 1.53-2.26 3.12V23h-4V8.5z" />
                  </svg>
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-ink transition hover:border-accent/40 hover:text-accent"
                  aria-label="GitHub"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 .5C5.73.5.75 5.58.75 11.96c0 5.05 3.2 9.33 7.64 10.84.56.11.76-.25.76-.55 0-.27-.01-1.16-.02-2.1-3.11.69-3.77-1.35-3.77-1.35-.51-1.32-1.24-1.67-1.24-1.67-1.01-.71.08-.7.08-.7 1.12.08 1.71 1.17 1.71 1.17.99 1.74 2.6 1.24 3.23.95.1-.74.39-1.24.7-1.53-2.48-.29-5.09-1.27-5.09-5.66 0-1.25.43-2.27 1.14-3.07-.12-.29-.5-1.46.11-3.04 0 0 .93-.3 3.05 1.17a10.3 10.3 0 0 1 2.78-.39c.94 0 1.89.13 2.78.39 2.11-1.47 3.04-1.17 3.04-1.17.61 1.58.23 2.75.11 3.04.71.8 1.14 1.82 1.14 3.07 0 4.4-2.62 5.36-5.11 5.64.4.35.75 1.04.75 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.66.77.55A11.23 11.23 0 0 0 23.25 12C23.25 5.58 18.27.5 12 .5Z" />
                  </svg>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-ink transition hover:border-accent/40 hover:text-accent"
                  aria-label="Email"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                    <path d="m4.5 7.5 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </RevealItem>

            <RevealItem>
              <p className="text-sm font-semibold text-ink">
                {locale === "fr" ? "Liens rapides" : "Quick links"}
              </p>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-muted transition hover:text-accent">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </RevealItem>

            <RevealItem>
              <p className="text-sm font-semibold text-ink">
                {locale === "fr" ? "Compétences" : "Skills"}
              </p>
              <ul className="mt-4 space-y-2.5">
                {skillLabels.map((label) => (
                  <li key={label} className="text-sm text-muted">
                    {label}
                  </li>
                ))}
              </ul>
            </RevealItem>
          </RevealGroup>

          <p className="mt-12 text-xs text-muted md:mt-14">
            © {year} {site.name}. {locale === "fr" ? "Tous droits réservés." : "All rights reserved."}
          </p>
        </div>
      </div>
    </section>
  );
}
