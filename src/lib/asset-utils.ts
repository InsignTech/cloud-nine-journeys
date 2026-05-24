/**
 * Resolve asset paths for Vite — works in both dev and production builds
 * @param assetName - Filename of the asset (e.g., 'paris.avif')
 * @returns Resolved asset URL
 */
export function getAssetUrl(assetName: string): string {
  return new URL(`../assets/${assetName}`, import.meta.url).href;
}
