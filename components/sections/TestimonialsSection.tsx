import { Section, SectionHeading } from "@/components/ui/Section";
import { RatingStars } from "@/components/ui/RatingStars";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function TestimonialsSection({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section tone="light">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, index) => (
          <li
            key={`${item.title ?? "testimonial"}-${index}`}
            className="rounded-card border border-line bg-white p-6 flex flex-col h-full"
          >
            <RatingStars value={item.rating ?? 5} className="mb-3" />
            {item.image ? (
              <SmartImage
                src={item.image}
                alt={item.alt ?? item.title ?? "Testimonial"}
                className="h-24 w-32 mb-4 rounded-md object-contain"
              />
            ) : null}
            <blockquote className="flex-1 text-sm leading-relaxed text-ink/80">
              &ldquo;{item.excerpt ?? item.description ?? ""}&rdquo;
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-2 text-sm">
              <span className="font-medium text-ink">{item.name ?? "Client"}</span>
              {item.title && (
                <>
                  <span className="text-muted/60 mx-1">•</span>
                  <span className="text-muted/60">{item.title}</span>
                </>
              )}
            </figcaption>
          </li>
        ))}
      </ul>
    </Section>
  );
}