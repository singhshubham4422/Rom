import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';

interface LoveBurstModalProps {
  isOpen: boolean;
  onContinue: () => void;
}

interface FloatingMessage {
  id: number;
  text: string;
  top: number;
  left: number;
  scale: number;
  rotation: number;
  delay: number;
  duration: number;
  colorClass: string;
}

export const LoveBurstModal: React.FC<LoveBurstModalProps> = ({ isOpen, onContinue }) => {
  if (!isOpen) return null;

  const messages: FloatingMessage[] = useMemo(() => {
    const phrases = [
      'I LOVE YOU ❤️',
      'I LOVE YOU SO MUCH! 💖',
      'Meri Cutie 🥰',
      'No se bach nahi sakti! 😜',
      'Always & Forever ❤️',
      'You are my world 🌍❤️',
      'I LOVE YOU! 🌹',
      'Meri jaan 💕',
      'I LOVE YOUUU! 🙈❤️',
      'Cutie Pie 🌸',
      'Sirf tum! 💖',
    ];

    const colors = [
      'text-rose-600 bg-white/95 border-rose-300',
      'text-pink-600 bg-rose-50/95 border-pink-300',
      'text-red-600 bg-white/95 border-red-300',
      'text-rose-700 bg-pink-100/95 border-rose-400',
    ];

    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      text: phrases[i % phrases.length],
      top: 5 + (i * 3.7) % 85,
      left: 5 + (i * 29) % 75,
      scale: 0.85 + ((i % 5) * 0.12),
      rotation: ((i % 7) - 3) * 6,
      delay: (i % 6) * 0.15,
      duration: 3 + (i % 4) * 0.5,
      colorClass: colors[i % colors.length],
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-between p-4 bg-rose-950/40 backdrop-blur-md overflow-hidden animate-fade-in">
      
      {/* Background Hearts Rain / Float */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {messages.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{
              opacity: [0, 0.95, 0.95, 0.7, 0.95],
              scale: [item.scale, item.scale * 1.08, item.scale],
              y: [0, -12, 0],
              rotate: [item.rotation - 3, item.rotation + 3, item.rotation - 3],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              top: `${item.top}%`,
              left: `${item.left}%`,
            }}
            className={`px-3 py-1.5 rounded-full border shadow-lg font-bold text-xs md:text-sm whitespace-nowrap select-none ${item.colorClass}`}
          >
            {item.text}
          </motion.div>
        ))}
      </div>

      {/* Center Playful Pop-up Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 260 }}
        className="my-auto z-10 w-full max-w-sm glass-card rounded-3xl p-6 sm:p-8 text-center shadow-2xl border-2 border-rose-300 relative glow-rose-strong"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-rose-500 to-pink-500 mx-auto flex items-center justify-center text-white mb-4 shadow-md glow-rose animate-pulse-subtle">
          <Heart className="w-9 h-9 fill-white" />
        </div>

        <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold mb-3 uppercase tracking-wider">
          Playful Alert 🙈
        </span>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-rose-900 mb-2 font-serif-romantic">
          NO bolne se kya hoga? 😏❤️
        </h2>

        <p className="text-base text-rose-800 font-semibold mb-4 leading-relaxed font-handwriting text-2xl">
          Kitna bhi mana kar lo madam, pyaar toh main hi karunga! Aur main tumhara hi hoon! 🙈🌹
        </p>

        <p className="text-xs text-rose-600 mb-6 font-medium">
          (Ab smile karo aur aage chalo cutie! ✨)
        </p>

        {/* Big Visible Continue Button leading to Page 7 */}
        <button
          onClick={onContinue}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white font-bold text-base shadow-lg shadow-rose-300/60 active:scale-95 transition-all flex items-center justify-center gap-2 group"
        >
          <span>Kitna bhi NO bolo, I LOVE YOU! Continue</span>
          <Sparkles className="w-5 h-5 text-yellow-200 fill-yellow-200" />
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
};
