"use client";

import { useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·";

type Props = {
  text: string;
  className?: string;
};

export function ScrambleText({ text, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const frame = useRef(0);

  const scramble = () => {
    const el = ref.current;
    if (!el) return;
    let i = 0;
    cancelAnimationFrame(frame.current);
    const run = () => {
      el.textContent = text
        .split("")
        .map((ch, idx) => {
          if (ch === " ") return " ";
          if (idx < i) return text[idx];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");
      if (i < text.length) {
        i += 0.55;
        frame.current = requestAnimationFrame(run);
      } else {
        el.textContent = text;
      }
    };
    run();
  };

  return (
    <span ref={ref} className={className} onMouseEnter={scramble}>
      {text}
    </span>
  );
}
