// Site-wide blocks (header, menus, footer, popups). Each mirrors one entry in content/navigation or content/globals.

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


export interface FooterContent {
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
