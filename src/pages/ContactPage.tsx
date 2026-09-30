import { t, translateNode } from '../i18n';
import { FormEvent, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

type EnquiryType = 'product' | 'solution' | 'rwa' | 'ai' | 'partnership' | 'support' | 'ir' | 'other';

const enquiryOptions: Array<{ value: EnquiryType; label: string; english: string }> = [
  { value: 'product', label: '产品与平台', english: 'Products & Platforms' },
  { value: 'solution', label: '机构解决方案', english: 'Business Solutions' },
  { value: 'rwa', label: 'RWA 与数字资产', english: 'RWA & Digital Assets' },
  { value: 'ai', label: 'AI 与 FDE-AI', english: 'AI & FDE' },
  { value: 'partnership', label: '商务与生态合作', english: 'Business Partnership' },
  { value: 'support', label: '客户服务', english: 'Customer Support' },
  { value: 'ir', label: '投资者关系', english: 'Investor Relations' },
  { value: 'other', label: '其他咨询', english: 'Other Enquiries' },
];

const prefillType: Record<string, EnquiryType> = {
  products: 'product', product: 'product', solutions: 'solution', solution: 'solution',
  rwa: 'rwa', digital: 'rwa', ai: 'ai', partnership: 'partnership', support: 'support', ir: 'ir', other: 'other',
};

const products = ['FinOne', 'FinEAM', 'Web Portal', '星企通', '星智通', '星路通', '其他 / 尚未确定'];
const objectives = ['建设新的财富平台', '扩展现有业务', '提升交易 / 运营效率', '企业资金管理', 'AI 能力', '其他'];

function ChoiceGroup({ legend, name, items, preset }: { legend: string; name: string; items: string[]; preset?: string }) {
  return (
    <fieldset className="contact-choice-group">
      <legend>{translateNode(legend)}</legend>
      <div>
        {translateNode(items.map(item => <label key={item}><input type="checkbox" name={name} value={item} defaultChecked={item.toLowerCase() === preset?.toLowerCase()} /><span>{translateNode(item)}</span></label>))}
      </div>
    </fieldset>
  );
}

function SelectField({ label, name, items, required = false }: { label: string; name: string; items: string[]; required?: boolean }) {
  return <label className="contact-field"><span>{translateNode(label)}{translateNode(required && ' *')}</span><select name={name} required={required} defaultValue=""><option value="" disabled>{t("请选择")}</option>{translateNode(items.map(item => <option key={item} value={item}>{translateNode(item)}</option>))}</select></label>;
}

export function ContactPage() {
  const [params] = useSearchParams();
  const initialType = prefillType[(params.get('type') || '').toLowerCase()] || '';
  const [enquiryType, setEnquiryType] = useState<EnquiryType | ''>(initialType);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const contextProduct = params.get('product') || '';
  const selectedEnquiry = useMemo(() => enquiryOptions.find(option => option.value === enquiryType), [enquiryType]);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: Record<string, string> = {};
    ['name', 'email', 'organization', 'region', 'enquiry_type', 'message'].forEach(name => {
      if (!String(data.get(name) || '').trim()) nextErrors[name] = '请完成此项';
    });
    const email = String(data.get('email') || '');
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = '请输入有效的邮箱地址';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus('error');
      form.querySelector<HTMLElement>(`[name="${Object.keys(nextErrors)[0]}"]`)?.focus();
      return;
    }
    setStatus('success');
  }

  function dynamicFields() {
    if (enquiryType === 'product') return <><ChoiceGroup legend="您感兴趣的产品" name="interested_products" items={products} preset={contextProduct} /><ChoiceGroup legend="您的主要目标" name="objective" items={objectives} /></>;
    if (enquiryType === 'solution') return <><SelectField label="机构类型" name="organization_type" required items={['银行', '证券 / 经纪机构', '财富 / 资产管理机构', 'EAM / Family Office', '支付 / 数字平台', '数字资产机构', '企业', '保险机构', '其他']} /><ChoiceGroup legend="业务需求" name="business_need" items={['客户与账户', '财富产品', '交易', '资产管理', '数字终端', 'Embedded Wealth', '其他']} /></>;
    if (enquiryType === 'rwa') return <div className="contact-dynamic-grid"><SelectField label="机构类型" name="organization_type" items={['金融机构', '资产管理机构', '基金管理人', '企业 / 资产方', 'VASP / 数字资产机构', '技术机构', '其他']} /><SelectField label="资产类型" name="asset_type" items={['Fund', 'Security', 'Real Estate', 'Commodity', 'Infrastructure', 'Other Real-world Asset', 'Unsure']} /><SelectField label="项目目标" name="rwa_objective" items={['Tokenization', 'RWA Product Design', 'Issuance', 'Distribution', 'Wallet / KYT Infrastructure', 'Technology', 'Unsure']} /><SelectField label="目标市场" name="target_market" items={['Hong Kong', 'Singapore', 'Other']} /></div>;
    if (enquiryType === 'ai') return <><div className="contact-dynamic-grid"><SelectField label="AI 需求" name="ai_need" items={['AI 模型基础设施', '企业 AI 平台', '金融 Agent', '金融 AI 工作台', 'FDE-AI 企业深度落地', '尚未确定']} /><SelectField label="当前阶段" name="current_stage" items={['尚未开始', '正在探索 AI 场景', '已有 PoC / Demo', '已有 AI 系统', '希望进入 Production']} /></div><ChoiceGroup legend="已有系统（可选）" name="existing_systems" items={['ERP', 'CRM', 'OA', 'Investment Management System', 'Data Warehouse', 'Knowledge Base', 'Other']} /><label className="contact-field contact-field-wide"><span>{t("您最希望 AI 改变哪一项工作？")}</span><textarea name="business_problem" rows={3} placeholder={t("请简要描述当前工作流程与期望变化")} /></label></>;
    if (enquiryType === 'partnership') return <div className="contact-dynamic-grid"><SelectField label="合作类型" name="partnership_type" items={['Financial Product', 'Distribution', 'Technology', 'RWA', 'AI', 'Blockchain / Web3', 'Research / Industry', 'Other']} /><label className="contact-field"><span>{t("合作构想")}</span><textarea name="proposal" rows={3} placeholder={t("请简要介绍合作内容")} /></label></div>;
    if (enquiryType === 'support') return <div className="contact-dynamic-grid"><SelectField label="产品 / 服务" name="support_product" items={products.slice(0, -1).concat('其他')} /><SelectField label="问题类型" name="issue_type" items={['Account', 'Transaction', 'Product', 'Technical', 'Other']} /></div>;
    return null;
  }

  return (
    <main className="contact-page" id="main">
      <section className="contact-hero" data-header-theme="inverse">
        <div className="contact-shell contact-hero-grid">
          <div className="contact-hero-copy">
            <p className="contact-label">CONTACT FINLOOP</p>
            <h1>{t("与 Finloop")}<br />{t("开始一次对话")}</h1>
            <p>{t("无论您正在寻找财富科技平台、机构解决方案、RWA 与数字资产能力，还是希望将 AI 带入真实业务，我们的团队都可以与您进一步交流。")}</p>
            <div className="contact-route-note"><span>01</span><p>{t("选择您的需求，我们会将信息发送至对应团队。")}</p></div>
            <div className="contact-network" aria-hidden="true"><i /><i /><i /><i /><span>FINLOOP</span></div>
          </div>

          <div className="contact-form-panel" id="enquiry-form">
            {translateNode(status === 'success' ? (
              <div className="contact-success" role="status"><span>{t("已收到")}</span><h2>{t("感谢您的联系")}</h2><p>{t("此页面已完成表单交互演示。接入正式提交服务后，信息将转交至对应团队。")}</p><div><button type="button" onClick={() => setStatus('idle')}>{t("再提交一条咨询")}</button><Link to="/">{t("返回首页")}</Link></div></div>
            ) : (
              <form noValidate onSubmit={submitForm}>
                <div className="contact-form-heading"><span>01 / ENQUIRY</span><h2>{t("告诉我们您的需求")}</h2><p>{t("提供一些基本信息，可以帮助我们的团队更快理解您的业务场景。")}</p></div>
                <label className="contact-field contact-enquiry-select"><span>{t("您希望与我们讨论什么？ *")}</span><select name="enquiry_type" value={enquiryType} aria-invalid={Boolean(errors.enquiry_type)} onChange={event => { setEnquiryType(event.target.value as EnquiryType); setErrors({}); }}><option value="" disabled>{t("请选择咨询类型")}</option>{translateNode(enquiryOptions.map(option => <option key={option.value} value={option.value}>{translateNode(option.label)} / {translateNode(option.english)}</option>))}</select>{translateNode(errors.enquiry_type && <small>{translateNode(errors.enquiry_type)}</small>)}</label>
                {translateNode(selectedEnquiry && <div className="contact-selection-note"><b>{translateNode(selectedEnquiry.label)}</b><span>{translateNode(selectedEnquiry.english)}</span>{translateNode(enquiryType === 'ir' && <a href="mailto:tong.wang@fosunhn.net">{t("IR 直接联系：tong.wang@fosunhn.net")}</a>)}</div>)}
                <div className="contact-base-fields">
                  <label className="contact-field"><span>{t("姓名 *")}</span><input name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} placeholder={t("您的姓名")} />{translateNode(errors.name && <small>{translateNode(errors.name)}</small>)}</label>
                  <label className="contact-field"><span>{t("工作邮箱 *")}</span><input name="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} placeholder="name@company.com" />{translateNode(errors.email ? <small>{translateNode(errors.email)}</small> : <em>{t("建议使用公司邮箱")}</em>)}</label>
                  <label className="contact-field"><span>{t("公司 / 机构名称 *")}</span><input name="organization" autoComplete="organization" aria-invalid={Boolean(errors.organization)} placeholder={t("公司或机构名称")} />{translateNode(errors.organization && <small>{translateNode(errors.organization)}</small>)}</label>
                  <label className="contact-field"><span>{t("职位")}</span><input name="job_title" autoComplete="organization-title" placeholder={t("您的职位（可选）")} /></label>
                  <SelectField label="所在地区" name="region" required items={['Hong Kong', 'Mainland China', 'Singapore', 'Southeast Asia', 'Other Asia Pacific', 'Europe', 'North America', 'Other']} />
                  <label className="contact-field"><span>{t("联系电话")}</span><input name="phone" type="tel" autoComplete="tel" placeholder={t("电话（可选）")} /></label>
                </div>
                {translateNode(enquiryType && <div className="contact-dynamic-fields" key={enquiryType}>{translateNode(dynamicFields())}</div>)}
                <label className="contact-field contact-field-wide"><span>{t("您希望解决什么问题？ *")}</span><textarea name="message" rows={5} aria-invalid={Boolean(errors.message)} placeholder={t("简单介绍您的业务需求、当前问题或希望了解的内容。")} />{translateNode(errors.message && <small>{translateNode(errors.message)}</small>)}</label>
                <label className="contact-consent"><input type="checkbox" name="marketing_consent" /><span>{t("我希望接收 Finloop 的产品、市场及活动资讯（可选）。")}</span></label>
                {translateNode(status === 'error' && <p className="contact-form-error" role="alert">{t("请检查已标记的字段，您已填写的内容会保留。")}</p>)}
                <div className="contact-form-footer"><button type="submit">{t("提交咨询")}<span aria-hidden="true">↗</span></button><p>{t("提交即表示您同意 Finloop 根据隐私政策处理您提供的信息，以便回复您的咨询。")}</p></div>
                <p className="contact-sensitive"><b>{t("请注意：")}</b>{t("请勿通过此表单提交账户密码、钱包私钥或其他高度敏感的个人及金融信息。")}</p>
                <input className="contact-honeypot" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              </form>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-direct contact-section">
        <div className="contact-shell"><div className="contact-section-head"><span>02 / DIRECT CONTACT</span><h2>{t("也可以直接与我们联系")}</h2><p>{t("根据您的所在地或联系目的，选择对应入口。")}</p></div><div className="contact-direct-grid">
          <article><span>01</span><h3>{t("香港商务咨询")}</h3><p>Thomas</p><a href="mailto:thomas.ng@finloop.hk">thomas.ng@finloop.hk <b>↗</b></a></article>
          <article><span>02</span><h3>{t("中国内地商务咨询")}</h3><p>Yanchun Gong</p><a href="mailto:yanchun.gong@finloop.hk">yanchun.gong@finloop.hk <b>↗</b></a></article>
          <article><span>03</span><h3>{t("客户服务")}</h3><p><a href="tel:+85230088996">(852) 3008 8996</a></p><a href="mailto:CS@finloop.hk">CS@finloop.hk <b>↗</b></a></article>
          <article><span>04</span><h3>{t("投资者关系")}</h3><p>Tong Wang</p><a href="mailto:tong.wang@fosunhn.net">tong.wang@fosunhn.net <b>↗</b></a></article>
        </div></div>
      </section>

    </main>
  );
}
