"use client";

import Link from "next/link";
import { useI18n } from "../i18n";

const CTASection = () => {
  const { t } = useI18n();

  return (
    <section
      id="consultation"
      className="relative min-h-[70svh] md:min-h-[80vh] w-full flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/consult.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
        <h2 className="text-white text-2xl md:text-5xl font-serif leading-tight mb-10">
          {t.cta.titleA} <br />
          <span className="italic opacity-50">{t.cta.titleB}</span>
        </h2>

        <Link
          href="/contact"
          className="btn btn-secondary hover:bg-transparent hover:text-white hover:border-white"
        >
          {t.cta.button}
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
