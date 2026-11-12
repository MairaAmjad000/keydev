import { Section, SectionHeading } from "@/components/ui/Section";
import { RatingStars } from "@/components/ui/RatingStars";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function Awards({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section tone="light">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <li
            key={`${item.title ?? "award"}-${index}`}
            className="rounded-card border border-line bg-white p-6 text-center"
          >
            {item.image ? (
              <SmartImage
                src={item.image}
                alt={item.alt ?? item.title ?? "Award"}
                className="mx-auto mb-4 h-24 w-40 bg-transparent" imgClassName="object-contain"
              />
            ) : null}
            <h4 className="font-semibold text-ink mb-2">{item.title ?? "Award"}</h4>
            <p className="text-sm text-ink/70">{item.description ?? ""}</p>
            {item.rating && (
              <RatingStars value={item.rating} className="mt-3 mx-auto" />
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}