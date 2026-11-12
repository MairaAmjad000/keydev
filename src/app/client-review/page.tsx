import type { Metadata } from "next";
import { SectionList } from "@/components/sections/SectionList";
import { clientReviewSections } from "@/lib/seed";

export const metadata: Metadata = { title: "Client reviews" };

export default function ClientReviewPage() {
  return <SectionList sections={clientReviewSections} />;
}
