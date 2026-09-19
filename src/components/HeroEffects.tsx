"use client";

import { useEffect } from "react";

export default function HeroEffects() {
  useEffect(() => {
    const hero = document.getElementById("hero");
    const field = document.querySelector<HTMLElement>("[data-hero-field]");
    const glow = document.querySelector<HTMLElement>("[data-hero-glow]");
    const spotlight = document.getElementById("spotlight");
    const panel = document.getElementById("stagePanel");

    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let targetX = 0.5;
    let targetY = 0.5;
    let currentX = 0.5;
    let currentY = 0.5;
    let raf = 0;

    const onMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      targetX = (event.clientX - rect.left) / rect.width;
      targetY = (event.clientY - rect.top) / rect.height;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      const px = (currentX - 0.5) * 2;
      const py = (currentY - 0.5) * 2;

      if (field) {
        field.style.transform = `scale(1.04) translate3d(${px * -1.2}%, ${py * -0.9}%, 0)`;
      }
      if (glow) {
        glow.style.transform = `translate3d(${px * 2.5}%, ${py * 2}%, 0)`;
      }
      if (spotlight) {
        spotlight.style.left = `${currentX * 100}%`;
        spotlight.style.top = `${currentY * 100}%`;
      }
      if (panel) {
        panel.style.transform = `rotateX(${py * -5}deg) rotateY(${px * 7}deg)`;
      }

      raf = requestAnimationFrame(tick);
    };

    hero.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      hero.removeEventListener("pointermove", onMove);
    };
  }, []);

  return null;
}
