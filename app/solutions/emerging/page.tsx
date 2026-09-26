import type { Metadata } from "next";
import { SectionHero } from "@/components/home/SectionHero";
import { UnsplashImage } from "@/components/media/UnsplashImage";
import { Reveal } from "@/components/motion/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Emerging Artists | Fedbelly Solutions",
  description:
    "First releases with producer collaboration, clean splits, and DSP packaging help.",
  path: "/solutions/emerging",
});

const fits = [
  "Release singles or a short EP this year",
  "Work with one primary producer",
  "Need ISRC/UPC and store delivery without a full label staff",
];

export default function EmergingPage() {
  return (
    <>
      <SectionHero
        photo="collaboration"
        title="Emerging"
        support="You are shipping early catalog with a small circle. You need clarity more than ceremony."
        ctas={<LinkButton href="/waitlist">Join waitlist</LinkButton>}
      />

      <Section>
        <Reveal>
          <p className="mb-2 text-sm font-semibold text-amber">Emerging</p>
          <SectionHeading
            title="Start clean, ship sooner"
            support="Start with the Collaboration Hub and split sheets. Add distribution packaging when the master locks. Skip tool sprawl."
          />
        </Reveal>
      </Section>

      <Section tone="charcoal">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            <UnsplashImage
              photo="studio-session"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <Reveal>
            <h2 className="font-display text-3xl tracking-[-0.03em]">
              Fits if you
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-mist">
              {fits.map((item) => (
                <li key={item} className="border-l-2 border-amber pl-4">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <LinkButton href="/waitlist">Join waitlist</LinkButton>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
