import { SectionList } from "@/components/sections/SectionList";
import { homeSections, postsAsItems } from "@/lib/seed";

export default function HomePage() {
  const sections = homeSections.map((s) =>
    s.key === "blog_section" ? { ...s, items: postsAsItems.slice(0, 3) } : s,
  );
  return <SectionList sections={sections} />;
}
