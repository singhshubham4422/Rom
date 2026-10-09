import React, { useState, useRef, useEffect } from 'react';
import { STORY_ASSETS, STORY_CONTENT } from '../../data/storyData';
import { HeartHandshake, ArrowRight } from 'lucide-react';

interface Page4HonestProps {
  onNext: () => void;
}

export const Page4Honest: React.FC<Page4HonestProps> = ({ onNext }) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const content = STORY_CONTENT.page4;
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
        {/* Artwork */}
        <div className="w-full relative rounded-3xl overflow-hidden shadow-lg border border-rose-200/80 bg-white/60 mb-3 max-w-xs sm:max-w-sm aspect-[4/3.8] flex items-center justify-center shrink-0">
          <img
            src={STORY_ASSETS.page4}
            alt="Holding hands inside a glowing heart"
            className="w-full h-full object-cover object-top"
            loading="eager"
          />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-rose-200/80 shadow-sm text-xs font-semibold text-rose-700 flex items-center gap-1">
            <HeartHandshake className="w-3.5 h-3.5 text-rose-500" />
            <span>Dil Ki Baat</span>
          </div>
        </div>

        {/* Honest Conversation Text Card */}
        <div className="w-full max-w-sm px-1">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-rose-100 shadow-sm space-y-2.5 text-rose-900 text-xs sm:text-sm leading-relaxed text-left">
            {content.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className={
                  idx === content.paragraphs.length - 1
                    ? 'font-bold text-rose-600 font-handwriting text-2xl pt-1'
                    : ''
                }
              >
                {p}
              </p>
            ))}
          </div>
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
