import Link from "next/link";
import { services } from "@/data/services";
import ServiceIcon from "./ServiceIcon";

export default function Capabilities() {
  const items = services.slice(0, 3);

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

        <ul className="border-t border-ink/15">
          {items.map((item) => (
            <li key={item.slug}>
              <Link
                href="/services"
                className="group grid gap-5 border-b border-ink/15 py-8 transition duration-300 hover:bg-ink/[0.035] sm:grid-cols-[5.5rem_minmax(0,1fr)_auto] sm:items-center sm:gap-8 sm:py-9"
              >
                <span className="font-display text-[2rem] font-semibold leading-none tracking-[-0.05em] text-ink/35 transition group-hover:text-ink/55 md:text-[2.25rem]">
                  {item.index}
                </span>

                <div className="min-w-0">
                  <div className="mb-2.5 flex items-center gap-3.5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink/[0.06] text-ink/55 ring-1 ring-ink/8 transition duration-300 group-hover:bg-ink/[0.1] group-hover:text-ink/70">
                      <ServiceIcon name={item.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-[1.4rem] font-semibold tracking-[-0.025em] text-ink md:text-[1.55rem]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="max-w-xl text-[1rem] leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                  <p className="mt-3.5 font-ui text-[0.7rem] tracking-[0.1em] text-ink/45 uppercase">
                    {item.tags.join(" · ")}
                  </p>
                </div>

                <span
                  className="hidden text-[1.25rem] text-ink/20 transition duration-300 group-hover:translate-x-1.5 group-hover:text-accent sm:block"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

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
