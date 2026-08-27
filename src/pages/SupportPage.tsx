import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const serviceSteps = [
  ['01', '业务与需求梳理', '结合机构定位、服务对象与现有系统，明确业务目标和实施边界。'],
  ['02', '方案与能力匹配', '从财富产品、科技平台、AI 与数字资产能力中组合适合的实施方案。'],
  ['03', '接入与上线协同', '围绕系统连接、流程配置、数据准备和上线安排推进项目落地。'],
  ['04', '运营与持续优化', '根据实际运营反馈，持续协同产品使用、业务流程与能力扩展。'],
];

const supportAreas = [
  ['01', '财富产品与业务服务', '连接现金管理、公募基金、私募基金、债券、结构性产品与保险等财富产品能力。', '/products', '查看金融产品'],
  ['02', '科技平台与系统连接', '围绕 FinOne、FinEAM、星企通、Web Portal、FinRWA 与 FinMix 提供平台选型和接入协同。', '/products', '查看科技平台'],
  ['03', 'AI 产品与工作流', '通过星路通、FAI、星智通及 Agent & Skills，将 AI 能力连接到具体岗位和业务流程。', '/ai', '查看 Finloop AI'],
];

export function SupportPage() {
  useEffect(() => {
    document.title = '技术与支持 | Finloop 星路科技';
    document.querySelector('meta[name="description"]')?.setAttribute('content', '了解 Finloop 从业务咨询、方案设计、系统接入到上线协同与持续运营的服务支持。');
  }, []);

  return (
    <main className="support-page" id="main">
      <section className="support-hero" data-header-theme="inverse">
        <div className="support-shell support-hero-grid">
          <div className="support-hero-copy">
            <h1>让复杂财富业务，<br />获得持续可用的服务支持</h1>
            <p>从业务咨询、方案设计与系统接入，到上线协同和持续运营，Finloop 围绕机构实际业务场景提供服务与支持。</p>
            <div className="support-actions"><Link className="button button-accent" to="/contact">联系服务团队 <span aria-hidden="true">→</span></Link><a href="#service-model">了解服务方式 <span aria-hidden="true">↓</span></a></div>
          </div>
          <div className="support-hero-map" aria-label="Finloop 服务支持流程">
            <div className="support-map-core"><small>FINLOOP SUPPORT</small><strong>业务持续落地</strong></div>
            {serviceSteps.map(([index, title]) => <div className="support-map-node" key={index}><span>{index}</span><strong>{title}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="support-section support-model" id="service-model">
        <div className="support-shell">
          <div className="support-section-head"><h2>从需求到持续运营，<br />服务贯穿业务落地过程</h2><p>根据机构的业务目标、系统基础与推进节奏协同工作，让产品能力与实际运营流程保持连接。</p></div>
          <ol className="support-journey">
            {serviceSteps.map(([index, title, description]) => <li key={index}><span>{index}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="support-section support-scope">
        <div className="support-shell">
          <div className="support-section-head support-section-head-wide"><h2>围绕产品、平台与 AI，<br />提供对应支持入口</h2></div>
          <div className="support-directory">
            {supportAreas.map(([index, title, description, link, linkText]) => <Link to={link} key={index}><span>{index}</span><h3>{title}</h3><p>{description}</p><strong>{linkText} <i aria-hidden="true">→</i></strong></Link>)}
          </div>
        </div>
      </section>

      <section className="support-section support-connect">
        <div className="support-shell support-connect-grid">
          <div className="support-connect-copy"><h2>根据机构环境，<br />协同完成连接与部署</h2><p>支持云端、本地与混合环境的灵活部署，并围绕系统接口、业务流程和运营安排推进实施。</p><div className="support-connect-list"><span>系统与 API 连接</span><span>业务流程配置</span><span>数据与权限准备</span><span>上线与运营协同</span></div></div>
          <div className="support-deployment" aria-label="部署与连接方式示意图"><div><small>INSTITUTION</small><strong>机构业务环境</strong></div><i aria-hidden="true">↔</i><div className="primary"><small>FINLOOP</small><strong>产品与技术能力</strong></div><div className="support-deployment-options"><span>云端</span><span>本地</span><span>混合环境</span></div></div>
        </div>
      </section>

      <section className="support-cta">
        <div className="support-shell"><div><h2>与服务团队沟通您的业务需求</h2><p>告诉我们您的机构类型、业务场景与当前阶段，团队将与您共同梳理适合的产品和实施路径。</p></div><div className="support-cta-actions"><Link className="button button-accent" to="/contact">预约咨询 <span aria-hidden="true">→</span></Link><a href="mailto:CS@finloop.hk">CS@finloop.hk</a><a href="tel:+85230088996">(852) 3008 8996</a></div></div>
      </section>
    </main>
  );
}
