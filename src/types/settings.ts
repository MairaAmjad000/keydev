// Global settings managed in the admin panel (content/settings).

export interface SiteSettings {
  language: string;
  themeColor: string;
  seo: {
    title: string;
    description: string;
    siteName: string;
    favicon: string;
  };
  notFound: {
    heading: string;
    text: string;
    linkText: string;
    linkHref: string;
  };
}

export interface FormOption {
  value?: string;
  label: string;
}


export interface FormsContent {
  service: FormOption[];
  region: FormOption[];
  budget: FormOption[];
  reference: FormOption[];
}
