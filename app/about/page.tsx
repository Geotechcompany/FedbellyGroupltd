import type { Metadata } from "next";
import { SectionHero } from "@/components/home/SectionHero";
import { UnsplashImage } from "@/components/media/UnsplashImage";
import { Reveal } from "@/components/motion/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Who We Are | Fedbellygrouplimited",
  description:
    "Fedbellygrouplimited builds producer services for client and producer teams. Meet the focus.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <SectionHero
        photo="vinyl"
        title="Who we are"
        support="A producer services company. Studio-credible. Ops-serious."
        ctas={
          <>
            <LinkButton href="/contact">Contact</LinkButton>
            <LinkButton href="/solutions" variant="secondary">
              Explore solutions
            </LinkButton>
          </>
        }
      />

      <Section>
        <Reveal>
          <p className="max-w-[65ch] text-base leading-relaxed text-mist md:text-lg">
            Fedbellygrouplimited exists because releases stall in inboxes. We
            market a platform where briefs, deliveries, splits, distribution
            packaging, rights, publishing admin, and reporting share one story.
            We speak to artists, songwriters, managers, labels, and producers in
            plain studio language.
          </p>
        </Reveal>
      </Section>

      <Section tone="charcoal">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              title="What we optimize for"
              support="Clear approvals. Locked ownership math. Store-ready metadata. Traceable claims. Numbers that match the people on the session."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              title="How we work with you"
              support="Start with a Contact conversation. We learn your release calendar and collaborator map, then show how Fedbelly capabilities fit. No account wall on this website."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/contact">Contact</LinkButton>
              <LinkButton href="/how-it-works" variant="secondary">
                Learn more
              </LinkButton>
            </div>
          </Reveal>
        </div>
        <div className="relative mt-12 aspect-[21/9] overflow-hidden">
          <UnsplashImage
            photo="control-room"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </Section>
    </>
  );
}
