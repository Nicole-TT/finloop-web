import { useEffect, useRef } from 'react';

/** The brand SVG rendered as continuously shifting character particles. */
export function ParticleWord() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    const logo = new Image();
    let logoReady = false;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let particles: { x: number; y: number; dx: number; dy: number; glyph: string; alpha: number; phase: number; offsetX: number; offsetY: number }[] = [];
    let logoFill: HTMLCanvasElement | null = null;
    let width = 0;
    let height = 0;
    let frame = 0;
    let disposed = false;
    let visible = true;
    let last = 0;
    const pointer = { x: 0, y: 0, active: false };
    const symbols = ".:+=*#01<>/|░▪○";
    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      if (logoFill) context.drawImage(logoFill, 0, 0);
      context.fillStyle = '#858b93';
      context.font = '9px monospace';
      context.textAlign = 'center';
      for (const point of particles) {
        context.globalAlpha = point.alpha * (.7 + .3 * Math.sin(time * .0015 + point.phase));
        const glyph = reducedMotion.matches ? point.glyph : symbols[Math.floor(time / 180 + point.phase) % symbols.length];
        const drift = reducedMotion.matches ? 0 : Math.sin(time * .0018 + point.phase) * .12;
        const baseX = point.x + point.dx * drift;
        const baseY = point.y + point.dy * drift;
        let targetX = 0;
        let targetY = 0;
        if (pointer.active && !reducedMotion.matches) {
          const deltaX = baseX - pointer.x;
          const deltaY = baseY - pointer.y;
          const distance = Math.hypot(deltaX, deltaY);
          const radius = Math.min(32.5, width * .065);
          if (distance < radius) {
            const angle = distance > .01 ? Math.atan2(deltaY, deltaX) : point.phase;
            const displacement = radius - distance;
            targetX = Math.cos(angle) * displacement;
            targetY = Math.sin(angle) * displacement;
          }
        }
        point.offsetX += (targetX - point.offsetX) * (pointer.active ? .35 : .15);
        point.offsetY += (targetY - point.offsetY) * (pointer.active ? .35 : .15);
        context.fillText(glyph, baseX + point.offsetX, baseY + point.offsetY);
      }
      context.globalAlpha = 1;
    };
    const tick = (time: number) => {
      frame = 0;
      if (!visible || disposed) return;
      if (time - last > 40) {
        draw(time);
        last = time;
      }
      if (!reducedMotion.matches) frame = requestAnimationFrame(tick);
    };
    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      if (!width || !height || !logoReady) return;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const mask = document.createElement('canvas');
      mask.width = Math.ceil(width);
      mask.height = Math.ceil(height);
      const ink = mask.getContext('2d');
      if (!ink) return;
      const logoWidth = Math.min(width * .88, (height - 48) * logo.naturalWidth / logo.naturalHeight);
      const logoHeight = logoWidth * logo.naturalHeight / logo.naturalWidth;
      ink.drawImage(logo, (width - logoWidth) / 2, (height - logoHeight) / 2, logoWidth, logoHeight);
      const pixels = ink.getImageData(0, 0, mask.width, mask.height).data;
      ink.globalCompositeOperation = 'source-in';
      ink.fillStyle = '#f0f1f3';
      ink.fillRect(0, 0, mask.width, mask.height);
      logoFill = mask;
      particles = [];
      for (let y = 0; y < mask.height; y += 7) {
        for (let x = 0; x < mask.width; x += 7) {
          if (pixels[(y * mask.width + x) * 4 + 3] > 100) {
            particles.push({ x, y, dx: (Math.random() - .5) * 36, dy: (Math.random() - .5) * 44, glyph: symbols[Math.floor(Math.random() * symbols.length)], alpha: .35 + Math.random() * .65, phase: Math.random() * 100, offsetX: 0, offsetY: 0 });
          }
        }
      }
      draw();
      canvas.dataset.ready = 'true';
    };
    const movePointer = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      const bounds = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - bounds.left) * width / bounds.width;
      pointer.y = (event.clientY - bounds.top) * height / bounds.height;
      pointer.active = true;
    };
    const leavePointer = () => { pointer.active = false; };
    canvas.addEventListener('pointermove', movePointer);
    canvas.addEventListener('pointerleave', leavePointer);
    canvas.addEventListener('pointercancel', leavePointer);
    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !frame && !reducedMotion.matches) frame = requestAnimationFrame(tick);
    });
    visibility.observe(canvas);
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    logo.src = '/assets/finloop-logo.svg';
    logo.decode().then(() => {
      if (disposed) return;
      logoReady = true;
      resize();
    }).catch(() => { /* Keep the SVG fallback visible if canvas loading fails. */ });
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      visibility.disconnect();
      canvas.removeEventListener('pointermove', movePointer);
      canvas.removeEventListener('pointerleave', leavePointer);
      canvas.removeEventListener('pointercancel', leavePointer);
    };
  }, []);
  return <div className="about-particle-word" aria-label="Finloop" role="img"><canvas ref={canvasRef} aria-hidden="true"/><span aria-hidden="true"><img src="/assets/finloop-logo.svg" alt=""/></span></div>;
}
