"use client";

import Link from "next/link";
import { useState } from "react";

const APP_URL = "https://frankgrant.pages.dev";

const NAV_LINKS = [
  { href: "/pricing", label: "Subscriptions" },
  { href: "/hire", label: "Commission" },
  { href: "/newsletter", label: "The Payline" },
  { href: "/blog", label: "Field notes" },
  { href: "/faq", label: "FAQ" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-[3] border-b border-[var(--ink)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="flex h-14 items-baseline justify-between gap-6">
          {/* Wordmark — editorial masthead */}
          <Link
            href="/"
            className="flex items-baseline gap-2.5 self-center"
            aria-label="PayLineHQ home"
          >
            <span className="font-display text-[1.55rem] tracking-[-0.02em] leading-none">
              PayLineHQ
            </span>
            <span className="hidden sm:inline smallcaps text-[var(--ink-faint)] pl-2.5 border-l border-[var(--ink-rule)]">
              Peer-Review Engine
            </span>
          </Link>

          {/* Right — links + primary action */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-baseline gap-7 self-center"
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[var(--ink-muted)] hover:text-[var(--oxblood)] transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={APP_URL}
              target="_blank"
              rel="noopener"
              className="font-mono text-[0.72rem] uppercase tracking-[0.16em] bg-[var(--ink)] text-[var(--paper)] px-4 py-2.5 hover:bg-[var(--oxblood)] transition-colors"
            >
              Open the app →
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden self-center font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[var(--ink)] border border-[var(--ink-rule)] px-3 py-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="md:hidden border-t border-[var(--ink-rule)] bg-[var(--paper-warm)]"
        >
          <div className="mx-auto max-w-[1280px] px-6 py-5 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-[0.78rem] uppercase tracking-[0.16em] text-[var(--ink)] py-1"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={APP_URL}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="mt-2 font-mono text-[0.78rem] uppercase tracking-[0.16em] bg-[var(--ink)] text-[var(--paper)] px-4 py-3 text-center"
            >
              Open the app →
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
