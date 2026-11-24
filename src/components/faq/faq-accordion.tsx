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
            className={`btn btn--secondary ${
              category === cat ? "!border-accent !text-accent-strong" : ""
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
              className={`card overflow-hidden ${open ? "!border-accent" : ""}`}
            >
              <button
                onClick={() => setActive(open ? null : faq.id)}
                aria-expanded={open}
                className="flex min-h-11 w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-base font-semibold">{faq.question}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-[var(--dur)] ${
                    open ? "rotate-45 bg-accent text-white" : "bg-accent-soft text-accent-strong"
                  }`}
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
              <div
                className={`grid transition-all duration-[var(--dur)] ease-in-out ${
                  open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-sm leading-relaxed text-muted">
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
