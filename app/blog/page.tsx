import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "PayLineHQ blog — analysis of NIH funding patterns, reviewer psychology, and what separates funded grants from triaged ones.",
};

const POSTS = [
  {
    slug: "why-your-grant-got-triaged",
    title: "Why your grant got triaged (and what to do next)",
    summary:
      "After analyzing dozens of triaged applications, the pattern is rarely about the science. It's about how the science is framed.",
    date: "2026-04-12",
  },
];

export default function BlogIndex() {
  return (
    <>
      <SiteNav />
      <main className="border-b border-border/40">
        <section className="container mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <Reveal>
            <Badge
              variant="outline"
              className="mb-4 border-teal-500/40 bg-teal-500/10 text-teal-300"
            >
              Blog
            </Badge>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
              Field notes from the funding line.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              What we&apos;re seeing across SBIR/STTR submissions, R01s, R21s, and the rest. New
              issues land in The Payline first.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <div className="space-y-3">
              {POSTS.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`}>
                  <Card className="border-border/40 bg-card/60 transition-colors hover:bg-card/80">
                    <CardContent className="p-5">
                      <p className="text-xs text-muted-foreground">{p.date}</p>
                      <p className="mt-1 text-lg font-semibold">{p.title}</p>
                      <p className="mt-1.5 text-sm text-muted-foreground">{p.summary}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              More posts coming. Subscribe to{" "}
              <Link href="/newsletter" className="text-teal-300 underline-offset-4 hover:underline">
                The Payline
              </Link>{" "}
              to get them in your inbox first.
            </p>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
