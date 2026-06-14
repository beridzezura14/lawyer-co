"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "../i18n";

const navItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/about-us" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
] as const;

const localeLabels = {
  ka: "ქარ",
  en: "en",
} as const;

const Header = () => {
  const pathname = usePathname();
  const { locale, setLocale, t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerIsSolid = isScrolled || isMenuOpen;

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-500">
      <div
        className={`relative z-20 transition-all duration-300 ease-in-out ${
          headerIsSolid
            ? "bg-[#3d1d1a] border-b border-white/10 px-5 py-3 shadow-xl lg:px-20"
            : "mt-4 mx-4 bg-transparent border-y border-white/10 px-4 py-4 lg:mt-5 lg:mx-20 lg:px-0 lg:py-5"
        }`}
      >
        <div className="max-w-[1920px] mx-auto flex min-w-0 items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="DCTM Law Group homepage"
            className="flex shrink-0 items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-white text-2xl md:text-4xl font-serif font-bold tracking-tighter">
              DCTM
            </span>
            <span className="ml-2 pl-2 border-l border-white/30 leading-[0.8] self-center">
              <span className="text-white/80 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-medium block">
                Law
              </span>
              <span className="text-white/80 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-medium block">
                Group
              </span>
            </span>
          </Link>

          <nav className="hidden min-w-0 items-center space-x-8 xl:space-x-10 lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`${
                    isActive
                      ? "text-white border-b border-white"
                      : "text-white/70 hover:text-white"
                  } text-xs uppercase tracking-wider font-semibold transition-all pb-0.5 whitespace-normal text-center leading-tight`}
                >
                  {t.nav[item.key]}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            <div className="relative grid grid-cols-2 overflow-hidden border border-white/20 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
              <span
                className={`absolute inset-y-0 left-0 w-1/2 bg-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  locale === "en" ? "translate-x-full" : "translate-x-0"
                }`}
                aria-hidden="true"
              />
              {(["ka", "en"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`relative z-10 px-3 py-2 transition-colors duration-300 ${
                    locale === item
                      ? "text-[#3d1d1a]"
                      : "text-white/65 hover:text-white"
                  }`}
                  onClick={() => setLocale(item)}
                >
                  {localeLabels[item]}
                </button>
              ))}
            </div>
            <Link href="/contact" className="btn btn-outline-light">
              {t.nav.consultation}
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden relative flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 text-white transition-colors hover:border-white"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span
              className={`absolute h-[1px] w-5 bg-current transition-transform ${
                isMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-[1px] w-5 bg-current transition-opacity ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-[1px] w-5 bg-current transition-transform ${
                isMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`lg:hidden fixed inset-x-0 top-0 z-10 h-[100svh] bg-[#3d1d1a] px-5 pb-8 pt-28 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex h-full min-w-0 flex-col">
          <div className="flex flex-col border-t border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="border-b border-white/10 py-5 text-2xl font-serif text-white break-words"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </div>

          <div className="relative mt-8 grid grid-cols-2 overflow-hidden border border-white/20 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
            <span
              className={`absolute inset-y-0 left-0 w-1/2 bg-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                locale === "en" ? "translate-x-full" : "translate-x-0"
              }`}
              aria-hidden="true"
            />
            {(["ka", "en"] as const).map((item) => (
              <button
                key={item}
                type="button"
                className={`relative z-10 px-3 py-3 transition-colors duration-300 ${
                  locale === item
                    ? "text-[#3d1d1a]"
                    : "text-white/65 hover:text-white"
                }`}
                onClick={() => setLocale(item)}
              >
                {localeLabels[item]}
              </button>
            ))}
          </div>

          <Link
            href="/contact"
            className="btn btn-secondary mt-auto w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.consultation}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
