"use client";

import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-[90] flex h-12 w-12 items-center justify-center border border-[#3d1d1a]/25 bg-white text-[#3d1d1a] shadow-[0_18px_50px_rgba(61,29,26,0.16)] transition-all duration-300 hover:bg-[#3d1d1a] hover:text-white hover:border-[#3d1d1a] md:bottom-8 md:right-8 ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <span className="text-xl leading-none" aria-hidden="true">
        ↑
      </span>
    </button>
  );
};

export default ScrollToTop;
