// Page sections. Each mirrors one file in content/pages/<slug>/sections.

export interface HeroContent {
  image: {
    src: string;
    alt: string;
  };
  heading: string;
  text: string;
  links: Array<{
    href: string;
    className: string;
    text: string;
  }>;
}


export interface BrandLogosContent {
  blocks: Array<{
    image: {
      src: string;
      alt: string;
    };
  }>;
}


export interface AboutContent {
  image: {
    src: string;
  };
  image2: {
    src: string;
    alt: string;
    width: string;
    height: string;
  };
  text: string;
  heading: string;
  heading2: string;
  texts: Array<{
    text: string;
  }>;
  items: Array<{
    image: {
      src: string;
      alt: string;
      width: string;
      height: string;
    };
    counter: {
      dataCount: string;
      text: string;
    };
    icon: {
      className: string;
    };
    text: string;
  }>;
}


export interface OfferingsContent {
  text: string;
  heading: string;
  text2: string;
  items: Array<{
    link: {
      className?: string;
      id: string;
      href: string;
      ariaControls: string;
      icon: string;
      text: string;
    };
  }>;
  image: {
    src: string;
    alt: string;
    width: string;
    height: string;
  };
  link: {
    href: string;
    text: string;
  };
  text3: string;
  texts: Array<{
    text: string;
  }>;
  items2: Array<{
    link: {
      href: string;
      ariaLabel: string;
      title: string;
      icon: string;
    };
  }>;
  link2: {
    href: string;
    text: string;
  };
  image2: {
    src: string;
    alt: string;
  };
  link3: {
    href: string;
    text: string;
  };
  text4: string;
  texts2: Array<{
    text: string;
  }>;
  link4: {
    href: string;
  };
  items3: Array<{
    link: {
      href: string;
      icon: string;
    };
  }>;
  link5: {
    href: string;
    text: string;
  };
  image3: {
    src: string;
    alt: string;
  };
  link6: {
    href: string;
    text: string;
  };
  text5: string;
  texts3: Array<{
    text: string;
  }>;
  link7: {
    href: string;
  };
  or: string;
  link8: {
    href: string;
    text: string;
  };
  image4: {
    src: string;
    alt: string;
  };
  link9: {
    href: string;
    text: string;
  };
  text6: string;
  texts4: Array<{
    text: string;
  }>;
  items4: Array<{
    link: {
      href: string;
      title: string;
      icon: string;
    };
  }>;
  link10: {
    href: string;
    text: string;
  };
  image5: {
    src: string;
    alt: string;
  };
  link11: {
    href: string;
    text: string;
  };
  text7: string;
  texts5: Array<{
    text: string;
  }>;
  link12: {
    href: string;
    text: string;
  };
}


export interface IndustriesContent {
  text: string;
  heading: string;
  text2: string;
  blocks: Array<{
    icon: string;
    subheading: string;
    text: string;
    link: {
      href: string;
      text: string;
    };
  }>;
}


export interface ValuesContent {
  text: string;
  heading: string;
  text2: string;
  items: Array<{
    icon: string;
    subheading: string;
    text: string;
  }>;
}


export interface CalloutContent {
  text: string;
  link: {
    href: string;
    text: string;
  };
  /** When set, the bar is wrapped in a <section> with these classes (e.g. "py-md-5 bg-white p-relative"). */
  wrapperClass?: string;
  /** Extra classes on the bar itself (e.g. "graybgoption"). */
  barClass?: string;
}

export interface ProcessContent {
  /** Icon key of the first step of the second row (defaults to the home page's icon). */
  icon?: string;
  text: string;
  heading: string;
  text2: string;
  processItemsList: Array<{
    dataWowDelay: string;
    icon: {
      className: string;
    };
    icon2: string;
    subheading: string;
    items: Array<{
      html: string;
    }>;
  }>;
  subheading: string;
  items: Array<{
    html: string;
  }>;
  processItemsList2: Array<{
    dataWowDelay: string;
    icon: string;
    subheading: string;
    items: Array<{
      html: string;
    }>;
  }>;
  items2: Array<{
    icon: string;
    subheading: string;
    items: Array<{
      html: string;
    }>;
  }>;
}


export interface TestimonialsContent {
  text: string;
  heading: string;
  text2: string;
  items: Array<{
    testImg: {
      href: string;
      title: string;
      dataSlide: string;
      className: string;
      image: {
        src: string;
        alt: string;
        width: string;
        height: string;
      };
    };
  }>;
  image: {
    src: string;
    alt: string;
  };
  testimonialTextSections: Array<{
    dataIndex: string;
    text: string;
    text2: string;
  }>;
}


export interface PortfolioContent {
  /** Optional "call to action" bar shown above the portfolio heading (typed text via #callouts-type). */
  callout?: { text: string; link: { href: string; text: string } };
  text: string;
  heading: string;
  text2?: string;
  items: Array<{
    heading: string;
    text: string;
    image: {
      src: string;
      alt: string;
      width?: string;
      height?: string;
    };
    heading2: string;
    text2: string;
    /** "Explore More" button. Omit for cards that show store badges (`storeLinks`) instead. */
    link?: {
      href: string;
      text: string;
    };
    /** Extra classes on the card's <figure>, e.g. "whitetext greenshadebg" (coloured card with white text). */
    figureClass?: string;
    /** Google Play / App Store badges shown in the card's hover caption. */
    storeLinks?: Array<{
      href: string;
      title: string;
      image: CmsImage;
    }>;
  }>;
}


export interface ContactCtaContent {
  /** Section background utility class, e.g. "bg-white" (defaults to "bg-light"). */
  background?: string;
  image: {
    src: string;
    alt: string;
  };
  subheading: string;
  text: string;
  headRequetBtn: {
    href: string;
    text: string;
  };
  orangeText: string;
  item: string;
  link: {
    href: string;
    title: string;
    ariaLabel: string;
  };
  link2: {
    href: string;
    title: string;
  };
  link3: {
    href: string;
    title: string;
  };
  link4: {
    href: string;
    title: string;
  };
  link5: {
    href: string;
    title: string;
  };
  link6: {
    href: string;
    title: string;
  };
  link7: {
    href: string;
    title: string;
  };
  link8: {
    href: string;
    title: string;
  };
}


export interface WhatsAppAnchorContent {
  href: string;
  title: string;
}


export interface TechnologiesContent {
  link: {
    href: string;
    title: string;
  };
  link2: {
    href: string;
    title: string;
    text: string;
    heading: string;
  };
  link3: {
    href: string;
    title: string;
  };
  link4: {
    href: string;
    title: string;
  };
  link5: {
    href: string;
    title: string;
  };
  link6: {
    href: string;
    text: string;
  };
  items: Array<{
    link: {
      id: string;
      href: string;
      ariaControls: string;
      text: string;
    };
  }>;
  blocks: Array<{
    className: string;
    id: string;
    ariaLabelledby: string;
    items: Array<{
      image: {
        src: string;
        title: string;
        alt: string;
        width: string;
        height: string;
      };
    }>;
  }>;
}


export interface BlogContent {
  text: string;
  heading: string;
  items: Array<{
    blogPostFeatureLink: {
      href: string;
      title: string;
      image: {
        src: string;
        alt: string;
        width: string;
        height: string;
      };
    };
    link: {
      href: string;
      text: string;
    };
    text: string;
    datePost: string;
    link2: {
      href: string;
      title: string;
    };
  }>;
}


export interface ScheduleCallContent {
  text: string;
  heading: string;
  blocks: Array<{
    link: {
      href: string;
      image: {
        src: string;
        alt: string;
        width: string;
        height: string;
      };
      orangeText: string;
      strong: string;
      text: string;
    };
  }>;
  items: Array<{
    link: {
      href: string;
      image: {
        src: string;
        alt: string;
        width: string;
        height: string;
      };
      topRatingImg: {
        src: string;
        alt: string;
        width: string;
      };
      image2: {
        src: string;
        alt: string;
        width: string;
        height: string;
      };
      text: string;
    };
  }>;
  link: {
    href: string;
    image: {
      src: string;
      alt: string;
      width: string;
      height: string;
    };
    image2: {
      src: string;
      alt: string;
      width: string;
      height: string;
    };
    text: string;
  };
  heading2: string;
  formGroups: Array<{
    label: {
      for: string;
      text: string;
      formControl: {
        type: string;
        name: string;
        placeholder: string;
      };
    };
  }>;
  formControl: {
    placeholder: string;
  };
  label: string;
  formControl2: {
    placeholder: string;
  };
  label2: string;
  label3: string;
  label4: string;
  label5: string;
  formControl3: {
    placeholder: string;
  };
  contactCustomeBtn: string;
}


export interface EngagementContent {
  text: string;
  heading: string;
  text2: string;
  blocks: Array<{
    image: {
      src: string;
      alt: string;
      width: string;
      height: string;
    };
    text: string;
  }>;
  headRequetBtn: {
    href: string;
    text: string;
  };
  boxShadow: {
    src: string;
    alt: string;
    width: string;
    height: string;
  };
}


export interface LocationsContent {
  text: string;
  heading: string;
  boxShadow: {
    src: string;
    alt: string;
    width: string;
    height: string;
  };
  subheading: string;
  text2: string;
  items: Array<{
    icon: string;
    link: {
      href: string;
      text: string;
    };
  }>;
  blocks: Array<{
    className: string;
    boxShadow: {
      src: string;
      alt: string;
      width: string;
      height: string;
    };
    subheading: string;
    text: string;
    items: Array<{
      icon: string;
      link: {
        href: string;
        text: string;
      };
    }>;
  }>;
}


// ---------------------------------------------------------------------------------------------
// Category (service) page sections. Each mirrors one file in content/pages/<slug>/sections.
// ---------------------------------------------------------------------------------------------

export interface CmsImage {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

export interface CmsLink {
  href: string;
  text: string;
  className?: string;
}

export interface FormFieldContent {
  /** HTML input type: "text", "email", "tel" or "textarea". */
  type: string;
  name: string;
  label?: string;
  placeholder: string;
  required: boolean;
  minLength?: number;
  maxLength?: number;
  rows?: number;
  /** "phone" renders the field inside the phone-number wrapper. */
  variant?: string;
}

export interface CategoryHeroContent {
  /** Background photo. Omit for a plain dark banner. */
  image?: CmsImage;
  heading: string;
  /** HTML version of the heading (e.g. with a <span>); used instead of `heading` when present. */
  headingHtml?: string;
  /** Optional second heading (h2) between the title and the intro text. */
  subheading?: string;
  /** Rich text (may contain <br/>). */
  text: string;
  links: Array<{
    href: string;
    className: string;
    text: string;
    /** Classes of the <li> around the button (plain layout). */
    itemClass?: string;
    /** Small word shown before the button, e.g. "OR". */
    separator?: string;
  }>;
  /** Extra classes of the banner section, e.g. "height668" (tall banner). */
  sectionClass?: string;
  /** Replaces the default column classes of the text column. */
  textColumnClass?: string;
  /** Extra classes of the text column, e.g. "text-center". */
  textClass?: string;
  /** Extra classes of the heading, e.g. "text-uppercase f-40". */
  headingClass?: string;
  /** Phone / product picture at the bottom right of the banner (solution pages). */
  sideImage?: CmsImage;
  /** Second picture shown inside the main one (scrolling phone screen). */
  sideImageInner?: CmsImage;
  /** Wraps the text column's content in a <div> with these classes (e.g. "pr-20"). */
  textWrapperClass?: string;
  /** Plain layout: heading, text and a button list sit directly in the container (no row/column). */
  plain?: boolean;
  /** Classes of the picture wrapper (default "bannerfixedimagewidth landscape"). */
  sideImageClass?: string;
  /** Omit for a banner without an enquiry form (the text then spans the full width). */
  form?: {
    /** Heading above the fields (HTML allowed, e.g. "Get <u>FREE</u> SEO Audit"). */
    title?: string;
    /** Prefix of the reCAPTCHA element ids; default: `id` without its "-banner_form" ending. */
    idPrefix?: string;
    id: string;
    fields: FormFieldContent[];
    submitText: string;
    errorId: string;
    successId: string;
  };
  breadcrumbs: Array<{ text: string; href?: string }>;
}

export interface IntroContentContent {
  /** Small tagline between the heading and the first paragraph. */
  subheading?: string;
  /** Picture column first, text second (no order-lg-1). */
  imageFirst?: boolean;
  textColumnClass?: string;
  imageColumnClass?: string;
  heading: string;
  paragraphs: Array<{ html: string }>;
  link: CmsLink;
  image: CmsImage;
  /** Classes of the picture (default "rounded10 box-shadow"; use "" for a transparent illustration). */
  imageClass?: string;
  /** Classes of the <section> (default "service-main-content padding-60 bg-white"). */
  sectionClass?: string;
  /** Classes of the row (default "row align-items-center"). */
  rowClass?: string;
  /** Classes of the heading (default "h4 mb-3"). */
  headingClass?: string;
  /** When set, heading, text and button are wrapped in a <div> with this class. */
  contentClass?: string;
  /** When set, the picture is wrapped in a <div> with this class. */
  imageWrapClass?: string;
}

export interface ServiceOfferingsContent {
  text: string;
  heading: string;
  items: Array<{
    /** Anchor id; the sticky tab bar scrolls to it. */
    id: string;
    navIcon: string;
    navTitle: string;
    number: string;
    heading: string;
    /** Rich text shown above the bullet list. */
    bodyHtml: string;
    bullets: Array<{ html: string }>;
    link: CmsLink;
    image: CmsImage;
    /** Put the text column on the right on desktop. */
    reverse: boolean;
  }>;
}

export interface FeatureListContent {
  text: string;
  heading: string;
  text2: string;
  subheading: string;
  items: Array<{ icon: string; html: string }>;
  link: CmsLink;
  image: CmsImage;
}

export interface AdvantageGridContent {
  /** Classes of the <section> (default "bg-light padding-6030 web-advantages-section"). */
  sectionClass?: string;
  /** Equal-height helper class of the card grid (default "m-height-240"). */
  heightClass?: string;
  text: string;
  heading: string;
  text2: string;
  items: Array<{ icon: string; title: string; text: string }>;
}

/** Grid of icon cards (icon in a circle, title, text) used on the web-technology service pages. */
export interface IconCardsContent {
  text: string;
  heading: string;
  text2: string;
  /** Section background: "light" (default) or "white". */
  background?: string;
  /** Equal-height helper class of the section (default "m-height-380"). */
  heightClass?: string;
  /** Classes of each card column (default "col-lg-3 col-md-4 col-sm-6 col-12 mb-30"). */
  columnClass?: string;
  items: Array<{ icon: string; title: string; text: string }>;
}

/** Intro + grid of plain icon cards ("game-service-offer-box"), used on ERP / CRM / CMS pages. */
export interface OfferBoxesContent {
  /** Classes of the <section> (default "padding-6030 bg-light game-service-offer-main"). */
  sectionClass?: string;
  text: string;
  heading: string;
  text2?: string;
  items: Array<{ icon: string; title: string; text: string }>;
}

/** Intro + grid of module cards ("game-what-we-offer-box": icon, h4, text). */
export interface ModuleBoxesContent {
  /** Classes of the <section> (default "padding-6030 bg-white game-what-we-offer-main"). */
  sectionClass?: string;
  /** Classes of each card column (default "col-lg-4 col-md-6 col-sm-12 col-12 mb-30"). */
  columnClass?: string;
  text: string;
  heading: string;
  text2?: string;
  items: Array<{ icon: string; title: string; text: string }>;
}

/** Heading + one row of technology logos. */
export interface TechIconsContent {
  /** Classes of the <section>, e.g. "padding-60 bg-white ins-msg-how-build-main". */
  sectionClass: string;
  text: string;
  heading: string;
  text2?: string;
  /** Id of the tab pane. */
  paneId: string;
  /** Extra justify class of the logo list (default "justify-content-center"). */
  listClass?: string;
  icons: Array<{ image: CmsImage }>;
}

export interface UiuxServicesContent {
  text: string;
  heading: string;
  items: Array<{ image: CmsImage; icon: string; title: string; text: string }>;
}

export interface UiuxMobileDesignContent {
  text: string;
  heading: string;
  text2: string;
  items: Array<{ icon: string; title: string; text: string }>;
  images: { main: CmsImage; one: CmsImage; two: CmsImage; three: CmsImage; four: CmsImage; five: CmsImage };
}

export interface UiuxWebDesignContent {
  text: string;
  heading: string;
  text2: string;
  items: Array<{ icon: string; title: string; text: string }>;
  images: { main: CmsImage; laptop: CmsImage; desktop: CmsImage; ipad: CmsImage; iphone: CmsImage };
}

export interface UiuxProcessContent {
  text: string;
  heading: string;
  items: Array<{ number: string; title: string; text: string; image: CmsImage; imageDelay?: string }>;
}

export interface UiuxToolsContent {
  text: string;
  heading: string;
  items: Array<{ image: CmsImage }>;
}

export interface FrameworkTabsContent {
  /** Classes of the <section> (default "padding-60 bg-light web-app-sev-lang"). */
  sectionClass?: string;
  text: string;
  heading: string;
  text2: string;
  items: Array<{ title: string; image: CmsImage; text: string; link: CmsLink }>;
}

export interface WhyChooseContent {
  /** Classes of the card row (default "row align-items-center"). */
  rowClass?: string;
  /** Classes of the <section> (default "padding-60 bg-light web-why-choose-us-main"). */
  sectionClass?: string;
  /** Classes of each card column (default "col-lg-6 col-md-6 col-sm-12 col-12"). */
  columnClass?: string;
  /** Equal-height helper class of the card grid (default "m-height-170"); an empty string renders no wrapper. */
  heightClass?: string;
  text: string;
  heading: string;
  paragraphs: Array<{ html: string }>;
  items: Array<{ icon: string; title: string; text: string }>;
}

export interface FaqContent {
  /** "accordion" (default, Bootstrap cards) or "list" (plus / minus rows used on solution pages). */
  variant?: 'accordion' | 'list';
  /** Prefix for the answer ids of the "list" variant, so several lists can share a page. */
  idPrefix?: string;
  /** Icon keys of the open / closed marker of the "list" variant. */
  plusIcon?: string;
  minusIcon?: string;
  text: string;
  heading: string;
  text2: string;
  items: Array<{ question: string; answer: string }>;
}

export interface FeaturedInContent {
  /** `strip` (default): one row of logos on white; `grid`: boxed logos, four per row, on a light section. */
  variant?: 'strip' | 'grid';
  text: string;
  heading: string;
  text2?: string;
  /** Grid variant only: callout bar pinned to the top of the section. */
  callout?: CalloutBarContent;
  /** Grid variant only: white spacer above the section (room for the callout bar). */
  spacer?: boolean;
  logos: Array<{ image: CmsImage }>;
}

// ---------------------------------------------------------------------------------------------
// Service page sections (e.g. content/pages/service/mvp-development).
// ---------------------------------------------------------------------------------------------

export interface OfferCardsContent {
  text: string;
  heading: string;
  text2: string;
  items: Array<{ image: CmsImage; title: string; text: string }>;
}

export interface ImageCardsContent {
  text: string;
  heading: string;
  text2: string;
  items: Array<{ image: CmsImage; title: string; text: string; link: CmsLink }>;
}

export interface CompareBenefitsContent {
  text: string;
  heading: string;
  text2: string;
  /** Before / after pictures of the draggable comparison slider (same size). */
  compare: { before: CmsImage; after: CmsImage };
  items: Array<{ icon: string; title: string; text: string }>;
}

export interface SprintProcessContent {
  text: string;
  heading: string;
  text2: string;
  items: Array<{
    number: string;
    icon: string;
    title: string;
    text: string;
    dataWowDelay: string;
    /** Grid ordering classes of the column, e.g. "order-lg-3 order-md-5 order-5". */
    orderClass: string;
  }>;
}

export interface TechStackTabsContent {
  /** Classes of the <section> (default "padding-60 bg-light ins-msg-how-build-main"). */
  sectionClass?: string;
  text: string;
  heading: string;
  text2?: string;
  /** Classes of the title block (default "title"). */
  titleClass?: string;
  /** Prefix for the tab / pane ids so several tab groups can share a page. */
  idPrefix: string;
  tabs: Array<{ id: string; title: string; icons: Array<{ image: CmsImage }> }>;
}

export interface WhyChooseImageContent {
  text: string;
  heading: string;
  text2: string;
  /** Picture beside the card. Omit to centre the card on its own. */
  image?: CmsImage;
  items: Array<{ icon: string; title: string; text: string }>;
}

// ---------------------------------------------------------------------------------------------
// Solution page sections (e.g. content/pages/solutions/taxi-app-development).
// ---------------------------------------------------------------------------------------------

export interface FeatureTabsContent {
  /** "fitness": callout bar + tab strip and cards in their own panels, plainer tab icons and cards. */
  variant?: 'fitness';
  /** Callout bar rendered at the top of the section. */
  bar?: CalloutBarContent;
  /** Classes of the <section> (default "padding-60 bg-light car-wash-feature-main"). */
  sectionClass?: string;
  text: string;
  heading: string;
  text2?: string;
  /** Prefix for the tab / pane ids so the tabs stay unique on the page. */
  idPrefix: string;
  showAllText: string;
  showLessText: string;
  tabs: Array<{
    /** Short id, e.g. "user"; becomes `<idPrefix>-<id>`. */
    id: string;
    title: string;
    /** Icon in the tab button. */
    icon: string;
    /** Icon beside the title above the cards (falls back to `icon`). */
    headIcon?: string;
    items: Array<{
      icon: string;
      title: string;
      text: string;
      /** Hidden until the "Show All" button is pressed. */
      hidden?: boolean;
    }>;
  }>;
}

export interface IdealBusinessContent {
  text: string;
  heading: string;
  items: Array<{ icon: string; title: string; text: string }>;
}

export interface SolutionCtaContent {
  icon: string;
  topText: string;
  heading: string;
  bottomText: string;
  link: CmsLink;
}

export interface OtherSolutionsContent {
  /** Classes of the <section> (default "padding-6030 bg-light other-demand-app-main"). */
  sectionClass?: string;
  text: string;
  heading: string;
  items: Array<{ icon: string; title: string; href: string; /** Classes of the column (default "col-lg-3 col-md-3 col-sm-6 col-12 mb-30"). */ columnClass?: string }>;
}

export interface WhyInvestContent {
  /** Classes of the <section> (default "padding-6030 bg-white why-you-invest-main invest-erp-main"). */
  sectionClass?: string;
  /** Equal-height wrapper class (default "m-height-130"); an empty string renders no wrapper. */
  heightClass?: string;
  /** Classes of the container (default "container mt-md-5"). */
  containerClass?: string;
  /** Classes of each card column (default "col-lg-4 col-md-6 col-sm-6 col-12 mb-30"). */
  columnClass?: string;
  /** Optional last cell: a title and button instead of a card (e.g. "Our Clients Love Us" / "Our Reviews"). */
  ctaBox?: { title: string; link: CmsLink; /** Classes of the cell (default: the card column class + "d-flex align-items-center"). */ columnClass?: string };
  text: string;
  heading: string;
  text2: string;
  items: Array<{ icon: string; title: string; text: string }>;
}

// ---------------------------------------------------------------------------------------------
// Portfolio page (content/pages/portfolio).
// ---------------------------------------------------------------------------------------------

export interface PortfolioShowcaseItem {
  /** Hash id of the row (data-hash), e.g. "FormAssist". */
  id: string;
  /** Filter categories + colour class, e.g. "mobapp gameapp cluedbg". */
  classes: string;
  /** Row background picture. */
  background?: string;
  /** Put the text on the right on large screens. */
  reverse?: boolean;
  logo: CmsImage & { className?: string };
  logoText?: { name: string; tagline: string; nameClass?: string };
  /** Optional heading (used when the logo has no name text). */
  title?: string;
  tags: string[];
  paragraphs: string[];
  links?: Array<{
    href: string;
    /** Text button (with className) ... */
    text?: string;
    className?: string;
    /** ... or a store badge (with image and title). */
    title?: string;
    image?: CmsImage;
  }>;
  thumb: {
    /** single = one picture; default / opt2 / landscape = device stack with three side pictures. */
    layout: 'single' | 'default' | 'opt2' | 'landscape';
    /** [main, one, two, three] (single uses only the first). */
    images: string[];
  };
}

export interface PortfolioShowcaseContent {
  filters: Array<{ label: string; /** CSS selector, "*" for all */ filter: string; icon: string }>;
  items: PortfolioShowcaseItem[];
}

// ---------------------------------------------------------------------------------------------
// Blog listing page (content/pages/blog).
// ---------------------------------------------------------------------------------------------

export interface BlogListItem {
  title: string;
  /** Link of the article (image, title and button). */
  href: string;
  image: CmsImage;
  author: { name: string; href: string; image: CmsImage };
  /** Shown as written, e.g. "June 19, 2023". */
  date: string;
  category: { text: string; href: string };
  /** Plain-text teaser. */
  excerpt: string;
  buttonText: string;
}

export interface BlogListContent {
  /** Articles shown at first; the rest appear when "Load More" is pressed. */
  pageSize: number;
  loadMoreText: string;
  /** Shown when there are no articles (e.g. a category without posts). */
  emptyText?: string;
  /** Heading of the empty-state card (omitted = no heading). */
  emptyTitle?: string;
  /** Button under the empty-state text, e.g. back to all articles (omitted = no button). */
  emptyButton?: { text: string; href: string };
  /** Label above the links to the other categories in the empty-state card (omitted = no label). */
  emptyCategoriesTitle?: string;
  items: BlogListItem[];
  sidebar: {
    social: { title: string; items: Array<{ href: string; /** Font Awesome classes, e.g. "fab fa-twitter" */ iconClass: string }> };
    categories: { title: string; items: Array<{ text: string; href: string; active?: boolean }> };
    tweets: { title: string; text: string; href: string };
    facebook: { title: string };
    cta: { text: string; buttonText: string; href: string };
  };
}

// ---------------------------------------------------------------------------------------------
// Contact page (content/pages/contact).
// ---------------------------------------------------------------------------------------------

export type ContactFormField =
  | { kind: 'input'; type: string; name: string; placeholder: string; required: boolean; colClass: string; minLength?: number; maxLength?: number; /** "phone" = phone-number field */ variant?: string }
  /** Options come from the shared lists in content/settings/forms.json (`list`). */
  | { kind: 'select'; name: string; list: 'budget' | 'region' | 'service' | 'reference'; required: boolean; colClass: string }
  | { kind: 'file'; name: string; placeholder: string; colClass: string }
  | { kind: 'textarea'; name: string; placeholder: string; rows: number; colClass: string };

export interface ContactFormContent {
  form: { id: string; fields: ContactFormField[]; submitText: string };
  /** Card on the right: photo, headings, text and a button that opens the meeting popup. */
  meeting: {
    image: CmsImage;
    heading: string;
    subheading: string;
    paragraphs: string[];
    button: { text: string; href: string };
  };
}

export interface ContactInfoContent {
  items: Array<{ icon: string; tool: string; link: { href: string; text: string; title?: string } }>;
  follow: { heading: string; items: Array<{ href: string; /** Font Awesome classes */ iconClass: string; label: string }> };
}

export interface ContactMapContent {
  tabs: Array<{ id: string; title: string; image: CmsImage; /** Google Maps embed URL */ mapUrl: string }>;
}

// ---------------------------------------------------------------------------------------------
// Who we are page (content/pages/who-we-are).
// ---------------------------------------------------------------------------------------------

export interface StatsCountersContent {
  items: Array<{
    image: CmsImage;
    /** Number the counter animates to. */
    count: string;
    /** Font Awesome classes of the sign after the number, e.g. "fas fa-plus". */
    iconClass: string;
    /** Label (may contain <br/>). */
    text: string;
  }>;
}

export interface LeadershipContent {
  text: string;
  heading: string;
  paragraph: string;
  people: Array<{
    name: string;
    image: CmsImage;
    title: string;
    paragraphs: string[];
    social: Array<{ href: string; iconClass: string }>;
    /** Extra classes of the row and the two columns (these control left / right placement). */
    rowClass?: string;
    imageColClass: string;
    contentColClass: string;
  }>;
}

export interface MissionVisionContent {
  text: string;
  heading: string;
  paragraph: string;
  items: Array<{ icon: string; title: string; text: string }>;
}

export interface CoreValuesContent {
  /** Classes of the <section> (default "padding-6030 our-core-value-section bg-white"). */
  sectionClass?: string;
  /** Classes of each card column (default "col-lg-3 col-md-6 col-sm-6 col-12 mb-30"). */
  columnClass?: string;
  text: string;
  heading: string;
  paragraph: string;
  items: Array<{ icon: string; title: string; text: string }>;
}

export interface HistoryTimelineContent {
  text: string;
  heading: string;
  paragraph: string;
  image: CmsImage;
  /** One slide per year; the year strip below the slider is built from the same list. */
  items: Array<{ year: string; title: string; icon: string; text: string }>;
}

// ---------------------------------------------------------------------------------------------
// How we work page (content/pages/how-we-work).
// ---------------------------------------------------------------------------------------------

export interface ProcessStepsContent {
  text: string;
  heading: string;
  steps: Array<{
    /** Anchor id of the step (also the target of its navigator link), e.g. "Discover". */
    id: string;
    /** Step number shown on the card, e.g. "01". */
    number: string;
    title: string;
    /** Icon of the step in the sticky navigator. */
    icon: string;
    /** Short name in the navigator (defaults to `title`). */
    navLabel?: string;
    text: string;
    image: CmsImage;
    /** Text on the right, picture on the left (large screens). */
    reverse?: boolean;
  }>;
}

// ---------------------------------------------------------------------------------------------
// Client review page (content/pages/client-review).
// ---------------------------------------------------------------------------------------------

export interface ClutchReviewsContent {
  text: string;
  heading: string;
  paragraph: string;
  /** Clutch.co review widget (loaded by public/scripts/client-review-page.js). */
  widget: {
    companyId: string;
    url: string;
    widgetType: string;
    height: string;
    expandIframe: boolean;
    snippets: boolean;
  };
}

export interface ClientReviewsContent {
  text: string;
  heading: string;
  paragraph: string;
  items: Array<{
    image: CmsImage;
    name: string;
    country: string;
    ratedByText: string;
    /** Number of stars (1-5). */
    rating: number;
    /** Review text (HTML allowed). */
    text: string;
  }>;
}

// ---------------------------------------------------------------------------------------------
// Technologies page (content/pages/technologies).
// ---------------------------------------------------------------------------------------------

export interface TechnologyGroupsContent {
  groups: Array<{
    /** Anchor id; the sticky tab bar scrolls to it. */
    id: string;
    navIcon: string;
    navTitle: string;
    heading: string;
    text: string;
    logos: Array<{ src: string; alt: string }>;
  }>;
}

// ---------------------------------------------------------------------------------------------
// Project estimate page (content/pages/app-development-cost-calculator).
// The `steps` use the same shape as the admin panel's estimate-steps export.
// ---------------------------------------------------------------------------------------------

export interface EstimateOption {
  label: string;
  /** Icon image path (an SVG is inlined by the page script so CSS can recolour it). */
  icon: string;
  /** key of the step shown next; empty falls back to the step's next_step, then to the final form. */
  next_step: string | null;
  sort_order: number;
  active: boolean;
}

export interface EstimateStep {
  key: string;
  question: string;
  help_text: string;
  /** single_choice: pick one and continue; multiple_choice: tick several, then Next; text: free text, then Next. */
  answer_type: 'single_choice' | 'multiple_choice' | 'text';
  next_step: string | null;
  sort_order: number;
  answer_required: boolean;
  /** The step the wizard starts with (shown as big icon tiles). */
  first_step: boolean;
  active: boolean;
  /** Placeholder of the text answer. */
  placeholder: string;
  options: EstimateOption[];
}

export interface EstimateWizardContent {
  steps: EstimateStep[];
  form: {
    title: string;
    text: string;
    /** URL the finished form is POSTed to (expects JSON {status, message}). */
    action: string;
    submitText: string;
    ndaText: string;
    prevText: string;
    nextText: string;
    selectAtLeastOneText: string;
    placeholders: {
      name: string;
      email: string;
      mobile: string;
      company: string;
      attachment: string;
      androidLink: string;
      iosLink: string;
      additional: string;
    };
    /** First option of the region select (replaces the shared list's "Your Region"). */
    regionPlaceholder?: string;
    /** "Thank you" modal rendered after the wizard. */
    successModal?: { title: string; subtitle: string; text: string; buttonText: string; homeHref: string };
    successTitle: string;
    errorTitle: string;
    errorText: string;
    networkErrorText: string;
  };
}

// ---------------------------------------------------------------------------------------------
// Single blog article (template: content/pages/blog/post-template.json + content/pages/blog/posts/<slug>.json).
// ---------------------------------------------------------------------------------------------

/** One block of an article body. `html` is for rich text coming from the admin panel. */
export type BlogPostBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level?: 2 | 3 | 4; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'image'; image: CmsImage; caption?: string }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'html'; html: string };

/** A card in "Related articles". */
export interface BlogPostRelated {
  title: string;
  href: string;
  image: CmsImage;
  date: string;
  category: { text: string; href: string };
}

export interface BlogPostContent {
  title: string;
  image: CmsImage;
  author: { name: string; href: string; image: CmsImage };
  date: string;
  category: { text: string; href: string };
  /** e.g. "8 min read". */
  readTime?: string;
  body: BlogPostBlock[];
  tags?: Array<{ text: string; href?: string }>;
  /** Labels and links that are the same for every article (from the template). */
  labels: { by: string; tagsTitle: string; relatedTitle: string; backText: string; backHref: string };
  related: BlogPostRelated[];
  sidebar: Pick<BlogListContent['sidebar'], 'social' | 'categories' | 'cta'>;
}

/** Data of one article, stored in content/pages/blog/posts/<slug>.json. The page slug is "blog/<slug>". */
export interface BlogPostData {
  slug: string;
  seo?: { title?: string; description?: string };
  title: string;
  image: CmsImage;
  author: { name: string; href: string; image: CmsImage };
  date: string;
  category: { text: string; href: string };
  readTime?: string;
  body: BlogPostBlock[];
  tags?: Array<{ text: string; href?: string }>;
}

/** Shared settings of every article page (content/pages/blog/post-template.json). */
export interface BlogPostTemplate {
  heroImage: CmsImage;
  heroSectionClass?: string;
  breadcrumbs: { home: string; blog: string };
  labels: BlogPostContent['labels'];
  relatedCount: number;
}

/** Shared settings of every blog category page (content/pages/blog/category-template.json). `{category}` is replaced by the category name. */
export interface BlogCategoryTemplate {
  heroImage: CmsImage;
  heroSectionClass?: string;
  headingTemplate: string;
  textTemplate: string;
  /** Optional per-category intro text, keyed by the category slug; used instead of `textTemplate`. */
  descriptions?: Record<string, string>;
  breadcrumbs: { home: string; blog: string };
  seo: { titleTemplate: string; descriptionTemplate: string };
  pageSize: number;
  loadMoreText: string;
  buttonText: string;
  emptyText: string;
  emptyTitle?: string;
  emptyButton?: { text: string; href: string };
  emptyCategoriesTitle?: string;
}

// ---------------------------------------------------------------------------------------------
// Legal / policy pages (content/pages/privacy-policy). Reusable for terms, cookie policy, etc.
// ---------------------------------------------------------------------------------------------

export interface PolicyContentContent {
  /** e.g. { label: "Last updated", date: "November 16, 2026" }. */
  lastUpdated?: { label: string; date: string };
  /** Opening text before the first section. */
  intro?: BlogPostBlock[];
  /** Heading of the sticky contents list; omit to hide the list. */
  contentsTitle?: string;
  sections: Array<{
    /** Anchor of the section (used by the contents list), e.g. "cookies". */
    id: string;
    heading: string;
    body: BlogPostBlock[];
  }>;
  /** Card shown at the end of the document. */
  contact?: { heading: string; text: string; email: string; button?: { text: string; href: string } };
}


// ---------------------------------------------------------------------------------------------
// Mobile-app service page extras (industry tab slider, platform icons).
// ---------------------------------------------------------------------------------------------

export interface IndustryTabsContent {
  /** Render icons as bare <svg> (no "app-svg-icon" wrapper div). */
  bareIcons?: boolean;
  /** Classes of the heading <section> (default "padding-60 bg-light p-relative pb-0"). */
  sectionClass?: string;
  /** Small label above the heading. The title block is left out when `heading` is empty. */
  text: string;
  heading: string;
  /** Short paragraph under the heading. */
  text2?: string;
  /** Callout bar shown at the top of the title block (e.g. "Do you have a VISION? ..."). */
  callout?: CalloutBarContent;
  items: Array<{
    image: CmsImage;
    title: string;
    paragraphs: string[];
    /** Icon: key of the icon registry (e.g. "svg-1a2b3c") or inline SVG markup. */
    icon: string;
    /** Icon and label shown in the tab strip under the slider (key or inline SVG, as above). */
    navIcon: string;
    navLabel: string;
  }>;
}

export interface AppPlatformsContent {
  text: string;
  heading: string;
  text2: string;
  /** `icon`: key of the icon registry (e.g. "svg-1a2b3c") or inline SVG markup. */
  items: Array<{ icon: string; label: string }>;
}

export interface AppWhyChooseContent {
  /** Classes of the row (default "row"). */
  rowClass?: string;
  /** Classes of the <section> (default "padding-60 bg-white"). */
  sectionClass?: string;
  /** Callout bar shown at the top of the section; use with a "p-relative" section class. */
  callout?: CalloutBarContent;
  text: string;
  heading: string;
  text2: string;
  /** `icon`: key of the icon registry (e.g. "svg-1a2b3c") or inline SVG markup. */
  items: Array<{ icon: string; title: string; text: string }>;
}

/** The white "Do you have a VISION? We have a TEAM to get you there." bar (the text may hold the typed-word <span>). */
export interface CalloutBarContent {
  text: string;
  link: { href: string; text: string };
  /** Extra classes on the bar itself (default "callouts-separate-2": pinned to the top of the section). */
  barClass?: string;
}

// ---------------------------------------------------------------------------------------------
// Several service blocks on one page (content/pages/mobile-application-development).
// ---------------------------------------------------------------------------------------------

/** Row of "jump to" links at the top of a page that stacks several service blocks. */
export interface AnchorNavContent {
  items: Array<{ id: string; label: string }>;
}

/** Invisible target of an AnchorNav link: put it in front of the first section of a block. */
export interface SectionAnchorContent {
  id: string;
}

/** Heading + paragraphs + button beside a slider (pictures on top, round icon tabs below). */
export interface IntroSliderContent {
  /** Classes of the <section> (default "about service-main-content"). */
  sectionClass?: string;
  heading: string;
  paragraphs: Array<{ html: string }>;
  link: CmsLink;
  images: CmsImage[];
  /** Icon keys of the round tabs under the pictures (key of the icon registry). */
  icons: string[];
}

/** Grid of service cards: round icon on the card's top edge, linked title, text and an "Explore More" button. */
export interface OfferGridContent {
  /** Classes of the <section> (default "padding-60 bg-light game-service-offer-main"). */
  sectionClass?: string;
  text: string;
  heading: string;
  text2: string;
  items: Array<{ icon: string; title: string; text: string; link: CmsLink }>;
}

// ---------------------------------------------------------------------------------------------
// Game service pages (content/pages/service/ios-game-development).
// ---------------------------------------------------------------------------------------------

/** "Why choose us": a picture beside a stack of four icon + title + text rows. */
export interface GameWhyUsContent {
  text: string;
  heading: string;
  /** HTML version of the heading (e.g. with a <br>); used instead of `heading` when present. */
  headingHtml?: string;
  text2: string;
  image: CmsImage;
  /** `icon`: key of the icon registry (e.g. "svg-1a2b3c") or inline SVG markup. */
  items: Array<{ icon: string; title: string; text: string }>;
}

/** "Types of games we develop": a wrapping grid of round icons with a label (six per row on desktop). */
export interface GameExpertiseContent {
  text: string;
  heading: string;
  text2: string;
  /** `icon`: key of the icon registry (e.g. "svg-1a2b3c") or inline SVG markup. */
  items: Array<{ icon: string; label: string }>;
}

/** Case-study block with two app pictures bleeding in from the right (solution pages). */
export interface SimilarAppContent {
  /** Classes of an empty spacer <div> rendered right after the section. */
  spacerAfter?: string;
  /** Full-bleed background picture; switches to the "fitness" layout (empty left column, text on the right). */
  backgroundImage?: CmsImage;
  sectionClass: string;
  heading: string;
  paragraphs: Array<{ html: string }>;
  link: CmsLink;
  images: { first: CmsImage; second: CmsImage; /** Shown on small screens instead of the pair. */ mobile: CmsImage };
}

/** Slider of case studies (app name, text, feature ticks, two overlapping phone screens on a coloured panel). */
export interface SimilarAppSliderContent {
  /** Classes of each slide's wrapper (default "padding-00-60 bg-white"). */
  mainClass?: string;
  /** Tick picture shown before each feature. */
  checkIcon: CmsImage;
  items: Array<{
    /** CSS class that sets the colour of the left panel (e.g. "idtrackbg"). */
    backgroundClass: string;
    logo: CmsImage;
    name: string;
    subtitle: string;
    paragraphs: Array<{ html: string }>;
    features: string[];
    images: { first: CmsImage; second: CmsImage; /** Shown on small screens instead of the pair. */ mobile: CmsImage };
  }>;
}

/** "How it works" snake of step boxes under a callout bar (solution pages). */
export interface WorkflowProcessContent {
  sectionClass: string;
  bar: { text: string; link: { href: string; text: string } };
  /** Extra classes of the callout bar (e.g. "callouts-separate-2"). */
  barClass: string;
  containerClass: string;
  text: string;
  heading: string;
  arrowImage?: CmsImage;
  items: Array<{
    /** Bootstrap column + order classes of the step. */
    columnClass: string;
    delay?: string;
    duration?: string;
    icon: string;
    text: string;
    /** e.g. "bt arrow", "down arrow", "bb rotate arrow". */
    arrowClass: string;
    /** Leave the arrow box empty. */
    noArrowImage?: boolean;
  }>;
}

/** Grid of small feature tiles (industry solution pages). */
export interface KeyFeaturesContent {
  /** Classes of the <section> (default "padding-60 key-features-main bg-light"). */
  sectionClass?: string;
  text: string;
  heading: string;
  text2?: string;
  items: Array<{ icon: string; title: string; /** Hidden until "Show All" is pressed. */ hidden?: boolean }>;
  /** "Show All" button for the hidden tiles. */
  showAll?: { text: string; lessText: string };
  /** Classes of an empty spacer <div> rendered right after the section. */
  spacerAfter?: string;
}

/** Two-column picture + text-panel cards (industry solution pages). */
export interface SolutionOffersContent {
  /** Classes of the card row (default "row justify-content-center"). */
  rowClass?: string;
  /** Classes of the <section> (default "padding-6030 bg-white solution-we-offer-main invest-erp-main"). */
  sectionClass?: string;
  text: string;
  heading: string;
  text2?: string;
  items: Array<{ image: CmsImage; title: string; text: string }>;
}

/** Big picture with audience icons overlaid (health & fitness page). */
export interface FitnessAudienceContent {
  /** Classes of the <section> (default "padding-60 bg-white fitness-app-main"). */
  sectionClass?: string;
  text: string;
  heading: string;
  text2?: string;
  image: CmsImage;
  items: Array<{ icon: string; title: string }>;
}

/** Messaging-app feature picker: phone picture + clickable feature list (chat solution page). */
export interface MessagingFeaturesContent {
  /** Classes of the <section> (default "padding-60 bg-light ins-msg-solution-main"). */
  sectionClass?: string;
  text: string;
  heading: string;
  text2?: string;
  items: Array<{ title: string; icon: string; image: CmsImage; text: string; /** Further paragraphs shown under `text`. */ moreText?: string[] }>;
}

/** Admin-panel block: text beside a big screenshot (chat solution page). */
export interface MessagingPanelsContent {
  /** Classes of the <section> (default "padding-60 bg-white ins-msg-app-panels-main"). */
  sectionClass?: string;
  text: string;
  heading: string;
  text2?: string;
  panelTitle: string;
  paragraphs: Array<{ html: string }>;
  image: CmsImage;
}

/** Cards of app kinds with a strip of platform logos (social media solution page). */
export interface SocialTypesContent {
  /** Classes of the <section> (default "padding-6030 bg-white solution-we-offer-main invest-erp-main"). */
  sectionClass?: string;
  text: string;
  heading: string;
  text2?: string;
  items: Array<{ title: string; text: string; logos: CmsImage[] }>;
}

/** Feature tabs with icon tiles and per-pane "Show All" (fantasy sports page). */
export interface KeyFeatureTabsContent {
  /** Classes of the <section> (default "padding-60 bg-light car-wash-feature-main key-feature-opt2"). */
  sectionClass?: string;
  text: string;
  heading: string;
  text2?: string;
  idPrefix: string;
  showAllText: string;
  showLessText: string;
  tabs: Array<{
    id: string;
    title: string;
    /** Extra class of the tile row, e.g. "m-height-300". */
    heightClass?: string;
    items: Array<{ icon: string; title: string; hidden?: boolean }>;
  }>;
}

/** Heading-only block introducing a case study. */
export interface CaseStudyContent {
  /** Classes of the <section> (default "padding-6030 bg-white"). */
  sectionClass?: string;
  text: string;
  heading: string;
  text2?: string;
}

/** Advantage cards of the chatbot page. */
export interface ChatbotAdvantagesContent {
  /** Classes of the <section> (default "padding-6030 bg-light chatbot-adv"). */
  sectionClass?: string;
  text: string;
  heading: string;
  text2?: string;
  items: Array<{ icon: string; title: string; text: string }>;
}

/** Platform boxes of the chatbot page. */
export interface ChatbotPlatformsContent {
  /** Classes of the <section> (default "padding-60 bg-white"). */
  sectionClass?: string;
  text: string;
  heading: string;
  text2?: string;
  items: Array<{ image: CmsImage; text: string; /** Default "col-lg-6 col-md-6 col-12 mb-30". */ columnClass?: string }>;
}
