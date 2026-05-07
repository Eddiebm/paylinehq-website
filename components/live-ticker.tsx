"use client";

import { motion } from "motion/react";

const ITEMS = [
  { label: "Grants peer-reviewed", value: "342" },
  { label: "in NIH awards", value: "$7.2M+" },
  { label: "Avg. impact-score lift", value: "+12 pts" },
  { label: "Active submissions", value: "63" },
  { label: "Citation hallucinations caught", value: "1,847" },
  { label: "Refund if not worth submitting", value: "30 days" },
];

export function LiveTicker() {
  return (
    <div className="overflow-hidden border-b border-border/40 bg-muted/30 py-3">
      <motion.div
        className="flex shrink-0 gap-12 whitespace-nowrap text-xs text-muted-foreground sm:text-sm"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...ITEMS, ...ITEMS].map((it, i) => (
          <span key={i} className="inline-flex items-center gap-2">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-teal-400"
              aria-hidden
            />
            <span className="font-semibold text-foreground">{it.value}</span>
            <span>{it.label}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
