"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function NewsletterInline() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  if (submitted) {
    return (
      <p className="mt-3 inline-flex items-center gap-2 text-sm text-teal-300">
        <Check className="h-4 w-4" />
        Subscribed. The next Payline is on its way.
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
      className="mt-3 flex flex-col gap-2 sm:flex-row"
      aria-label="Subscribe to The Payline"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.edu"
        aria-label="Email address"
        className="flex-1 rounded-md border border-border/50 bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-teal-500 focus:outline-none"
      />
      <Button type="submit" size="sm" className="bg-teal-500 text-white hover:bg-teal-400">
        Subscribe
      </Button>
    </form>
  );
}
