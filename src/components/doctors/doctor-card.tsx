import Link from "next/link";
import { BadgeCheck, CalendarPlus } from "lucide-react";
import type { Doctor } from "@/lib/data";
import { Stars } from "@/components/ui/stars";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="flex flex-col gap-5 rounded-3xl border border-foreground/8 bg-background p-6 transition-all duration-300 hover:border-teal-600/30 hover:shadow-[0_16px_40px_-16px_rgba(13,148,136,0.25)]">
      <div className="flex items-center gap-4">
        <span
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${doctor.avatarClass} text-base font-bold text-white shadow-lg`}
        >
          {doctor.initials}
        </span>
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 font-display text-lg font-semibold leading-tight">
            {doctor.name}
          </p>
          <p className="truncate text-sm text-foreground/60">{doctor.specialty}</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <Stars rating={doctor.rating} />
        <span className="text-foreground/55">
          {doctor.reviews} reviews
        </span>
      </div>
      <div className="flex items-center gap-2 rounded-2xl bg-foreground/[0.04] px-4 py-3">
        <BadgeCheck className="h-4.5 w-4.5 shrink-0 text-teal-600 dark:text-teal-400" aria-hidden="true" />
        <p className="text-sm text-foreground/70">
          {doctor.yearsExperience} years experience
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {doctor.availability.slice(0, 3).map((slot) => (
          <span
            key={slot}
            className="rounded-full border border-foreground/10 px-3 py-1 text-xs font-medium text-foreground/70"
          >
            {slot}
          </span>
        ))}
      </div>
      <div className="mt-auto">
        <Link
          href={`/book?doctor=${doctor.id}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-teal-600/40 px-5 py-2.5 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-50 dark:text-teal-300 dark:hover:bg-teal-950/50"
        >
          <CalendarPlus className="h-4 w-4" aria-hidden="true" />
          Book with {doctor.name.split(" ").at(-1)}
        </Link>
      </div>
    </div>
  );
}