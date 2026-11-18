/**
* GENERATED registry of the estimate page (content/pages/app-development-cost-calculator). Keep in step with the content/ folder.
*/
import type { SectionDataMap } from '@/types';
import estimatePage from '../../../content/pages/app-development-cost-calculator/page.json';
import estimate_estimateWizard from '../../../content/pages/app-development-cost-calculator/sections/estimate-wizard.json';

export const estimatePageSources: Array<{ manifest: { slug: string; seo?: { title?: string; description?: string }; sections: string[]; hideGlobalSections?: string[]; bareLayout?: boolean }; data: Partial<SectionDataMap> }> = [
  { manifest: estimatePage, data: { estimateWizard: estimate_estimateWizard } as Partial<SectionDataMap> },
];
