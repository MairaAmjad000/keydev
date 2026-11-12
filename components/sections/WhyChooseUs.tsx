import { Section, SectionHeading } from "@/components/ui/Section";
import type { SectionData } from "@/lib/sections/types";

export function WhyChooseUs({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section tone="light">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ul className={`grid gap-4 sm:grid-cols-2 ${items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
        {items.map((item, index) => (
          <li
            key={`${item.title ?? "reason"}-${index}`}
            className="rounded-card border border-line bg-white p-5 text-left"
          >
            <div className="h-10 w-10 rounded-md bg-brand flex items-center justify-center text-white font-medium mb-3">
              {item.icon ?? "✓"}
            </div>
            <h4 className="font-semibold text-ink mb-1">{item.title ?? "Why Choose Us"}</h4>
            <p className="text-sm text-muted/70 line-clamp-2">
              {item.description ?? ""}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}