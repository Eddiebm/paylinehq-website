import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { StudySectionDemo } from "@/components/study-section-demo";
import { LiveTicker } from "@/components/live-ticker";
import { Reveal } from "@/components/reveal";

const APP_URL = "https://frankgrant.pages.dev";

const FAQS = [
  {
    q: "Service or tool?",
    a: "Both. Self-Serve is the SaaS — you write your grant in the app and get the same Study Section simulation. Submit-Ready is the service tier — we draft the entire application, run it through peer review, and deliver a submission-ready package.",
  },
  {
    q: "What if my science is weak?",
    a: "PayLineHQ won't write a fundable grant out of weak science — no tool can. But it will tell you exactly which weaknesses real reviewers will flag, before you submit. Use it as a diagnostic.",
  },
  {
    q: "Do I own the work?",
    a: "Completely. We're a writing and review service, not a co-author. Your IP, your science, your grant. We make no claim on funded research.",
  },
  {
    q: "How is this different from hiring a consultant?",
    a: "Consultants charge $5–15K, take 4–8 weeks, and don't simulate peer review. Submit-Ready is $2,500 + 3% if funded, takes 5–7 business days, includes three reviewer simulations.",
  },
  {
    q: "Does the simulation actually predict outcomes?",
    a: "It catches the same weaknesses real reviewers consistently flag. No simulation guarantees an award, but applications scoring competitively in our simulation perform better in real review.",
  },
];

export default function Home() {
  return (
    <>
      <SiteNav />

      <main className="relative z-[2]">
        {/* ── COVER / HERO ──────────────────────────────────────────── */}
        <section className="border-b border-[var(--ink-rule)]">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            {/* Issue line */}
            <div className="flex items-baseline justify-between border-b border-[var(--ink-rule)] py-3">
              <span className="smallcaps">Vol. 01 · Issue 01</span>
              <span className="smallcaps text-[var(--ink-faint)]">
                Peer Review Engine, North America Edition
              </span>
            </div>

            {/* The cover */}
            <div className="grid grid-cols-12 gap-6 lg:gap-12 py-14 lg:py-24">
              <div className="col-span-12 lg:col-span-9">
                <p className="smallcaps text-[var(--oxblood)] mb-7">
                  ⌜ The Cover Story ⌝
                </p>
                <h1 className="font-display text-[clamp(2.75rem,7.5vw,7rem)] leading-[0.95] tracking-[-0.035em] mb-9 text-balance">
                  Stop your NIH grant
                  <br />
                  from <em className="italic font-normal text-[var(--oxblood)]">getting triaged.</em>
                </h1>
                <div className="grid grid-cols-12 gap-6 lg:gap-12">
                  <p className="dropcap col-span-12 md:col-span-7 text-[1.18rem] leading-[1.62] text-[var(--ink)] text-pretty">
                    Most NIH grants are not triaged for the science. They are triaged for the
                    <em> framing</em>: vague innovation claims, underpowered statistics, citations
                    that almost — but do not quite — support the claim. Reviewers see what the PI
                    cannot. PayLineHQ runs your application through three independent reviewer
                    simulations <em>before</em> NIH does, so you fix what they would have flagged,
                    before they count.
                  </p>
                  <aside className="col-span-12 md:col-span-5 md:pl-8 md:border-l md:border-[var(--ink-rule)]">
                    <p className="smallcaps mb-3 text-[var(--ink-faint)]">In this issue</p>
                    <ol className="font-mono text-[0.78rem] space-y-1.5">
                      {[
                        ["§01", "The premise"],
                        ["§02", "The mechanism"],
                        ["§03", "Live simulation"],
                        ["§04", "How we compare"],
                        ["§05", "A note from the founder"],
                        ["§06", "Subscriptions"],
                        ["§07", "Common questions"],
                      ].map(([n, t]) => (
                        <li key={n} className="flex items-baseline gap-3">
                          <span className="text-[var(--ink-faint)] tabular-nums">{n}</span>
                          <span className="text-[var(--ink-muted)]">{t}</span>
                        </li>
                      ))}
                    </ol>
                  </aside>
                </div>

                {/* CTA strip */}
                <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6 pt-8 border-t border-[var(--ink-rule)]">
                  <Link
                    href={APP_URL}
                    target="_blank"
                    rel="noopener"
                    className="group inline-flex items-baseline gap-2 bg-[var(--ink)] px-7 py-3 text-[var(--paper)] font-mono text-[0.78rem] uppercase tracking-[0.15em] hover:bg-[var(--oxblood)] transition-colors"
                  >
                    Open the app
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                  <Link
                    href="/hire"
                    className="font-mono text-[0.78rem] uppercase tracking-[0.15em] text-[var(--ink)] editorial-link"
                  >
                    Or commission a writer ↗
                  </Link>
                  <span className="ml-auto smallcaps text-[var(--ink-faint)] hidden md:inline">
                    No card · 30-sec to first reviewer score
                  </span>
                </div>
              </div>

              {/* Right rail — credibility figures, set as marginalia */}
              <aside className="col-span-12 lg:col-span-3 lg:border-l lg:border-[var(--ink-rule)] lg:pl-8 flex flex-col gap-9 lg:pt-12">
                {[
                  { figure: "$7.2M+", label: "in NIH awards across the team's career" },
                  { figure: "25 yrs", label: "of NIH peer-review psychology codified" },
                  { figure: "5–7", label: "business days for Submit-Ready Phase I" },
                  { figure: "3 / 3", label: "reviewer simulations on every grant" },
                ].map((m) => (
                  <div key={m.figure}>
                    <p className="font-display text-[2.4rem] leading-none tabular-nums">
                      {m.figure}
                    </p>
                    <p className="marginalia mt-2">{m.label}</p>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </section>

        {/* ── TICKER ───────────────────────────────────────────────── */}
        <LiveTicker />

        {/* ── §01 The premise ─────────────────────────────────────── */}
        <Reveal>
          <section className="border-b border-[var(--ink-rule)] py-20 lg:py-28">
            <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
              <div className="grid grid-cols-12 gap-6 lg:gap-12">
                <div className="col-span-12 md:col-span-3">
                  <p className="section-number">§01</p>
                  <h2 className="font-display text-[1.95rem] leading-[1.05] mt-3 tracking-[-0.02em]">
                    The premise
                  </h2>
                </div>
                <div className="col-span-12 md:col-span-9 md:col-start-5">
                  <p className="text-[1.32rem] leading-[1.55] tracking-[-0.005em] text-[var(--ink)] max-w-3xl text-pretty">
                    A triaged grant is a 9-month silence followed by a summary statement that
                    describes weaknesses you could have caught in a week. The fix is not better
                    science — most triaged science is good. The fix is{" "}
                    <em>seeing your application the way a reviewer sees it</em>{" "}
                    before the panel convenes.
                  </p>
                  <p className="text-[1.05rem] leading-[1.7] mt-7 max-w-2xl text-[var(--ink-muted)]">
                    PayLineHQ is a peer-review engine built on 25 years of reviewer psychology
                    and the patterns that distinguish funded grants from triaged ones. It is not
                    a writing assistant. It is the second pair of eyes you do not have on your
                    own draft.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── §02 The mechanism ───────────────────────────────────── */}
        <Reveal>
          <section className="border-b border-[var(--ink-rule)] py-20 lg:py-28 bg-[var(--paper-warm)]/40">
            <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
              <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-12">
                <div className="col-span-12 md:col-span-3">
                  <p className="section-number">§02</p>
                  <h2 className="font-display text-[1.95rem] leading-[1.05] mt-3 tracking-[-0.02em]">
                    The mechanism
                  </h2>
                </div>
                <p className="col-span-12 md:col-span-9 md:col-start-5 marginalia max-w-xl">
                  From plain-language draft to certified submission package in five to seven
                  business days. The PI provides the science; PayLineHQ provides the structure,
                  the reviewer simulation, and the certification.
                </p>
              </div>

              <ol className="grid grid-cols-1 lg:grid-cols-3 border-t border-[var(--ink)]">
                {[
                  {
                    n: "01",
                    title: "Describe your science",
                    body: "Plain language. We extract aims, mechanism, target institute, and commercialization angle. You stay the principal investigator.",
                  },
                  {
                    n: "02",
                    title: "We write & simulate review",
                    body: "Every section drafted to NIH conventions. Three independent reviewer personas score it before delivery. Weak spots come back with the receipts.",
                  },
                  {
                    n: "03",
                    title: "Certified & delivered",
                    body: "Three-pass quality review: science, NIH compliance, simulated impact score. If the score isn't competitive, we rewrite. You get a submission-ready package.",
                  },
                ].map((s) => (
                  <li
                    key={s.n}
                    className="border-b border-[var(--ink-rule)] lg:border-b-0 lg:border-r last:lg:border-r-0 px-2 py-9 lg:px-8"
                  >
                    <p className="font-mono text-[2.6rem] leading-none tabular-nums text-[var(--oxblood)] mb-7">
                      {s.n}
                    </p>
                    <h3 className="font-display text-[1.35rem] leading-[1.2] tracking-[-0.015em] mb-3">
                      {s.title}
                    </h3>
                    <p className="text-[0.98rem] leading-[1.6] text-[var(--ink-muted)] max-w-xs">
                      {s.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </Reveal>

        {/* ── §03 Live simulation ─────────────────────────────────── */}
        <Reveal>
          <section className="border-b border-[var(--ink-rule)] py-20 lg:py-28">
            <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
              <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-12">
                <div className="col-span-12 md:col-span-3">
                  <p className="section-number">§03</p>
                  <h2 className="font-display text-[1.95rem] leading-[1.05] mt-3 tracking-[-0.02em]">
                    Live simulation
                  </h2>
                </div>
                <p className="col-span-12 md:col-span-9 md:col-start-5 marginalia max-w-xl">
                  An actual summary statement, generated for an SBIR Phase I application to NCI.
                  Three reviewers, each with a different vantage. Concerns surfaced before the
                  panel meets.
                </p>
              </div>
              <StudySectionDemo />
            </div>
          </section>
        </Reveal>

        {/* ── §04 Comparison ──────────────────────────────────────── */}
        <Reveal>
          <section className="border-b border-[var(--ink-rule)] py-20 lg:py-28 bg-[var(--paper-warm)]/40">
            <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
              <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-10">
                <div className="col-span-12 md:col-span-3">
                  <p className="section-number">§04</p>
                  <h2 className="font-display text-[1.95rem] leading-[1.05] mt-3 tracking-[-0.02em]">
                    How we compare
                  </h2>
                </div>
                <p className="col-span-12 md:col-span-9 md:col-start-5 marginalia max-w-xl">
                  Across every dimension a biotech founder actually evaluates when deciding
                  whether to write the grant herself, hire a consultant, or pay for AI.
                </p>
              </div>

              <div className="overflow-x-auto -mx-6 lg:mx-0">
                <table className="min-w-full border-y-2 border-[var(--ink)]">
                  <thead>
                    <tr className="text-left">
                      <th className="px-6 lg:px-3 py-4 smallcaps text-[var(--ink-faint)] font-medium">
                        Dimension
                      </th>
                      <th className="px-6 lg:px-3 py-4 smallcaps text-[var(--ink-faint)] font-medium">
                        Human consultant
                      </th>
                      <th className="px-6 lg:px-3 py-4 smallcaps text-[var(--ink-faint)] font-medium">
                        Generic AI
                      </th>
                      <th className="px-6 lg:px-3 py-4 smallcaps text-[var(--oxblood)] font-medium">
                        PayLineHQ
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-mono text-[0.85rem]">
                    {COMPARISON_ROWS.map((r) => (
                      <tr key={r.f} className="border-t border-[var(--ink-rule)] align-top">
                        <td className="px-6 lg:px-3 py-5 text-[var(--ink)] font-medium">
                          {r.f}
                        </td>
                        <td className="px-6 lg:px-3 py-5 text-[var(--ink-muted)]">{r.c}</td>
                        <td className="px-6 lg:px-3 py-5 text-[var(--ink-muted)]">{r.a}</td>
                        <td className="px-6 lg:px-3 py-5 text-[var(--ink)]">
                          {r.h && <span className="text-[var(--oxblood)]">★ </span>}
                          {r.p}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="marginalia mt-4">
                ★ Capabilities unique to PayLineHQ at the time of this issue.
              </p>
            </div>
          </section>
        </Reveal>

        {/* ── §05 Founder note ────────────────────────────────────── */}
        <Reveal>
          <section className="border-b border-[var(--ink-rule)] py-20 lg:py-28">
            <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
              <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-10">
                <div className="col-span-12 md:col-span-3">
                  <p className="section-number">§05</p>
                  <h2 className="font-display text-[1.95rem] leading-[1.05] mt-3 tracking-[-0.02em]">
                    A note from the founder
                  </h2>
                </div>
                <div className="col-span-12 md:col-span-9 md:col-start-5">
                  <p className="smallcaps text-[var(--ink-faint)] mb-2">By Eddie Bannerman-Menson</p>
                  <p className="marginalia mb-8">
                    Founder, COARE Holdings · DCLK1-targeted CAR-T for ovarian cancer
                  </p>
                  <article className="prose-editorial space-y-6 max-w-2xl">
                    <p className="dropcap text-[1.18rem] leading-[1.7] text-[var(--ink)]">
                      I have been writing NIH grants for a decade. My company is developing a
                      DCLK1-targeted CAR-T cell therapy for platinum-resistant ovarian cancer,
                      and the path to the clinic runs through non-dilutive funding —
                      primarily SBIR and STTR.
                    </p>
                    <p className="text-[1.05rem] leading-[1.7] text-[var(--ink)]">
                      For years I watched applications come back triaged for fixable reasons.
                      Vague innovation framing. Underpowered statistics. A citation that did
                      not quite support the claim it was attached to. Reviewers caught what I
                      could not see, and there was no way to{" "}
                      <em>simulate</em> their perspective before submission.
                    </p>
                    <p className="text-[1.05rem] leading-[1.7] text-[var(--ink)]">
                      PayLineHQ is the tool I wished existed. It runs your application
                      through three independent reviewer simulations using 25 years of NIH
                      peer-review psychology, scores it against funded comparators, and tells
                      you exactly what to fix before NIH does. The same engine now reviews
                      every COARE submission.
                    </p>
                    <p className="text-[1.05rem] leading-[1.7] text-[var(--ink)] italic">
                      If it works for me, it works for you.
                    </p>
                    <div className="mt-10 flex items-center gap-4 pt-6 border-t border-[var(--ink-rule)]">
                      <span className="font-display text-[1.5rem] italic">— Eddie</span>
                      <span className="smallcaps text-[var(--ink-faint)]">
                        Eddie@bannermanmenson.com
                      </span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── §06 Subscriptions / Pricing ─────────────────────────── */}
        <Reveal>
          <section className="border-b border-[var(--ink-rule)] py-20 lg:py-28 bg-[var(--paper-warm)]/40">
            <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
              <div className="grid grid-cols-12 gap-6 lg:gap-12 mb-12">
                <div className="col-span-12 md:col-span-3">
                  <p className="section-number">§06</p>
                  <h2 className="font-display text-[1.95rem] leading-[1.05] mt-3 tracking-[-0.02em]">
                    Subscriptions
                  </h2>
                </div>
                <p className="col-span-12 md:col-span-9 md:col-start-5 marginalia max-w-xl">
                  Two paths into the engine. Pick the one that matches your timeline. Both run
                  the same simulation against the same reviewer panel.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--ink)] border-y-2 border-[var(--ink)]">
                {/* Self-Serve */}
                <div className="bg-[var(--paper)] p-8 lg:p-12">
                  <p className="smallcaps text-[var(--ink-faint)]">Self-Serve · For hands-on PIs</p>
                  <h3 className="font-display text-[2.25rem] leading-[1.05] mt-3 mb-7 tracking-[-0.025em]">
                    You write. The engine reviews.
                  </h3>
                  <p className="font-display text-[3.5rem] leading-none tabular-nums">
                    $149<span className="text-[1.2rem] text-[var(--ink-faint)] font-normal">/month</span>
                  </p>
                  <p className="marginalia mt-2 mb-8">14-day free trial · cancel anytime</p>

                  <ul className="space-y-3 text-[0.98rem] leading-[1.55]">
                    {[
                      "Study Section simulation engine, on demand",
                      "Three-pass quality review at every save",
                      "FOA-specific compliance checking",
                      "Citation verification across five databases",
                      "All NIH mechanisms supported",
                      "Unlimited revisions · DOCX export",
                    ].map((f) => (
                      <li key={f} className="flex items-baseline gap-3">
                        <span className="font-mono text-[var(--oxblood)] text-[0.7rem] mt-1">▮</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={APP_URL}
                    target="_blank"
                    rel="noopener"
                    className="mt-9 inline-flex items-baseline gap-2 font-mono text-[0.78rem] uppercase tracking-[0.15em] text-[var(--ink)] editorial-link"
                  >
                    Begin trial → 14-day, no card
                  </Link>
                </div>

                {/* Submit-Ready */}
                <div className="bg-[var(--ink)] text-[var(--paper)] p-8 lg:p-12 relative">
                  <div className="absolute top-4 right-4 lg:top-6 lg:right-6 smallcaps text-[var(--paper)] border border-[var(--paper)] px-2 py-1">
                    Most chosen
                  </div>
                  <p className="smallcaps text-[#d4cdb8]">Submit-Ready · Done by us</p>
                  <h3 className="font-display text-[2.25rem] leading-[1.05] mt-3 mb-7 tracking-[-0.025em] text-[var(--paper)]">
                    We write. You submit.
                  </h3>
                  <p className="font-display text-[3.5rem] leading-none tabular-nums">
                    $2,500<span className="text-[1.2rem] text-[#d4cdb8] font-normal"> upfront</span>
                  </p>
                  <p className="marginalia mt-2 mb-8" style={{ color: "#b8821f" }}>
                    + 3% success fee, paid only if funded
                  </p>

                  <ul className="space-y-3 text-[0.98rem] leading-[1.55]">
                    {[
                      "Complete NIH application — every section drafted",
                      "Commercialization Potential narrative",
                      "Three-pass quality certification",
                      "Study Section simulation with impact score",
                      "Citation verification across five databases",
                      "FOA-specific NIH compliance check",
                      "DOCX + PDF submission package",
                      "90-day post-delivery revision support",
                    ].map((f) => (
                      <li key={f} className="flex items-baseline gap-3">
                        <span className="font-mono text-[#b8821f] text-[0.7rem] mt-1">▮</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/hire"
                    className="mt-9 inline-flex items-baseline gap-2 font-mono text-[0.78rem] uppercase tracking-[0.15em] bg-[var(--paper)] text-[var(--ink)] px-7 py-3 hover:bg-[#b8821f] hover:text-[var(--paper)] transition-colors"
                  >
                    Commission a writer →
                  </Link>
                </div>
              </div>

              <p className="marginalia mt-6">
                Phase II / Fast Track from $4,500 · R01 / R21 from $3,500 ·{" "}
                <Link href="/pricing" className="editorial-link">
                  Full pricing schedule
                </Link>
              </p>
            </div>
          </section>
        </Reveal>

        {/* ── §07 FAQ ─────────────────────────────────────────────── */}
        <Reveal>
          <section className="border-b border-[var(--ink-rule)] py-20 lg:py-28">
            <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
              <div className="grid grid-cols-12 gap-6 lg:gap-12">
                <div className="col-span-12 md:col-span-3">
                  <p className="section-number">§07</p>
                  <h2 className="font-display text-[1.95rem] leading-[1.05] mt-3 tracking-[-0.02em]">
                    Common questions
                  </h2>
                </div>
                <dl className="col-span-12 md:col-span-9 md:col-start-5 max-w-3xl">
                  {FAQS.map((f, i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-12 gap-4 py-7 ${
                        i === 0 ? "border-y-2 border-[var(--ink)]" : "border-b border-[var(--ink-rule)]"
                      }`}
                    >
                      <dt className="col-span-12 md:col-span-4">
                        <span className="font-mono text-[0.72rem] text-[var(--ink-faint)] mr-2">
                          Q.{String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-[1.15rem] leading-[1.25] tracking-[-0.01em]">
                          {f.q}
                        </span>
                      </dt>
                      <dd className="col-span-12 md:col-span-8 text-[0.98rem] leading-[1.6] text-[var(--ink-muted)]">
                        {f.a}
                      </dd>
                    </div>
                  ))}
                  <p className="mt-8 marginalia">
                    More at{" "}
                    <Link href="/faq" className="editorial-link">
                      the full FAQ →
                    </Link>
                  </p>
                </dl>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ── COLOPHON / Final CTA ────────────────────────────────── */}
        <section className="py-24 lg:py-36">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12 text-center">
            <p className="smallcaps text-[var(--oxblood)] mb-7">⌜ Closing remarks ⌝</p>
            <h2 className="font-display text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.0] tracking-[-0.03em] max-w-4xl mx-auto text-balance">
              Your science deserves to be reviewed{" "}
              <em className="text-[var(--oxblood)]">before</em> NIH does.
            </h2>
            <p className="text-[1.1rem] leading-[1.55] text-[var(--ink-muted)] mt-7 max-w-xl mx-auto">
              Begin a free trial in the app, or commission a Submit-Ready engagement.
              Either path opens with the same simulation.
            </p>
            <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:justify-center sm:items-center">
              <Link
                href={APP_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-baseline gap-2 bg-[var(--ink)] text-[var(--paper)] px-9 py-4 font-mono text-[0.78rem] uppercase tracking-[0.15em] hover:bg-[var(--oxblood)] transition-colors"
              >
                Open the app →
              </Link>
              <Link
                href="/hire"
                className="font-mono text-[0.78rem] uppercase tracking-[0.15em] editorial-link"
              >
                Commission a writer ↗
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

const COMPARISON_ROWS = [
  { f: "Cost", c: "$5K – $15K", a: "$20 – $50/mo", p: "$2,500 + 3% if funded", h: false },
  { f: "Timeline", c: "4–8 weeks", a: "Instant (unreviewed)", p: "5–7 business days", h: false },
  { f: "NIH expertise", c: "Varies", a: "Generic", p: "25 yrs · $7M+ awarded", h: true },
  { f: "Peer review simulation", c: "—", a: "—", p: "Three reviewers, every grant", h: true },
  { f: "Citation verification", c: "Manual", a: "Hallucinations", p: "Five databases", h: true },
  { f: "FOA-specific compliance", c: "Manual", a: "—", p: "Automated", h: false },
  { f: "Quality certification", c: "—", a: "—", p: "Three-pass mandatory", h: true },
  { f: "You retain IP", c: "Yes", a: "Unclear", p: "Always — no co-author claim", h: false },
  { f: "Success-aligned pricing", c: "—", a: "—", p: "3% only if funded", h: true },
];
