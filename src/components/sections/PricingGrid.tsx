import { Section, SectionHeading } from "@/components/ui/Section";
import { RatingStars } from "@/components/ui/RatingStars";
import type { SectionData } from "@/lib/sections/types";

export function PricingGrid({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <li
            key={`${item.title ?? "plan"}-${index}`}
            className="rounded-card border border-line bg-surface p-6 text-center min-w-[200px]"
          >
            <p className="text-3xl font-extrabold text-ink">{item.price ?? "Custom"}</p>
            <p className="mt-1 font-medium text-ink/70">{item.name ?? "Plan"}</p>
            <ul className="mt-4 space-y-2 text-left text-sm text-ink/80">
              {item.features?.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
            {item.popular ? (
              <span
                className="mt-4 inline-flex items-center gap-1 rounded-full bg-brand text-xs font-semibold text-white px-2.5 py-0.5"
              >
                <span>Most popular</span>
              </span>
            ) : null}
            {item.button_text && item.button_url ? (
              <a
                href={item.button_url}
                className="mt-4 inline-flex items-center gap-1 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
              >
                {item.button_text}
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}