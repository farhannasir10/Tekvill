"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { services, type Service } from "@/data/services";
import ServiceIcon from "./ServiceIcon";

function ServiceVisual({ icon }: { icon: Service["icon"] }) {
  if (icon === "ai") {
    return (
      <svg viewBox="0 0 160 120" className="h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id="aiGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6eb3ff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#6eb3ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="80" cy="60" r="36" fill="url(#aiGlow)" />
        <circle cx="80" cy="60" r="7" fill="#6eb3ff" />
        <circle cx="48" cy="34" r="4.5" fill="#6eb3ff" opacity="0.85" />
        <circle cx="118" cy="38" r="4.5" fill="#4fd1c5" opacity="0.85" />
        <circle cx="42" cy="86" r="4" fill="#4fd1c5" opacity="0.75" />
        <circle cx="122" cy="84" r="4" fill="#6eb3ff" opacity="0.75" />
        <path
          d="M80 60 L48 34 M80 60 L118 38 M80 60 L42 86 M80 60 L122 84"
          stroke="#6eb3ff"
          strokeWidth="1.2"
          opacity="0.55"
        />
        <circle cx="80" cy="60" r="22" fill="none" stroke="#6eb3ff" strokeWidth="1" opacity="0.25" />
      </svg>
    );
  }

  if (icon === "fullstack") {
    return (
      <svg viewBox="0 0 160 120" className="h-full w-full" aria-hidden="true">
        <rect x="28" y="22" width="104" height="22" rx="6" fill="#6eb3ff" opacity="0.18" stroke="#6eb3ff" strokeWidth="1.2" />
        <rect x="36" y="48" width="88" height="22" rx="6" fill="#4fd1c5" opacity="0.16" stroke="#4fd1c5" strokeWidth="1.2" />
        <rect x="46" y="74" width="68" height="22" rx="6" fill="#6eb3ff" opacity="0.22" stroke="#6eb3ff" strokeWidth="1.2" />
        <path d="M80 44v4M80 70v4" stroke="#6eb3ff" strokeWidth="1.4" opacity="0.45" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 160 120" className="h-full w-full" aria-hidden="true">
      <rect x="58" y="18" width="44" height="84" rx="10" fill="#6eb3ff" opacity="0.12" stroke="#6eb3ff" strokeWidth="1.3" />
      <rect x="66" y="28" width="28" height="48" rx="4" fill="#4fd1c5" opacity="0.2" />
      <circle cx="80" cy="88" r="3" fill="#6eb3ff" opacity="0.7" />
      <path
        d="M42 40c8-12 20-12 28 0M90 40c8-12 20-12 28 0"
        fill="none"
        stroke="#6eb3ff"
        strokeWidth="1.2"
        opacity="0.4"
      />
    </svg>
  );
}

export default function Capabilities() {
  const items = services.slice(0, 3);
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-line-dark bg-paper py-[clamp(5rem,11vh,8rem)]"
    >
      <div className="relative mx-auto w-[min(980px,calc(100%-2.5rem))]">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-semibold tracking-[-0.03em] text-ink">
            Services
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
            Built for ambitious teams — depth without the agency theatre.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white/70 shadow-[0_18px_50px_rgba(15,18,24,0.07)] backdrop-blur-[2px]">
          <ul>
            {items.map((item, i) => {
              const isOpen = openSlug === item.slug;
              const isHovered = hoveredSlug === item.slug;

              return (
                <li
                  key={item.slug}
                  className={i < items.length - 1 ? "border-b border-ink/10" : ""}
                >
                  <motion.div
                    className="relative"
                    onHoverStart={() => setHoveredSlug(item.slug)}
                    onHoverEnd={() => setHoveredSlug(null)}
                  >
                    <motion.div
                      className="pointer-events-none absolute inset-0"
                      initial={false}
                      animate={{
                        opacity: isHovered || isOpen ? 1 : 0,
                        background:
                          isHovered || isOpen
                            ? "linear-gradient(90deg, rgba(15,18,24,0.045) 0%, rgba(110,179,255,0.07) 55%, rgba(79,209,197,0.04) 100%)"
                            : "transparent",
                      }}
                      transition={{ type: "spring", stiffness: 280, damping: 28 }}
                      aria-hidden="true"
                    />

                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenSlug((prev) => (prev === item.slug ? null : item.slug))
                      }
                      className="relative grid w-full grid-cols-1 gap-4 px-5 py-6 text-left sm:grid-cols-[5.5rem_minmax(0,1fr)_auto] sm:items-center sm:gap-8 sm:px-7 sm:py-7"
                    >
                      <span
                        className="font-display text-[2rem] font-semibold leading-none tracking-[-0.05em] md:text-[2.25rem]"
                        style={{
                          backgroundImage:
                            "linear-gradient(135deg, #6eb3ff 0%, #4fd1c5 100%)",
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: "transparent",
                        }}
                      >
                        {item.index}
                      </span>

                      <div className="relative z-[1] min-w-0 pr-0 sm:pr-28 md:pr-36">
                        <div className="mb-2 flex items-center gap-3.5">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink/[0.05] text-ink/55 ring-1 ring-ink/8">
                            <ServiceIcon name={item.icon} className="h-5 w-5" />
                          </span>
                          <h3 className="font-display text-[1.35rem] font-semibold tracking-[-0.025em] text-ink md:text-[1.5rem]">
                            {item.title}
                          </h3>
                        </div>
                        <p className="max-w-xl text-[0.95rem] leading-relaxed text-ink-soft">
                          {item.body}
                        </p>
                      </div>

                      <div className="relative z-[1] hidden items-center gap-3 sm:flex">
                        <motion.span
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink/[0.04] text-ink/40 ring-1 ring-ink/8"
                          initial={false}
                          animate={{
                            x: isHovered || isOpen ? 0 : 10,
                            opacity: isHovered || isOpen ? 1 : 0.35,
                            backgroundColor:
                              isOpen || isHovered
                                ? "rgba(110,179,255,0.15)"
                                : "rgba(15,18,24,0.04)",
                            color:
                              isOpen || isHovered
                                ? "#3d7fc4"
                                : "rgba(15,18,24,0.4)",
                          }}
                          transition={{ type: "spring", stiffness: 320, damping: 24 }}
                          aria-hidden="true"
                        >
                          {isOpen ? "−" : "→"}
                        </motion.span>
                      </div>

                      <motion.div
                        className="pointer-events-none absolute top-1/2 right-4 hidden h-24 w-36 -translate-y-1/2 md:block lg:right-16 lg:h-28 lg:w-40"
                        initial={false}
                        animate={{
                          opacity: isHovered || isOpen ? 1 : 0,
                          x: isHovered || isOpen ? 0 : 18,
                          scale: isHovered || isOpen ? 1 : 0.94,
                        }}
                        transition={{ type: "spring", stiffness: 260, damping: 26 }}
                        aria-hidden="true"
                      >
                        <ServiceVisual icon={item.icon} />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          key="panel"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 280, damping: 30 }}
                          className="overflow-hidden"
                        >
                          <div className="relative z-[1] px-5 pb-6 sm:px-7 sm:pb-7 sm:pl-[calc(5.5rem+2rem)]">
                            <p className="mb-3 font-ui text-[0.68rem] font-semibold tracking-[0.14em] text-ink/40 uppercase">
                              Stack & focus
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full bg-ink/[0.04] px-3.5 py-1.5 text-[0.68rem] tracking-[0.06em] text-ink/65 ring-1 ring-ink/10"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-12 flex justify-center sm:mt-14">
          <Link
            href="/services"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-8 text-[0.72rem] font-semibold tracking-[0.14em] text-ink uppercase shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-[0_12px_28px_rgba(0,0,0,0.1)]"
          >
            View more
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
