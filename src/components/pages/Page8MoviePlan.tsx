import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STORY_ASSETS, STORY_CONTENT } from '../../data/storyData';
import { Film, Popcorn, ArrowRight } from 'lucide-react';

interface Page8MoviePlanProps {
  onNext: () => void;
}

export const Page8MoviePlan: React.FC<Page8MoviePlanProps> = ({ onNext }) => {
  const [selectedResponse, setSelectedResponse] = useState<'yes' | 'no' | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const content = STORY_CONTENT.page8;

  const handleSelect = (choice: 'yes' | 'no') => {
    setSelectedResponse(choice);
  };

  const handleProceedToFinal = () => {
    if (isNavigating) return;
    setIsNavigating(true);
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-[520px] h-full p-4 select-none">
      
      {/* Artwork */}
      <div className="w-full relative rounded-3xl overflow-hidden shadow-lg border border-rose-200/80 bg-white/60 mb-4 max-w-sm aspect-[4/4.5] flex items-center justify-center">
        <img
          src={STORY_ASSETS.page8Movie}
          alt="Popcorn and tickets for a movie date"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />

        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-rose-200/80 shadow-sm text-xs font-semibold text-rose-700 flex items-center gap-1.5">
          <Popcorn className="w-3.5 h-3.5 text-rose-500" />
          <span>Movie Date Plan</span>
        </div>
      </div>

      {/* Movie Text */}
      <div className="w-full max-w-sm text-center mb-5 px-2 space-y-1.5">
        <h2 className="text-2xl sm:text-3xl font-serif-romantic font-bold text-rose-950 leading-snug">
          {content.heading}
        </h2>
        <p className="text-base sm:text-lg text-rose-600 font-semibold flex items-center justify-center gap-1.5">
          <Film className="w-4 h-4 text-rose-500" />
          <span>{content.subheading}</span>
        </p>
        <p className="text-lg text-rose-800 font-bold font-handwriting text-2xl pt-1">
          {content.question}
        </p>
      </div>

      {/* Buttons / Responses */}
      <div className="w-full max-w-sm flex flex-col gap-3">
        <AnimatePresence mode="wait">
          {!selectedResponse ? (
            <motion.div
              key="movie-buttons"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-2 gap-3"
            >
              <button
                onClick={() => handleSelect('yes')}
                className="w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 active:scale-95 text-white font-bold text-base shadow-md shadow-rose-200 transition-all flex items-center justify-center gap-1.5"
              >
                <span>{content.yesBtn}</span>
              </button>

              <button
                onClick={() => handleSelect('no')}
                className="w-full py-4 px-4 rounded-2xl bg-white/90 hover:bg-rose-50 active:scale-95 text-rose-700 border-2 border-rose-200 font-bold text-base shadow-sm transition-all flex items-center justify-center gap-1.5"
              >
                <span>{content.noBtn}</span>
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="movie-reply"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 20 }}
              className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-rose-50/95 border border-rose-200 shadow-sm text-center"
            >
              <div className="text-rose-900 font-bold text-lg sm:text-xl">
                {selectedResponse === 'yes' ? content.yesResponse : content.noResponse}
              </div>

              <button
                onClick={handleProceedToFinal}
                disabled={isNavigating}
                className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                <span>{selectedResponse === 'yes' ? content.yesContinueBtn : content.noContinueBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
