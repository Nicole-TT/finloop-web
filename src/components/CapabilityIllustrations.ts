// Three generated keyframes per illustration, displayed without redrawing the artwork.
export const capabilityIllustrations = ['products', 'connect', 'security', 'ai'].map((name, index) =>
  `<div class="why-visual capability-motion capability-story" aria-hidden="true" style="--story-offset:${index * -.6}s">
    <div class="cap-story-stage">${[0, 1, 2].map(frame => `<span class="cap-story-frame" style="--frame-delay:${-12 + frame * 4}s;background-image:url('/assets/home-capabilities/${name}-story.png');background-position:${frame * 50}% center"></span>`).join('')}</div>
  </div>`
);
