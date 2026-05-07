import Link from "next/link";
import { NewsletterInline } from "@/components/newsletter-inline";

const APP_URL = "https://frankgrant.pages.dev";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white"
                aria-hidden
              >
                P
              </span>
              PayLineHQ
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              NIH grant peer-review, simulated. Built by a biotech founder for biotech founders.
            </p>
          </div>

          <FooterCol title="Product">
            <FooterLink href="/#how-it-works">How it works</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
            <FooterLink href={APP_URL} target="_blank">App</FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
          </FooterCol>

          <FooterCol title="Services">
            <FooterLink href="/hire">Done For You</FooterLink>
            <FooterLink href="/pricing">Phase I / II</FooterLink>
            <FooterLink href="/pricing">R01 / R21</FooterLink>
            <FooterLink href="/hire">Book a consult</FooterLink>
          </FooterCol>

          <FooterCol title="The Payline">
            <p className="text-sm text-muted-foreground">
              Biweekly NIH grant intel. The Payline is our newsletter — practical, not promotional.
            </p>
            <NewsletterInline />
          </FooterCol>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} PayLineHQ · COARE Holdings LLC</p>
          <div className="flex gap-5">
            <Link href="https://linkedin.com/company/paylinehq" target="_blank" className="hover:text-foreground">
              LinkedIn
            </Link>
            <Link href="/newsletter" className="hover:text-foreground">
              Newsletter
            </Link>
            <Link href="#" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="hover:text-foreground">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold">{title}</h4>
      <ul className="space-y-2">
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
  children,
  target,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={target ? "noopener" : undefined}
      className="text-sm text-muted-foreground hover:text-foreground"
    >
      {children}
    </Link>
  );
}
