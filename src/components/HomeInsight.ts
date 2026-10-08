// Decorative simulated data: never presented as live market prices.
export const homeInsightMarkup = `<div class="home-insight-scene" aria-hidden="true">
  <div class="home-insight-chart"><canvas></canvas><div class="home-insight-summary"><span></span><span></span></div></div>
  <div class="home-insight-bank"><img src="/assets/home-figma/insight/bank.svg" alt="" /></div>
  <div class="home-insight-panel"><div class="home-insight-particles">${Array.from({length:14},(_,i)=>`<i style="--x:${7+(i*23)%87}%;--y:${9+(i*31)%80}%;--delay:${-i*.57}s;--duration:${3+i%4}s"></i>`).join('')}</div><strong><img src="/assets/home-figma/insight/star.svg" alt="" />AI Insight</strong><span></span><span></span></div>
</div>`;

export function initHomeInsights() {
  document.querySelectorAll<HTMLElement>('.home-insight-scene:not([data-initialized])').forEach(scene => {
    scene.dataset.initialized = 'true';
    const canvas = scene.querySelector('canvas')!;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const width = 380, height = 185, step = 9;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width*dpr; canvas.height = height*dpr;
    ctx.scale(dpr,dpr);
    let phase = 0, last = 0, raf = 0, visible = false;
    const price = (n:number) => 87 + 25*Math.sin(n*.13) + 12*Math.sin(n*.57) + 5*Math.sin(n*2.3);
    const draw = () => {
      ctx.clearRect(0,0,width,height);
      const start = Math.floor(phase), offset = (phase-start)*step;
      for(let i=0;i<45;i++) {
        const n=start+i, x=i*step-offset;
        const open=price(n), close=price(n+1);
        const volume=15+Math.abs(close-open)*3+18*(1+Math.sin(n*.31));
        const gradient=ctx.createLinearGradient(0,height-volume,0,height);
        gradient.addColorStop(0,'rgba(255,255,255,.22)');gradient.addColorStop(1,'rgba(255,255,255,0)');
        ctx.fillStyle=gradient;ctx.fillRect(x,height-volume,4,volume);
        const tick=i===44?Math.sin(phase*17)*3:0;
        ctx.strokeStyle=ctx.fillStyle=close>open?'#26c2d9':'#ec7559';
        ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(x+2,Math.min(open,close)-4);ctx.lineTo(x+2,Math.max(open,close)+5);ctx.stroke();
        ctx.fillRect(x,Math.min(open,close)+tick,5,Math.max(3,Math.abs(close-open)));
      }
      ctx.strokeStyle='rgba(154,174,195,.16)';ctx.lineWidth=2;ctx.beginPath();
      for(let x=0;x<=width;x+=4){const y=143+18*Math.sin(x*.023+phase*.15);if(x===0)ctx.moveTo(x,y);else ctx.lineTo(x,y)}ctx.stroke();
    };
    const loop=(now:number)=>{
      if(!scene.isConnected){observer.disconnect();return;}
      if(last)phase+=Math.min(now-last,50)/1800;
      last=now;draw();raf=requestAnimationFrame(loop);
    };
    const sync=()=>{cancelAnimationFrame(raf);last=0;scene.classList.toggle('is-animating',visible&&!reduce.matches&&!document.hidden);if(visible&&!reduce.matches&&!document.hidden)raf=requestAnimationFrame(loop);else draw();};
    const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:.05});
    observer.observe(scene);draw();
  });
}
