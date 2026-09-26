import type { Metadata } from "next";
import { UnsplashImage } from "@/components/media/UnsplashImage";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger } from "@/components/motion/Stagger";
import { LinkButton } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import type { UnsplashKey } from "@/lib/unsplash";

export const metadata: Metadata = buildMetadata({
  title: "Notes & Resources | Fedbelly Blog",
  description:
    "Topics on producer collaboration, splits, metadata, and release ops from Fedbelly.",
  path: "/blog",
});

const posts: {
  title: string;
  excerpt: string;
  photo: UnsplashKey;
}[] = [
  {
    title: "Lock the split before you book the street date",
    excerpt:
      "Why 97% sheets stall packaging, and how contributor locks save the week.",
    photo: "clapper",
  },
  {
    title: "ISRC, UPC, and the metadata misses that kill delivery",
    excerpt:
      "A practical checklist producers and managers can run before DSP handoff.",
    photo: "waveform-photo",
  },
  {
    title: "Claims without the inbox archaeology",
    excerpt:
      "Keep dispute notes on the asset so the next manager inherits context.",
    photo: "cinema-screen",
  },
];

export default function BlogPage() {
  return (
    <Section className="pt-24 md:pt-28">
      <Reveal>
        <h1 className="font-display text-4xl tracking-[-0.03em] md:text-5xl">
          Notes from the ops floor
        </h1>
        <p className="mt-4 max-w-[45ch] text-base text-mist md:text-lg">
          Short reads for people who ship releases. Full CMS later; three
          teasers now.
        </p>
      </Reveal>

      <Stagger className="mt-12 grid gap-10 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="group">
            <div className="relative mb-4 aspect-[16/10] overflow-hidden">
              <UnsplashImage
                photo={post.photo}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                width={800}
              />
            </div>
            <h2 className="text-xl font-semibold text-ivory">{post.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-mist">
              {post.excerpt}
            </p>
            <p className="mt-3 text-xs font-medium text-mint">Full article soon</p>
          </article>
        ))}
      </Stagger>

      <div className="mt-14">
        <LinkButton href="/contact">Contact for updates</LinkButton>
      </div>
    </Section>
  );
}
