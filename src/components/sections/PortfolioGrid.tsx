import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function PortfolioGrid({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <li
            key={`${item.title ?? "project"}-${index}`}
            className="rounded-card border border-line bg-surface overflow-hidden hover:border-brand transition"
          >
            {item.image ? (
              <SmartImage
                src={item.image}
                alt={item.alt ?? item.title ?? "Project"}
                className="h-48 w-full object-cover"
              />
            ) : (
              <div
                className="h-48 w-full bg-gradient-to-b from-surface/50 to-surface/80 flex items-center justify-center text-muted/60"
              >
                <span className="text-sm">
                  {item.title ?? "Project"}
                </span>
              </div>
            )}
            <div className="p-4">
              <h4 className="font-semibold text-ink">{item.title ?? "Project"}</h4>
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