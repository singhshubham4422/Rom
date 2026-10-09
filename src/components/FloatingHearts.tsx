import React, { useMemo } from 'react';

interface HeartParticle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  emoji: string;
}

export const FloatingHearts: React.FC = () => {
  const emojis = ['❤️', '💖', '🌸', '✨', '💕', '🌹'];

  const particles: HeartParticle[] = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: Math.random() * 95,
      size: 14 + Math.random() * 16,
      duration: 12 + Math.random() * 10,
      delay: Math.random() * 8,
      opacity: 0.18 + Math.random() * 0.35,
      emoji: emojis[i % emojis.length],
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-[-40px] animate-float-particle"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
          }}
        >
          {p.emoji}
        </span>
      ))}
      <style>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-50vh) rotate(18deg) scale(1.08);
          }
          100% {
            transform: translateY(-110vh) rotate(-18deg) scale(0.95);
          }
        }
        .animate-float-particle {
          animation-name: float-up;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-float-particle {
            animation: none !important;
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
