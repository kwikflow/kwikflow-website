"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

export interface KwikflowHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  metricValue?: number;
}

const STATS = [
  ["382", "oproepen gevangen"],
  ["€12.600", "extra omzet"],
  ["38", "reviews in 90 dagen"],
];

export function KwikflowHero({
  metricValue = 382,
  className,
  ...props
}: KwikflowHeroProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set("[data-hero-stagger], [data-hero-card]", { opacity: 1, y: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-stagger]",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.08, delay: 0.1 }
      );
      gsap.fromTo(
        "[data-hero-card]",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.35 }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className={cn("relative overflow-hidden", className)}
      style={{ background: "var(--bg)" }}
      {...props}
    >
      {/* Soft cyan glow accent — one subtle accent, no clutter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] max-w-[120vw] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,200,232,0.14) 0%, rgba(0,200,232,0.05) 35%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundSize: "64px 64px",
          backgroundImage:
            "linear-gradient(to right, rgba(16,24,40,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,24,40,0.025) 1px, transparent 1px)",
          maskImage:
            "radial-gradient(ellipse 70% 55% at 50% 30%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 50% 30%, black 0%, transparent 75%)",
        }}
      />

      <div className="container-kf relative z-10 flex flex-col items-center pt-36 pb-20 text-center md:pt-44 md:pb-28">
        {/* Core message renders immediately (no fade) so it is always readable;
            only secondary elements below animate in. */}
        <span className="eyebrow mb-6">
          AI Automatisering voor Vakmensen
        </span>

        <h1 className="mx-auto max-w-[16ch] text-[clamp(2.6rem,7vw,5rem)] font-bold leading-[1.04]">
          Nooit meer een{" "}
          <span className="text-brand-text">gemiste opdracht.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-[42rem] text-[clamp(1.05rem,2vw,1.2rem)] leading-relaxed text-body">
          Wij automatiseren jouw bereikbaarheid volledig. AI neemt de telefoon op,
          beantwoordt berichten en haalt leads binnen — terwijl jij gewoon werkt.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="#contact" className="btn btn-primary text-base">
            Start gratis vandaag →
          </a>
          <a href="#diensten" className="btn btn-secondary text-base">
            Bekijk wat wij doen
          </a>
        </div>

        <div data-hero-stagger className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {STATS.map(([num, label]) => (
            <div
              key={label}
              className="rounded-full border border-hairline bg-white px-4 py-2 text-[0.8rem] font-medium text-muted shadow-[var(--shadow-sm)]"
            >
              <span className="font-semibold text-heading">{num}</span> {label}
            </div>
          ))}
        </div>

        {/* Clean light product preview — the abstract accent */}
        <div data-hero-card className="relative mt-16 w-full max-w-md">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-8 -bottom-8 top-8 -z-10 rounded-[2rem]"
            style={{ background: "var(--brand-softer)", filter: "blur(40px)" }}
          />
          <div className="card-kf overflow-hidden p-5 text-left">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted">
                  Vandaag
                </span>
                <span className="text-base font-semibold text-heading">Kwikflow</span>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-brand-text" style={{ background: "var(--brand-soft)" }}>
                KF
              </span>
            </div>

            <div className="mb-5 flex flex-col items-center">
              <div className="relative flex h-36 w-36 items-center justify-center">
                <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 144 144">
                  <circle cx="72" cy="72" r="60" fill="none" stroke="var(--brand-soft)" strokeWidth="12" />
                  <circle
                    cx="72" cy="72" r="60" fill="none" stroke="var(--brand)" strokeWidth="12"
                    strokeLinecap="round" strokeDasharray="377" strokeDashoffset="56"
                  />
                </svg>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-heading">{metricValue}</span>
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-brand-text">
                    Oproepen gevangen
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              {[
                { icon: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z", w: 80, tag: "Nieuw" },
                { icon: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z", w: 60, tag: "Lead" },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl border border-hairline bg-subtle p-3">
                  <span className="icon-plate h-9 w-9 shrink-0">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d={row.icon} /></svg>
                  </span>
                  <div className="flex-1">
                    <div className="mb-1.5 h-1.5 rounded-full bg-[var(--hairline-strong)]" style={{ width: row.w }} />
                    <div className="h-1.5 w-12 rounded-full bg-hairline" />
                  </div>
                  <span className="text-[0.7rem] font-semibold text-brand-text">{row.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
