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
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or service…"
            className="field-input pl-11"
          />
        </label>
        <button
          onClick={() => setShowOnlyFeatured((v) => !v)}
          aria-pressed={showOnlyFeatured}
          className={`btn btn--secondary self-start sm:self-auto ${
            showOnlyFeatured ? "!border-accent !text-accent-strong" : ""
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${showOnlyFeatured ? "bg-accent" : "bg-muted"}`}
            aria-hidden="true"
          />
          Core specialties
        </button>
      </div>

      <div className="grid gap-[var(--s-5)] sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((dept) => (
          <DepartmentCard key={dept.slug} department={dept} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="card border-dashed px-6 py-16 text-center">
          <p className="font-display text-xl font-semibold">No departments found</p>
          <p className="mt-1 text-sm text-muted">
            Try a different search term, or contact us and we&apos;ll point you in the
            right direction.
          </p>
        </div>
      ) : null}
    </div>
  );
}
