import React from 'react';
import { RotateCcw, Sparkles } from 'lucide-react';
import { StepId } from '../types';

interface HeaderProps {
  currentStep: StepId;
  onRestart?: () => void;
}

const STEP_ORDER: StepId[] = [
  'page_1_opening',
  'page_2_playful',
  'page_3_memories',
  'page_4_honest',
  'page_5_forgiveness',
  'page_6_rose',
  'page_7_photo',
  'page_8_movie',
  'final_screenshot',
];

export const Header: React.FC<HeaderProps> = ({ currentStep, onRestart }) => {
  const currentIndex = STEP_ORDER.indexOf(currentStep);

  return (
    <header className="w-full pt-4 pb-2 px-4 flex flex-col items-center select-none z-10 shrink-0">
      <div className="w-full flex items-center justify-between max-w-md mb-2.5">
        
        {/* Subtle Title Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/70 border border-rose-200/80 text-rose-800 text-xs font-semibold tracking-wide shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          <span>Rom & Cutie</span>
          <span className="text-rose-500">❤️</span>
        </div>

        {/* Story Step Counter */}
        <div className="text-xs font-semibold text-rose-700/80 tracking-wider">
          {currentIndex === STEP_ORDER.length - 1 ? (
            <span className="text-rose-600 font-bold">Forever ❤️</span>
          ) : (
            <span>Step {currentIndex + 1} of {STEP_ORDER.length}</span>
          )}
        </div>

        {/* Subtle Restart Button */}
        {onRestart && (
          <button
            onClick={onRestart}
            title="Start from beginning"
            aria-label="Restart story"
            className="p-1.5 rounded-full text-rose-400 hover:text-rose-600 hover:bg-rose-100/60 active:scale-95 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Progress Dots Bar */}
      <div className="flex items-center gap-1.5 w-full max-w-xs justify-center py-1">
        {STEP_ORDER.map((step, idx) => {
          const isActive = idx === currentIndex;
          const isCompleted = idx < currentIndex;
          return (
            <div
              key={step}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-6 bg-gradient-to-r from-rose-500 to-pink-500 shadow-sm'
                  : isCompleted
                  ? 'w-2 bg-rose-400'
                  : 'w-1.5 bg-rose-200/70'
              }`}
            />
          );
        })}
      </div>
    </header>
  );
};
