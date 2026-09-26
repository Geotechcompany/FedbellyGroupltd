/**
 * Unsplash photography for Fedbellygrouplimited.
 * Local copies live in public/images/unsplash/ so next/image never
 * fetches remote Unsplash over TLS (avoids local cert/AV interception failures).
 * Source IDs documented for attribution; originals from images.unsplash.com.
 *
 * Mix: film/cinema, video production, post, studio lighting, creative workspace,
 * with live performance kept as a minority (live-stage).
 */
export const unsplash = {
  // Film set — cinema camera crew on set (home hero, toolkit)
  "studio-session": {
    id: "1762314908602-2958d731a75c",
    src: "/images/unsplash/studio-session.jpg",
    alt: "Film crew operating a cinema camera on set : Fedbelly production collaboration",
  },
  // Cinema camera gear — production toolkit / workflows
  "mixing-desk": {
    id: "1619850015956-faca3ef84ca6",
    src: "/images/unsplash/mixing-desk.jpg",
    alt: "Cinema camera on a production table : Fedbelly toolkit and delivery workflow",
  },
  // Creative studio lighting (analytics / production context)
  headphones: {
    id: "1492691527719-9d1e07e534b4",
    src: "/images/unsplash/headphones.jpg",
    alt: "Studio softbox lighting setup : Fedbelly analytics and production context",
  },
  // Live performance — kept as minority music/entertainment visual
  "live-stage": {
    id: "1514525253161-7a46d19cd819",
    src: "/images/unsplash/live-stage.jpg",
    alt: "Live stage lights and crowd silhouette : Fedbelly Next Level operations",
  },
  // Film archive / reels — catalog & rights story
  vinyl: {
    id: "1478720568477-152d9b164e26",
    src: "/images/unsplash/vinyl.jpg",
    alt: "Stacked film reels in archive light : Fedbelly about and catalog story",
  },
  // City atmosphere (not genre-locked)
  "city-night": {
    id: "1514565131-fce0801e5785",
    src: "/images/unsplash/city-night.jpg",
    alt: "City night skyline : Fedbelly catalog work across territories",
  },
  // Creative collaboration workspace
  collaboration: {
    id: "1522071820081-009f0129c71c",
    src: "/images/unsplash/collaboration.jpg",
    alt: "Creative collaboration at a table : Fedbelly Emerging solutions",
  },
  // Post-production / video edit suite
  "waveform-photo": {
    id: "1574717024653-61fd2cf4d44d",
    src: "/images/unsplash/waveform-photo.jpg",
    alt: "Video editing suite with timeline monitors : Fedbelly distribution packaging",
  },
  // Broadcast / control room
  "control-room": {
    id: "1598550476439-6847785fcea6",
    src: "/images/unsplash/control-room.jpg",
    alt: "Broadcast control room with monitor wall : Fedbelly rights and release workflow",
  },
  // Empty cinema / screening room
  "cinema-screen": {
    id: "1489599849927-2ee91cede3ba",
    src: "/images/unsplash/cinema-screen.jpg",
    alt: "Empty cinema seats facing the screen : Fedbelly screening and release context",
  },
  // Cinema audience / premiere atmosphere
  "cinema-audience": {
    id: "1440404653325-ab127d49abc1",
    src: "/images/unsplash/cinema-audience.jpg",
    alt: "Cinema audience under projector beam : Fedbelly Next Level premiere energy",
  },
  // Camera operator / BTS filmmaking
  "camera-operator": {
    id: "1576280314501-8dd767fb6b06",
    src: "/images/unsplash/camera-operator.jpg",
    alt: "Filmmaker with camera in a dark room : Fedbelly creator and production strip",
  },
  // Cinematic tripod + practical light
  "studio-lights": {
    id: "1641499303047-5f1c5cd5b305",
    src: "/images/unsplash/studio-lights.jpg",
    alt: "Camera on tripod with studio light in a dark room : Fedbelly production lighting",
  },
  // Clapperboard — film production icon
  clapper: {
    id: "1485846234645-a62644f84728",
    src: "/images/unsplash/clapper.jpg",
    alt: "Film clapperboard on set : Fedbelly production and packaging story",
  },
  // Close cinema camera body
  "film-camera": {
    id: "1619850015956-faca3ef84ca6",
    src: "/images/unsplash/film-camera.jpg",
    alt: "Professional cinema camera detail : Fedbelly video production toolkit",
  },
  // Creator strip — filmmaker / production-forward portraits
  "artist-portrait": {
    id: "1576280314501-8dd767fb6b06",
    src: "/images/unsplash/artist-portrait.jpg",
    alt: "Camera operator in moody light : Fedbelly creator strip",
  },
  "artist-portrait-2": {
    id: "1762314908602-2958d731a75c",
    src: "/images/unsplash/artist-portrait-2.jpg",
    alt: "Cinema camera crew on set : Fedbelly creator strip",
  },
  "artist-portrait-3": {
    id: "1485846234645-a62644f84728",
    src: "/images/unsplash/artist-portrait-3.jpg",
    alt: "Clapperboard on a film set : Fedbelly creator strip",
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
