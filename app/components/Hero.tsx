"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "../i18n";

const Hero = () => {
  const { locale, t } = useI18n();

  return (
    <section className="relative min-h-[92svh] md:min-h-screen bg-[#3d1d1a] overflow-hidden px-5 lg:px-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt=""
          fill
          className="object-cover object-[78%_center] sm:object-[82%_center] lg:object-right"
          sizes="100vw"
          priority
        />
      </div>

      <div className="mx-auto pt-32 md:pt-40 relative z-10">
        <div
          key={locale}
          className="hero-language-enter max-w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-10"
        >
          <div>
            <h1 className="text-white text-4xl sm:text-5xl 2xl:text-6xl font-serif leading-[1.1] tracking-tight">
              {t.hero.titleA} <br />
              <span className="text-white/30 italic">{t.hero.titleB}</span>
            </h1>

            <Link href="/contact" className="btn btn-outline-light mt-8 md:mt-12">
              {t.hero.cta}
            </Link>
          </div>
          <div className="pb-2">
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-sm">
              {t.hero.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
