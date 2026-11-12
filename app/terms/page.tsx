import type { Metadata } from "next";
import { SectionList } from "@/components/sections/SectionList";
import { legalSections } from "@/lib/seed";

export const metadata: Metadata = { title: "Terms of service" };

export default function TermsPage() {
  return <SectionList sections={legalSections.terms} />;
}
