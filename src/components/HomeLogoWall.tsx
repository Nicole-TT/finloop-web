import { isEnglish, t } from '../i18n';

const logos = [
  ['taikang.svg', '泰康资产'], ['bny.png', 'BNY'], ['aberdeen.svg', 'aberdeen Investments'],
  ['fomopay.svg', 'FOMO Pay'], ['1exchange.svg', '1EXCHANGE'], ['exio.svg', 'EX.IO'], ['bifu.svg', 'BiFu'],
  ['chinaamc.svg', '华夏基金（香港）'], ['osl.svg', 'OSL'], ['bybit.svg', 'BYBIT'], ['conflux.svg', 'CONFLUX'],
  ['cicc.svg', '中金财富'], ['capbridge.svg', 'CAPBRIDGE'], ['marketnode.svg', 'MARKETNODE'],
  ['tiger-research.svg', 'TIGER RESEARCH'], ['dowsure.png', 'dowsure'], ['worldfirst.png', '万里汇 WorldFirst'],
  ['lupu.svg', '陆浦香港'], ['zhongtai.svg', '中泰证券'], ['energy.svg', '能科 ENERGY'], ['lotus.svg', 'LOTUS'],
];

export function HomeLogoWall() {
  return <section id="ecosystem" className="home-logo-wall section-pad">
    <div className="section-inner">
      <header className="home-logo-heading">
        <h2>{isEnglish ? 'They all trust us' : '他们都信赖我们'}</h2>
        <p>{t('连接金融机构、数字资产与企业业务场景，以专业技术和持续服务推动财富科技融入真实业务流程。')}</p>
      </header>
      <ul className="home-logo-grid" aria-label={isEnglish ? 'Finloop ecosystem' : 'Finloop 生态'}>
        {logos.map(([file, name]) => <li key={file}><img src={`/assets/home-figma/${file}`} alt={name} loading="lazy" /></li>)}
      </ul>
    </div>
  </section>;
}
