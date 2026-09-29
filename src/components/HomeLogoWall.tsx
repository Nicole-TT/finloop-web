import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
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
  const row = useRef<HTMLUListElement>(null);
  const sequence = useRef({ slot: 0, count: 6 });
  const [visible, setVisible] = useState([0, 1, 2, 3, 4, 5]);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reducedMotion) return;
    let inView = false;
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; });
    if (row.current) observer.observe(row.current);
    let timer: number;
    const advance = () => {
      if (!inView || document.hidden) {
        timer = window.setTimeout(advance, 300);
        return;
      }
      const batch = sequence.current;
      if (batch.slot === 0) {
        batch.count = window.matchMedia('(max-width: 680px)').matches ? 2
          : window.matchMedia('(max-width: 1100px)').matches ? 4 : 6;
      }
      const index = batch.slot;
      const count = batch.count;
      const last = index === count - 1;
      setVisible(current => current.map((value, position) =>
        position === index || (last && position >= count)
          ? (value + count) % logos.length : value));
      batch.slot = last ? 0 : index + 1;
      timer = window.setTimeout(advance, last ? 1350 : 180);
    };
    timer = window.setTimeout(advance, sequence.current.slot === 0 ? 1000 : 180);
    return () => { observer.disconnect(); window.clearTimeout(timer); };
  }, [paused, reducedMotion]);

  return <section id="ecosystem" className="home-logo-wall section-pad">
    <div className="section-inner">
      <header className="home-logo-heading">
        <h2>{isEnglish ? 'They all trust us' : '他们都信赖我们'}</h2>
        <p>{t('连接金融机构、数字资产与企业业务场景，以专业技术和持续服务推动财富科技融入真实业务流程。')}</p>
      </header>
      <ul ref={row} className="home-logo-grid" tabIndex={0}
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)} onBlur={() => setPaused(false)} aria-label={isEnglish ? 'Finloop ecosystem' : 'Finloop 生态'}>
        {visible.map((logoIndex, index) => <li key={index}>
          <AnimatePresence initial={false} mode="sync">
            <motion.span key={logos[logoIndex][0]} className="home-logo-slot"
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
              transition={{ duration: reducedMotion ? 0 : .35 }}>
              <img src={`/assets/home-figma/${logos[logoIndex][0]}`} alt={logos[logoIndex][1]} loading="lazy" />
            </motion.span>
          </AnimatePresence>
        </li>)}
      </ul>
    </div>
  </section>;
}
