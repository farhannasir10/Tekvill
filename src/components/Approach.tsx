const steps = [
  {
    title: "Discover",
    body: "Goals, constraints, and success metrics — mapped first.",
  },
  {
    title: "Design",
    body: "Architecture and experience shaped to agree from day one.",
  },
  {
    title: "Build",
    body: "Tight loops, production standards, observable systems.",
  },
  {
    title: "Launch",
    body: "Hardened releases, rollbacks ready, metrics watching.",
  },
  {
    title: "Support",
    body: "Docs, training, and a partner who stays reachable.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden border-t border-line-dark bg-paper py-[clamp(5rem,11vh,8rem)]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 45% 40% at 15% 20%, rgba(110,179,255,0.08), transparent 55%)",
        }}
      />

      <div className="relative mx-auto w-[min(1120px,calc(100%-2.5rem))]">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-semibold tracking-[-0.03em] text-ink">
            How we work
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
            A clear path from ambiguity to production — without ceremony that
            slows shipping.
          </p>
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute top-[1.85rem] right-[5%] left-[5%] z-0 hidden lg:block"
            aria-hidden="true"
          >
            <div className="h-px w-full border-t border-dashed border-accent/25" />
          </div>

          <div className="relative z-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
            {steps.map((step, i) => (
              <article
                key={step.title}
                className="group relative flex min-h-[14rem] flex-col rounded-2xl border border-white/10 bg-[#1a1d24] p-5 shadow-[0_14px_36px_rgba(10,12,16,0.18)] transition-[transform,box-shadow] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-20 hover:-translate-y-2 hover:shadow-[0_24px_52px_rgba(10,12,16,0.28)] sm:p-6"
              >
                <p className="relative z-10 mb-auto font-display text-[0.95rem] font-semibold tracking-[-0.02em] text-accent">
                  0{i + 1}
                </p>

                <div className="relative mt-7">
                  <h3 className="mb-3 font-display text-[1.22rem] font-bold tracking-[-0.025em] text-warm">
                    {step.title}
                  </h3>
                  <p className="font-ui text-[0.875rem] leading-[1.7] font-medium text-[#c8cad2]">
                    {step.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
