/**
 * Unsplash photo IDs pinned for Fedbellygrouplimited.
 * Queries from SITE-BUILD-PROMPT.md §4. IDs verified against Unsplash CDN.
 */
export const unsplash = {
  // studio-session — recording studio / producer desk
  "studio-session": {
    id: "1598488035139-bdbb2231ce04",
    url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
    alt: "Recording studio session : Fedbelly producer collaboration context",
  },
  // mixing-desk — mixing console faders
  "mixing-desk": {
    id: "1598650320219-bea4b6f76c9a",
    url: "https://images.unsplash.com/photo-1598650320219-bea4b6f76c9a",
    alt: "Mixing console faders : Fedbelly toolkit and delivery workflow",
  },
  // headphones
  headphones: {
    id: "1484704849709-b94519863034",
    url: "https://images.unsplash.com/photo-1484704849709-b94519863034",
    alt: "Studio headphones : Fedbelly analytics and listening context",
  },
  // live-stage
  "live-stage": {
    id: "1470229722913-7c0e2dbb8d4c",
    url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbb8d4c",
    alt: "Live concert stage lights : Fedbelly Next Level operations",
  },
  // vinyl
  vinyl: {
    id: "1511671782779-c97d3d27a1d4",
    url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    alt: "Vinyl record on turntable : Fedbelly about and catalog story",
  },
  // city-night
  "city-night": {
    id: "1514565131-fce0801e5785",
    url: "https://images.unsplash.com/photo-1514565131-fce0801e5785",
    alt: "City night skyline : Fedbelly catalog work across territories",
  },
  // collaboration
  collaboration: {
    id: "1522071820081-009f0129c71c",
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    alt: "Creative collaboration at a table : Fedbelly Emerging solutions",
  },
  // waveform-photo — DAW / waveform screen
  "waveform-photo": {
    id: "1619983081563-430f63602799",
    url: "https://images.unsplash.com/photo-1619983081563-430f63602799",
    alt: "Audio waveform on screen : Fedbelly distribution packaging",
  },
  // control-room
  "control-room": {
    id: "1571330735066-03ccc943bce3",
    url: "https://images.unsplash.com/photo-1571330735066-03ccc943bce3",
    alt: "Music control room : Fedbelly rights and release workflow",
  },
  // artist portraits for creator strip
  "artist-portrait": {
    id: "1493225457124-a3eb161ffa5f",
    url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    alt: "Musician portrait under stage light : Fedbelly creator strip",
  },
  "artist-portrait-2": {
    id: "1516280447641-f581d0e6b6e0",
    url: "https://images.unsplash.com/photo-1516280447641-f581d0e6b6e0",
    alt: "Performer with guitar : Fedbelly creator strip",
  },
  "artist-portrait-3": {
    id: "1501386761575-b6c8760454f8",
    url: "https://images.unsplash.com/photo-1501386761575-b6c8760454f8",
    alt: "Live performer with mic : Fedbelly creator strip",
  },
} as const;

export type UnsplashKey = keyof typeof unsplash;

export function unsplashSrc(
  key: UnsplashKey,
  { w = 2400, q = 80 }: { w?: number; q?: number } = {},
) {
  const photo = unsplash[key];
  return `${photo.url}?auto=format&fit=crop&w=${w}&q=${q}`;
}
