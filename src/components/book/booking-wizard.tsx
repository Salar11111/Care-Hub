"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  CalendarCheck,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  PartyPopper,
  RotateCcw,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { departments, doctors } from "@/lib/data";
import { Button } from "@/components/ui/button";

type Step = 1 | 2 | 3 | 4;

interface Appointment {
  reference: string;
  department: string;
  doctor: string;
  specialty: string;
  slot: string;
  name: string;
  email: string;
  createdAt: string;
}

const steps: { n: Step; label: string; icon: typeof ClipboardList }[] = [
  { n: 1, label: "Department", icon: ClipboardList },
  { n: 2, label: "Doctor & time", icon: UserRound },
  { n: 3, label: "Your details", icon: CalendarCheck },
];

function generateReference(): string {
  const n = Math.floor(10000 + Math.random() * 89999);
  return `CH-${new Date().getFullYear()}-${n}`;
}

export function BookingWizard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialDepartment = searchParams.get("department") ?? "";
  const initialDoctor = searchParams.get("doctor") ?? "";

  const [step, setStep] = useState<Step>(() =>
    initialDepartment || initialDoctor ? 2 : 1,
  );
  const [departmentSlug, setDepartmentSlug] = useState(initialDepartment);
  const [doctorId, setDoctorId] = useState(initialDoctor);
  const [slot, setSlot] = useState("");
  const [details, setDetails] = useState({ name: "", email: "", phone: "", reason: "" });
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [savedCount, setSavedCount] = useState(0);

  const department = departments.find((d) => d.slug === departmentSlug);
  const doctor = doctors.find((d) => d.id === doctorId);
  const team = useMemo(
    () => doctors.filter((d) => d.department === departmentSlug),
    [departmentSlug],
  );

  function pickDepartment(slug: string) {
    setDepartmentSlug(slug);
    setDoctorId("");
    setSlot("");
    setStep(2);
  }

  function confirm() {
    if (!doctor || !department || !slot || !details.name.trim()) return;
    const next: Appointment = {
      reference: generateReference(),
      department: department.name,
      doctor: doctor.name,
      specialty: doctor.specialty,
      slot,
      name: details.name.trim(),
      email: details.email.trim(),
      createdAt: new Date().toISOString(),
    };
    setAppointment(next);
    try {
      const existing: Appointment[] = JSON.parse(
        localStorage.getItem("carehub-appointments") ?? "[]",
      );
      localStorage.setItem(
        "carehub-appointments",
        JSON.stringify([next, ...existing]),
      );
      setSavedCount(existing.length + 1);
    } catch {
      setSavedCount(1);
    }
    setStep(4);
  }

  function reset() {
    setStep(1);
    setDepartmentSlug("");
    setDoctorId("");
    setSlot("");
    setDetails({ name: "", email: "", phone: "", reason: "" });
    setAppointment(null);
    window.history.replaceState(null, "", "/book");
  }

  const canContinueStep2 = Boolean(doctorId && slot);
  const canContinueStep3 = details.name.trim().length > 0;

  return (
    <div className="mx-auto max-w-4xl">
      <ol className="mb-10 flex items-center gap-2" aria-label="Booking progress">
        {steps.map((s) => {
          const active = step === s.n;
          const done = step > s.n;
          return (
            <li key={s.n} className="flex flex-1 flex-col gap-1.5">
              <div className="flex items-center">
                <button
                  onClick={() => {
                    if (done && appointment === null) setStep(s.n);
                  }}
                  disabled={!done}
                  className="flex min-h-11 flex-1 items-center"
                  aria-label={`Step ${s.n}: ${s.label}`}
                >
                  <span
                    className={`h-2 w-full rounded-full transition-colors ${
                      done || active ? "bg-accent" : "bg-line"
                    }`}
                  />
                </button>
              </div>
              <span
                className={`flex items-center gap-1.5 text-xs font-semibold ${
                  active || done
                    ? "text-teal-700 dark:text-teal-400"
                    : "text-foreground/40"
                }`}
              >
                <s.icon className="h-3.5 w-3.5" aria-hidden="true" />
                {s.label}
              </span>
            </li>
          );
        })}
      </ol>

      {step === 1 ? (
        <section aria-labelledby="choose-dept">
          <h1 id="choose-dept" className="font-display text-3xl font-semibold tracking-tight">
            Where would you like to be seen?
          </h1>
          <p className="mt-2 text-foreground/65">
            Choose a department — we&apos;ll match you with the right specialist next.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept) => {
              const Icon = dept.icon;
              const active = dept.slug === departmentSlug;
              return (
                <button
                  key={dept.slug}
                  onClick={() => pickDepartment(dept.slug)}
                  className={`card card-hover flex min-h-11 items-center gap-3 px-5 py-4 text-left ${
                    active ? "!border-accent !bg-accent-soft" : ""
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${dept.color}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{dept.name}</span>
                    <span className="block text-xs text-foreground/55">{dept.tagline}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      ) : null}

      {step === 2 ? (
        <section aria-labelledby="choose-doctor">
          <div className="flex items-center justify-between">
            <h1 id="choose-doctor" className="font-display text-3xl font-semibold tracking-tight">
              Choose your specialist
            </h1>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setStep(1);
                setDepartmentSlug("");
                window.history.replaceState(null, "", "/book");
              }}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Change
            </Button>
          </div>
          <p className="mt-2 text-foreground/65">
            {department ? (
              <>
                <strong className="text-foreground">{department.name}</strong> —
                our team shares one record and one plan for you.
              </>
            ) : null}
          </p>

          {team.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-dashed border-foreground/15 px-8 py-16 text-center">
              <p className="font-display text-xl font-semibold">No specialists listed yet</p>
              <Button
                variant="secondary"
                size="md"
                className="mt-4"
                onClick={() => setStep(1)}
              >
                Choose another department
              </Button>
            </div>
          ) : (
            <div className="mt-8 flex flex-col gap-6">
              {team.map((doc) => {
                const selected = doc.id === doctorId;
                return (
                  <div
                    key={doc.id}
                    className={`card p-6 transition-colors ${
                      selected ? "!border-accent !bg-accent-soft" : ""
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span
                          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--r-btn)] bg-surface text-base font-bold text-accent-strong"
                        >
                          {doc.initials}
                        </span>
                        <div>
                          <p className="font-display text-lg font-semibold">{doc.name}</p>
                          <p className="text-sm text-foreground/60">{doc.specialty}</p>
                          <p className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 dark:text-teal-300">
                            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                            {doc.yearsExperience} years · {doc.rating.toFixed(1)}★ ({doc.reviews})
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {doc.availability.map((av) => {
                        const isActive = selected && slot === av && doctorId === doc.id;
                        return (
                          <button
                            key={av}
                            onClick={() => {
                              setDoctorId(doc.id);
                              setSlot(av);
                            }}
                            aria-pressed={isActive}
                            className={`btn btn--secondary min-h-11 ${
                              isActive ? "!border-accent !bg-accent !text-white" : ""
                            }`}
                          >
                            {av === "24/7" ? "24/7 — anytime" : av}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="mt-10 flex items-center justify-between">
            <p className="text-sm text-foreground/55">
              {team.length} specialist{team.length === 1 ? "" : "s"} available
            </p>
            <Button
              variant="primary"
              size="md"
              disabled={!canContinueStep2}
              onClick={() => setStep(3)}
            >
              Continue
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </section>
      ) : null}

      {step === 3 ? (
        <section aria-labelledby="your-details">
          <div className="flex items-center justify-between">
            <h1 id="your-details" className="font-display text-3xl font-semibold tracking-tight">
              Almost there
            </h1>
            <Button variant="ghost" size="sm" onClick={() => setStep(2)}>
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back
            </Button>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                confirm();
              }}
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="full-name" className="field-label">
                  Full name
                </label>
                <input
                  id="full-name"
                  required
                  value={details.name}
                  onChange={(e) => setDetails({ ...details, name: e.target.value })}
                  placeholder="Jane Smith"
                  className="field-input"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="field-label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={details.email}
                    onChange={(e) => setDetails({ ...details, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="field-input"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="field-label">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={details.phone}
                    onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                    placeholder="+1 (212) 555-0100"
                    className="field-input"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="reason" className="field-label">
                  What brings you in? <span className="font-normal text-foreground/50">(optional)</span>
                </label>
                <textarea
                  id="reason"
                  rows={4}
                  value={details.reason}
                  onChange={(e) => setDetails({ ...details, reason: e.target.value })}
                  placeholder="A few words help your care team prepare…"
                  className="field-input resize-none"
                />
              </div>
              <p className="flex items-center gap-2 rounded-[var(--r-btn)] bg-background px-4 py-3 text-[length:var(--t-13)] text-muted">
                <ShieldCheck className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                Your details are encrypted and used only to prepare for your visit. This demo
                stores your booking reference locally in your browser.
              </p>
              <Button type="submit" variant="primary" size="lg" disabled={!canContinueStep3}>
                Confirm appointment
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              </Button>
            </form>

            <aside
              className="card flex h-fit flex-col gap-4 p-6"
              aria-label="Booking summary"
            >
              <h2 className="font-display text-lg font-semibold">Your visit</h2>
              <dl className="flex flex-col gap-3 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-foreground/55">Department</dt>
                  <dd className="text-right font-semibold">{department?.name}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-foreground/55">Specialist</dt>
                  <dd className="text-right font-semibold">{doctor?.name}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-foreground/55">Time</dt>
                  <dd className="text-right font-semibold">{slot || "—"}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-foreground/55">Location</dt>
                  <dd className="text-right font-semibold">Main Hospital · Floor 2</dd>
                </div>
              </dl>
              <p className="rounded-[var(--r-btn)] bg-accent-soft px-4 py-3 text-[length:var(--t-13)] leading-relaxed text-accent-strong">
                Arrive 15 minutes early with a photo ID and insurance card. No referral
                needed.
              </p>
            </aside>
          </div>
        </section>
      ) : null}

      {step === 4 && appointment ? (
        <section
          className="card flex flex-col items-center gap-6 px-6 py-16 text-center sm:px-16"
          aria-labelledby="confirmation"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
            <PartyPopper className="h-10 w-10" aria-hidden="true" />
          </span>
          <h1 id="confirmation" className="font-display text-3xl font-semibold tracking-tight">
            You&apos;re booked, {appointment.name.split(" ")[0]}!
          </h1>
          <p className="max-w-md text-foreground/65">
            {appointment.doctor} · {appointment.department}
            <br />
            Reference <strong className="text-foreground">{appointment.reference}</strong>
          </p>
          <dl className="grid w-full max-w-lg grid-cols-2 gap-3 rounded-[var(--r-lg)] bg-background p-6 text-left">
            <div>
              <dt className="text-xs uppercase tracking-widest text-foreground/45">Time</dt>
              <dd className="mt-1 font-semibold">{appointment.slot}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-foreground/45">Signed in as</dt>
              <dd className="mt-1 font-semibold truncate">{appointment.email || appointment.name}</dd>
            </div>
          </dl>
          <p className="flex items-center gap-2 text-sm text-foreground/60">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
            Saved to your browser ({savedCount} booking{savedCount === 1 ? "" : "s"}).
            View it anytime in the patient portal.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary" size="md" onClick={() => router.push("/portal")}>
              Go to patient portal
            </Button>
            <Button variant="secondary" size="md" onClick={reset}>
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Book another
            </Button>
          </div>
        </section>
      ) : null}
    </div>
  );
}