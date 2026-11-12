import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function CaseStudyItem({
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
            key={`${item.title ?? "case"}-${index}`}
            className="rounded-card border border-line bg-white p-5 hover-shadow-sm transition"
          >
            {item.image ? (
              <SmartImage
                src={item.image}
                alt={item.alt ?? item.title ?? "Case study"}
                className="h-32 w-full object-cover"
              />
            ) : (
              <div
                className="h-32 w-full bg-gradient-to-b from-surface/50 to-surface/80 flex items-center justify-center text-muted/60"
              >
                <span className="text-sm text-muted/50">
                  {item.title ?? "Case Study"}
                </span>
              </div>
            )}
            <div className="p-4">
              <h4 className="font-semibold text-ink">{item.title ?? "Detail"}</h4>
              {item.description && (
                <p className="text-sm text-ink/70 line-clamp-2">{item.description}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}