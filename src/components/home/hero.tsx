import { CalendarCheck, ShieldCheck, Siren, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

const trust = [
  { icon: ShieldCheck, label: "HIPAA Compliant" },
  { icon: Siren, label: "24/7 Emergency" },
  { icon: Sparkles, label: "Empathetic staff" },
];

export function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:pb-28 lg:pt-24">
        <div className="flex flex-col items-start gap-6">
          <span className="eyebrow">
            <span aria-hidden="true" className="eyebrow__dot" />
            Welcome to CareHub Hospital
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Where healing <em className="text-accent not-italic">feels like home</em>.
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted">
            From your first appointment to lifelong wellness, CareHub connects your
            doctors, records and appointments in one warm space — so you always feel
            looked after, never processed.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href="/book" variant="primary" size="lg">
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              Book your visit
            </ButtonLink>
            <ButtonLink href="/departments" variant="secondary" size="lg">
              Explore our care
            </ButtonLink>
          </div>
          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-3">
            {trust.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-sm font-medium text-muted">
                <item.icon className="h-4 w-4 text-accent-strong" aria-hidden="true" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-lg" aria-hidden="true">
          <div className="card relative flex aspect-[4/3] flex-col justify-center gap-3 p-5 sm:p-6">
            <div className="flex items-center gap-3 rounded-[var(--r-md)] border border-line bg-background p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--r-btn)] bg-accent-soft text-accent-strong">
                <CalendarCheck className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground">Appointment confirmed</p>
                <p className="text-[length:var(--t-13)] text-muted">Dr. Michael Chen · Cardiology</p>
              </div>
              <span className="rounded-[var(--r-btn)] bg-accent-soft px-2.5 py-1 text-[length:var(--t-13)] font-bold text-accent-strong">
                ✓ Confirmed
              </span>
            </div>
            <div className="rounded-[var(--r-md)] border border-line bg-background p-4">
              <p className="text-[length:var(--t-13)] font-semibold uppercase tracking-wider text-muted">
                Next visit
              </p>
              <p className="mt-1 text-lg font-bold text-foreground">Tue, 10 Sep · 9:00 AM</p>
              <div className="mt-3 h-2 w-full rounded-full bg-accent-soft">
                <div className="h-2 w-4/5 rounded-full bg-accent" />
              </div>
            </div>
            <div className="mt-1 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-3">
              <span className="inline-flex items-center gap-2 text-[length:var(--t-13)] font-semibold text-muted">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                Open now · ER 24/7
              </span>
              <span className="text-[length:var(--t-13)] font-semibold text-accent-strong">
                Est. wait · 6 min
              </span>
            </div>
          </div>
          <p className="mt-4 inline-flex items-center gap-2 rounded-[var(--r-btn)] border border-line bg-surface px-4 py-3 text-[length:var(--t-13)] font-semibold text-muted">
            <ShieldCheck className="h-4 w-4 text-accent-strong" aria-hidden="true" />
            Secure · Compliant · Always Available
          </p>
        </div>
      </div>
    </section>
  );
}
