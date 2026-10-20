/**
 * Helper to safely resolve asset URLs with the Vite base path
 * for both local dev ('/') and GitHub Pages ('/portfolio1/').
 */

export function getAssetUrl(path: string): string {
  if (!path) return '';
  // Data URLs, Blobs, and Absolute URLs remain untouched
  if (
    path.startsWith('data:') ||
    path.startsWith('blob:') ||
    path.startsWith('http://') ||
    path.startsWith('https://')
  ) {
    return path;
  }

  const base =
    (typeof import.meta !== 'undefined' && import.meta?.env?.BASE_URL) || '/';

  // If path already starts with the base URL, don't duplicate it
  if (base !== '/' && path.startsWith(base)) {
    return path;
  }

  const cleanBase = base.replace(/^\/+|\/+$/g, '');
  if (cleanBase && (path.startsWith(`/${cleanBase}/`) || path.startsWith(`${cleanBase}/`))) {
    return path.startsWith('/') ? path : `/${path}`;
  }

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}

/**
 * Preload a single image into the browser cache
 */
export function preloadImage(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    if (!src) return resolve(false);
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}
