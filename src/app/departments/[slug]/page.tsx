import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarCheck, Clock, Check } from "lucide-react";
import { departments, doctors } from "@/lib/data";
import { DoctorCard } from "@/components/doctors/doctor-card";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return departments.map((dept) => ({ slug: dept.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dept = departments.find((d) => d.slug === slug);
  if (!dept) return { title: "Department not found" };
  return {
    title: dept.name,
    description: dept.tagline,
  };
}

export default async function DepartmentPage({ params }: Props) {
  const { slug } = await params;
  const dept = departments.find((d) => d.slug === slug);
  if (!dept) notFound();

  const Icon = dept.icon;
  const team = doctors.filter((doc) => doc.department === dept.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <Link
        href="/departments"
        className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/60 transition-colors hover:text-teal-600 dark:hover:text-teal-400"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        All departments
      </Link>

      <Reveal>
        <div className="mt-8 flex flex-col gap-8 border-b border-foreground/8 pb-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-5">
            <span
              className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl ${dept.color}`}
            >
              <Icon className="h-8 w-8" aria-hidden="true" />
            </span>
            <div>
              <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {dept.name}
              </h1>
              <p className="mt-2 max-w-xl text-lg text-foreground/70">{dept.description}</p>
            </div>
          </div>
          <ButtonLink href={`/book?department=${dept.slug}`} variant="primary" size="lg" className="shrink-0">
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            Book in {dept.name}
          </ButtonLink>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <Reveal>
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold">What we offer</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {dept.services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3 rounded-2xl border border-foreground/8 bg-background px-5 py-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium">{service}</span>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex items-start gap-3 rounded-2xl bg-teal-50 px-5 py-4 dark:bg-teal-950/40">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-teal-700 dark:text-teal-300" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-teal-900 dark:text-teal-100">
                <strong>Hours:</strong> Mon–Sat 8:00–20:00 · Emergency &amp; trauma always
                open. Same-week appointments available across most specialties.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold">Your care team</h2>
            {team.length > 0 ? (
              <div className="flex flex-col gap-4">
                {team.map((doc) => (
                  <DoctorCard key={doc.id} doctor={doc} />
                ))}
              </div>
            ) : (
              <p className="rounded-2xl border border-dashed border-foreground/15 px-6 py-10 text-center text-sm text-foreground/60">
                Specialists for this department are available — book an appointment and
                we&apos;ll match you with the right clinician.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
}