import { testimonials } from "@/lib/data";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";

export function HomeTestimonials() {
  const shown = testimonials.slice(0, 3);
  return (
    <section id="stories" className="section mx-auto max-w-7xl scroll-mt-24 px-4 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="Patient stories"
          title="Care that people remember"
          description="Real words from the people who matter most — the ones we care for, every single day."
        />
      </Reveal>
      <div className="mt-12 grid gap-[var(--s-5)] md:grid-cols-3">
        {shown.map((t, i) => (
          <Reveal key={t.id} delay={i * 80}>
            <TestimonialCard testimonial={t} />
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <ButtonLink href="/stories" variant="secondary" size="md">
          Read more stories
        </ButtonLink>
      </div>
    </section>
  );
}