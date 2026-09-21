"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const quotes = [
  {
    text: "Tekvill played a pivotal role in turning my startup idea into a reality. From the initial concept and planning stages to building the MVP and scaling it into a complete product, their team demonstrated outstanding professionalism and technical expertise.",
    name: "Leo",
    role: "CEO REP",
  },
  {
    text: "Having collaborated with Tekvill on several app and web development projects, I am delighted to express my unwavering confidence in their services. Their consistent delivery of top-notch quality work has solidified their position as my go-to choice for future endeavors and beyond.",
    name: "Michael",
    role: "CEO Smart Meal Plan",
  },
  {
    text: "I would like to take this opportunity to express my heartfelt appreciation for the exemplary service and outstanding results delivered by Tekvill during our collaboration on multiple projects with a diverse range of international customers.",
    name: "Emily J.",
    role: "Product Head SeenReport",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(1);
  const count = quotes.length;

  const go = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
    },
    [count]
  );

  useEffect(() => {
    const id = window.setInterval(() => go(index + 1), 7000);
    return () => window.clearInterval(id);
  }, [go, index]);

  const item = quotes[index];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-paper py-[clamp(5rem,11vh,8rem)]"
    >
      <div className="relative mx-auto w-[min(920px,calc(100%-2.5rem))] text-center">
        <p className="mb-3 font-ui text-[0.72rem] font-semibold tracking-[0.22em] text-[#8b7cf6] uppercase">
          Testimonials
        </p>
        <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.4rem)] font-semibold tracking-[-0.03em] text-ink">
          Customers Feedback
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-[#6b6b6b]">
          Here are a few testimonials from our highly satisfied customers,
          highlighting their positive experiences with our services.
        </p>

        <div className="relative mt-12 px-10 sm:px-14 md:mt-14 md:px-16">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go(index - 1)}
            className="absolute top-[38%] left-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e8e8e8] bg-white text-[#8b7cf6] shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition hover:border-[#8b7cf6] hover:shadow-[0_4px_12px_rgba(139,124,246,0.18)] sm:h-11 sm:w-11"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M10 3.5 5.5 8 10 12.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => go(index + 1)}
            className="absolute top-[38%] right-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e8e8e8] bg-white text-[#8b7cf6] shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition hover:border-[#8b7cf6] hover:shadow-[0_4px_12px_rgba(139,124,246,0.18)] sm:h-11 sm:w-11"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M6 3.5 10.5 8 6 12.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="relative mx-auto max-w-[780px] min-h-[17rem] sm:min-h-[15rem]">
            <span
              className="pointer-events-none absolute top-[-0.35rem] left-1/2 z-0 -translate-x-1/2 select-none font-serif text-[clamp(7rem,18vw,11rem)] leading-none text-[#d8d8d8]/70"
              aria-hidden="true"
            >
              ”
            </span>

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-[1] m-0"
              >
                <p className="mx-auto text-[clamp(1.02rem,1.5vw,1.15rem)] leading-[1.7] text-[#5c5c5c]">
                  {item.text}
                </p>
                <footer className="mt-7">
                  <cite className="not-italic">
                    <span className="block font-display text-[1.2rem] font-semibold text-[#1729a4]">
                      {item.name}
                    </span>
                    <span className="mt-1 block font-ui text-[0.95rem] text-[#6b6b6b]">
                      {item.role}
                    </span>
                  </cite>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div
            className="mt-9 flex items-center justify-center gap-2.5"
            role="tablist"
            aria-label="Testimonials"
          >
            {quotes.map((q, i) => (
              <button
                key={q.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full border-0 p-0 transition ${
                  i === index
                    ? "scale-[1.15] bg-[#5a49f8]"
                    : "bg-[#d4d4d4] hover:bg-[#bdbdbd]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
