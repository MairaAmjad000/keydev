import type { Metadata } from "next";
import { SectionList } from "@/components/sections/SectionList";
import { howWeWorkSections } from "@/lib/seed";

export const metadata: Metadata = { title: "How we work" };

export default function HowWeWorkPage() {
  return <SectionList sections={howWeWorkSections} />;
}
