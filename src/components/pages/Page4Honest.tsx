import React, { useState } from 'react';
import { STORY_ASSETS, STORY_CONTENT } from '../../data/storyData';
import { HeartHandshake, ArrowRight } from 'lucide-react';

interface Page4HonestProps {
  onNext: () => void;
}

export const Page4Honest: React.FC<Page4HonestProps> = ({ onNext }) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const content = STORY_CONTENT.page4;

  const handleNext = () => {
    if (isNavigating) return;
    setIsNavigating(true);
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-[520px] h-full p-4 select-none">
      
      {/* Artwork */}
      <div className="w-full relative rounded-3xl overflow-hidden shadow-lg border border-rose-200/80 bg-white/60 mb-4 max-w-sm aspect-[4/4] flex items-center justify-center">
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
      <div className="w-full max-w-sm mb-4 px-1">
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

      {/* Next Button */}
      <div className="w-full max-w-sm">
        <button
          onClick={handleNext}
          disabled={isNavigating}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 active:scale-95 text-white font-bold text-base shadow-md shadow-rose-200 transition-all flex items-center justify-center gap-2 group"
        >
          <span>{content.nextBtn}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
