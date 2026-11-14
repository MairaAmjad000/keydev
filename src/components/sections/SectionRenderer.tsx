import { Fragment } from 'react';
import type { FormsContent, SectionBlock } from '@/types';
import { Hero } from './Hero';
import { BrandLogos } from './BrandLogos';
import { About } from './About';
import { Offerings } from './Offerings';
import { Industries } from './Industries';
import { Values } from './Values';
import { Callout } from './Callout';
import { Process } from './Process';
import { Testimonials } from './Testimonials';
import { Portfolio } from './Portfolio';
import { ContactCta } from './ContactCta';
import { WhatsAppAnchor } from './WhatsAppAnchor';
import { Technologies } from './Technologies';
import { Blog } from './Blog';
import { ScheduleCall } from './ScheduleCall';
import { Engagement } from './Engagement';
import { Locations } from './Locations';
import { CategoryHero } from './CategoryHero';
import { IntroContent } from './IntroContent';
import { ServiceOfferings } from './ServiceOfferings';
import { FeatureList } from './FeatureList';
import { AdvantageGrid } from './AdvantageGrid';
import { FrameworkTabs } from './FrameworkTabs';
import { WhyChoose } from './WhyChoose';
import { Faq } from './Faq';
import { FeaturedIn } from './FeaturedIn';
import { OfferCards } from './OfferCards';
import { ImageCards } from './ImageCards';
import { CompareBenefits } from './CompareBenefits';
import { SprintProcess } from './SprintProcess';
import { TechStackTabs } from './TechStackTabs';
import { WhyChooseImage } from './WhyChooseImage';
import { FeatureTabs } from './FeatureTabs';
import { IdealBusiness } from './IdealBusiness';
import { SolutionCta } from './SolutionCta';
import { OtherSolutions } from './OtherSolutions';
import { WhyInvest } from './WhyInvest';

function renderSection(block: SectionBlock, forms: FormsContent) {
  switch (block.type) {
    case 'hero': return <Hero data={block.data} />;
    case 'brandLogos': return <BrandLogos data={block.data} />;
    case 'about': return <About data={block.data} />;
    case 'offerings': return <Offerings data={block.data} />;
    case 'industries': return <Industries data={block.data} />;
    case 'values': return <Values data={block.data} />;
    case 'callout': return <Callout data={block.data} />;
    case 'process': return <Process data={block.data} />;
    case 'testimonials': return <Testimonials data={block.data} />;
    case 'portfolio': return <Portfolio data={block.data} />;
    case 'contactCta': return <ContactCta data={block.data} />;
    case 'whatsAppAnchor': return <WhatsAppAnchor data={block.data} />;
    case 'technologies': return <Technologies data={block.data} />;
    case 'blog': return <Blog data={block.data} />;
    case 'scheduleCall': return <ScheduleCall data={block.data} forms={forms} />;
    case 'engagement': return <Engagement data={block.data} />;
    case 'locations': return <Locations data={block.data} />;
    case 'categoryHero': return <CategoryHero data={block.data} />;
    case 'introContent': return <IntroContent data={block.data} />;
    case 'serviceOfferings': return <ServiceOfferings data={block.data} />;
    case 'featureList': return <FeatureList data={block.data} />;
    case 'advantageGrid': return <AdvantageGrid data={block.data} />;
    case 'frameworkTabs': return <FrameworkTabs data={block.data} />;
    case 'whyChoose': return <WhyChoose data={block.data} />;
    case 'faq': return <Faq data={block.data} />;
    case 'featuredIn': return <FeaturedIn data={block.data} />;
    case 'offerCards': return <OfferCards data={block.data} />;
    case 'imageCards': return <ImageCards data={block.data} />;
    case 'compareBenefits': return <CompareBenefits data={block.data} />;
    case 'sprintProcess': return <SprintProcess data={block.data} />;
    case 'techStackTabs': return <TechStackTabs data={block.data} />;
    case 'whyChooseImage': return <WhyChooseImage data={block.data} />;
    case 'featureTabs': return <FeatureTabs data={block.data} />;
    case 'idealBusiness': return <IdealBusiness data={block.data} />;
    case 'solutionCta': return <SolutionCta data={block.data} />;
    case 'otherSolutions': return <OtherSolutions data={block.data} />;
    case 'whyInvest': return <WhyInvest data={block.data} />;
    default: return null;
  }
}

/** Renders the page's sections in the order the admin panel returns them. */
export function SectionRenderer({ sections, forms }: { sections: SectionBlock[]; forms: FormsContent }) {
  return (
    <>
      {sections.map((block, i) => (
        <Fragment key={`${block.type}-${i}`}>
          {i > 0 && ' '}
          {renderSection(block, forms)}
        </Fragment>
      ))}
    </>
  );
}
