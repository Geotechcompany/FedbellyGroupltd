import type { Metadata } from "next";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Fedbellygrouplimited",
  description:
    "Contact Fedbelly for producer services questions, partnerships, and careers notes.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section className="pt-24 md:pt-28">
      <Reveal>
        <h1 className="font-display text-4xl tracking-[-0.03em] md:text-5xl">
          Contact
        </h1>
        <p className="mt-4 max-w-[40ch] text-base text-mist md:text-lg">
          Tell us who you are and what release problem you want solved.
        </p>
      </Reveal>
      <div className="mt-10 max-w-xl">
        <InquiryForm
          intent="contact"
          submitLabel="Send message"
          successMessage="Thanks. We received your note and will reply soon."
        />
      </div>
    </Section>
  );
}
