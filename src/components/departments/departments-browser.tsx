"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { departments } from "@/lib/data";
import { DepartmentCard } from "@/components/departments/department-card";

export function DepartmentsBrowser() {
  const [query, setQuery] = useState("");
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return departments.filter((d) => {
      const matchesQuery =
        q.length === 0 ||
        d.name.toLowerCase().includes(q) ||
        d.tagline.toLowerCase().includes(q) ||
        d.services.some((s) => s.toLowerCase().includes(q));
      const matchesFeatured = !showOnlyFeatured || d.featured;
      return matchesQuery && matchesFeatured;
    });
  }, [query, showOnlyFeatured]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative block w-full sm:max-w-sm">
          <span className="sr-only">Search departments</span>
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-foreground/40"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or service…"
            className="w-full rounded-full border border-foreground/15 bg-background py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
          />
        </label>
        <button
          onClick={() => setShowOnlyFeatured((v) => !v)}
          aria-pressed={showOnlyFeatured}
          className={`inline-flex items-center gap-2 self-start rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors sm:self-auto ${
            showOnlyFeatured
              ? "border-teal-600 bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300"
              : "border-foreground/15 text-foreground/70 hover:border-foreground/30"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${showOnlyFeatured ? "bg-teal-500" : "bg-foreground/25"}`}
            aria-hidden="true"
          />
          Core specialties
        </button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((dept) => (
          <DepartmentCard key={dept.slug} department={dept} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-foreground/15 px-6 py-16 text-center">
          <p className="font-display text-xl font-semibold">No departments found</p>
          <p className="mt-1 text-sm text-foreground/60">
            Try a different search term, or contact us and we&apos;ll point you in the
            right direction.
          </p>
        </div>
      ) : null}
    </div>
  );
}