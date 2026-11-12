import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function SolutionsOverview({
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
            key={`${item.title ?? "solution"}-${index}`}
            className="rounded-card border border-line bg-surface p-5 text-left transition hover:border-brand"
          >
            {item.image ? (
              <SmartImage
                src={item.image}
                alt={item.alt ?? item.title ?? "Solution"}
                className="h-16 w-16 mb-4 bg-transparent object-contain"
                imgClassName="mx-auto"
              />
            ) : (
              <div className="h-16 w-16 rounded-md bg-brand flex items-center justify-center mb-4">
                <span className="text-2xl text-brand/20">
                  {item.icon ?? "🔧"}
                </span>
              </div>
            )}
            <h4 className="font-semibold text-ink mb-1">{item.title ?? "Solution"}</h4>
            <p className="text-sm text-muted/70 line-clamp-1">{item.description ?? ""}</p>
            {item.button_text && item.button_url ? (
              <a
                href={item.button_url}
                className="mt-3 inline-flex items-center gap-1 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition hover:border-brand hover:text-brand"
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