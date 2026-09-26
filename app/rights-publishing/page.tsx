import type { Metadata } from "next";
import { SectionHero } from "@/components/home/SectionHero";
import { UnsplashImage } from "@/components/media/UnsplashImage";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { LinkButton } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Rights & Publishing Admin | Fedbelly",
  description:
    "Content protection, claims workflows, PRO registration paths, and sync pitching support.",
  path: "/rights-publishing",
});

const rights = [
  "Fingerprint / Content ID registration where available",
  "Claim intake and dispute notes",
  "Partner whitelist mindset",
  "Asset-level audit trail",
];

const publishing = [
  "Work registration assistance",
  "PRO / CMO path guidance",
  "Writer and publisher splits",
  "Sync pitch packs and status",
];

export default function RightsPublishingPage() {
  return (
    <>
      <SectionHero
        photo="control-room"
        title="Rights and publishing"
        support="Protect recordings, register works, and stage sync pitches without losing the paper trail."
        ctas={<LinkButton href="/contact">Contact</LinkButton>}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Stagger className="space-y-4">
            <h2 className="font-display text-3xl tracking-[-0.03em]">Rights</h2>
            {rights.map((item) => (
              <p
                key={item}
                className="border-t border-graphite/50 pt-4 text-sm leading-relaxed text-mist"
              >
                {item}
              </p>
            ))}
          </Stagger>
          <Stagger className="space-y-4" stagger={0.07}>
            <h2 className="font-display text-3xl tracking-[-0.03em]">
              Publishing
            </h2>
            {publishing.map((item) => (
              <p
                key={item}
                className="border-t border-graphite/50 pt-4 text-sm leading-relaxed text-mist"
              >
                {item}
              </p>
            ))}
          </Stagger>
        </div>
        <p className="mt-10 text-sm text-mist">
          Fedbelly supports administration workflows. Counsel still owns legal
          advice.
        </p>
      </Section>

      <Section tone="charcoal">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[16/10] overflow-hidden">
            <UnsplashImage photo="vinyl" fill className="object-cover" sizes="50vw" />
          </div>
          <Reveal>
            <SectionHeading
              title="Paper trail next to the master"
              support="Claims, registrations, and sync packs stay attached to the asset so the next manager inherits context."
            />
            <div className="mt-8">
              <LinkButton href="/contact">Contact</LinkButton>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
