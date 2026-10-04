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
            {quotes.map((item, index) => {
              const featured = index === 1;

              return (
                <article
                  key={item.name}
                  className={`group flex min-h-[20rem] flex-col rounded-2xl p-6 transition duration-400 hover:-translate-y-1 sm:min-h-[21.5rem] sm:p-7 ${
                    featured
                      ? "border border-[#5aa8ff]/35 bg-[#1a3a6e] shadow-[0_22px_56px_rgba(47,127,232,0.32)] hover:shadow-[0_28px_64px_rgba(47,127,232,0.42)]"
                      : "border border-white/[0.07] bg-[#0d1017] shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:border-white/15 hover:shadow-[0_24px_56px_rgba(0,0,0,0.28)]"
                  }`}
                >
                  <span
                    className={`mb-4 font-serif text-[2.75rem] leading-none select-none ${
                      featured ? "text-[#9ecbff]" : "text-accent"
                    }`}
                    aria-hidden="true"
                  >
                    ”
                  </span>

                  <p
                    className={`mb-7 flex-1 font-ui text-[0.95rem] leading-[1.7] ${
                      featured ? "text-white/90" : "text-lede"
                    }`}
                  >
                    {item.text}
                  </p>

                  <div
                    className={`mt-auto border-t pt-5 ${
                      featured ? "border-white/15" : "border-white/[0.08]"
                    }`}
                  >
                    <div className="flex items-end justify-between gap-3">
                      <div className="min-w-0">
                        <p
                          className={`font-display text-[0.95rem] font-semibold tracking-[-0.02em] ${
                            featured ? "text-white" : "text-warm"
                          }`}
                        >
                          {item.name}
                        </p>
                        <p
                          className={`mt-0.5 font-ui text-[0.78rem] ${
                            featured ? "text-white/70" : "text-muted"
                          }`}
                        >
                          {item.role}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 font-display text-[0.72rem] font-bold tracking-[0.12em] uppercase ${
                          featured ? "text-white/65" : "text-muted"
                        }`}
                      >
                        {item.company}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
