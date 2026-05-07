"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";
import { ShieldCheck } from "lucide-react";

const REVIEWERS = [
  {
    name: "Dr. Sarah Chen",
    role: "Basic Scientist · Molecular Biology",
    score: 2,
    strengths: [
      "Strong scientific rationale and clearly stated hypothesis",
      "Excellent preliminary data supporting feasibility",
      "Well-qualified PI with relevant track record",
    ],
    concern:
      "Innovation claim could be more precisely articulated against existing literature",
  },
  {
    name: "Dr. Marcus Williams",
    role: "Translational Researcher · Oncology",
    score: 3,
    strengths: [
      "Compelling clinical significance and clearly defined unmet need",
      "Realistic timeline with measurable Phase I milestones",
    ],
    concern:
      "Sample size justification should include explicit statistical power calculation for primary endpoint",
  },
  {
    name: "Dr. Patricia Rodriguez",
    role: "Biostatistician · Clinical Trials Design",
    score: 2,
    strengths: [
      "Well-designed experimental approach with appropriate controls",
      "Alternative strategies clearly identified and justified",
    ],
    concern:
      "Missing data handling plan for primary endpoint needs to be specified",
  },
];

export function StudySectionDemo() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background to-muted/30 py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-teal-500/40 bg-teal-500/10 text-teal-300"
          >
            Featured Capability
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Peer review before you submit
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
            Our Study Section simulation surfaces the same weaknesses real reviewers will flag — so you fix them before they count.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="overflow-hidden border-border/40 bg-card/60">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col items-start justify-between gap-4 border-b border-border/30 pb-6 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm font-semibold">Study Section Simulation Results</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Mechanism: SBIR Phase I · Simulated panel: NCI SEP · FOA: PA-24-059
                  </p>
                </div>
                <div className="rounded-lg border border-teal-500/40 bg-teal-500/10 px-5 py-3 text-center">
                  <p className="text-[10px] uppercase tracking-widest text-teal-300">
                    Impact Score
                  </p>
                  <p className="text-3xl font-bold leading-none text-teal-200">24</p>
                  <p className="mt-1 text-[10px] text-teal-300">Competitive (Excellent)</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {REVIEWERS.map((r) => (
                  <div
                    key={r.name}
                    className="rounded-lg border border-border/40 bg-background/40 p-5"
                  >
                    <p className="text-sm font-semibold">{r.name}</p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">{r.role}</p>
                    <p className="mt-3 text-2xl font-bold text-teal-300">{r.score}</p>
                    <ul className="mt-3 space-y-1.5 text-[12px] leading-relaxed text-muted-foreground">
                      {r.strengths.map((s, i) => (
                        <li key={i} className="flex gap-1.5">
                          <span className="text-teal-400">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 rounded border-l-2 border-amber-400/60 bg-amber-400/5 px-3 py-2 text-[12px] text-amber-200/90">
                      Concern: {r.concern}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 rounded-md border border-emerald-400/30 bg-emerald-400/5 px-4 py-3 text-sm text-emerald-200">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                Certified for delivery — Impact score 24 is competitive. Concerns addressed before submission. Ready for NCI.
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
