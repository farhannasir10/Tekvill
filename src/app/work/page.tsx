import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies — Tekvill",
  description:
    "Selected Tekvill case studies — AI platforms, commerce systems, and infrastructure delivered in production.",
};

export default function WorkIndexPage() {
  return (
    <main>
      <Header />
      <section className="border-b border-line bg-black pt-28 pb-16">
        <div className="mx-auto w-[min(1120px,calc(100%-2.5rem))]">
          <p className="mb-4 text-[0.68rem] font-semibold tracking-[0.2em] text-accent uppercase">
            Work
          </p>
          <h1 className="max-w-2xl font-serif text-[clamp(2.6rem,5.5vw,4.2rem)] font-medium tracking-[-0.03em] text-warm">
            All case studies
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-lede">
            Production outcomes from teams who needed systems that hold under
            pressure — and still feel intentional.
          </p>
        </div>
      </section>

      <section className="bg-surface py-[clamp(4rem,9vh,6.5rem)]">
        <div className="mx-auto grid w-[min(1120px,calc(100%-2.5rem))] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d1017] shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-1.5 hover:border-white/15"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.cover}
                  alt={item.coverAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1017] via-[#0d1017]/55 to-transparent" />
                <div className="absolute right-5 bottom-4 left-5">
                  <p className="font-serif text-[clamp(2rem,3vw,2.6rem)] font-medium tracking-[-0.03em] text-white">
                    {item.metric}
                  </p>
                  <p className="mt-0.5 text-[0.62rem] tracking-[0.14em] text-white/65 uppercase">
                    {item.metricLabel}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 pt-5">
                <p className="mb-2 text-[0.62rem] font-semibold tracking-[0.16em] text-accent uppercase">
                  {item.sector}
                </p>
                <h2 className="mb-3 font-display text-[1.35rem] font-semibold tracking-[-0.02em] text-warm">
                  {item.title}
                </h2>
                <p className="mb-5 flex-1 text-[0.9rem] leading-relaxed text-lede">
                  {item.summary}
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.04] px-3 py-1 text-[0.6rem] tracking-[0.1em] text-muted uppercase ring-1 ring-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[0.7rem] font-medium tracking-[0.12em] text-warm/80 uppercase transition group-hover:text-accent">
                  View case study →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-16 flex w-[min(1120px,calc(100%-2.5rem))] flex-col items-start justify-between gap-6 rounded-2xl border border-white/[0.07] bg-[#0d1017] p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold text-warm">
              Want results like these?
            </h2>
            <p className="mt-2 max-w-md text-lede">
              Tell us what you&apos;re building — we&apos;ll map the right engagement.
            </p>
          </div>
          <Link
            href="/#contact"
            className="text-[0.7rem] font-medium tracking-[0.12em] text-warm uppercase underline underline-offset-[0.28em] transition hover:text-white"
          >
            Start a project →
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
