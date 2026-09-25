import Link from "next/link";
import { services } from "@/data/services";
import ServiceIcon from "./ServiceIcon";

export default function Capabilities() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-[clamp(5rem,11vh,8rem)]"
      style={{
        background:
          "radial-gradient(ellipse 70% 55% at 12% 0%, rgba(255,255,255,0.18), transparent 55%), radial-gradient(ellipse 55% 45% at 88% 100%, rgba(10,40,90,0.22), transparent 50%), linear-gradient(165deg, #3d8fff 0%, #5aa8ff 48%, #4d9fff 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto w-[min(1120px,calc(100%-2.5rem))]">
        <div className="mb-10 sm:mb-12 md:mb-14">
          <p className="mb-4 font-ui text-[0.7rem] font-semibold tracking-[0.2em] text-white/75 uppercase">
            Services that ship
          </p>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
            <div className="min-w-0 max-w-2xl">
              <h2 className="font-display text-[clamp(2.35rem,4.8vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.04em] text-white">
                Built for ambitious teams
              </h2>
              <p className="mt-4 max-w-md text-[1.05rem] leading-relaxed text-white/80">
                Depth without the agency theatre — AI, product, and platforms
                from one studio.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-white/70 bg-white px-5 text-[0.72rem] font-semibold tracking-[0.1em] text-[#1a4a8c] uppercase shadow-[0_8px_24px_rgba(15,40,90,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/95 sm:self-end"
            >
              View all services
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {services.map((item) => (
            <Link
              key={item.slug}
              href={`/services#${item.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-[0_14px_36px_rgba(15,40,90,0.14)] transition duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(15,40,90,0.22)] sm:p-7"
            >
              <span
                className="absolute inset-x-0 top-0 h-[3px] bg-[#2f7fe8] transition-[height] duration-300 group-hover:h-1"
                aria-hidden="true"
              />

              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f2ff] text-[#2f7fe8] ring-1 ring-[#2f7fe8]/15 transition duration-300 group-hover:bg-[#dcecff] group-hover:ring-[#2f7fe8]/25">
                <ServiceIcon name={item.icon} className="h-5 w-5" />
              </span>

              <h3 className="mb-2.5 font-display text-[1.2rem] font-bold tracking-[-0.025em] text-ink">
                {item.title}
              </h3>
              <p className="mb-5 flex-1 font-ui text-[0.9rem] leading-[1.65] text-ink-soft">
                {item.body}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {item.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-ink/[0.04] px-2.5 py-1 font-ui text-[0.65rem] font-medium tracking-[0.04em] text-ink/55"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
