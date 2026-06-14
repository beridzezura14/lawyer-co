"use client";

import Image from "next/image";
import Link from "next/link";
import PartnersSection from "../components/PartnersSection";
import Stats from "../components/Stats";
import { useI18n } from "../i18n";

export default function AboutUsPage() {
  const { t } = useI18n();

  return (
    <main className="bg-[#f8f5f0]">
      <section className="bg-[#3d1d1a] px-5 pb-20 pt-36 text-white md:pt-44 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-white/50">
              {t.about.eyebrow}
            </p>
            <h1 className="max-w-4xl text-5xl font-serif leading-[1.05] md:text-7xl">
              {t.about.title}
            </h1>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-relaxed text-white/70 md:text-lg">
              {t.about.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-20">
        <div className="relative aspect-[16/10] overflow-hidden md:aspect-[21/8]">
          <Image
            src="/hero2.jpeg"
            alt="DCTM legal team"
            fill
            className="object-cover grayscale-[10%]"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-serif text-[#1a1a1a] md:text-4xl">
              {t.about.how}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {t.about.steps.map((item, index) => (
                <div key={item} className="border-t border-black/10 pt-6">
                  <span className="text-5xl font-serif text-[#3d1d1a]/20">
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 text-2xl font-serif text-[#1a1a1a]">
                    {item}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#666666]">
                    {t.about.stepText}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn btn-primary mt-12">
              {t.nav.consultation}
            </Link>
          </div>
        </div>
      </section>

      <PartnersSection />
      <Stats />
    </main>
  );
}
