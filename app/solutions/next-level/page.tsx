import type { Metadata } from "next";
import { SectionHero } from "@/components/home/SectionHero";
import { UnsplashImage } from "@/components/media/UnsplashImage";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Next Level Operations | Fedbelly Solutions",
  description:
    "Label-scale producer ops, rights load, distribution queues, and financial reporting.",
  path: "/solutions/next-level",
});

const fits = [
  "Operate as a label or multi-artist management company",
  "Hold heavy rights and publishing traffic",
  "Need cross-territory reporting and clear escalation paths",
];

export default function NextLevelPage() {
  return (
    <>
      <SectionHero
        photo="live-stage"
        title="Next Level"
        support="Catalog volume and partner complexity. You need ops discipline without losing studio speed."
        ctas={
          <>
            <LinkButton href="/request-demo">Request a demo</LinkButton>
            <LinkButton href="/contact" variant="secondary">
              Talk to us
            </LinkButton>
          </>
        }
      />

      <Section>
        <Reveal>
          <p className="mb-2 text-sm font-semibold text-cyan">Next Level</p>
          <SectionHeading
            title="Label weight, studio speed"
            support="Distribution job status, rights audit trails, publishing admin, and statement exports sit beside producer delivery. Career-stage messaging stays Fedbelly-specific: producer-client ops at label weight."
          />
        </Reveal>
        <ul className="mt-10 max-w-xl space-y-3 text-sm text-mist">
          {fits.map((item) => (
            <li key={item} className="border-l-2 border-cyan pl-4">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <section className="relative min-h-[60vh] overflow-hidden">
        <Parallax speed={0.5} className="absolute inset-0">
          <UnsplashImage
            photo="city-night"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </Parallax>
        <div className="absolute inset-0 scrim-band" />
        <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-site items-end px-4 py-16 md:px-8">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="font-display text-3xl tracking-[-0.03em] md:text-4xl text-balance">
                Ops for catalogs that do not sleep
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href="/request-demo">Request a demo</LinkButton>
                <LinkButton href="/contact" variant="secondary">
                  Talk to us
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
