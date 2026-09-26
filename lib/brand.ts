export const brand = {
  name: "Fedbelly",
  legalName: "Fedbelly Group Limited",
  tagline: "Producer services for artists, managers, labels, and producers.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.fedbellygrouplimited.com",
  contactEmail: process.env.CONTACT_TO_EMAIL || "ops@fedbellygrouplimited.com",
  colors: {
    ink: "#0B0C10",
    black: "#000000",
    charcoal: "#161821",
    graphite: "#2E3340",
    mist: "#9AA0AE",
    ivory: "#F4F2EC",
    softWhite: "#FBFAF7",
    mint: "#98FFD8",
    mintDeep: "#0D9B7A",
    lime: "#C8F542",
    cyan: "#2EE6D6",
    amber: "#FFB020",
    coral: "#FF4D6A",
    magenta: "#E83E8C",
  },
} as const;

export type NavLink = { href: string; label: string };
export type NavItem = NavLink | { label: string; children: NavLink[] };

export function isNavGroup(
  item: NavItem,
): item is { label: string; children: NavLink[] } {
  return "children" in item;
}

export const navPrimary: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How it works" },
  {
    label: "Capabilities",
    children: [
      { href: "/toolkit", label: "Toolkit" },
      { href: "/distribution", label: "Distribution" },
      { href: "/rights-publishing", label: "Rights & Publishing" },
      { href: "/analytics-royalties", label: "Analytics & Royalties" },
    ],
  },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "Who we are" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

export const footerColumns = [
  {
    title: "Capabilities",
    links: [
      { href: "/toolkit", label: "Toolkit" },
      { href: "/distribution", label: "Distribution" },
      { href: "/rights-publishing", label: "Rights & Publishing" },
      { href: "/analytics-royalties", label: "Analytics & Royalties" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "/solutions/emerging", label: "Emerging" },
      { href: "/solutions/taking-off", label: "Taking Off" },
      { href: "/solutions/next-level", label: "Next Level" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/faq", label: "FAQ" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/terms", label: "Terms" },
      { href: "/legal/privacy", label: "Privacy" },
    ],
  },
] as const;
