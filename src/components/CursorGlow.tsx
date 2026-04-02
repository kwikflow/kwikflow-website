'use client';

import { useEffect, useRef } from 'react';

export function CursorGlow() {
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = dot.current;
    if (!el) return;

    let mx = -100, my = -100, cx = -100, cy = -100;

    const move = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener('mousemove', move);

    let raf: number;
    const tick = () => {
      cx += (mx - cx) * 0.15;
      cy += (my - cy) * 0.15;
      el.style.left = `${cx}px`;
      el.style.top = `${cy}px`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onOver = () => el.classList.add('expanded');
    const onOut = () => el.classList.remove('expanded');
    const targets = document.querySelectorAll('a,button,[role="button"]');
    targets.forEach((t) => { t.addEventListener('mouseenter', onOver); t.addEventListener('mouseleave', onOut); });

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
      targets.forEach((t) => { t.removeEventListener('mouseenter', onOver); t.removeEventListener('mouseleave', onOut); });
    };
  }, []);

  return <div ref={dot} className="cursor-dot hidden sm:block" />;
}
