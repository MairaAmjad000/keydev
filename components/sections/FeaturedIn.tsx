import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import type { CmsItem, CmsRecord, SectionData } from "@/lib/sections/types";

type Media = CmsItem | CmsRecord;

function isRecord(entry: Media): entry is CmsRecord {
  return "href" in entry && typeof entry.href === "string";
}

export function FeaturedIn({
  eyebrow,
  title,
  description,
  items = [],
  records = [],
}: SectionData) {
  const logos: Media[] = [...items, ...records].filter(
    (entry) => entry.image ?? entry.icon,
  );

  if (logos.length === 0) return null;

  return (
    <Section tone="light">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {logos.map((logo, index) => {
          const content = (
            <SmartImage
              src={logo.image ?? logo.icon}
              alt={logo.alt ?? (isRecord(logo) ? logo.title : logo.title) ?? "Featured in"}
              className="h-12 w-28 bg-transparent"
              imgClassName="object-contain grayscale transition hover:grayscale-0"
            />
          );

          const href = isRecord(logo) ? logo.href : undefined;

          return (
            <li key={`${logo.alt ?? "logo"}-${index}`}>
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

/** `brand-logo`: denser, monochrome client strip. */
export function ClientLogos({ items = [], title }: SectionData) {
  const logos = items.filter((item) => item.image ?? item.icon);
  if (logos.length === 0) return null;

  return (
    <section aria-label={title ?? "Client logos"} className="border-y border-line bg-white py-8">
      <div className="container-page">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {logos.map((logo, index) => (
            <li key={`${logo.alt ?? "logo"}-${index}`}>
              <SmartImage
                src={logo.image ?? logo.icon}
                alt={logo.alt ?? ""}
                className="h-10 w-24 bg-transparent"
                imgClassName="object-contain opacity-60 transition hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
