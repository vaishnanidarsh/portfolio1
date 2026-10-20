import { getAssetUrl } from './assetHelper';

/**
 * Automatically removes solid/near-white background from image URLs
 * and returns a transparent PNG data URL, while preserving native
 * alpha transparency and handling GitHub Pages base paths.
 */
const cache = new Map<string, string>();

export async function makeTransparent(imageSrc: string, threshold = 230): Promise<string> {
  if (!imageSrc) return '';
  const resolvedSrc = getAssetUrl(imageSrc);
  if (cache.has(resolvedSrc)) return cache.get(resolvedSrc)!;

  return new Promise((resolve) => {
    const img = new Image();
    
    // Only set crossOrigin if requesting an external cross-origin URL
    const isExternal =
      resolvedSrc.startsWith('http://') || resolvedSrc.startsWith('https://');
    if (isExternal && typeof window !== 'undefined') {
      try {
        const url = new URL(resolvedSrc, window.location.href);
        if (url.origin !== window.location.origin) {
          img.crossOrigin = 'anonymous';
        }
      } catch {
        img.crossOrigin = 'anonymous';
      }
    }

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          cache.set(resolvedSrc, resolvedSrc);
          resolve(resolvedSrc);
          return;
        }

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        // First check if the image already has native transparency (e.g. transparent PNG cutout)
        let hasNativeAlpha = false;
        for (let i = 3; i < data.length; i += 16) {
          if (data[i] < 240) {
            hasNativeAlpha = true;
            break;
          }
        }

        // If the artwork is already transparent, preserve its native fidelity & highlights!
        if (hasNativeAlpha) {
          cache.set(resolvedSrc, resolvedSrc);
          resolve(resolvedSrc);
          return;
        }

        // Otherwise strip near-white background
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          const minRGB = Math.min(r, g, b);
          if (minRGB >= threshold) {
            const alphaFactor = (255 - minRGB) / (255 - threshold);
            data[i + 3] = Math.floor(data[i + 3] * Math.max(0, Math.min(1, alphaFactor)));
          }
        }

        ctx.putImageData(imgData, 0, 0);
        const resultUrl = canvas.toDataURL('image/png');
        cache.set(resolvedSrc, resultUrl);
        resolve(resultUrl);
      } catch (err) {
        console.warn('Could not remove background from image, using source:', err);
        cache.set(resolvedSrc, resolvedSrc);
        resolve(resolvedSrc);
      }
    };

    img.onerror = () => {
      console.warn('Image failed to load in makeTransparent:', resolvedSrc);
      resolve(resolvedSrc);
    };

    img.src = resolvedSrc;
  });
}

