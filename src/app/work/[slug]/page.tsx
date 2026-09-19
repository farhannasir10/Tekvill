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

  const related = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 2);

  return (
    <main>
      <Header />

      <section className="relative overflow-hidden bg-black pt-28">
        <div className="relative mx-auto w-[min(1120px,calc(100%-2.5rem))] pb-10">
          <Link
            href="/work"
            className="mb-8 inline-flex text-[0.7rem] font-medium tracking-[0.14em] text-muted uppercase transition hover:text-warm"
          >
            ← All case studies
          </Link>

          <p className="mb-4 text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
            {study.sector} · {study.client}
          </p>
          <h1 className="max-w-3xl font-serif text-[clamp(2.6rem,6vw,4.6rem)] font-medium leading-[1.05] tracking-[-0.03em] text-warm">
            {study.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[1.1rem] leading-relaxed text-lede">
            {study.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/[0.04] px-3 py-1.5 text-[0.62rem] tracking-[0.1em] text-muted uppercase ring-1 ring-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-[min(1200px,calc(100%-1.5rem))] overflow-hidden rounded-2xl border border-white/[0.08]">
          <div className="relative aspect-[21/9] min-h-[240px]">
            <Image
              src={study.cover}
              alt={study.coverAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid w-[min(1120px,calc(100%-2.5rem))] grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {study.results.map((item) => (
            <div key={item.label} className="px-2 py-8 text-center sm:px-6">
              <p className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-medium tracking-[-0.03em] text-accent">
                {item.value}
              </p>
              <p className="mt-2 text-[0.65rem] tracking-[0.14em] text-muted uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black py-[clamp(4rem,9vh,6.5rem)]">
        <div className="mx-auto grid w-[min(1120px,calc(100%-2.5rem))] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.1rem)] font-semibold tracking-[-0.02em] text-warm">
              The challenge
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-lede">
              {study.challenge}
            </p>
          </div>
          <div>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.1rem)] font-semibold tracking-[-0.02em] text-warm">
              How we approached it
            </h2>
            <ol className="mt-5 space-y-4">
              {study.approach.map((step, i) => (
                <li key={step} className="flex gap-4 text-[1.02rem] leading-relaxed text-lede">
                  <span className="font-serif text-accent">0{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-[clamp(4rem,9vh,6.5rem)]">
        <div className="mx-auto w-[min(1120px,calc(100%-2.5rem))]">
          <div className="grid gap-5 md:grid-cols-2">
            {study.gallery.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.07]"
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
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.1rem)] font-semibold tracking-[-0.02em] text-warm">
              The outcome
            </h2>
            <p className="mt-4 text-[1.15rem] leading-relaxed text-lede">
              {study.outcome}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-black py-16">
        <div className="mx-auto flex w-[min(1120px,calc(100%-2.5rem))] flex-col items-start justify-between gap-6 rounded-2xl border border-white/[0.07] bg-[#0d1017] p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold text-warm">
              Want results like these?
            </h2>
            <p className="mt-2 max-w-md text-lede">
              Tell us what you&apos;re building — we&apos;ll map the right engagement.
            </p>
          </div>
          <Link
            href="/#contact"
            className="text-[0.7rem] font-medium tracking-[0.12em] text-warm uppercase underline underline-offset-[0.28em] transition hover:text-white"
          >
            Start a project →
          </Link>
        </div>

        {related.length > 0 ? (
          <div className="mx-auto mt-16 w-[min(1120px,calc(100%-2.5rem))]">
            <h3 className="mb-6 font-display text-xl font-semibold text-warm">
              More work
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/work/${item.slug}`}
                  className="group overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d1017] transition hover:border-white/15"
                >
                  <div className="relative aspect-[16/8]">
                    <Image
                      src={item.cover}
                      alt={item.coverAlt}
                      fill
                      sizes="50vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute right-5 bottom-5 left-5">
                      <p className="text-[0.62rem] tracking-[0.14em] text-accent uppercase">
                        {item.sector}
                      </p>
                      <p className="mt-1 font-display text-lg font-semibold text-warm">
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
