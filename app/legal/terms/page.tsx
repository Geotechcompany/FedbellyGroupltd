import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use | Fedbellygrouplimited",
  description: "Summary terms for the Fedbellygrouplimited marketing website.",
  path: "/legal/terms",
});

const sections = [
  {
    title: "About this site",
    body: "Marketing information about Fedbelly services.",
  },
  {
    title: "No account on this site",
    body: "Browsing does not create a product account.",
  },
  {
    title: "Accuracy",
    body: "We aim for correct descriptions; capabilities may evolve.",
  },
  {
    title: "Acceptable use",
    body: "No scraping abuse, no injection attacks against forms.",
  },
  {
    title: "Contact",
    body: "Questions via the Contact page.",
  },
  {
    title: "Governing overview",
    body: "Full counsel-drafted terms replace this stub before contractual onboarding.",
  },
];

export default function TermsPage() {
  return (
    <Section tone="soft" className="pt-24 md:pt-28">
      <Reveal>
        <h1 className="font-display text-4xl tracking-[-0.03em] text-ink md:text-5xl">
          Terms of use (summary)
        </h1>
      </Reveal>
      <div className="mt-10 max-w-2xl space-y-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-lg font-semibold text-ink">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#4a4f5c]">
              {s.body}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-12 max-w-2xl text-sm text-[#5a5f6c]">
        Summary only. Request counsel-reviewed terms before commercial
        agreements.{" "}
        <Link href="/contact" className="text-mint-deep underline">
          Contact
        </Link>
      </p>
    </Section>
  );
}
