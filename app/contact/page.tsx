"use client";

import ContactForm from "../components/ContactForm";
import { useI18n } from "../i18n";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <main className="bg-[#f8f5f0]">
      <section className="bg-[#3d1d1a] px-5 pb-20 pt-36 text-white md:pt-44 lg:px-20">
        <div className="max-w-4xl">
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-white/50">
            {t.contact.eyebrow}
          </p>
          <h1 className="text-5xl font-serif leading-[1.05] md:text-7xl">
            {t.contact.pageTitle}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            {t.contact.pageIntro}
          </p>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
