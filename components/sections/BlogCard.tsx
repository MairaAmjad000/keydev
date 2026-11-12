import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function BlogCard({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <li
            key={`${item.slug ?? "post"}-${index}`}
            className="flex flex-col rounded-card border border-line bg-white overflow-hidden transition hover:shadow-card"
          >
            {item.image ? (
              <SmartImage
                src={item.image}
                alt={item.alt ?? item.title ?? "Blog"}
                className="h-48 w-full object-cover"
              />
            ) : (
              <div
                className="h-48 w-full bg-gradient-to-b from-surface/50 to-surface/80 flex items-center justify-center text-muted/60"
              >
                <span className="text-sm text-muted/50">
                  {item.title ?? "Blog"}
                </span>
              </div>
            )}
            <div className="p-4">
              <div className="flex items-center gap-2 text-xs text-muted/60 mb-2">
                {item.published_at && (
                  <time dateTime={item.published_at}>{new Date(item.published_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</time>
                )}
              </div>
              <h4 className="mb-2 font-semibold text-ink transition hover:text-brand">
                {item.title ?? "Blog Post"}
              </h4>
              {item.excerpt && (
                <p className="text-sm text-ink/70 line-clamp-2">{item.excerpt}</p>
              )}
            </div>
            {item.read_more_url ? (
              <a
                href={item.read_more_url}
                className="mx-4 mb-4 mt-1 inline-block text-xs font-semibold text-brand underline underline-offset-2"
              >
                Read more
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}