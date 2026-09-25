"use client";

// Adapted from Moazam Trade's Wireframe Dotted Globe on 21st.dev.
import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { globeConfig as config } from './globe.config';
import type { Feature, FeatureCollection, Polygon, MultiPolygon } from 'geojson';
import { useReducedMotion } from 'motion/react';

type Land = Feature<Polygon | MultiPolygon>;
interface RotatingEarthProps {
  width?: number;
  height?: number;
  className?: string;
  interactive?: boolean;
}

function pointInRing([x, y]: [number, number], ring: number[][]) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

function generateDots(feature: Land) {
  const polygons = feature.geometry.type === 'Polygon' ? [feature.geometry.coordinates] : feature.geometry.coordinates;
  const dots: [number, number][] = [];
  for (const polygon of polygons) {
    const minLng = Math.min(...polygon[0].map(point => point[0]));
    const maxLng = Math.max(...polygon[0].map(point => point[0]));
    const minLat = Math.min(...polygon[0].map(point => point[1]));
    const maxLat = Math.max(...polygon[0].map(point => point[1]));
    for (let lng = minLng; lng <= maxLng; lng += Math.max(.1, config.dotSpacing)) {
      for (let lat = minLat; lat <= maxLat; lat += Math.max(.1, config.dotSpacing)) {
        const point: [number, number] = [lng, lat];
        if (pointInRing(point, polygon[0]) && !polygon.slice(1).some(ring => pointInRing(point, ring))) dots.push(point);
      }
    }
  }
  return dots;
}

export default function RotatingEarth({ width = 800, height = 600, className = '', interactive = true }: RotatingEarthProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !container || !context) return;
    const controller = new AbortController();
    let land: FeatureCollection<Polygon | MultiPolygon> | undefined;
    let dots: [number, number][] = [];
    let canvasWidth = width;
    let canvasHeight = height;
    let radius = 1;
    let zoom = 1;
    let visible = false;
    let dragging = false;
    let start: [number, number] = [0, 0];
    let startRotation: [number, number] = [0, 0];
    const rotation: [number, number] = [...config.initialRotation];
    const projection = d3.geoOrthographic().clipAngle(90);
    const path = d3.geoPath().projection(projection).context(context);
    const backProjection = d3.geoOrthographic().clipAngle(90).reflectX(true);
    const backPath = d3.geoPath().projection(backProjection).context(context);
    const graticule = d3.geoGraticule()();

    function render() {
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      const scale = projection.scale();
      const factor = scale / 240;
      context.beginPath();
      context.arc(canvasWidth / 2, canvasHeight / 2, scale, 0, Math.PI * 2);
      context.fillStyle = config.oceanColor;
      context.fill();
      if (config.outlineWidth > 0) {
        context.strokeStyle = config.outlineColor;
        context.lineWidth = config.outlineWidth * factor;
        context.stroke();
      }
      // Look at the opposite hemisphere, mirrored into the front view's coordinates.
      backProjection.scale(scale).translate(projection.translate())
        .rotate([rotation[0] + 180, -rotation[1]]);
      const center: [number, number] = [-rotation[0], -rotation[1]];
      const drawHemisphere = (back: boolean, opacity: number) => {
        if (opacity <= 0) return;
        const hemispherePath = back ? backPath : path;
        const hemisphereProjection = back ? backProjection : projection;
        context.save();
        if (config.gridWidth > 0) {
          context.beginPath();
          hemispherePath(graticule);
          context.globalAlpha = opacity * config.gridOpacity;
          context.strokeStyle = config.gridColor;
          context.lineWidth = config.gridWidth * factor;
          context.stroke();
        }
        context.globalAlpha = opacity;
        if (land && config.landWidth > 0) {
          context.beginPath();
          land.features.forEach(feature => hemispherePath(feature));
          context.strokeStyle = config.landColor;
          context.lineWidth = config.landWidth * factor;
          context.stroke();
        }
        context.fillStyle = config.dotColor;
        if (config.dotRadius > 0) dots.forEach(point => {
          const onBack = d3.geoDistance(point, center) >= Math.PI / 2;
          if (onBack !== back) return;
          const projected = hemisphereProjection(point);
          if (!projected) return;
          context.beginPath();
          context.arc(projected[0], projected[1], config.dotRadius * factor, 0, Math.PI * 2);
          context.fill();
        });
        context.restore();
      };
      drawHemisphere(true, Math.max(0, Math.min(1, config.backOpacity)));
      drawHemisphere(false, 1);
    }

    const resize = () => {
      canvasWidth = container.clientWidth || width;
      canvasHeight = canvasWidth * height / width;
      radius = Math.min(canvasWidth, canvasHeight) * config.radiusRatio;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(canvasWidth * dpr);
      canvas.height = Math.round(canvasHeight * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      projection.scale(radius * zoom).translate([canvasWidth / 2, canvasHeight / 2]).rotate(rotation);
      render();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    intersection.observe(container);
    let previous = 0;
    const timer = d3.timer(elapsed => {
      const delta = Math.min(elapsed - previous, 50);
      previous = elapsed;
      if (!visible || dragging || reducedMotion || document.hidden) return;
      rotation[0] += delta * config.rotationSpeed / 1000;
      projection.rotate(rotation);
      render();
    });
    const pointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      dragging = true;
      start = [event.clientX, event.clientY];
      startRotation = [...rotation];
      canvas.setPointerCapture(event.pointerId);
    };
    const pointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      rotation[0] = startRotation[0] + (event.clientX - start[0]) * .5;
      rotation[1] = Math.max(-90, Math.min(90, startRotation[1] - (event.clientY - start[1]) * .5));
      projection.rotate(rotation);
      render();
    };
    const pointerUp = () => { dragging = false; };
    const wheel = (event: WheelEvent) => {
      event.preventDefault();
      zoom = Math.max(.5, Math.min(3, zoom * (event.deltaY > 0 ? .9 : 1.1)));
      projection.scale(radius * zoom);
      render();
    };
    const keyDown = (event: KeyboardEvent) => {
      if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', '+', '-', '='].includes(event.key)) return;
      event.preventDefault();
      if (event.key === 'ArrowLeft') rotation[0] -= 5;
      if (event.key === 'ArrowRight') rotation[0] += 5;
      if (event.key === 'ArrowUp') rotation[1] = Math.min(90, rotation[1] + 5);
      if (event.key === 'ArrowDown') rotation[1] = Math.max(-90, rotation[1] - 5);
      if (event.key === '+' || event.key === '=') zoom = Math.min(3, zoom * 1.1);
      if (event.key === '-') zoom = Math.max(.5, zoom * .9);
      projection.rotate(rotation).scale(radius * zoom);
      render();
    };
    if (interactive) {
      canvas.addEventListener('pointerdown', pointerDown);
      canvas.addEventListener('pointermove', pointerMove);
      canvas.addEventListener('pointerup', pointerUp);
      canvas.addEventListener('pointercancel', pointerUp);
      canvas.addEventListener('lostpointercapture', pointerUp);
      canvas.addEventListener('wheel', wheel, { passive: false });
      canvas.addEventListener('keydown', keyDown);
    }
    setError(false);
    fetch('/assets/globe/ne_110m_land.json', { signal: controller.signal })
      .then(response => { if (!response.ok) throw new Error('Land data unavailable'); return response.json(); })
      .then((data: FeatureCollection<Polygon | MultiPolygon>) => {
        if (controller.signal.aborted) return;
        land = data;
        dots = data.features.flatMap(generateDots);
        render();
      })
      .catch(() => { if (!controller.signal.aborted) setError(true); });
    return () => {
      controller.abort();
      timer.stop();
      observer.disconnect();
      intersection.disconnect();
      canvas.removeEventListener('pointerdown', pointerDown);
      canvas.removeEventListener('pointermove', pointerMove);
      canvas.removeEventListener('pointerup', pointerUp);
      canvas.removeEventListener('pointercancel', pointerUp);
      canvas.removeEventListener('lostpointercapture', pointerUp);
      canvas.removeEventListener('wheel', wheel);
      canvas.removeEventListener('keydown', keyDown);
    };
  }, [width, height, interactive, reducedMotion]);

  return <div ref={containerRef} className={`wireframe-earth ${className}`} style={{ width: '100%', aspectRatio: `${width} / ${height}`, position: 'relative' }}>
    <canvas ref={canvasRef} tabIndex={interactive ? 0 : undefined} role={interactive ? 'img' : undefined} aria-label={interactive ? 'Rotating globe. Drag or use arrow keys to rotate; scroll or use plus and minus to zoom.' : undefined} style={{ display: 'block', width: '100%', height: 'auto', touchAction: interactive ? 'none' : 'auto', cursor: interactive ? 'grab' : undefined }} />
    {error && <p role="status">Unable to load globe map.</p>}
  </div>;
}
