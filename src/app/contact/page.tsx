import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, CreditCard } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Reach our front desk, find the hospital, or check your insurance coverage before your visit.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Say hello"
        title="We'd love to hear from you"
        description="Questions, referrals or just a little reassurance — our team replies fast and always with a human touch."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: MapPin, title: "Visit us", lines: ["123 Health Avenue", "New York, NY 10001"] },
          { icon: Phone, title: "Call us", lines: ["+1 (212) 400-8000", "Mon–Sat, 8:00–20:00"] },
          { icon: Mail, title: "Email us", lines: ["contact@carehub.plus", "Replies within 1h (business hours)"] },
          { icon: Clock, title: "Emergency", lines: ["24/7 — always open", "Call 911 for life-threatening"] },
        ].map((card) => (
          <div key={card.title} className="card flex flex-col gap-3 p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
              <card.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="font-display text-lg font-semibold">{card.title}</h2>
            <div className="flex flex-col gap-0.5 text-sm text-foreground/65">
              {card.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <ContactForm />

        <aside className="flex flex-col gap-6">
          <div className="card p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
                <CreditCard className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="font-display text-lg font-semibold">Insurance checker</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/65">
              We accept most major plans — Medicare, Medicaid, and leading private
              insurers. Call the front desk with your member ID for instant coverage
              confirmation before your visit.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Medicare", "Medicaid", "Aetna", "Cigna", "UnitedHealth", "BCBS"].map((p) => (
                <span
                  key={p}
                  className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700 dark:bg-teal-950/50 dark:text-teal-300"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div className="accent-panel flex flex-col gap-4 p-6">
            <h2 className="font-display text-lg font-semibold">Prefer to book online?</h2>
            <p className="text-sm leading-relaxed text-white/85">
              Skip the queue — you can have a confirmed appointment in under two minutes.
            </p>
            <ButtonLink href="/book" size="sm">
              Book an appointment
            </ButtonLink>
          </div>
        </aside>
      </div>
    </div>
  );
}