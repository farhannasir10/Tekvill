"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

function scrollWindowToTop() {
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  html.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo(0, 0);
  html.style.scrollBehavior = previous;
}

export default function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    window.history.scrollRestoration = "manual";

    const hash = window.location.hash;
    // Home (and bare #hero) should always open at the top.
    const forceTop =
      pathname === "/" || !hash || hash === "#hero" || hash === "#";

    if (!forceTop) return;

    if (
      pathname === "/" &&
      (hash === "#hero" || hash === "#") &&
      window.history.replaceState
    ) {
      window.history.replaceState(null, "", "/");
    }

    scrollWindowToTop();

    const frame = requestAnimationFrame(scrollWindowToTop);
    const timer = window.setTimeout(scrollWindowToTop, 0);
    const timer2 = window.setTimeout(scrollWindowToTop, 50);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      window.clearTimeout(timer2);
    };
  }, [pathname]);

  return null;
}
