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

        <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
          {steps.map((step, i) => (
            <article
              key={step.title}
              className="group relative flex flex-col rounded-2xl border border-white/[0.07] bg-[#0d1017]/90 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-white/15"
            >
              <div
                className="pointer-events-none absolute -top-10 -right-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
                style={{ background: "rgba(110,179,255,0.18)" }}
                aria-hidden="true"
              />

              <p className="relative mb-4 font-display text-[1.65rem] font-semibold tracking-[-0.03em] text-accent">
                0{i + 1}
              </p>

              <h3 className="relative mb-2 font-display text-[1.15rem] font-semibold tracking-[-0.02em] text-warm">
                {step.title}
              </h3>
              <p className="relative font-ui text-[0.84rem] leading-relaxed text-lede">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
