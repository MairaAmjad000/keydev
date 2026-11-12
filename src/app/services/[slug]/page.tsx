import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionList } from "@/components/sections/SectionList";
import { getService, serviceSections, services } from "@/lib/seed";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  return service ? { title: service.title, description: service.summary } : {};
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();
  return <SectionList sections={serviceSections(service)} />;
}
