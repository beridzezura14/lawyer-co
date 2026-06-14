"use client";

import React from "react";
import { useI18n } from "../i18n";

const Stats = () => {
  const { t } = useI18n();

  return (
    <section className="relative bg-[#f8f5f0] section-pad border-t border-black/5">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <div className="hidden h-fit self-start lg:sticky lg:top-[140px] lg:col-span-5 lg:block">
          <h2 className="text-[#1a1a1a] text-4xl 2xl:text-5xl font-serif leading-tight mb-8">
            {t.stats.titleA} <br />
            <span className="text-[#999999]">{t.stats.titleB}</span>
          </h2>

          <p className="text-[#666666] text-lg leading-relaxed max-w-md font-light">
            {t.stats.intro}
          </p>
        </div>

        <div className="lg:hidden">
          <h2 className="text-[#1a1a1a] text-3xl font-serif mb-6">
            {t.stats.titleA}{" "}
            <span className="text-[#999999]">{t.stats.titleB}</span>
          </h2>

          <p className="text-[#666666] text-base leading-relaxed max-w-md font-light">
            {t.stats.intro}
          </p>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-12 md:gap-20 lg:gap-24 lg:pb-32">
          {t.stats.items.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-black/10 pb-12 md:pb-16 last:border-0"
            >
              <span className="text-[#1a1a1a] text-6xl md:text-8xl font-serif block mb-4">
                {stat.value}
              </span>

              <p className="text-[#666666] text-xs uppercase tracking-[0.24em] md:tracking-[0.3em] font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
