import type { Metadata } from "next";
import { SectionHero } from "@/components/home/SectionHero";
import { UnsplashImage } from "@/components/media/UnsplashImage";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { LinkButton } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Producer Collaboration Hub | Fedbelly Toolkit",
  description:
    "Shared briefs, stem versions, review notes, and approvals for producer and client teams.",
  path: "/toolkit",
});

const features = [
  {
    title: "Briefs & references",
    body: "Written scope, audio refs, mood notes in one place.",
  },
  {
    title: "Versioned assets",
    body: "Stem and master history without chat-scroll archaeology.",
  },
  {
    title: "Review threads",
    body: "Comments tied to files and versions.",
  },
  {
    title: "Approval states",
    body: "Clear status so nobody ships a draft by accident.",
  },
  {
    title: "Participants",
    body: "Client, producer, and invited managers on the same project.",
  },
];

export default function ToolkitPage() {
  return (
    <>
      <SectionHero
        photo="studio-session"
        title="Collaboration Hub"
        support="One project room for briefs, references, stems, masters, and sign-off."
        ctas={
          <>
            <LinkButton href="/waitlist">Join waitlist</LinkButton>
            <LinkButton href="/request-demo" variant="secondary">
              Request a demo
            </LinkButton>
          </>
        }
      />

      <Section>
        <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="border-t border-graphite/60 pt-5">
              <h2 className="text-xl font-semibold text-ivory">{f.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-mist">{f.body}</p>
            </div>
          ))}
        </Stagger>
      </Section>

      <Section tone="charcoal">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="relative aspect-square overflow-hidden">
              <UnsplashImage photo="mixing-desk" fill className="object-cover" sizes="400px" width={800} />
            </div>
            <div className="relative aspect-square overflow-hidden sm:mt-10">
              <UnsplashImage photo="collaboration" fill className="object-cover" sizes="400px" width={800} />
            </div>
          </div>
          <Reveal>
            <SectionHeading
              title="Less Drive-folder chaos"
              support='When the master is Approved and Locked, distribution and split steps inherit that truth. You stop mailing "final_final_v7".'
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/waitlist">Join waitlist</LinkButton>
              <LinkButton href="/request-demo" variant="secondary">
                Request a demo
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
