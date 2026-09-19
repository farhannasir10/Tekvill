import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services — Tekvill",
  description:
    "AI development, full stack, mobile, UI/UX, staff augmentation, and cloud & DevOps from Tekvill.",
};

const washes = [
  "rgba(110,179,255,0.16)",
  "rgba(160,140,255,0.12)",
  "rgba(110,200,180,0.12)",
  "rgba(255,180,120,0.1)",
  "rgba(120,180,255,0.14)",
  "rgba(200,160,255,0.1)",
];

export default function ServicesPage() {
  const items = services.slice(0, 6);

  return (
    <main>
      <Header />
      <section className="border-b border-line bg-black pt-28 pb-16">
        <div className="mx-auto w-[min(1120px,calc(100%-2.5rem))]">
          <p className="mb-4 text-[0.68rem] font-semibold tracking-[0.2em] text-accent uppercase">
            Services
          </p>
          <h1 className="max-w-2xl font-display text-[clamp(2.4rem,5vw,3.8rem)] font-semibold tracking-[-0.03em] text-warm">
            Everything we build
            <br />
            for ambitious teams.
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-lede">
            Product, AI, design, and infrastructure — delivered as one
            production studio.
          </p>
        </div>
      </section>

      <section className="bg-black py-[clamp(4rem,9vh,6.5rem)]">
        <div className="mx-auto grid w-[min(1120px,calc(100%-2.5rem))] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <article
              id={item.slug}
              key={item.slug}
              className="scroll-mt-24 group relative flex min-h-[19.5rem] flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d1017] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-1.5 hover:border-white/15"
            >
              <div
                className="pointer-events-none absolute -top-16 -right-10 h-44 w-44 rounded-full opacity-70 blur-3xl transition duration-500 group-hover:opacity-100"
                style={{ background: washes[i % washes.length] }}
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(165deg, rgba(255,255,255,0.04) 0%, transparent 38%)",
                }}
                aria-hidden="true"
              />

              <div className="relative mb-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.04] text-accent ring-1 ring-white/10 transition group-hover:bg-accent/15 group-hover:text-warm">
                  <ServiceIcon name={item.icon} className="h-5 w-5" />
                </span>
              </div>

              <h2 className="relative mb-3 font-display text-[1.4rem] font-semibold tracking-[-0.02em] text-warm">
                {item.title}
              </h2>
              <p className="relative mb-7 flex-1 text-[0.92rem] leading-relaxed text-lede">
                {item.body}
              </p>
              <div className="relative flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/[0.04] px-3 py-1.5 text-[0.6rem] tracking-[0.1em] text-muted uppercase ring-1 ring-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 flex w-[min(1120px,calc(100%-2.5rem))] flex-col items-start justify-between gap-6 rounded-2xl border border-white/[0.07] bg-[#0d1017] p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold text-warm">
              Need a custom engagement?
            </h2>
            <p className="mt-2 max-w-md text-lede">
              Tell us what you&apos;re building — we&apos;ll map the right path.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-warm px-7 text-[0.72rem] font-semibold tracking-[0.14em] text-black uppercase transition hover:bg-white"
          >
            Talk to Tekvill
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
