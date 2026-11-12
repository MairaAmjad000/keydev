import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function LocationSection({
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
            key={`${item.title ?? "location"}-${index}`}
            className="rounded-card border border-line bg-white p-6 text-center"
          >
            {item.image ? (
              <SmartImage
                src={item.image}
                alt={item.alt ?? item.title ?? "Location"}
                className="h-20 w-20 mx-auto mb-4 bg-transparent object-contain"
              />
            ) : (
              <div className="h-20 w-20 mx-auto mb-4 rounded-md bg-surface flex items-center justify-center text-muted/60 text-2xl">
                {item.icon ?? "📍"}
              </div>
            )}
            <h4 className="font-semibold text-ink mb-2">{item.title ?? "Location"}</h4>
            <p className="text-sm text-ink/70">{item.description ?? ""}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}