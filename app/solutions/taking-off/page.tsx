import type { Metadata } from "next";
import { SectionHero } from "@/components/home/SectionHero";
import { UnsplashImage } from "@/components/media/UnsplashImage";
import { Reveal } from "@/components/motion/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Taking Off Catalogs | Fedbelly Solutions",
  description:
    "Multi-release calendars, collaborator splits, and rights workflows for growing teams.",
  path: "/solutions/taking-off",
});

const fits = [
  "Run overlapping singles and EPs",
  "Coordinate managers plus multiple producers",
  "Need reporting that matches collaborator shares",
];

export default function TakingOffPage() {
  return (
    <>
      <SectionHero
        photo="mixing-desk"
        title="Taking Off"
        support="More rooms, more features, more names on the split. Timing and locks matter."
        ctas={<LinkButton href="/request-demo">Request a demo</LinkButton>}
      />

      <Section>
        <Reveal>
          <p className="mb-2 text-sm font-semibold text-lime">Taking Off</p>
          <SectionHeading
            title="Calendars, locks, and clean handoffs"
            support="Project templates and risk flags keep street dates honest. Split locks before packaging. Claims and publishing tasks attach to the asset so managers stop hunting email."
          />
        </Reveal>
      </Section>

      <Section tone="charcoal">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="font-display text-3xl tracking-[-0.03em]">
              Fits if you
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-mist">
              {fits.map((item) => (
                <li key={item} className="border-l-2 border-lime pl-4">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <LinkButton href="/request-demo">Request a demo</LinkButton>
            </div>
          </Reveal>
          <div className="relative aspect-[4/3] overflow-hidden">
            <UnsplashImage
              photo="live-stage"
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
