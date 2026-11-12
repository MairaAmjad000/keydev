import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function ProcessStep({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ol className={`grid gap-4 sm:grid-cols-2 ${items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
        {items.map((item, index) => (
          <li
            key={`${item.title ?? "step"}-${index}`}
            className="rounded-card border border-line bg-surface p-6 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center mx-auto text-white font-extrabold">
              {item.number ?? index + 1}
            </div>
            <h4 className="mt-4 font-semibold text-ink">{item.title ?? `Step ${index + 1}`}</h4>
            <p className="mt-2 text-sm text-ink/70 line-clamp-2">
              {item.description ?? ""}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}