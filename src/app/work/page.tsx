import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkGrid from "@/components/WorkGrid";

export const metadata: Metadata = {
  title: "Our Work — Tekvill",
  description:
    "Selected Tekvill case studies across AI, mobile, product design, MVP, and web app development.",
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
            Our Work
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-white/80">
            Production outcomes across AI, mobile, product, and web — filter by
            category to explore the work.
          </p>
        </div>
      </section>

      <WorkGrid />
      <Footer />
    </main>
  );
}
