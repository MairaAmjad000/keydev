/**
 * Registry of the legal pages (content/pages/privacy-policy). To add another (e.g. terms-and-conditions):
 * create content/pages/<slug>/ with page.json and the same two sections, import them here and add an entry.
 */
import type { SectionDataMap } from '@/types';
import privacyPolicyPage from '../../../content/pages/privacy-policy/page.json';
import privacyPolicy_categoryHero from '../../../content/pages/privacy-policy/sections/category-hero.json';
import privacyPolicy_policyContent from '../../../content/pages/privacy-policy/sections/policy-content.json';

export const legalPageSources: Array<{ manifest: { slug: string; seo?: { title?: string; description?: string }; sections: string[] }; data: Partial<SectionDataMap> }> = [
  { manifest: privacyPolicyPage, data: { categoryHero: privacyPolicy_categoryHero, policyContent: privacyPolicy_policyContent } as Partial<SectionDataMap> },
];
