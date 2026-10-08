/**
 * Automatically removes solid/near-white background from image URLs
 * and returns a transparent PNG data URL.
 */
const cache = new Map<string, string>();

export async function makeTransparent(imageSrc: string, threshold = 230): Promise<string> {
  if (!imageSrc) return '';
  if (cache.has(imageSrc)) return cache.get(imageSrc)!;

  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(imageSrc);
          return;
        }

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Check if pixel is white or near-white background
          const minRGB = Math.min(r, g, b);
          if (minRGB >= threshold) {
            // Feather alpha gracefully between threshold and 255
            const alphaFactor = (255 - minRGB) / (255 - threshold);
            data[i + 3] = Math.floor(data[i + 3] * Math.max(0, Math.min(1, alphaFactor)));
          }
        }

        ctx.putImageData(imgData, 0, 0);
        const resultUrl = canvas.toDataURL('image/png');
        cache.set(imageSrc, resultUrl);
        resolve(resultUrl);
      } catch (err) {
        console.warn('Could not remove background from image:', err);
        resolve(imageSrc);
      }
    };
    img.onerror = () => resolve(imageSrc);
    img.src = imageSrc;
  });
}
