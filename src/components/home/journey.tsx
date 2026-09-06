import { CalendarCheck, Users, ClipboardCheck, HeartHandshake } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Book your visit",
    description:
      "Pick a time that suits you — online, in minutes, with instant confirmation and gentle reminders.",
  },
  {
    icon: Users,
    step: "02",
    title: "Meet your care team",
    description:
      "Get matched with specialists who listen first and treat second, all sharing one record.",
  },
  {
    icon: ClipboardCheck,
    step: "03",
    title: "Personalized treatment",
    description:
      "A plan built around your life, explained in plain, kind language — never rushed.",
  },
  {
    icon: HeartHandshake,
    step: "04",
    title: "Ongoing support",
    description:
      "Follow-ups, results and check-ins from a team that stays with you, even after you leave.",
  },
];

export function Journey() {
  return (
    <section id="journey" className="bg-foreground/[0.03] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="Your path to feeling better"
            description="Four gentle steps, one connected team. We designed every stage to feel less like a system and more like a hand to hold."
          />
        </Reveal>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <li className="relative flex h-full flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-7">
                <span className="font-display text-4xl font-bold text-foreground/10">
                  {step.step}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/65">
                    {step.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}