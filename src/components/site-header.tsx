"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HeartPulse, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { ButtonLink } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Care" },
  { href: "/departments", label: "Departments" },
  { href: "/doctors", label: "Doctors" },
  { href: "/stories", label: "Stories" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="CareHub Plus — home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-[var(--r-btn)] bg-accent text-white">
            <HeartPulse className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight">CareHub</span>
            <span className="text-[length:var(--t-13)] font-semibold uppercase tracking-[0.14em] text-accent-strong">
              Medical Suite
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`link-underline rounded-[var(--r-btn)] px-4 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-accent-soft text-accent-strong"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink
            href="/book"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Book an appointment
          </ButtonLink>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--r-btn)] border border-line"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="border-t border-line bg-background px-4 pb-4 pt-2 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-[var(--r-btn)] px-4 py-3 text-sm font-medium ${
                  isActive(link.href)
                    ? "bg-accent-soft text-accent-strong"
                    : "text-muted hover:bg-accent-soft"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink
              href="/book"
              variant="primary"
              size="md"
              className="mt-2"
              onClick={() => setOpen(false)}
            >
              Book an appointment
            </ButtonLink>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
