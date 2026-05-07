import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/link-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { LiveTicker } from "@/components/live-ticker";
import { Reveal } from "@/components/reveal";
import { StudySectionDemo } from "@/components/study-section-demo";

const APP_URL = "https://frankgrant.pages.dev";

const FAQS = [
  {
    q: "Is this a service or a tool?",
    a: "Both. PayLineHQ Self-Serve is the SaaS — you write your grant in our app, get the same Study Section simulation and citation verification, and ship it yourself. Done-For-You is the service tier — we draft the application, run it through peer review, and deliver a submission-ready package. Same brain, two paths.",
  },
  {
    q: "What if my science isn't strong enough yet?",
    a: "PayLineHQ won't write a fundable grant out of weak science — no tool can. But it will tell you exactly which weaknesses real reviewers will flag, before you submit. Use it as a diagnostic. Many users iterate on Specific Aims before committing to a full submission.",
  },
  {
    q: "Do I need grant-writing experience to use the SaaS tier?",
    a: "No. The SaaS guides you through every section with NIH-specific structure, reviewer psychology hints, and a built-in compliance check. Most first-time users finish a Phase I draft in a weekend. The Study Section simulation runs continuously as you write.",
  },
  {
    q: "Who owns the application — me or PayLineHQ?",
    a: "You. 100%. We're a writing and review service, not a co-author. Your science, your data, your IP — your grant. We make no claim on funded research.",
  },
  {
    q: "How is this different from hiring a grant consultant?",
    a: "Consultants charge $5k–$15k, take 4–8 weeks, and don't simulate peer review. PayLineHQ Done-For-You is $2,500 upfront + 3% if funded, takes 5–7 business days, and includes three independent reviewer simulations. Success-aligned pricing. Faster turnaround. Built-in QA.",
  },
  {
    q: "Can the simulation actually predict outcomes?",
    a: "It's built on 25 years of reviewer psychology, NIH scoring rubrics, and analysis of funded grants across multiple institutes. It catches the same weaknesses real reviewers consistently flag — vague innovation, underpowered designs, missing alternative strategies, citation issues. No simulation guarantees an award, but applications that score competitively in our sim consistently perform better in real review.",
  },
];

const COMPARISON_ROWS: Array<{
  feature: string;
  consultant: string;
  ai: string;
  paylinehq: string;
  payHighlight?: boolean;
}> = [
  { feature: "Cost", consultant: "$5k–$15k", ai: "$20–50/mo", paylinehq: "$2,500 + 3% if funded" },
  { feature: "Timeline", consultant: "4–8 weeks", ai: "Instant (unreviewed)", paylinehq: "5–7 business days" },
  { feature: "NIH expertise", consultant: "Varies", ai: "Generic", paylinehq: "25 years · $7M+ awarded" },
  { feature: "Peer review simulation", consultant: "✗ Not offered", ai: "✗ Not offered", paylinehq: "✓ Always included", payHighlight: true },
  { feature: "Citation verification", consultant: "Manual", ai: "✗ Hallucinations", paylinehq: "✓ 5 databases verified", payHighlight: true },
  { feature: "FOA-specific compliance", consultant: "Manual", ai: "✗ None", paylinehq: "✓ Automated" },
  { feature: "Quality certification", consultant: "✗ None", ai: "✗ None", paylinehq: "✓ Three-pass mandatory", payHighlight: true },
  { feature: "You own the IP", consultant: "✓", ai: "Unclear", paylinehq: "✓ Always" },
  { feature: "Success-aligned pricing", consultant: "✗ Full fee", ai: "✗ Subscription", paylinehq: "✓ 3% if funded", payHighlight: true },
];

export default function Home() {
  return (
    <>
      <SiteNav />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60rem 40rem at 50% -10%, rgba(13,148,136,0.18), transparent 60%), radial-gradient(40rem 30rem at 90% 20%, rgba(13,148,136,0.10), transparent 60%)",
          }}
        />
        <div className="container mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <Reveal className="flex flex-col items-center text-center">
            <Badge
              variant="outline"
              className="mb-6 gap-2 border-teal-500/40 bg-teal-500/10 px-3 py-1 text-teal-300"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Trusted by NIH-funded researchers · 25 years · $7M+ awarded
            </Badge>

            <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              Stop your NIH grant from{" "}
              <span className="text-teal-400">getting triaged.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              PayLineHQ runs your application through a simulated Study Section{" "}
              <em>before</em> NIH does. Three reviewer perspectives, three-pass quality review,
              citation verification, and a competitive impact score — so you fix what real reviewers
              would have flagged, before they count.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <LinkButton href={APP_URL} target="_blank" rel="noopener" size="lg"   className="bg-teal-500 text-white hover:bg-teal-400">
                  Try PayLineHQ free <ArrowRight className="ml-1.5 h-4 w-4" />
                </LinkButton>
              <LinkButton href="/hire" size="lg" variant="outline"   className="border-foreground/20 text-foreground/90">
                  Hire us — $2,500 + 3% if funded
                </LinkButton>
            </div>

            <p className="mt-4 text-sm text-muted-foreground/80">
              No credit card · No commitment · 30 sec to first reviewer score
            </p>
          </Reveal>

          {/* Trust strip */}
          <Reveal delay={0.1} className="mt-16">
            <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-3">
              <Card className="border-border/40 bg-card/60 backdrop-blur">
                <CardContent className="p-5">
                  <div className="flex items-center justify-center gap-2 text-2xl font-bold text-teal-400">
                    <ShieldCheck className="h-5 w-5" />
                    $7M+
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">in NIH awards</p>
                </CardContent>
              </Card>
              <Card className="border-border/40 bg-card/60 backdrop-blur">
                <CardContent className="p-5">
                  <div className="flex items-center justify-center gap-2 text-2xl font-bold text-teal-400">
                    <Target className="h-5 w-5" />
                    3
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">independent reviewer sims</p>
                </CardContent>
              </Card>
              <Card className="col-span-2 border-border/40 bg-card/60 backdrop-blur sm:col-span-1">
                <CardContent className="p-5">
                  <div className="flex items-center justify-center gap-2 text-2xl font-bold text-teal-400">
                    <CheckCircle2 className="h-5 w-5" />
                    5–7 days
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">to submission-ready</p>
                </CardContent>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LIVE TICKER */}
      <LiveTicker />

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="border-b border-border/40 py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-teal-500/40 bg-teal-500/10 text-teal-300">
              The Process
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              From draft to submission-ready in 5–7 days
            </h2>
            <p className="mt-3 text-muted-foreground">
              You stay the principal investigator. We bring the structure, reviewer psychology, and the QA your draft needs.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                n: 1,
                title: "Describe your science",
                desc: "Plain language. We extract aims, mechanism, target institute, and commercialization angle. You provide the science — we add the structure.",
              },
              {
                n: 2,
                title: "We write & simulate review",
                desc: "Every section drafted to NIH conventions. Three independent reviewer personas score it before delivery. Weak spots come back to you with the receipts.",
              },
              {
                n: 3,
                title: "Certified & delivered",
                desc: "Three-pass quality review: science, NIH compliance, simulated impact score. If the score isn't competitive, we rewrite. You get a submission-ready package.",
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <Card className="h-full border-border/40 bg-card/60">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/15 text-sm font-bold text-teal-400">
                      {s.n}
                    </div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STUDY SECTION DEMO */}
      <StudySectionDemo />

      {/* COMPARISON */}
      <section className="border-b border-border/40 bg-muted/30 py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <Reveal className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How we compare</h2>
            <p className="mt-3 text-muted-foreground">
              Across every dimension biotech founders actually care about.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="overflow-hidden border-border/40 bg-card/60">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border/40 bg-muted/40">
                      <th className="px-4 py-3 font-semibold">Feature</th>
                      <th className="px-4 py-3 font-semibold">Human consultant</th>
                      <th className="px-4 py-3 font-semibold">Generic AI</th>
                      <th className="px-4 py-3 font-semibold text-teal-300">PayLineHQ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_ROWS.map((r, i) => (
                      <tr
                        key={r.feature}
                        className={`border-b border-border/20 ${i % 2 ? "bg-muted/10" : ""}`}
                      >
                        <td className="px-4 py-3 font-medium">{r.feature}</td>
                        <td className="px-4 py-3 text-muted-foreground">{r.consultant}</td>
                        <td className="px-4 py-3 text-muted-foreground">{r.ai}</td>
                        <td
                          className={`px-4 py-3 font-medium ${
                            r.payHighlight ? "bg-teal-500/10 text-teal-200" : "text-foreground"
                          }`}
                        >
                          {r.paylinehq}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* FOUNDER STORY (replaces fake testimonials) */}
      <section className="border-b border-border/40 py-24">
        <div className="container mx-auto max-w-3xl px-6">
          <Reveal className="text-center">
            <Badge variant="outline" className="mb-4 border-teal-500/40 bg-teal-500/10 text-teal-300">
              Founder POV
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why I built PayLineHQ</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm Eddie Bannerman-Menson, founder of <span className="text-foreground">COARE Holdings</span>.
              We're developing DCLK1-targeted CAR-T cell therapy for ovarian cancer. Like every biotech
              founder, my path to the clinic runs through non-dilutive funding — primarily NIH SBIR/STTR.
            </p>
            <p>
              I spent years writing applications, waiting 9 months, watching them get triaged for fixable
              reasons — vague innovation framing, underpowered statistics, citations that didn't quite
              support the claim. Reviewers caught what I couldn't see. There was no way to{" "}
              <em>simulate</em> their perspective before submission.
            </p>
            <p>
              PayLineHQ is what I wished existed. It runs your application through three independent
              reviewer simulations using 25 years of NIH peer-review psychology, scores it against
              real funding lines, and tells you exactly what to fix before NIH does. The same engine
              that's now writing my COARE submissions.
            </p>
            <p className="text-foreground">
              If it works for me, it works for you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section id="pricing" className="border-b border-border/40 bg-muted/30 py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-teal-500/40 bg-teal-500/10 text-teal-300">
              Pricing
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Pick the path that fits your timeline
            </h2>
            <p className="mt-3 text-muted-foreground">
              Self-Serve for hands-on PIs. Submit-Ready when you'd rather we drive.
            </p>
          </Reveal>

          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {/* Self-Serve */}
            <Reveal delay={0.05}>
              <Card className="h-full border-border/40 bg-card/60">
                <CardContent className="p-7">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    For hands-on PIs
                  </div>
                  <h3 className="text-2xl font-bold">Self-Serve</h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold tracking-tight">$149</span>
                    <span className="text-sm text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    You write. The app simulates peer review, verifies citations, and runs FOA-specific
                    compliance checks every time you save.
                  </p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {[
                      "Study Section simulation engine",
                      "Three-pass quality review on demand",
                      "FOA-specific compliance checking",
                      "Citation verification across 5 databases",
                      "All NIH mechanisms supported",
                      "DOCX export · unlimited revisions",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <LinkButton href={APP_URL} target="_blank" rel="noopener" variant="outline" className="mt-7 w-full border-teal-500/40 text-teal-300 hover:bg-teal-500/10">
                      Try free for 14 days <ArrowRight className="ml-1.5 h-4 w-4" />
                    </LinkButton>
                </CardContent>
              </Card>
            </Reveal>

            {/* Submit-Ready (DFY) */}
            <Reveal delay={0.1}>
              <Card className="relative h-full border-teal-500/50 bg-card/80 ring-1 ring-teal-500/40">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-teal-500 text-white">Most Popular</Badge>
                </div>
                <CardContent className="p-7">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-teal-300">
                    When you'd rather we drive
                  </div>
                  <h3 className="text-2xl font-bold">Submit-Ready</h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold tracking-tight">$2,500</span>
                    <span className="text-sm text-muted-foreground">upfront</span>
                  </div>
                  <p className="mt-2 text-xs font-semibold text-amber-300">+ 3% success fee if funded</p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    We draft the entire application, run three peer-review simulations, certify it, and
                    deliver a submission-ready package. 5–7 business days.
                  </p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {[
                      "Complete NIH application — every section",
                      "Commercialization Potential narrative",
                      "Three-pass quality certification",
                      "Study Section simulation with impact score",
                      "Citation verification (5 databases)",
                      "FOA-specific NIH compliance check",
                      "DOCX + PDF submission package",
                      "90-day post-delivery revision support",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <LinkButton href="/hire" className="mt-7 w-full bg-teal-500 text-white hover:bg-teal-400">
                      Book a consult <ArrowRight className="ml-1.5 h-4 w-4" />
                    </LinkButton>
                </CardContent>
              </Card>
            </Reveal>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Phase II / Fast Track from $4,500 · R01/R21 from $3,500 ·{" "}
            <Link href="/pricing" className="text-teal-300 underline-offset-4 hover:underline">
              Full pricing
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border/40 py-24">
        <div className="container mx-auto max-w-3xl px-6">
          <Reveal className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Common questions</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`q${i}`} className="border-border/40">
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(50rem 30rem at 50% 50%, rgba(13,148,136,0.20), transparent 60%)",
          }}
        />
        <div className="container mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Your science deserves to be reviewed{" "}
              <span className="text-teal-400">before</span> NIH does.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Start free in the app, or book a call and we'll write the whole thing.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <LinkButton href={APP_URL} target="_blank" rel="noopener" size="lg"   className="bg-teal-500 text-white hover:bg-teal-400">
                  Try PayLineHQ free <ArrowRight className="ml-1.5 h-4 w-4" />
                </LinkButton>
              <LinkButton href="/hire" size="lg" variant="outline"   className="border-foreground/20 text-foreground/90">Book a consult</LinkButton>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
