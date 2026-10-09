import React, { useState } from 'react';
import { STORY_ASSETS, STORY_CONTENT } from '../../data/storyData';
import { ImageModal } from '../ImageModal';
import { Heart, Maximize2, RotateCcw, Clapperboard } from 'lucide-react';

interface PageFinalScreenshotProps {
  onRestart?: () => void;
}

export const PageFinalScreenshot: React.FC<PageFinalScreenshotProps> = ({ onRestart }) => {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const content = STORY_CONTENT.final;

  return (
    <div className="flex flex-col items-center justify-between min-h-[580px] h-full p-3 sm:p-4 select-none">
      
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

      {/* Screenshot Container - Full view, aspect preserved, vertically scrollable */}
      <div className="w-full max-w-sm relative flex-1 flex flex-col items-center mb-3 min-h-[360px] max-h-[58vh]">
        <div className="w-full h-full rounded-2xl border-2 border-rose-200/90 bg-white shadow-xl overflow-y-auto overflow-x-hidden relative group">
          
          {/* Complete Image - Uncropped, preserved aspect ratio */}
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
            className="sticky bottom-2 left-1/2 -translate-x-1/2 mx-auto px-4 py-2 rounded-full bg-slate-900/85 hover:bg-slate-900 backdrop-blur-md text-white text-xs font-semibold shadow-lg flex items-center gap-1.5 transition-all z-10"
          >
            <Maximize2 className="w-3.5 h-3.5 text-rose-300" />
            <span>Tap to View Fullscreen</span>
          </button>
        </div>
      </div>

      {/* Bottom note & Replay button */}
      <div className="w-full max-w-sm flex flex-col items-center gap-2 pt-1">
        <p className="text-xs text-rose-700/80 text-center font-medium font-handwriting text-xl">
          Movie tum choose karogi, aur popcorn meri taraf se! 🥰🍿
        </p>

        {onRestart && (
          <button
            onClick={onRestart}
            className="w-full py-3 px-4 rounded-xl bg-white/90 hover:bg-rose-50 active:scale-95 text-rose-700 border border-rose-200 font-semibold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-3.5 h-3.5 text-rose-400" />
            <span>{content.replayBtn}</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
          </button>
        )}
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
