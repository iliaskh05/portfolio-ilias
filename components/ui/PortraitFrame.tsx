"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";
import { site } from "@/content/data";
import { cn, prefersReducedMotion } from "@/lib/utils";

type Props = {
  alt: string;
  className?: string;
  priority?: boolean;
  parallax?: boolean;
};

export function PortraitFrame({ alt, className, priority, parallax = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parallax || prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    const { gsap, ScrollTrigger } = getGsap();
    const anim = gsap.to(el, {
      yPercent: -8,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
      ScrollTrigger.refresh();
    };
  }, [parallax]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 shadow-glow",
        className
      )}
    >
      <div className="portrait-mask relative aspect-[3/4] w-full">
        <Image
          src={site.portrait}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 90vw, 420px"
          className="object-cover object-[50%_18%]"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070816] via-transparent to-transparent opacity-80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-cyan-brand/20"
      />
    </div>
  );
}
