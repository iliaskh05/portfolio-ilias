"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";
import { site } from "@/content/data";

export function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("ik-preloader") === "1" || prefersReducedMotion()) {
      setDone(true);
      return;
    }

    const root = rootRef.current;
    const count = countRef.current;
    if (!root || !count) return;

    const state = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("ik-preloader", "1");
        setDone(true);
      },
    });

    tl.to(state, {
      value: 100,
      duration: 1.4,
      ease: "power2.inOut",
      onUpdate: () => {
        count.textContent = String(Math.round(state.value)).padStart(3, "0");
      },
    })
      .to(".preloader-ik path", { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" }, 0)
      .to(root, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.85,
        ease: "power4.inOut",
      })
      .set(root, { display: "none" });

    return () => {
      tl.kill();
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#070816]"
      style={{ clipPath: "inset(0 0 0% 0)" }}
    >
      <svg
        className="preloader-ik mb-8 h-16 w-16 text-cyan-brand"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden
      >
        <path
          d="M18 12 V52 M18 32 H34 M46 12 V52"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="120"
          strokeDashoffset="120"
        />
      </svg>
      <span ref={countRef} className="font-display text-6xl font-light tracking-tight text-ink md:text-8xl">
        000
      </span>
      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.35em] text-muted">
        {site.monogram} · CAP
      </p>
    </div>
  );
}
