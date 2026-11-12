import { Section, SectionHeading } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import type { SectionData } from "@/lib/sections/types";

export function TeamSection({
  eyebrow,
  title,
  description,
  items = [],
}: SectionData) {
  if (items.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, index) => (
          <li
            key={`${item.title ?? "team-member"}-${index}`}
            className="rounded-card border border-line bg-white p-6 text-center"
          >
            {item.image ? (
              <SmartImage
                src={item.image}
                alt={item.alt ?? item.title ?? "Team member"}
                className="h-24 w-24 mx-auto mb-4 rounded-full object-contain"
              />
            ) : (
              <div
                className="h-24 w-24 mx-auto mb-4 rounded-full bg-surface flex items-center justify-center text-muted/60 text-2xl"
              >
                {item.initials ?? item.title?.charAt(0) ?? "?"}
              </div>
            )}
            <h4 className="font-semibold text-ink mb-2">{item.name ?? item.title ?? "Team Member"}</h4>
            {item.role && (
              <p className="text-sm text-ink/70 mb-4">{item.role}</p>
            )}
            {item.socials?.length ? (
              <div className="flex gap-2 justify-center">
                {item.socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted transition hover:text-brand"
                    aria-label={social.label}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}