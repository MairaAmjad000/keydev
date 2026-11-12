import type { Metadata } from "next";
import { SectionList } from "@/components/sections/SectionList";
import { postsAsItems } from "@/lib/seed";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <SectionList
      sections={[
        { key: "blog_section", eyebrow: "Insights", title: "From the KeyDevs blog", items: postsAsItems },
      ]}
    />
  );
}
