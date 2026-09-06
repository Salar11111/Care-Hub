import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Department } from "@/lib/data";

export function DepartmentCard({ department }: { department: Department }) {
  const Icon = department.icon;
  return (
    <Link
      href={`/departments/${department.slug}`}
      className="group flex flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-600/40 hover:shadow-[0_16px_40px_-16px_rgba(13,148,136,0.35)]"
    >
      <div className="flex items-center justify-between">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${department.color}`}
        >
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <ArrowUpRight
          className="h-5 w-5 text-foreground/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-600"
          aria-hidden="true"
        />
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold">{department.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-foreground/65">
          {department.tagline}
        </p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-teal-600 dark:text-teal-400">
        Explore care
      </span>
    </Link>
  );
}