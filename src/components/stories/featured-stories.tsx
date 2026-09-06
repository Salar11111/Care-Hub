import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const stories = [
  {
    id: "maria",
    accent: "from-rose-500 to-pink-600",
    tag: "Cardiology",
    title: "A second chance, and a first dance",
    excerpt:
      "After a surprise heart diagnosis, Maria thought her salsa nights were over. Her care team had other plans — a gentle plan, a patient surgeon, and a slow return to the dance floor.",
    author: "Maria, 63",
    readTime: "4 min read",
  },
  {
    id: "the-okafors",
    accent: "from-teal-500 to-emerald-600",
    tag: "Maternity",
    title: "Bringing Theo home",
    excerpt:
      "A tricky pregnancy, a team that never left their side, and a boy named after the nurse who held their hands through the long night.",
    author: "The Okafor family",
    readTime: "3 min read",
  },
  {
    id: "james",
    accent: "from-amber-500 to-orange-600",
    tag: "Orthopedics",
    title: "Walking the park again",
    excerpt:
      "Six weeks after knee replacement, James walked his dog around the park for the first time since the surgery. His physio cheered louder than he did.",
    author: "James, 58",
    readTime: "3 min read",
  },
];

export function FeaturedStories() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {stories.map((story, i) => (
        <Reveal key={story.id} delay={i * 80}>
          <article className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-foreground/8 bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(13,148,136,0.3)]">
            <div
              className={`relative h-36 bg-gradient-to-br ${story.accent} opacity-90`}
            >
              <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-foreground/80">
                {story.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <h2 className="font-display text-xl font-semibold leading-snug">{story.title}</h2>
              <p className="flex-1 text-sm leading-relaxed text-foreground/65">
                {story.excerpt}
              </p>
              <div className="flex items-center justify-between border-t border-foreground/5 pt-4">
                <div>
                  <p className="text-sm font-semibold">{story.author}</p>
                  <p className="text-xs text-foreground/50">{story.readTime}</p>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 text-foreground/30 transition-colors group-hover:text-teal-600"
                  aria-hidden="true"
                />
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}