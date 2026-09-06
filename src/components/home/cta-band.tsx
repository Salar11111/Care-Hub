import { ArrowRight, ShieldCheck, Clock, Lock } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const badges = [
  { icon: ShieldCheck, label: "HIPAA compliant" },
  { icon: Lock, label: "Encrypted records" },
  { icon: Clock, label: "Always available" },
];

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800 px-8 py-16 text-center shadow-2xl shadow-teal-900/30 sm:px-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white_1.5px,transparent_1.5px)] [background-size:40px_40px]"
          />
          <div className="relative flex flex-col items-center gap-6">
            <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight text-white text-balance sm:text-4xl">
              Your portal to connected care — ready when you are.
            </h2>
            <p className="max-w-xl text-teal-50/90">
              Your care team, health records and appointments — gathered in one warm,
              welcoming place. Step through the portal and feel the difference of
              connected care.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <ButtonLink
                href="/book"
                size="lg"
                className="!bg-background !text-teal-700 shadow-[0_4px_0_rgba(0,0,0,0.2)] hover:!bg-background"
              >
                Enter the portal
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href="/portal"
                size="lg"
                className="!border-teal-50/40 !text-white hover:!border-white hover:!text-white"
                variant="outline"
              >
                Patient portal demo
              </ButtonLink>
            </div>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {badges.map((b) => (
                <li key={b.label} className="flex items-center gap-1.5 text-sm text-teal-50/90">
                  <b.icon className="h-4 w-4" aria-hidden="true" />
                  {b.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}