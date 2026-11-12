import { Section, SectionHeading } from "@/components/ui/Section";
import { RatingStars } from "@/components/ui/RatingStars";
import type { SectionData } from "@/lib/sections/types";

export function PricingTable({
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
            className="rounded-card border border-line bg-surface p-6 min-w-[260px]"
          >
            <p className="text-2xl font-extrabold text-ink mb-2">{item.price ?? "Custom"}</p>
            <p className="font-medium text-ink/70 mb-6">{item.name ?? "Plan"}</p>
            <ul className="space-y-3 text-left text-sm text-ink/80">
              {item.features?.map((feat, i) => (
                <li key={i}>
                  <svg
                    className="size-4 text-brand flex-shrink-0 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 21l-4-4L14 21H6v-2h8l-2-2L11 7l-2 2 2 2h2v2l4 4z" />
                  </svg>
                  {feat}
                </li>
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