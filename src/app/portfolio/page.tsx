import type { Metadata } from "next";
import { SectionList } from "@/components/sections/SectionList";
import { portfolioSections } from "@/lib/seed";

export const metadata: Metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return <SectionList sections={portfolioSections} />;
}
