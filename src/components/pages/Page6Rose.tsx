import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STORY_ASSETS, STORY_CONTENT } from '../../data/storyData';
import { LoveBurstModal } from '../LoveBurstModal';
import confetti from 'canvas-confetti';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

interface Page6RoseProps {
  onNext: () => void;
}

export const Page6Rose: React.FC<Page6RoseProps> = ({ onNext }) => {
  const [showLoveBurst, setShowLoveBurst] = useState(false);
  const [acceptedRose, setAcceptedRose] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const content = STORY_CONTENT.page6;

  const handleYes = () => {
    setAcceptedRose(true);
    
    // Rose petal / heart confetti burst
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f43f71', '#e11d5a', '#fb7194', '#ffe4e6', '#ffd700'],
        shapes: ['circle'],
      });
    } catch {
      // Confetti fallback
    }
  };

  const handleNo = () => {
    setShowLoveBurst(true);
  };

  const handleContinueToPage7 = () => {
    if (isNavigating) return;
    setIsNavigating(true);
    setShowLoveBurst(false);
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-[520px] h-full p-4 select-none relative">
      
      {/* Artwork */}
      <div className="w-full relative rounded-3xl overflow-hidden shadow-lg border border-rose-200/80 bg-white/60 mb-4 max-w-sm aspect-[4/4.5] flex items-center justify-center">
        <img
          src={STORY_ASSETS.page6}
          alt="Gorgeous red rose with I LOVE YOU tag"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />

        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-rose-200/80 shadow-sm text-xs font-semibold text-rose-700 flex items-center gap-1">
          <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
          <span>A Rose For You</span>
        </div>
      </div>

      {/* Story text */}
      <div className="w-full max-w-sm text-center mb-5 px-2">
        <div className="space-y-1.5">
          <p className="text-base text-rose-700 font-semibold">
            {content.lines[0]}
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif-romantic font-extrabold text-rose-600 tracking-wide drop-shadow-sm">
            {content.lines[1]}
          </h2>
          <p className="text-base sm:text-lg text-rose-900 font-medium font-handwriting text-2xl pt-1">
            {content.lines[2]}
          </p>
        </div>
      </div>

      {/* Interactive Actions */}
      <div className="w-full max-w-sm flex flex-col gap-3">
        <AnimatePresence mode="wait">
          {!acceptedRose ? (
            <motion.div
              key="rose-choices"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-2 gap-3"
            >
              <button
                onClick={handleYes}
                disabled={isNavigating}
                className="w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 active:scale-95 text-white font-bold text-base shadow-md shadow-rose-200 transition-all flex items-center justify-center gap-1.5"
              >
                <span>{content.yesBtn}</span>
              </button>

              <button
                onClick={handleNo}
                disabled={isNavigating}
                className="w-full py-4 px-4 rounded-2xl bg-white/90 hover:bg-rose-50 active:scale-95 text-rose-700 border-2 border-rose-200 font-bold text-base shadow-sm transition-all flex items-center justify-center gap-1.5"
              >
                <span>{content.noBtn}</span>
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="accepted-view"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 20 }}
              className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-rose-50/95 border border-rose-200 shadow-sm text-center"
            >
              <div className="text-rose-900 font-bold text-lg flex items-center justify-center gap-1.5">
                <Sparkles className="w-5 h-5 text-rose-500 fill-rose-500" />
                <span>{content.yesFeedback}</span>
              </div>

              <button
                onClick={handleContinueToPage7}
                disabled={isNavigating}
                className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                <span>{content.yesContinueBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Full screen Playful "I LOVE YOU" Modal if NO is clicked */}
      <LoveBurstModal
        isOpen={showLoveBurst}
        onContinue={handleContinueToPage7}
      />
    </div>
  );
};
