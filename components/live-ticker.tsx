"use client";

import { motion } from "motion/react";

const ITEMS = [
  ["342", "grants peer-reviewed"],
  ["$7.2M+", "in NIH awards"],
  ["+12 pts", "average impact-score lift"],
  ["63", "active submissions this cycle"],
  ["1,847", "citation hallucinations caught"],
  ["30 days", "refund if not worth submitting"],
];

export function LiveTicker() {
  return (
    <div className="border-y border-[var(--ink)] overflow-hidden bg-[var(--paper)]">
      <motion.ul
        className="flex shrink-0 gap-12 whitespace-nowrap py-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      >
        {[...ITEMS, ...ITEMS, ...ITEMS].map(([fig, label], i) => (
          <li key={i} className="inline-flex items-baseline gap-3">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--oxblood)]"
              aria-hidden
            />
            <span className="font-display text-[1.05rem] tabular-nums text-[var(--ink)]">
              {fig}
            </span>
            <span className="font-mono text-[0.74rem] uppercase tracking-[0.16em] text-[var(--ink-muted)]">
              {label}
            </span>
            <span className="text-[var(--ink-faint)] mx-3">·</span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
