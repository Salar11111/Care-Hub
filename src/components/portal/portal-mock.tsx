"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowRight,
  CalendarCheck,
  FileText,
  HeartPulse,
  LockKeyhole,
  LogOut,
  MessageCircleHeart,
  Pill,
  Receipt,
  ShieldCheck,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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

export function PortalMock() {
  const [signedIn, setSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bookings, setBookings] = useState<Appointment[]>([]);

  useEffect(() => {
    let parsed: Appointment[] = [];
    try {
      parsed = JSON.parse(localStorage.getItem("carehub-appointments") ?? "[]");
    } catch {
      parsed = [];
    }
    const id = requestAnimationFrame(() => setBookings(parsed));
    return () => cancelAnimationFrame(id);
  }, []);

  const nextBooking = useMemo(
    () =>
      bookings.find((b) =>
        /mon|tue|wed|thu|fri|sat|sun|24/i.test(b.slot),
      ) ?? bookings[0],
    [bookings],
  );

  if (!signedIn) {
    return (
      <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="eyebrow">
            <LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" />
            Patient portal
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight">
            Your health, in one calm place.
          </h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-foreground/70">
            Appointments, records, messages and bills — gathered together, protected by
            end-to-end encryption, and always a human away if you get stuck.
          </p>
          <ul className="mt-8 flex flex-col gap-3">
            {[
              { icon: CalendarCheck, text: "Your confirmed appointments, synced automatically" },
              { icon: MessageCircleHeart, text: "Secure messages to your care team" },
              { icon: FileText, text: "Test results explained in plain language" },
            ].map((item) => (
              <li key={item.text} className="flex items-center gap-3 text-sm font-medium text-foreground/75">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
                  <item.icon className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <form
          className="card flex flex-col gap-5 p-8 sm:p-10"
          onSubmit={(e) => {
            e.preventDefault();
            if (email.trim() && password.trim()) setSignedIn(true);
          }}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600 text-white">
              <HeartPulse className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-lg font-bold">CareHub Portal</p>
              <p className="text-xs text-foreground/55">Demo sign-in — any details work</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="p-email" className="field-label">Email</label>
            <input
              id="p-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="field-input"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="p-password" className="field-label">Password</label>
            <input
              id="p-password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="field-input"
            />
          </div>
          <Button type="submit" variant="primary" size="lg">
            Sign in securely
            <LockKeyhole className="h-4 w-4" aria-hidden="true" />
          </Button>
          <p className="flex items-center justify-center gap-1.5 text-xs text-foreground/55">
            <ShieldCheck className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" aria-hidden="true" />
            HIPAA compliant · SOC 2 · 256-bit encryption
          </p>
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="card flex flex-wrap items-center justify-between gap-4 px-6 py-5">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-[var(--r-btn)] bg-accent-soft text-lg font-bold text-accent-strong">
            {email.trim().charAt(0).toUpperCase() || "U"}
          </span>
          <div>
            <p className="font-display text-lg font-semibold">Welcome back</p>
            <p className="text-sm text-foreground/60">{email}</p>
          </div>
        </div>
        <Button variant="secondary" size="sm" onClick={() => setSignedIn(false)}>
          <LogOut className="h-4 w-4" aria-hidden="true" />
          Sign out
        </Button>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.4fr_0.6fr]">
        <div className="flex flex-col gap-6">
          <div className="accent-panel p-6">
            <p className="text-[length:var(--t-13)] font-bold uppercase tracking-widest text-white/80">
              Protection score
            </p>
            <p className="mt-1 font-display text-5xl font-bold">100%</p>
            <p className="mt-2 text-sm text-white/90">
              Fully covered · All care at CareHub is in-network.
            </p>
          </div>

          <div className="card flex flex-col gap-3 p-6">
            <h2 className="flex items-center gap-2 font-display text-lg font-semibold">
              <Stethoscope className="h-5 w-5 text-teal-600 dark:text-teal-400" aria-hidden="true" />
              Quick care
            </h2>
            {[
              { icon: CalendarCheck, label: "Book an appointment", href: "/book" },
              { icon: Pill, label: "Request a prescription refill", href: "/book" },
              { icon: FileText, label: "View records & results", href: "/book" },
              { icon: Receipt, label: "Billing & insurance", href: "/contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between rounded-2xl border border-foreground/8 px-4 py-3 text-sm font-medium transition-colors hover:border-teal-600/40 hover:bg-teal-50/40 dark:hover:bg-teal-950/30"
              >
                <span className="flex items-center gap-2.5">
                  <item.icon className="h-4.5 w-4.5 text-foreground/60" aria-hidden="true" />
                  {item.label}
                </span>
                <ArrowRight className="h-4 w-4 text-foreground/35" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 font-display text-lg font-semibold">
                <CalendarCheck className="h-5 w-5 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                Upcoming visits
              </h2>
              <a href="/book" className="link-underline text-sm font-semibold text-accent-strong">
                Book more
              </a>
            </div>
            {nextBooking ? (
              <div className="mt-5 flex flex-col gap-4 rounded-2xl bg-foreground/[0.04] p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-display text-lg font-semibold">{nextBooking.department}</p>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300">
                    ✓ Confirmed
                  </span>
                </div>
                <dl className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <dt className="text-foreground/50">Specialist</dt>
                    <dd className="font-semibold">{nextBooking.doctor}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground/50">Time</dt>
                    <dd className="font-semibold">{nextBooking.slot}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground/50">Reference</dt>
                    <dd className="font-semibold">{nextBooking.reference}</dd>
                  </div>
                  <div>
                    <dt className="text-foreground/50">Location</dt>
                    <dd className="font-semibold">Main Hospital · Floor 2</dd>
                  </div>
                </dl>
              </div>
            ) : (
              <div className="mt-5 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-foreground/15 px-6 py-12 text-center">
                <CalendarCheck className="h-8 w-8 text-foreground/30" aria-hidden="true" />
                <p className="font-display text-lg font-semibold">No upcoming visits</p>
                <p className="max-w-xs text-sm text-foreground/60">
                  Bookings you make online will show up here automatically.
                </p>
                <a href="/book" className="link-underline text-sm font-semibold text-accent-strong">
                  Book your first visit →
                </a>
              </div>
            )}
            {bookings.length > 0 ? (
              <p className="mt-4 text-xs text-foreground/50">
                {bookings.length} booking{bookings.length === 1 ? "" : "s"} saved in this browser.
              </p>
            ) : null}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card p-6">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                <h2 className="font-display text-lg font-semibold">Latest results</h2>
              </div>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
                {[
                  { label: "Lipid panel", value: "Within range", good: true },
                  { label: "Blood pressure", value: "122 / 78", good: true },
                ].map((r) => (
                  <li key={r.label} className="flex items-center justify-between">
                    <span className="text-foreground/60">{r.label}</span>
                    <span className={`font-semibold ${r.good ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600"}`}>
                      {r.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-2">
                <UserRound className="h-5 w-5 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                <h2 className="font-display text-lg font-semibold">Your care team</h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/65">
                Dr. Michael Chen — <span className="font-medium text-foreground">Cardiology</span>
                <br />
                Your primary point of care.
              </p>
              <a href="/doctors" className="link-underline mt-3 inline-block text-sm font-semibold text-accent-strong">
                Meet the team →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}