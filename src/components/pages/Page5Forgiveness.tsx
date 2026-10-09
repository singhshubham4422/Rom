import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STORY_ASSETS, STORY_CONTENT } from '../../data/storyData';
import { Heart, Sparkles } from 'lucide-react';

interface Page5ForgivenessProps {
  onNext: () => void;
}

export const Page5Forgiveness: React.FC<Page5ForgivenessProps> = ({ onNext }) => {
  const [showNoResponse, setShowNoResponse] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const content = STORY_CONTENT.page5;
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, []);

  const handleYes = () => {
    if (isNavigating) return;
    setIsNavigating(true);
    onNext();
  };

  const handleNo = () => {
    setShowNoResponse(true);
  };

  const handleContinueAfterNo = () => {
    if (isNavigating) return;
    setIsNavigating(true);
    onNext();
  };

  return (
    <div className="w-full h-full flex-1 min-h-0 flex flex-col justify-between overflow-hidden">
      {/* Scrollable Content Body */}
      <div
        ref={scrollRef}
        className="flex-1 w-full min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain touch-pan-y px-4 pt-2 pb-6 flex flex-col items-center"
      >
        {/* Artwork */}
        <div className="w-full relative rounded-3xl overflow-hidden shadow-lg border border-rose-200/80 bg-white/60 mb-4 max-w-xs sm:max-w-sm aspect-[4/4] flex items-center justify-center shrink-0">
          <img
            src={STORY_ASSETS.page5}
            alt="Cute pleading boy with folded hands saying Sorry"
            className="w-full h-full object-cover object-top"
            loading="eager"
          />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-rose-200/80 shadow-sm text-xs font-semibold text-rose-700 flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Sorry Meri Cutie</span>
          </div>
        </div>

        {/* Question */}
        <div className="w-full max-w-sm text-center px-2">
          <h2 className="text-2xl sm:text-3xl font-serif-romantic font-bold text-rose-950 leading-snug">
            {content.question}
          </h2>
        </div>
      </div>

      {/* FIXED Bottom Action Bar */}
      <div className="shrink-0 w-full px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur-md border-t border-rose-200/80 shadow-[0_-4px_20px_rgba(244,63,113,0.08)] z-20 flex flex-col items-center">
        <div className="w-full max-w-sm">
          <AnimatePresence mode="wait">
            {!showNoResponse ? (
              <motion.div
                key="buttons"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="grid grid-cols-2 gap-3"
              >
                <button
                  onClick={handleYes}
                  disabled={isNavigating}
                  className="w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 active:scale-95 text-white font-bold text-sm sm:text-base shadow-md shadow-rose-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>{content.yesBtn}</span>
                </button>
                <button
                  onClick={handleNo}
                  disabled={isNavigating}
                  className="w-full py-4 px-4 rounded-2xl bg-white/90 hover:bg-rose-50 active:scale-95 text-rose-700 border-2 border-rose-200 font-bold text-sm sm:text-base shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>{content.noBtn}</span>
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="no-dialog"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', damping: 20 }}
                className="flex flex-col items-center gap-2.5 p-3 rounded-2xl bg-rose-50/95 border border-rose-200 shadow-sm text-center"
              >
                <div className="text-rose-900 font-semibold text-sm sm:text-base leading-relaxed whitespace-pre-line font-handwriting text-2xl">
                  {content.noResponse}
                </div>
                <button
                  onClick={handleContinueAfterNo}
                  disabled={isNavigating}
                  className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{content.noContinueBtn}</span>
                  <Sparkles className="w-4 h-4 text-yellow-200 fill-yellow-200" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
