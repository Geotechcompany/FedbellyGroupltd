import type { Metadata } from "next";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Join the Waitlist | Fedbelly",
  description:
    "Join the Fedbelly waitlist for producer services platform updates.",
  path: "/waitlist",
});

export default function WaitlistPage() {
  return (
    <Section className="pt-24 md:pt-28">
      <Reveal>
        <h1 className="font-display text-4xl tracking-[-0.03em] md:text-5xl">
          Join the waitlist
        </h1>
        <p className="mt-4 max-w-[42ch] text-base text-mist md:text-lg">
          Early updates on access windows for client and producer teams.
        </p>
      </Reveal>
      <div className="mt-10 max-w-xl">
        <InquiryForm
          intent="waitlist"
          submitLabel="Join waitlist"
          successMessage="You are on the list. We will email when a window opens."
          showPrimaryNeed
        />
      </div>
    </Section>
  );
}
