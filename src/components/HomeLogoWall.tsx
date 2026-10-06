import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { isEnglish, t, translateNode } from '../i18n';

const logos = [
  ['taikang.png', '泰康资产'], ['bny.png', 'BNY'], ['aberdeen.png', 'aberdeen Investments'],
  ['fomopay.png', 'FOMO Pay'], ['1exchange.png', '1EXCHANGE'], ['exio.png', 'EX.IO'], ['bifu.png', 'BiFu'],
  ['chinaamc.png', '华夏基金（香港）'], ['osl.png', 'OSL'], ['bybit.png', 'BYBIT'], ['conflux.png', 'CONFLUX'],
  ['cicc.png', '中金财富'], ['capbridge.png', 'CAPBRIDGE'], ['marketnode.png', 'MARKETNODE'],
  ['tiger-research.png', 'TIGER RESEARCH'], ['lotus.png', 'LOTUS'], ['energy.png', '能科 ENERGY'],
  ['MidasGoldResources.png', 'Midas Gold Resources'],
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
        <h2>{translateNode(isEnglish ? 'Together, towards new possibilities' : '与同行者，共赴新可能')}</h2>
        <p>{t('携手金融机构与生态伙伴，共同拓展财富服务的更多可能。')}</p>
      </header>
      <ul ref={row} className="home-logo-grid" tabIndex={0}
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)} onBlur={() => setPaused(false)} aria-label={t(isEnglish ? 'Finloop ecosystem' : 'Finloop 生态')}>
        {translateNode(visible.map((logoIndex, index) => <li key={index}>
          <AnimatePresence initial={false} mode="sync">
            <motion.span key={logos[logoIndex][0]} className="home-logo-slot"
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
              transition={{ duration: reducedMotion ? 0 : .35 }}>
              <img src={`/assets/home-figma/${logos[logoIndex][0]}`} alt={t(logos[logoIndex][1])} loading="lazy" />
            </motion.span>
          </AnimatePresence>
        </li>))}
      </ul>
    </div>
  </section>;
}
