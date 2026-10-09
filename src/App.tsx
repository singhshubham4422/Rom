import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { StepId, PreloadState } from './types';
import { REQUIRED_IMAGE_PATHS } from './data/storyData';
import { preloadAllAssets } from './utils/preloadAssets';
import { LoadingScreen } from './components/LoadingScreen';
import { Header } from './components/Header';
import { FloatingHearts } from './components/FloatingHearts';
import { Page1Opening } from './components/pages/Page1Opening';
import { Page2Playful } from './components/pages/Page2Playful';
import { Page3Memories } from './components/pages/Page3Memories';
import { Page4Honest } from './components/pages/Page4Honest';
import { Page5Forgiveness } from './components/pages/Page5Forgiveness';
import { Page6Rose } from './components/pages/Page6Rose';
import { Page7Photo } from './components/pages/Page7Photo';
import { Page8MoviePlan } from './components/pages/Page8MoviePlan';
import { PageFinalScreenshot } from './components/pages/PageFinalScreenshot';

export const App: React.FC = () => {
  const [preloadState, setPreloadState] = useState<PreloadState>({
    isLoading: true,
    progress: 0,
    totalAssets: REQUIRED_IMAGE_PATHS.length,
    loadedAssets: 0,
    failedAssets: [],
    isError: false,
  });

  const [currentStep, setCurrentStep] = useState<StepId>('page_1_opening');

  const startPreloading = useCallback(async () => {
    setPreloadState({
      isLoading: true,
      progress: 0,
      totalAssets: REQUIRED_IMAGE_PATHS.length,
      loadedAssets: 0,
      failedAssets: [],
      isError: false,
    });

    const result = await preloadAllAssets(REQUIRED_IMAGE_PATHS, (p) => {
      setPreloadState((prev) => ({
        ...prev,
        progress: p.percent,
        loadedAssets: p.loaded,
        totalAssets: p.total,
        failedAssets: p.failedAssets,
      }));
    });

    if (result.success) {
      setPreloadState((prev) => ({
        ...prev,
        isLoading: false,
        progress: 100,
        isError: false,
      }));
    } else {
      setPreloadState((prev) => ({
        ...prev,
        isLoading: false,
        isError: true,
        errorMessage: 'Some images could not be loaded. Please check your connection and tap retry.',
        failedAssets: result.failedAssets,
      }));
    }
  }, []);

  useEffect(() => {
    startPreloading();
  }, [startPreloading]);

  const handleRestart = () => {
    setCurrentStep('page_1_opening');
  };

  return (
    <div className="min-h-[100dvh] w-full flex flex-col items-center justify-center p-0 sm:p-4 md:p-6 bg-gradient-to-br from-rose-100/90 via-pink-50 to-rose-200/80 relative overflow-x-hidden">
      
      {/* Background ambient floating hearts */}
      <FloatingHearts />

      {/* Loading Screen until all assets and fonts are ready */}
      {preloadState.isLoading || preloadState.isError ? (
        <LoadingScreen
          preloadState={preloadState}
          onRetry={startPreloading}
        />
      ) : (
        /* Main Mobile Container Card */
        <main className="w-full max-w-md min-h-[100dvh] sm:min-h-[820px] sm:max-h-[92vh] sm:rounded-[2.5rem] glass-card flex flex-col justify-between relative shadow-2xl border-0 sm:border sm:border-rose-200/80 overflow-hidden z-10">
          
          {/* Header Bar */}
          <Header
            currentStep={currentStep}
            onRestart={handleRestart}
          />

          {/* Animated Page Transitions */}
          <div className="flex-1 w-full flex flex-col justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              {currentStep === 'page_1_opening' && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <Page1Opening onNext={() => setCurrentStep('page_2_playful')} />
                </motion.div>
              )}

              {currentStep === 'page_2_playful' && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <Page2Playful onNext={() => setCurrentStep('page_3_memories')} />
                </motion.div>
              )}

              {currentStep === 'page_3_memories' && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <Page3Memories onNext={() => setCurrentStep('page_4_honest')} />
                </motion.div>
              )}

              {currentStep === 'page_4_honest' && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <Page4Honest onNext={() => setCurrentStep('page_5_forgiveness')} />
                </motion.div>
              )}

              {currentStep === 'page_5_forgiveness' && (
                <motion.div
                  key="step-5"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <Page5Forgiveness onNext={() => setCurrentStep('page_6_rose')} />
                </motion.div>
              )}

              {currentStep === 'page_6_rose' && (
                <motion.div
                  key="step-6"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <Page6Rose onNext={() => setCurrentStep('page_7_photo')} />
                </motion.div>
              )}

              {currentStep === 'page_7_photo' && (
                <motion.div
                  key="step-7"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <Page7Photo onNext={() => setCurrentStep('page_8_movie')} />
                </motion.div>
              )}

              {currentStep === 'page_8_movie' && (
                <motion.div
                  key="step-8"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <Page8MoviePlan onNext={() => setCurrentStep('final_screenshot')} />
                </motion.div>
              )}

              {currentStep === 'final_screenshot' && (
                <motion.div
                  key="step-final"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <PageFinalScreenshot onRestart={handleRestart} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      )}
    </div>
  );
};

export default App;
