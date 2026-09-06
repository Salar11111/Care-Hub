import { Stars } from "@/components/ui/stars";
import type { Testimonial } from "@/lib/data";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col gap-5 rounded-3xl border border-foreground/8 bg-background p-7">
      <Stars rating={testimonial.rating} />
      <blockquote className="flex-1 text-base leading-relaxed text-foreground/80">
        <p>&ldquo;{testimonial.quote}&rdquo;</p>
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-foreground/5 pt-5">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 text-sm font-bold text-white"
          aria-hidden="true"
        >
          {testimonial.initials}
        </span>
        <div>
          <p className="text-sm font-semibold">{testimonial.author}</p>
          <p className="text-xs text-foreground/55">{testimonial.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}