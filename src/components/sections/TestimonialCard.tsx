import { Section, SectionHeading } from "@/components/ui/Section";
import { RatingStars } from "@/components/ui/RatingStars";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function TestimonialCard({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={`${item.title ?? "testimonial"}-${index}`}
            className="rounded-card border border-line bg-white p-6 flex flex-col h-full"
          >
            <RatingStars value={item.rating ?? 5} className="mb-3" />
            <SmartImage
              src={item.image}
              alt={item.alt ?? item.title ?? "Testimonial"}
              className="mb-4 h-16 w-16 rounded-full object-contain"
            />
            <blockquote className="flex-1 text-lg leading-relaxed text-ink/80">
              &ldquo;{item.excerpt ?? item.description ?? ""}&rdquo;
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-2 text-sm">
              <span className="font-medium text-ink">{item.name ?? "Client"}</span>
              {item.title ? (
                <>
                  <span className="text-muted/60 mx-1">•</span>
                  <span className="text-muted/60">{item.title}</span>
                </>
              ) : null}
            </figcaption>
          </div>
        ))}
      </div>
    </Section>
  );
}