import { Stars } from "@/components/ui/stars";
import type { Testimonial } from "@/lib/data";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="card flex h-full flex-col gap-5 p-7">
      <Stars rating={testimonial.rating} />
      <blockquote className="flex-1 text-base leading-relaxed text-foreground/80">
        <p>&ldquo;{testimonial.quote}&rdquo;</p>
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-line pt-5">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent-strong"
          aria-hidden="true"
        >
          {testimonial.initials}
        </span>
        <div>
          <p className="text-sm font-semibold">{testimonial.author}</p>
          <p className="text-[length:var(--t-13)] text-muted">{testimonial.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
