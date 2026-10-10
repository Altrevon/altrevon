export type Dictionary = {
  skip: string;
  trustBar: string;
  nav: {
    services: string;
    products: string;
    howItWorks: string;
    insights: string;
    careers: string;
    speak: string;
  };
  theme: { light: string; dark: string; toggle: string };
  language: string;
  hero: { eyebrow: string; ctaPrimary: string; ctaSecondary: string };
  focus: { label: string; items: string[] };
  platform: { kicker: string; title: string; lede: string; more: string };
  products: {
    kicker: string;
    title: string;
    lede: string;
    chainLabel: string;
    chainTitle: string;
    chainIntro: string;
    aiLabel: string;
    aiTitle: string;
    aiIntro: string;
  };
  solutions: { kicker: string; title: string; lede: string; more: string };
  apart: { kicker: string; title: string };
  insights: { kicker: string; title: string; viewAll: string };
  careersTeaser: { kicker: string; title: string; body: string; cta: string };
  contact: {
    title: string;
    lede: string;
    name: string;
    email: string;
    company: string;
    budget: string;
    message: string;
    budgetOptions: {
      undecided: string;
      under25: string;
      mid: string;
      high: string;
      plus: string;
    };
    messagePlaceholder: string;
    submit: string;
    sending: string;
    orReach: string;
  };
  footer: {
    products: string;
    company: string;
    focus: string;
    tokens: string;
    aiChain: string;
    rwa: string;
    about: string;
    careers: string;
    insights: string;
    contact: string;
    privacy: string;
    terms: string;
    rights: string;
    blurb: string;
  };
  careersPage: {
    kicker: string;
    seeRoles: string;
    talk: string;
    whyJoin: string;
    howWeWork: string;
    openRoles: string;
    currentOpenings: string;
    responsibility: string;
    idealBudget: string;
    apply: string;
    noRoleTitle: string;
    noRoleBody: string;
  };
  notFound: { title: string; body: string; home: string; careers: string };
  loading: string;
};

const en: Dictionary = {
  skip: "Skip to content",
  trustBar: "Blockchain & token systems · AI + on-chain products · Smart contracts that ship.",
  nav: {
    services: "Services",
    products: "Products",
    howItWorks: "How it works",
    insights: "Insights",
    careers: "Careers",
    speak: "Speak with us",
  },
  theme: {
    light: "Light mode",
    dark: "Dark mode",
    toggle: "Toggle theme",
  },
  language: "Language",
  hero: {
    eyebrow: "Blockchain · Tokens · AI on-chain",
    ctaPrimary: "Talk to our team",
    ctaSecondary: "Explore solutions",
  },
  focus: {
    label: "Project types we deliver",
    items: [
      "Token launches",
      "Smart contracts",
      "Tokenomics",
      "RWA tokenization",
      "AI agents on-chain",
      "Intelligent dApps",
    ],
  },
  platform: {
    kicker: "How we help",
    title: "Three clear delivery lines",
    lede: "Most clients come to us for one of two needs: launch or operate a blockchain/token system, or build a product where AI and the blockchain work together. We also wrap both into a full product if you need the complete path to launch.",
    more: "See details →",
  },
  products: {
    kicker: "What we build",
    title: "Blockchain, tokens, and AI that work on-chain",
    lede: "Plainly: we build the ledger pieces (contracts, tokens, tokenization) and the intelligent products that use them (AI agents, smart dApps, verifiable data). Below is how each line of work fits together.",
    chainLabel: "Blockchain & tokens",
    chainTitle: "Ledger products you can launch",
    chainIntro:
      "If you need a token, a contract suite, or an asset represented on-chain, this is the foundation. We explain the economics, then encode them so investors and users can trust the rules.",
    aiLabel: "AI + blockchain",
    aiTitle: "Intelligence with on-chain proof",
    aiIntro:
      "If your product should think and settle, we connect models to wallets and contracts. AI handles judgment; the blockchain records ownership, payments, and irreversible steps.",
  },
  solutions: {
    kicker: "In depth",
    title: "What each engagement covers",
    lede: "Short explanations of the work — so you can see whether you need a token/contracts track, an AI+chain product, or the full stack.",
    more: "Explore related products →",
  },
  apart: {
    kicker: "Why Nexora",
    title: "What sets us apart",
  },
  insights: {
    kicker: "Insights",
    title: "Read the latest",
    viewAll: "View all →",
  },
  careersTeaser: {
    kicker: "Careers",
    title: "Join a {n}-person team shipping AI and chain infrastructure.",
    body: "Open roles across engineering, AI systems, and protocol design — for people who want ownership, not ceremony.",
    cta: "View open roles →",
  },
  contact: {
    title: "Starting a token, contract suite, or AI+chain product?",
    lede: "Tell us what you want to launch. We'll map tokenomics, contracts, AI workflows, and a realistic path to production.",
    name: "Full name",
    email: "Work email",
    company: "Company",
    budget: "Budget range",
    message: "Project brief",
    budgetOptions: {
      undecided: "Not sure yet",
      under25: "Under $25,000",
      mid: "$25,000 – $75,000",
      high: "$75,000 – $150,000",
      plus: "$150,000+",
    },
    messagePlaceholder: "What are you building, and what does success look like?",
    submit: "Speak with us",
    sending: "Sending…",
    orReach: "Or reach us at",
  },
  footer: {
    products: "Products",
    company: "Company",
    focus: "Focus",
    tokens: "Tokens & contracts",
    aiChain: "AI + blockchain",
    rwa: "RWA tokenization",
    about: "About",
    careers: "Careers",
    insights: "Insights",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
    rights: "All rights reserved.",
    blurb: "A {n}-person studio for blockchain, tokens, and AI+on-chain products.",
  },
  careersPage: {
    kicker: "Careers",
    seeRoles: "See open roles",
    talk: "Talk to us",
    whyJoin: "Why join",
    howWeWork: "How we work",
    openRoles: "Open roles",
    currentOpenings: "Current openings",
    responsibility: "Responsibility",
    idealBudget: "Ideal budget",
    apply: "Apply →",
    noRoleTitle: "Don't see the right role?",
    noRoleBody:
      "We're always interested in exceptional people. Send a note with your focus area and a few links to work you're proud of.",
  },
  notFound: {
    title: "Page not found",
    body: "The page you're looking for doesn't exist or has moved.",
    home: "Back to home",
    careers: "Careers",
  },
  loading: "Loading Nexora…",
};

export default en;
