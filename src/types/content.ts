// Generated from content/*.json by tools/gen.py. These types mirror the CMS content shape.

export interface HeaderContent {
  estimateBtn: {
    ariaLabel: string;
    href: string;
    text: string;
  };
  link: {
    href: string;
    image: {
      src: string;
      alt: string;
      width: string;
      height: string;
    };
    icons: Array<{
      className: string;
    }>;
    strong: string;
    text: string;
  };
  text: string;
  link2: {
    href: string;
    strong: string;
  };
  or: string;
  headRequetBtn: {
    href: string;
    image: {
      src: string;
      width: string;
      height: string;
      alt: string;
    };
    text: string;
  };
  link3: {
    href: string;
    image: {
      src: string;
      alt: string;
      width: string;
      height: string;
    };
  };
  link4: {
    href: string;
    text: string;
  };
  link5: {
    href: string;
    html: string;
  };
  items: Array<{
    link: {
      href: string;
      text: string;
    };
  }>;
  link6: {
    href: string;
    html: string;
  };
  link7: {
    href: string;
    text: string;
  };
  items2: Array<{
    link: {
      href: string;
      icon: string;
      text: string;
    };
  }>;
  link8: {
    href: string;
    text: string;
  };
  items3: Array<{
    link: {
      href: string;
      icon: string;
      text: string;
    };
  }>;
  link9: {
    href: string;
    text: string;
  };
  items4: Array<{
    link: {
      href: string;
      icon: string;
      text: string;
    };
  }>;
  link10: {
    href: string;
    text: string;
  };
  link11: {
    href: string;
    text: string;
  };
  items5: Array<{
    link: {
      href: string;
      icon: string;
      text: string;
    };
  }>;
  big: string;
  text2: string;
  link12: {
    href: string;
    title: string;
  };
  link13: {
    href: string;
    title: string;
    or: string;
  };
  link14: {
    href: string;
    text: string;
  };
  link15: {
    href: string;
    html: string;
  };
  items6: Array<{
    link: {
      href: string;
      icon: string;
      text: string;
    };
    items: Array<{
      link: {
        href: string;
        icon: string;
        text: string;
      };
    }>;
  }>;
  big2: string;
  text3: string;
  link16: {
    href: string;
    text: string;
  };
  or2: string;
  link17: {
    href: string;
    text: string;
  };
  link18: {
    href: string;
    text: string;
  };
  items7: Array<{
    link: {
      href: string;
      text: string;
    };
  }>;
  estimateBtn2: {
    href: string;
    text: string;
  };
}

export interface MobileMenuContent {
  cdNavTrigger: {
    ariaLabel: string;
    href: string;
  };
  link: {
    href: string;
    html: string;
  };
  link2: {
    href: string;
    html: string;
  };
  goBacks: Array<{
    className?: string;
    link: {
      href: string;
      text: string;
      className?: string;
    };
  }>;
  link3: {
    href: string;
    html: string;
  };
  link4: {
    href: string;
    text: string;
  };
  link5: {
    href: string;
    text: string;
  };
  goBacks2: Array<{
    className?: string;
    link: {
      href: string;
      text: string;
      className?: string;
    };
  }>;
  link6: {
    href: string;
    text: string;
  };
  goBacks3: Array<{
    className?: string;
    link: {
      href: string;
      text: string;
      className?: string;
    };
  }>;
  link7: {
    href: string;
    text: string;
  };
  link8: {
    href: string;
    text: string;
  };
  goBacks4: Array<{
    className?: string;
    link: {
      href: string;
      text: string;
      className?: string;
    };
  }>;
  link9: {
    href: string;
    text: string;
  };
  goBacks5: Array<{
    className?: string;
    link: {
      href: string;
      text: string;
      className?: string;
    };
  }>;
  link10: {
    href: string;
    text: string;
  };
  link11: {
    href: string;
    text: string;
  };
  link12: {
    href: string;
    text: string;
  };
  hasChildrens: Array<{
    link: {
      href: string;
      text: string;
    };
    goBacks: Array<{
      className?: string;
      link: {
        href: string;
        text: string;
        className?: string;
      };
    }>;
  }>;
  link13: {
    href: string;
    html: string;
  };
  link14: {
    href: string;
    html: string;
  };
  link15: {
    href: string;
    html: string;
  };
  estimateBtn: {
    href: string;
    text: string;
  };
}

export interface GetQuoteButtonContent {
  text: string;
}

export interface CallBackSidebarContent {
  image: {
    src: string;
    alt: string;
  };
  headCallBackContentTitle: string;
  text: string;
  formGroups: Array<{
    label: {
      for: string;
    };
    formControl: {
      type: string;
      placeholder: string;
    };
  }>;
  formControl: {
    placeholder: string;
  };
  contactCustomeBtn: string;
}

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
  text: string;
  heading: string;
  text2: string;
  items: Array<{
    heading: string;
    text: string;
    image: {
      src: string;
      alt: string;
      width: string;
      height: string;
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

export interface FooterMainContent {
  image: {
    src: string;
    width: string;
    height: string;
    alt: string;
  };
  exps: Array<{
    className: string;
    text: string;
  }>;
  link: {
    href: string;
    text: string;
  };
  items: Array<{
    link: {
      title: string;
      href: string;
      className: string;
    };
  }>;
  footCenterCols: Array<{
    className: string;
    subheading: string;
    items: Array<{
      link: {
        href: string;
        text: string;
      };
    }>;
  }>;
  text: string;
  text2: string;
  items2: Array<{
    image: {
      src: string;
      width: string;
      height: string;
      alt: string;
    };
  }>;
  link2: {
    href: string;
    text: string;
  };
  text3: string;
  items3: Array<{
    link: {
      href: string;
      text: string;
    };
  }>;
  text4: string;
}

export interface QuotePopupContent {
  link: {
    href: string;
  };
  subheading: string;
  formGroups: Array<{
    label: {
      for: string;
    };
    formControl: {
      type: string;
      name: string;
      placeholder: string;
    };
  }>;
  formControl: {
    placeholder: string;
  };
  formControl2: {
    placeholder: string;
  };
  formControl3: {
    placeholder: string;
  };
  contactCustomeBtn: string;
}

export interface CookieAlertContent {
  text: string;
  b: string;
  text2: string;
  text3: string;
  customeBtn: {
    ariaLabel: string;
    text: string;
  };
}

export interface HireStickyBarContent {
  image: {
    src: string;
    alt: string;
    width: string;
    height: string;
  };
  ttl1s: Array<{
    className: string;
    text: string;
  }>;
  link: {
    href: string;
    text: string;
  };
  close: {
    href: string;
    ariaLabel: string;
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
