import { Section, SectionHeading } from "@/components/ui/Section";
import { RatingStars } from "@/components/ui/RatingStars";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function TestimonialQuote({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section tone="light">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <div className="rounded-card border border-line bg-white p-8">
        <SmartImage
          src={items[0]?.image}
          alt={items[0]?.alt ?? items[0]?.title ?? "Testimonial"}
          className="h-16 w-20 rounded-md mb-6 object-contain"
        />
        <RatingStars value={items[0]?.rating ?? 5} className="mb-4" />
        <blockquote className="text-lg leading-relaxed text-ink/80 line-clamp-3">
          &ldquo;{items[0]?.excerpt ?? items[0]?.description ?? ""}&rdquo;
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3">
          <span className="font-medium text-ink">{items[0]?.name ?? "Client"}</span>
          {items[0]?.title && (
            <>
              <span className="text-muted/60 mx-1">•</span>
              <span className="text-muted/60">{items[0]?.title}</span>
            </>
          )}
        </figcaption>
      </div>
    </Section>
  );
}