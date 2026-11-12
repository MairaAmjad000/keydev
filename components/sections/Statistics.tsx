import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function Statistics({ eyebrow, title, description, items = [] }: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section tone="dark">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        invert
      />

      <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={`${item.title ?? "stat"}-${index}`}
            className="rounded-card border border-white/10 bg-white/5 p-6 text-center"
          >
            {item.icon ? (
              <SmartImage
                src={item.icon}
                alt={item.title ?? ""}
                className="mx-auto mb-4 size-12 bg-white/10 p-2"
                imgClassName="object-contain"
              />
            ) : null}
            <dt className="sr-only">{item.title ?? ""}</dt>
            <dd>
              <span className="block text-4xl font-extrabold tracking-tight text-white">
                {item.number ?? item.title}
              </span>
              {item.title ? (
                <span className="mt-2 block text-sm uppercase tracking-wide text-white/60">
                  {item.title}
                </span>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
