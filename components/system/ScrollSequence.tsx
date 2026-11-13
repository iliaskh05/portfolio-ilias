"use client";

import { useEffect } from "react";
import { getGsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";

export function ScrollSequence({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const { gsap, ScrollTrigger } = getGsap();

    const sections = gsap
      .utils.toArray<HTMLElement>("[data-section]")
      .filter((section) => section.dataset.section !== "hero" && section.dataset.section !== "work");

    const triggers = sections.map((section) =>
      gsap.fromTo(
        section,
        { opacity: 0.82, y: 22 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            end: "top 52%",
            scrub: 0.55,
          },
        }
      )
    );

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      triggers.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, []);

  return <div className="scroll-sequence">{children}</div>;
}
