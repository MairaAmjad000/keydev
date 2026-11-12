import type { Metadata } from "next";
import { SectionList } from "@/components/sections/SectionList";
import { contactSections } from "@/lib/seed";

export const metadata: Metadata = { title: "Contact", description: "Talk to the KeyDevs team." };

export default function ContactPage() {
  return <SectionList sections={contactSections} />;
}
