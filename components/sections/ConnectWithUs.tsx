import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import { RatingStars } from "@/components/ui/RatingStars";
import type { SectionData } from "@/lib/sections/types";

export function ConnectWithUs({ title, description, items = [] }: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section tone="light">
      <SectionHeading title={title} description={description} />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={`${item.title ?? "review"}-${index}`}
            className="flex flex-col items-center rounded-card border border-line bg-white p-6 text-center"
          >
            {item.image ? (
              <SmartImage
                src={item.image}
                alt={item.alt ?? item.title ?? "Review platform"}
                className="mb-4 h-12 w-32 bg-transparent"
                imgClassName="object-contain"
              />
            ) : null}
            <RatingStars value={item.rating ?? 5} />
            {item.reviewCount ? (
              <p className="mt-2 text-sm font-semibold text-ink">
                {item.reviewCount} reviews
              </p>
            ) : null}
            {item.title ? <p className="mt-1 text-xs text-muted">{item.title}</p> : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
