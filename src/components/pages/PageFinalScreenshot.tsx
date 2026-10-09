import React, { useState, useRef, useEffect } from 'react';
import { STORY_ASSETS, STORY_CONTENT } from '../../data/storyData';
import { ImageModal } from '../ImageModal';
import { Heart, Maximize2, RotateCcw, Clapperboard } from 'lucide-react';

interface PageFinalScreenshotProps {
  onRestart?: () => void;
}

export const PageFinalScreenshot: React.FC<PageFinalScreenshotProps> = ({ onRestart }) => {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const content = STORY_CONTENT.final;
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, []);

  return (
    <div className="w-full h-full flex-1 min-h-0 flex flex-col justify-between overflow-hidden">
      {/* Scrollable Content Body */}
      <div
        ref={scrollRef}
        className="flex-1 w-full min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain touch-pan-y px-3 sm:px-4 pt-2 pb-6 flex flex-col items-center"
      >
        {/* Subtle Header */}
        <div className="w-full max-w-sm text-center mb-3 pt-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/80 border border-rose-200 text-rose-800 text-xs font-bold mb-1 shadow-sm">
            <Clapperboard className="w-3.5 h-3.5 text-rose-500" />
            <span>Final Surprise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-romantic font-bold text-rose-950 mb-1">
            {content.heading}
          </h2>
          <p className="text-xs sm:text-sm text-rose-700 font-medium">
            {content.subheading}
          </p>
        </div>

        {/* Screenshot Container - Full uncropped view */}
        <div className="w-full max-w-sm relative rounded-2xl border-2 border-rose-200/90 bg-white shadow-xl overflow-hidden mb-4 group">
          <img
            src={STORY_ASSETS.finalScreenshot}
            alt="Movie listings in Noida screenshot"
            className="w-full h-auto object-contain cursor-pointer transition-transform duration-200 active:scale-[0.99]"
            onClick={() => setIsZoomOpen(true)}
            loading="eager"
          />

          {/* Floating Tap to Zoom badge */}
          <button
            onClick={() => setIsZoomOpen(true)}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 mx-auto px-4 py-2 rounded-full bg-slate-900/85 hover:bg-slate-900 backdrop-blur-md text-white text-xs font-semibold shadow-lg flex items-center gap-1.5 transition-all z-10 cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5 text-rose-300" />
            <span>Tap to View Fullscreen</span>
          </button>
        </div>

        {/* Bottom note */}
        <p className="text-xs sm:text-sm text-rose-700/90 text-center font-medium font-handwriting text-xl sm:text-2xl px-2">
          Movie tum choose karogi, aur popcorn meri taraf se! 🥰🍿
        </p>
      </div>

      {/* FIXED Bottom Action Bar */}
      <div className="shrink-0 w-full px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur-md border-t border-rose-200/80 shadow-[0_-4px_20px_rgba(244,63,113,0.08)] z-20 flex flex-col items-center">
        <div className="w-full max-w-sm">
          {onRestart && (
            <button
              onClick={onRestart}
              className="w-full py-3.5 px-4 rounded-xl bg-white/90 hover:bg-rose-50 active:scale-95 text-rose-700 border border-rose-200 font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-rose-400" />
              <span>{content.replayBtn}</span>
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            </button>
          )}
        </div>
      </div>

      {/* Fullscreen Zoom Modal */}
      <ImageModal
        isOpen={isZoomOpen}
        onClose={() => setIsZoomOpen(false)}
        imageSrc={STORY_ASSETS.finalScreenshot}
        title="Noida Movies Showcase"
      />
    </div>
  );
};
