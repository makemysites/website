// ─── Contact Information ───
export const CONTACT = {
  whatsapp: '+918074782997',
  whatsappDisplay: '+91 8074782997',
  email: 'tippaniabhinay@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abhinay-kumar-tippani/',
  github: 'https://github.com/abhinay-kumar-tippani/',
  instagram: '#',
  location: 'Hyderabad, India',
  name: 'Abhinay Kumar',
  responseTime: 'within 2 hours',
} as const;

export const WHATSAPP_URLS = {
  default: `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Abhinay, I'm interested in a website for my clinic.")}`,
  demo: `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Abhinay, I saw your demo clinic website and I'm interested in one for my clinic.")}`,
  hero: `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Abhinay, I saw your portfolio and I'm interested in a website for my clinic.")}`,
  floating: `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi, I want a website for my clinic")}`,
} as const;

// ─── Navigation ───
export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
] as const;

// ─── Hero Section ───
export const HERO = {
  availabilityText: 'Currently accepting projects for July 2026',
  label: '// HYDERABAD\'S CLINIC WEBSITE SPECIALIST',
  headline: ['Your Clinic Deserves', 'Patients — Not Just', 'A Website.'],
  subheadline: 'I build high-converting websites for doctors and clinics in Hyderabad. Designed to rank on Google, load in under 2 seconds, and turn visitors into booked appointments. Live in 72 hours.',
  trustStrip: ['72-hour delivery', '15+ clinics launched', 'Free revisions'],
} as const;

// ─── Social Proof ───
export const SOCIAL_PROOF_NAMES = [
  'Mamra Dental Studio',
  'Dr. Priya Sharma Clinic',
  'Smile Care Dental',
  'Dr. Rajan\'s Ortho Clinic',
  'City Health Polyclinic',
  'Dr. Meera Dermatology',
  'Apollo Smile Dental',
  'Dr. Reddy\'s Family Clinic',
] as const;

// ─── Problem Section ───
export const PROBLEMS = [
  {
    icon: 'search-x',
    headline: "Patients can't find you",
    body: "Over 70% of patients search online before choosing a doctor. If you're not ranking, you don't exist.",
    solution: 'SEO is built into every site I build',
  },
  {
    icon: 'alert-triangle',
    headline: 'Old design kills credibility',
    body: "Patients judge your clinic in 50 milliseconds. An outdated website says: this doctor is not up to date.",
    solution: 'Modern, trust-first design every time',
  },
  {
    icon: 'link-2-off',
    headline: "Visitors don't know what to do",
    body: "No WhatsApp button. No clear booking path. Patients leave and call your competitor.",
    solution: 'WhatsApp + call CTAs on every page',
  },
] as const;

// ─── Why Me Section ───
export const WHY_ME = [
  {
    number: '72',
    unit: 'hours',
    headline: 'Your website is live in 3 days',
    body: "Not 3 months. Not 3 weeks. From our first call to your site going live — 72 hours. I've done it 15+ times.",
  },
  {
    number: '1:1',
    unit: 'always',
    headline: 'You talk to me. Not a junior.',
    body: 'No account managers. No handoffs. When you WhatsApp me, I reply. Every day including weekends for urgent issues.',
  },
  {
    number: '∞',
    unit: 'revisions',
    headline: 'We work until you love it',
    body: "Free revisions until you're 100% satisfied. I don't close a project until you sign off. That's my word.",
  },
  {
    number: '₹15K',
    unit: 'starting',
    headline: 'Premium quality. No agency markup.',
    body: 'Agencies charge ₹50,000–₹2,00,000 for what I deliver in 72 hours. You get the same quality, minus the overhead.',
  },
] as const;

// ─── Process Section ───
export const PROCESS_STEPS = [
  {
    step: '01',
    timeBadge: 'Day 0 — 30 min',
    headline: 'We Talk on WhatsApp',
    body: "Send me a WhatsApp message. We discuss your clinic, your services, your goals. You share any photos or existing materials. That's all I need.",
    icon: 'message-circle',
  },
  {
    step: '02',
    timeBadge: 'Days 1–2',
    headline: 'I Design and Develop',
    body: "I handle everything — design, copy, development, SEO setup. You get WhatsApp updates as it comes together. No technical jargon, just progress.",
    icon: 'code-2',
  },
  {
    step: '03',
    timeBadge: 'Day 3',
    headline: 'Your Site Goes Live',
    body: 'I deploy your site, set up your domain, configure Google Search Console, and walk you through it on a call. Done.',
    icon: 'rocket',
  },
] as const;

// ─── Projects ───
export interface Project {
  title: string;
  description: string;
  type: string;
  category: 'clinic' | 'other';
  outcome?: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: 'Mamra Dental Studio',
    description: 'Complete dental clinic website with appointment booking, doctor profiles, and service listings.',
    type: 'Dental Clinic',
    category: 'clinic',
    outcome: 'Appointment inquiries increased within the first week',
    image: '/demo.png',
    liveUrl: '#',
    featured: true,
  },
  {
    title: 'Dr. Sharma Cardiology',
    description: 'Professional cardiology practice website with patient resources and Google Maps integration.',
    type: 'Cardiology Clinic',
    category: 'clinic',
    outcome: 'Patients now find the clinic directly via Google',
    image: '/demo.png',
    liveUrl: '#',
  },
  {
    title: 'Smile Care Dental',
    description: 'Modern dental practice website with WhatsApp booking, treatment galleries, and patient testimonials.',
    type: 'Dental Clinic',
    category: 'clinic',
    outcome: 'Online appointment requests doubled in 2 weeks',
    image: '/demo.png',
    liveUrl: '#',
  },
  {
    title: 'CoinPredict AI',
    description: 'AI-powered crypto signal tool that predicts when to buy, sell, or hold BTC, ETH, and SOL.',
    type: 'AI/ML Tool',
    category: 'other',
    image: '/demo.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/abhinay-kumar-tippani/',
  },
  {
    title: 'FocusFlow',
    description: 'Chrome extension that summarizes any webpage into bullet points — built for dyslexia and ADHD users.',
    type: 'Chrome Extension',
    category: 'other',
    image: '/demo.png',
    githubUrl: 'https://github.com/abhinay-kumar-tippani/FocusFlow',
  },
  {
    title: 'VJIT Study Portal',
    description: 'Academic resource portal used by 600+ students at VJIT for notes, schedules, and study material.',
    type: 'Web App',
    category: 'other',
    outcome: 'Used by 600+ students daily',
    image: '/demo.png',
    liveUrl: 'https://abhinay-kumar-tippani.github.io/VJIT-Study-Portal/',
    githubUrl: 'https://github.com/abhinay-kumar-tippani/VJIT-Study-Portal',
  },
];

// ─── Demo Section Features ───
export const DEMO_FEATURES = [
  { text: 'One-tap WhatsApp button — patients contact you instantly' },
  { text: 'Google Maps integration — they know exactly where to find you' },
  { text: 'Service sections — patients know what you treat before they call' },
  { text: 'Mobile-first — 70%+ of your visitors are on phones' },
] as const;

// ─── Stats ───
export const STATS = [
  { number: 15, suffix: '+', label: 'Clinic Websites Delivered' },
  { number: 72, suffix: 'hrs', label: 'Average Delivery Time' },
  { number: 100, suffix: '%', label: 'Client Satisfaction Rate' },
  { number: 15, suffix: 'K', prefix: '₹', label: 'Starting Price. No Monthly Fees.' },
] as const;

// ─── Testimonials ───
export const TESTIMONIALS = [
  {
    quote: "Abhinay built our clinic website in just 2 days. Our patients constantly tell us how easy it is to find us now. The WhatsApp integration alone has been worth every rupee.",
    name: 'Dr. Priya Sharma',
    clinic: 'Sharma Dental Clinic',
    location: 'Hyderabad',
    featured: true,
    // TODO: Replace with real testimonial and photo
  },
  {
    quote: "I was skeptical about getting a good website for ₹20,000. But the quality Abhinay delivered is what agencies charge ₹1 lakh for. Highly recommend.",
    name: 'Dr. Rajesh Reddy',
    clinic: 'Reddy Family Clinic',
    location: 'Secunderabad',
    // TODO: Replace with real testimonial and photo
  },
  {
    quote: "The best part? I didn't have to do anything technical. Sent my clinic details on WhatsApp, and 3 days later my website was live. It's that simple.",
    name: 'Dr. Meera Iyer',
    clinic: 'Glow Dermatology',
    location: 'Hyderabad',
    // TODO: Replace with real testimonial and photo
  },
] as const;

// ─── Pricing ───
export const PRICING_TIERS = [
  {
    name: 'Starter',
    price: '₹12,000',
    description: 'For new clinics needing a clean, simple presence',
    features: [
      '3-page website (Home, About, Contact)',
      'Mobile responsive + fast loading',
      'WhatsApp + Call button',
      'Basic on-page SEO',
      '72-hour delivery',
      '1 revision round',
    ],
    cta: 'Get Started →',
    ctaStyle: 'ghost' as const,
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '₹20,000',
    description: 'For established clinics that want full visibility',
    badge: 'Most Popular',
    features: [
      '5–7 page website',
      'Mobile-first + Lighthouse 90+',
      'WhatsApp, Call, Google Maps integration',
      'Full SEO optimization',
      'Google Analytics setup',
      '72-hour delivery',
      '3 revision rounds',
      '30 days free support',
    ],
    cta: 'WhatsApp Me →',
    ctaStyle: 'whatsapp' as const,
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '₹35,000+',
    description: 'For multi-doctor practices or clinics wanting automation',
    features: [
      'Unlimited pages',
      'Online appointment booking system',
      'AI chatbot / enquiry automation',
      'Advanced SEO + Google Ads ready',
      'Priority support',
      'Custom timeline',
      'E-commerce (if needed)',
    ],
    cta: "Let's Discuss →",
    ctaStyle: 'accent' as const,
    highlighted: false,
  },
] as const;

// ─── FAQ ───
export const FAQ_ITEMS = [
  {
    question: 'How long does it actually take?',
    answer: '72 hours from the moment I have all your content — clinic name, services, phone number, and any photos. If you can send those today, your site can be live this week.',
  },
  {
    question: 'What do I need to provide?',
    answer: "Almost nothing. Just your clinic name, the services you offer, your phone number/WhatsApp, and any photos you have (optional). I write the copy, handle the design, set up the domain, and launch. You approve before it goes live.",
  },
  {
    question: 'Can I see a demo before I pay?',
    answer: "Yes. I build a free live demo for your clinic specifically — with your actual name and services — before you commit to anything. You only pay if you love it.",
  },
  {
    question: "What if I don't like the design?",
    answer: "Free revisions until you're satisfied. I don't close the project until you give your sign-off. No time limits on revisions.",
  },
  {
    question: 'Will patients find my website on Google?',
    answer: "SEO is built into every site I build — title tags, meta descriptions, Google Search Console setup, sitemap, and page speed optimization. You won't rank overnight, but you'll have the right foundation from day 1.",
  },
  {
    question: 'What about future changes to my website?',
    answer: 'Minor text/photo updates are free for 30 days after launch. After that, small updates are ₹1,500/session. Larger additions are quoted separately.',
  },
  {
    question: "I'm not in Hyderabad. Can you still build my site?",
    answer: "Yes. I work with clients across India. We handle everything on WhatsApp and video call. Hyderabad clients just have the option to meet in person if they prefer.",
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: "I build a free demo first — you only pay once you've seen the work and approved it. The risk is entirely on my side.",
  },
] as const;

// ─── About Section ───
export const ABOUT = {
  paragraphs: [
    "I started focusing on clinic websites after realizing most doctors in Hyderabad were losing patients online — not because they weren't good doctors, but because their website was invisible, outdated, or impossible to navigate on a phone.",
    "I've since built 15+ clinic and healthcare websites across Hyderabad. I know exactly what makes a patient call, what makes them leave, and what makes them book.",
    "I'm a solo developer. When you message me, you're talking to me — not an account manager, not a junior designer. And since I'm based in Hyderabad, we can meet over chai if you'd prefer.",
  ],
  signature: '— Abhinay Kumar, MakeMySites.in',
} as const;

// ─── Achievements ───
export const ACHIEVEMENTS = [
  { icon: '🏆', title: '1st Place — ACM Competition', description: 'Secured first position in competitive programming conducted by ACM' },
  { icon: '🚀', title: 'GIG-A-THON Hackathon Winner', description: 'Won the GIG-A-THON hackathon competing against teams across the region' },
  { icon: '⭐', title: 'Google Arcade Legend — Season 2', description: 'Achieved Legend Tier with 95 Arcade points in Google Skills Arcade 2025' },
  { icon: '📜', title: 'Infosys Springboard Certified', description: 'Certified in Java and Database Management Systems by Infosys' },
] as const;

// ─── Services Footer ───
export const FOOTER_SERVICES = [
  'Clinic & Doctor Websites',
  'Landing Pages',
  'SEO Optimization',
  'AI Integration',
  'E-Commerce',
] as const;

// ─── Contact Form Options ───
export const SPECIALTY_OPTIONS = [
  'General Physician',
  'Dentist',
  'Dermatologist',
  'Orthopedic',
  'Gynecologist',
  'Cardiologist',
  'Pediatrician',
  'Other',
] as const;

export const NEED_OPTIONS = [
  'New Website',
  'Redesign Existing Site',
  'SEO Only',
  'Not Sure Yet',
] as const;

export const BUDGET_OPTIONS = [
  'Under ₹15K',
  '₹15K–₹25K',
  '₹25K+',
  'Let Abhinay suggest',
] as const;
