import Link from "next/link";

type StageCardProps = {
  href: string;
  title: string;
  description: string;
  accent: "amber" | "lime" | "cyan";
};

const accents = {
  amber: "border-amber/50 hover:border-amber text-amber",
  lime: "border-lime/50 hover:border-lime text-lime",
  cyan: "border-cyan/50 hover:border-cyan text-cyan",
};

export function StageCard({
  href,
  title,
  description,
  accent,
}: StageCardProps) {
  return (
    <Link
      href={href}
      className={`group block rounded-md border bg-charcoal/80 p-6 transition-colors ${accents[accent]}`}
    >
      <p className={`text-sm font-semibold ${accents[accent].split(" ").pop()}`}>
        {title}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-mist group-hover:text-ivory">
        {description}
      </p>
      <span className="mt-4 inline-block text-sm text-ivory group-hover:text-mint">
        Explore →
      </span>
    </Link>
  );
}
