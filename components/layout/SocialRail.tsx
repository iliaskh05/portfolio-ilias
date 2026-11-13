"use client";

import { site } from "@/content/data";

function IconGitHub({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <path d="M9 19c-4.3 1.4-4.3-2.1-6-2.5M15 22v-3.9a3.4 3.4 0 0 0-1-2.6c3.2-.3 6.5-1.6 6.5-7A5.4 5.4 0 0 0 19 4.6 5 5 0 0 0 18.9 1S17.7.7 15 2.6a13 13 0 0 0-6 0C6.3.7 5.1 1 5.1 1A5 5 0 0 0 5 4.6 5.4 5.4 0 0 0 3.5 8.5c0 5.4 3.3 6.7 6.5 7a3.4 3.4 0 0 0-1 2.6V22" />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

const items = [
  { href: site.github, label: "GitHub", Icon: IconGitHub },
  { href: site.linkedin, label: "LinkedIn", Icon: IconLinkedIn },
  { href: `mailto:${site.email}`, label: "Email", Icon: IconMail },
] as const;

export function SocialRail() {
  return (
    <aside className="pointer-events-none fixed bottom-0 left-0 top-0 z-40 hidden w-14 md:block lg:w-16">
      <div className="pointer-events-auto absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6">
        {items.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={label}
            className="text-ink transition-all duration-200 hover:scale-110 hover:text-accent"
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        ))}
      </div>
    </aside>
  );
}
