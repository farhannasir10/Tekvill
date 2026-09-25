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
      className="relative overflow-hidden bg-white py-[clamp(3.5rem,8vh,6rem)]"
    >
      <div className="relative mx-auto w-[min(1120px,calc(100%-2.5rem))]">
        <div className="mb-10 max-w-2xl md:mb-12">
          <p className="mb-3 font-ui text-[0.68rem] font-semibold tracking-[0.2em] text-[#6B7280] uppercase">
            Client voices
          </p>
          <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)] font-semibold tracking-[-0.035em] text-[#1F2937]">
            Trusted with the work that matters most.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {quotes.map((item) => (
            <article
              key={item.name}
              className="group flex flex-col rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition duration-400 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_48px_rgba(15,23,42,0.08)] sm:p-7"
            >
              <span
                className="mb-4 font-serif text-[2.75rem] leading-none text-accent select-none"
                aria-hidden="true"
              >
                ”
              </span>

              <p className="mb-7 flex-1 font-ui text-[0.95rem] leading-[1.7] text-[#374151]">
                {item.text}
              </p>

              <div className="mt-auto border-t border-[#E5E7EB] pt-5">
                <div className="flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-display text-[0.95rem] font-semibold tracking-[-0.02em] text-[#1F2937]">
                      {item.name}
                    </p>
                    <p className="mt-0.5 font-ui text-[0.78rem] text-[#6B7280]">
                      {item.role}
                    </p>
                  </div>
                  <span className="shrink-0 font-display text-[0.72rem] font-bold tracking-[0.12em] text-[#9CA3AF] uppercase">
                    {item.company}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
