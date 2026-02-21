import { useEffect, useRef } from 'react';
import '../styles/cursor.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const particlesRef = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Create particle elements
    const createParticles = () => {
      const particleCount = 5;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'cursor-particle';
        particle.style.left = '0px';
        particle.style.top = '0px';
        document.body.appendChild(particle);
        particlesRef.current.push({
          element: particle,
          x: 0,
          y: 0,
          vx: 0,
          vy: 0,
          delay: i * 0.05,
        });
      }
    };

    createParticles();

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = (e) => {
      const isInteractive =
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.classList.contains('cursor-pointer') ||
        e.target.classList.contains('hover:scale-105') ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA';

      if (isInteractive) {
        isHoveringRef.current = true;
        cursor.classList.add('hovering');
      }
    };

    const handleMouseLeave = () => {
      isHoveringRef.current = false;
      cursor.classList.remove('hovering');
    };

    // Animation loop for particles
    const animate = () => {
      // Update cursor position
      cursor.style.left = `${mousePos.current.x}px`;
      cursor.style.top = `${mousePos.current.y}px`;

      // Update particles
      particlesRef.current.forEach((particle, index) => {
        const tx = mousePos.current.x;
        const ty = mousePos.current.y;

        // Calculate distance and angle
        const dx = tx - particle.x;
        const dy = ty - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Faster movement with higher acceleration
        const acceleration = 0.25 + index * 0.05;
        particle.vx += (dx * acceleration) / (distance || 1);
        particle.vy += (dy * acceleration) / (distance || 1);

        // Apply friction
        particle.vx *= 0.85;
        particle.vy *= 0.85;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Update DOM
        particle.element.style.left = `${particle.x}px`;
        particle.element.style.top = `${particle.y}px`;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true, capture: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true, capture: true });

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      
      // Clean up particles
      particlesRef.current.forEach((particle) => {
        particle.element.remove();
      });
      particlesRef.current = [];
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor-main"
      style={{
        left: '0px',
        top: '0px',
      }}
    />
  );
}
