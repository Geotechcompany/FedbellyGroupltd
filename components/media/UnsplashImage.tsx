import Image, { type ImageProps } from "next/image";
import { unsplash, type UnsplashKey, unsplashSrc } from "@/lib/unsplash";

type UnsplashImageProps = Omit<ImageProps, "src" | "alt"> & {
  photo: UnsplashKey;
  alt?: string;
  width?: number;
  quality?: number;
};

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
  const src = unsplashSrc(photo);

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt || meta.alt}
        fill
        sizes={sizes}
        quality={quality}
        className={className}
        {...props}
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
      quality={quality}
      className={className}
      {...props}
    />
  );
}
