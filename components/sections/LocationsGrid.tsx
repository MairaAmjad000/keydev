import { MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function LocationsGrid({ eyebrow, title, subtitle, description, records = [] }: SectionData) {
  if (records.length === 0) return null;

  return (
    <Section>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description ?? subtitle}
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {records.map((record) => (
          <article
            key={record.id}
            className="overflow-hidden rounded-card border border-line bg-white"
          >
            <SmartImage
              src={record.image}
              alt={record.alt ?? record.title}
              className="aspect-[16/10] rounded-none"
            />
            <div className="p-6">
              <h3 className="flex items-center gap-2 text-base font-bold text-ink">
                <MapPin className="size-4 text-brand" aria-hidden />
                {record.title}
              </h3>
              {record.meta ? (
                <p className="mt-2 text-sm leading-relaxed text-muted">{record.meta}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
