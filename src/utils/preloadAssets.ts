/**
 * Asset Preloader Utility
 * Preloads all required images, performs image decoding,
 * waits for web fonts, handles retries, and tracks loading progress.
 */

export interface PreloadProgress {
  total: number;
  loaded: number;
  percent: number;
  failedAssets: string[];
}

/**
 * Preload a single image with exponential backoff retries and decoding.
 */
export async function preloadSingleImage(src: string, maxRetries = 3): Promise<void> {
  let attempt = 0;
  let lastError: unknown;

  while (attempt < maxRetries) {
    try {
      await new Promise<void>((resolve, reject) => {
        const img = new Image();
        let settled = false;

        img.onload = async () => {
          if (settled) return;
          if (img.naturalWidth === 0) {
            settled = true;
            reject(new Error(`Image loaded with zero dimensions: ${src}`));
            return;
          }
          try {
            if ('decode' in img && typeof img.decode === 'function') {
              await img.decode();
            }
          } catch (decodeErr) {
            // If decode throws on non-image/corrupted content, reject
            settled = true;
            reject(new Error(`Image decoding failed for ${src}: ${decodeErr}`));
            return;
          }
          settled = true;
          resolve();
        };

        img.onerror = () => {
          if (settled) return;
          settled = true;
          reject(new Error(`Failed to load image asset: ${src} (attempt ${attempt + 1})`));
        };

        // Cache-busting retry if attempt > 0
        img.src = attempt > 0 ? `${src}?retry=${attempt}` : src;
      });

      return; // Successfully loaded
    } catch (err) {
      lastError = err;
      attempt++;
      if (attempt < maxRetries) {
        await new Promise((r) => setTimeout(r, 400 * attempt));
      }
    }
  }

  throw lastError;
}

/**
 * Preload an array of asset URLs while notifying progress,
 * and wait for web fonts to be ready.
 */
export async function preloadAllAssets(
  assetUrls: string[],
  onProgress: (progress: PreloadProgress) => void
): Promise<{ success: boolean; failedAssets: string[] }> {
  const total = assetUrls.length;
  let loaded = 0;
  const failedAssets: string[] = [];

  // 1. Concurrently start loading fonts
  const fontsPromise = (async () => {
    try {
      if ('fonts' in document && document.fonts && typeof document.fonts.ready !== 'undefined') {
        await document.fonts.ready;
      }
    } catch {
      // Font loading failure fallback
    }
  })();

  // 2. Preload each image with progress tracking
  const imagePromises = assetUrls.map(async (url) => {
    try {
      await preloadSingleImage(url, 3);
      loaded++;
      onProgress({
        total,
        loaded,
        percent: Math.round((loaded / total) * 100),
        failedAssets,
      });
    } catch (err) {
      console.error(`Asset preload error: ${url}`, err);
      failedAssets.push(url);
    }
  });

  await Promise.all([...imagePromises, fontsPromise]);

  return {
    success: failedAssets.length === 0,
    failedAssets,
  };
}
