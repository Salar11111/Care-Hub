import type { Metadata } from "next";
import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Lightbulb,
  Globe2,
} from "lucide-react";
import { stats } from "@/lib/data";
import { Counter } from "@/components/ui/counter";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About us",
  description:
    "25 years of care, one simple belief — kindness is a clinical skill. Learn how CareHub was built around people, not processes.",
};

const values = [
  {
    icon: HeartHandshake,
    title: "Kindness first",
    text: "Every clinical decision starts with a question: how would we want our own family treated?",
  },
  {
    icon: UsersRound,
    title: "One team, one record",
    text: "Your doctors, nurses and specialists share one connected record — so nothing gets lost in handovers.",
  },
  {
    icon: Sparkles,
    title: "Explain everything",
    text: "Plain language, unhurried conversations, and treatment plans that make sense in real life.",
  },
  {
    icon: ShieldCheck,
    title: "Radical safety",
    text: "HIPAA-compliant, SOC 2 validated, and obsessed with preventing harm before it happens.",
  },
];

const timeline = [
  { year: "2001", event: "CareHub opens its doors with 12 beds and a small but fierce team of believers." },
  { year: "2008", event: "Our maternity ward is reborn around one idea: birth should feel like family time." },
  { year: "2014", event: "We go paperless — one connected record for every patient, shared across every team." },
  { year: "2019", event: "The patient portal launches, putting appointments and results in your pocket." },
  { year: "2026", event: "120+ specialists, 15 departments, 54,000+ patients — and the same promise we started with." },
];

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:pt-24">
        <Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="eyebrow">
                <Globe2 className="h-3.5 w-3.5" aria-hidden="true" />
                Since 2001
              </span>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Built around people,<br />
                not processes.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/70">
                CareHub started with a simple frustration: hospitals felt like systems
                that processed people. Twenty-five years later, we&apos;ve built the
                hospital we always wished existed — warm, unhurried, and radically
                connected.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/book" variant="primary" size="lg">
                  Experience the difference
                </ButtonLink>
                <ButtonLink href="/departments" variant="secondary" size="lg">
                  Explore departments
                </ButtonLink>
              </div>
            </div>
            <Reveal delay={100}>
              <div className="accent-panel p-8">
                <p className="font-display text-2xl font-medium leading-snug">
                  &ldquo;Kindness is a clinical skill. We hire for it, train for it, and
                  measure it — because it changes outcomes.&rdquo;
                </p>
                <p className="mt-6 text-sm font-semibold text-white/85">
                  Dr. Eleanor Vance — Founder
                </p>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--r-lg)] border border-line bg-line sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1.5 bg-surface px-6 py-10 text-center"
              >
                <span className="font-display text-4xl font-bold text-teal-600 dark:text-teal-400 sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-foreground/[0.03] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="What we believe"
              title="Values that run through everything"
              description="Not posters on a wall — the four promises we make to every single patient."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="card flex h-full flex-col gap-4 p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
                    <v.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/65">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <div className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-teal-600 dark:text-teal-400" aria-hidden="true" />
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              The journey so far
            </h2>
          </div>
        </Reveal>
        <ol className="mt-10 flex flex-col gap-0">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 60}>
              <li className="relative flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-teal-600 bg-background font-display text-xs font-bold text-teal-700 dark:text-teal-300">
                    {t.year.slice(2)}
                  </span>
                  {i < timeline.length - 1 ? (
                    <span className="w-px flex-1 bg-foreground/10" aria-hidden="true" />
                  ) : null}
                </div>
                <div className="pt-1">
                  <h3 className="font-display text-base font-semibold">{t.year}</h3>
                  <p className="mt-1 leading-relaxed text-foreground/65">{t.event}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>
    </div>
  );
}