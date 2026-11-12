import { ExternalLink } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { RatingStars } from "@/components/ui/RatingStars";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function ClutchReviews({
  eyebrow,
  title,
  description,
  items = [],
  records = [],
  buttonText,
  buttonHref,
}: SectionData) {
  if (items.length === 0 && records.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      {items.length > 0 ? (
        <div className="mb-10 grid gap-5 sm:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={`${item.title ?? "score"}-${index}`}
              className="rounded-card border border-line bg-surface p-6 text-center"
            >
              <p className="text-4xl font-extrabold text-ink">{item.number ?? item.title}</p>
              <p className="mt-1 text-sm font-semibold text-ink/70">{item.title}</p>
              {item.description ? (
                <p className="mt-2 text-xs text-muted">{item.description}</p>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}

      {records.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2">
          {records.map((record) => (
            <figure
              key={record.id}
              className="flex h-full flex-col rounded-card border border-line bg-white p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <RatingStars value={record.rating ?? 5} />
                {record.meta ? (
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                    {record.meta}
                  </span>
                ) : null}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/80">
                &ldquo;{record.excerpt}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                <SmartImage
                  src={record.image}
                  alt={record.alt ?? record.title}
                  className="size-10 rounded-full"
                />
                <span className="text-sm font-bold text-ink">{record.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}

      {buttonText && buttonHref ? (
        <div className="mt-8 flex justify-center">
          <a
            href={buttonHref}
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
          >
            {buttonText}
            <ExternalLink className="size-3.5" aria-hidden />
          </a>
        </div>
      ) : null}
    </Section>
  );
}
