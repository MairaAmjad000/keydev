/**
 * Static seed content for the site shell.
 *
 * Mirrors the records the CMS already exposes (services, solution categories,
 * settings → contact/social/header, footer groups). Once the API is wired,
 * these exports become the fallback used when a request fails.
 */

export type NavLink = { label: string; href: string };
export type NavGroup = { title: string; links: NavLink[] };

export type MegaMenuData = {
  groups: NavGroup[];
  cta: {
    title: string;
    phone: string;
    phoneHref: string;
    buttonText: string;
    href: string;
  };
};

export type NavItem =
  | { kind: "link"; label: string; href: string }
  | { kind: "dropdown"; label: string; links: NavLink[] }
  | { kind: "mega"; label: string; menu: MegaMenuData };

export const site = {
  name: "KeyDevs Technologies",
  shortName: "KeyDevs",
  description:
    "Bespoke web, mobile and game development. Product strategy, design and engineering for startups and enterprises.",
  email: "sales@keydevs.com",
  phone: "+92 339 5393387",
  phoneHref: "tel:+923395393387",
  rating: 5,
  ratingText: "Excellent 5 out of 5",
  topBarLead: "Email us on",
  topBarMid: "or Speak to our expert",
  callbackLabel: "Request a Call Back",
  estimateHref: "/estimate",
  experienceYears: 12,
  clutchScore: 4.9,
};

const servicesMenu: MegaMenuData = {
  groups: [
    {
      title: "Mobile App Development",
      links: [
        { label: "iPhone App Development", href: "/services/iphone-app-development" },
        { label: "Android App Development", href: "/services/android-app-development" },
        { label: "Flutter App Development", href: "/services/flutter-app-development" },
        {
          label: "Cross Platform App Development",
          href: "/services/cross-platform-app-development",
        },
        { label: "iOS Game Development", href: "/services/ios-game-development" },
        { label: "Android Game Development", href: "/services/android-game-development" },
      ],
    },
    {
      title: "Web Development",
      links: [
        { label: "Web Development", href: "/service-category/web-development" },
        { label: "PHP Web Development", href: "/services/php-web-development" },
        { label: "WordPress Development", href: "/services/wordpress-development" },
        { label: "CodeIgniter Development", href: "/services/codeigniter-development" },
        { label: "Laravel Development", href: "/services/laravel-development" },
        { label: "AngularJS Development", href: "/services/angularjs-development" },
        { label: "NodeJS Development", href: "/services/nodejs-development" },
      ],
    },
    {
      title: "Digital Marketing",
      links: [
        {
          label: "Search Engine Optimization",
          href: "/services/search-engine-optimization",
        },
        { label: "Social Media Marketing", href: "/services/social-media-marketing" },
        { label: "Facebook Ads", href: "/services/facebook-ads" },
        { label: "Google Ads", href: "/services/google-ads" },
        { label: "E-commerce Ads", href: "/services/ecommerce-ads" },
        { label: "YouTube Promotion", href: "/services/youtube-promotion" },
      ],
    },
    {
      title: "Enterprise Solutions",
      links: [
        { label: "Startup MVP Development", href: "/services/startup-mvp-development" },
        { label: "ERP Solutions", href: "/services/erp-solutions" },
        { label: "CRM Solutions", href: "/services/crm-solutions" },
        { label: "CMS Solutions", href: "/services/cms-solutions" },
        { label: "eCommerce Solutions", href: "/services/ecommerce-solutions" },
        { label: "UI/UX Design", href: "/services/ui-ux-design" },
      ],
    },
  ],
  cta: {
    title: "Not sure what you need yet?",
    phone: "+92 339 5393387",
    phoneHref: "tel:+923395393387",
    buttonText: "Get a free quote",
    href: "/contact",
  },
};

const solutionsMenu: MegaMenuData = {
  groups: [
    {
      title: "On-demand",
      links: [
        { label: "Taxi Booking", href: "/solutions/taxi" },
        { label: "Food Delivery", href: "/solutions/food-delivery" },
        { label: "Car Wash", href: "/solutions/car-wash" },
      ],
    },
    {
      title: "Industry",
      links: [
        { label: "Real Estate", href: "/solutions/real-estate" },
        { label: "Banking & Finance", href: "/solutions/finance" },
        { label: "Travel & Tourism", href: "/solutions/travel" },
        { label: "Health & Fitness", href: "/solutions/health-fitness" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "Social Media", href: "/solutions/social-media" },
        { label: "Dating", href: "/solutions/dating" },
        { label: "Instant Messaging", href: "/solutions/instant-messaging" },
        { label: "Media & Entertainment", href: "/solutions/media-entertainment" },
      ],
    },
    {
      title: "Other",
      links: [
        { label: "Fantasy Sports", href: "/solutions/fantasy-sports" },
        { label: "Chatbot", href: "/solutions/chatbot" },
      ],
    },
  ],
  cta: {
    title: "Have an industry in mind?",
    phone: "+92 339 5393387",
    phoneHref: "tel:+923395393387",
    buttonText: "Talk to an expert",
    href: "/contact",
  },
};

export const navItems: NavItem[] = [
  { kind: "link", label: "Home", href: "/" },
  {
    kind: "dropdown",
    label: "Company",
    links: [
      { label: "Who We Are", href: "/about-us" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Client Review", href: "/client-review" },
      { label: "Technologies", href: "/technologies" },
    ],
  },
  { kind: "mega", label: "Our Service", menu: servicesMenu },
  { kind: "mega", label: "Solution", menu: solutionsMenu },
  { kind: "link", label: "Portfolio", href: "/portfolio" },
  { kind: "link", label: "Blog", href: "/blog" },
  { kind: "link", label: "Contact", href: "/contact" },
];

export const offices = [
  {
    city: "Lahore",
    address: "30B A1 Block Johar Town, Lahore",
    phone: "+92 339 5393387",
    phoneHref: "tel:+923395393387",
    email: "sales@keydevs.com",
  },
  {
    city: "United State",
    address: "8 The Green, Suite A, Dover, PO 19901",
    phone: "+1 616 4693940",
    phoneHref: "tel:+16164693940",
    email: "sales@keydevs.com",
  },
  {
    city: "Dubai",
    address: "Office 12, Opp. AlKhail Mall, Al Quoz, Dubai",
    phone: "+971 52 589 7315",
    phoneHref: "tel:+971525897315",
    email: "sales@keydevs.com",
  },
];

export const footerExpertise: NavLink[] = [
  { label: "Mobile App Development", href: "/service-category/mobile-app-development" },
  { label: "Web App Development", href: "/service-category/web-development" },
  { label: "Enterprise Solutions", href: "/service-category/enterprise-solutions" },
  { label: "Startup MVP Development", href: "/services/startup-mvp-development" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "Digital Marketing", href: "/service-category/digital-marketing" },
  { label: "Ecommerce Solutions", href: "/services/ecommerce-solutions" },
];

export const footerSolutions: NavLink[] = [
  { label: "Instant Messaging", href: "/solutions/instant-messaging" },
  { label: "Car Wash", href: "/solutions/car-wash" },
  { label: "Health & Fitness", href: "/solutions/health-fitness" },
  { label: "Taxi Booking", href: "/solutions/taxi" },
  { label: "Food Delivery", href: "/solutions/food-delivery" },
  { label: "Social Media", href: "/solutions/social-media" },
  { label: "Travel & Tourism", href: "/solutions/travel" },
];

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/keydevs" },
  { label: "Instagram", href: "https://www.instagram.com/keydevs_technologies" },
  { label: "Twitter", href: "https://twitter.com/key_devs" },
  { label: "LinkedIn", href: "https://pk.linkedin.com/company/keydevs" },
  { label: "Behance", href: "https://www.behance.net/keydevs" },
];

export const certifications = ["Clutch", "AppFutura", "GoodFirms", "Top B2B"];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

/** Settings → Queries Form Options (three textareas, one option per line). */
export const formOptions = {
  budgets: [
    "Less than $5,000",
    "$5,000 – $10,000",
    "$10,000 – $25,000",
    "$25,000 – $50,000",
    "$50,000+",
  ],
  regions: ["Pakistan", "United States", "United Kingdom", "UAE", "Europe", "Other"],
  services: [
    "Mobile App Development",
    "Web Development",
    "Game Development",
    "Enterprise Solutions",
    "UI/UX Design",
    "Digital Marketing",
  ],
  references: ["Google", "Clutch", "Referral", "Social Media", "Email", "Other"],
};
