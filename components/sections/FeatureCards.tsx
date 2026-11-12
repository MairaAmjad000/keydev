import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import { RatingStars } from "@/components/ui/RatingStars";
import type { SectionData } from "@/lib/sections/types";

export function FeatureCards({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <div className={`grid gap-4 sm:grid-cols-2 ${items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
        {items.map((item, index) => (
          <div
            key={`${item.title ?? "feature"}-${index}`}
            className="rounded-card border border-line bg-surface p-5 text-left transition hover:border-brand"
          >
            {item.image ? (
              <SmartImage
                src={item.image}
                alt={item.alt ?? item.title ?? "Feature"}
                className="mb-4 h-16 w-16 bg-transparent object-contain"
                imgClassName="mx-auto"
              />
            ) : (
              <div className="h-16 w-16 rounded-md bg-brand flex items-center justify-center mb-4">
                <span className="text-2xl text-brand/20">
                  {item.icon ?? "⚡"}
                </span>
              </div>
            )}
            <h4 className="font-semibold text-ink mb-1">{item.title ?? "Feature"}</h4>
            <p className="text-sm text-muted/70 line-clamp-2">{item.description ?? ""}</p>
            {item.button_text && item.button_url ? (
              <a
                href={item.button_url}
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand transition hover:text-brand-dark"
              >
                {item.button_text}
                <svg
                  className="size-3.5 transition-transform duration-200"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}