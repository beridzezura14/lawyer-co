"use client";

import React, { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "../i18n";

gsap.registerPlugin(ScrollTrigger);

const PartnersSection = () => {
  const { t } = useI18n();
  const textRef = useRef<HTMLHeadingElement>(null);
  const words = useMemo(
    () => t.partners.animated.trim().split(/\s+/),
    [t.partners.animated]
  );

  useEffect(() => {
    if (!textRef.current) return;

    const wordElements = textRef.current.querySelectorAll(".word");
    const context = gsap.context(() => {
      gsap.set(wordElements, { color: "rgba(26, 26, 26, 0.08)" });

      gsap.fromTo(
        wordElements,
        { color: "rgba(26, 26, 26, 0.08)" },
        {
          color: "rgba(26, 26, 26, 1)",
          ease: "none",
          stagger: 0.08,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 88%",
            end: "top 32%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    }, textRef);

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      window.clearTimeout(refreshTimer);
      context.revert();
    };
  }, [t.partners.animated]);

  return (
    <section className="bg-gradient-to-b from-white to-[#f8f5f0] px-5 pt-12 pb-20 md:pb-32 lg:px-20">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        <div className="lg:col-span-4">
          <h2 className="text-[#1a1a1a] text-3xl font-serif mb-6 italic">
            {t.partners.eyebrow}
          </h2>
          <p className="text-[#666666] text-sm leading-relaxed mb-8 max-w-sm">
            {t.partners.intro}
          </p>
          <Link href="/join-team" className="btn-link text-[#1a1a1a]">
            {t.partners.cta}
          </Link>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-8 md:gap-12 lg:pl-12">
          <div className="max-w-2xl">
            <h3
              ref={textRef}
              className="text-3xl md:text-5xl font-serif leading-[1.2]"
            >
              {words.map((word, index) => (
                <React.Fragment key={`${word}-${index}`}>
                  <span
                    className="word inline-block"
                    style={{ color: "rgba(26, 26, 26, 0.08)" }}
                  >
                    {word}
                  </span>
                  {index < words.length - 1 ? " " : null}
                </React.Fragment>
              ))}
            </h3>
          </div>

          <div className="max-w-2xl">
            <h3 className="text-[#999999] text-3xl md:text-5xl font-serif leading-[1.2]">
              {t.partners.muted}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
