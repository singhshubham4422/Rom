import React, { useState } from 'react';
import { STORY_ASSETS, STORY_CONTENT } from '../../data/storyData';
import { Heart, ArrowRight } from 'lucide-react';

interface Page3MemoriesProps {
  onNext: () => void;
}

export const Page3Memories: React.FC<Page3MemoriesProps> = ({ onNext }) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const content = STORY_CONTENT.page3;

  const handleNext = () => {
    if (isNavigating) return;
    setIsNavigating(true);
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-[520px] h-full p-4 select-none">
      
      {/* Artwork */}
      <div className="w-full relative rounded-3xl overflow-hidden shadow-lg border border-rose-200/80 bg-white/60 mb-5 max-w-sm aspect-[4/4.5] flex items-center justify-center">
        <img
          src={STORY_ASSETS.page3}
          alt="Couple together watching sunset skyline"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />

        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-rose-200/80 shadow-sm text-xs font-semibold text-rose-700 flex items-center gap-1">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>Our Journey</span>
        </div>
      </div>

      {/* Story Text */}
      <div className="w-full max-w-sm text-center mb-6 px-2 space-y-3">
        <h2 className="text-2xl sm:text-3xl font-serif-romantic font-bold text-rose-950 leading-snug">
          {content.title}
        </h2>
        
        <div className="space-y-2.5 text-rose-800 text-sm sm:text-base leading-relaxed font-normal">
          {content.paragraphs.map((p, idx) => (
            <p key={idx} className={idx === 2 ? 'font-semibold text-rose-900 font-handwriting text-2xl pt-1' : ''}>
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
