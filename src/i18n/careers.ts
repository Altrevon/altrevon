import type { CareersData } from "@/lib/api";
import type { Locale } from "./types";

type OpeningI18n = {
  title: string;
  team: string;
  type: string;
  location: string;
  summary: string;
  responsibility: string;
  budget: string;
};

const openingsByLocale: Record<Locale, Record<string, OpeningI18n>> = {
  en: {},
  zh: {
    "senior-smart-contract-engineer": {
      title: "高级智能合约工程师",
      team: "区块链",
      type: "全职",
      location: "远程",
      summary: "设计、实现并加固 DeFi、RWA 与结算系统的生产级合约。",
      responsibility: "负责合约架构，编写与评审 Solidity，主导审计并安全推进升级。",
      budget: "$120k – $180k 美元",
    },
    "ai-systems-engineer": {
      title: "AI 系统工程师",
      team: "AI",
      type: "全职",
      location: "远程",
      summary: "为受监管产品环境构建代理运行时、RAG 流水线与评估闭环。",
      responsibility: "设计代理工作流，连接模型与链上动作，并保障评估质量。",
      budget: "$110k – $170k 美元",
    },
    "full-stack-engineer": {
      title: "全栈工程师",
      team: "产品",
      type: "全职",
      location: "远程",
      summary: "打造连接钱包、API 与 AI 工作流的完整产品体验。",
      responsibility: "构建前后端，集成钱包/合约，并提升产品稳定性。",
      budget: "$100k – $155k 美元",
    },
    "protocol-designer": {
      title: "协议与产品设计师",
      team: "设计",
      type: "全职",
      location: "远程",
      summary: "为复杂 Web3 与 AI 产品塑造代币机制、UX 流程与系统叙事。",
      responsibility: "定义代币/产品流程，设计清晰 UX，并与工程协作至上线。",
      budget: "$95k – $145k 美元",
    },
  },
  es: {
    "senior-smart-contract-engineer": {
      title: "Ingeniero Senior de Smart Contracts",
      team: "Blockchain",
      type: "Tiempo completo",
      location: "Remoto",
      summary:
        "Diseña, implementa y endurece contratos de producción para DeFi, RWA y sistemas de liquidación.",
      responsibility:
        "Liderar arquitectura de contratos, escribir y revisar Solidity, dirigir auditorías y desplegar upgrades seguros.",
      budget: "$120k – $180k USD",
    },
    "ai-systems-engineer": {
      title: "Ingeniero de Sistemas AI",
      team: "AI",
      type: "Tiempo completo",
      location: "Remoto",
      summary:
        "Construye runtimes de agentes, pipelines RAG y bucles de evaluación para entornos regulados.",
      responsibility:
        "Diseñar flujos de agentes, conectar modelos a acciones on-chain y mantener alta calidad de evaluación.",
      budget: "$110k – $170k USD",
    },
    "full-stack-engineer": {
      title: "Ingeniero Full-Stack",
      team: "Producto",
      type: "Tiempo completo",
      location: "Remoto",
      summary:
        "Entrega superficies de producto que conectan wallets, APIs y flujos AI en experiencias coherentes.",
      responsibility:
        "Construir frontend y APIs, integrar wallets/contratos y mejorar la confiabilidad del producto.",
      budget: "$100k – $155k USD",
    },
    "protocol-designer": {
      title: "Diseñador de Protocolo y Producto",
      team: "Diseño",
      type: "Tiempo completo",
      location: "Remoto",
      summary:
        "Define mecánicas de token, flujos UX y narrativas de sistema para productos Web3 y AI complejos.",
      responsibility:
        "Definir flujos de token/producto, diseñar UX clara y colaborar con ingeniería hasta el lanzamiento.",
      budget: "$95k – $145k USD",
    },
  },
};

const introByLocale: Record<Locale, { headline: string; lede: string }> = {
  en: {
    headline: "Build the rails of intelligent systems.",
    lede: "Nexoryna is a 50-person studio shipping AI and blockchain infrastructure. We hire people who care about craft, clarity, and systems that hold up in production.",
  },
  zh: {
    headline: "构建智能系统的基础设施。",
    lede: "Nexoryna 是一支 50 人团队，专注交付 AI 与区块链基础设施。我们寻找重视工艺、清晰度与生产级系统的人。",
  },
  es: {
    headline: "Construye las vías de los sistemas inteligentes.",
    lede: "Nexoryna es un estudio de 50 personas que entrega infraestructura AI y blockchain. Contratamos a quienes cuidan el oficio, la claridad y los sistemas que aguantan en producción.",
  },
};

const benefitsByLocale: Record<Locale, { title: string; body: string }[]> = {
  en: [],
  zh: [
    {
      title: "真实所有权",
      body: "小团队、直接客户影响，从第一天起就承担真实架构责任。",
    },
    {
      title: "深入技术工作",
      body: "代理、智能合约、协议设计与基础设施——不是 PPT。",
    },
    {
      title: "资深环境",
      body: "与工程师、研究员、设计师共事，每一轮迭代都提升标准。",
    },
    {
      title: "灵活协作",
      body: "支持远程协作，节奏清晰、异步写作与专注时间有保障。",
    },
  ],
  es: [
    {
      title: "Ownership real",
      body: "Equipos pequeños, impacto directo con clientes y responsabilidad arquitectónica desde el día uno.",
    },
    {
      title: "Trabajo técnico profundo",
      body: "Agentes, smart contracts, diseño de protocolos e infraestructura — no diapositivas.",
    },
    {
      title: "Entorno senior",
      body: "Trabaja con ingenieros, investigadores y diseñadores que elevan el nivel cada sprint.",
    },
    {
      title: "Entrega flexible",
      body: "Colaboración remota con rituales claros, escritura async y tiempo de foco.",
    },
  ],
};

export function localizeCareers(data: CareersData, locale: Locale): CareersData {
  const intro = introByLocale[locale];
  const benefits = benefitsByLocale[locale];
  const map = openingsByLocale[locale];

  return {
    intro: {
      ...data.intro,
      headline: intro.headline,
      lede: intro.lede,
    },
    benefits: benefits.length ? benefits : data.benefits,
    openings: data.openings.map((role) => {
      const t = map[role.id];
      if (!t) return role;
      return { ...role, ...t };
    }),
  };
}
