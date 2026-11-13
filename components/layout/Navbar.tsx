"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { navItems, site } from "@/content/data";
import { Magnetic } from "@/components/system/Magnetic";
import { ScrambleText } from "@/components/system/ScrambleText";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > last && y > 120);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = () => {
    router.replace(pathname, { locale: locale === "fr" ? "en" : "fr" });
  };

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-transform duration-500",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div
        className={cn(
          "mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full px-4 py-3 transition-all md:px-6",
          scrolled ? "glass mx-3 shadow-glow md:mx-auto" : "bg-transparent"
        )}
      >
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          <ScrambleText text={site.monogram} />
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink"
            >
              <ScrambleText text={t(item.id)} />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={switchLocale}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted hover:text-ink"
            aria-label="Switch language"
          >
            {locale === "fr" ? "EN" : "FR"}
          </button>
          <Magnetic>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition hover:border-cyan-brand/40 hover:bg-white/10"
            >
              {t("cta")}
            </a>
          </Magnetic>
        </div>
      </div>
    </header>
  );
}
