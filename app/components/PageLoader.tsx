"use client";

import { useEffect, useState } from "react";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { useI18n } from "../i18n";

const PageLoader = () => {
  const pathname = usePathname();
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(true);
  const hasLoadedOnce = useRef(false);

  useEffect(() => {
    const duration = hasLoadedOnce.current ? 520 : 900;

    const showTimer = window.setTimeout(() => {
      setIsVisible(true);
    }, 0);

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
      hasLoadedOnce.current = true;
    }, duration);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, [pathname]);

  return (
    <div
      className={`fixed inset-0 z-[300] flex items-center justify-center bg-[#3d1d1a] text-white transition-all duration-500 ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isVisible}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center">
          <span className="text-5xl font-serif font-bold tracking-tighter">
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
        </div>

        <div className="h-[1px] w-56 overflow-hidden bg-white/15">
          <div className="loader-line h-full w-1/2 bg-white" />
        </div>

        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/45">
          {t.loader}
        </p>
      </div>
    </div>
  );
};

export default PageLoader;
