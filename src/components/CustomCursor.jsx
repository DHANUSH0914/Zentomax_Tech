import { useEffect, useRef } from 'react';
import '../styles/cursor.css';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const rafRef = useRef(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    // Immediately position off-screen until first move
    dot.style.transform = 'translate(-200px, -200px)';
    ringEl.style.transform = 'translate(-200px, -200px)';

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onMouseOver = (e) => {
      const target = e.target;
      const interactive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('card-hover') ||
        target.closest('.card-hover');

      if (interactive && !isHovering.current) {
        isHovering.current = true;
        dot.classList.add('cursor-hovering');
        ringEl.classList.add('cursor-ring-hovering');
      }
    };

    const onMouseOut = (e) => {
      const target = e.relatedTarget;
      if (!target) {
        isHovering.current = false;
        dot.classList.remove('cursor-hovering');
        ringEl.classList.remove('cursor-ring-hovering');
        return;
      }
      const interactive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('card-hover') ||
        target.closest('.card-hover');

      if (!interactive) {
        isHovering.current = false;
        dot.classList.remove('cursor-hovering');
        ringEl.classList.remove('cursor-ring-hovering');
      }
    };

    // Single RAF loop — uses only transform (GPU composited, no reflow)
    const animate = () => {
      // Dot snaps instantly to mouse
      dot.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;

      // Ring smoothly follows with lerp (easing = 0.12)
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      ringEl.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <>
      {/* Dot — snaps to mouse */}
      <div ref={dotRef} className="cursor-dot" />
      {/* Ring — lags behind smoothly */}
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
