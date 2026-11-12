export interface CmsSection {
  key: string;
  title: string;
  html: string;
  enabled: boolean;
  sortOrder: number;
}

export interface HomepageContent {
  page: string;
  title: string;
  description: string;
  headerHtml: string;
  sections: CmsSection[];
}
