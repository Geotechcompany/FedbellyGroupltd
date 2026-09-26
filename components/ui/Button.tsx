import { type ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  asChild?: boolean;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-mint text-ink hover:bg-[#b8ffe4] focus-visible:outline-coral shadow-[0_0_0_1px_rgba(152,255,216,0.2)]",
  secondary:
    "border border-ivory/40 text-ivory bg-transparent hover:border-mint hover:text-mint",
  ghost: "text-mist hover:text-mint bg-transparent",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className = "", variant = "primary", type = "button", children, ...props },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={[
          "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold tracking-wide transition-transform duration-150 ease-out active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap",
          variants[variant],
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </button>
    );
  },
);

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  href: string;
};

export function LinkButton({
  className = "",
  variant = "primary",
  href,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold tracking-wide transition-transform duration-150 ease-out active:scale-[0.97] whitespace-nowrap",
        variants[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </a>
  );
}
