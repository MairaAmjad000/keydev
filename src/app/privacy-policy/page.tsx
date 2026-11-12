import type { Metadata } from "next";
import { SectionList } from "@/components/sections/SectionList";
import { legalSections } from "@/lib/seed";

export const metadata: Metadata = { title: "Privacy policy" };

export default function PrivacyPage() {
  return <SectionList sections={legalSections.privacy} />;
}
