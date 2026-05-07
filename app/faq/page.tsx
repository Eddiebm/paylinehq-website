import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about PayLineHQ — service vs. tool, peer review simulation, success fee, ownership, timing, and more.",
};

const FAQS = [
  {
    section: "What it is",
    items: [
      {
        q: "Is PayLineHQ a service or a tool?",
        a: "Both. Self-Serve is the SaaS — you write your grant in our app, get the same Study Section simulation and citation verification, and ship it yourself ($149/mo). Submit-Ready is the service tier — we draft the application, run it through peer review, and deliver a submission-ready package ($2,500 + 3% if funded).",
      },
      {
        q: "What does the peer review simulation actually do?",
        a: "Three independent reviewer personas — covering basic science, translational, and biostatistics perspectives — score your grant against NIH criteria. They flag specific weaknesses (vague innovation, underpowered design, unsupported claims, citation issues) before NIH does. The simulation is built on 25 years of reviewer psychology and analysis of funded vs. triaged grants.",
      },
      {
        q: "Which NIH mechanisms do you support?",
        a: "All major mechanisms — SBIR/STTR Phase I and Phase II, Fast Track, R01, R21, R03, R15, K-series, P-series. Some mechanisms have additional considerations and may take longer in Done-For-You; reach out for specifics.",
      },
    ],
  },
  {
    section: "Pricing & timing",
    items: [
      {
        q: "What's the success fee and when do I pay it?",
        a: "If your grant is funded, you pay 3% of the total award amount within 30 days of receiving your Notice of Award. This comes from your company or institution's operating funds — NIH policy prohibits contingency fees being paid from grant funds directly. If you don't get funded, your only cost is the upfront fee.",
      },
      {
        q: "How long does Done-For-You take?",
        a: "Phase I grants typically complete in 5–7 business days from submitting your intake. Complex mechanisms (Phase II, Fast Track, R01) take up to 10 business days. Three rounds of revision are included within the quoted timeline. Engage at least 2 weeks before submission deadline.",
      },
      {
        q: "Is there a refund policy?",
        a: "Yes. If we deliver an application and you decide it's not worth submitting, you have 30 days to request a refund of the upfront fee.",
      },
    ],
  },
  {
    section: "Ownership & process",
    items: [
      {
        q: "Who owns my application?",
        a: "You — completely and without reservation. We're a writing and review service, not a co-author. Your IP, science, data, and grant application are 100% yours. We make no claim on funded research that results from our work.",
      },
      {
        q: "What if my science isn't strong enough yet?",
        a: "PayLineHQ won't write a fundable grant out of weak science — no tool can. But it will tell you exactly which weaknesses real reviewers will flag, before you submit. Many users iterate on Specific Aims for weeks before committing to a full submission.",
      },
      {
        q: "Do I need grant-writing experience?",
        a: "No. The SaaS guides you through every section with NIH-specific structure, reviewer psychology hints, and built-in compliance checks. Most first-time users finish a Phase I draft in a weekend. The Study Section simulation runs continuously as you write.",
      },
      {
        q: "Can the simulation predict outcomes?",
        a: "It catches the same weaknesses real reviewers consistently flag. No simulation guarantees an award, but applications that score competitively in our sim consistently perform better in real review.",
      },
    ],
  },
];

export default function FAQPage() {
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
              FAQ
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Common questions
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Don&apos;t see yours?{" "}
              <a href="mailto:hello@paylinehq.com" className="text-teal-300 underline-offset-4 hover:underline">
                hello@paylinehq.com
              </a>
            </p>
          </Reveal>

          {FAQS.map((group) => (
            <Reveal key={group.section} className="mt-12">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-300">
                {group.section}
              </h2>
              <Accordion className="w-full">
                {group.items.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`${group.section}-${i}`}
                    className="border-border/40"
                  >
                    <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
