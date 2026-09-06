import { CalendarCheck, ShieldCheck, Siren, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

const trust = [
  { icon: ShieldCheck, label: "HIPAA Compliant" },
  { icon: Siren, label: "24/7 Emergency" },
  { icon: Sparkles, label: "Empathetic staff" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-900/30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 left-[-8%] h-[480px] w-[480px] rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-900/20"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:pb-28 lg:pt-24">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            Welcome to CareHub Hospital
          </span>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Where healing <em className="text-teal-600 not-italic dark:text-teal-400">feels like home</em>.
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-foreground/70">
            From your first appointment to lifelong wellness, CareHub connects your
            doctors, records and appointments in one warm space — so you always feel
            looked after, never processed.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href="/book" variant="primary" size="lg">
              <CalendarCheck className="h-5 w-5" aria-hidden="true" />
              Book your visit
            </ButtonLink>
            <ButtonLink href="/departments" variant="outline" size="lg">
              Explore our care
            </ButtonLink>
          </div>
          <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-3">
            {trust.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-sm font-medium text-foreground/75">
                <item.icon className="h-4.5 w-4.5 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-lg" aria-hidden="true">
          <div className="relative flex aspect-[4/3] items-end justify-center overflow-hidden rounded-[2.5rem] border border-white/40 bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-700 shadow-2xl shadow-teal-900/30">
            <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_20%,white_1.5px,transparent_1.5px),radial-gradient(circle_at_70%_40%,white_1px,transparent_1px)] [background-size:60px_60px,80px_80px]" />
            <div className="relative flex h-2/3 w-4/5 flex-col gap-2 overflow-hidden rounded-[1.75rem] bg-foreground/[0.08] p-4 backdrop-blur-sm sm:p-5">
              <div className="flex items-center justify-between rounded-2xl bg-background p-4 shadow-lg">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300">
                  <CalendarCheck className="h-5 w-5" />
                </span>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-semibold text-foreground">Appointment confirmed</p>
                  <p className="text-xs text-foreground/60">Dr. Michael Chen · Cardiology</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300">
                  ✓ Confirmed
                </span>
              </div>
              <div className="rounded-2xl bg-background p-4 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                  Next visit
                </p>
                <p className="mt-1 text-lg font-bold text-foreground">Tue, 10 Sep · 9:00 AM</p>
                <div className="mt-3 h-2 w-full rounded-full bg-foreground/8">
                  <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500" />
                </div>
              </div>
            </div>
            <span className="absolute bottom-4 right-5 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-teal-700 dark:text-teal-300">
              Est. wait · 6 min
            </span>
          </div>
          <div className="absolute -left-6 top-6 flex items-center gap-2 rounded-2xl border border-foreground/10 bg-background px-4 py-3 shadow-xl">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-bold text-foreground">Open now · ER 24/7</span>
          </div>
          <div className="absolute -bottom-4 left-8 flex items-center gap-2 rounded-2xl border border-foreground/10 bg-background px-4 py-3 shadow-xl">
            <ShieldCheck className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            <span className="text-xs font-bold text-foreground">Secure · Compliant · Always Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}