const quotes = [
  {
    text: "Tekvill didn’t just deliver software — they left us a system we could own. Quiet, exact, still fast six months later.",
    name: "Sara N.",
    role: "VP Product, Helion",
  },
  {
    text: "The AI layer actually shipped. No theatre. Our ops team felt the difference in the first week.",
    name: "Marcus L.",
    role: "CTO, Northline",
  },
  {
    text: "Rare mix of taste and infrastructure discipline. Interface and platform finally speak the same language.",
    name: "Amira K.",
    role: "Head of Design, Vesper",
  },
];

const washes = [
  "rgba(110,179,255,0.14)",
  "rgba(160,140,255,0.12)",
  "rgba(110,200,180,0.12)",
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-line-dark bg-paper py-[clamp(5rem,11vh,8rem)]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 45% 40% at 20% 10%, rgba(110,179,255,0.08), transparent 55%)",
        }}
      />

      <div className="relative mx-auto w-[min(1120px,calc(100%-2.5rem))]">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-semibold tracking-[-0.03em] text-ink">
            What our clients say
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
            Social proof from operators who measure partners by what still works
            after launch day.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {quotes.map((item, i) => (
            <blockquote
              key={item.name}
              className="group relative flex min-h-[19rem] flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d1017] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition duration-500 hover:-translate-y-1 hover:border-white/14"
            >
              <div
                className="pointer-events-none absolute -top-14 -right-10 h-40 w-40 rounded-full opacity-70 blur-3xl transition duration-500 group-hover:opacity-100"
                style={{ background: washes[i % washes.length] }}
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(165deg, rgba(255,255,255,0.04) 0%, transparent 40%)",
                }}
                aria-hidden="true"
              />

              <p
                className="relative mb-5 font-serif text-[2.75rem] leading-none text-accent/80"
                aria-hidden="true"
              >
                “
              </p>

              <p className="relative flex-1 font-serif text-[clamp(1.15rem,1.6vw,1.3rem)] leading-[1.45] font-medium tracking-[-0.015em] text-warm">
                {item.text}
              </p>

              <footer className="relative mt-8 flex items-center gap-3.5 border-t border-white/[0.07] pt-5">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 font-ui text-[0.72rem] font-semibold tracking-wider text-accent ring-1 ring-accent/25"
                  aria-hidden="true"
                >
                  {item.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
                <cite className="not-italic">
                  <span className="block font-display text-[0.95rem] font-semibold text-warm">
                    {item.name}
                  </span>
                  <span className="mt-0.5 block font-ui text-[0.75rem] text-muted">
                    {item.role}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
