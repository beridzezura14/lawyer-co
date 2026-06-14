"use client";

import React, { useRef, useState } from "react";
import { useI18n } from "../i18n";

const Contact = () => {
  const { t } = useI18n();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const confirmationRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    event.currentTarget.reset();

    window.setTimeout(() => {
      confirmationRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      confirmationRef.current?.focus({ preventScroll: true });
    }, 80);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#f8f5f0] section-pad border-t border-black/5"
    >
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-[100px] self-start h-fit">
          <h2 className="text-[#1a1a1a] text-3xl md:text-4xl 2xl:text-5xl font-serif leading-tight mb-8">
            {t.contact.titleA} <br />
            <span className="text-[#999999]">{t.contact.titleB}</span>
          </h2>

          <p className="text-[#666666] text-base md:text-lg leading-relaxed max-w-md font-light mb-10 md:mb-12">
            {t.contact.intro}
          </p>

          <div className="space-y-8 md:space-y-10">
            <div>
              <p className="text-[#999999] text-xs uppercase tracking-[0.24em] md:tracking-[0.3em] font-bold mb-3">
                {t.contact.email}
              </p>
              <a
                href="mailto:info@dctmlaw.ge"
                className="text-[#1a1a1a] text-xl md:text-2xl font-serif hover:text-[#999999] transition-colors break-words"
              >
                info@dctmlaw.ge
              </a>
            </div>

            <div>
              <p className="text-[#999999] text-xs uppercase tracking-[0.24em] md:tracking-[0.3em] font-bold mb-3">
                {t.contact.phone}
              </p>
              <a
                href="tel:+995555123456"
                className="text-[#1a1a1a] text-xl md:text-2xl font-serif hover:text-[#999999] transition-colors"
              >
                +995 555 12 34 56
              </a>
            </div>

            <div>
              <p className="text-[#999999] text-xs uppercase tracking-[0.24em] md:tracking-[0.3em] font-bold mb-3">
                {t.contact.office}
              </p>
              <p className="text-[#1a1a1a] text-xl md:text-2xl font-serif leading-relaxed">
                Tbilisi, Georgia <br />
                Rustaveli Ave. 12
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-12">
          <form className="flex flex-col gap-9 md:gap-12" onSubmit={handleSubmit}>
            <div className="group border-b border-black/10 pb-6 focus-within:border-black transition-colors duration-500">
              <p className="text-[#999999] text-[10px] uppercase tracking-[0.24em] md:tracking-[0.3em] font-bold mb-4">
                {t.contact.name}
              </p>
              <input
                type="text"
                name="name"
                placeholder={t.contact.namePlaceholder}
                className="w-full bg-transparent text-2xl md:text-4xl font-serif outline-none placeholder:text-black/10 text-[#1a1a1a]"
                required
              />
            </div>

            <div className="group border-b border-black/10 pb-6 focus-within:border-black transition-colors duration-500">
              <p className="text-[#999999] text-[10px] uppercase tracking-[0.24em] md:tracking-[0.3em] font-bold mb-4">
                {t.contact.emailField}
              </p>
              <input
                type="email"
                name="email"
                placeholder={t.contact.emailPlaceholder}
                className="w-full bg-transparent text-2xl md:text-4xl font-serif outline-none placeholder:text-black/10 text-[#1a1a1a]"
                required
              />
            </div>

            <div className="group border-b border-black/10 pb-6 focus-within:border-black transition-colors duration-500">
              <p className="text-[#999999] text-[10px] uppercase tracking-[0.24em] md:tracking-[0.3em] font-bold mb-4">
                {t.contact.service}
              </p>
              <input
                type="text"
                name="service"
                placeholder={t.contact.servicePlaceholder}
                className="w-full bg-transparent text-2xl md:text-4xl font-serif outline-none placeholder:text-black/10 text-[#1a1a1a]"
              />
            </div>

            <div className="group border-b border-black/10 pb-6 focus-within:border-black transition-colors duration-500">
              <p className="text-[#999999] text-[10px] uppercase tracking-[0.24em] md:tracking-[0.3em] font-bold mb-4">
                {t.contact.message}
              </p>
              <textarea
                rows={3}
                name="message"
                placeholder={t.contact.messagePlaceholder}
                className="w-full bg-transparent text-2xl md:text-4xl font-serif outline-none placeholder:text-black/10 text-[#1a1a1a] resize-none"
                required
              />
            </div>

            <div className="pt-6 md:pt-10">
              <button type="submit" className="btn btn-primary w-full sm:w-auto">
                {t.contact.submit}
              </button>
            </div>
          </form>

          {isSubmitted && (
            <div
              ref={confirmationRef}
              tabIndex={-1}
              className="relative overflow-hidden border-2 border-emerald-600/30 bg-white px-6 py-7 text-[#1a1a1a] shadow-[0_28px_90px_rgba(4,120,87,0.18)] outline-none ring-4 ring-emerald-100 md:px-8"
              role="status"
              aria-live="polite"
            >
              <div className="absolute left-0 top-0 h-full w-2 bg-emerald-600" />
              <div className="flex items-start gap-5 md:gap-6">
                <span
                  className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-emerald-600/25 bg-emerald-50"
                  aria-hidden="true"
                >
                  <span className="h-4 w-7 rotate-[-45deg] border-b-[3px] border-l-[3px] border-emerald-700" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] font-bold text-emerald-700 mb-2">
                    {t.contact.successEyebrow}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] mb-3">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-[#666666] text-base leading-relaxed max-w-xl">
                    {t.contact.successText}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
