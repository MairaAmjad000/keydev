import { Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Carousel, CarouselItem } from "@/components/ui/Carousel";
import { RatingStars } from "@/components/ui/RatingStars";
import type { SectionData } from "@/lib/sections/types";

export function Testimonials({ eyebrow, title, description, records = [] }: SectionData) {
  if (records.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <Carousel>
        {records.map((record) => (
          <CarouselItem key={record.id} className="w-[min(24rem,88vw)]">
            <figure className="flex h-full flex-col rounded-card border border-line bg-white p-6 shadow-card">
              <Quote className="size-7 text-brand/30" aria-hidden />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink/80">
                {record.excerpt}
              </blockquote>

              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                {record.image ? (
                  <img
                    src={record.image}
                    alt={record.alt ?? record.title}
                    loading="lazy"
                    className="size-10 rounded-full object-cover"
                  />
                ) : (
                  <span className="grid size-10 place-items-center rounded-full bg-brand-soft text-sm font-bold text-brand">
                    {record.title.slice(0, 1)}
                  </span>
                )}
                <div>
                  <p className="text-sm font-bold text-ink">{record.title}</p>
                  {record.meta ? (
                    <p className="text-xs text-muted">{record.meta}</p>
                  ) : null}
                </div>
                <RatingStars value={record.rating} size="size-3.5" className="ml-auto" />
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </Carousel>
    </Section>
  );
}
