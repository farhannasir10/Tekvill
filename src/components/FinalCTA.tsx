import Link from "next/link";

const points = [
  "Senior pod from day one",
  "Weekly demos, clear milestones",
  "Production standards, full handover",
];

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line bg-black py-[clamp(5rem,11vh,8rem)]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 82% 40%, rgba(110,179,255,0.1), transparent 58%)",
        }}
      />
      <div className="relative mx-auto grid w-[min(1120px,calc(100%-2.5rem))] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
        <div>
          <h2 className="font-display text-[clamp(2.3rem,4.5vw,3.5rem)] font-semibold tracking-[-0.03em] text-warm">
            Ready to start
            <br />
            your project?
          </h2>
          <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-lede">
            Tell us what you&apos;re building. We reply within one business day
            — with a clear next step, not a pitch deck.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 font-ui text-[0.95rem] text-lede"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <aside className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d1017] p-7 shadow-[0_24px_60px_rgba(0,0,0,0.4)] md:p-8">
          <div
            className="pointer-events-none absolute -top-16 -right-12 h-44 w-44 rounded-full opacity-80 blur-3xl"
            style={{ background: "rgba(110,179,255,0.14)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(165deg, rgba(255,255,255,0.04) 0%, transparent 42%)",
            }}
            aria-hidden="true"
          />

          <div className="relative">
            <div className="mb-6 flex items-center justify-between gap-3">
              <span className="font-ui text-[0.68rem] font-semibold tracking-[0.18em] text-muted uppercase">
                Contact
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-1 font-ui text-[0.68rem] text-lede ring-1 ring-white/[0.08]">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#3db87a]"
                  aria-hidden="true"
                />
                Reply in 1 day
              </span>
            </div>

            <h3 className="font-serif text-[clamp(1.85rem,3vw,2.35rem)] leading-[1.1] font-medium tracking-[-0.02em] text-warm">
              Start a conversation
            </h3>
            <p className="mt-3 max-w-[22rem] font-ui text-[0.95rem] leading-relaxed text-muted">
              Brief, timeline, or half-formed idea — all welcome.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-warm bg-warm px-5 text-[0.72rem] font-semibold tracking-[0.12em] text-black uppercase transition hover:-translate-y-px hover:bg-transparent hover:text-warm"
              >
                Let&apos;s talk <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-white/15 bg-transparent px-5 text-[0.72rem] font-semibold tracking-[0.12em] text-warm uppercase transition hover:border-warm/50 hover:bg-white/[0.04]"
              >
                Book a call
              </Link>
            </div>

            <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/[0.07] pt-5">
              <a
                href="mailto:hello@tekvill.com"
                className="font-ui text-[0.88rem] text-muted transition hover:text-accent"
              >
                hello@tekvill.com
              </a>
              <span className="hidden font-ui text-[0.72rem] tracking-[0.06em] text-muted/70 uppercase sm:inline">
                Lahore · Remote
              </span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
