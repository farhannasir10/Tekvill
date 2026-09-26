import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceIcon from "@/components/ServiceIcon";
import { getService, services } from "@/data/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service — Tekvill" };
  return {
    title: `${service.title} — Tekvill`,
    description: service.body,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <main className="bg-[#F6F6F6]">
      <Header />

      <section className="relative isolate min-h-[68vh] overflow-hidden">
        <Image
          src={service.cover}
          alt={service.coverAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, rgba(12,30,70,0.88) 0%, rgba(45,110,200,0.72) 48%, rgba(74,159,255,0.55) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,8,10,0.25) 0%, transparent 35%, rgba(7,8,10,0.45) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-[1] mx-auto flex min-h-[calc(68vh-1rem)] w-[min(1120px,calc(100%-2.5rem))] flex-col justify-end pb-14 pt-10">
          <Link
            href="/services"
            className="mb-auto inline-flex w-fit text-[0.7rem] font-medium tracking-[0.14em] text-white/70 uppercase transition hover:text-white"
          >
            ← All services
          </Link>

          <div className="mt-16 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-md">
                <ServiceIcon name={service.icon} className="h-5 w-5" />
              </span>
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-white/75 uppercase">
                Service {service.index}
              </p>
            </div>

            <h1 className="font-display text-[clamp(2.6rem,5.5vw,4.2rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-white">
              {service.title}
            </h1>
            <p className="mt-5 max-w-xl text-[1.12rem] leading-relaxed text-white/85">
              {service.body}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[0.65rem] font-medium tracking-[0.06em] text-white backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F6F6] py-[clamp(3.5rem,8vh,5.5rem)]">
        <div className="mx-auto grid w-[min(1120px,calc(100%-2.5rem))] gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8">
          <div className="rounded-2xl bg-white p-8 shadow-[0_16px_44px_rgba(15,18,24,0.06)] md:p-10">
            <p className="mb-3 font-ui text-[0.68rem] font-semibold tracking-[0.18em] text-[#2f7fe8] uppercase">
              Overview
            </p>
            <p className="text-[1.08rem] leading-[1.7] text-ink-soft">
              {service.overview}
            </p>

            <div className="mt-12 border-t border-ink/[0.06] pt-10">
              <p className="mb-5 font-ui text-[0.68rem] font-semibold tracking-[0.18em] text-[#2f7fe8] uppercase">
                How we work
              </p>
              <ol className="space-y-5">
                {service.process.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-display text-[1.05rem] font-semibold tracking-[-0.02em] text-[#2f7fe8]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[1rem] leading-relaxed text-ink">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="flex h-fit flex-col gap-5">
            <div className="rounded-2xl bg-white p-7 shadow-[0_16px_44px_rgba(15,18,24,0.06)] md:p-8">
              <p className="mb-4 font-ui text-[0.68rem] font-semibold tracking-[0.18em] text-[#2f7fe8] uppercase">
                What you get
              </p>
              <ul className="space-y-3.5">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[0.92rem] leading-relaxed text-ink-soft"
                  >
                    <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2f7fe8]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-7 shadow-[0_16px_44px_rgba(47,127,232,0.2)] md:p-8"
              style={{
                background:
                  "linear-gradient(145deg, #3d8fff 0%, #4d9fff 100%)",
              }}
            >
              <p className="font-display text-[1.25rem] font-semibold tracking-[-0.02em] text-white">
                Ready to ship this?
              </p>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-white/80">
                Tell us the outcome you need — we&apos;ll map the engagement.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-white px-6 text-[0.72rem] font-semibold tracking-[0.12em] text-[#1a4a8c] uppercase transition hover:bg-white/95"
              >
                Start a project
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-ink/[0.05] bg-white py-[clamp(4rem,9vh,6rem)]">
        <div className="mx-auto w-[min(1120px,calc(100%-2.5rem))]">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold text-ink">
              More services
            </h2>
            <Link
              href="/services"
              className="hidden text-[0.72rem] font-semibold tracking-[0.12em] text-[#2f7fe8] uppercase transition hover:text-ink sm:inline"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group overflow-hidden rounded-2xl bg-[#F6F6F6] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,18,24,0.08)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.cover}
                    alt={item.coverAlt}
                    fill
                    sizes="33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <p className="font-display text-[1.05rem] font-semibold text-ink">
                    {item.title}
                  </p>
                  <p className="mt-1.5 line-clamp-2 text-[0.84rem] leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
