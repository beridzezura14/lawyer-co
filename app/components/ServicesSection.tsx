"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "../i18n";

const ServicesSection = () => {
  const { t } = useI18n();

  return (
    <section className="relative bg-[#f8f5f0] section-pad border-t border-black/5">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <div className="hidden h-fit self-start lg:sticky lg:top-[140px] lg:col-span-5 lg:block">
          <h2 className="text-[#1a1a1a] text-4xl 2xl:text-5xl font-serif leading-tight mb-8">
            {t.services.titleA} <br />
            <span className="text-[#999999]">{t.services.titleB}</span>
          </h2>

          <p className="text-[#666666] text-lg leading-relaxed max-w-md font-light">
            {t.services.intro}
          </p>
        </div>

        <div className="lg:hidden">
          <h2 className="text-[#1a1a1a] text-3xl font-serif mb-6">
            {t.services.titleA}{" "}
            <span className="text-[#999999]">{t.services.titleB}</span>
          </h2>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-14 md:gap-20 lg:gap-28 lg:pb-32">
          {t.services.items.map((service) => (
            <div
              key={service.title}
              className="group border-b border-black/10 pb-12 md:pb-16 last:border-0"
            >
              <h3 className="text-[#1a1a1a] text-2xl md:text-3xl font-serif mb-6 group-hover:text-[#3d1d1a] transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-[#666666] text-base leading-relaxed mb-8 max-w-xl">
                {service.description}
              </p>

              <Link href="/contact" className="btn-link text-[#1a1a1a]">
                {t.services.readMore}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
