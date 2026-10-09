import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STORY_ASSETS, STORY_CONTENT } from '../../data/storyData';
import { Sparkles, Heart } from 'lucide-react';

interface Page1OpeningProps {
  onNext: () => void;
}

export const Page1Opening: React.FC<Page1OpeningProps> = ({ onNext }) => {
  const [showNoReaction, setShowNoReaction] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const content = STORY_CONTENT.page1;

  const handleYes = () => {
    if (isNavigating) return;
    setIsNavigating(true);
    onNext();
  };

  const handleNo = () => {
    setShowNoReaction(true);
  };

  const handleContinueAfterNo = () => {
    if (isNavigating) return;
    setIsNavigating(true);
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-[520px] h-full p-4 select-none">
      
      {/* Top Artwork Card */}
      <div className="w-full relative rounded-3xl overflow-hidden shadow-lg border border-rose-200/80 bg-white/60 mb-5 max-w-sm aspect-[4/4.5] flex items-center justify-center">
        <img
          src={STORY_ASSETS.page1}
          alt="Cute girl on laptop waiting for a special message"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
        
        {/* Floating badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-rose-200/80 shadow-sm text-xs font-semibold text-rose-700 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-pink-500" />
          <span>For My Cutie</span>
        </div>
      </div>

      {/* Content Text */}
      <div className="w-full max-w-sm text-center mb-6 px-2">
        <h1 className="text-2xl sm:text-3xl font-serif-romantic font-bold text-rose-950 mb-3 leading-snug">
          {content.question}
        </h1>
        <p className="text-base sm:text-lg text-rose-700 font-medium font-handwriting text-2xl tracking-wide">
          {content.subtext}
        </p>
      </div>

      {/* Interactive Responses & Buttons */}
      <div className="w-full max-w-sm flex flex-col gap-3">
        <AnimatePresence mode="wait">
          {!showNoReaction ? (
            <motion.div
              key="buttons"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-2 gap-3"
            >
              <button
                onClick={handleYes}
                disabled={isNavigating}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 active:scale-95 text-white font-bold text-base shadow-md shadow-rose-200 transition-all flex items-center justify-center gap-1.5"
              >
                <span>{content.yesBtn}</span>
              </button>

              <button
                onClick={handleNo}
                disabled={isNavigating}
                className="w-full py-3.5 px-4 rounded-2xl bg-white/90 hover:bg-rose-50 active:scale-95 text-rose-700 border-2 border-rose-200 font-bold text-base shadow-sm transition-all flex items-center justify-center gap-1.5"
              >
                <span>{content.noBtn}</span>
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="no-reaction"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 20 }}
              className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-rose-50/90 border border-rose-200 shadow-sm text-center"
            >
              <div className="flex items-center gap-1.5 text-rose-800 font-bold text-lg">
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-bounce" />
                <span>{content.noResponse}</span>
              </div>
              
              <button
                onClick={handleContinueAfterNo}
                disabled={isNavigating}
                className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>{content.noContinueBtn}</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
