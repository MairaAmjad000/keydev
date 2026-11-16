import type {
  HeroContent, BrandLogosContent, AboutContent, OfferingsContent, IndustriesContent, ValuesContent,
  CalloutContent, ProcessContent, TestimonialsContent, PortfolioContent, ContactCtaContent,
  WhatsAppAnchorContent, TechnologiesContent, BlogContent, ScheduleCallContent, EngagementContent,
  LocationsContent, CategoryHeroContent, IntroContentContent, ServiceOfferingsContent, FeatureListContent,
  AdvantageGridContent, FrameworkTabsContent, WhyChooseContent, FaqContent, FeaturedInContent,
  OfferCardsContent, ImageCardsContent, CompareBenefitsContent, SprintProcessContent, TechStackTabsContent,
  WhyChooseImageContent, FeatureTabsContent, IdealBusinessContent, SolutionCtaContent, OtherSolutionsContent,
  WhyInvestContent, PortfolioShowcaseContent, BlogListContent,
  ContactFormContent, ContactInfoContent, ContactMapContent,
  StatsCountersContent, LeadershipContent, MissionVisionContent, CoreValuesContent, HistoryTimelineContent,
  ProcessStepsContent, ClutchReviewsContent, ClientReviewsContent,
  TechnologyGroupsContent, EstimateWizardContent, BlogPostContent,
} from './sections';
import type {
  HeaderContent, MobileMenuContent, GetQuoteButtonContent, CallBackSidebarContent, FooterContent,
  QuotePopupContent, CookieAlertContent, HireStickyBarContent,
} from './layout';
import type { FormsContent, SiteSettings } from './settings';

/** Maps a section `type` (as stored in the admin panel) to the shape of its `data`. */
export interface SectionDataMap {
  hero: HeroContent;
  brandLogos: BrandLogosContent;
  about: AboutContent;
  offerings: OfferingsContent;
  industries: IndustriesContent;
  values: ValuesContent;
  callout: CalloutContent;
  process: ProcessContent;
  testimonials: TestimonialsContent;
  portfolio: PortfolioContent;
  contactCta: ContactCtaContent;
  whatsAppAnchor: WhatsAppAnchorContent;
  technologies: TechnologiesContent;
  blog: BlogContent;
  scheduleCall: ScheduleCallContent;
  engagement: EngagementContent;
  locations: LocationsContent;
  categoryHero: CategoryHeroContent;
  introContent: IntroContentContent;
  serviceOfferings: ServiceOfferingsContent;
  featureList: FeatureListContent;
  advantageGrid: AdvantageGridContent;
  frameworkTabs: FrameworkTabsContent;
  whyChoose: WhyChooseContent;
  faq: FaqContent;
  featuredIn: FeaturedInContent;
  offerCards: OfferCardsContent;
  imageCards: ImageCardsContent;
  compareBenefits: CompareBenefitsContent;
  sprintProcess: SprintProcessContent;
  techStackTabs: TechStackTabsContent;
  whyChooseImage: WhyChooseImageContent;
  featureTabs: FeatureTabsContent;
  idealBusiness: IdealBusinessContent;
  solutionCta: SolutionCtaContent;
  otherSolutions: OtherSolutionsContent;
  whyInvest: WhyInvestContent;
  portfolioShowcase: PortfolioShowcaseContent;
  blogList: BlogListContent;
  contactForm: ContactFormContent;
  contactInfo: ContactInfoContent;
  contactMap: ContactMapContent;
  statsCounters: StatsCountersContent;
  leadership: LeadershipContent;
  missionVision: MissionVisionContent;
  coreValues: CoreValuesContent;
  historyTimeline: HistoryTimelineContent;
  processSteps: ProcessStepsContent;
  clutchReviews: ClutchReviewsContent;
  clientReviews: ClientReviewsContent;
  technologyGroups: TechnologyGroupsContent;
  estimateWizard: EstimateWizardContent;
  blogPost: BlogPostContent;
}

export type SectionType = keyof SectionDataMap;

/** One block of a page: the admin panel stores pages as an ordered list of these. */
export type SectionBlock = { [K in SectionType]: { type: K; data: SectionDataMap[K] } }[SectionType];

export interface PageData {
  slug: string;
  seo?: { title?: string; description?: string };
  sections: SectionBlock[];
  /** Global sections this page does NOT show (e.g. the contact page hides all four). */
  hideGlobalSections?: GlobalSectionType[];
}

/** Sections shared by every page, shown at the end above the footer, always in this order. */
export const GLOBAL_SECTION_ORDER = ['contactCta', 'scheduleCall', 'engagement', 'locations'] as const;
export type GlobalSectionType = (typeof GLOBAL_SECTION_ORDER)[number];

/** One global section: its content is written once and `enabled` switches it on or off site-wide. */
export type GlobalSectionBlock = {
  [K in GlobalSectionType]: { type: K; enabled: boolean; data: SectionDataMap[K] };
}[GlobalSectionType];

export interface GlobalSectionsContent {
  sections: GlobalSectionBlock[];
}

/** Everything that is shared by all pages. */
export interface SiteData {
  settings: SiteSettings;
  forms: FormsContent;
  header: HeaderContent;
  mobileMenu: MobileMenuContent;
  getQuoteButton: GetQuoteButtonContent;
  callBackSidebar: CallBackSidebarContent;
  footer: FooterContent;
  quotePopup: QuotePopupContent;
  cookieAlert: CookieAlertContent;
  hireStickyBar: HireStickyBarContent;
  globalSections: GlobalSectionsContent;
}
