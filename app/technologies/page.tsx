import type { Metadata } from "next";
import { SectionList } from "@/components/sections/SectionList";
import { technologiesSections } from "@/lib/seed";

export const metadata: Metadata = { title: "Technologies" };

export default function TechnologiesPage() {
  return <SectionList sections={technologiesSections} />;
}
