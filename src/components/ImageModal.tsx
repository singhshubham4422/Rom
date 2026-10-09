import React from 'react';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title = 'Movie Listings in Noida',
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-md p-2 sm:p-4 overflow-hidden"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white p-2 select-none">
            <div className="flex items-center gap-2">
              <ZoomIn className="w-4 h-4 text-rose-400" />
              <span className="text-sm font-semibold text-rose-100">{title}</span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close fullscreen image"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable image container */}
          <div className="flex-1 overflow-auto flex items-start justify-center p-1 sm:p-2">
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              src={imageSrc}
              alt={title}
              className="max-w-full sm:max-w-xl h-auto rounded-lg shadow-2xl object-contain"
            />
          </div>

          <div className="text-center py-2 text-xs text-rose-200/80">
            Pinch or scroll to explore all movies & showtimes 🍿❤️
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
