import type { ComponentType } from 'react';
import type { CmsSection } from '@/types/content';
import {
  AboutSection,
  BlogSection,
  BrandLogosSection,
  CalloutSection,
  ContactSection,
  CookieNoticeSection,
  EngagementModelsSection,
  FooterExpertiseSection,
  FooterSection,
  HeroSection,
  IndustriesSection,
  PortfolioSection,
  ProcessSection,
  QuotePopupSection,
  ServicesSection,
  StickyCtaSection,
  TechnologyStackSection,
  TestimonialsSection,
  TrustAndReviewsSection,
  ValuePropositionSection,
} from './regions';
import { CmsHtmlSection } from '@/components/shared/CmsHtmlSection';

interface HomepageSectionsProps {
  sections: CmsSection[];
}

const sectionComponents: Record<string, ComponentType<{ section: CmsSection }>> = {
  hero: HeroSection,
  brand_logos: BrandLogosSection,
  about: AboutSection,
  services: ServicesSection,
  industries: IndustriesSection,
  value_proposition: ValuePropositionSection,
  callout: CalloutSection,
  process: ProcessSection,
  testimonials: TestimonialsSection,
  portfolio: PortfolioSection,
  contact: ContactSection,
  technology_stack: TechnologyStackSection,
  blog: BlogSection,
  trust_and_reviews: TrustAndReviewsSection,
  engagement_models: EngagementModelsSection,
  footer: FooterSection,
  footer_expertise: FooterExpertiseSection,
  quote_popup: QuotePopupSection,
  cookie_notice: CookieNoticeSection,
  sticky_cta: StickyCtaSection,
};

/** Composes page-specific section components in CMS-configured order. */
export function HomepageSections({ sections }: HomepageSectionsProps) {
  const orderedSections = [...sections]
    .filter((section) => section.enabled)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <main id="main-content">
      {orderedSections.map((section) => {
        const SectionComponent = sectionComponents[section.key];
        return SectionComponent ? (
          <SectionComponent key={section.key} section={section} />
        ) : (
          <CmsHtmlSection key={section.key} section={section} />
        );
      })}
    </main>
  );
}
