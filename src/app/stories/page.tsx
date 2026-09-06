import type { Metadata } from "next";
import { testimonials } from "@/lib/data";
import { FeaturedStories } from "@/components/stories/featured-stories";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Patient stories",
  description:
    "Real words from the people we care for — from first appointments to full recoveries, read the moments that make care human.",
};

export default function StoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Patient stories"
        title="Moments worth remembering"
        description="Every recovery has its own small victory. Here are a few of the ones our patients came back to share."
      />
      <div className="mt-12">
        <FeaturedStories />
      </div>
      <div className="mt-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold">From the ward</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={(i % 3) * 80}>
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}