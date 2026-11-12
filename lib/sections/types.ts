/**
 * Props mirror the JSON the admin stores under `sections[key]`.
 * Everything is optional because a CMS editor can switch fields off; each
 * section renders its own fallbacks rather than assuming content exists.
 */

export type CmsItem = {
  icon?: string | null;
  image?: string | null;
  alt?: string | null;
  name?: string | null;
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
  excerpt?: string | null;
  number?: string | null;
  points?: string | null;
  buttonText?: string | null;
  buttonHref?: string | null;
  question?: string | null;
  answer?: string | null;
  rating?: number | null;
  reviewCount?: string | null;
  meta?: string | null;
  /** Fields used by specific section layouts. */
  slug?: string | null;
  logo?: string | null;
  price?: string | null;
  popular?: boolean | null;
  features?: string[];
  bullets?: string[];
  role?: string | null;
  initials?: string | null;
  socials?: { label: string; href: string }[];
  date?: string | null;
  published_at?: string | null;
  read_more_url?: string | null;
  /** snake_case aliases the admin API emits for buttons. */
  button_text?: string | null;
  button_url?: string | null;
};

/** A record selected through `*_ids[]` relationships. */
export type CmsRecord = {
  id: string | number;
  title: string;
  href: string;
  image?: string | null;
  alt?: string | null;
  icon?: string | null;
  category?: string | null;
  excerpt?: string | null;
  meta?: string | null;
  rating?: number | null;
  number?: string | null;
};

export type SectionData = {
  /** Registry key, e.g. "faq". Used by pages to pick a component. */
  key?: string;
  eyebrow?: string | null;
  smallTitle?: string | null;
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
  image?: string | null;
  alt?: string | null;
  buttonText?: string | null;
  buttonHref?: string | null;
  buttonText2?: string | null;
  buttonHref2?: string | null;
  textBefore?: string | null;
  textAfter?: string | null;
  words?: string[];
  showAllText?: string | null;
  items?: CmsItem[];
  records?: CmsRecord[];
  features?: string[];
  benefits?: string[];
  approach?: string | null;
  implementation?: string | null;
  excerpt?: string | null;
  content?: string | null;
  published_at?: string | null;
  imageLeft?: boolean;
  /** Enables the alternate layout some CMS sections expose. */
  variant?: "default" | "alt" | "compact" | "wide" | "image";
};

export type SectionComponent = (props: SectionData) => React.ReactElement | null;
