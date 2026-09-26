import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Summary | Fedbellygrouplimited",
  description:
    "How the Fedbelly marketing site handles contact and waitlist form data.",
  path: "/legal/privacy",
});

const sections = [
  {
    title: "Data you send",
    body: "Name, email, role, message via forms.",
  },
  {
    title: "Why we collect it",
    body: "Reply to inquiries, demos, waitlist updates.",
  },
  {
    title: "Storage",
    body: "Processed by our form provider or email pipeline; retain only as needed for follow-up.",
  },
  {
    title: "Sharing",
    body: "No sale of form data. Processors act under our instruction.",
  },
  {
    title: "Your requests",
    body: "Access or deletion requests via Contact (GDPR/CCPA-minded).",
  },
  {
    title: "Cookies",
    body: "If analytics added, disclose and offer basic consent note.",
  },
  {
    title: "Updates",
    body: "We revise this summary as practices change.",
  },
];

export default function PrivacyPage() {
  return (
    <Section tone="soft" className="pt-24 md:pt-28">
      <Reveal>
        <h1 className="font-display text-4xl tracking-[-0.03em] text-ink md:text-5xl">
          Privacy (summary)
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
      <div className="mt-12">
        <LinkButton href="/contact">Contact for privacy requests</LinkButton>
      </div>
    </Section>
  );
}
