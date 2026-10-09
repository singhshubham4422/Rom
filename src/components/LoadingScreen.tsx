import React from 'react';
import { motion } from 'framer-motion';
import { Heart, RefreshCw, AlertCircle } from 'lucide-react';
import { PreloadState } from '../types';

interface LoadingScreenProps {
  preloadState: PreloadState;
  onRetry: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ preloadState, onRetry }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-rose-100 via-pink-50 to-rose-100">
      <div className="w-full max-w-sm glass-card rounded-3xl p-8 shadow-xl flex flex-col items-center text-center relative overflow-hidden border border-rose-200">
        
        {/* Soft background glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-300/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-300/30 rounded-full blur-2xl pointer-events-none" />

        {!preloadState.isError ? (
          <>
            {/* Animated Pulsing Heart Icon */}
            <motion.div
              animate={{
                scale: [1, 1.18, 1, 1.14, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative mb-6"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-rose-500 to-pink-400 flex items-center justify-center text-white shadow-lg glow-rose">
                <Heart className="w-10 h-10 fill-white" />
              </div>
              
              {/* Little orbiting sparkles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 pointer-events-none"
              >
                <span className="absolute -top-1 right-1 text-sm">✨</span>
                <span className="absolute -bottom-1 left-1 text-sm">💖</span>
              </motion.div>
            </motion.div>

            <h2 className="text-2xl font-serif-romantic font-semibold text-rose-900 mb-2">
              Preparing something special for you… ❤️
            </h2>
            
            <p className="text-sm text-rose-700/80 mb-6 font-medium">
              Loading our memories, artwork & surprises
            </p>

            {/* Progress Bar Container */}
            <div className="w-full bg-rose-100/80 rounded-full h-3 mb-3 p-0.5 border border-rose-200 overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-pink-400 via-rose-500 to-rose-600 rounded-full shadow-sm"
                initial={{ width: '0%' }}
                animate={{ width: `${preloadState.progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.3 }}
              />
            </div>

            <div className="w-full flex justify-between items-center text-xs text-rose-600 font-semibold px-1">
              <span>{preloadState.loadedAssets} of {preloadState.totalAssets} assets loaded</span>
              <span>{preloadState.progress}%</span>
            </div>
          </>
        ) : (
          /* Error Fallback with Retry Button */
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-rose-100 border border-rose-300 flex items-center justify-center text-rose-600 mb-4">
              <AlertCircle className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-rose-900 mb-2">
              Oops! A memory couldn't load
            </h3>
            
            <p className="text-sm text-rose-700 mb-4">
              {preloadState.errorMessage || "Some assets couldn't be loaded properly. Please tap below to retry."}
            </p>

            {preloadState.failedAssets.length > 0 && (
              <div className="text-xs text-rose-500 bg-rose-50 p-2.5 rounded-xl border border-rose-200 mb-5 max-w-full truncate text-left w-full font-mono">
                {preloadState.failedAssets.join(', ')}
              </div>
            )}

            <button
              onClick={onRetry}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-medium text-sm shadow-md hover:from-rose-600 hover:to-pink-600 active:scale-95 transition-all"
            >
              <RefreshCw className="w-4 h-4 animate-spin-reverse" />
              Retry Loading Assets
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
