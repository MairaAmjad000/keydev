import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionList } from "@/components/sections/SectionList";
import { connectCta, serviceCategories, services, type ServiceRecord } from "@/lib/seed";

type Props = { params: Promise<{ slug: string }> };

const isCategory = (slug: string): slug is ServiceRecord["category"] => slug in serviceCategories;

export function generateStaticParams() {
  return Object.keys(serviceCategories).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  return isCategory(slug) ? { title: serviceCategories[slug].title, description: serviceCategories[slug].description } : {};
}

export default async function ServiceCategoryPage({ params }: Props) {
  const slug = (await params).slug;
  if (!isCategory(slug)) notFound();
  const category = serviceCategories[slug];

  return (
    <SectionList
      sections={[
        {
          key: "services",
          eyebrow: "Services",
          title: category.title,
          description: category.description,
          items: services
            .filter((s) => s.category === slug)
            .map((s, i) => ({
              number: String(i + 1).padStart(2, "0"),
              title: s.title,
              description: s.summary,
            })),
        },
        connectCta,
      ]}
    />
  );
}
