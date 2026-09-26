import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { brand, footerColumns } from "@/lib/brand";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-graphite/60 bg-charcoal">
      <div className="mx-auto max-w-site px-4 py-14 md:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-sm font-semibold text-ivory">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-mist transition-colors hover:text-mint"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-graphite/50 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <BrandLogo href="/" size="sm" />
            <p className="text-xs text-mist">{brand.tagline}</p>
          </div>
          <p className="text-xs text-mist">© {year} {brand.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
