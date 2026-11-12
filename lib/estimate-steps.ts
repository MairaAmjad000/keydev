/**
 * Seed data for the estimate wizard. Mirrors the admin's step/option records:
 * each option may carry its own `next` step key; otherwise the step's `next`
 * is used. A missing next key means the flow is finished.
 */
export type EstimateOption = {
  value: string;
  label: string;
  /** Added to the running estimate (USD). */
  price: number;
  next?: string;
};

export type EstimateStep = {
  key: string;
  title: string;
  description: string;
  type: "single" | "multiple";
  next?: string;
  options: EstimateOption[];
};

const yn = (yes: number): EstimateOption[] => [
  { value: "no", label: "No", price: 0 },
  { value: "yes", label: "Yes", price: yes },
];

export const estimateStart = "project_type";

export const estimateSteps: EstimateStep[] = [
  {
    key: "project_type",
    title: "What kind of project are you developing?",
    description: "Select the type of project you're building.",
    type: "single",
    options: [
      { value: "mobile-app", label: "Mobile App", price: 0, next: "app_start" },
      { value: "web", label: "Web", price: 0, next: "web_start" },
      { value: "game", label: "Game", price: 0, next: "game_platform" },
    ],
  },

  // ---- Mobile app path
  {
    key: "app_start",
    title: "How would you like to start?",
    description: "Choose how you'd like to begin your project.",
    type: "single",
    next: "app_platform",
    options: [
      { value: "source_code", label: "Start from source code", price: 0 },
      { value: "idea", label: "Start with just an idea", price: 1500 },
    ],
  },
  {
    key: "app_platform",
    title: "What platform do you want the app on?",
    description: "Select the target platform.",
    type: "single",
    options: [
      { value: "ios", label: "iOS", price: 4000, next: "app_device_ios" },
      { value: "android", label: "Android", price: 4000, next: "app_device_android" },
      { value: "any", label: "Both iOS and Android", price: 7000, next: "app_category" },
    ],
  },
  {
    key: "app_device_ios",
    title: "Which iOS devices should it support?",
    description: "Select the Apple devices you want to target.",
    type: "single",
    next: "app_category",
    options: [
      { value: "iphone", label: "iPhone", price: 0 },
      { value: "ipad", label: "iPad", price: 1000 },
    ],
  },
  {
    key: "app_device_android",
    title: "Which Android devices should it support?",
    description: "Select the Android devices you want to target.",
    type: "single",
    next: "app_category",
    options: [
      { value: "android_phone", label: "Android Phone", price: 0 },
      { value: "android_tablet", label: "Android Tablet", price: 1000 },
    ],
  },
  {
    key: "app_category",
    title: "What will the app be used for?",
    description: "Select the closest app category.",
    type: "single",
    next: "app_login",
    options: [
      { value: "business", label: "Business", price: 0 },
      { value: "ecommerce", label: "E-commerce", price: 1500 },
      { value: "education", label: "Education", price: 1000 },
      { value: "social", label: "Social", price: 2000 },
    ],
  },
  {
    key: "app_login",
    title: "What type of login is needed?",
    description: "Select the sign-in method.",
    type: "single",
    next: "app_admin",
    options: [
      { value: "none", label: "No login", price: 0 },
      { value: "email", label: "Email login", price: 800 },
      { value: "social", label: "Social login", price: 1200 },
    ],
  },
  {
    key: "app_admin",
    title: "Do you require an admin panel?",
    description: "A web dashboard to manage users and content.",
    type: "single",
    next: "app_design",
    options: yn(5000),
  },
  {
    key: "app_design",
    title: "Do you need us to design the app?",
    description: "UI/UX design from wireframes to final screens.",
    type: "single",
    next: "app_gps",
    options: yn(3000),
  },
  {
    key: "app_gps",
    title: "Is GPS integration required?",
    description: "Maps, live location and geofencing.",
    type: "single",
    next: "app_chat",
    options: yn(2000),
  },
  {
    key: "app_chat",
    title: "Does the app need a chat feature?",
    description: "Real-time messaging between users.",
    type: "single",
    next: "app_earn",
    options: yn(4000),
  },
  {
    key: "app_earn",
    title: "How will you earn from the app?",
    description: "Pick every revenue model that applies.",
    type: "multiple",
    next: "app_payment",
    options: [
      { value: "subscription", label: "Subscription", price: 500 },
      { value: "one_time", label: "One-time purchase", price: 300 },
      { value: "ads", label: "Ads", price: 200 },
      { value: "freemium", label: "Freemium", price: 400 },
    ],
  },
  {
    key: "app_payment",
    title: "Do you need payment integration?",
    description: "Cards, wallets and in-app purchases.",
    type: "single",
    options: yn(2500),
  },

  // ---- Web path
  {
    key: "web_start",
    title: "How would you like to start?",
    description: "Choose how you'd like to begin your web project.",
    type: "single",
    next: "web_type",
    options: [
      { value: "source_code", label: "Start from source code", price: 0 },
      { value: "idea", label: "Start with just an idea", price: 1000 },
    ],
  },
  {
    key: "web_type",
    title: "What type of web solution do you need?",
    description: "Select the closest match.",
    type: "single",
    next: "web_tech",
    options: [
      { value: "landing", label: "Landing Page", price: 800 },
      { value: "corporate", label: "Corporate Site", price: 2500 },
      { value: "portal", label: "Web Portal / SaaS", price: 8000 },
      { value: "ecommerce", label: "E-commerce Store", price: 6000 },
    ],
  },
  {
    key: "web_tech",
    title: "Which technology would you like to use?",
    description: "We'll recommend one if you're not sure.",
    type: "single",
    next: "web_design",
    options: [
      { value: "react", label: "React / Next.js", price: 0 },
      { value: "vue", label: "Vue / Nuxt", price: 0 },
      { value: "node", label: "Node.js", price: 0 },
      { value: "wordpress", label: "WordPress", price: -500 },
    ],
  },
  {
    key: "web_design",
    title: "Do you need custom design?",
    description: "Bespoke UI rather than a ready-made theme.",
    type: "single",
    next: "web_mobile_too",
    options: yn(2000),
  },
  {
    key: "web_mobile_too",
    title: "Do you need a mobile app too?",
    description: "We'll walk you through the mobile options next.",
    type: "single",
    options: [
      { value: "no", label: "No", price: 0, next: "web_payment" },
      { value: "yes", label: "Yes", price: 0, next: "app_platform" },
    ],
  },
  {
    key: "web_payment",
    title: "Do you need payment integration?",
    description: "Cards, wallets and subscriptions.",
    type: "single",
    options: yn(3000),
  },

  // ---- Game path
  {
    key: "game_platform",
    title: "What platform would you like your game on?",
    description: "Pick every platform that applies.",
    type: "multiple",
    next: "game_type",
    options: [
      { value: "web", label: "Web", price: 2000 },
      { value: "mobile", label: "Mobile", price: 4000 },
      { value: "console", label: "Console", price: 5000 },
    ],
  },
  {
    key: "game_type",
    title: "What type of game will it be?",
    description: "Select the genre family.",
    type: "single",
    next: "game_mode",
    options: [
      { value: "action", label: "Action", price: 2000 },
      { value: "puzzle", label: "Puzzle", price: 500 },
      { value: "strategy", label: "Strategy", price: 1500 },
    ],
  },
  {
    key: "game_mode",
    title: "Single player or multiplayer?",
    description: "Multiplayer needs a networked backend.",
    type: "single",
    next: "game_graphics",
    options: [
      { value: "single", label: "Single Player", price: 0 },
      { value: "multi", label: "Multiplayer", price: 3000 },
    ],
  },
  {
    key: "game_graphics",
    title: "Will you need the graphics designed?",
    description: "Characters, environments and UI art.",
    type: "single",
    next: "game_login",
    options: yn(4000),
  },
  {
    key: "game_login",
    title: "How will users log in to the game?",
    description: "Select the sign-in method.",
    type: "single",
    next: "game_earn",
    options: [
      { value: "none", label: "No login", price: 0 },
      { value: "social", label: "Social login", price: 800 },
      { value: "custom", label: "Custom system", price: 2000 },
    ],
  },
  {
    key: "game_earn",
    title: "How will you earn from the game?",
    description: "Pick every revenue model that applies.",
    type: "multiple",
    options: [
      { value: "ads", label: "Ads", price: 500 },
      { value: "one_time", label: "One-time purchase", price: 300 },
      { value: "subscription", label: "Subscription", price: 500 },
    ],
  },
];
