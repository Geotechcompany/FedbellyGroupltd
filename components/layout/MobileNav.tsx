"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { isNavGroup, navPrimary } from "@/lib/brand";
import { LinkButton } from "@/components/ui/Button";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement as HTMLElement;
    const panel = panelRef.current;
    const focusables = panel?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])",
    );
    focusables?.[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && focusables && focusables.length) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      previouslyFocused.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        aria-label="Close menu backdrop"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto border-l border-graphite bg-ink p-6 shadow-2xl"
      >
        <div className="mb-8 flex items-center justify-between gap-3">
          <BrandLogo href="/" size="sm" />
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-graphite px-3 py-1.5 text-sm text-mist"
          >
            Close
          </button>
        </div>

        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {navPrimary.map((item) => {
            if (isNavGroup(item)) {
              return (
                <div key={item.label} className="py-2">
                  <p className="mb-1 text-xs uppercase tracking-wider text-mist/70">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-2 text-base text-ivory hover:text-mint"
                      onClick={onClose}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className="block border-b border-graphite/40 py-3 text-base text-ivory hover:text-mint"
                onClick={onClose}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-3 pt-10">
          <LinkButton href="/request-demo" variant="primary" onClick={onClose}>
            Request a demo
          </LinkButton>
          <LinkButton href="/waitlist" variant="secondary" onClick={onClose}>
            Join waitlist
          </LinkButton>
          <Link
            href="/contact"
            className="text-center text-sm text-mist hover:text-mint"
            onClick={onClose}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
