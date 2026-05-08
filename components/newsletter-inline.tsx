"use client";

import { useState } from "react";

export function NewsletterInline() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  if (submitted) {
    return (
      <p className="font-display text-[1.05rem] text-[var(--ink)] italic">
        — Subscribed. The next issue of <em>The Payline</em> is on its way.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!email) return;
        setSubmitted(true);
      }}
      aria-label="Subscribe to The Payline"
      className="w-full"
    >
      <label className="smallcaps text-[var(--ink-faint)] block mb-2">
        Subscribe — no charge
      </label>
      <div className="flex flex-col sm:flex-row items-stretch border-2 border-[var(--ink)] bg-[var(--paper)]">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.edu"
          aria-label="Email address"
          className="flex-1 px-4 py-3 font-mono text-[0.92rem] text-[var(--ink)] bg-transparent placeholder:text-[var(--ink-faint)]/60 focus:outline-none"
        />
        <button
          type="submit"
          className="font-mono text-[0.78rem] uppercase tracking-[0.16em] bg-[var(--ink)] text-[var(--paper)] px-7 py-3 hover:bg-[var(--oxblood)] transition-colors"
        >
          Subscribe →
        </button>
      </div>
      <p className="marginalia mt-2">
        Biweekly. We unsubscribe with one click — no clawing back.
      </p>
    </form>
  );
}
