import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services — Tekvill",
  description:
    "AI, full stack, mobile, UI/UX, staff augmentation, cloud, product strategy, and QA from Tekvill.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#F6F6F6]">
      <Header />

      <section
        className="relative overflow-hidden pt-14 pb-16"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 12% 0%, rgba(255,255,255,0.22), transparent 55%), linear-gradient(165deg, #3d8fff 0%, #5aa8ff 48%, #4d9fff 100%)",
        }}
      >
        <div className="relative mx-auto w-[min(1120px,calc(100%-2.5rem))]">
          <p className="mb-4 text-[0.68rem] font-semibold tracking-[0.2em] text-white/75 uppercase">
            Services
          </p>
          <h1 className="max-w-2xl font-display text-[clamp(2.4rem,5vw,3.8rem)] font-semibold tracking-[-0.03em] text-white">
            Everything we build
            <br />
            for ambitious teams.
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-white/80">
            Product, AI, design, and infrastructure — delivered as one
            production studio.
          </p>
        </div>
      </section>

      <section className="bg-[#F6F6F6] py-[clamp(4rem,9vh,6.5rem)]">
        <div className="mx-auto grid w-[min(1120px,calc(100%-2.5rem))] gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-5">
          {services.map((item) => (
            <Link
              id={item.slug}
              key={item.slug}
              href={`/services/${item.slug}`}
              className="scroll-mt-24 group relative flex min-h-[22rem] flex-col overflow-hidden rounded-2xl border border-ink/[0.06] bg-white shadow-[0_12px_36px_rgba(15,18,24,0.06)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(15,18,24,0.1)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.cover}
                  alt={item.coverAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <span
                  className="absolute inset-x-0 top-0 h-[3px] bg-[#2f7fe8]"
                  aria-hidden="true"
                />
              </div>

              <div className="relative flex flex-1 flex-col p-6">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f2ff] text-[#2f7fe8] ring-1 ring-[#2f7fe8]/15">
                  <ServiceIcon name={item.icon} className="h-5 w-5" />
                </span>

                <h2 className="mb-2 font-display text-[1.2rem] font-bold tracking-[-0.02em] text-ink">
                  {item.title}
                </h2>
                <p className="mb-5 flex-1 text-[0.88rem] leading-relaxed text-ink-soft">
                  {item.body}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-ink/[0.04] px-2.5 py-1 font-ui text-[0.62rem] font-medium tracking-[0.04em] text-ink/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-14 flex w-[min(1120px,calc(100%-2.5rem))] flex-col items-start justify-between gap-6 rounded-2xl border border-ink/[0.08] bg-white p-8 shadow-[0_12px_36px_rgba(15,18,24,0.05)] md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold text-ink">
              Need a custom engagement?
            </h2>
            <p className="mt-2 max-w-md text-ink-soft">
              Tell us what you&apos;re building — we&apos;ll map the right path.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#2f7fe8] px-7 text-[0.72rem] font-semibold tracking-[0.14em] text-white uppercase shadow-[0_10px_28px_rgba(47,127,232,0.28)] transition hover:-translate-y-0.5 hover:bg-[#256fd4]"
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
