import type { Metadata } from "next";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request a Demo | Fedbelly",
  description:
    "Book a Fedbelly walkthrough of collaboration, splits, distribution, rights, and reporting.",
  path: "/request-demo",
});

export default function RequestDemoPage() {
  return (
    <Section className="pt-24 md:pt-28">
      <Reveal>
        <h1 className="font-display text-4xl tracking-[-0.03em] md:text-5xl">
          Request a demo
        </h1>
        <p className="mt-4 max-w-[42ch] text-base text-mist md:text-lg">
          Thirty focused minutes on your catalog shape and collaborator map.
        </p>
      </Reveal>
      <div className="mt-10 max-w-xl">
        <InquiryForm
          intent="demo"
          submitLabel="Request a demo"
          successMessage="Demo request received. We will propose times by email."
          showCompany
          showCatalogSize
          showWantToSee
        />
      </div>
    </Section>
  );
}
