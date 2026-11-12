import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function ServiceOverview({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <li
            key={`${item.title ?? "stat"}-${index}`}
            className="rounded-card border border-line bg-surface p-5 text-center"
          >
            <p className="text-4xl font-extrabold text-ink">{item.number ?? "0"}</p>
            <p className="mt-1 font-medium text-ink/70">{item.title ?? "}"}</p>
            {item.description && (
              <p className="mt-2 text-xs text-muted">{item.description}</p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}