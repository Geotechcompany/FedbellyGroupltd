import { type ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
  tone?: "ink" | "charcoal" | "soft";
};

export function Section({
  children,
  className = "",
  id,
  as: Tag = "section",
  tone = "ink",
}: SectionProps) {
  const tones = {
    ink: "bg-ink text-ivory",
    charcoal: "bg-charcoal text-ivory",
    soft: "bg-soft-white text-ink",
  };

  return (
    <Tag id={id} className={`relative py-16 md:py-24 ${tones[tone]} ${className}`}>
      <div className="mx-auto w-full max-w-site px-4 md:px-8">{children}</div>
    </Tag>
  );
}

export function SectionHeading({
  title,
  support,
  className = "",
}: {
  title: string;
  support?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <h2 className="font-display text-3xl leading-[1.15] tracking-[-0.03em] md:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>
      {support ? (
        <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-mist md:text-lg">
          {support}
        </p>
      ) : null}
    </div>
  );
}
