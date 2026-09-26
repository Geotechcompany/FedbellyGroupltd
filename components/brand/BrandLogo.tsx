import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";

type BrandLogoProps = {
  href?: string | null;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: { mark: 28, name: "text-[15px]", legal: "text-[10px]" },
  md: { mark: 34, name: "text-base md:text-lg", legal: "text-[10px] md:text-[11px]" },
  lg: { mark: 48, name: "text-2xl md:text-3xl", legal: "text-xs md:text-sm" },
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
      <span className="flex min-w-0 flex-col leading-none">
        <span className={`brand-wordmark ${s.name}`}>
          Fed<span className="belly">belly</span>
        </span>
        <span
          className={`mt-1 font-medium tracking-[0.04em] text-mist ${s.legal}`}
        >
          Group Limited
        </span>
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
