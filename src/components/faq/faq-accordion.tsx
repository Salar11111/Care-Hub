"use client";

import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";

const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))];

export function FaqAccordion() {
  const [active, setActive] = useState<string | null>("f1");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () =>
      category === "All" ? faqs : faqs.filter((f) => f.category === category),
    [category],
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="FAQ categories">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={category === cat}
            onClick={() => setCategory(cat)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              category === cat
                ? "border-teal-600 bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300"
                : "border-foreground/15 text-foreground/70 hover:border-foreground/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {filtered.map((faq) => {
          const open = active === faq.id;
          return (
            <div
              key={faq.id}
              className={`overflow-hidden rounded-2xl border transition-colors ${
                open ? "border-teal-600/40 bg-background" : "border-foreground/10 bg-background"
              }`}
            >
              <button
                onClick={() => setActive(open ? null : faq.id)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-base font-semibold">{faq.question}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    open
                      ? "rotate-45 bg-teal-600 text-white"
                      : "bg-foreground/5 text-foreground/60"
                  }`}
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-sm leading-relaxed text-foreground/70">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}