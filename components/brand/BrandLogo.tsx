import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";

type BrandLogoProps = {
  href?: string | null;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: { mark: 28, text: "text-[15px]" },
  md: { mark: 34, text: "text-base md:text-lg" },
  lg: { mark: 44, text: "text-2xl md:text-3xl" },
} as const;

/**
 * Transparent mint mark + CSS wordmark "Fedbelly Group Limited".
 * Avoids opaque black JPEG-as-PNG wordmark assets in chrome.
 */
export function BrandLogo({
  href = "/",
  size = "md",
  className = "",
}: BrandLogoProps) {
  const s = sizes[size];
  const label = brand.legalName;

  const inner = (
    <>
      <Image
        src="/brand/logo-mark.png"
        alt=""
        width={s.mark}
        height={s.mark}
        className="shrink-0 object-contain"
        style={{ width: s.mark, height: s.mark }}
        priority={size === "md" || size === "lg"}
      />
      <span className={`brand-wordmark ${s.text} leading-tight`}>
        Fed<span className="belly">belly</span>
        <span className="text-ivory"> Group Limited</span>
      </span>
    </>
  );

  const shared =
    "group relative inline-flex max-w-full items-center gap-2.5 focus-visible:outline-coral " +
    className;

  if (href) {
    return (
      <Link href={href} className={shared} aria-label={`${label} home`}>
        {inner}
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-mint transition-all group-hover:w-full group-focus-visible:w-full" />
      </Link>
    );
  }

  return (
    <div className={shared} aria-label={label}>
      {inner}
    </div>
  );
}
