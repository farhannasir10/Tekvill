import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getHomepageCaseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Tekvill is a production studio for AI, product, and infrastructure — built for teams that need what still works after launch.",
};

const stats = [
  { value: "10+", label: "Years of Industry Experience" },
  { value: "150+", label: "Successful Products Delivered" },
  { value: "25+", label: "Custom AI Models Deployed" },
  { value: "3", label: "Countries" },
];

const pillars = [
  {
    title: "Mission",
    body: "Plan, design, and ship production systems that still work after launch — for teams that cannot afford theatre.",
  },
  {
    title: "Vision",
    body: "Be the studio ambitious companies trust when AI, product, and infrastructure have to move as one.",
  },
  {
    title: "Philosophy",
    body: "Senior people close to the work. Clear milestones. Intentional interfaces. A full handover when we leave.",
  },
];

const standards = [
  {
    title: "Production first",
    body: "We design for load, handover, and what breaks at 2am — not demo-day polish alone.",
    icon: "bolt",
  },
  {
    title: "One studio",
    body: "Product, AI, design, and infra share ownership. Fewer handoffs, sharper decisions.",
    icon: "layers",
  },
  {
    title: "Integrity",
    body: "We say what we can ship, when we can ship it, and what it will take to keep it running.",
    icon: "shield",
  },
  {
    title: "Accountability",
    body: "Milestones you can see. Weekly demos. Outcomes we stand behind after go-live.",
    icon: "check",
  },
  {
    title: "Craft by design",
    body: "Interfaces and systems that feel intentional — because clarity compounds under pressure.",
    icon: "spark",
  },
];

const timeline = [
  {
    year: "2019",
    title: "Studio founded",
    body: "Tekvill started as a small product and engineering practice focused on shipping what lasts.",
  },
  {
    year: "2021",
    title: "AI enters the core",
    body: "We folded applied AI into the same delivery model as product — not as a side experiment.",
  },
  {
    year: "2023",
    title: "Full-stack studio",
    body: "Design, mobile, cloud, and data engineering became one engagement surface for clients.",
  },
  {
    year: "2026",
    title: "Production at scale",
    body: "Pods, projects, and staff augmentation for teams that need senior craft without the overhead.",
  },
];

const quotes = [
  {
    text: "Tekvill played a pivotal role in turning my startup idea into a reality. From concept to MVP to a complete product, their team showed outstanding professionalism and technical expertise.",
    name: "Leo",
    role: "CEO, REP",
  },
  {
    text: "Having collaborated with Tekvill on several app and web projects, I have unwavering confidence in their services. Consistent top-notch quality makes them my go-to choice.",
    name: "Michael",
    role: "CEO, Smart Meal Plan",
  },
  {
    text: "Heartfelt appreciation for the exemplary service and outstanding results Tekvill delivered across multiple projects with a diverse range of international customers.",
    name: "Emily J.",
    role: "Product Head, SeenReport",
  },
];

function StandardIcon({ name }: { name: string }) {
  const common = "h-5 w-5";
  switch (name) {
    case "bolt":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "layers":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="m12 3 9 5-9 5-9-5 9-5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="m3 12 9 5 9-5M3 17l9 5 9-5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3 4.5 6.5v5.2c0 4.4 3.2 7.6 7.5 9.3 4.3-1.7 7.5-4.9 7.5-9.3V6.5L12 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "check":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="m8.5 12.2 2.4 2.4 4.6-4.8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3.5v2.2M12 18.3v2.2M4.8 12H2.6m18.8 0h-2.2M6.4 6.4l-1.5-1.5m14.2 14.2-1.5-1.5m0-11.2 1.5-1.5M4.9 19.1l1.5-1.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
  }
}

export default function AboutPage() {
  const featured = getHomepageCaseStudies();

  return (
    <main className="bg-[#F6F6F6]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-black pt-14 pb-16 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 85% 20%, rgba(110,179,255,0.12), transparent 55%), radial-gradient(ellipse 50% 80% at 10% 0%, rgba(110,179,255,0.06), transparent 55%)",
          }}
        />
        <div className="relative mx-auto w-[min(1120px,calc(100%-2.5rem))]">
          <p className="mb-4 text-[0.68rem] font-semibold tracking-[0.2em] text-accent uppercase">
            About us
          </p>
          <h1 className="max-w-3xl font-display text-[clamp(2.5rem,5.5vw,4rem)] font-semibold tracking-[-0.035em] text-warm">
            Where vision meets
            <br />
            execution.
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-lede">
            Tekvill is a production studio for AI, product, and infrastructure —
            built for teams that need what still works after launch.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/[0.08] pt-10 sm:grid-cols-4 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-[clamp(1.75rem,3vw,2.35rem)] font-semibold tracking-[-0.04em] text-white">
                  {stat.value}
                </p>
                <p className="mt-1.5 font-ui text-[0.78rem] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Philosophy */}
      <section
        id="mission"
        className="scroll-mt-8 bg-[#F6F6F6] py-[clamp(3.5rem,8vh,5.5rem)]"
      >
        <div className="mx-auto w-[min(1120px,calc(100%-2.5rem))]">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 font-ui text-[0.68rem] font-semibold tracking-[0.18em] text-[#2f7fe8] uppercase">
              Foundation
            </p>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-ink">
              Mission, vision, and philosophy
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((item) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-2xl border border-ink/[0.06] bg-white p-7 shadow-[0_12px_36px_rgba(15,18,24,0.05)] md:p-8"
              >
                <span
                  className="absolute inset-x-0 top-0 h-[3px] bg-[#2f7fe8]"
                  aria-hidden="true"
                />
                <h3 className="font-display text-[1.25rem] font-semibold tracking-[-0.02em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 font-ui text-[0.95rem] leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Standards / values */}
      <section
        id="standards"
        className="scroll-mt-8 border-t border-ink/[0.06] bg-white py-[clamp(3.5rem,8vh,5.5rem)]"
      >
        <div className="mx-auto w-[min(1120px,calc(100%-2.5rem))]">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 font-ui text-[0.68rem] font-semibold tracking-[0.18em] text-[#2f7fe8] uppercase">
              How we work
            </p>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-ink">
              The standards behind every decision we make.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {standards.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-ink/[0.06] bg-[#F6F6F6] p-6"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#2f7fe8] ring-1 ring-[#2f7fe8]/15">
                  <StandardIcon name={item.icon} />
                </span>
                <h3 className="font-display text-[1.05rem] font-semibold tracking-[-0.02em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 font-ui text-[0.85rem] leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl bg-black px-8 py-8 md:flex-row md:items-center md:px-10">
            <div>
              <h3 className="font-display text-[clamp(1.25rem,2.5vw,1.65rem)] font-semibold text-white">
                See how those standards show up in delivery
              </h3>
              <p className="mt-2 max-w-lg font-ui text-[0.95rem] text-muted">
                Explore the services we run as one studio — from AI to
                infrastructure.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[#2f7fe8] px-6 text-[0.7rem] font-semibold tracking-[0.14em] text-white uppercase transition hover:bg-[#256fd4]"
            >
              View services →
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        id="journey"
        className="scroll-mt-8 bg-[#F6F6F6] py-[clamp(3.5rem,8vh,5.5rem)]"
      >
        <div className="mx-auto w-[min(1120px,calc(100%-2.5rem))]">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 font-ui text-[0.68rem] font-semibold tracking-[0.18em] text-[#2f7fe8] uppercase">
              Journey
            </p>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-ink">
              Years building, not just growing.
            </h2>
          </div>

          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <div
              className="pointer-events-none absolute top-[1.15rem] right-0 left-0 hidden h-px bg-ink/[0.1] lg:block"
              aria-hidden="true"
            />
            {timeline.map((item) => (
              <div key={item.year} className="relative">
                <span
                  className="mb-5 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-2 ring-[#2f7fe8]"
                  aria-hidden="true"
                >
                  <span className="h-2 w-2 rounded-full bg-[#2f7fe8]" />
                </span>
                <p className="font-display text-[1.35rem] font-semibold tracking-[-0.03em] text-[#2f7fe8]">
                  {item.year}
                </p>
                <h3 className="mt-2 font-display text-[1.1rem] font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 font-ui text-[0.9rem] leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="trust"
        className="scroll-mt-8 relative overflow-hidden bg-black py-[clamp(3.5rem,8vh,5.5rem)]"
      >
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 50% 70% at 90% 0%, rgba(110,179,255,0.08), transparent 55%)",
          }}
        />
        <div className="relative mx-auto w-[min(1120px,calc(100%-2.5rem))]">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 font-ui text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
              Client voices
            </p>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-warm">
              Trusted with the work that matters most.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {quotes.map((item) => (
              <article
                key={item.name}
                className="flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7"
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
                <div className="border-t border-white/[0.08] pt-5">
                  <p className="font-display text-[0.95rem] font-semibold text-warm">
                    {item.name}
                  </p>
                  <p className="mt-0.5 font-ui text-[0.78rem] text-muted">
                    {item.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work — instead of blog / team */}
      <section className="bg-white py-[clamp(3.5rem,8vh,5.5rem)]">
        <div className="mx-auto w-[min(1120px,calc(100%-2.5rem))]">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <p className="mb-3 font-ui text-[0.68rem] font-semibold tracking-[0.18em] text-[#2f7fe8] uppercase">
                Proof
              </p>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-ink">
                Work that shows how we build.
              </h2>
            </div>
            <Link
              href="/work"
              className="font-ui text-[0.8rem] font-semibold tracking-[0.08em] text-[#2f7fe8] uppercase transition hover:text-ink"
            >
              All case studies →
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className="group overflow-hidden rounded-2xl border border-ink/[0.06] bg-[#F6F6F6] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,18,24,0.08)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.cover}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <p className="absolute bottom-3 left-4 text-[0.62rem] tracking-[0.14em] text-white/90 uppercase">
                    {item.metric} {item.metricLabel}
                  </p>
                </div>
                <div className="p-5">
                  <p className="mb-1.5 text-[0.62rem] font-semibold tracking-[0.14em] text-[#2f7fe8] uppercase">
                    {item.sector}
                  </p>
                  <h3 className="font-display text-[1.1rem] font-semibold tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#F6F6F6] pb-[clamp(3.5rem,8vh,5.5rem)]">
        <div className="mx-auto w-[min(1120px,calc(100%-2.5rem))]">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-black px-8 py-10 md:flex-row md:items-center md:px-12 md:py-12">
            <div>
              <h2 className="font-display text-[clamp(1.6rem,3vw,2.25rem)] font-semibold tracking-[-0.03em] text-white">
                Have an idea? We&apos;re here to build it.
              </h2>
              <p className="mt-3 max-w-md font-ui text-[1rem] text-muted">
                Tell us what you&apos;re shipping — we&apos;ll map a clear next
                step within one business day.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 text-[0.72rem] font-semibold tracking-[0.14em] text-ink uppercase transition hover:bg-[#e8f2ff]"
            >
              Talk to Tekvill →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
