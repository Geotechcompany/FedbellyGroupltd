"use client";

import { UnsplashImage } from "@/components/media/UnsplashImage";
import type { UnsplashKey } from "@/lib/unsplash";

const portraits: UnsplashKey[] = [
  "artist-portrait",
  "camera-operator",
  "studio-session",
  "cinema-audience",
  "studio-lights",
  "clapper",
  "collaboration",
  "live-stage",
];

export function CreatorStrip({ label }: { label: string }) {
  const row = [...portraits, ...portraits];

  return (
    <div className="overflow-hidden border-y border-graphite/50 bg-charcoal/40 py-8">
      <p className="mx-auto mb-6 max-w-site px-4 text-center text-sm text-mist md:px-8">
        {label}
      </p>
      <div className="relative">
        <div className="marquee-track gap-4 px-4">
          {row.map((photo, i) => (
            <div
              key={`${photo}-${i}`}
              className="relative h-28 w-44 shrink-0 overflow-hidden rounded-sm md:h-36 md:w-56"
            >
              <UnsplashImage
                photo={photo}
                fill
                className="object-cover"
                sizes="224px"
                width={400}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
