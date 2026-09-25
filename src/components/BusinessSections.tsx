import { t, localizedHref } from '../i18n';
import { createPortal } from 'react-dom';
import React, { useEffect, useId, useRef, useState } from 'react';
import logoSource from '../../public/assets/finloop-logo.svg?raw';
import RotatingEarth from './ui/wireframe-dotted-globe';
import { animate, motion, useMotionValue, useReducedMotion, useScroll, useTransform, type MotionValue, type Variants } from 'motion/react';
import { useFinloopAssistant } from './FinloopAssistant';
import { RefreshCw, type IconNode } from 'lucide';

function HeroIcon({ icon }: { icon: IconNode }) {
  return <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {icon[2]?.map(([tag, attrs], index) => React.createElement(tag, { ...attrs, key: index }))}
  </svg>;
}

const assetContent: Record<string, [string, string, string, string]> = {
  cash: ['企业流动性与现金管理', '连接多币种货币基金与机构运营流程，支持企业与金融机构进行现金配置、申赎和资产查看。', 'USD · HKD · CNH', '产品范围与规则以上线时核验信息为准'],
  fund: ['连接全球公募基金产品', '将基金产品、客户适当性、交易、持仓和运营连接在同一业务链路中。', 'GLOBAL FUNDS', '覆盖多类基金产品与管理人'],
  private: ['专业投资者产品服务', '支持私募基金产品货架与机构业务流程，具体可售范围按主体和地区确认。', 'PRIVATE MARKETS', '仅面向符合条件的专业投资者'],
  bond: ['固定收益产品与交易能力', '连接债券产品数据、询价、订单与存续管理，服务机构多资产配置场景。', 'FIXED INCOME', '市场、币种与起投规则以实际产品为准'],
  structured: ['从询价到存续管理', '覆盖结构性产品 RFQ、报价、订单及后续管理环节。', 'RFQ → ORDER', '具体产品和适用客户以持牌主体确认为准'],
  insurance: ['保险产品货架与运营', '区分保险产品供给与面向保险机构的科技解决方案，连接产品、渠道和服务流程。', 'PRODUCT · SERVICE', '具体服务范围以适用主体为准'],
  virtual: ['虚拟资产产品与服务', '连接虚拟资产产品、机构账户与交易流程，支持适用机构拓展数字资产业务。', 'VIRTUAL ASSETS', '具体服务范围以适用主体为准'],
  rwa: ['传统资产与数字基础设施', '连接 Tokenization、链上部署、持份管理、钱包、KYT 与分销流程。', 'ASSET → TOKEN', '覆盖资产上链与机构分销流程'],
};

const assetTabs: Array<[string, string]> = [
  ['cash', '现金管理'], ['fund', '公募基金'], ['private', '私募基金'],
  ['bond', '债券'], ['structured', '结构性产品'], ['insurance', '保险'],
  ['virtual', '虚拟资产'], ['rwa', 'RWA'],
];

const heroSuggestionBatches = [
  ['代币化平台 FinTaaS', '统一 AI API 网关 星智通', '企业如何管理闲置资金', '我想了解私募产品'],
  ['如何上线数字财富业务', '金融机构如何应用 AI', '了解 RWA 解决方案', '企业现金管理方案'],
];

const heroEntrance: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: .12, staggerChildren: .1 } },
};

const heroEntranceItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: .56, ease: [.22, 1, .36, 1] } },
};

const heroPhaseEase = (progress: number) => progress * progress * (3 - 2 * progress);
const heroLogoPath = logoSource.match(/<path d="([^"]+)"/)![1];

const heroMetrics = [
  ['8,000+', '', '财富产品', '覆盖多元财富产品体系'],
  ['250+', '', '机构客户', '服务多类型专业机构'],
  ['50B+', '', '2025 年交易规模', '承载真实机构财富业务'],
  ['8', '', '金融品类', '覆盖传统金融与 Web3'],
];

function HeroMetric({ item, index, progress, reduced }: { item: string[]; index: number; progress: MotionValue<number>; reduced: boolean }) {
  const start = 1.28 + index * .12;
  const opacity = useTransform(progress, [start, start + .4], [0, 1], { ease: heroPhaseEase });
  const y = useTransform(progress, [start, start + .4], [100, 0], { ease: value => 1 - (1 - value) ** 3 });
  const target = Number(item[0].replace(/[^\d]/g, ''));
  const suffix = item[0].replace(/[\d,]/g, '');
  const count = useTransform(progress, [start, 2.1], [0, target], { ease: value => 1 - (1 - value) ** 3 });
  const formattedCount = useTransform(count, value => `${Math.round(value).toLocaleString('en-US')}${suffix}`);
  return <motion.article style={reduced ? undefined : { opacity, y }}>
    <strong aria-label={`${item[0]} ${item[1]}`.trim()}><motion.span aria-hidden="true" style={{ fontVariantNumeric: 'tabular-nums' }}>{reduced ? item[0] : formattedCount}</motion.span> {item[1] && <small aria-hidden="true">{item[1]}</small>}</strong>
    <h3>{t(item[2])}</h3><p>{t(item[3])}</p>
  </motion.article>;
}

function MetricsVideoReveal({ reduced }: { reduced: boolean }) {
  const sceneRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!playing) return;
    const dialog = dialogRef.current;
    const overflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    dialog?.showModal();
    videoRef.current?.pause();
    return () => {
      dialog?.close();
      document.documentElement.style.overflow = overflow;
      playButtonRef.current?.focus({ preventScroll: true });
      if (sceneRef.current && sceneRef.current.getBoundingClientRect().bottom > 0) void videoRef.current?.play().catch(() => {});
    };
  }, [playing]);
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ['start end', 'center center'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [72, 0], { ease: value => 1 - (1 - value) ** 3 });
  const scale = useTransform(scrollYProgress, [0, 1], [.576, 1], { ease: heroPhaseEase });

  useEffect(() => {
    const scene = sceneRef.current;
    const video = videoRef.current;
    if (!scene || !video) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting) void video.play().catch(() => {});
      else video.pause();
    }, { threshold: .05 });
    observer.observe(video);
    return () => { observer.disconnect(); video.pause(); };
  }, []);

  return <section ref={sceneRef} className={`hero-video-reveal${reduced ? ' is-reduced' : ''}`} aria-label={t('首页品牌影片')}>
    <div className="hero-video-sticky">
      <motion.div className="hero-video-frame"
        initial={{ opacity: reduced ? 1 : 0 }}
        animate={{ opacity: reduced || visible ? 1 : 0 }}
        transition={{ opacity: { duration: reduced ? 0 : .65, ease: 'easeOut' } }}
        style={reduced ? undefined : { y, scale }}>
        <video ref={videoRef} src="/assets/home-metrics-video.mp4" muted loop playsInline autoPlay preload="metadata" aria-label={t('Finloop 品牌影片')} />
        <div className="hero-video-caption">
          <h2>Who Are We</h2>
          <button ref={playButtonRef} type="button" className="hero-video-play" aria-haspopup="dialog" onClick={() => setPlaying(true)}>
            See the Video <span aria-hidden="true">▶</span>
          </button>
        </div>
      </motion.div>
    </div>
    {playing && createPortal(<dialog ref={dialogRef} className="brand-video-dialog" aria-label="Finloop brand video"
      onCancel={() => setPlaying(false)} onClose={() => setPlaying(false)}
      onClick={event => { if (event.target === event.currentTarget) setPlaying(false); }}>
      <button type="button" className="brand-video-close" aria-label="Close video" autoFocus onClick={() => setPlaying(false)}>×</button>
      <iframe src="https://www.youtube.com/embed/fRr7gAOQd64?si=olmwZExwJjahmg9k&autoplay=1" title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
    </dialog>, document.body)}
  </section>;
}

function ProductGlobe() {
  return <div className="product-globe" aria-hidden="true"><RotatingEarth width={820} height={820} interactive={false} /></div>;
}

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const chatBackdropRef = useRef<HTMLDivElement>(null);
  const logoClipId = useId();
  const logoGradientId = useId();
  const dotVideoRef = useRef<HTMLVideoElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const logoPathRef = useRef<SVGPathElement>(null);
  const logoImageRef = useRef<SVGGElement>(null);
  const [entranceVisible, setEntranceVisible] = useState(false);
  const [question, setQuestion] = useState('');
  const [suggestionBatch, setSuggestionBatch] = useState(0);
  const reduceMotion = useReducedMotion();
  const { ask, isLoading } = useFinloopAssistant();
  const reveal = useMotionValue(0);
  const largeLogoHeight = useMotionValue(600);
  const finalLogoHeight = useMotionValue(120);
  const stageWidth = useMotionValue(0);
  const stageHeight = useMotionValue(0);
  const contentOpacity = useTransform(reveal, [0, .24], [1, 0], { ease: heroPhaseEase });
  const chatBackdropEntrance = useMotionValue(0);
  const chatBackdropOpacity = useTransform(() => contentOpacity.get() * chatBackdropEntrance.get());
  const alignChatBackdrop = () => {
    const hero = heroRef.current;
    const chat = chatRef.current;
    const backdrop = chatBackdropRef.current;
    if (!hero || !chat || !backdrop) return;
    const heroBounds = hero.getBoundingClientRect();
    const bounds = chat.getBoundingClientRect();
    Object.assign(backdrop.style, {
      left: `${bounds.left - heroBounds.left}px`, top: `${bounds.top - heroBounds.top}px`,
      width: `${bounds.width}px`, height: `${bounds.height}px`,
      borderRadius: getComputedStyle(chat).borderRadius,
    });
  };
  useEffect(() => {
    const observer = new ResizeObserver(alignChatBackdrop);
    if (chatRef.current) observer.observe(chatRef.current);
    if (heroRef.current) observer.observe(heroRef.current);
    window.addEventListener('resize', alignChatBackdrop);
    alignChatBackdrop();
    return () => { observer.disconnect(); window.removeEventListener('resize', alignChatBackdrop); };
  }, []);
  useEffect(() => {
    if (reduceMotion) { chatBackdropEntrance.set(1); return; }
    if (!entranceVisible) return;
    const animation = animate(chatBackdropEntrance, 1, { delay: .72, duration: .24, ease: 'easeOut' });
    return () => animation.stop();
  }, [entranceVisible, reduceMotion]);
  const maskProgress = useTransform(reveal, [.24, 1], [0, 1], { ease: progress => 1 - (1 - progress) ** 3 });
  const backgroundBlur = useTransform(maskProgress, value => `blur(${value * 20}px)`);
  const logoLift = useTransform(reveal, [1, 1.6], [0, 1], { ease: heroPhaseEase });
  const gradientOpacity = useTransform(reveal, [.58, .76], [0, 1], { ease: heroPhaseEase });
  const blackOpacity = useTransform(reveal, [.76, .98], [0, 1], { ease: heroPhaseEase });
  const gradientWidth = useTransform(() => {
    const start = largeLogoHeight.get();
    return start * (finalLogoHeight.get() / start) ** maskProgress.get() * 147 / 32;
  });
  const gradientX = useTransform(() => {
    const anchorX = 80.0407 + (73.5 - 80.0407) * maskProgress.get();
    return stageWidth.get() / 2 - anchorX * gradientWidth.get() / 147;
  });
  useEffect(() => {
    const video = dotVideoRef.current;
    if (!video || reduceMotion) return;
    let playing = false;
    const sync = (value: number) => {
      const shouldPlay = value > 1;
      if (shouldPlay === playing) return;
      playing = shouldPlay;
      if (shouldPlay) {
        video.currentTime = 0;
        void video.play().catch(() => { playing = false; });
      } else video.pause();
    };
    sync(reveal.get());
    const unsubscribe = reveal.on('change', sync);
    return () => { unsubscribe(); video.pause(); };
  }, [reveal, reduceMotion]);
  const logoTransform = useTransform(() => {
    const progress = maskProgress.get();
    const start = largeLogoHeight.get();
    const scale = start * (finalLogoHeight.get() / start) ** progress / 32;
    // Start inside the n's right stem, then settle on the complete wordmark's centre.
    const anchorX = 80.0407 + (73.5 - 80.0407) * progress;
    const anchorY = 19.24555 + (16 - 19.24555) * progress;
    const liftDistance = stageWidth.get() <= 760 ? .21 : .14;
    return `translate(${stageWidth.get() / 2 - anchorX * scale} ${stageHeight.get() * (.5 - liftDistance * logoLift.get()) - anchorY * scale}) scale(${scale})`;
  });
  useEffect(() => {
    const update = () => {
      logoPathRef.current?.setAttribute('transform', logoTransform.get());
      if (!reduceMotion && reveal.get() > .24) logoImageRef.current?.setAttribute('clip-path', `url(#${logoClipId})`);
      else logoImageRef.current?.removeAttribute('clip-path');
    };
    update();
    const stopTransform = logoTransform.on('change', update);
    const stopReveal = reveal.on('change', update);
    return () => { stopTransform(); stopReveal(); };
  }, [logoTransform, reveal, reduceMotion, logoClipId]);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || reduceMotion) { reveal.set(0); return; }
    const content = hero.querySelector<HTMLElement>('.hero-grid');
    let phase: 'idle' | 'running' | 'complete' = 'idle';
    let animation: ReturnType<typeof animate> | undefined;
    let restoreScroll: (() => void) | undefined;
    let touchY = 0;
    let target = 2.1;
    let backgroundReady = false;
    let disposed = false;
    const headerInner = document.querySelector<HTMLElement>('.site-header .header-inner');
    const backgroundElement = hero.querySelector<SVGElement>('.hero-logo-background');
    let entranceAnimation: ReturnType<typeof animate> | undefined;
    let headerAnimation: ReturnType<typeof animate> | undefined;
    let entranceTimer: ReturnType<typeof setTimeout> | undefined;
    setEntranceVisible(false);
    hero.dataset.entering = 'true';
    const playEntrance = async () => {
      if (disposed || !backgroundElement) return;
      entranceAnimation = animate(backgroundElement, { opacity: [0, 1] }, { duration: .4, ease: 'easeOut' });
      await entranceAnimation;
      if (disposed) return;
      setEntranceVisible(true);
      if (headerInner) headerAnimation = animate(headerInner, { opacity: [0, 1], y: [-30, 0] }, { duration: .65, ease: [.22, 1, .36, 1] });
      entranceTimer = setTimeout(() => {
        backgroundReady = true;
        delete hero.dataset.entering;
      }, 1000);
    };
    const background = new Image();
    background.src = '/assets/home-hero-hong-kong-new.png';
    background.decode().then(playEntrance, playEntrance);
    reveal.set(0);
    hero.dataset.headerProgress = '0';
    const resize = () => {
      stageWidth.set(hero.clientWidth);
      stageHeight.set(hero.clientHeight);
      largeLogoHeight.set(Math.max(hero.clientWidth / 3.294, hero.clientHeight / 9.0059) * 32 * 1.06);
      finalLogoHeight.set(Math.min(120, (hero.clientWidth - 40) * 32 / 147));
    };
    const finish = () => {
      phase = target === 0 ? 'idle' : 'complete';
      content?.toggleAttribute('inert', target !== 0);
      hero.classList.toggle('hero-collapsed', target !== 0);
      restoreScroll?.();
      restoreScroll = undefined;
    };
    const start = (forward: boolean) => {
      // Finish the entrance sequence once; scrolling fades the complete group.
      hero.dataset.scrollContentReady = 'true';
      chatBackdropEntrance.stop();
      chatBackdropEntrance.set(1);
      target = forward ? 2.1 : 0;
      phase = 'running';
      if (content?.contains(document.activeElement)) (document.activeElement as HTMLElement).blur();
      content?.setAttribute('inert', '');
      if (!forward) hero.classList.remove('hero-collapsed');
      const root = document.documentElement;
      const overflow = root.style.overflow;
      const gutter = root.style.scrollbarGutter;
      root.style.scrollbarGutter = 'stable';
      root.style.overflow = 'hidden';
      restoreScroll = () => { root.style.overflow = overflow; root.style.scrollbarGutter = gutter; };
      if (forward) {
        animation = animate(reveal, target, { duration: 3.045, ease: 'linear', onComplete: finish });
        return;
      }
      animation = animate(reveal, 0, {
        duration: 2,
        ease: [.4, 0, .2, 1],
        onComplete: finish,
      });
    };
    const consume = (event: Event, down: boolean) => {
      if (phase === 'running') { event.preventDefault(); return; }
      if (window.scrollY > 1 || (phase === 'idle' ? !down : down)) return;
      if (event.target instanceof Element && event.target.closest('input, textarea, select, [contenteditable="true"], [role="dialog"], .site-header')) return;
      event.preventDefault();
      if (!backgroundReady) return;
      start(down);
    };
    const wheel = (event: WheelEvent) => { if (!event.ctrlKey && event.deltaY !== 0) consume(event, event.deltaY > 0); };
    const touchStart = (event: TouchEvent) => { touchY = event.touches[0]?.clientY ?? 0; };
    const touchMove = (event: TouchEvent) => {
      if (event.touches.length !== 1) return;
      const nextY = event.touches[0].clientY;
      if (Math.abs(touchY - nextY) > 2) consume(event, touchY > nextY);
      touchY = nextY;
    };
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && phase === 'running') { animation?.stop(); reveal.set(target); finish(); return; }
      if (event.key === ' ') consume(event, !event.shiftKey);
      else if (['ArrowDown', 'PageDown', 'End'].includes(event.key)) consume(event, true);
      else if (['ArrowUp', 'PageUp', 'Home'].includes(event.key)) consume(event, false);
    };
    const unsubscribe = reveal.on('change', value => {
      hero.dataset.headerProgress = String(heroPhaseEase(Math.max(0, Math.min(1, (value - .24) / .2))));
      window.dispatchEvent(new Event('finloop:hero-theme'));
    });
    const observer = new ResizeObserver(resize);
    observer.observe(hero);
    resize();
    window.addEventListener('wheel', wheel, { passive: false });
    window.addEventListener('touchstart', touchStart, { passive: true });
    window.addEventListener('touchmove', touchMove, { passive: false });
    window.addEventListener('keydown', key);
    return () => {
      disposed = true;
      entranceAnimation?.stop();
      headerAnimation?.stop();
      animation?.stop();
      restoreScroll?.();
      clearTimeout(entranceTimer);
      delete hero.dataset.entering;
      if (headerInner) { headerInner.style.removeProperty('opacity'); headerInner.style.removeProperty('transform'); }
      unsubscribe();
      observer.disconnect();
      window.removeEventListener('wheel', wheel);
      window.removeEventListener('touchstart', touchStart);
      window.removeEventListener('touchmove', touchMove);
      window.removeEventListener('keydown', key);
      content?.removeAttribute('inert');
      hero.classList.remove('hero-collapsed');
      delete hero.dataset.scrollContentReady;
      delete hero.dataset.headerProgress;
    };
  }, [reduceMotion, reveal, largeLogoHeight, finalLogoHeight, stageWidth, stageHeight]);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    let active = false;
    let lastTime = 0;
    let lastTrailTime = 0;
    let trail: Array<{ x: number; y: number; time: number }> = [];

    const paint = (time: number) => {
      const moving = Math.hypot(targetX - x, targetY - y) > 1;
      if (moving && time - lastTrailTime > 50) {
        trail.push({ x, y, time });
        trail = trail.slice(-12);
        lastTrailTime = time;
      }
      trail = trail.filter(point => time - point.time < 650);
      hero.style.setProperty('--scan-trail', trail.length ? trail.map(point => {
        const opacity = .2 * (1 - (time - point.time) / 650) ** 2;
        return `radial-gradient(circle 360px at ${point.x}px ${point.y}px, rgba(0,0,0,${opacity}) 0%, rgba(0,0,0,${opacity * .65}) 28%, rgba(0,0,0,${opacity * .22}) 58%, transparent 100%)`;
      }).join(', ') : 'linear-gradient(transparent, transparent)');
      const blend = 1 - Math.exp(-Math.min(time - lastTime || 16, 64) / 65);
      lastTime = time;
      x += (targetX - x) * blend;
      y += (targetY - y) * blend;
      hero.style.setProperty('--scan-x', `${x}px`);
      hero.style.setProperty('--scan-y', `${y}px`);
      frame = active && (Math.hypot(targetX - x, targetY - y) > .2 || trail.length > 0)
        ? requestAnimationFrame(paint) : 0;
    };
    const leave = () => {
      active = false;
      hero.classList.remove('is-scanning');
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
      trail = [];
      lastTrailTime = 0;
    };
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType === 'touch' || hero.classList.contains('hero-collapsed')) return;
      const bounds = hero.getBoundingClientRect();
      targetX = event.clientX - bounds.left;
      targetY = event.clientY - bounds.top;
      if (!active) {
        x = targetX;
        y = targetY;
        active = true;
        hero.style.removeProperty('--scan-trail');
        hero.style.setProperty('--scan-x', `${x}px`);
        hero.style.setProperty('--scan-y', `${y}px`);
        hero.classList.add('is-scanning');
      }
      if (!frame) frame = requestAnimationFrame(paint);
    };
    hero.addEventListener('pointermove', move);
    hero.addEventListener('pointerleave', leave);
    hero.addEventListener('pointercancel', leave);
    window.addEventListener('blur', leave);
    window.addEventListener('scroll', leave, { passive: true });
    media.addEventListener('change', leave);
    return () => {
      leave();
      hero.removeEventListener('pointermove', move);
      hero.removeEventListener('pointerleave', leave);
      hero.removeEventListener('pointercancel', leave);
      window.removeEventListener('blur', leave);
      window.removeEventListener('scroll', leave);
      media.removeEventListener('change', leave);
    };
  }, []);

  function submitQuestion(value: string) {
    const nextQuestion = value.trim();
    if (!nextQuestion) return;
    ask(nextQuestion);
    setQuestion('');
  }

  useEffect(() => {
    const rail = suggestionsRef.current;
    if (!rail) return;
    const mobile = window.matchMedia('(max-width: 900px)');
    const scrollSuggestions = (event: WheelEvent) => {
      if (!mobile.matches) return;
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      rail.scrollLeft += delta;
    };
    rail.addEventListener('wheel', scrollSuggestions, { capture: true, passive: false });
    return () => rail.removeEventListener('wheel', scrollSuggestions, { capture: true });
  }, []);

  return (
    <div className={`hero-scroll-scene${reduceMotion ? ' hero-scroll-static' : ''}`}>
    <section ref={heroRef} className="hero hero-scroll-stage" data-entrance-visible={reduceMotion || entranceVisible ? 'true' : 'false'} data-header-theme="inverse" aria-label={t('香港城市与财富科技平台')}>
      {!reduceMotion && <motion.video ref={dotVideoRef} className="hero-dot-background" src="/assets/home-dot-animation.webm" muted loop playsInline preload="auto" aria-hidden="true" style={{ opacity: logoLift }} />}
      <svg className="hero-logo-background" aria-hidden="true" width="100%" height="100%">
        <defs>
          <clipPath id={logoClipId} clipPathUnits="userSpaceOnUse"><path ref={logoPathRef} d={heroLogoPath} /></clipPath>
          <linearGradient id={logoGradientId} x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#52ABFF" />
            <stop offset="32.87%" stopColor="#2269F6" />
            <stop offset="53.85%" stopColor="#121212" />
          </linearGradient>
        </defs>
        <g ref={logoImageRef}>
          <motion.image href="/assets/home-hero-hong-kong-new.png" width="100%" height="100%" preserveAspectRatio="xMidYMax slice" style={{ filter: backgroundBlur }} />
          <motion.rect x={gradientX} width={gradientWidth} height="100%" fill={`url(#${logoGradientId})`} style={{ opacity: gradientOpacity }} />
          <motion.rect width="100%" height="100%" fill="#121212" style={{ opacity: blackOpacity }} />
        </g>
      </svg>
      <div className="hero-digital-scan" aria-hidden="true">
        <div className="hero-digital-field">{Array.from({ length: 240 }, (_, index) => {
          const codes = index % 3 === 0 ? ['01', '10', '11', '00', '01'] : index % 3 === 1 ? ['10', '00', '01', '11', '10'] : ['001', '110', '010', '101', '001'];
          return <span key={index}><b style={{ animationDelay: `${-(index % 11) * .27}s` }}>{codes.map((code, row) => <i key={row}>{code}</i>)}</b></span>;
        })}</div>
      </div>
      <motion.div ref={chatBackdropRef} className="hero-ai-chat-backdrop" aria-hidden="true" style={{ opacity: chatBackdropOpacity }} />
      <motion.div className="hero-grid" style={{ opacity: contentOpacity }}>
        <motion.div className="hero-copy" variants={heroEntrance} initial={reduceMotion ? false : "hidden"} animate={reduceMotion || entranceVisible ? "visible" : "hidden"}>
          <motion.h1 variants={heroEntranceItem}>{t('AI 驱动的 Web5 财富科技平台')}</motion.h1>
          <motion.p variants={heroEntranceItem}>{t('您想了解哪类财富科技能力？我可以帮您快速找到对应的产品与解决方案')}</motion.p>
          <motion.div ref={chatRef} onUpdate={alignChatBackdrop} className="hero-ai-chat" aria-label={t('Finloop AI 业务助手')} variants={heroEntranceItem}>
            <div className="hero-ai-chat-background" aria-hidden="true" />
            <form autoComplete="off" onSubmit={event => { event.preventDefault(); submitQuestion(question); }}><label className="sr-only" htmlFor="hero-ai-question">{t('输入您的业务问题')}</label><input id="hero-ai-question" name="finloop-business-question" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck={false} value={question} onChange={event => setQuestion(event.target.value)} placeholder={t('请输入您的角色或您的业务问题，我们为你快速解决')} /><button type="submit" aria-label={t('发送问题')} disabled={isLoading || !question.trim()}><img src="/assets/ai-icon.svg" alt=""/><span>Ask AI</span></button></form>
            <div className="hero-ai-chat-footer"><div ref={suggestionsRef} className="hero-ai-suggestions" aria-label={t('示例问题')}>{heroSuggestionBatches[suggestionBatch].map(item => <button type="button" key={t(item)} onClick={() => submitQuestion(t(item))}>{t(item)}</button>)}</div></div>
          </motion.div>
          <div className="hero-ai-tools">
            <button className="hero-ai-shuffle" type="button" onClick={() => setSuggestionBatch(current => (current + 1) % heroSuggestionBatches.length)}><HeroIcon icon={RefreshCw} />{t('换一批')}</button>
          </div>
        </motion.div>
      </motion.div>
      {!reduceMotion && <div className="hero-metrics metric-grid" id="metrics" aria-label={t('Finloop 业务数据')}>
        {heroMetrics.map((item, index) => <HeroMetric key={t(item[2])} item={item} index={index} progress={reveal} reduced={false} />)}
      </div>}
    </section>
    {reduceMotion && <div className="metrics metric-grid" id="metrics">{heroMetrics.map((item, index) => <HeroMetric key={t(item[2])} item={item} index={index} progress={reveal} reduced />)}</div>}
    <MetricsVideoReveal reduced={Boolean(reduceMotion)} />
    </div>
  );
}

export function CoverageSection() {
  const [activeAsset, setActiveAsset] = useState<string | null>(null);

  return (
    <section className="coverage section-pad" id="coverage">
      <div className="coverage-header">
        <div><h2>{t('覆盖多元投资需求的财富产品货架')}</h2>
          <p>{t('连接现金管理、公募基金、私募基金、债券、结构性产品、保险、虚拟资产与 RWA 等产品类别，为不同客户与资产配置场景提供多元选择。')}</p>
        </div>
        <a className="button button-accent" href={localizedHref('/products')}>{t('查看全部金融产品')}<i data-lucide="arrow-right"></i></a>
      </div>

      <div className="product-universe" data-active={activeAsset}>
        <ProductGlobe />
        <div className="product-nodes" aria-label={t('金融产品类别')}>
          {assetTabs.map(([id, label], index) => (
            <button
              type="button"
              key={id}
              className={`product-node node-${index + 1}${activeAsset === id ? ' active' : ''}`}
              aria-expanded={activeAsset === id}
              onClick={() => setActiveAsset(id)}
              onMouseEnter={() => setActiveAsset(id)}
              onMouseLeave={() => setActiveAsset(null)}
              onBlur={() => setActiveAsset(null)}
              onKeyDown={event => { if (event.key === 'Escape') setActiveAsset(null); }}
              onFocus={() => setActiveAsset(id)}
            >
              <strong>{t(label)}</strong>
              <div><p>{t(assetContent[id][1])}</p><small>{t(assetContent[id][2])}</small></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

type SolutionItem = [string, string, string];

const solutionImages: Record<string, { src: string; alt: string }> = {
  'digital-wealth-management': {
    src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=82',
    alt: '数字财富管理团队协作场景',
  },
  'embedded-wealth': {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=82',
    alt: '嵌入式财富服务数字场景',
  },
  'corporate-treasury': {
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=82',
    alt: '企业财富管理场景',
  },
  'rwa-web3': {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=82',
    alt: 'RWA 与 Web3 技术基础设施',
  },
  'enterprise-ai': {
    src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=82',
    alt: '企业 AI 落地项目协作场景',
  },
  wealth: {
    src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=82',
    alt: '财富与资产管理团队协作场景',
  },
  broker: {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=82',
    alt: '证券与经纪机构办公建筑',
  },
  bank: {
    src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1800&q=82',
    alt: '银行数字金融服务场景',
  },
  platform: {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=82',
    alt: '支付与数字平台的数据界面',
  },
  digital: {
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=82',
    alt: '数字资产技术基础设施',
  },
  enterprise: {
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=82',
    alt: '企业财富管理协作空间',
  },
  'fde-ai': {
    src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=82',
    alt: '企业 AI 落地项目协作场景',
  },
};

type SolutionGroup = { id: string; label: string; title: string; description: string; items: SolutionItem[] };

export function SolutionsSection({ groups }: { groups: SolutionGroup[] }) {
  const [activeGroupId, setActiveGroupId] = useState(groups[0]?.id ?? '');
  const activeGroup = groups.find(group => group.id === activeGroupId) ?? groups[0];
  const items = activeGroup?.items ?? [];
  const [activeId, setActiveId] = useState(items[0]?.[0] ?? '');
  const activeIndex = Math.max(0, items.findIndex(([id]) => id === activeId));
  const activeItem = items[activeIndex] ?? items[0] ?? ['', '', ''];
  const activeImage = solutionImages[activeItem[0]] ?? solutionImages.wealth;

  useEffect(() => {
    if (items.length < 2) return undefined;
    const timer = window.setTimeout(() => {
      const nextIndex = (activeIndex + 1) % items.length;
      setActiveId(items[nextIndex][0]);
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [activeId, activeIndex, items]);

  useEffect(() => setActiveId(items[0]?.[0] ?? ''), [activeGroupId]);

  return (
    <section className="solutions section-pad" id="solutions">
      <div className="solution-showcase">
        <div className="solution-copy">
          <div className="solution-heading">
            <h2>{t(activeGroup?.title)}</h2>
            <p>{t(activeGroup?.description)}</p>
          </div>
          <div className="solution-mode-tabs" role="tablist" aria-label={t('解决方案分类方式')}>
            {groups.map(group => <button key={group.id} type="button" role="tab" aria-selected={group.id === activeGroupId} onClick={() => setActiveGroupId(group.id)}>{t(group.label)}</button>)}
          </div>
          <div className="solution-accordion">
            {items.map(([id, name, desc]) => {
              const isActive = activeId === id;
              return (
                <article
                  className={`solution-option${isActive ? ' active' : ''}`}
                  key={id}
                >
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={`solution-detail-${id}`}
                    onClick={() => setActiveId(id)}
                  >
                    <strong>{t(name)}</strong>
                    <i aria-hidden="true">{isActive ? '−' : '+'}</i>
                  </button>
                  <div className="solution-option-detail" id={`solution-detail-${id}`} aria-hidden={!isActive}>
                    <p>{t(desc)}</p>
                    <a href={localizedHref(`/solutions/${id}`)}>{t('了解方案')}<i data-lucide="arrow-right"></i></a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <figure className="solution-media">
          <img key={activeItem[0]} src={activeImage.src} alt={t(activeImage.alt)} />
          <figcaption>
            <strong>{t(activeItem[1])}</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
