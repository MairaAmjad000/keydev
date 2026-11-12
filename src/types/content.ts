export type NavLink = { label: string; href: string };
export type Service = { title: string; description: string; icon: string; href: string };
export type Stat = { value: string; label: string };
export type ProcessStep = { number: string; title: string; description: string };
export type Project = { name: string; category: string; description: string };
export type Testimonial = { quote: string; name: string; role: string };
export type HomepageContent = {
  navigation: NavLink[];
  hero: { eyebrow: string; title: string; description: string; primaryCta: string; secondaryCta: string };
  about: { eyebrow: string; title: string; description: string; stats: Stat[] };
  offerings: { eyebrow: string; title: string; description: string; services: Service[] };
  industries: string[];
  values: { title: string; description: string }[];
  process: ProcessStep[];
  projects: Project[];
  testimonials: Testimonial[];
  technologies: string[];
  engagement: { title: string; description: string }[];
};
