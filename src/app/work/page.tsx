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
    <main className="bg-[#F6F6F6]">
      <Header />

      <section className="relative overflow-hidden bg-black pt-14 pb-16">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 50% 80% at 10% 0%, rgba(110,179,255,0.06), transparent 55%)",
          }}
        />
        <div className="relative mx-auto w-[min(1120px,calc(100%-2.5rem))]">
          <p className="mb-4 text-[0.68rem] font-semibold tracking-[0.2em] text-white/75 uppercase">
            Work
          </p>
          <h1 className="max-w-2xl font-display text-[clamp(2.4rem,5vw,3.8rem)] font-semibold tracking-[-0.03em] text-white">
            All case studies
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-white/80">
            Production outcomes from teams who needed systems that hold under
            pressure — and still feel intentional.
          </p>
        </div>
      </section>

      <section className="bg-[#F6F6F6] py-[clamp(4rem,9vh,6.5rem)]">
        <div className="mx-auto grid w-[min(1120px,calc(100%-2.5rem))] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink/[0.06] bg-white shadow-[0_12px_36px_rgba(15,18,24,0.06)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(15,18,24,0.1)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.cover}
                  alt={item.coverAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute right-5 bottom-4 left-5">
                  <p className="font-display text-[clamp(2rem,3vw,2.6rem)] font-semibold tracking-[-0.03em] text-white">
                    {item.metric}
                  </p>
                  <p className="mt-0.5 text-[0.62rem] tracking-[0.14em] text-white/70 uppercase">
                    {item.metricLabel}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 pt-5">
                <p className="mb-2 text-[0.62rem] font-semibold tracking-[0.16em] text-[#2f7fe8] uppercase">
                  {item.sector}
                </p>
                <h2 className="mb-3 font-display text-[1.3rem] font-bold tracking-[-0.02em] text-ink">
                  {item.title}
                </h2>
                <p className="mb-5 flex-1 text-[0.9rem] leading-relaxed text-ink-soft">
                  {item.summary}
                </p>
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-ink/[0.04] px-2.5 py-1 text-[0.6rem] font-medium tracking-[0.04em] text-ink/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[0.7rem] font-medium tracking-[0.12em] text-[#2f7fe8] uppercase transition group-hover:text-ink">
                  View case study →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-14 flex w-[min(1120px,calc(100%-2.5rem))] flex-col items-start justify-between gap-6 rounded-2xl border border-ink/[0.08] bg-white p-8 shadow-[0_12px_36px_rgba(15,18,24,0.05)] md:flex-row md:items-center md:p-10">
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
      </section>
      <Footer />
    </main>
  );
}
