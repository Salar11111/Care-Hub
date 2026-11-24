import { stats } from "@/lib/data";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";

export function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <Reveal>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--r-lg)] border border-line bg-line sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1.5 bg-surface px-6 py-10 text-center"
            >
              <span className="font-display text-4xl font-bold text-accent-strong">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm font-semibold text-foreground">{stat.label}</span>
              <span className="text-[length:var(--t-13)] text-muted">{stat.note}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
