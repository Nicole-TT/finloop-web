import { useState } from 'react';
import { Link } from 'react-router-dom';

type Item = { title: string; copy: string };
type Product = Item & { meta: string; href?: string };
type Config = {
  key: string;
  eyebrow: string;
  title: string;
  intro: string;
  tags: string[];
  audience: string;
  situationTitle: string;
  situations: Item[];
  scenarios: Item[];
  panorama: Item[];
  capabilities: Item[];
  products: Product[];
  steps: Item[];
  proof: Item[];
  faq: Item[];
  boundary: string;
  ctaTitle: string;
  cta: string;
  secondary?: { label: string; href: string };
  recommendations: { label: string; href: string }[];
};

const configs: Record<string, Config> = {
  wealth: {
    key: 'wealth', eyebrow: 'DIGITAL WEALTH MANAGEMENT', title: '从财富业务搭建到规模化运营，构建一体化数字财富平台',
    intro: '连接客户与账户、全品类财富产品、投资交易、资产管理、合规运营和 AI 能力，支持机构启动新业务，也支持在现有系统上按需升级。',
    tags: ['统一财富核心', '机构与投资者双端', '全流程运营', 'AI Native'], audience: '银行、券商、财富与资管机构、EAM、家族办公室',
    situationTitle: '财富业务的难点，不只是再增加一个系统',
    situations: [
      { title: '数据与流程割裂', copy: '客户、账户、产品、订单和持仓分散，难以形成统一视图。' },
      { title: '产品连接成本高', copy: '新产品与上游机构逐一接入，建设周期和持续维护压力较大。' },
      { title: '双端体验不连续', copy: '机构端操作和投资者端状态依赖人工同步。' },
      { title: '合规与 AI 未进入业务链', copy: '准入、适当性、交易和结单缺少连续留痕，AI 仍停留在问答工具。' },
    ],
    scenarios: [
      { title: '快速搭建财富平台', copy: '从核心平台、运营后台到 App / H5，形成完整业务能力。' },
      { title: '升级现有财富系统', copy: '保留现有账户或渠道系统，通过模块和 API 补齐关键能力。' },
      { title: '专业机构交易与管理', copy: '将产品、询价、订单、客户和资产集中到日常工作流。' },
      { title: '构建 AI Native 运营', copy: '将 AI 嵌入产品、资讯、订单、对账和业务决策流程。' },
    ],
    panorama: [
      { title: '客户体验层', copy: '白标财富 / 股票 App、H5 与投资者端' }, { title: '机构业务层', copy: 'FinEAM 与 Web Portal 承接客户、产品、询价、订单和运营' },
      { title: '财富核心层', copy: 'FinOne 统一账户、产品、交易、资产与多终端支撑' }, { title: '交易与运营底座', copy: 'FinMix 提供交易清结算、数据治理和上游机构连接' },
      { title: '产品与合规基础', copy: '财富产品生态、适用的持牌金融基础设施与外部系统' },
    ],
    capabilities: [
      { title: '客户与账户', copy: '数字开户、客户资料、KYC / AML、PI、风险评估与持续状态管理。' }, { title: '产品与货架', copy: '连接现金管理、基金、结构性产品、债券、保险及 RWA 等产品供给。' },
      { title: '询价与交易', copy: '支持产品查询、RFQ、报价比较、订单提交和状态跟踪。' }, { title: '资产与组合', copy: '统一呈现持仓、资产、投资组合、资金流水、结单及报告。' },
      { title: '合规与运营', copy: '将客户准入、适当性、审批、交易、托管与结单纳入统一链路。' }, { title: 'AI Native', copy: '将市场资讯、产品洞察、运营辅助、订单与对账能力嵌入工作流。' },
    ],
    products: [
      { title: '完整自有品牌财富平台', meta: 'FinOne + 白标 App / H5 + FinMix', copy: '从客户终端到核心交易与运营形成完整能力。', href: '/products/finone' },
      { title: 'EAM / 家办一体化管理', meta: 'FinEAM + Web Portal + FinOne / FinMix', copy: '连接机构运营、投资交易与投资者体验。', href: '/products/fineam' },
      { title: '已有系统的模块补齐', meta: 'Web Portal / API + FinOne / FinMix', copy: '保留现有前端和部分核心系统，按需接入。', href: '/products/web-portal' },
      { title: '财富业务 AI 升级', meta: 'FinOne / FinEAM AI Native + 星路通 / Agent', copy: '让 AI 进入产品研究、风险、运营与服务节点。', href: '/ai' },
    ],
    steps: ['业务与系统诊断', '方案与模块设计', '配置与系统连接', '测试与上线', '运营与迭代'].map((title, i) => ({ title, copy: ['确认客群、产品范围、现有系统和合规边界。', '确定产品组合、终端、接口、数据与权限架构。', '完成品牌配置、产品接入、联调、迁移和流程配置。', '完成业务验收、安全测试、培训及上线准备。', '根据产品扩展、用户反馈和业务数据持续优化。'][i] })),
    proof: [{ title: '公司生态数据', copy: '8,000+ 传统财富管理产品、250+ 专业机构客户；属公司级口径，数据日期待确认。' }, { title: '自研核心与底座', copy: 'FinOne 财富核心与 FinMix 交易运营底座形成端到端支撑。' }, { title: '真实案例', copy: 'EAM / 家办、证券或财富机构及白标 App 案例待完成公开授权与口径核验。' }],
    faq: ['可以只接入某个模块吗？', '是否支持保留现有客户或核心系统？', '支持 App、H5 和 API 哪些终端形态？', '品牌和 UI 定制的边界是什么？', '当前支持哪些财富产品和市场？', '部署方式、项目周期和后续运营如何安排？'].map(title => ({ title, copy: '需根据现有系统、目标市场、产品范围与合规边界共同评估；标准能力与定制范围以最终方案为准。' })),
    boundary: '产品支持范围、部署周期、持牌主体与合规职责需在项目评估后确认。', ctaTitle: '从你的现有业务出发，规划下一步财富平台能力', cta: '预约财富业务方案咨询', secondary: { label: '查看 FinOne', href: '/products/finone' }, recommendations: [{ label: '嵌入式财富', href: '/solutions/embedded-wealth' }, { label: '企业 AI 落地', href: '/solutions/enterprise-ai' }],
  },
  embedded: {
    key: 'embedded', eyebrow: 'EMBEDDED WEALTH', title: '把财富服务嵌入你的现有平台', intro: '通过 H5、API 或品牌化终端，将开户、产品、认购赎回、持仓和运营能力接入已有用户场景，减少从零建设财富系统的时间与复杂度。',
    tags: ['H5 接入', 'API / SDK', '品牌化终端', '连续用户体验'], audience: '支付机构、跨境支付平台、数字平台、互联网平台与拥有成熟用户场景的合作伙伴',
    situationTitle: '从零建设财富业务的隐性成本', situations: ['跨机构连接产品、账户、交易、持仓与清结算', '开户、适当性、KYC / AML 与信息披露', '新建后台、客户端与运营体系', '独立财富 App 切断原有品牌与用户关系'].map((title) => ({ title, copy: '嵌入式方案将需要单独建设的能力收敛为可组合的接入与运营路径。' })),
    scenarios: [{ title: '支付平台增加理财服务', copy: '在支付、余额或资金管理场景增加财富入口。' }, { title: '跨境平台延伸资金服务', copy: '连接多币种资金流程、产品、账户与合规。' }, { title: '数字平台拓展服务边界', copy: '在现有会员或高价值用户体系中增加财富服务。' }, { title: '金融机构补充特定模块', copy: '以模块化 API 接入特定产品或交易能力。' }],
    panorama: [{ title: '已有平台', copy: '自有 App、支付或数字用户场景' }, { title: '嵌入体验', copy: 'H5、API / SDK 或品牌化前端承接开户、产品、交易与资产' }, { title: '财富核心', copy: 'FinOne 承接统一账户、产品、订单与资产能力' }, { title: '交易与运营底座', copy: 'FinMix 连接产品、清结算、数据与运营' }, { title: '金融与产品生态', copy: '按实际合作结构连接上游机构与适用持牌基础设施' }],
    capabilities: [{ title: '用户与账户衔接', copy: '连接现有登录和用户体系，承接适用的开户、身份及账户流程。' }, { title: '财富产品接入', copy: '将适用的现金管理、基金及其他财富产品引入已有场景。' }, { title: '交易与状态管理', copy: '支持认购、赎回、订单状态和结果回传。' }, { title: '资产与报告', copy: '展示持仓、资产、交易记录、资金流水和结单。' }, { title: '品牌与体验配置', copy: '在约定范围内适配 Logo、品牌色、入口、导航及页面体验。' }, { title: '运营与合规支持', copy: '为产品配置、用户管理、交易运营、信息披露和留痕提供后台能力。' }],
    products: [{ title: '嵌入式 H5', meta: '低前端改造·完整流程', copy: '适合期望较快接入且前端资源有限的平台。' }, { title: '模块化 API / SDK', meta: '高前端控制·灵活组合', copy: '适合由自身团队控制前端体验和业务编排的平台。' }, { title: '品牌化终端', meta: '自有品牌·端到端能力', copy: '适合希望推出相对独立、保持自有品牌财富体验的机构。', href: '/products/white-label-app' }],
    steps: ['场景评估', '责任边界', '接入选型', '联调验收', '上线运营'].map((title, i) => ({ title, copy: ['确认目标用户、业务入口、产品范围和商业模式。', '确认客户关系、账户、资金、交易、数据与合规职责。', '确定 H5、API / SDK 或品牌化终端及模块范围。', '完成认证、数据、状态、异常处理和前端体验联调。', '完成产品配置、运营培训、监控与持续迭代。'][i] })),
    proof: [{ title: '案例待公开授权', copy: '首期将优先补充支付平台在原 App 中嵌入财富模块的完整案例。' }, { title: '实施信息待确认', copy: '接入方式、上线范围、双方分工、周期和结果仅使用已核验口径。' }],
    faq: ['嵌入式 H5 和白标 App 有什么区别？', '可以只接入产品货架或交易模块吗？', '如何与现有登录、会员和账户体系连接？', '用户和交易数据如何回传？', '开户、KYC / AML、资金和交易责任如何划分？', 'API、SDK、沙箱、SLA 和技术支持如何提供？'].map(title => ({ title, copy: '具体方式需根据平台架构、目标市场、前端控制要求和适用监管责任共同确认。' })),
    boundary: '一般企业直接管理自身现金与资产的需求，应进入“企业财富管理”，不属于嵌入式财富。', ctaTitle: '在你的现有场景中，找到合适的财富接入方式', cta: '评估嵌入式财富接入方案', secondary: { label: '查看技术接入能力', href: '/technology-platform' }, recommendations: [{ label: '财富管理数字化', href: '/solutions/digital-wealth-management' }, { label: '企业财富管理', href: '/solutions/corporate-treasury' }, { label: 'RWA 与 Web3', href: '/solutions/rwa-web3' }],
  },
};

const compactConfigs: Record<string, Omit<Config, 'key'>> = {
  treasury: {
    eyebrow: 'CORPORATE TREASURY & WEALTH MANAGEMENT', title: '统一管理企业现金、投资与资产', intro: '通过星企通连接企业开户、资金流转、现金管理、财富产品交易和资产报告，在流动性、风险与资金使用效率之间做出更清晰的管理决策。', tags: ['企业现金管理', '多币种资金', '投资与资产视图', '数字化运营'], audience: '中小企业、大型企业、跨境企业、企业 PI、企业财资与财务团队',
    situationTitle: '企业资金分散、看不清，也难以及时行动', situations: ['不同账户和币种缺少统一视图', '运营流动性与闲置资金管理难平衡', '产品、交易、流水和报告分散', '产品流动性、风险和到账规则难比较'].map(title => ({ title, copy: '以 CFO 与财资人员的日常任务为主线，建立更连续的资金视图与操作流程。' })),
    scenarios: [{ title: '企业现金管理', copy: '识别可用现金和短期闲置资金，兼顾流动性、风险与资金效率。' }, { title: '多币种与跨境资金', copy: '集中查看适用币种和跨境业务资金状态。' }, { title: '企业投资与财富管理', copy: '将风险评估、交易、赎回和持仓管理纳入统一平台。' }, { title: '财资运营与报告', copy: '提高日常对账、汇报和决策效率。' }],
    panorama: [{ title: '企业使用平台', copy: '星企通：企业现金与财富管理入口' }, { title: '专项解决方案', copy: '利即达及适用的现金管理方案' }, { title: '财富与交易能力', copy: 'FinOne / FinMix 支撑账户、产品、交易、清结算和数据' }, { title: '产品与金融服务', copy: '适用的现金管理、基金及其他财富产品与持牌金融服务' }],
    capabilities: ['企业在线开户', '资金管理', '产品与交易', '资产与明细', '账户与权限', '运营与服务'].map(title => ({ title, copy: '将企业资料、账户、资金操作、风险评估、交易状态与报告纳入连续的数字流程。' })),
    products: [{ title: '星企通', meta: '企业专属平台', copy: '面向企业开户、资金、投资和报告的独立业务体验。', href: '/products/xingqitong' }, { title: '现金管理专项能力', meta: '利即达·货币基金', copy: '按币种、流动性、风险和预计使用时间选择适用方案。' }, { title: 'FinOne / FinMix', meta: '底层支撑', copy: '提供账户、产品、交易、清结算和数据能力。' }],
    steps: ['企业在线提交资料', '账户与合规审核', '绑定账户与资金操作', '查看现金管理与财富产品', '风险评估与交易', '持续资产管理与报告'].map(title => ({ title, copy: '具体资料、操作和审核范围按当前适用业务与监管要求确认。' })),
    proof: [{ title: '企业专属平台', copy: '星企通并非零售 App，而是围绕企业自身资金管理任务构建。' }, { title: '案例待核验', copy: '跨境企业多币种资金管理与从分散操作迁移到星企通的案例待补充。' }],
    faq: ['哪些类型的企业可以使用星企通？', '企业开户需要准备哪些资料？', '当前支持哪些币种、市场和产品？', '如何进行入金、出金、申购和赎回？', '现金管理产品的流动性、风险和费用如何说明？', '星企通与嵌入式财富有什么区别？'].map(title => ({ title, copy: '实际支持范围取决于企业类型、注册地、目标市场、产品规则和当前适用条件。' })),
    boundary: '本页仅聚焦企业管理自身现金、投资和资产；不属于面向外部用户的嵌入式财富，也不包含企业作为 RWA 资产方的场景。', ctaTitle: '从企业当前的现金与资金结构出发，找到更合适的管理方案', cta: '预约企业资金方案咨询', secondary: { label: '了解星企通', href: '/products/xingqitong' }, recommendations: [{ label: '企业 AI 落地', href: '/solutions/enterprise-ai' }, { label: 'RWA 与 Web3', href: '/solutions/rwa-web3' }],
  },
  rwa: {
    eyebrow: 'RWA & WEB3 SOLUTIONS', title: '让真实资产走向合规发行与数字化分销', intro: '从资产设计、Tokenization 与链上部署，到投资者准入、钱包、KYT、交易运营和产品分销，构建连接 Web2 与 Web3 的完整 RWA 能力。', tags: ['资产与发行', '产品接入与分销', 'KYC / KYT', 'Web2 × Web3'], audience: '资产方、基金及资产管理人、金融机构、VASP、交易所、钱包与财富平台',
    situationTitle: 'RWA 不是“发行一个 Token”', situations: ['现实资产与权利识别', '产品与法律结构', '合规、尽调与投资者准入', '认购、结算、持份与持续运营'].map(title => ({ title, copy: '链上技术只是其中一环，这些能力需要在同一业务链路中持续管理。' })),
    scenarios: [{ title: '我有资产，需要代币化与发行', copy: '从项目与资产评估、产品及法律结构，到 Tokenization、链上部署、发行与生命周期管理。' }, { title: '我需要接入或分销 RWA 产品', copy: '从产品筛选与上架、H5 / API 接入，到准入、钱包、KYT、认购、报告与赎回。' }],
    panorama: [{ title: 'RWA H5', copy: '承接产品展示、投资者触达和分销' }, { title: 'FinOne', copy: '承接 ToC 财富业务、账户、产品及分销运营' }, { title: 'FinMix', copy: '承接 ToB 账户、交易、清结算、数据治理与底层运营' }, { title: 'FinTaaS', copy: '提供真实资产上链与资产代币化技术服务' }, { title: '适用的持牌体系', copy: '按具体合作和司法辖区承接适用的金融业务环节' }],
    capabilities: [{ title: '资产与 Token', copy: 'Tokenization、链上部署、智能合约与 Token 生命周期。' }, { title: '客户与钱包', copy: '客户钱包管理、角色权限、Micropayment 与钱包绑定。' }, { title: '风险与合规', copy: '链上 AML / KYT、定制 KYT Gateway 和交易风险监控。' }, { title: '资金与流转', copy: 'Token-In / Out、On & Off-Ramp 与适用的多币种结算。' }],
    products: [{ title: '资产代币化与发行路径', meta: '资产评估 → 产品结构 → Tokenization → 准入 → 生命周期', copy: '项目是否受理、支持链与技术标准需经业务、法律及合规评估。' }, { title: 'RWA 产品接入与分销路径', meta: '产品上架 → H5 / API → KYC / KYT → 结算 → 报告与赎回', copy: '可通过 RWA H5、API 或合作平台实现产品触达和分销。' }],
    steps: ['角色与项目评估', '产品、法律与合规结构', '技术与系统连接', '准入、交易与结算设计', '上线与持续运营'].map(title => ({ title, copy: '按资产类型、目标市场、投资者、平台现状和司法辖区确认具体交付范围。' })),
    proof: [{ title: '案例候选池', copy: '泰康资管香港与 OSL 相关代币化份额项目、ChinaAMC Solana ETF 分销及港股表现挂钩 Token 技术方案。' }, { title: '对外状态待核验', copy: '项目主体、合作性质、公开链接、时间、产品状态和 Logo 授权需上线前确认。' }],
    faq: ['哪些类型的现实资产适合开展 RWA 项目？', '星路提供技术、发行还是分销服务？', 'FRP 与单一 Tokenization 平台有什么区别？', '支持哪些区块链、Token 标准和钱包？', '如何进行 KYC、KYT、钱包绑定及投资者准入？', 'RWA 产品可以通过哪些方式接入现有平台？'].map(title => ({ title, copy: '具体能力取决于资产结构、产品形态、目标投资者、支持市场与司法辖区，需通过项目评估确认。' })),
    boundary: 'FRP 是 RWA H5、FinOne、FinMix、FinTaaS 与适用金融基础设施协同形成的方案体系，不是单一 SaaS 产品；不使用“保证合规”等无边界表述。', ctaTitle: '从你的 RWA 角色出发，进入下一步', cta: '发起资产与发行项目评估', secondary: { label: '咨询 RWA 产品接入', href: '/contact' }, recommendations: [{ label: '嵌入式财富', href: '/solutions/embedded-wealth' }, { label: '财富管理数字化', href: '/solutions/digital-wealth-management' }],
  },
  ai: {
    eyebrow: 'ENTERPRISE AI TRANSFORMATION', title: '让 AI 从试验走进真实业务流程', intro: '由 FDE 团队深入业务一线，结合 Finloop AI 技术底座，连接模型、企业知识、数据、Agent 与现有系统，从高价值场景识别、原型验证到系统集成和持续运营，推动 AI 进入生产环境。', tags: ['FDE 深入业务', 'Agent 与 Workflow', '企业数据连接', '安全治理', '持续运营'], audience: '金融机构、企业、数字化团队、业务部门、研发团队、数据与 AI 团队',
    situationTitle: '为什么 AI 项目停在 POC', situations: [{ title: 'Demo 多，使用率低', copy: '场景来自技术展示，没有嵌入角色任务与决策节点。' }, { title: '知识能问答，无法执行', copy: '知识、权限、工具和业务流程没有连接。' }, { title: '模型与 Agent 分散采购', copy: 'API、成本、账号、数据和风险缺少统一治理。' }, { title: '上线后效果不稳定', copy: '缺少评测、监控、反馈和持续运营机制。' }],
    scenarios: [{ title: '金融产品与投研', copy: '产品资料提取、KYP、产品比较、研究与配置辅助。' }, { title: '风险与合规', copy: '风险信息识别、异常提示、规则核查和审计辅助。' }, { title: '客户服务与销售支持', copy: '知识检索、方案准备、客户问题处理和会前会后任务。' }, { title: '运营与数据', copy: '取数查询、报告、对账、任务编排和异常跟踪。' }, { title: '内容、市场与研发', copy: '将资讯、社媒洞察、内容生产、AI 编程与文档协作纳入可评估场景。' }],
    panorama: [{ title: '业务应用', copy: 'FAI、星路通、企业 AI 客服、财富平台 AI Native 与定制应用' }, { title: 'Agent 层', copy: '将新闻、产品洞察、投研、文书、取数等能力封装为 Agent / Skills' }, { title: 'AI 运营平台 PaaS', copy: '统一管理权限、编排、Workflow、数据、知识、评测和审计' }, { title: '星智通 MaaS', copy: '多模型聚合、统一 API、路由、计费和模型服务' }, { title: '企业连接层', copy: 'API、MCP、数据库、知识库和现有业务系统' }],
    capabilities: [{ title: 'AI 基础与模型治理', copy: '统一模型接入、智能路由、成本、额度、密钥、权限和调用日志。' }, { title: '企业知识与数据连接', copy: '连接资料、知识库、数据库、业务系统及实时数据。' }, { title: '业务 Agent 与 Skills', copy: '围绕具体角色任务构建可调用工具、可协同和可复用的 Agent。' }, { title: 'Agent Workflow 与系统集成', copy: '将 AI 接入审批、任务、客服、投研、运营、内容和研发流程。' }, { title: '治理与 AI 运营', copy: '覆盖账号、权限、评测、监控、审计、成本和持续优化。' }],
    products: [{ title: 'AI 场景诊断', meta: '场景地图·价值/可行性矩阵·路线图', copy: '适合尚未确定优先场景或已有大量分散需求的企业。' }, { title: '首批场景共建', meta: 'Workflow·Agent / Skills·评测与上线', copy: '适合已有明确场景，需要验证并接入真实系统的团队。' }, { title: '企业级平台与运营', meta: 'MaaS / PaaS·权限·成本·监控·审计', copy: '适合多团队规模化使用和治理 AI 能力。', href: '/ai' }],
    steps: [{ title: 'Discover｜识别场景', copy: '访谈业务角色，梳理高频、高成本、高风险或强决策价值工作。' }, { title: 'Prioritize｜评估优先级', copy: '结合业务价值、数据条件、流程复杂度、风险和成本选择场景。' }, { title: 'Design｜重构工作流', copy: '明确人、Agent、系统和审批节点的职责。' }, { title: 'Build｜连接与构建', copy: '连接模型、知识、数据、API / MCP 和业务系统。' }, { title: 'Deploy｜治理上线', copy: '配置权限、评测、安全、日志、审计、灰度发布和培训。' }, { title: 'Operate｜持续运营', copy: '监控使用、成本、质量和业务结果，持续迭代。' }],
    proof: [{ title: '金融专业场景优先', copy: '优先补充 KYP 报告、GAP 分析、风险预警或企业知识与任务协作案例。' }, { title: '结果口径待授权', copy: '使用角色、原始流程、连接系统、人机分工、使用频率和业务结果需完成客户授权。' }],
    faq: ['FDE-AI 与购买一个 AI 产品有什么区别？', '如何选择首批最值得落地的 AI 场景？', '可以连接哪些企业数据、知识和系统？', '支持哪些模型，能否保留现有模型供应商？', 'Agent 如何控制权限并避免执行高风险动作？', '项目上线后由谁运营和持续优化？'].map(title => ({ title, copy: '需根据企业现有技术栈、数据条件、权限边界、部署要求和优先场景共同评估。' })),
    boundary: 'FDE-AI 是围绕业务结果共同交付的落地方法与服务模式，不是一个通用软件产品；高风险动作和金融判断保留人工复核节点。', ctaTitle: '从一个高价值场景开始，让 AI 真正进入业务', cta: '预约 AI 场景诊断', secondary: { label: '查看星路 AI 技术体系', href: '/ai' }, recommendations: [{ label: '财富管理数字化', href: '/solutions/digital-wealth-management' }, { label: 'Finloop AI', href: '/ai' }],
  },
};

Object.entries(compactConfigs).forEach(([key, value]) => { configs[key] = { key, ...value }; });

function BlockHead({ title, copy }: { title: string; copy?: string }) {
  return <header className="goal-head goal-head-plain"><div><h2>{title}</h2>{copy && <p>{copy}</p>}</div></header>;
}

export function GoalSolutionPage({ type }: { type: 'wealth' | 'embedded' | 'treasury' | 'rwa' | 'ai' }) {
  const page = configs[type];
  const [activeCapability, setActiveCapability] = useState(0);
  const capability = page.capabilities[activeCapability];
  const contextTitle = type === 'rwa' ? '真实资产数字化，需要连接资产、合规与持续运营' : '企业 AI 正在从工具试用走向真实业务协同';
  const contextCopy = type === 'rwa' ? 'RWA 项目不仅涉及链上技术，还需要让资产权利、产品结构、投资者准入、交易结算与生命周期管理进入同一条业务链路。' : '当模型、知识、数据与现有系统彼此分散，AI 很难进入员工每天使用的流程。企业需要从业务场景出发，建立可连接、可治理、可持续运营的 AI 能力。';
  return <main className={`goal-page iw-page iw-v3 goal-modern goal-${page.key}`} id="main">
    <section className="goal-hero iw-hero" data-header-theme="inverse"><div className="goal-shell"><p className="goal-eyebrow">{type === 'rwa' ? '数字资产与代币化解决方案' : '金融 AI 企业落地解决方案'}</p><h1>{page.title}</h1><p className="goal-intro">{page.intro}</p><div className="goal-hero-actions"><Link className="button button-accent" to="/contact">联系我们</Link><a href="#capabilities">了解核心能力 ↓</a></div></div></section>

    <section className="goal-section iw-audience modern-context"><div className="goal-shell"><div className="iw-audience-copy"><small>背景现状</small><h2>{contextTitle}</h2><p>{contextCopy}</p></div><figure aria-hidden="true"><div className="modern-context-core">{type === 'rwa' ? '真实资产' : '业务场景'}</div><div>{page.tags.slice(0, 4).map((tag, i) => <span key={tag}><b>0{i + 1}</b>{tag}</span>)}</div></figure></div></section>

    {type === 'ai' && <section className="goal-section modern-fde"><div className="goal-shell"><BlockHead title="平台让能力可复用，FDE 让能力真正落地" copy="FDE 不是另一层软件，而是一种深入客户业务现场的工程交付方式，以业务目标倒推技术实现。" /><div className="modern-fde-grid"><article><span>01</span><h3>深入业务</h3><p>与业务角色共同梳理高频任务、隐性规则、决策节点与真正值得改变的流程。</p></article><article><span>02</span><h3>深入系统</h3><p>连接投管、ERP、OA、知识库、数据库与权限体系，让 AI 获得执行真实任务所需的上下文和工具。</p></article><article><span>03</span><h3>进入生产</h3><p>通过原型验证、系统集成、治理上线与持续运营，把模型、Skills 和 Agent 变成可控的业务动作。</p></article></div><div className="modern-fde-equation"><strong>FDE 团队</strong><i>+</i><strong>可复用 AI 技术底座</strong><i>=</i><strong>进入生产的企业 AI</strong></div></div></section>}

    <section className="goal-section" id="situation"><div className="goal-shell"><BlockHead title={type === 'rwa' ? '让复杂的发行与分销环节形成连续链路' : '帮助企业跨过 AI 从试验到落地的断点'} copy={type === 'rwa' ? '围绕资产、产品、合规和运营逐项建立可执行能力。' : '让场景、知识、模型、系统与治理围绕业务结果协同。'} /><div className="modern-challenges">{page.situations.map((item, i) => <article key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></div></section>

    <section className="goal-section modern-paths"><div className="goal-shell"><BlockHead title={type === 'rwa' ? '根据你的 RWA 角色进入对应路径' : '从高价值业务场景开始'} /><div>{page.scenarios.map((item, i) => <article key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></div></section>

    <section className="goal-section iw-integrated" id="capabilities"><div className="goal-shell"><BlockHead title={type === 'rwa' ? '连接 RWA 全链路能力' : '将 AI 接入企业数据与真实业务流程'} copy={type === 'rwa' ? '从资产与 Token，到客户钱包、风险合规和资金流转，按项目角色组合需要的能力。' : '从模型治理和企业数据，到 Agent、工作流与持续运营，形成可落地的企业 AI 能力。'} /><div className="iw-capability-tabs" role="tablist" aria-label="解决方案核心能力">{page.capabilities.map((item, i) => <button key={item.title} id={`${type}-tab-${i}`} role="tab" aria-selected={activeCapability === i} aria-controls={`${type}-capability-panel`} onClick={() => setActiveCapability(i)}>{item.title}</button>)}</div><article className="iw-capability-panel modern-capability-panel" id={`${type}-capability-panel`} role="tabpanel" aria-labelledby={`${type}-tab-${activeCapability}`}><figure aria-hidden="true"><strong>{capability.title}</strong>{page.panorama.slice(0, 4).map((item, i) => <span key={item.title}><b>0{i + 1}</b>{item.title}</span>)}</figure><div className="iw-capability-copy"><h3>{capability.title}</h3><p>{capability.copy}</p><div className="iw-capability-items">{page.panorama.map(item => <span key={item.title}>{item.title}</span>)}</div><footer><b>{type === 'rwa' ? 'RWA H5 · FinOne · FinMix · FinTaaS' : 'FAI · 星路通 · AI PaaS · 星智通 MaaS'}</b></footer></div></article></div></section>

    <section className="goal-section modern-offers" id="products"><div className="goal-shell"><BlockHead title={type === 'rwa' ? '发行与分销双路径' : '交付物与合作方式'} copy={type === 'rwa' ? '根据你是资产方、发行参与方或产品分销平台，选择相应的项目路径。' : '从场景诊断开始，逐步进入首批场景共建和企业级平台运营。'} /><div>{page.products.map(item => <article key={item.title}><small>{item.meta}</small><h3>{item.title}</h3><p>{item.copy}</p>{item.href && <Link to={item.href}>了解更多 →</Link>}</article>)}</div></div></section>

    <section className="goal-section goal-soft" id="delivery"><div className="goal-shell"><BlockHead title={type === 'ai' ? 'FDE-AI 落地方法' : '我们的服务流程'} copy={type === 'ai' ? '由业务场景诊断进入设计、构建、部署和持续运营。' : '从角色和项目评估，到方案设计、系统连接、上线与持续运营。'} /><ol className="goal-timeline iw-delivery">{page.steps.map((item, i) => <li key={item.title}><span>{String(i + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div></li>)}</ol></div></section>

    <section className="goal-section" id="proof"><div className="goal-shell"><BlockHead title={type === 'rwa' ? '支撑数字资产业务的专业基础' : '支撑企业 AI 持续运行的专业基础'} /><div className="iw-proof modern-proof">{page.proof.map((item, i) => <article key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}<article><span>0{page.proof.length + 1}</span><h3>{type === 'rwa' ? '项目边界清晰' : '安全与人工复核'}</h3><p>{page.boundary}</p></article></div></div></section>

    <section className="goal-section iw-customer-case" id="case"><div className="goal-shell"><BlockHead title="客户案例" copy="仅展示已确认的信息；客户名称、项目结果与合作性质需完成授权后公开。" /><article className="iw-case-study"><header><small>案例信息待公开</small><h3>{type === 'rwa' ? '真实资产发行与数字化分销场景' : '企业 AI 进入专业业务流程场景'}</h3><p>{page.proof[0].copy}</p></header><div>{page.scenarios.slice(0, 3).map((item, i) => <section key={item.title}><span>0{i + 1}</span><h4>{item.title}</h4><p>{item.copy}</p></section>)}</div></article></div></section>

    <section className="goal-section goal-soft" id="faq"><div className="goal-shell"><BlockHead title="常见问题" /><div className="goal-faq">{page.faq.map(item => <details key={item.title}><summary>{item.title}<span>+</span></summary><p>{item.copy}</p></details>)}</div></div></section>
    <section className="goal-cta"><div className="goal-shell"><div className="iw-cta-copy"><h2>{page.ctaTitle}</h2><p>{type === 'rwa' ? '根据资产类型、目标市场与业务角色，评估适合的发行、接入或分销路径。' : '从真实业务、高价值任务与现有系统出发，规划首个可落地的 AI 场景。'}</p></div><div><Link className="button button-light" to="/contact">{page.cta}</Link></div></div></section>
  </main>;
}
