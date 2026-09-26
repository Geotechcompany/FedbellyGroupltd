import type { Metadata } from "next";
import { SoftAccordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { LinkButton } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQ & Help | Fedbellygrouplimited",
  description:
    "Answers about Fedbelly producer services, demos, waitlist, distribution, splits, and rights.",
  path: "/faq",
});

const faqs = [
  {
    question: "Is this website the product app?",
    answer:
      "No. This is a marketing site. Request a demo or join the waitlist to talk about access.",
  },
  {
    question: "Do I create an account here?",
    answer:
      "No. There is no login on this site. Use Contact, Request a demo, or Join waitlist.",
  },
  {
    question: "Who is Fedbelly for?",
    answer:
      "Artists, songwriters, managers, labels, and producers who need collaboration, splits, distribution packaging, rights, publishing admin, and reporting in one producer services story.",
  },
  {
    question:
      "Does Fedbelly replace my distributor today if I only browse the site?",
    answer:
      "The site explains distribution capabilities. Live delivery starts after an onboarding conversation, not through a self-serve login here.",
  },
  {
    question: "How do splits work?",
    answer:
      "Contributor tables capture role and percentage. Releases should lock at 100% before packaging. Sheets export for records.",
  },
  {
    question: "Can producers and clients share one project?",
    answer:
      "Yes. That is the Collaboration Hub pitch: shared briefs, files, reviews, and approvals.",
  },
  {
    question: "What about Content ID and claims?",
    answer:
      "Fedbelly markets rights workflows for registration, claim intake, and audit-minded notes. Details depend on active service agreements.",
  },
  {
    question: "Do you handle publishing?",
    answer:
      "Publishing administration support covers PRO paths, writer splits, and sync pitch help. Legal counsel remains separate.",
  },
  {
    question: "How do I get updates?",
    answer: "Join waitlist or Contact. We reply with next steps.",
  },
  {
    question: "Where are Terms and Privacy?",
    answer: "See Legal in the footer.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Section tone="soft" className="pt-24 md:pt-28">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl tracking-[-0.03em] text-ink md:text-5xl">
            FAQ
          </h1>
          <p className="mt-4 text-base text-[#4a4f5c]">
            Straight answers. Still stuck? Contact us.
          </p>
        </div>
        <div className="mt-10 max-w-3xl">
          <SoftAccordion items={faqs} />
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <LinkButton href="/contact">Contact</LinkButton>
          <a
            href="/request-demo"
            className="inline-flex items-center justify-center rounded-md border border-ink/30 px-5 py-2.5 text-sm font-semibold text-ink transition-transform active:scale-[0.97] hover:border-mint-deep hover:text-mint-deep"
          >
            Request a demo
          </a>
        </div>
      </Section>
    </>
  );
}
