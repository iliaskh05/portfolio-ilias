"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/gsap";

export function ProgressCompass() {
  const needleRef = useRef<SVGLineElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = getGsap();
    const needle = needleRef.current;
    const ring = ringRef.current;
    if (!needle || !ring) return;

    const circumference = 2 * Math.PI * 18;
    gsap.set(ring, { strokeDasharray: circumference, strokeDashoffset: circumference });

    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const p = self.progress;
        gsap.set(ring, { strokeDashoffset: circumference * (1 - p) });
        gsap.set(needle, { rotation: p * 360, transformOrigin: "20px 20px" });
      },
    });

    return () => st.kill();
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 md:block lg:right-6"
    >
      <svg width="40" height="40" viewBox="0 0 40 40" className="text-white/70">
        <circle cx="20" cy="20" r="18" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <circle
          ref={ringRef}
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="url(#compassGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          transform="rotate(-90 20 20)"
        />
        <line ref={needleRef} x1="20" y1="20" x2="20" y2="8" stroke="#22D3EE" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="2" fill="#3B2DD8" />
        <defs>
          <linearGradient id="compassGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B2DD8" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
