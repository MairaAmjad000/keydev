import { Fragment, type ReactElement } from "react";
import type { SectionData } from "@/lib/sections/types";

import { Awards } from "./Awards";
import { BlogCard } from "./BlogCard";
import { BlogSection } from "./BlogSection";
import { CTA } from "./CTA";
import { CaseStudy } from "./CaseStudy";
import { CaseStudyItem } from "./CaseStudyItem";
import { ClutchReviews } from "./ClutchReviews";
import { ConnectWithUs } from "./ConnectWithUs";
import { ContactInfo } from "./ContactInfo";
import { FAQAccordion } from "./FAQAccordion";
import { FAQSection } from "./FAQSection";
import { FactStats } from "./FactStats";
import { FeatureCards } from "./FeatureCards";
import { FeaturedIn } from "./FeaturedIn";
import { FeaturesBenefits } from "./FeaturesBenefits";
import { HeroSection } from "./HeroSection";
import { IntroSection } from "./IntroSection";
import { IntroWithImage } from "./IntroWithImage";
import { LocationSection } from "./LocationSection";
import { LogoStrip } from "./LogoStrip";
import { PartnerLogos } from "./PartnerLogos";
import { PortfolioGrid } from "./PortfolioGrid";
import { TeamSection } from "./TeamSection";
import { PartnerStrip } from "./PartnerStrip";
import { PartnersSection } from "./PartnersSection";
import { PricingGrid } from "./PricingGrid";
import { PricingSection } from "./PricingSection";
import { PricingTable } from "./PricingTable";
import { ProcessStep } from "./ProcessStep";
import { ProgressSection } from "./ProgressSection";
import { ServiceOverview } from "./ServiceOverview";
import { SolutionsOverview } from "./SolutionsOverview";
import { TestimonialHighlight } from "./TestimonialHighlight";
import { TestimonialsGrid } from "./TestimonialsGrid";
import { TestimonialsSection } from "./TestimonialsSection";
import { TestimonialsSlider } from "./TestimonialsSlider";
import { TestimonialsTwoColumn } from "./TestimonialsTwoColumn";
import { Timeline } from "./Timeline";
import { WhyChooseUs } from "./WhyChooseUs";

export type { SectionData };

type Render = (props: SectionData) => ReactElement | null;

/** Maps the `sections[key]` names stored by the admin to components. */
const registry = {
  hero: (props) => <HeroSection {...props} />,
  banner: (props) => <HeroSection {...props} />,
  introduction: (props) => <IntroSection {...props} />,
  features: (props) => <FeatureCards {...props} />,
  callout: (props) => <CTA {...props} />,
  benefits: (props) => <FeaturesBenefits {...props} />,
  technologies: (props) => <SolutionsOverview {...props} />,
  beneficiaries: (props) => <SolutionsOverview {...props} />,
  faq: (props) => <FAQSection {...props} />,
  solution_cta: (props) => <CTA {...props} />,
  other_solutions: (props) => <SolutionsOverview {...props} />,
  why_choose_us: (props) => <WhyChooseUs {...props} />,
  awards: (props) => <Awards {...props} />,
  timeline: (props) => <Timeline {...props} />,
  cta: (props) => <CTA {...props} />,
  contact_info: (props) => <ContactInfo {...props} />,
  fact_stats: (props) => <FactStats {...props} />,
  testimonials: (props) => <TestimonialsSection {...props} />,
  testimonials_slider: (props) => <TestimonialsSlider {...props} />,
  testimonials_grid: (props) => <TestimonialsGrid {...props} />,
  testimonials_two_column: (props) => <TestimonialsTwoColumn {...props} />,
  testimonial_highlight: (props) => <TestimonialHighlight {...props} />,
  pricing: (props) => <PricingSection {...props} />,
  pricing_grid: (props) => <PricingGrid {...props} />,
  pricing_table: (props) => <PricingTable {...props} />,
  partners: (props) => <PartnersSection {...props} />,
  partner_strip: (props) => <PartnerStrip {...props} />,
  partner_logos: (props) => <PartnerLogos {...props} />,
  logo_strip: (props) => <LogoStrip {...props} />,
  intro: (props) => <IntroSection {...props} />,
  intro_with_image: (props) => <IntroWithImage {...props} />,
  location: (props) => <LocationSection {...props} />,
  progress: (props) => <ProgressSection {...props} />,
  case_study: (props) => <CaseStudy {...props} />,
  case_study_item: (props) => <CaseStudyItem {...props} />,
  faq_section: (props) => <FAQSection {...props} />,
  faq_accordion: (props) => <FAQAccordion {...props} />,
  blog: (props) => <BlogCard {...props} />,
  blog_section: (props) => <BlogSection {...props} />,
  services: (props) => <ServiceOverview {...props} />,
  services_overview: (props) => <ServiceOverview {...props} />,
  solutions_overview: (props) => <SolutionsOverview {...props} />,
  features_benefits: (props) => <FeaturesBenefits {...props} />,
  services_cards: (props) => <FeatureCards {...props} />,
  clutch_reviews: (props) => <ClutchReviews {...props} />,
  featured_in: (props) => <FeaturedIn {...props} />,
  connect_with_us: (props) => <ConnectWithUs {...props} />,
  service_overview: (props) => <ServiceOverview {...props} />,
  process_step: (props) => <ProcessStep {...props} />,
  why_choose_us_2: (props) => <WhyChooseUs {...props} />,
  awards_section: (props) => <Awards {...props} />,
  timeline_section: (props) => <Timeline {...props} />,
  banners: (props) => <HeroSection {...props} />,
  portfolio: (props) => <PortfolioGrid {...props} />,
  team: (props) => <TeamSection {...props} />,
  seo: () => null,
} satisfies Record<string, Render>;

export type SectionKey = keyof typeof registry;

const fallback: Render = () => null;

export const sectionRegistry: Record<SectionKey, Render> = registry;

export function getSectionComponent(key: string): Render {
  return (sectionRegistry as Record<string, Render>)[key] ?? fallback;
}

/** Render one CMS section by key; unknown keys render nothing. */
export function renderSection(key: string, props: SectionData, index?: number) {
  const render = getSectionComponent(key);
  return <Fragment key={index}>{render(props)}</Fragment>;
}

export const SectionRegistry = { getSectionComponent, renderSection };
