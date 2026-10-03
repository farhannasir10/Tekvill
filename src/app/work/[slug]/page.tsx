import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudies, getCaseStudy, workCategories } from "@/data/case-studies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case study — Tekvill" };
  return {
    title: `${study.title} — Tekvill`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const related = caseStudies
    .filter((item) => item.slug !== study.slug)
    .filter((item) =>
      item.categories.some((cat) => study.categories.includes(cat))
    )
    .slice(0, 2);

  const relatedFallback =
    related.length > 0
      ? related
      : caseStudies.filter((item) => item.slug !== study.slug).slice(0, 2);

  const categoryLabels = study.categories
    .map((id) => workCategories.find((c) => c.id === id)?.label)
    .filter(Boolean);

  return (
    <main className="bg-[#F6F6F6]">
      <Header />

      <section className="relative overflow-hidden bg-black pt-12 pb-14 md:pt-16 md:pb-16">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 50% 80% at 10% 0%, rgba(110,179,255,0.06), transparent 55%)",
          }}
        />
        <div className="relative mx-auto w-[min(1120px,calc(100%-2.5rem))]">
          <Link
            href="/work"
            className="mb-10 inline-flex text-[0.7rem] font-medium tracking-[0.14em] text-muted uppercase transition hover:text-warm"
          >
            ← All case studies
          </Link>

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
              {study.sector}
            </p>
            <h1 className="font-display text-[clamp(1.65rem,3.2vw,2.55rem)] font-semibold leading-[1.2] tracking-[-0.03em] text-balance text-warm">
              {study.heroTitle}
            </h1>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {categoryLabels.map((label) => (
                <span
                  key={label}
                  className="rounded-full bg-white/[0.04] px-3 py-1.5 text-[0.62rem] font-medium tracking-[0.06em] text-muted ring-1 ring-white/[0.08]"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F6F6] pt-8 pb-2">
        <div className="mx-auto w-[min(920px,calc(100%-2.5rem))]">
          <div className="overflow-hidden rounded-2xl border border-ink/[0.06] bg-white p-3 shadow-[0_16px_40px_rgba(15,18,24,0.08)] sm:p-5">
            <Image
              src={study.cover}
              alt={study.coverAlt}
              width={1210}
              height={786}
              priority
              sizes="(max-width: 920px) 100vw, 920px"
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F6F6F6] py-[clamp(3.5rem,8vh,5.5rem)]">
        <div className="mx-auto w-[min(800px,calc(100%-2.5rem))] space-y-10">
          {study.overview ? (
            <div>
              <h2 className="font-display text-[clamp(1.4rem,2.5vw,1.85rem)] font-semibold tracking-[-0.02em] text-ink">
                Overview
              </h2>
              <p className="mt-4 text-[1.08rem] leading-relaxed text-ink-soft">
                {study.overview}
              </p>
            </div>
          ) : null}

          <div className="grid gap-3 sm:grid-cols-3">
            {study.highlights.map((stat) => (
              <div
                key={stat}
                className="flex min-h-[5.5rem] items-center justify-center rounded-xl border border-[#9ec5f5] bg-white px-4 py-5 text-center shadow-[0_4px_16px_rgba(15,18,24,0.03)]"
              >
                <p className="font-display text-[0.95rem] font-semibold leading-snug tracking-[-0.01em] text-ink sm:text-[1rem]">
                  {stat}
                </p>
              </div>
            ))}
          </div>

          {study.sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-ink/[0.06] bg-white p-8 shadow-[0_12px_36px_rgba(15,18,24,0.05)] md:p-10"
            >
              <h2 className="font-display text-[clamp(1.4rem,2.5vw,1.85rem)] font-semibold tracking-[-0.02em] text-ink">
                {section.title}
              </h2>
              <div className="mt-6 space-y-5">
                {section.items.map((item, i) => (
                  <div key={`${section.title}-${i}`}>
                    {item.heading ? (
                      <h3 className="font-display text-[1.05rem] font-semibold text-ink">
                        {item.heading}
                      </h3>
                    ) : null}
                    <p
                      className={`text-[1.02rem] leading-relaxed text-ink-soft ${item.heading ? "mt-2" : ""}`}
                    >
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {study.closing ? (
            <p className="text-[1.05rem] leading-relaxed text-ink-soft">
              {study.closing}
            </p>
          ) : null}

          {study.techStack.length > 0 ? (
            <div className="rounded-2xl border border-ink/[0.06] bg-white p-8 shadow-[0_12px_36px_rgba(15,18,24,0.05)] md:p-10">
              <h2 className="font-display text-[clamp(1.4rem,2.5vw,1.85rem)] font-semibold tracking-[-0.02em] text-ink">
                Tech Stack
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {study.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-[#e8f2ff] px-3 py-1.5 text-[0.75rem] font-medium tracking-[0.04em] text-[#2f7fe8]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-t border-ink/[0.06] bg-[#F6F6F6] py-16">
        <div className="mx-auto flex w-[min(1120px,calc(100%-2.5rem))] flex-col items-start justify-between gap-6 rounded-2xl border border-ink/[0.08] bg-white p-8 shadow-[0_12px_36px_rgba(15,18,24,0.05)] md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold text-ink">
              Want results like these?
            </h2>
            <p className="mt-2 max-w-md text-ink-soft">
              Tell us what you&apos;re building — we&apos;ll map the right
              engagement.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#2f7fe8] px-7 text-[0.72rem] font-semibold tracking-[0.12em] text-white uppercase shadow-[0_10px_28px_rgba(47,127,232,0.28)] transition hover:bg-[#256fd4]"
          >
            Start a project →
          </Link>
        </div>

        {relatedFallback.length > 0 ? (
          <div className="mx-auto mt-16 w-[min(1120px,calc(100%-2.5rem))]">
            <h3 className="mb-6 font-display text-xl font-semibold text-ink">
              More work
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedFallback.map((item) => (
                <Link
                  key={item.slug}
                  href={`/work/${item.slug}`}
                  className="group overflow-hidden rounded-2xl border border-ink/[0.06] bg-white shadow-[0_10px_28px_rgba(15,18,24,0.05)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,18,24,0.08)]"
                >
                  <div className="relative aspect-[16/8]">
                    <Image
                      src={item.cover}
                      alt={item.coverAlt}
                      fill
                      sizes="50vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                    <div className="absolute right-5 bottom-5 left-5">
                      <p className="text-[0.62rem] tracking-[0.14em] text-[#6eb3ff] uppercase">
                        {item.sector}
                      </p>
                      <p className="mt-1 font-display text-lg font-semibold text-white">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <Footer />
    </main>
  );
}
