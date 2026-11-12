/**
 * Dummy content used until the CMS endpoints are wired. Shapes match the
 * admin's `sections[key]` JSON (see lib/sections/types.ts) so replacing a
 * constant with a fetch needs no component changes. Images are local SVG
 * placeholders in /public/images.
 */
import type { SectionData } from "@/lib/sections/types";

const img = (name: string) => `/images/${name}.svg`;

/* -------------------------------------------------------------------------- */
/* Shared blocks                                                              */
/* -------------------------------------------------------------------------- */

export const clientLogos: SectionData = {
  key: "partner_logos",
  eyebrow: "Trusted by",
  title: "Teams that ship with KeyDevs",
  items: ["northwind", "brightpay", "urbanly", "medico", "cartwheel", "skyline"].map((n) => ({
    image: img(`logo-${n}`),
    alt: n[0].toUpperCase() + n.slice(1),
  })),
};

export const stats: SectionData = {
  key: "fact_stats",
  eyebrow: "By the numbers",
  title: "A decade of shipping products",
  items: [
    { number: "12+", title: "Years in the industry" },
    { number: "450+", title: "Projects delivered" },
    { number: "120", title: "Engineers & designers" },
    { number: "96%", title: "Client retention" },
  ],
};

export const testimonials: SectionData = {
  key: "testimonials",
  eyebrow: "Client reviews",
  title: "What our clients say",
  items: [
    {
      name: "Sarah Khan",
      title: "COO, Urbanly",
      image: img("avatar-1"),
      rating: 5,
      excerpt: "KeyDevs shipped our ride-hailing MVP in ten weeks and stayed with us through launch. Communication was excellent.",
    },
    {
      name: "Daniel Brooks",
      title: "Founder, Cartwheel",
      image: img("avatar-2"),
      rating: 5,
      excerpt: "The team challenged our assumptions, simplified the scope and delivered a store that converts far better than the old one.",
    },
    {
      name: "Ayesha Malik",
      title: "CTO, Medico",
      image: img("avatar-3"),
      rating: 5,
      excerpt: "Reliable, transparent and technically strong. Our telehealth platform has had almost no downtime since go-live.",
    },
  ],
};

export const awards: SectionData = {
  key: "awards",
  eyebrow: "Recognition",
  title: "Awards & ratings",
  items: [
    { title: "Clutch Top Developer", image: img("award-1"), alt: "Clutch", rating: 5 },
    { title: "GoodFirms Leader", image: img("award-2"), alt: "GoodFirms", rating: 5 },
    { title: "AppFutura Top 10", image: img("award-3"), alt: "AppFutura", rating: 5 },
  ],
};

export const process: SectionData = {
  key: "process_step",
  eyebrow: "How we work",
  title: "From idea to launch in four steps",
  items: [
    { number: "01", title: "Discover", description: "Workshops to define goals, users and the smallest valuable release." },
    { number: "02", title: "Design", description: "Wireframes, prototypes and a UI kit you can test with real users." },
    { number: "03", title: "Build", description: "Two-week sprints with demos, automated tests and CI from day one." },
    { number: "04", title: "Launch & grow", description: "Store submission, monitoring and a roadmap for what comes next." },
  ],
};

export const whyChooseUs: SectionData = {
  key: "why_choose_us",
  eyebrow: "Why KeyDevs",
  title: "Senior people, predictable delivery",
  items: [
    { icon: "🎯", title: "Fixed-scope sprints", description: "Clear estimates and weekly demos so budgets never drift." },
    { icon: "🛡️", title: "Secure by default", description: "Code review, dependency scanning and penetration testing built in." },
    { icon: "⚡", title: "Fast start", description: "A dedicated squad can begin within two weeks of kickoff." },
  ],
};

export const connectCta: SectionData = {
  key: "cta",
  title: "Ready to start your project?",
  description: "Tell us what you are building. We reply within one business day.",
  buttonText: "Estimate your project",
  buttonHref: "/estimate",
};

export const offices: SectionData = {
  key: "location",
  eyebrow: "Connect with us",
  title: "We are available at",
  items: [
    { icon: "📍", title: "Lahore", description: "30B A1 Block Johar Town, Lahore" },
    { icon: "📍", title: "United States", description: "8 The Green, Suite A, Dover, PO 19901" },
    { icon: "📍", title: "Dubai", description: "Office 12, Opp. AlKhail Mall, Al Quoz, Dubai" },
  ],
};

export const portfolio: SectionData = {
  key: "portfolio",
  eyebrow: "Portfolio",
  title: "Selected work",
  description: "A sample of products we designed and built with our clients.",
  items: [
    { title: "Ride Hailing App", description: "Driver and rider apps with live tracking and in-app payments.", image: img("project-1") },
    { title: "Food Delivery Platform", description: "Multi-restaurant ordering with a courier dispatch dashboard.", image: img("project-2") },
    { title: "Fitness Tracker", description: "Workout plans, wearable sync and coach messaging.", image: img("project-3") },
    { title: "Real Estate Portal", description: "Listings, map search and agent CRM for a regional broker.", image: img("project-4") },
    { title: "Fantasy Cricket", description: "Contest engine and wallet handling 200k concurrent users.", image: img("project-5") },
    { title: "Telehealth Suite", description: "Video consultations, e-prescriptions and patient records.", image: img("project-6") },
  ],
};

export const team: SectionData = {
  key: "team",
  eyebrow: "People",
  title: "Meet the leadership team",
  items: [
    { name: "Ahsan Raza", role: "Chief Executive Officer", image: img("avatar-1"), socials: [{ label: "LinkedIn", href: "https://www.linkedin.com" }] },
    { name: "Priya Nair", role: "Head of Design", image: img("avatar-5"), socials: [{ label: "Behance", href: "https://www.behance.net" }] },
    { name: "Liam Carter", role: "VP Engineering", image: img("avatar-6"), socials: [{ label: "LinkedIn", href: "https://www.linkedin.com" }] },
  ],
};

export const technologies: SectionData = {
  key: "features_benefits",
  eyebrow: "Technologies",
  title: "Our toolbox",
  description: "We pick the stack that fits the product, not the other way round.",
  features: ["React, Next.js, Vue", "Node.js, Laravel, CodeIgniter", "Swift, Kotlin, Flutter", "AWS, Azure, Google Cloud"],
  benefits: ["Fewer bugs through typed code and CI", "Faster releases via automated pipelines", "Easier hiring thanks to mainstream tools", "Lower hosting cost with right-sized infra"],
};

/* -------------------------------------------------------------------------- */
/* Home                                                                       */
/* -------------------------------------------------------------------------- */

export const homeSections: SectionData[] = [
  {
    key: "hero",
    eyebrow: "Product strategy, design and engineering",
    title: "Bespoke Web & Mobile App Development Company",
    description: "Bespoke web, mobile and game development. Product strategy, design and engineering for startups and enterprises.",
    image: img("hero-web"),
    alt: "Dashboard and mobile app mockups",
    buttonText: "Estimate Your Project",
    buttonHref: "/estimate",
    buttonText2: "See our work",
    buttonHref2: "/portfolio",
  },
  clientLogos,
  {
    key: "services",
    eyebrow: "What we do",
    title: "Services for every stage of your product",
    items: [
      { number: "01", title: "Mobile App Development", description: "Native iOS and Android and cross-platform apps built for scale." },
      { number: "02", title: "Web App Development", description: "Fast, accessible web products with modern frameworks." },
      { number: "03", title: "Game Development", description: "2D and 3D games for mobile, web and console." },
      { number: "04", title: "UI/UX Design", description: "Research-led design systems and prototypes." },
      { number: "05", title: "Enterprise Solutions", description: "ERP, CRM and workflow automation." },
      { number: "06", title: "Digital Marketing", description: "SEO, paid media and social growth." },
    ],
  },
  stats,
  {
    key: "intro_with_image",
    eyebrow: "About KeyDevs",
    title: "A product team you can plug into",
    description: "We combine strategists, designers and engineers in one squad so ideas move from workshop to production without hand-off friction.",
    image: img("intro-1"),
    alt: "Team workshop",
  },
  whyChooseUs,
  portfolio,
  process,
  testimonials,
  awards,
  {
    key: "blog_section",
    eyebrow: "Insights",
    title: "From the blog",
    items: [], // filled by the page from `posts`
  },
  connectCta,
];

/* -------------------------------------------------------------------------- */
/* About / Contact / Legal / misc pages                                       */
/* -------------------------------------------------------------------------- */

export const aboutSections: SectionData[] = [
  {
    key: "hero",
    eyebrow: "About us",
    title: "We build digital products that last",
    description: "KeyDevs is a studio of 120 designers and engineers across Lahore, Dubai and the US.",
    image: img("about-team"),
    alt: "The KeyDevs team",
  },
  {
    key: "intro_with_image",
    eyebrow: "Our story",
    title: "Started in 2014, still independent",
    description: "We began as three developers in Johar Town and grew by doing one thing well: shipping reliable software for ambitious founders.",
    image: img("intro-2"),
    imageLeft: true,
  },
  stats,
  whyChooseUs,
  team,
  awards,
  connectCta,
];

export const contactSections: SectionData[] = [
  {
    key: "contact_info",
    eyebrow: "Contact",
    title: "Get in touch",
    description: "Reach the right team directly or send us a brief.",
    items: [
      { icon: "✉️", title: "Email", description: "sales@keydevs.com" },
      { icon: "📞", title: "Phone", description: "+92 339 5393387" },
      { icon: "📍", title: "Head office", description: "30B A1 Block Johar Town, Lahore" },
    ],
  },
  {
    key: "cta",
    title: "Prefer to talk it through?",
    description: "Book a free 30-minute consultation with a solutions architect.",
    buttonText: "Estimate your project",
    buttonHref: "/estimate",
  },
];

export const legalSections: Record<"privacy" | "terms", SectionData[]> = {
  privacy: [
    {
      key: "faq_section",
      eyebrow: "Legal",
      title: "Privacy policy",
      description: "How we collect, use and protect your information.",
      items: [
        { question: "What data do you collect?", answer: "Contact details you submit through forms, and anonymous usage analytics if you accept cookies." },
        { question: "How is it used?", answer: "To reply to enquiries, improve the site and provide the services you request. We never sell personal data." },
        { question: "How long do you keep it?", answer: "Enquiries are kept for up to 24 months unless we start a project together, then for the contract period plus statutory retention." },
        { question: "How do I request deletion?", answer: "Email sales@keydevs.com and we will confirm deletion within 30 days." },
      ],
    },
  ],
  terms: [
    {
      key: "faq_section",
      eyebrow: "Legal",
      title: "Terms of service",
      description: "Please read these terms before using our website and services.",
      items: [
        { question: "Use of the website", answer: "Content is provided for general information. You agree not to misuse the site or attempt unauthorised access." },
        { question: "Project agreements", answer: "Paid engagements are governed by a signed statement of work that overrides these general terms." },
        { question: "Intellectual property", answer: "Upon full payment, ownership of bespoke deliverables transfers to the client as set out in the statement of work." },
        { question: "Liability", answer: "To the extent permitted by law, our liability is limited to the fees paid for the relevant engagement." },
      ],
    },
  ],
};

export const portfolioSections: SectionData[] = [portfolio, testimonials, connectCta];
export const clientReviewSections: SectionData[] = [
  {
    key: "clutch_reviews",
    eyebrow: "Reviews",
    title: "Rated by the clients we serve",
    items: [
      { number: "4.9", title: "Clutch" },
      { number: "4.8", title: "GoodFirms" },
      { number: "4.9", title: "AppFutura" },
    ],
  },
  testimonials,
  awards,
  connectCta,
];
export const howWeWorkSections: SectionData[] = [process, whyChooseUs, stats, connectCta];
export const technologiesSections: SectionData[] = [technologies, clientLogos, connectCta];

/* -------------------------------------------------------------------------- */
/* Services                                                                   */
/* -------------------------------------------------------------------------- */

export type ServiceRecord = {
  slug: string;
  title: string;
  category: "mobile-app-development" | "web-development" | "enterprise-solutions" | "digital-marketing";
  image: string;
  summary: string;
};

const svc = (
  slug: string,
  title: string,
  category: ServiceRecord["category"],
  image: string,
  summary: string,
): ServiceRecord => ({ slug, title, category, image: img(image), summary });

export const services: ServiceRecord[] = [
  svc("iphone-app-development", "iPhone App Development", "mobile-app-development", "service-mobile", "Polished native iOS apps in Swift, built to App Store standards."),
  svc("android-app-development", "Android App Development", "mobile-app-development", "service-mobile", "Kotlin apps that run smoothly across the Android device range."),
  svc("flutter-app-development", "Flutter App Development", "mobile-app-development", "service-mobile", "One codebase, two platforms, near-native performance."),
  svc("cross-platform-app-development", "Cross-Platform App Development", "mobile-app-development", "service-mobile", "React Native and Flutter apps that ship faster and cost less."),
  svc("ios-game-development", "iOS Game Development", "mobile-app-development", "service-game", "Engaging 2D and 3D games for iPhone and iPad."),
  svc("android-game-development", "Android Game Development", "mobile-app-development", "service-game", "Games tuned for the full range of Android hardware."),
  svc("php-web-development", "PHP Web Development", "web-development", "service-web", "Dependable PHP applications with clean architecture."),
  svc("laravel-development", "Laravel Development", "web-development", "service-web", "Secure, scalable Laravel back-ends and APIs."),
  svc("codeigniter-development", "CodeIgniter Development", "web-development", "service-web", "Lightweight CodeIgniter apps delivered quickly."),
  svc("nodejs-development", "Node.js Development", "web-development", "service-web", "Real-time services and APIs on Node.js."),
  svc("angularjs-development", "AngularJS Development", "web-development", "service-web", "Maintainable single-page apps with Angular."),
  svc("wordpress-development", "WordPress Development", "web-development", "service-web", "Custom themes and plugins editors love."),
  svc("cms-solutions", "CMS Solutions", "web-development", "service-web", "Headless and traditional CMS builds."),
  svc("ui-ux-design", "UI/UX Design", "web-development", "service-design", "Research-led design systems and interactive prototypes."),
  svc("ecommerce-solutions", "Ecommerce Solutions", "enterprise-solutions", "service-ecommerce", "Stores and marketplaces built to convert."),
  svc("erp-solutions", "ERP Solutions", "enterprise-solutions", "service-enterprise", "Custom ERP that fits how your business actually runs."),
  svc("crm-solutions", "CRM Solutions", "enterprise-solutions", "service-enterprise", "Sales pipelines and customer data in one place."),
  svc("startup-mvp-development", "Startup MVP Development", "enterprise-solutions", "service-mobile", "Validate your idea with a launch-ready MVP in weeks."),
  svc("search-engine-optimization", "Search Engine Optimization", "digital-marketing", "service-marketing", "Technical and content SEO that compounds."),
  svc("social-media-marketing", "Social Media Marketing", "digital-marketing", "service-marketing", "Content and community across every channel."),
  svc("google-ads", "Google Ads", "digital-marketing", "service-marketing", "Search and display campaigns tuned for ROI."),
  svc("facebook-ads", "Facebook Ads", "digital-marketing", "service-marketing", "Meta campaigns with creative testing built in."),
  svc("ecommerce-ads", "Ecommerce Ads", "digital-marketing", "service-marketing", "Shopping and retargeting campaigns for online stores."),
  svc("youtube-promotion", "YouTube Promotion", "digital-marketing", "service-marketing", "Video campaigns that reach the right viewers."),
];

export const serviceCategories: Record<ServiceRecord["category"], { title: string; description: string }> = {
  "mobile-app-development": { title: "Mobile App Development", description: "Native and cross-platform apps for iOS and Android." },
  "web-development": { title: "Web Development", description: "Web apps, back-ends, CMS builds and design." },
  "enterprise-solutions": { title: "Enterprise Solutions", description: "ERP, CRM, ecommerce and MVP delivery." },
  "digital-marketing": { title: "Digital Marketing", description: "Search, social and paid media." },
};

export function getService(slug: string): ServiceRecord | undefined {
  return services.find((s) => s.slug === slug);
}

export function serviceSections(service: ServiceRecord): SectionData[] {
  return [
    {
      key: "hero",
      eyebrow: serviceCategories[service.category].title,
      title: service.title,
      description: service.summary,
      image: service.image,
      alt: service.title,
      buttonText: "Estimate Your Project",
      buttonHref: "/estimate",
    },
    {
      key: "features",
      eyebrow: "What you get",
      title: `${service.title} capabilities`,
      items: [
        { icon: "🧭", title: "Strategy & scoping", description: "Roadmap, estimates and success metrics agreed before code starts." },
        { icon: "🎨", title: "Design", description: "Clickable prototypes validated with real users." },
        { icon: "🛠️", title: "Engineering", description: "Clean, tested, documented code in your repository." },
        { icon: "🚀", title: "Launch & support", description: "Release management, monitoring and ongoing maintenance." },
      ],
    },
    {
      key: "features_benefits",
      eyebrow: "Why it works",
      title: "Built for outcomes",
      features: ["Dedicated squad with a named lead", "Weekly demos and transparent boards", "Automated testing and CI/CD", "Post-launch support included"],
      benefits: ["Predictable timeline and budget", "Faster time to market", "Lower long-term maintenance cost", "Full ownership of source code"],
    },
    process,
    {
      key: "faq",
      eyebrow: "FAQ",
      title: `${service.title} questions`,
      items: [
        { question: "How long does a typical project take?", answer: "Most projects launch in 8 to 16 weeks depending on scope. We confirm after a discovery workshop." },
        { question: "Do I own the code?", answer: "Yes. Full source code and IP transfer on final payment." },
        { question: "Can you work with our in-house team?", answer: "Absolutely. We regularly embed alongside existing engineers and designers." },
        { question: "What does support cost?", answer: "Monthly retainers start at a few hours per week and can be paused at any time." },
      ],
    },
    testimonials,
    connectCta,
  ];
}

/* -------------------------------------------------------------------------- */
/* Solutions                                                                  */
/* -------------------------------------------------------------------------- */

export type SolutionRecord = { slug: string; title: string; summary: string; features: string[] };

const sol = (slug: string, title: string, summary: string, features: string[]): SolutionRecord => ({
  slug,
  title,
  summary,
  features,
});

export const solutions: SolutionRecord[] = [
  sol("taxi", "Taxi Booking App", "Launch an Uber-style ride service with rider, driver and admin apps.", ["Live tracking", "Fare estimation", "In-app payments", "Driver onboarding"]),
  sol("food-delivery", "Food Delivery App", "Multi-restaurant ordering with courier dispatch.", ["Menu management", "Order tracking", "Courier app", "Promo engine"]),
  sol("car-wash", "Car Wash App", "On-demand and scheduled car care bookings.", ["Slot booking", "Subscriptions", "Partner app", "Ratings"]),
  sol("real-estate", "Real Estate App", "Listings, map search and agent tools.", ["Map search", "Saved searches", "Virtual tours", "Agent CRM"]),
  sol("finance", "Banking & Finance App", "Secure fintech apps with KYC and payments.", ["KYC / AML", "Wallets", "Card controls", "Audit logs"]),
  sol("travel", "Travel & Tourism App", "Itineraries, bookings and local discovery.", ["Booking engine", "Itinerary builder", "Offline maps", "Reviews"]),
  sol("health-fitness", "Health & Fitness App", "Workouts, nutrition and wearable sync.", ["Plans & tracking", "Wearable sync", "Coach chat", "Challenges"]),
  sol("social-media", "Social Media App", "Feeds, stories and creator tools.", ["Feed ranking", "Stories", "Moderation", "Notifications"]),
  sol("dating", "Dating App", "Matching, chat and safety features.", ["Matching engine", "Chat & calls", "Verification", "Premium tiers"]),
  sol("instant-messaging", "Instant Messaging App", "Secure real-time chat for teams and communities.", ["End-to-end encryption", "Groups", "Media sharing", "Voice & video"]),
  sol("media-entertainment", "Media & Entertainment App", "Streaming, podcasts and live events.", ["Adaptive streaming", "Downloads", "Subscriptions", "Recommendations"]),
  sol("fantasy-sports", "Fantasy Sports App", "Contest engines with wallets and live scoring.", ["Contest engine", "Live scoring", "Wallet", "Leaderboards"]),
  sol("chatbot", "Chatbot Solutions", "AI assistants for support and sales.", ["Intent routing", "Knowledge base", "Human hand-off", "Analytics"]),
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}

export function solutionSections(solution: SolutionRecord): SectionData[] {
  return [
    {
      key: "hero",
      eyebrow: "Solutions",
      title: solution.title,
      description: solution.summary,
      image: img(`solution-${solution.slug}`),
      alt: solution.title,
      buttonText: "Estimate Your Project",
      buttonHref: "/estimate",
    },
    {
      key: "features",
      eyebrow: "Key features",
      title: `What's inside ${solution.title}`,
      items: solution.features.map((title, i) => ({
        icon: ["✨", "📱", "🔒", "📊"][i % 4],
        title,
        description: `Production-ready ${title.toLowerCase()} you can launch with and extend later.`,
      })),
    },
    process,
    {
      key: "faq",
      eyebrow: "FAQ",
      title: "Common questions",
      items: [
        { question: "Can you customise the solution to our brand?", answer: "Yes. We start from proven modules and tailor design, flows and integrations." },
        { question: "How fast can we launch?", answer: "A branded MVP typically ships in 8 to 12 weeks." },
        { question: "Do you provide the admin panel?", answer: "Every solution includes a web admin panel for operations and reporting." },
      ],
    },
    connectCta,
  ];
}

/* -------------------------------------------------------------------------- */
/* Blog                                                                       */
/* -------------------------------------------------------------------------- */

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  published_at: string;
  paragraphs: string[];
};

export const posts: Post[] = [
  {
    slug: "web-development-trends-2026",
    title: "Web development trends to watch in 2026",
    excerpt: "Server components, edge rendering and AI-assisted tooling are reshaping how we build for the web.",
    image: img("blog-web-development-trends-2026"),
    published_at: "2026-10-28",
    paragraphs: [
      "The web platform keeps moving quickly. Frameworks now default to server rendering, and the line between front end and back end continues to blur.",
      "Edge runtimes bring compute closer to users, cutting latency for personalised pages without sacrificing caching.",
      "Meanwhile, AI-assisted tooling speeds up routine work, but code review and testing matter more than ever.",
    ],
  },
  {
    slug: "ai-assisted-software-delivery",
    title: "How AI-assisted delivery changes sprint planning",
    excerpt: "Estimates, reviews and QA all look different when every engineer has a capable assistant.",
    image: img("blog-ai-assisted-software-delivery"),
    published_at: "2026-10-14",
    paragraphs: [
      "We measured cycle time across twelve projects after introducing AI pair-programming tools.",
      "Throughput improved most on well-specified tasks and least on exploratory work, so discovery still needs humans in the room.",
      "Our takeaway: invest in clearer tickets and stronger automated tests before adding more tooling.",
    ],
  },
  {
    slug: "choosing-flutter-or-react-native",
    title: "Flutter or React Native: how to choose",
    excerpt: "Both ship great apps. Here is the checklist we use to recommend one.",
    image: img("blog-choosing-flutter-or-react-native"),
    published_at: "2026-09-30",
    paragraphs: [
      "Start with your team: existing JavaScript expertise favours React Native, while greenfield teams often enjoy Flutter's tooling.",
      "Consider platform-specific features, animation needs and the plugins you rely on.",
      "For most products either choice works; what matters is consistent architecture and testing.",
    ],
  },
  {
    slug: "scaling-mvp-to-production",
    title: "Scaling an MVP to production without a rewrite",
    excerpt: "Practical steps for hardening a prototype while customers are already using it.",
    image: img("blog-scaling-mvp-to-production"),
    published_at: "2026-09-12",
    paragraphs: [
      "Begin with observability: you cannot fix what you cannot see.",
      "Next, add automated tests around the revenue-critical paths, then refactor behind them.",
      "Finally, plan capacity with realistic load tests rather than guesswork.",
    ],
  },
  {
    slug: "ux-patterns-for-on-demand-apps",
    title: "UX patterns that make on-demand apps feel fast",
    excerpt: "Skeleton screens, optimistic updates and clear status messaging go a long way.",
    image: img("blog-ux-patterns-for-on-demand-apps"),
    published_at: "2026-08-25",
    paragraphs: [
      "Users judge speed by perception. Showing structure immediately reduces perceived wait time.",
      "Optimistic updates keep interactions snappy, as long as failure states are handled gracefully.",
      "Clear status messaging builds trust when real-world logistics add delay.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export const postsAsItems = posts.map((p) => ({
  title: p.title,
  excerpt: p.excerpt,
  image: p.image,
  alt: p.title,
  slug: p.slug,
  published_at: p.published_at,
  read_more_url: `/blog/${p.slug}`,
}));
