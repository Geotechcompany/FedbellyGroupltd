import type { Metadata } from "next";
import { SectionHero } from "@/components/home/SectionHero";
import { UnsplashImage } from "@/components/media/UnsplashImage";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { LinkButton } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Analytics & Royalty Splits | Fedbelly",
  description:
    "Lock contributor splits, then read streams, territories, and statements by release.",
  path: "/analytics-royalties",
});

const splits = [
  "Contributor role and percentage",
  "Lock when sums hit 100%",
  "Change history",
  "Exportable split sheets",
];

const analytics = [
  "Streams and downloads by territory and platform (where feeds exist)",
  "Revenue summaries",
  "Statement export",
  "Project-level financial views for client and producer scopes",
];

export default function AnalyticsRoyaltiesPage() {
  return (
    <>
      <SectionHero
        photo="headphones"
        title="Splits, analytics, and statements"
        support="Money views that match the people who made the record."
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
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl tracking-[-0.03em]">
                Split management
              </h2>
            </Reveal>
            <Stagger className="mt-6 space-y-4">
              {splits.map((item) => (
                <p
                  key={item}
                  className="border-t border-graphite/50 pt-4 text-sm text-mist"
                >
                  {item}
                </p>
              ))}
            </Stagger>
          </div>
          <div>
            <Reveal>
              <h2 className="font-display text-3xl tracking-[-0.03em]">
                Analytics & reporting
              </h2>
            </Reveal>
            <Stagger className="mt-6 space-y-4">
              {analytics.map((item) => (
                <p
                  key={item}
                  className="border-t border-graphite/50 pt-4 text-sm text-mist"
                >
                  {item}
                </p>
              ))}
            </Stagger>
          </div>
        </div>
      </Section>

      <Section tone="charcoal">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              title="Numbers tied to the session"
              support="Stream, territory, and revenue views by release so client and producer scopes stay aligned."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/contact">Contact</LinkButton>
              <LinkButton href="/how-it-works" variant="secondary">
                Learn more
              </LinkButton>
            </div>
          </Reveal>
          <div className="relative aspect-[16/10] overflow-hidden">
            <UnsplashImage
              photo="waveform-photo"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
