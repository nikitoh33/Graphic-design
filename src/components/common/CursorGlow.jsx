import { useEffect, useRef, useState } from 'react';
import './CursorGlow.css';

const CursorGlow = () => {
  const glowRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const posRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

  useEffect(() => {
    const handlePointerMove = e => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;
      if (!visible) setVisible(true);
    };

    const handlePointerLeave = () => {
      setVisible(false);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    let rafId = null;
    const animate = () => {
      const p = posRef.current;
      // Suave interpolación lerp
      p.x += (p.targetX - p.x) * 0.12;
      p.y += (p.targetY - p.y) * 0.12;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [visible]);

  return (
    <div
      ref={glowRef}
      className="cursor-glow-follower"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    />
  );
};

export default CursorGlow;

