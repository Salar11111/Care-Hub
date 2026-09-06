import type { Metadata } from "next";
import {
  LifeBuoy,
  MapPin,
  MessageCircleQuestion,
  Phone,
  Clock,
} from "lucide-react";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "Answers about appointments, insurance, visits, records and privacy — and when you should head to the emergency department.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Need a hand?"
        title="Frequently asked questions"
        description="Straight answers about booking, insurance, your records and how we keep you safe."
      />
      <div className="mt-12 grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="flex flex-col gap-4 lg:sticky lg:top-24 lg:self-start">
          {[
            { icon: MessageCircleQuestion, title: "Still stuck?", text: "Ask us anything — real humans reply within one hour during opening hours." },
            { icon: LifeBuoy, title: "Urgent after hours?", text: "Emergency care is always open. Call 911 for life-threatening cases." },
          ].map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-3 rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
                <card.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="font-display text-lg font-semibold">{card.title}</h2>
              <p className="text-sm leading-relaxed text-foreground/65">{card.text}</p>
              <ButtonLink href="/contact" variant="outline" size="sm" className="self-start">
                Get in touch
              </ButtonLink>
            </div>
          ))}
          <div className="flex flex-col gap-3 rounded-3xl bg-gradient-to-br from-teal-600 to-emerald-700 p-6 text-white">
            <Phone className="h-5 w-5" aria-hidden="true" />
            <h2 className="font-display text-lg font-semibold">Front desk</h2>
            <p className="text-sm text-teal-50/90">
              <a href="tel:+12124008000" className="font-semibold underline-offset-4 hover:underline">
                +1 (212) 400-8000
              </a>
              <br />
              Mon–Sat, 8:00–20:00
            </p>
            <p className="flex items-center gap-1.5 text-xs text-teal-50/80">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              Emergency open 24/7 · <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> 123 Health Avenue
            </p>
          </div>
        </div>
        <FaqAccordion />
      </div>
    </div>
  );
}