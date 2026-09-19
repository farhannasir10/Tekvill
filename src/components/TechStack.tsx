import StackIcon, { type StackName } from "./StackIcon";

const stack: StackName[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Go",
  "Flutter",
  "React Native",
  "PostgreSQL",
  "Redis",
  "AWS",
  "GCP",
  "Kubernetes",
  "Terraform",
  "OpenAI",
  "LangGraph",
  "Stripe",
  "Grafana",
];

export default function TechStack() {
  return (
    <section
      id="insights"
      className="relative overflow-hidden border-t border-line bg-black py-[clamp(5rem,11vh,8rem)]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 80% 25%, rgba(110,179,255,0.08), transparent 58%)",
        }}
      />

      <div className="relative mx-auto w-[min(960px,calc(100%-2.5rem))] text-center">
        <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-semibold tracking-[-0.03em] text-warm">
          What&apos;s in our stack?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[1.05rem] leading-relaxed text-lede">
          Tools chosen for leverage — not fashion. We meet you where you are,
          then raise the ceiling.
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-3">
          {stack.map((item) => (
            <li
              key={item}
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#0d1017] py-2.5 pr-5 pl-3.5 font-ui text-[0.8rem] font-medium tracking-[0.02em] text-warm/90 shadow-[0_8px_24px_rgba(0,0,0,0.25)] ring-1 ring-white/[0.08] transition duration-300 hover:-translate-y-0.5 hover:text-white hover:ring-accent/40"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.04] text-lede/80 ring-1 ring-white/[0.06] transition duration-300 group-hover:bg-accent/10 group-hover:text-accent group-hover:ring-accent/25">
                <StackIcon name={item} className="h-3.5 w-3.5" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
