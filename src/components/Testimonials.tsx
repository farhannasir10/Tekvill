const quotes = [
  {
    text: "Tekvill played a pivotal role in turning my startup idea into a reality. From concept to MVP to a complete product, their team showed outstanding professionalism and technical expertise.",
    name: "Leo",
    role: "CEO, REP",
    company: "REP",
  },
  {
    text: "Having collaborated with Tekvill on several app and web projects, I have unwavering confidence in their services. Consistent top-notch quality makes them my go-to choice.",
    name: "Michael",
    role: "CEO, Smart Meal Plan",
    company: "SMP",
  },
  {
    text: "Heartfelt appreciation for the exemplary service and outstanding results Tekvill delivered across multiple projects with a diverse range of international customers.",
    name: "Emily J.",
    role: "Product Head, SeenReport",
    company: "SeenReport",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-[clamp(1.5rem,4vh,2.75rem)]"
    >
      <div className="relative mx-auto w-[min(1480px,calc(100%-1.5rem))] sm:w-[min(1480px,calc(100%-2rem))]">
        <div className="rounded-[1.5rem] bg-[#F6F6F6] px-5 py-8 sm:px-7 sm:py-9 md:rounded-[1.75rem] md:px-8 md:py-10">
          <div className="mb-8 md:mb-9">
            <p className="mb-3 font-ui text-[0.68rem] font-semibold tracking-[0.2em] text-[#6B7280] uppercase">
              Client voices
            </p>
            <h2 className="whitespace-nowrap font-display text-[clamp(1.35rem,3.6vw,3.2rem)] font-semibold tracking-[-0.035em] text-[#1F2937]">
              Trusted with the work that matters most.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {quotes.map((item) => (
              <article
                key={item.name}
                className="group flex min-h-[20rem] flex-col rounded-2xl border border-white/[0.07] bg-[#0d1017] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition duration-400 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_24px_56px_rgba(0,0,0,0.28)] sm:min-h-[21.5rem] sm:p-7"
              >
                <span
                  className="mb-4 font-serif text-[2.75rem] leading-none text-accent select-none"
                  aria-hidden="true"
                >
                  ”
                </span>

                <p className="mb-7 flex-1 font-ui text-[0.95rem] leading-[1.7] text-lede">
                  {item.text}
                </p>

                <div className="mt-auto border-t border-white/[0.08] pt-5">
                  <div className="flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-display text-[0.95rem] font-semibold tracking-[-0.02em] text-warm">
                        {item.name}
                      </p>
                      <p className="mt-0.5 font-ui text-[0.78rem] text-muted">
                        {item.role}
                      </p>
                    </div>
                    <span className="shrink-0 font-display text-[0.72rem] font-bold tracking-[0.12em] text-muted uppercase">
                      {item.company}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
