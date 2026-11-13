"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { site } from "@/content/data";
import { ThemeToggle } from "@/components/system/ThemeToggle";

const navByLocale = {
  fr: [
    { href: "#experience", label: "À propos" },
    { href: "#work", label: "Projets" },
    { href: "#sailing", label: "Performance" },
    { href: "#stack", label: "Stack" },
    { href: "#contact", label: "Contact" },
  ],
  en: [
    { href: "#experience", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#sailing", label: "Performance" },
    { href: "#stack", label: "Stack" },
    { href: "#contact", label: "Contact" },
  ],
} as const;

function resolveLocale(param: unknown): "fr" | "en" {
  return param === "en" ? "en" : "fr";
}

export function Header() {
  const params = useParams();
  const locale = resolveLocale(params?.locale);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = navByLocale[locale];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`flex h-14 items-center justify-between gap-4 px-5 transition-[background,border-color,backdrop-filter] duration-300 md:h-[72px] md:px-10 lg:px-12 ${
          scrolled
            ? "border-b border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="relative z-[60] shrink-0 text-[17px] font-extrabold tracking-[0.08em] text-ink md:text-[19px]"
        >
          {site.monogram}
        </a>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-4 md:flex lg:gap-6">
          <nav className="flex items-center gap-5 lg:gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em] text-ink transition-opacity hover:opacity-55 lg:text-[12px]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] p-1 backdrop-blur">
            <a
              href="/en"
              hrefLang="en"
              className={`rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] transition-colors ${
                locale === "en" ? "bg-accent text-white" : "text-muted hover:text-ink"
              }`}
            >
              EN
            </a>
            <a
              href="/fr"
              hrefLang="fr"
              className={`rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] transition-colors ${
                locale === "fr" ? "bg-accent text-white" : "text-muted hover:text-ink"
              }`}
            >
              FR
            </a>
          </div>

          <ThemeToggle />
        </div>

        <div className="relative z-[60] flex items-center gap-2 md:hidden">
          <div className="flex items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--surface)] p-1">
            <a
              href="/en"
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                locale === "en" ? "bg-accent text-white" : "text-muted"
              }`}
            >
              EN
            </a>
            <a
              href="/fr"
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                locale === "fr" ? "bg-accent text-white" : "text-muted"
              }`}
            >
              FR
            </a>
          </div>
          <ThemeToggle compact />
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? (locale === "fr" ? "Fermer le menu" : "Close menu") : locale === "fr" ? "Ouvrir le menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)]"
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-ink transition-transform duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-[1.5px] w-full bg-ink transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] h-[1.5px] w-full bg-ink transition-transform duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-[var(--bg)]/95 px-6 pb-10 pt-20 transition-[opacity,visibility] duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-[var(--line)] py-4 text-2xl font-semibold tracking-tight text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="space-y-3 text-sm text-muted">
            <a href={`mailto:${site.email}`} className="block text-accent-soft">
              {site.email}
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="block hover:text-ink">
              LinkedIn ↗
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
