import Image, { type ImageProps } from "next/image";
import { unsplash, type UnsplashKey, unsplashSrc } from "@/lib/unsplash";

type UnsplashImageProps = Omit<ImageProps, "src" | "alt" | "unoptimized"> & {
  photo: UnsplashKey;
  alt?: string;
  width?: number;
  quality?: number;
};

/**
 * Unsplash photos via next/image with `unoptimized` always on.
 * Remote Unsplash URLs must not go through `/_next/image` on this host —
 * Node TLS fails with UNABLE_TO_VERIFY_LEAF_SIGNATURE when fetchExternalImage
 * tries to pull images.unsplash.com.
 */
export function UnsplashImage({
  photo,
  alt,
  width = 2400,
  quality = 80,
  className = "",
  fill,
  sizes = "(max-width: 768px) 100vw, 1400px",
  ...props
}: UnsplashImageProps) {
  const meta = unsplash[photo];
  const src = unsplashSrc(photo, { w: width, q: quality });

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt || meta.alt}
        fill
        sizes={sizes}
        className={className}
        {...props}
        unoptimized
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt || meta.alt}
      width={width}
      height={Math.round(width * 0.66)}
      sizes={sizes}
      className={className}
      {...props}
      unoptimized
    />
  );
}
