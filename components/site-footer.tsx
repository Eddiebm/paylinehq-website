import Link from "next/link";
import { NewsletterInline } from "@/components/newsletter-inline";

const APP_URL = "https://frankgrant.pages.dev";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-[var(--ink)] bg-[var(--paper-warm)] relative z-[2]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-14 lg:py-20">
        {/* Editorial newsletter offer — top of footer */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12 pb-14 border-b border-[var(--ink-rule)]">
          <div className="col-span-12 md:col-span-5">
            <p className="smallcaps text-[var(--oxblood)] mb-3">⌜ The Payline ⌝</p>
            <h3 className="font-display text-[2rem] leading-[1.05] tracking-[-0.02em] mb-4">
              Biweekly NIH grant intel.
              <br />
              <em className="italic">Practical, not promotional.</em>
            </h3>
            <p className="marginalia max-w-md">
              Reviewer psychology, what gets triaged, what gets funded, and the templates we use
              on Submit-Ready engagements. Free.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 md:pl-12 md:border-l md:border-[var(--ink-rule)] flex items-center">
            <div className="w-full">
              <NewsletterInline />
            </div>
          </div>
        </div>

        {/* Colophon-style links */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12 pt-14">
          <div className="col-span-12 md:col-span-4">
            <p className="font-display text-[1.6rem] tracking-[-0.02em] mb-2">PayLineHQ</p>
            <p className="marginalia max-w-xs">
              A peer-review engine for NIH grant applications. Built by a biotech founder for
              biotech founders. Published by COARE Holdings, Saint Louis &amp; Accra.
            </p>
          </div>

          <FooterCol title="The product">
            <FooterLink href="/">Cover story</FooterLink>
            <FooterLink href="/pricing">Subscriptions</FooterLink>
            <FooterLink href={APP_URL} target="_blank">
              Open the app
            </FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
          </FooterCol>

          <FooterCol title="Engagements">
            <FooterLink href="/hire">Submit-Ready (DFY)</FooterLink>
            <FooterLink href="/pricing">Phase I / Phase II</FooterLink>
            <FooterLink href="/pricing">R01 / R21</FooterLink>
            <FooterLink href="/hire">Commission</FooterLink>
          </FooterCol>

          <FooterCol title="Reading">
            <FooterLink href="/newsletter">The Payline</FooterLink>
            <FooterLink href="/blog">Field notes</FooterLink>
            <FooterLink href="/faq">Editorial FAQ</FooterLink>
          </FooterCol>
        </div>

        {/* Final masthead-style colophon */}
        <div className="mt-14 pt-7 border-t border-[var(--ink-rule)] flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="smallcaps text-[var(--ink-faint)]">
            © {new Date().getFullYear()} · COARE Holdings LLC · Set in Newsreader &amp; JetBrains
            Mono · Saint Louis &amp; Accra
          </p>
          <div className="flex items-baseline gap-5">
            <Link
              href="https://linkedin.com/company/paylinehq"
              target="_blank"
              className="smallcaps editorial-link"
            >
              LinkedIn
            </Link>
            <Link href="/newsletter" className="smallcaps editorial-link">
              Newsletter
            </Link>
            <Link href="#" className="smallcaps editorial-link">
              Terms
            </Link>
            <Link href="#" className="smallcaps editorial-link">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="col-span-6 md:col-span-2 lg:col-span-2">
      <p className="smallcaps text-[var(--ink-faint)] mb-4">{title}</p>
      <ul className="space-y-2.5">
        {Array.isArray(children) ? (
          children.map((c, i) => <li key={i}>{c}</li>)
        ) : (
          <li>{children}</li>
        )}
      </ul>
    </div>
  );
}

function FooterLink({
  href,
  target,
  children,
}: {
  href: string;
  target?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={target ? "noopener" : undefined}
      className="font-display text-[0.98rem] text-[var(--ink)] editorial-link"
    >
      {children}
    </Link>
  );
}
