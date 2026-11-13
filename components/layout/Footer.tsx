"use client";

import { useTranslations } from "next-intl";
import { site } from "@/content/data";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          © {year} {site.name}. {t("rights")}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{t("built")}</p>
      </div>
    </footer>
  );
}
