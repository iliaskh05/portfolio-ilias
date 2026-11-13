"use client";

export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -inset-[20%] bg-aurora opacity-90 animate-aurora-drift" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#070816_70%)]" />
    </div>
  );
}
