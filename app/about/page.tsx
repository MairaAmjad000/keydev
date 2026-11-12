import type { Metadata } from "next";
import { SectionList } from "@/components/sections/SectionList";
import { aboutSections } from "@/lib/seed";

export const metadata: Metadata = { title: "About us", description: "Meet the KeyDevs studio." };

export default function AboutPage() {
  return <SectionList sections={aboutSections} />;
}
