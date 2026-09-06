import Link from "next/link";
import { HeartPulse, MapPin, Phone, Mail, ShieldCheck, Clock } from "lucide-react";

const explore = [
  { href: "/", label: "Our care" },
  { href: "/departments", label: "Departments" },
  { href: "/doctors", label: "Meet the doctors" },
  { href: "/stories", label: "Patient stories" },
  { href: "/faq", label: "FAQ" },
];

const hospital = [
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
  { href: "/portal", label: "Patient portal" },
  { href: "/book", label: "Book an appointment" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/5 bg-foreground/[0.03]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5" aria-label="CareHub Plus — home">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600 text-white">
                <HeartPulse className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold tracking-tight">CareHub</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
                  Medical Suite
                </span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-foreground/70">
              A hospital built around people — connected records, kind clinicians and
              care that feels like home.
            </p>
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              HIPAA Compliant · SOC 2 Validated
            </p>
          </div>

          <nav aria-label="Explore">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground/50">
              Explore
            </h3>
            <ul className="flex flex-col gap-2.5">
              {explore.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/75 transition-colors hover:text-teal-600 dark:hover:text-teal-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Hospital">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground/50">
              Hospital
            </h3>
            <ul className="flex flex-col gap-2.5">
              {hospital.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/75 transition-colors hover:text-teal-600 dark:hover:text-teal-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/50">
              Visit us
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-foreground/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                <span>123 Health Avenue, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                <a href="tel:+12124008000" className="hover:text-teal-600 dark:hover:text-teal-400">
                  +1 (212) 400-8000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                <a href="mailto:contact@carehub.plus" className="hover:text-teal-600 dark:hover:text-teal-400">
                  contact@carehub.plus
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" aria-hidden="true" />
                <span>Emergency: 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-foreground/5 pt-6 text-xs text-foreground/50 sm:flex-row">
          <p>© {new Date().getFullYear()} CareHub Plus Hospital System. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <Link href="/faq" className="hover:text-foreground/80">Privacy</Link>
            <Link href="/faq" className="hover:text-foreground/80">Terms</Link>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> Secure &amp; compliant
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}