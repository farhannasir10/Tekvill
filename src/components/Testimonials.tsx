"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const quotes = [
  {
    text: "Tekvill played a pivotal role in turning my startup idea into a reality. From the initial concept and planning stages to building the MVP and scaling it into a complete product, their team demonstrated outstanding professionalism and technical expertise.",
    name: "Leo",
    role: "CEO, REP",
    initial: "L",
  },
  {
    text: "Having collaborated with Tekvill on several app and web development projects, I am delighted to express my unwavering confidence in their services. Their consistent delivery of top-notch quality work has solidified their position as my go-to choice for future endeavors and beyond.",
    name: "Michael",
    role: "CEO, Smart Meal Plan",
    initial: "M",
  },
  {
    text: "I would like to take this opportunity to express my heartfelt appreciation for the exemplary service and outstanding results delivered by Tekvill during our collaboration on multiple projects with a diverse range of international customers.",
    name: "Emily J.",
    role: "Product Head, SeenReport",
    initial: "E",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = quotes.length;

  const go = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
    },
    [count]
  );

  useEffect(() => {
    const id = window.setInterval(() => go(index + 1), 7500);
    return () => window.clearInterval(id);
  }, [go, index]);

  const item = quotes[index];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-[clamp(3.5rem,8vh,6rem)]"
    >
      <div className="relative mx-auto w-[min(900px,calc(100%-2.5rem))]">
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-3 font-ui text-[0.68rem] font-semibold tracking-[0.2em] text-[#6B7280] uppercase">
            Testimonials
          </p>
          <h2 className="font-display text-[clamp(2.15rem,4.4vw,3.25rem)] font-semibold tracking-[-0.035em] text-[#1F2937]">
            Customers Feedback
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[1rem] leading-relaxed text-[#4B5563]">
            A few words from partners who trusted us with the work that matters.
          </p>
        </div>

        <div className="relative mt-10 sm:mt-12">
          <div
            className="relative overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white px-8 py-10 sm:px-12 sm:py-12 md:px-14"
            style={{
              boxShadow:
                "0 20px 50px rgba(15, 23, 42, 0.045), 0 4px 14px rgba(15, 23, 42, 0.03)",
            }}
          >
            <span
              className="pointer-events-none absolute -top-1 left-5 font-serif text-[6rem] leading-none text-[#6eb3ff]/45 select-none sm:left-7 sm:text-[7rem]"
              aria-hidden="true"
            >
              “
            </span>

            <div className="relative min-h-[12.5rem] pt-10 sm:min-h-[11rem] sm:pt-12">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={item.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="m-0"
                >
                  <p className="font-serif text-[clamp(1.2rem,2vw,1.45rem)] leading-[1.6] tracking-[-0.015em] text-[#1F2937]">
                    {item.text}
                  </p>
                  <footer className="mt-9 flex items-center gap-3.5">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E5E7EB] font-display text-[0.9rem] font-semibold text-[#374151]"
                      aria-hidden="true"
                    >
                      {item.initial}
                    </span>
                    <cite className="not-italic">
                      <span className="block font-display text-[1.05rem] font-semibold tracking-[-0.02em] text-[#1F2937]">
                        {item.name}
                      </span>
                      <span className="mt-0.5 block font-ui text-[0.82rem] text-[#6B7280]">
                        {item.role}
                      </span>
                    </cite>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(index - 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#9CA3AF] transition hover:border-[#D1D5DB] hover:text-[#1F2937]"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M10 3.5 5.5 8 10 12.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="flex items-center gap-1.5" role="tablist" aria-label="Testimonials">
              {quotes.map((q, i) => (
                <button
                  key={q.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full border-0 p-0 transition-all duration-300 ${
                    i === index
                      ? "w-6 bg-[#1F2937]"
                      : "w-1.5 bg-[#D1D5DB] hover:bg-[#9CA3AF]"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(index + 1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#9CA3AF] transition hover:border-[#D1D5DB] hover:text-[#1F2937]"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M6 3.5 10.5 8 6 12.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
