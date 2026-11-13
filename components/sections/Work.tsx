"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { projects, type Project } from "@/content/data";
import { getGsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";

function isSvg(src: string) {
  return src.toLowerCase().endsWith(".svg");
}

function ProjectCard({
  project,
  index,
  locale,
  visitLabel,
  mobile,
}: {
  project: Project;
  index: number;
  locale: "fr" | "en";
  visitLabel: string;
  mobile?: boolean;
}) {
  const coverSrc = project.cover ?? project.logo;
  const coverInner = (
    <div className={`relative w-full ${mobile ? "aspect-[16/10]" : "aspect-[16/9]"}`}>
      <Image
        src={coverSrc}
        alt={`${project.title} preview`}
        fill
        sizes={mobile ? "100vw" : "600px"}
        unoptimized={isSvg(coverSrc)}
        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent"
      />

      <div
        className={
          project.logoMode === "contain-light"
            ? "pointer-events-none absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white p-1.5 shadow-lg"
            : "pointer-events-none absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-black/70 p-1.5 shadow-lg backdrop-blur"
        }
      >
        <Image
          src={project.logo}
          alt=""
          width={48}
          height={48}
          unoptimized={isSvg(project.logo)}
          className="h-full w-full object-contain"
        />
      </div>

      {project.url ? (
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/55 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur transition-colors duration-300 group-hover:border-accent/50 group-hover:bg-accent/20 group-hover:text-accent-soft">
          {visitLabel} ↗
        </span>
      ) : (
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/15 px-3.5 py-1.5 text-xs font-medium text-accent-soft backdrop-blur">
          {locale === "fr" ? "En cours" : "Ongoing"}
        </span>
      )}
    </div>
  );

  const coverClassName =
    "relative mb-4 block overflow-hidden rounded-2xl border border-[var(--line)] bg-[#0a0a0a] outline-none transition-[border-color] duration-500 focus-visible:ring-2 focus-visible:ring-accent group-hover:border-accent/40 md:mb-5";

  return (
    <article
      className={
        mobile
          ? "group relative flex w-full flex-col border-b border-[var(--line)] py-8 last:border-b-0"
          : "group relative flex h-[min(78vh,720px)] w-[min(88vw,540px)] shrink-0 flex-col border-r border-[var(--line)] px-8 py-6 md:w-[560px] md:px-10"
      }
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <p className="text-4xl font-bold tracking-tight text-ink md:text-6xl">
          {String(index + 1).padStart(2, "0")}
        </p>
        <div className="flex flex-col items-end gap-2">
          <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            {project.year} ·{" "}
            {project.status === "shipped"
              ? locale === "fr"
                ? "Livré"
                : "Shipped"
              : locale === "fr"
                ? "En cours"
                : "Ongoing"}
          </span>
          {project.metric ? (
            <span className="rounded-full bg-accent/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-soft">
              {project.metric[locale]}
            </span>
          ) : null}
        </div>
      </div>

      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${visitLabel} — ${project.title}`}
          className={coverClassName}
        >
          {coverInner}
        </a>
      ) : (
        <div className={coverClassName}>{coverInner}</div>
      )}

      <div className="flex min-h-0 flex-1 flex-col">
        <h3 className="text-xl font-semibold tracking-tight text-ink md:text-3xl">{project.title}</h3>
        <p className="mt-1.5 text-sm text-accent-soft">{project.tagline[locale]}</p>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted md:line-clamp-2">
          {project.objective[locale]}
        </p>

        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/80">
          {locale === "fr" ? "Rôle" : "Role"}
        </p>
        <p className="mt-1 text-sm text-muted-2">{project.role[locale]}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-[11px] text-muted-2"
            >
              {tool}
            </span>
          ))}
        </div>

        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-soft md:mt-auto md:pt-4"
          >
            {visitLabel} ↗
          </a>
        ) : null}
      </div>
    </article>
  );
}

export function Work() {
  const locale = useLocale() as "fr" | "en";
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mq = window.matchMedia("(min-width: 768px)");
    let tween: ReturnType<ReturnType<typeof getGsap>["gsap"]["to"]> | null = null;

    const setup = () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
      tween = null;
      track.style.transform = "";

      if (!mq.matches) return;

      const { gsap, ScrollTrigger } = getGsap();
      const getScroll = () => Math.max(0, track.scrollWidth - window.innerWidth + 80);

      tween = gsap.to(track, {
        x: () => -getScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScroll() * 1.05}`,
          scrub: 0.65,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();
    };

    setup();
    const onChange = () => setup();
    mq.addEventListener("change", onChange);
    window.addEventListener("resize", onChange);

    return () => {
      mq.removeEventListener("change", onChange);
      window.removeEventListener("resize", onChange);
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, []);

  const visitLabel = locale === "fr" ? "Voir le projet" : "View project";

  return (
    <section id="work" data-section="work" ref={sectionRef} className="relative overflow-hidden bg-bg">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-accent/15 blur-[120px]"
      />

      {/* Mobile vertical work */}
      <div className="px-5 pb-16 pt-20 md:hidden">
        <h2 className="text-[clamp(2.2rem,9vw,3rem)] font-semibold tracking-tight text-ink">
          {locale === "fr" ? (
            <>
              Mes <span className="text-gradient-lilac">projets</span>
            </>
          ) : (
            <>
              My <span className="text-gradient-lilac">Work</span>
            </>
          )}
        </h2>
        <p className="mt-2 max-w-sm text-sm text-muted">
          {locale === "fr"
            ? "Projets livrés et en cours — du CRM à l'IA santé."
            : "Shipped and ongoing work — from CRM to health AI."}
        </p>
        <div className="mt-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              locale={locale}
              visitLabel={visitLabel}
              mobile
            />
          ))}
        </div>
      </div>

      {/* Desktop horizontal work */}
      <div className="relative hidden min-h-screen md:block">
        <div className="pointer-events-none absolute left-16 top-20 z-20 lg:left-20">
          <h2 className="text-[clamp(1.75rem,3.2vw,2.75rem)] font-semibold tracking-tight text-ink">
            {locale === "fr" ? (
              <>
                Mes <span className="text-gradient-lilac">projets</span>
              </>
            ) : (
              <>
                My <span className="text-gradient-lilac">Work</span>
              </>
            )}
          </h2>
          <p className="mt-1.5 max-w-xs text-sm text-muted">
            {locale === "fr"
              ? "Scroll horizontal — chaque projet en détail."
              : "Scroll sideways — every project in detail."}
          </p>
        </div>

        <div
          ref={trackRef}
          className="flex h-screen w-max items-center gap-0 pt-28 will-change-transform"
        >
          <div className="w-[8vw] shrink-0 md:w-[10vw]" aria-hidden />
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              locale={locale}
              visitLabel={visitLabel}
            />
          ))}
          <div className="w-[14vw] shrink-0" aria-hidden />
        </div>
      </div>
    </section>
  );
}
