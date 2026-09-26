import { type ReactNode } from "react";
import { UnsplashImage } from "@/components/media/UnsplashImage";
import { Parallax } from "@/components/motion/Parallax";
import type { UnsplashKey } from "@/lib/unsplash";

type SectionHeroProps = {
  title: string;
  support: string;
  photo: UnsplashKey;
  ctas?: ReactNode;
  parallax?: boolean;
  priority?: boolean;
};

export function SectionHero({
  title,
  support,
  photo,
  ctas,
  parallax = false,
  priority = false,
}: SectionHeroProps) {
  const media = (
    <UnsplashImage
      photo={photo}
      fill
      priority={priority}
      className="object-cover"
      sizes="100vw"
      width={2400}
    />
  );

  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      {parallax ? (
        <Parallax speed={0.55} className="absolute inset-0">
          {media}
        </Parallax>
      ) : (
        <div className="absolute inset-0">{media}</div>
      )}
      <div className="absolute inset-0 scrim-hero" />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-site flex-col justify-end px-4 pb-16 pt-24 md:justify-center md:px-8 md:pb-24 md:pt-20">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl leading-[1.1] tracking-[-0.035em] text-ivory md:text-5xl lg:text-6xl text-balance pb-1">
            {title}
          </h1>
          <p className="mt-5 max-w-[36ch] text-base leading-relaxed text-mist md:text-lg md:max-w-[42ch]">
            {support}
          </p>
          {ctas ? <div className="mt-8 flex flex-wrap gap-3">{ctas}</div> : null}
        </div>
      </div>
    </section>
  );
}
