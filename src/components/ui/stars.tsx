import { Star, StarHalf } from "lucide-react";

export function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.25 && rating - full < 0.9;
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-amber-400 ${className}`}
      role="img"
      aria-label={`Rated ${rating} out of 5`}
    >
      {Array.from({ length: full }, (_, i) => (
        <Star key={`s-${i}`} className="h-4 w-4 fill-current" aria-hidden="true" />
      ))}
      {hasHalf ? <StarHalf className="h-4 w-4 fill-current" aria-hidden="true" /> : null}
      <span className="ml-1 text-sm font-semibold text-foreground/70">{rating.toFixed(1)}</span>
    </span>
  );
}