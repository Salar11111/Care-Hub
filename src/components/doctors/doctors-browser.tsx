"use client";

import { useMemo, useState } from "react";
import { departments, doctors } from "@/lib/data";
import { DoctorCard } from "@/components/doctors/doctor-card";

export function DoctorsBrowser() {
  const [filter, setFilter] = useState<string>("all");

  const filtered = useMemo(
    () => (filter === "all" ? doctors : doctors.filter((d) => d.department === filter)),
    [filter],
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setFilter("all")}
          aria-pressed={filter === "all"}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
            filter === "all"
              ? "border-teal-600 bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300"
              : "border-foreground/15 text-foreground/70 hover:border-foreground/30"
          }`}
        >
          All ({doctors.length})
        </button>
        {departments
          .filter((d) => doctors.some((doc) => doc.department === d.slug))
          .map((dept) => (
            <button
              key={dept.slug}
              onClick={() => setFilter(dept.slug)}
              aria-pressed={filter === dept.slug}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                filter === dept.slug
                  ? "border-teal-600 bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300"
                  : "border-foreground/15 text-foreground/70 hover:border-foreground/30"
              }`}
            >
              {dept.name}
            </button>
          ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
}