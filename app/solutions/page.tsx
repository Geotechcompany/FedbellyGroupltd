import type { Metadata } from "next";
import { SectionHero } from "@/components/home/SectionHero";
import { UnsplashImage } from "@/components/media/UnsplashImage";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { StageCard } from "@/components/ui/StageCard";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Solutions by Career Stage | Fedbelly",
  description:
    "Fedbelly for Emerging artists, Taking Off catalogs, and Next Level label operations.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <SectionHero
        photo="live-stage"
        title="Solutions by career stage"
        support="Same producer services story. Different operating weight."
        ctas={<LinkButton href="/contact">Contact</LinkButton>}
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          <StageCard
            href="/solutions/emerging"
            title="Emerging"
            description="First serious releases, tight teams, clear checklists."
            accent="amber"
          />
          <StageCard
            href="/solutions/taking-off"
            title="Taking Off"
            description="Multi-release calendars, more collaborators, sharper split discipline."
            accent="lime"
          />
          <StageCard
            href="/solutions/next-level"
            title="Next Level"
            description="Label-scale coordination, rights load, reporting depth."
            accent="cyan"
          />
        </div>
      </Section>

      <section className="relative min-h-[55vh] overflow-hidden">
        <Parallax speed={0.48} className="absolute inset-0">
          <UnsplashImage
            photo="city-night"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </Parallax>
        <div className="absolute inset-0 scrim-band" />
        <div className="relative z-10 mx-auto flex min-h-[55vh] max-w-site items-end px-4 py-16 md:px-8">
          <Reveal>
            <SectionHeading
              title="Grow the catalog without growing the chaos"
              support="Pick the stage that matches how you release today. Move up when the calendar and collaborator count demand it."
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
