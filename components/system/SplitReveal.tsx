"use client";

import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { getGsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";

type Props = {
  children: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  type?: "words" | "lines" | "chars";
  delay?: number;
};

export function SplitReveal({
  children,
  as: Tag = "h2",
  className,
  type = "words",
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const { gsap, ScrollTrigger } = getGsap();
    const split = new SplitType(el, { types: type, tagName: "span" });
    const targets =
      type === "chars" ? split.chars : type === "lines" ? split.lines : split.words;

    if (!targets) return;

    targets.forEach((t) => {
      const wrap = document.createElement("span");
      wrap.className = "mask-reveal inline-block align-bottom";
      t.parentNode?.insertBefore(wrap, t);
      wrap.appendChild(t);
      gsap.set(t, { yPercent: 110, opacity: 0 });
    });

    const anim = gsap.to(targets, {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.06,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 82%",
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
      split.revert();
      ScrollTrigger.refresh();
    };
  }, [children, type, delay]);

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>
      {children}
    </Tag>
  );
}
