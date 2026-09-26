import type { Metadata } from "next";
import { SectionHero } from "@/components/home/SectionHero";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Reveal } from "@/components/motion/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Careers | Fedbellygrouplimited",
  description:
    "Brief careers teaser for Fedbellygrouplimited. Reach out if you build music ops tools.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <SectionHero
        photo="collaboration"
        title="Careers"
        support="We hire people who respect sessions and schedules."
        ctas={<LinkButton href="/contact">Contact</LinkButton>}
      />

      <Section>
        <Reveal>
          <SectionHeading
            title="Build under release pressure"
            support="Fedbellygrouplimited is building producer services for real release pressure. If you design product, engineer delivery systems, or run catalog ops, tell us what you ship."
          />
          <p className="mt-6 max-w-[65ch] text-sm leading-relaxed text-mist">
            We post roles as they open. Until then, send a short note and links
            to work.
          </p>
        </Reveal>
      </Section>

      <Section tone="charcoal">
        <Reveal>
          <h2 className="font-display text-3xl tracking-[-0.03em]">
            Send a careers note
          </h2>
          <p className="mt-3 max-w-[55ch] text-sm text-mist">
            Prefills contact intent for careers. Share what you ship and where
            we can reach you.
          </p>
        </Reveal>
        <div className="mt-8 max-w-xl">
          <InquiryForm
            intent="careers"
            submitLabel="Send message"
            successMessage="Thanks. We received your note and will reply soon."
          />
        </div>
      </Section>
    </>
  );
}
