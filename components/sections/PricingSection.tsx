import { Section, SectionHeading } from "@/components/ui/Section";
import { RatingStars } from "@/components/ui/RatingStars";
import type { SectionData } from "@/lib/sections/types";

export function PricingSection({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section tone="light">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <li
            key={`${item.title ?? "plan"}-${index}`}
            className="rounded-card border border-line bg-white p-6 text-center"
          >
            <p className="text-3xl font-extrabold text-brand">{item.price ?? "Contact"}</p>
            <p className="mt-2 font-medium text-ink/70">{item.name ?? "Plan"}</p>
            {item.bullets?.map((bullet, i) => (
              <p key={i} className="mt-1 text-sm text-ink/70">{bullet}</p>
            ))}
            {item.button_text && item.button_url ? (
              <a
                href={item.button_url}
                className="mt-4 inline-flex items-center gap-1 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition hover:border-brand hover:text-brand"
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