"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  caseStudies,
  workCategories,
  type WorkCategoryId,
} from "@/data/case-studies";

export default function WorkGrid() {
  const [active, setActive] = useState<WorkCategoryId | "all">("all");

  const items = useMemo(() => {
    if (active === "all") return caseStudies;
    return caseStudies.filter((item) => item.categories.includes(active));
  }, [active]);

  return (
    <section className="bg-[#F6F6F6] py-[clamp(3rem,7vh,5rem)]">
      <div className="mx-auto w-[min(1120px,calc(100%-2.5rem))]">
        <div className="mb-10 flex flex-wrap gap-2">
          {workCategories.map((cat) => {
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                className={`rounded-full px-4 py-2 text-[0.68rem] font-semibold tracking-[0.06em] transition ${
                  isActive
                    ? "bg-[#2f7fe8] text-white shadow-[0_8px_20px_rgba(47,127,232,0.28)]"
                    : "bg-white text-ink/70 ring-1 ring-ink/[0.08] hover:text-ink hover:ring-[#2f7fe8]/35"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {items.length === 0 ? (
          <p className="py-16 text-center text-ink-soft">
            No case studies in this category yet.
          </p>
        ) : (
          <motion.div
            layout
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {items.map((item, i) => (
                <motion.div
                  key={`${active}-${item.slug}`}
                  layout
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{
                    duration: 0.35,
                    delay: Math.min(i * 0.045, 0.22),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={`/work/${item.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/[0.06] bg-white shadow-[0_12px_36px_rgba(15,18,24,0.06)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(15,18,24,0.1)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-ink/[0.04]">
                      <Image
                        src={item.cover}
                        alt={item.coverAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-2 text-[0.62rem] font-semibold tracking-[0.14em] text-[#2f7fe8] uppercase">
                    {item.sector}
                  </p>
                  <h2 className="min-h-[2.6em] font-display text-[1.1rem] font-semibold leading-snug tracking-[-0.02em] text-ink">
                    {item.cardTitle ?? item.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-[0.88rem] leading-relaxed text-ink-soft">
                    {item.summary}
                  </p>
                  <span className="mt-auto pt-4 text-[0.7rem] font-medium tracking-[0.12em] text-[#2f7fe8] uppercase transition group-hover:text-ink">
                    View case study →
                  </span>
                </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        <div className="mx-auto mt-14 flex w-full flex-col items-start justify-between gap-6 rounded-2xl border border-ink/[0.08] bg-white p-8 shadow-[0_12px_36px_rgba(15,18,24,0.05)] md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold text-ink">
              Want results like these?
            </h2>
            <p className="mt-2 max-w-md text-ink-soft">
              Tell us what you&apos;re building — we&apos;ll map the right
              engagement.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#2f7fe8] px-7 text-[0.72rem] font-semibold tracking-[0.14em] text-white uppercase shadow-[0_10px_28px_rgba(47,127,232,0.28)] transition hover:-translate-y-0.5 hover:bg-[#256fd4]"
          >
            Start a project →
          </Link>
        </div>
      </div>
    </section>
  );
}
