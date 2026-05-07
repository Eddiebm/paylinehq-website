import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/link-button";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";

const APP_URL = "https://frankgrant.pages.dev";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "PayLineHQ pricing — Self-Serve SaaS at $149/mo, Submit-Ready Done-For-You from $2,500. Phase II / R01 / R21 tiers available.",
};

const TIERS = [
  {
    name: "Self-Serve",
    eyebrow: "For hands-on PIs",
    price: "$149",
    cadence: "/month",
    note: "14-day free trial · cancel anytime",
    features: [
      "Study Section simulation engine",
      "Three-pass quality review on demand",
      "FOA-specific compliance checking",
      "Citation verification across 5 databases",
      "All NIH mechanisms",
      "DOCX export · unlimited revisions",
    ],
    cta: { label: "Try free for 14 days", href: APP_URL, external: true },
  },
  {
    name: "Submit-Ready",
    eyebrow: "When you'd rather we drive",
    price: "$2,500",
    cadence: "upfront + 3% if funded",
    note: "5–7 business days for Phase I · 90-day post-delivery support",
    featured: true,
    features: [
      "Complete NIH application — every section",
      "Commercialization Potential narrative",
      "Three-pass quality certification",
      "Study Section simulation with impact score",
      "Citation verification across 5 databases",
      "FOA-specific NIH compliance check",
      "DOCX + PDF submission package",
      "90-day post-delivery revision support",
    ],
    cta: { label: "Book a consult", href: "/hire" },
  },
  {
    name: "Phase II / R01 / R21",
    eyebrow: "Larger mechanisms",
    price: "From $3,500",
    cadence: "upfront",
    note: "10 business days for Phase II / Fast Track · success fee on award",
    features: [
      "Everything in Submit-Ready",
      "Multi-aim commercialization plan",
      "Cross-institute strategy review",
      "Direct PI-reviewer simulation",
      "Pre-submission inquiries handled",
    ],
    cta: { label: "Book a consult", href: "/hire" },
  },
];

export default function PricingPage() {
  return (
    <>
      <SiteNav />
      <main className="border-b border-border/40">
        <section className="container mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal className="text-center">
            <Badge
              variant="outline"
              className="mb-4 border-teal-500/40 bg-teal-500/10 text-teal-300"
            >
              Pricing
            </Badge>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
              We win when you get funded.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              Success-aligned pricing on Done-For-You. Flat monthly on Self-Serve. No retainers, no
              billable hours, no surprise invoices.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {TIERS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05}>
                <Card
                  className={`h-full ${
                    t.featured
                      ? "border-teal-500/50 ring-1 ring-teal-500/40"
                      : "border-border/40"
                  } bg-card/60`}
                >
                  <CardContent className="flex h-full flex-col p-7">
                    <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {t.eyebrow}
                    </div>
                    <h3 className="text-2xl font-bold">{t.name}</h3>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold tracking-tight">{t.price}</span>
                      <span className="text-sm text-muted-foreground">{t.cadence}</span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">{t.note}</p>

                    <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                      {t.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <LinkButton href={t.cta.href}
                        target={t.cta.external ? "_blank" : undefined}
                        rel={t.cta.external ? "noopener" : undefined} className={`mt-7 w-full ${
                        t.featured
                          ? "bg-teal-500 text-white hover:bg-teal-400"
                          : "border-teal-500/40 bg-transparent text-teal-300 hover:bg-teal-500/10"
                      }`}
                      variant={t.featured ? "default" : "outline"}>
                        {t.cta.label} <ArrowRight className="ml-1.5 h-4 w-4" />
                      </LinkButton>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-14">
            <Card className="border-border/40 bg-muted/20">
              <CardContent className="p-7">
                <h3 className="text-lg font-semibold">A note on the success fee</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  The 3% success fee applies only when your grant is funded. It is paid from your
                  company or institution&apos;s operating funds — NIH policy prohibits contingency
                  fees being paid from grant funds directly. We earn the success fee only when you
                  do, which aligns our incentives with yours.
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
