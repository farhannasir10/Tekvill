import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseStudies, getCaseStudy } from "@/data/case-studies";

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
    .slice(0, 2);

  return (
    <main className="bg-[#F6F6F6]">
      <Header />

      <section className="relative overflow-hidden bg-black pt-14 pb-16">
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
            className="mb-8 inline-flex text-[0.7rem] font-medium tracking-[0.14em] text-muted uppercase transition hover:text-warm"
          >
            ← All case studies
          </Link>

          <p className="mb-4 text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
            {study.sector} · {study.client}
          </p>
          <h1 className="max-w-3xl font-display text-[clamp(2.4rem,5vw,3.8rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-warm">
            {study.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[1.1rem] leading-relaxed text-lede">
            {study.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/[0.04] px-3 py-1.5 text-[0.62rem] font-medium tracking-[0.06em] text-muted ring-1 ring-white/[0.08]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F6F6F6] pt-8 pb-4">
        <div className="relative mx-auto w-[min(1200px,calc(100%-1.5rem))] overflow-hidden rounded-2xl border border-ink/[0.06] shadow-[0_20px_50px_rgba(15,18,24,0.08)]">
          <div className="relative aspect-[21/9] min-h-[240px]">
            <Image
              src={study.cover}
              alt={study.coverAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/[0.06] bg-white">
        <div className="mx-auto grid w-[min(1120px,calc(100%-2.5rem))] grid-cols-1 divide-y divide-ink/[0.06] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {study.results.map((item) => (
            <div key={item.label} className="px-2 py-8 text-center sm:px-6">
              <p className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold tracking-[-0.03em] text-[#2f7fe8]">
                {item.value}
              </p>
              <p className="mt-2 text-[0.65rem] tracking-[0.14em] text-ink/45 uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F6F6F6] py-[clamp(4rem,9vh,6.5rem)]">
        <div className="mx-auto grid w-[min(1120px,calc(100%-2.5rem))] gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-2xl border border-ink/[0.06] bg-white p-8 shadow-[0_12px_36px_rgba(15,18,24,0.05)] md:p-10">
            <h2 className="font-display text-[clamp(1.5rem,3vw,1.9rem)] font-semibold tracking-[-0.02em] text-ink">
              The challenge
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
              {study.challenge}
            </p>
          </div>
          <div className="rounded-2xl border border-ink/[0.06] bg-white p-8 shadow-[0_12px_36px_rgba(15,18,24,0.05)] md:p-10">
            <h2 className="font-display text-[clamp(1.5rem,3vw,1.9rem)] font-semibold tracking-[-0.02em] text-ink">
              How we approached it
            </h2>
            <ol className="mt-5 space-y-4">
              {study.approach.map((step, i) => (
                <li
                  key={step}
                  className="flex gap-4 text-[1.02rem] leading-relaxed text-ink-soft"
                >
                  <span className="font-display font-semibold text-[#2f7fe8]">
                    0{i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] bg-white py-[clamp(4rem,9vh,6.5rem)]">
        <div className="mx-auto w-[min(1120px,calc(100%-2.5rem))]">
          <div className="grid gap-5 md:grid-cols-2">
            {study.gallery.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/[0.06] shadow-[0_12px_36px_rgba(15,18,24,0.05)]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-14 max-w-3xl">
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.1rem)] font-semibold tracking-[-0.02em] text-ink">
              The outcome
            </h2>
            <p className="mt-4 text-[1.15rem] leading-relaxed text-ink-soft">
              {study.outcome}
            </p>
          </div>
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

        {related.length > 0 ? (
          <div className="mx-auto mt-16 w-[min(1120px,calc(100%-2.5rem))]">
            <h3 className="mb-6 font-display text-xl font-semibold text-ink">
              More work
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {related.map((item) => (
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
