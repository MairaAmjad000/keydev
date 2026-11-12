import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function CaseStudy({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="font-semibold text-2xl text-ink mb-4">{title ?? "Case Study"}</h3>
          <p className="text-ink/70 line-clamp-3">{description ?? ""}</p>
          {items.map((item, index) => (
            <div
              key={`${item.title ?? "detail"}-${index}`}
              className="mt-4 pt-4 border-t border-line"
            >
              <p className="font-medium text-ink">{item.title ?? "Detail"}</p>
              <p className="text-muted/60 text-sm">{item.description ?? ""}</p>
            </div>
          ))}
        </div>
        {items.map((item, index) => {
          const image = item.image ?? item.logo;
          const alt = item.alt ?? item.title;
          if (image) {
            return (
              <div
                key={`${image}-${index}`}
                className="relative rounded-card border border-line bg-white p-6"
              >
                <SmartImage
                  src={image}
                  alt={alt ?? "Case study image"}
                  className="h-full w-full object-cover rounded-md"
                />
                {item.button_text && item.button_url ? (
                  <a
                    href={item.button_url}
                    className="absolute top-4 right-4 rounded-md bg-white/90 p-2 text-xs font-medium text-brand"
                  >
                    {item.button_text}
                  </a>
                ) : null}
              </div>
            );
          }
          return null;
        })}
      </div>
    </Section>
  );
}