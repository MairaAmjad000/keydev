/**
* GENERATED registry of the contact page (content/pages/contact). Keep in step with the content/ folder.
*/
import type { SectionDataMap } from '@/types';
import contactPage from '../../../content/pages/contact/page.json';
import contact_categoryHero from '../../../content/pages/contact/sections/category-hero.json';
import contact_contactForm from '../../../content/pages/contact/sections/contact-form.json';
import contact_contactInfo from '../../../content/pages/contact/sections/contact-info.json';
import contact_contactMap from '../../../content/pages/contact/sections/contact-map.json';

export const contactPageSources: Array<{ manifest: { slug: string; seo?: { title?: string; description?: string }; sections: string[] }; data: Partial<SectionDataMap> }> = [
  { manifest: contactPage, data: { categoryHero: contact_categoryHero, contactForm: contact_contactForm, contactInfo: contact_contactInfo, contactMap: contact_contactMap } as Partial<SectionDataMap> },
];
