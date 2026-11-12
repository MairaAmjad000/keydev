import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

/** `process`: numbered cards in a row. */
export function ProcessSteps({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section tone="light">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <li
            key={`${item.title ?? "step"}-${index}`}
            className="relative rounded-card border border-line bg-white p-6"
          >
            <span className="text-4xl font-extrabold leading-none text-brand/20">
              {item.number ?? String(index + 1).padStart(2, "0")}
            </span>
            {item.icon ? (
              <SmartImage
                src={item.icon}
                alt=""
                className="mb-4 mt-4 size-10 bg-brand-soft p-2"
                imgClassName="object-contain"
              />
            ) : null}
            <h3 className="mt-3 text-base font-bold text-ink">{item.title}</h3>
            {item.description ? (
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}

/** `how_it_works`: vertical numbered list with a rail. */
export function HowItWorks({ eyebrow, title, description, items = [] }: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} align="left" />

      <ol className="relative space-y-8 border-l border-line pl-8">
        {items.map((item, index) => (
          <li key={`${item.title ?? "step"}-${index}`} className="relative">
            <span className="absolute -left-[3.05rem] grid size-8 place-items-center rounded-full bg-brand text-xs font-bold text-white">
              {item.number ?? index + 1}
            </span>
            <h3 className="text-lg font-bold text-ink">{item.title}</h3>
            {item.description ? (
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}

/** `process_steps`: alternating image/detail rows. */
export function ProcessDetail({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section tone="light">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <div className="space-y-8">
        {items.map((item, index) => (
          <div
            key={`${item.title ?? "step"}-${index}`}
            className={`grid items-center gap-6 rounded-card border border-line bg-white p-6 lg:grid-cols-2 ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {item.image ? (
              <SmartImage
                src={item.image}
                alt={item.alt ?? item.title ?? ""}
                className="aspect-[16/10]"
              />
            ) : null}

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
                Step {item.number ?? index + 1}
              </span>
              <h3 className="mt-2 text-xl font-bold text-ink">{item.title}</h3>
              {item.description ? (
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/** `history`: alternating year blocks. */
export function HistoryTimeline({ eyebrow, title, description, items = [] }: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ol className="space-y-6">
        {items.map((item, index) => (
          <li
            key={`${item.title ?? "year"}-${index}`}
            className="grid gap-4 rounded-card border border-line bg-surface p-6 sm:grid-cols-[7rem_1fr]"
          >
            <span className="text-2xl font-extrabold text-brand">
              {item.number ?? item.title}
            </span>
            <div>
              {item.number && item.title ? (
                <h3 className="text-base font-bold text-ink">{item.title}</h3>
              ) : null}
              {item.description ? (
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
