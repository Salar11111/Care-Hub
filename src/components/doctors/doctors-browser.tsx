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

  const filterButton = (active: boolean) =>
    `btn btn--secondary ${active ? "!border-accent !text-accent-strong" : ""}`;

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setFilter("all")}
          aria-pressed={filter === "all"}
          className={filterButton(filter === "all")}
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
              className={filterButton(filter === dept.slug)}
            >
              {dept.name}
            </button>
          ))}
      </div>
      <div className="grid gap-[var(--s-5)] sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
}
