import type { HomepageContent } from '@/types/content';

/** Website content sourced from the supplied KeyDevs homepage. Keep content out of components. */
export const homepageContent: HomepageContent = {
  navigation: [
    { label: 'Home', href: '#home' }, { label: 'Company', href: '#about' },
    { label: 'Our Services', href: '#offerings' }, { label: 'Industries', href: '#industries' },
    { label: 'How We Work', href: '#process' }, { label: 'Portfolio', href: '#portfolio' },
    { label: 'Insights', href: '#insights' }, { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: 'KEYDEVS TECHNOLOGIES',
    title: 'Bespoke Web & Mobile App Development Company',
    description: 'Expertly crafted, innovative, and creative solutions for Web, Android, and iPhone app Development.',
    primaryCta: 'Explore More', secondaryCta: 'Get in Touch',
  },
  about: {
    eyebrow: 'WHO WE ARE', title: 'About KeyDevs Technologies',
    description: 'Web & Mobile App Developers in Lahore, empowering startups & SMEs to achieve 3X ROI with tailored solutions. KeyDevs Technologies is a web and mobile app development company focused on building digital products that help businesses grow.',
    stats: [{ value: '50+', label: 'Projects delivered' }, { value: '10+', label: 'Years of experience' }, { value: '3X', label: 'Growth-focused solutions' }],
  },
  offerings: {
    eyebrow: 'OUR OFFERINGS', title: 'Our Tailored Services to Your Needs',
    description: 'Explore our web and mobile app development services designed to launch your business, enhance your digital presence, and boost brand awareness.',
    services: [
      { title: 'Mobile App Development', description: 'Build engaging Android and iOS applications with thoughtful user experiences, reliable performance and scalable architecture.', icon: 'mobile', href: '#contact' },
      { title: 'Web Development', description: 'Modern websites and web applications tailored to your business goals, customers and workflows.', icon: 'code', href: '#contact' },
      { title: 'E-Commerce Development', description: 'Conversion-focused ecommerce stores and shopping experiences that make it easier to browse, buy and grow.', icon: 'cart', href: '#contact' },
      { title: 'Game Development', description: 'Interactive game experiences shaped around your concept, audience and platform requirements.', icon: 'game', href: '#contact' },
      { title: 'UX & UI Design', description: 'Intuitive, attractive interfaces and user journeys that bring clarity to complex digital products.', icon: 'design', href: '#contact' },
    ],
  },
  industries: ['Healthcare', 'Education', 'Food & Restaurants', 'Retail & E-Commerce', 'Travel & Tourism', 'Logistics', 'Real Estate', 'Startups & SMEs'],
  values: [
    { title: 'Built around your goals', description: 'Solutions shaped around your business, users and measurable outcomes.' },
    { title: 'A collaborative team', description: 'Clear communication and close collaboration from discovery to delivery.' },
    { title: 'Quality at every stage', description: 'Careful planning, thoughtful design, testing and dependable engineering.' },
    { title: 'Ready to scale', description: 'Flexible digital foundations designed to evolve as your business grows.' },
  ],
  process: [
    { number: '01', title: 'Discover', description: 'We understand your idea, audience, goals and project requirements.' },
    { number: '02', title: 'Plan & Design', description: 'We map the experience and create a clear product direction.' },
    { number: '03', title: 'Build', description: 'Our team develops your solution in focused, collaborative sprints.' },
    { number: '04', title: 'Launch & Grow', description: 'We test, launch and help your product move forward.' },
  ],
  projects: [
    { name: 'Multan Chemicals Limited', category: 'Corporate Website', description: 'A digital presence designed for an established industrial business.' },
    { name: 'Atlas Fuel', category: 'Web & Business Solutions', description: 'A tailored digital solution for fuel and energy operations.' },
    { name: 'Delivery Shark', category: 'Mobile Application', description: 'A delivery-focused digital experience.' },
    { name: 'Al-Iftar Foods', category: 'Website & Business Solutions', description: 'Digital tools and an online presence for a food business.' },
    { name: 'Beejan', category: 'E-Commerce', description: 'An online shopping experience built around the brand.' },
    { name: 'Flyashs', category: 'Travel & Booking', description: 'A travel and tourism booking experience.' },
  ],
  testimonials: [
    { quote: 'Our web and mobile app development expertise have helped organizations turn critical challenges into a competitive advantage.', name: 'KeyDevs Client', role: 'Business partner' },
  ],
  technologies: ['Android', 'iOS', 'React', 'Next.js', 'Node.js', 'Laravel', 'PHP', 'MySQL', 'MongoDB', 'AWS'],
  engagement: [
    { title: 'Part-time', description: 'Add focused development capacity to your team.' },
    { title: 'Full-time', description: 'Work with dedicated development resources.' },
    { title: 'Hourly', description: 'Get flexible support for clearly scoped tasks.' },
  ],
};
