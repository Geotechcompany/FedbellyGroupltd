import type { Metadata } from "next";
import { SectionHero } from "@/components/home/SectionHero";
import { UnsplashImage } from "@/components/media/UnsplashImage";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { LinkButton } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Music Distribution Infrastructure | Fedbelly",
  description:
    "DSP delivery packaging with ISRC, UPC, metadata, territories, and street-date controls.",
  path: "/distribution",
});

const blocks = [
  "Store and territory selection",
  "Street date and timing",
  "Audio and artwork checks",
  "ISRC / UPC assignment",
  "Metadata packaging",
  "Delivery status and update / takedown requests",
];

export default function DistributionPage() {
  return (
    <>
      <SectionHero
        photo="waveform-photo"
        title="Distribution infrastructure"
        support="Package audio, art, and metadata for store delivery with a clear job status story."
        ctas={<LinkButton href="/request-demo">Request a demo</LinkButton>}
      />

      <Section>
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block) => (
            <div
              key={block}
              className="border-l-2 border-mint/50 bg-charcoal/50 px-5 py-4 text-sm text-ivory"
            >
              {block}
            </div>
          ))}
        </Stagger>
      </Section>

      <section className="relative min-h-[50vh] overflow-hidden">
        <Parallax speed={0.42} className="absolute inset-0">
          <UnsplashImage photo="vinyl" fill className="object-cover" sizes="100vw" />
        </Parallax>
        <div className="absolute inset-0 scrim-band" />
        <div className="relative z-10 mx-auto flex min-h-[50vh] max-w-site items-end px-4 py-16 md:px-8">
          <Reveal>
            <SectionHeading
              title="Metadata is the release"
              support="Wrong language flags, missing writers, or soft artwork kill street dates. Fedbelly treats checklist completion as part of the release, not an afterthought email."
            />
            <div className="mt-8">
              <LinkButton href="/request-demo">Request a demo</LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
