import type { Metadata } from "next";
import Link from "next/link";
import { CreatorStrip } from "@/components/home/CreatorStrip";
import { SectionHero } from "@/components/home/SectionHero";
import { UnsplashImage } from "@/components/media/UnsplashImage";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { LinkButton } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { StageCard } from "@/components/ui/StageCard";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Fedbellygrouplimited | Producer Services Platform",
  description:
    "Production, distribution, rights, royalties, and project ops for artists, producers, managers, and labels. Request a demo.",
  path: "/",
});

const capabilities = [
  {
    title: "Collaboration Hub",
    body: "Shared briefs, references, versioned stems and masters, review notes, approvals.",
  },
  {
    title: "Project Management",
    body: "Release templates, deadline cues, flags for missing ISRC, unlocked splits, thin metadata.",
  },
  {
    title: "Royalty Splits",
    body: "Contributor tables, lock states, exportable split sheets.",
  },
  {
    title: "Distribution",
    body: "DSP delivery packaging, territories, street dates, ISRC/UPC, artwork checks.",
  },
  {
    title: "Rights Protection",
    body: "Content ID and claims workflows with an audit trail mindset.",
  },
  {
    title: "Publishing Admin",
    body: "PRO registration paths, writer splits, sync pitch support.",
  },
  {
    title: "Analytics & Reporting",
    body: "Streams, territories, statements, project-level money views.",
  },
];

const faqTeasers = [
  {
    q: "Is this website the product app?",
    a: "No. This is a marketing site. Request a demo or join the waitlist to talk about access.",
  },
  {
    q: "Who is Fedbelly for?",
    a: "Artists, songwriters, managers, labels, and producers who need collaboration, splits, distribution packaging, rights, publishing admin, and reporting in one producer services story.",
  },
  {
    q: "How do splits work?",
    a: "Contributor tables capture role and percentage. Releases should lock at 100% before packaging. Sheets export for records.",
  },
];

export default function HomePage() {
  return (
    <>
      <SectionHero
        brandFirst
        parallax
        priority
        photo="studio-session"
        title="From session to street date, in one producer services stack"
        support="Briefs, deliveries, splits, DSP packaging, claims, and reporting for client and producer teams."
        ctas={
          <>
            <LinkButton href="/request-demo">Request a demo</LinkButton>
            <LinkButton href="/waitlist" variant="secondary">
              Join waitlist
            </LinkButton>
          </>
        }
      />

      <CreatorStrip label="Artists, producers, and managers already in conversation with Fedbelly" />

      <Section>
        <Reveal>
          <SectionHeading
            title="Seven capabilities. One handoff story."
            support="Fedbellygrouplimited markets a producer services platform that covers collaboration, project timing, splits, distribution, rights, publishing admin, and financial reporting. You work with producers and clients in the open, then package masters for stores without rebuilding the catalog in a new tool every week."
          />
        </Reveal>
        <Stagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div key={cap.title} className="border-t border-graphite/60 pt-5">
              <h3 className="text-lg font-semibold text-ivory">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{cap.body}</p>
            </div>
          ))}
        </Stagger>
      </Section>

      <Section tone="charcoal">
        <Reveal>
          <SectionHeading
            title="Pick the lane that matches your catalog"
            support="Same platform story. Different operating weight."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
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

      <section className="relative min-h-[70vh] overflow-hidden">
        <Parallax speed={0.5} className="absolute inset-0">
          <UnsplashImage
            photo="city-night"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </Parallax>
        <div className="absolute inset-0 scrim-band" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-site items-end px-4 py-16 md:px-8 md:py-24">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="font-display text-3xl tracking-[-0.03em] text-ivory md:text-5xl text-balance">
                Built for rooms where the clock is loud
              </h2>
              <p className="mt-4 text-base leading-relaxed text-mist md:text-lg">
                Control rooms, label offices, late-night stems. Fedbelly keeps
                the paperwork next to the music.
              </p>
              <div className="mt-8">
                <LinkButton href="/contact" variant="primary">
                  Talk to us
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              title="Catalog work across cities"
              support="Teams coordinate releases across territories with one metadata and split source of truth."
            />
          </Reveal>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[4/5] overflow-hidden">
              <UnsplashImage
                photo="live-stage"
                fill
                className="object-cover"
                sizes="300px"
                width={600}
              />
            </div>
            <div className="relative mt-8 aspect-[4/5] overflow-hidden">
              <UnsplashImage
                photo="studio-session"
                fill
                className="object-cover"
                sizes="300px"
                width={600}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="charcoal">
        <Reveal>
          <h2 className="font-display text-3xl tracking-[-0.03em] md:text-4xl">
            FAQ
          </h2>
        </Reveal>
        <div className="mt-8 space-y-6">
          {faqTeasers.map((item) => (
            <div key={item.q} className="border-t border-graphite/50 pt-5">
              <h3 className="text-lg font-medium text-ivory">{item.q}</h3>
              <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-mist">
                {item.a}
              </p>
            </div>
          ))}
        </div>
        <Link
          href="/faq"
          className="mt-8 inline-block text-sm font-medium text-mint hover:underline"
        >
          Read all FAQ answers
        </Link>
      </Section>

      <Section>
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-[-0.03em] md:text-5xl text-balance">
              Ready to walk a release through Fedbelly?
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/request-demo">Request a demo</LinkButton>
              <LinkButton href="/contact" variant="secondary">
                Contact
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
