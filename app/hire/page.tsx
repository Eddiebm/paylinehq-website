import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Mail } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { LinkButton } from "@/components/link-button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hire us — Done-For-You NIH grant writing",
  description:
    "Submit-Ready Done-For-You: $2,500 upfront + 3% if funded. We draft the entire NIH application, run it through three reviewer simulations, and deliver a submission-ready package in 5–7 business days.",
};

const PROCESS = [
  {
    n: 1,
    title: "Book a 20-minute consult",
    desc: "We confirm fit, mechanism (SBIR/STTR/R01/R21), target FOA, and timeline.",
  },
  {
    n: 2,
    title: "Submit your intake",
    desc: "Aims, mechanism of action, preliminary data, prior submissions, target institute.",
  },
  {
    n: 3,
    title: "We draft + simulate",
    desc: "Every section drafted to NIH conventions. Three reviewer simulations. Three-pass QA.",
  },
  {
    n: 4,
    title: "Submission-ready delivery",
    desc: "DOCX + PDF in 5–7 business days. 90 days post-delivery revision support.",
  },
];

export default function HirePage() {
  return (
    <>
      <SiteNav />
      <main className="border-b border-border/40">
        <section className="container mx-auto max-w-4xl px-6 py-20 sm:py-24">
          <Reveal className="text-center">
            <Badge
              variant="outline"
              className="mb-4 border-teal-500/40 bg-teal-500/10 text-teal-300"
            >
              Submit-Ready · Done-For-You
            </Badge>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
              We write the grant.<br />
              You submit it knowing it won&apos;t get triaged.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-muted-foreground">
              $2,500 upfront + 3% success fee if funded. 5–7 business days for Phase I. Three
              reviewer simulations and three-pass quality review on every grant.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="mailto:hello@paylinehq.com?subject=Submit-Ready%20consult&body=Hi%20PayLineHQ%2C%0A%0AI%27d%20like%20to%20book%20a%20consult.%0A%0AMechanism%3A%20%0ATarget%20FOA%3A%20%0ATimeline%3A%20%0AHere%27s%20a%20one-paragraph%20description%20of%20my%20research%3A%20%0A%0AThanks%2C"
                className={cn(buttonVariants({ size: "lg" }), "bg-teal-500 text-white hover:bg-teal-400")}
              >
                Book a 20-min consult <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
              <LinkButton href="/pricing" size="lg" variant="outline" className="border-foreground/20">See full pricing</LinkButton>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Or email{" "}
              <a className="underline-offset-4 hover:underline" href="mailto:hello@paylinehq.com">
                hello@paylinehq.com
              </a>{" "}
              directly.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-16">
            <h2 className="mb-6 text-center text-2xl font-bold tracking-tight">
              The process
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {PROCESS.map((s) => (
                <Card key={s.n} className="border-border/40 bg-card/60">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-xs font-bold text-teal-300">
                        {s.n}
                      </div>
                      <div>
                        <p className="font-semibold">{s.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-16">
            <Card className="border-border/40 bg-muted/20">
              <CardContent className="grid gap-6 p-7 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-teal-400" />
                  <div>
                    <p className="text-sm font-semibold">5–7 business days</p>
                    <p className="text-xs text-muted-foreground">For Phase I · Phase II up to 10</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-teal-400" />
                  <div>
                    <p className="text-sm font-semibold">100% your IP</p>
                    <p className="text-xs text-muted-foreground">No co-author claims, ever</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-teal-400" />
                  <div>
                    <p className="text-sm font-semibold">90-day support</p>
                    <p className="text-xs text-muted-foreground">Free revisions post-delivery</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
