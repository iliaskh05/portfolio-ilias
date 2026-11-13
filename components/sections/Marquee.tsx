"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { getGsap } from "@/lib/gsap";
import { marqueeItems } from "@/content/data";
import { prefersReducedMotion } from "@/lib/utils";

export function Marquee() {
  const locale = useLocale() as "fr" | "en";
  const trackRef = useRef<HTMLDivElement>(null);
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const track = trackRef.current;
    if (!track) return;

    const { gsap } = getGsap();
    let dir = 1;
    let speed = 40;

    const tween = gsap.to(track, {
      xPercent: -33.333,
      duration: speed,
      ease: "none",
      repeat: -1,
    });

    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      const v = y - last;
      last = y;
      dir = v >= 0 ? 1 : -1;
      const next = Math.max(18, 40 - Math.abs(v) * 0.8);
      tween.timeScale(dir * (40 / next));
      speed = next;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      tween.kill();
    };
  }, []);

  return (
    <section aria-hidden className="relative z-10 overflow-hidden border-y border-white/10 py-5">
      <div ref={trackRef} className="flex w-max gap-10 whitespace-nowrap will-change-transform">
        {items.map((item, i) => (
          <span
            key={`${item.fr}-${i}`}
            className="font-display text-3xl font-semibold tracking-tight text-white/25 md:text-5xl"
          >
            {item[locale]} <span className="text-cyan-brand/50">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
