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
        <div className="accent-panel px-8 py-16 text-center sm:px-16">
          <div className="flex flex-col items-center gap-6">
            <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl">
              Your portal to connected care — ready when you are.
            </h2>
            <p className="max-w-xl text-white/85">
              Your care team, health records and appointments — gathered in one warm,
              welcoming place. Step through the portal and feel the difference of
              connected care.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <ButtonLink href="/book" size="lg">
                Enter the portal
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/portal" size="lg" variant="secondary">
                Patient portal demo
              </ButtonLink>
            </div>
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {badges.map((b) => (
                <li key={b.label} className="flex items-center gap-1.5 text-sm text-white/85">
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
