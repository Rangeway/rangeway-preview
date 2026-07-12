import { imageMetadata } from "./image-metadata.mjs";

export function getResponsiveImage(src) {
  const metadata = imageMetadata[src];
  if (!metadata) return { width: undefined, height: undefined, webpSrcset: undefined };

  const webpSrc = src.replace(/\.(jpe?g|png)$/i, ".webp");
  const smallWebpSrc = src.replace(/\.(jpe?g|png)$/i, "-640.webp");
  const webpSrcset = metadata.width > 640
    ? `${smallWebpSrc} 640w, ${webpSrc} ${metadata.width}w`
    : `${webpSrc} ${metadata.width}w`;

  return { ...metadata, webpSrcset };
}
