import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { NewsletterInline } from "@/components/newsletter-inline";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "The Payline — biweekly NIH grant intel",
  description:
    "The Payline is PayLineHQ's biweekly newsletter for biotech founders chasing NIH funding. Practical reviewer psychology, what gets triaged, what gets funded, and the templates we actually use.",
};

const RECENT = [
  {
    title: "Why your innovation section is killing your score",
    summary: "The 90% rule: most innovation sections fail because they describe what's new instead of what's now possible. The fix in 200 words.",
  },
  {
    title: "Three citations every NCI Phase I needs",
    summary: "If you're submitting to NCI, these three reference patterns appear in nearly every funded application. Use them.",
  },
  {
    title: "The triage email is rarely about science",
    summary: "After analyzing 60 triaged grants, the pattern is clear — most aren't triaged for the science. They're triaged for the structure. What to fix.",
  },
];

export default function NewsletterPage() {
  return (
    <>
      <SiteNav />
      <main className="border-b border-border/40">
        <section className="container mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <Reveal className="text-center">
            <Badge
              variant="outline"
              className="mb-4 border-teal-500/40 bg-teal-500/10 text-teal-300"
            >
              The Payline
            </Badge>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
              Biweekly NIH grant intel.<br />
              Practical, not promotional.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Reviewer psychology, what gets triaged, what gets funded, and the templates we actually
              use on Submit-Ready engagements. Free. Unsubscribe anytime.
            </p>
            <div className="mx-auto mt-8 max-w-md">
              <NewsletterInline />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-teal-300">
              Recent issues
            </h2>
            <div className="space-y-3">
              {RECENT.map((p) => (
                <Card key={p.title} className="border-border/40 bg-card/60">
                  <CardContent className="p-5">
                    <p className="font-semibold">{p.title}</p>
                    <p className="mt-1.5 text-sm text-muted-foreground">{p.summary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
