"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useI18n } from "../i18n";

const PracticeAreas = () => {
  const { t } = useI18n();
  const [activeId, setActiveId] = useState("01");

  return (
    <section
      id="practice-areas"
      className="bg-[#3d1d1a] min-h-screen flex flex-col overflow-hidden"
    >
      <div className="pt-20 pb-10 px-5 lg:px-20">
        <h2 className="text-white text-4xl md:text-5xl font-serif">
          {t.practice.title}
        </h2>
      </div>

      <div className="lg:hidden px-5 pb-20 space-y-5">
        {t.practice.items.map((area) => (
          <article
            key={area.id}
            className="relative min-h-[360px] overflow-hidden border border-white/10"
          >
            <Image
              src={area.image}
              alt={area.title}
              fill
              className="object-cover grayscale opacity-25"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[#3d1d1a]/65" />
            <div className="relative z-10 flex min-h-[360px] min-w-0 flex-col justify-end p-6">
              <div className="mb-8 flex min-w-0 items-start justify-between gap-6">
                <span className="text-white/15 text-6xl font-serif leading-none">
                  {area.id}
                </span>
                <p className="min-w-0 max-w-[58%] text-right text-[10px] font-bold uppercase tracking-[0.14em] leading-relaxed text-white/50 break-words">
                  {area.category}
                </p>
              </div>
              <h3 className="text-white text-3xl font-serif mb-5 leading-tight break-words">
                {area.title}
              </h3>
              <p className="text-white/70 text-base leading-relaxed mb-8 break-words">
                {area.description}
              </p>
              <button className="btn btn-outline-light w-full">
                {t.practice.readMore}
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="hidden lg:flex flex-1 w-full border-t border-white/10 overflow-hidden">
        {t.practice.items.map((area) => (
          <div
            key={area.id}
            onClick={() => setActiveId(area.id)}
            className={`relative transition-all duration-[1000ms] ease-[cubic-bezier(0.23,1,0.32,1)] border-r border-white/10 cursor-pointer overflow-hidden ${
              activeId === area.id ? "flex-[6]" : "flex-1"
            }`}
          >
            <div
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                activeId === area.id
                  ? "opacity-25 scale-105"
                  : "opacity-0 scale-100"
              }`}
            >
              <Image
                src={area.image}
                alt={area.title}
                fill
                className="object-cover grayscale transition-transform duration-[2000ms]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="relative z-10 h-full flex flex-col p-6 lg:p-10 pointer-events-none">
              <div className="mt-auto relative">
                <div
                  className={`absolute bottom-0 left-0 transition-all duration-700 ease-out origin-bottom-left ${
                    activeId === area.id
                      ? "opacity-0 scale-95 translate-y-10 invisible"
                      : "opacity-100 scale-100 visible"
                  }`}
                >
                  <p className="text-white/40 uppercase tracking-[0.4em] text-[10px] font-bold rotate-[-90deg] whitespace-nowrap translate-y-[-40px]">
                    {area.category}
                  </p>
                  <span className="text-white/10 text-6xl font-serif block translate-y-[-10px]">
                    {area.id}
                  </span>
                </div>

                <div
                  className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    activeId === area.id
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-20 absolute"
                  }`}
                >
                  <div className="flex flex-col items-start pt-10">
                    <p className="text-white/60 uppercase tracking-[0.4em] text-[10px] font-bold mb-6">
                      {area.category}
                    </p>
                    <span className="text-white text-[12vw] font-serif leading-[0.7] mb-8 select-none">
                      {area.id}
                    </span>
                    <h3 className="text-white text-3xl md:text-5xl font-serif mb-6 whitespace-nowrap tracking-tight">
                      {area.title}
                    </h3>
                    <p className="text-white/60 text-base max-w-sm mb-10 leading-relaxed font-light">
                      {area.description}
                    </p>
                    <button className="btn btn-outline-light pointer-events-auto">
                      {t.practice.readMore}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PracticeAreas;
