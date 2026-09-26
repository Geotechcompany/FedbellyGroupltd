"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { isNavGroup, navPrimary } from "@/lib/brand";
import { LinkButton } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [capsOpen, setCapsOpen] = useState(false);
  const capsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setCapsOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (capsRef.current && !capsRef.current.contains(e.target as Node)) {
        setCapsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-graphite/50 bg-[rgba(11,12,16,0.72)] backdrop-blur-[20px]">
        <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-4 px-4 md:px-8 lg:h-[72px]">
          <BrandLogo size="md" className="shrink-0" />

          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Primary"
          >
            {navPrimary.map((item) => {
              if (isNavGroup(item)) {
                return (
                  <div key={item.label} className="relative" ref={capsRef}>
                    <button
                      type="button"
                      className="text-sm text-mist transition-colors hover:text-ivory"
                      aria-expanded={capsOpen}
                      aria-haspopup="true"
                      onClick={() => setCapsOpen((v) => !v)}
                    >
                      {item.label}
                    </button>
                    {capsOpen ? (
                      <div
                        className="absolute left-0 top-full z-50 mt-2 min-w-[220px] origin-top rounded-md border border-graphite bg-charcoal p-2 shadow-lg"
                        role="menu"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            className="block rounded px-3 py-2 text-sm text-mist hover:bg-graphite/60 hover:text-ivory"
                            onClick={() => setCapsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-mist transition-colors hover:text-ivory"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/solutions"
              className="text-sm text-mist hover:text-mint"
            >
              Explore solutions
            </Link>
            <LinkButton href="/contact" variant="primary">
              Contact
            </LinkButton>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-graphite text-ivory lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
        </div>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  );
}
