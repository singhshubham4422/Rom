import React, { useState, useRef, useEffect } from 'react';
import { STORY_ASSETS, STORY_CONTENT } from '../../data/storyData';
import { Camera, ArrowRight, Heart } from 'lucide-react';

interface Page7PhotoProps {
  onNext: () => void;
}

export const Page7Photo: React.FC<Page7PhotoProps> = ({ onNext }) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const content = STORY_CONTENT.page7;
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, []);

  const handleNext = () => {
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
        {/* Artwork / Her Polaroid Photo Frame */}
        <div className="w-full relative rounded-3xl overflow-hidden shadow-xl border border-rose-200/80 bg-white/70 mb-4 max-w-xs sm:max-w-sm aspect-[4/4.5] flex items-center justify-center p-2 shrink-0">
          <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-inner">
            <img
              src={STORY_ASSETS.page7Photo}
              alt="Her lovely polaroid memory"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>

          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-rose-200/80 shadow-sm text-xs font-semibold text-rose-700 flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5 text-rose-500" />
            <span>My Favorite View</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full max-w-sm text-center px-2 space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-serif-romantic font-bold text-rose-950 leading-snug">
            {content.heading}
          </h2>
          <p className="text-sm sm:text-base text-rose-800 font-medium leading-relaxed font-handwriting text-2xl">
            {content.caption}
          </p>
        </div>
      </div>

      {/* FIXED Bottom Action Bar */}
      <div className="shrink-0 w-full px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur-md border-t border-rose-200/80 shadow-[0_-4px_20px_rgba(244,63,113,0.08)] z-20 flex flex-col items-center">
        <div className="w-full max-w-sm">
          <button
            onClick={handleNext}
            disabled={isNavigating}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 active:scale-95 text-white font-bold text-base shadow-md shadow-rose-200 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>{content.nextBtn}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
