"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LinkButton } from "@/components/link-button";

const APP_URL = "https://frankgrant.pages.dev";

const NAV_LINKS = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/hire", label: "Book" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          aria-label="PayLineHQ home"
        >
          <span
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white"
            aria-hidden
          >
            P
          </span>
          <span>PayLineHQ</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LinkButton href={APP_URL} target="_blank" rel="noopener" variant="ghost"
            size="sm"
            className="text-foreground/80 hover:text-foreground">
              App
            </LinkButton>
          <LinkButton href="/hire" size="sm" className="bg-teal-500 text-white hover:bg-teal-400">Hire us</LinkButton>
        </div>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/40 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/40 md:hidden">
          <nav aria-label="Mobile" className="container mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <LinkButton href={APP_URL} target="_blank" rel="noopener" variant="outline" size="sm" className="flex-1" onClick={() => setOpen(false)}>
                App
              </LinkButton>
              <LinkButton href="/hire" size="sm" className="flex-1 bg-teal-500 text-white hover:bg-teal-400" onClick={() => setOpen(false)}>
                Hire us
              </LinkButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
