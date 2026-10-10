export const company = {
  name: "Nexora",
  tagline: "AI systems and blockchain products that ship.",
  description:
    "Nexora builds blockchain & token infrastructure and AI-powered on-chain products — from smart contracts and tokenomics to agents that can act, settle, and prove results on-chain.",
  email: "hello@nexora.asia",
  teamSize: 50,
  focus: ["Blockchain & Tokens", "AI + Blockchain Products", "Smart Contracts"],
};

export const solutions = [
  {
    id: "blockchain-tokens",
    title: "Blockchain & token infrastructure",
    summary:
      "Smart contracts, token launches, and on-chain rails for utility tokens, governance, and real-world asset tokenization.",
    body: "We design and deploy the ledger layer your product sits on: ERC-20 / ERC-721 / ERC-1155 contracts, vesting and distribution, staking, liquidity mechanics, and multi-chain deployment. Every token model is paired with clear tokenomics so supply, unlocks, and incentives stay sustainable after launch.",
  },
  {
    id: "ai-blockchain",
    title: "AI + blockchain products",
    summary:
      "Products where AI decides and the blockchain verifies — agents, automation, and intelligent settlement in one stack.",
    body: "We connect model-driven workflows to wallets and contracts. That means AI agents that monitor data, propose actions, and execute only under on-chain rules; or products that use AI for scoring, matching, or risk while settlement and ownership stay on the ledger. You get intelligence with an audit trail.",
  },
  {
    id: "full-product",
    title: "End-to-end product delivery",
    summary:
      "Concept, UX, contracts, backend, and launch support so the protocol and the product go live together.",
    body: "A token or AI agent is not enough on its own. We ship the full surface users touch — dashboards, wallet flows, admin tools, and monitoring — so your blockchain or AI+chain idea becomes a working product, not just a whitepaper.",
  },
];

export const products = [
  {
    id: "token-launch",
    category: "Blockchain & tokens",
    title: "Token launch & tokenomics",
    explanation:
      "A token is a programmable unit of value on a blockchain. We help teams define why it exists (utility, governance, access), how supply is released, and how it moves through staking, fees, or rewards — then implement that logic in audited smart contracts.",
    examples: [
      "Utility and governance tokens",
      "Vesting, cliffs, and airdrop distribution",
      "Staking and reward pools",
      "Launchpad and liquidity setup",
    ],
  },
  {
    id: "smart-contracts",
    category: "Blockchain & tokens",
    title: "Smart contracts & DeFi modules",
    explanation:
      "Smart contracts are code that runs on-chain and cannot be quietly changed after deploy. We build modules for swaps, lending-style flows, NFT marketplaces, and custom business rules — with upgrade paths and security reviews where needed.",
    examples: [
      "Custom ERC standards and vaults",
      "NFT minting and marketplace logic",
      "Treasury and multi-sig operations",
      "Cross-chain messaging hooks",
    ],
  },
  {
    id: "rwa",
    category: "Blockchain & tokens",
    title: "RWA tokenization",
    explanation:
      "Real-world asset (RWA) tokenization turns ownership of assets like funds, invoices, or property rights into on-chain representations. We structure the contracts, custody-friendly flows, and compliance-aware product UX so assets can be issued, transferred, and reported cleanly.",
    examples: [
      "Asset-backed token design",
      "Issuance and redemption flows",
      "Investor dashboards",
      "Reporting and audit hooks",
    ],
  },
  {
    id: "ai-agents",
    category: "AI + blockchain",
    title: "On-chain AI agents",
    explanation:
      "An AI agent can read markets or documents and recommend actions. We wire those agents to blockchain settlement so important steps — transfers, claims, rebalances — happen through contracts with logs you can verify, instead of opaque off-chain automation alone.",
    examples: [
      "Trading / ops agents with on-chain execution",
      "Policy checks before a transaction",
      "Human-in-the-loop approvals",
      "Full action and settlement history",
    ],
  },
  {
    id: "intelligent-dapps",
    category: "AI + blockchain",
    title: "Intelligent dApps & platforms",
    explanation:
      "A dApp is a product whose core state lives on-chain. We build platforms that use AI for search, matching, risk scoring, or support — while balances, ownership, and critical events remain on the blockchain for transparency.",
    examples: [
      "AI-assisted DeFi or NFT experiences",
      "Risk and fraud signals before mint/trade",
      "Personalized on-chain product flows",
      "Admin tools for operators",
    ],
  },
  {
    id: "data-oracles",
    category: "AI + blockchain",
    title: "Data, oracles & verifiable AI",
    explanation:
      "Blockchains need trusted inputs; AI needs reliable data. We connect off-chain models and datasets to on-chain consumers via oracles, signatures, and evaluation pipelines so your product can use AI outputs without losing verifiability.",
    examples: [
      "Oracle-fed pricing and events",
      "Model output attestation patterns",
      "RAG systems with logged sources",
      "Monitoring and alerting",
    ],
  },
];

export const differentiators = [
  {
    title: "Tokens with a real job",
    body: "We do not ship tokens for hype alone. Every design starts from utility, distribution, and long-term incentive health.",
  },
  {
    title: "AI that can settle on-chain",
    body: "Intelligence without verification is a black box. We pair models with contracts so decisions leave a trail.",
  },
  {
    title: "Security in the delivery path",
    body: "Threat modeling, reviews, and careful upgrades are part of how we ship — not a last-minute checklist.",
  },
  {
    title: "One team for both layers",
    body: "A 50-person studio covering contracts, AI systems, and product UX — so blockchain and intelligence do not drift apart.",
  },
];

export const insights = [
  {
    id: "tokenomics-basics",
    tag: "Tokens",
    title: "What good tokenomics actually protects against",
    date: "2026-09-18",
    excerpt:
      "Supply caps, unlocks, and incentives decide whether a token supports the product — or gets farmed and abandoned.",
  },
  {
    id: "ai-onchain",
    tag: "AI + Blockchain",
    title: "How AI agents and smart contracts should share work",
    date: "2026-09-02",
    excerpt:
      "Let models propose; let contracts enforce. That split keeps automation useful without giving away custody.",
  },
  {
    id: "rwa-intro",
    tag: "Blockchain",
    title: "A practical intro to RWA tokenization for product teams",
    date: "2026-08-21",
    excerpt:
      "Tokenizing an asset is a product problem: issuance, custody, compliance UX, and redemption — not only a contract.",
  },
];
