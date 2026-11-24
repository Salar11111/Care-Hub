import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Department } from "@/lib/data";

export function DepartmentCard({ department }: { department: Department }) {
  const Icon = department.icon;
  return (
    <Link
      href={`/departments/${department.slug}`}
      className="card card-hover group flex flex-col gap-4 p-6"
    >
      <div className="flex items-center justify-between">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-[var(--r-btn)] ${department.color}`}
        >
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <ArrowUpRight
          className="h-5 w-5 text-muted transition-transform duration-[var(--dur)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-strong"
          aria-hidden="true"
        />
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold">{department.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">
          {department.tagline}
        </p>
      </div>
      <span className="link-underline mt-auto inline-flex items-center gap-1 text-sm font-semibold text-accent-strong">
        Explore care
      </span>
    </Link>
  );
}
