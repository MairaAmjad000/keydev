/**
* GENERATED registry of the who-we-are page (content/pages/who-we-are). Keep in step with the content/ folder.
*/
import type { SectionDataMap } from '@/types';
import whoWeArePage from '../../../content/pages/who-we-are/page.json';
import whoWeAre_brandLogos from '../../../content/pages/who-we-are/sections/brand-logos.json';
import whoWeAre_categoryHero from '../../../content/pages/who-we-are/sections/category-hero.json';
import whoWeAre_coreValues from '../../../content/pages/who-we-are/sections/core-values.json';
import whoWeAre_historyTimeline from '../../../content/pages/who-we-are/sections/history-timeline.json';
import whoWeAre_introContent from '../../../content/pages/who-we-are/sections/intro-content.json';
import whoWeAre_leadership from '../../../content/pages/who-we-are/sections/leadership.json';
import whoWeAre_missionVision from '../../../content/pages/who-we-are/sections/mission-vision.json';
import whoWeAre_portfolio from '../../../content/pages/who-we-are/sections/portfolio.json';
import whoWeAre_statsCounters from '../../../content/pages/who-we-are/sections/stats-counters.json';
import whoWeAre_technologies from '../../../content/pages/who-we-are/sections/technologies.json';
import whoWeAre_testimonials from '../../../content/pages/who-we-are/sections/testimonials.json';

export const whoWeArePageSources: Array<{ manifest: { slug: string; seo?: { title?: string; description?: string }; sections: string[] }; data: Partial<SectionDataMap> }> = [
  { manifest: whoWeArePage, data: { brandLogos: whoWeAre_brandLogos, categoryHero: whoWeAre_categoryHero, coreValues: whoWeAre_coreValues, historyTimeline: whoWeAre_historyTimeline, introContent: whoWeAre_introContent, leadership: whoWeAre_leadership, missionVision: whoWeAre_missionVision, portfolio: whoWeAre_portfolio, statsCounters: whoWeAre_statsCounters, technologies: whoWeAre_technologies, testimonials: whoWeAre_testimonials } as Partial<SectionDataMap> },
];
