import { Section, SectionHeading } from "@/components/ui/Section";
import { RatingStars } from "@/components/ui/RatingStars";
import type { SectionData } from "@/lib/sections/types";

export function ClientReviews({ eyebrow, title, description, records = [] }: SectionData) {
  if (records.length === 0) return null;

  return (
    <Section tone="light">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <div className="grid gap-5 md:grid-cols-2">
        {records.map((record) => (
          <figure
            key={record.id}
            className="flex h-full flex-col rounded-card border border-line bg-white p-6"
          >
            <RatingStars value={record.rating ?? 5} />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/80">
              &ldquo;{record.excerpt}&rdquo;
            </blockquote>
            <figcaption className="mt-5 border-t border-line pt-4">
              <p className="text-sm font-bold text-ink">{record.title}</p>
              {record.meta ? <p className="text-xs text-muted">{record.meta}</p> : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
