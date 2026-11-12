import { Section, SectionHeading } from "@/components/ui/Section";
import { Check } from "lucide-react";
import type { SectionData } from "@/lib/sections/types";

export function FeaturesBenefits({
  eyebrow,
  title,
  description,
  features = [],
  benefits = [],
}: SectionData) {
  return (
    <Section>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <div className="grid gap-6 md:grid-cols-2">
        {features.length > 0 && (
          <div>
            <h3 className="font-semibold text-2xl text-ink mb-4">Features</h3>
            <ul className="space-y-3 text-sm text-ink/70">
              {features.map((feature, i) => (
                <li key={i}>
                  <Check className="mr-2 inline size-4 text-brand" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        {benefits.length > 0 && (
          <div>
            <h3 className="font-semibold text-2xl text-ink mb-4">Benefits</h3>
            <ul className="space-y-3 text-sm text-ink/70">
              {benefits.map((benefit, i) => (
                <li key={i}>
                  <Check className="mr-2 inline size-4 text-brand" aria-hidden />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}