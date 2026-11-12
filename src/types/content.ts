/** Content contracts shared by the CMS adapter and presentation components. */
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
  source?: string;
}

export interface CmsApiError {
  message: string;
  status?: number;
}
