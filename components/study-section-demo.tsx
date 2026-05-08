"use client";

import { useEffect, useRef, useState } from "react";

const REVIEWERS = [
  {
    name: "R1 · Dr. Sarah Chen",
    role: "Basic Scientist · Molecular Biology",
    score: 2,
    strengths: [
      "Strong scientific rationale and clearly stated hypothesis.",
      "Excellent preliminary data supporting feasibility.",
      "Well-qualified PI with relevant track record.",
    ],
    concern:
      "Innovation claim could be more precisely articulated against existing literature.",
  },
  {
    name: "R2 · Dr. Marcus Williams",
    role: "Translational Researcher · Oncology",
    score: 3,
    strengths: [
      "Compelling clinical significance and clearly defined unmet need.",
      "Realistic timeline with measurable Phase I milestones.",
    ],
    concern:
      "Sample size justification should include explicit statistical power calculation for primary endpoint.",
  },
  {
    name: "R3 · Dr. Patricia Rodriguez",
    role: "Biostatistician · Clinical Trials Design",
    score: 2,
    strengths: [
      "Well-designed experimental approach with appropriate controls.",
      "Alternative strategies clearly identified and justified.",
    ],
    concern:
      "Missing-data handling plan for primary endpoint needs to be specified.",
  },
];

export function StudySectionDemo() {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      },
      { rootMargin: "-15% 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="border-y-2 border-[var(--ink)]">
      {/* Document header — like an NIH summary statement masthead */}
      <div className="grid grid-cols-12 gap-x-6 lg:gap-x-12 px-3 lg:px-6 py-5 border-b border-[var(--ink-rule)] bg-[var(--paper-warm)]/60">
        <div className="col-span-12 md:col-span-7">
          <p className="smallcaps text-[var(--ink-faint)] mb-1">
            Department of Health &amp; Human Services · Public Health Service
          </p>
          <p className="font-display text-[1.15rem] leading-[1.2] tracking-[-0.01em]">
            Summary Statement <em className="text-[var(--ink-muted)]">(simulated)</em>
          </p>
        </div>
        <dl className="col-span-12 md:col-span-5 mt-4 md:mt-0 grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-[0.74rem]">
          <dt className="text-[var(--ink-faint)]">Mechanism</dt>
          <dd>SBIR Phase I (R43)</dd>
          <dt className="text-[var(--ink-faint)]">FOA</dt>
          <dd>PA-24-059</dd>
          <dt className="text-[var(--ink-faint)]">Council</dt>
          <dd>NCI · SEP-1</dd>
          <dt className="text-[var(--ink-faint)]">PI</dt>
          <dd>[Redacted]</dd>
        </dl>
      </div>

      {/* Impact score band */}
      <div className="grid grid-cols-12 gap-x-6 lg:gap-x-12 px-3 lg:px-6 py-7 border-b border-[var(--ink-rule)]">
        <div className="col-span-12 md:col-span-4 flex flex-col justify-center">
          <p className="smallcaps text-[var(--ink-faint)] mb-2">Overall impact score</p>
          <div className="flex items-baseline gap-3">
            <span
              className="font-display text-[5.5rem] leading-none tabular-nums"
              style={{
                color: "var(--oxblood)",
                fontVariantNumeric: "tabular-nums lining-nums",
              }}
            >
              {revealed ? "24" : "—"}
            </span>
            <span className="font-mono text-[0.78rem] text-[var(--ink-faint)] mb-2">
              / 90
            </span>
          </div>
          <p className="marginalia mt-2">
            Lower is better. Funding line for NCI SBIR is approximately 35.
          </p>
        </div>
        <div className="col-span-12 md:col-span-8 mt-7 md:mt-0 md:pl-8 md:border-l md:border-[var(--ink-rule)]">
          <p className="smallcaps text-[var(--ink-faint)] mb-2">Reviewers' resume</p>
          <p className="font-display text-[1.08rem] leading-[1.6] text-[var(--ink)]">
            <em>Significant strengths.</em> The application addresses a clear unmet need with a
            well-designed experimental approach. The PI is well-qualified, preliminary data are
            compelling, and the commercialization narrative is plausible. Three concerns —
            articulated below — should be addressed before submission to maximize the impact
            score and increase the likelihood of funding within the current paylines.
          </p>
        </div>
      </div>

      {/* Reviewer panel — three columns of detailed critique */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {REVIEWERS.map((r, idx) => (
          <article
            key={r.name}
            className={`px-3 lg:px-6 py-7 ${
              idx < 2 ? "md:border-r border-[var(--ink-rule)]" : ""
            } ${idx > 0 ? "border-t md:border-t-0" : ""}`}
            style={{
              transition: "opacity 0.6s ease, transform 0.6s ease",
              transitionDelay: `${idx * 0.12}s`,
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateY(0)" : "translateY(8px)",
            }}
          >
            <header className="flex items-baseline justify-between mb-4">
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--ink-faint)] mb-0.5">
                  Reviewer
                </p>
                <p className="font-display text-[1.05rem] leading-tight tracking-[-0.01em]">
                  {r.name}
                </p>
                <p className="text-[0.78rem] italic text-[var(--ink-muted)] mt-0.5">{r.role}</p>
              </div>
              <span className="font-display text-[2.4rem] leading-none tabular-nums text-[var(--ink)]">
                {revealed ? r.score : "—"}
              </span>
            </header>
            <p className="smallcaps text-[var(--ink-faint)] mt-4 mb-2">Strengths</p>
            <ul className="space-y-1.5 text-[0.92rem] leading-[1.5] text-[var(--ink-muted)]">
              {r.strengths.map((s, i) => (
                <li key={i} className="flex gap-2">
                  <span className="font-mono text-[var(--oxblood)] text-[0.7rem] mt-0.5">+</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p className="smallcaps text-[var(--ink-faint)] mt-5 mb-2">Concern</p>
            <p className="text-[0.92rem] leading-[1.5] text-[var(--ink)] italic border-l-2 border-[var(--oxblood)] pl-3">
              {r.concern}
            </p>
          </article>
        ))}
      </div>

      {/* Verdict footer */}
      <div className="px-3 lg:px-6 py-6 border-t-2 border-[var(--ink)] bg-[var(--paper-warm)]/80 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
        <p className="font-display text-[1rem] text-[var(--ink)]">
          <em className="text-[var(--oxblood)]">Certified for delivery.</em> Three concerns
          surfaced; each can be addressed in a single revision pass before resubmission.
        </p>
        <p className="smallcaps text-[var(--ink-faint)]">Generated · 02 ms · model v3.4</p>
      </div>
    </div>
  );
}
