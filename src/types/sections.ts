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
    link: {
      href: string;
      text: string;
    };
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
  image: CmsImage;
  heading: string;
  /** Rich text (may contain <br/>). */
  text: string;
  links: Array<{ href: string; className: string; text: string }>;
  /** Omit for a banner without an enquiry form (the text then spans the full width). */
  form?: {
    id: string;
    fields: FormFieldContent[];
    submitText: string;
    errorId: string;
    successId: string;
  };
  breadcrumbs: Array<{ text: string; href?: string }>;
}

export interface IntroContentContent {
  heading: string;
  paragraphs: Array<{ html: string }>;
  link: CmsLink;
  image: CmsImage;
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
  text: string;
  heading: string;
  text2: string;
  items: Array<{ icon: string; title: string; text: string }>;
}

export interface FrameworkTabsContent {
  text: string;
  heading: string;
  text2: string;
  items: Array<{ title: string; image: CmsImage; text: string; link: CmsLink }>;
}

export interface WhyChooseContent {
  text: string;
  heading: string;
  paragraphs: Array<{ html: string }>;
  items: Array<{ icon: string; title: string; text: string }>;
}

export interface FaqContent {
  text: string;
  heading: string;
  text2: string;
  items: Array<{ question: string; answer: string }>;
}

export interface FeaturedInContent {
  text: string;
  heading: string;
  text2: string;
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
  text: string;
  heading: string;
  /** Prefix for the tab / pane ids so several tab groups can share a page. */
  idPrefix: string;
  tabs: Array<{ id: string; title: string; icons: Array<{ image: CmsImage }> }>;
}

export interface WhyChooseImageContent {
  text: string;
  heading: string;
  text2: string;
  image: CmsImage;
  items: Array<{ icon: string; title: string; text: string }>;
}
