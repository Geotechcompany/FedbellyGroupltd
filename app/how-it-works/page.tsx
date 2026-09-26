import type { Metadata } from "next";
import { SectionHero } from "@/components/home/SectionHero";
import { UnsplashImage } from "@/components/media/UnsplashImage";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { LinkButton } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How Fedbelly Works | Brief to Release",
  description:
    "See how clients and producers move from brief to approved masters, locked splits, DSP packaging, and reporting.",
  path: "/how-it-works",
});

const steps = [
  {
    title: "Brief",
    body: "Client sets goals, references, and street-date targets. Producer accepts scope.",
  },
  {
    title: "Deliver",
    body: "Versions land in the project. Comments stick to the file that matters. Approvals move Draft → In review → Approved → Locked.",
  },
  {
    title: "Package",
    body: "Splits lock at 100%. ISRC/UPC and metadata complete. Distribution job packages for DSPs.",
  },
  {
    title: "Report",
    body: "Streams and statements surface by release. Claims and publishing tasks stay attached to the asset.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <SectionHero
        photo="control-room"
        title="How a release moves through Fedbelly"
        support="Four stages. Humans approve. Automation flags gaps."
        ctas={<LinkButton href="/contact">Contact</LinkButton>}
      />

      <Section>
        <Stagger className="grid gap-10 md:grid-cols-2">
          {steps.map((step, i) => (
            <div key={step.title} className="border-t border-graphite/60 pt-6">
              <p className="font-mono text-xs text-mint">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 font-display text-3xl tracking-[-0.03em]">
                {step.title}
              </h2>
              <p className="mt-3 max-w-[55ch] text-sm leading-relaxed text-mist md:text-base">
                {step.body}
              </p>
            </div>
          ))}
        </Stagger>
      </Section>

      <Section tone="charcoal">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              title="Who touches what"
              support="Clients approve creative and commercial locks. Producers own delivery quality. Fedbelly ops (on the future product) QA catalog and delivery queues. This marketing site explains the model; Contact us to talk about what fits your catalog."
            />
            <div className="mt-8">
              <LinkButton href="/contact">Contact</LinkButton>
            </div>
          </Reveal>
          <div className="relative aspect-[4/3] overflow-hidden">
            <UnsplashImage
              photo="camera-operator"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
