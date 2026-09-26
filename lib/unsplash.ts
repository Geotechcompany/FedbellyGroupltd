/**
 * Unsplash photography for Fedbellygrouplimited.
 * Local copies live in public/images/unsplash/ so next/image never
 * fetches remote Unsplash over TLS (avoids local cert/AV interception failures).
 * Source IDs documented for attribution; originals from images.unsplash.com.
 */
export const unsplash = {
  // studio-session — recording studio / producer desk
  "studio-session": {
    id: "1598488035139-bdbb2231ce04",
    src: "/images/unsplash/studio-session.jpg",
    alt: "Recording studio session : Fedbelly producer collaboration context",
  },
  // mixing-desk — mixing console / studio board
  "mixing-desk": {
    id: "1511379938547-c1f69419868d",
    src: "/images/unsplash/mixing-desk.jpg",
    alt: "Mixing console faders : Fedbelly toolkit and delivery workflow",
  },
  // headphones
  headphones: {
    id: "1478737270239-2f02b77fc618",
    src: "/images/unsplash/headphones.jpg",
    alt: "Studio headphones : Fedbelly analytics and listening context",
  },
  // live-stage
  "live-stage": {
    id: "1514525253161-7a46d19cd819",
    src: "/images/unsplash/live-stage.jpg",
    alt: "Live concert stage lights : Fedbelly Next Level operations",
  },
  // vinyl
  vinyl: {
    id: "1511671782779-c97d3d27a1d4",
    src: "/images/unsplash/vinyl.jpg",
    alt: "Vinyl record on turntable : Fedbelly about and catalog story",
  },
  // city-night
  "city-night": {
    id: "1514565131-fce0801e5785",
    src: "/images/unsplash/city-night.jpg",
    alt: "City night skyline : Fedbelly catalog work across territories",
  },
  // collaboration
  collaboration: {
    id: "1522071820081-009f0129c71c",
    src: "/images/unsplash/collaboration.jpg",
    alt: "Creative collaboration at a table : Fedbelly Emerging solutions",
  },
  // waveform-photo — music / listening visual
  "waveform-photo": {
    id: "1614149162883-504ce4d13909",
    src: "/images/unsplash/waveform-photo.jpg",
    alt: "Audio waveform on screen : Fedbelly distribution packaging",
  },
  // control-room
  "control-room": {
    id: "1557672172-298e090bd0f1",
    src: "/images/unsplash/control-room.jpg",
    alt: "Music control room : Fedbelly rights and release workflow",
  },
  // artist portraits for creator strip
  "artist-portrait": {
    id: "1493225457124-a3eb161ffa5f",
    src: "/images/unsplash/artist-portrait.jpg",
    alt: "Musician portrait under stage light : Fedbelly creator strip",
  },
  "artist-portrait-2": {
    id: "1524368535928-5b5e00ddc76b",
    src: "/images/unsplash/artist-portrait-2.jpg",
    alt: "Performer with guitar : Fedbelly creator strip",
  },
  "artist-portrait-3": {
    id: "1470225620780-dba8ba36b745",
    src: "/images/unsplash/artist-portrait-3.jpg",
    alt: "Live performer with mic : Fedbelly creator strip",
  },
} as const;

export type UnsplashKey = keyof typeof unsplash;

/** Local public path for next/image (no remote TLS fetch). */
export function unsplashSrc(
  key: UnsplashKey,
  _opts?: { w?: number; q?: number },
) {
  return unsplash[key].src;
}
