"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "../i18n";

const postImages = [
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
];

export default function BlogPage() {
  const { t } = useI18n();

  return (
    <main className="bg-[#f8f5f0]">
      <section className="bg-[#3d1d1a] px-5 pb-20 pt-36 text-white md:pt-44 lg:px-20">
        <div className="max-w-4xl">
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-white/50">
            {t.blog.eyebrow}
          </p>
          <h1 className="text-5xl font-serif leading-[1.05] md:text-7xl">
            {t.blog.title}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            {t.blog.intro}
          </p>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-20 lg:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {t.blog.posts.map((post, index) => (
            <article key={post.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={postImages[index]}
                  alt={post.title}
                  fill
                  className="object-cover grayscale-[15%] transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="border-b border-black/10 py-7">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#999999]">
                  {post.category}
                </p>
                <h2 className="text-2xl font-serif leading-tight text-[#1a1a1a]">
                  {post.title}
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-[#666666]">
                  {post.excerpt}
                </p>
                <Link href="/contact" className="btn-link mt-7 text-[#3d1d1a]">
                  {t.blog.ask}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
