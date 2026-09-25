const facts = [
  { value: "50+", label: "Products shipped" },
  { value: "98%", label: "Client retention" },
  { value: "6", label: "Core disciplines" },
  { value: "24h", label: "Average response" },
];

export default function KeyFacts() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden border-t border-line-dark bg-white py-[clamp(2.75rem,6vh,4.25rem)]"
    >
      <div className="relative mx-auto w-[min(1120px,calc(100%-2.5rem))]">
        <div className="mx-auto mb-8 max-w-xl text-center md:mb-10">
          <p className="mb-2 font-ui text-[0.68rem] font-semibold tracking-[0.2em] text-ink/40 uppercase">
            Key facts & figures
          </p>
          <h2 className="font-display text-[clamp(1.65rem,3.2vw,2.25rem)] font-semibold tracking-[-0.035em] text-ink">
            Numbers that stay quiet — until they matter.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:gap-0">
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`flex flex-col items-center text-center ${
                i < facts.length - 1 ? "lg:border-r lg:border-ink/[0.08]" : ""
              }`}
            >
              <p className="font-display text-[clamp(2.15rem,4.5vw,3.25rem)] font-semibold leading-none tracking-[-0.05em] text-ink">
                {fact.value}
              </p>
              <p className="mt-2.5 font-ui text-[0.75rem] font-medium tracking-[0.06em] text-ink/45">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
