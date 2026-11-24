import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const stories = [
  {
    id: "maria",
    tag: "Cardiology",
    title: "A second chance, and a first dance",
    excerpt:
      "After a surprise heart diagnosis, Maria thought her salsa nights were over. Her care team had other plans — a gentle plan, a patient surgeon, and a slow return to the dance floor.",
    author: "Maria, 63",
    readTime: "4 min read",
  },
  {
    id: "the-okafors",
    tag: "Maternity",
    title: "Bringing Theo home",
    excerpt:
      "A tricky pregnancy, a team that never left their side, and a boy named after the nurse who held their hands through the long night.",
    author: "The Okafor family",
    readTime: "3 min read",
  },
  {
    id: "james",
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
    <div className="grid gap-[var(--s-5)] md:grid-cols-3">
      {stories.map((story) => (
        <Reveal key={story.id}>
          <article className="card card-hover group flex h-full cursor-pointer flex-col overflow-hidden">
            <div className="relative flex h-36 items-start justify-start bg-accent-soft p-5">
              <span className="rounded-[var(--r-btn)] bg-surface px-3 py-1 text-[length:var(--t-13)] font-bold text-accent-strong">
                {story.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <h2 className="font-display text-xl font-semibold leading-snug">{story.title}</h2>
              <p className="flex-1 text-sm leading-relaxed text-muted">
                {story.excerpt}
              </p>
              <div className="flex items-center justify-between border-t border-line pt-4">
                <div>
                  <p className="text-sm font-semibold">{story.author}</p>
                  <p className="text-[length:var(--t-13)] text-muted">{story.readTime}</p>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 text-muted transition-colors group-hover:text-accent-strong"
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
