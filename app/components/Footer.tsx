"use client";

import Link from "next/link";
import { useI18n } from "../i18n";

const footerLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about-us" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
] as const;

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-[#3d1d1a] text-white">
      <div className="px-5 py-16 md:py-20 lg:px-20">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link
              href="/"
              aria-label="DCTM Law Group homepage"
              className="inline-flex items-center"
            >
              <span className="text-4xl font-serif font-bold tracking-tighter">
                DCTM
              </span>
              <span className="ml-3 border-l border-white/25 pl-3 leading-[0.85]">
                <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-white/75">
                  Law
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-white/75">
                  Group
                </span>
              </span>
            </Link>

            <p className="mt-8 max-w-md text-base leading-relaxed text-white/65">
              {t.footer.intro}
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.24em] text-white/45">
              {t.footer.navigation}
            </p>
            <nav className="flex flex-col items-start gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {t.nav[link.key]}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.24em] text-white/45">
              {t.footer.services}
            </p>
            <div className="flex flex-col gap-3">
              {t.footer.serviceItems.map((service) => (
                <span key={service} className="text-sm text-white/75">
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.24em] text-white/45">
              {t.footer.contact}
            </p>
            <div className="space-y-4">
              <a
                href="mailto:info@dctmlaw.ge"
                className="block text-lg font-serif text-white transition-colors hover:text-white/70"
              >
                info@dctmlaw.ge
              </a>
              <a
                href="tel:+995555123456"
                className="block text-lg font-serif text-white transition-colors hover:text-white/70"
              >
                +995 555 12 34 56
              </a>
              <p className="text-sm leading-relaxed text-white/65">
                Rustaveli Ave. 12 <br />
                Tbilisi, Georgia
              </p>
              <Link
                href="/contact"
                className="btn btn-secondary mt-2 hover:bg-transparent hover:text-white hover:border-white"
              >
                {t.nav.consultation}
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs uppercase tracking-[0.18em] text-white/40 md:flex-row md:items-center md:justify-between">
          <p>2026 DCTM Law Group</p>
          <p>{t.footer.confidential}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
