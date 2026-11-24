import Link from "next/link";
import { BadgeCheck, CalendarPlus } from "lucide-react";
import type { Doctor } from "@/lib/data";
import { Stars } from "@/components/ui/stars";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="card card-hover flex flex-col gap-5 p-6">
      <div className="flex items-center gap-4">
        <span
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--r-btn)] bg-accent-soft text-base font-bold text-accent-strong"
          aria-hidden="true"
        >
          {doctor.initials}
        </span>
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 font-display text-lg font-semibold leading-tight">
            {doctor.name}
          </p>
          <p className="truncate text-sm text-muted">{doctor.specialty}</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <Stars rating={doctor.rating} />
        <span className="text-muted">{doctor.reviews} reviews</span>
      </div>
      <div className="flex items-center gap-2 rounded-[var(--r-btn)] bg-background px-4 py-3">
        <BadgeCheck className="h-4 w-4 shrink-0 text-accent-strong" aria-hidden="true" />
        <p className="text-sm text-muted">{doctor.yearsExperience} years experience</p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {doctor.availability.slice(0, 3).map((slot) => (
          <span
            key={slot}
            className="rounded-[var(--r-btn)] border border-line px-3 py-1 text-[length:var(--t-13)] font-medium text-muted"
          >
            {slot}
          </span>
        ))}
      </div>
      <div className="mt-auto">
        <Link href={`/book?doctor=${doctor.id}`} className="btn btn--secondary w-full">
          <CalendarPlus className="h-4 w-4" aria-hidden="true" />
          Book with {doctor.name.split(" ").at(-1)}
        </Link>
      </div>
    </div>
  );
}
