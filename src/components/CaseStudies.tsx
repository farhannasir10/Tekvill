import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudies() {
  return (
    <section
      id="work"
      className="relative border-t border-line bg-surface py-[clamp(5rem,11vh,8rem)]"
    >
      <div className="mx-auto w-[min(1120px,calc(100%-2.5rem))]">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-semibold tracking-[-0.03em] text-warm">
            Stories of transformation
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-lede">
            Outcomes from teams who needed systems that hold under pressure —
            and still feel intentional.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d1017] shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-1.5 hover:border-white/15"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.cover}
                  alt={item.coverAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1017] via-[#0d1017]/55 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="font-serif text-[clamp(2rem,3vw,2.6rem)] font-medium tracking-[-0.03em] text-white">
                    {item.metric}
                  </p>
                  <p className="mt-0.5 text-[0.62rem] tracking-[0.14em] text-white/65 uppercase">
                    {item.metricLabel}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 pt-5">
                <p className="mb-2 text-[0.62rem] font-semibold tracking-[0.16em] text-accent uppercase">
                  {item.sector}
                </p>
                <h3 className="mb-3 font-display text-[1.35rem] font-semibold tracking-[-0.02em] text-warm">
                  {item.title}
                </h3>
                <p className="mb-5 flex-1 text-[0.9rem] leading-relaxed text-lede">
                  {item.summary}
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.04] px-3 py-1 text-[0.6rem] tracking-[0.1em] text-muted uppercase ring-1 ring-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[0.7rem] font-medium tracking-[0.12em] text-warm/80 uppercase transition group-hover:text-accent">
                  View case study →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/work"
            className="text-[0.7rem] font-medium tracking-[0.12em] text-warm uppercase underline underline-offset-[0.28em] transition hover:text-white"
          >
            View more →
          </Link>
        </div>
      </div>
    </section>
  );
}
