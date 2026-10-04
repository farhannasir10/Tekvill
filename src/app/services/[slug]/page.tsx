import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceIcon from "@/components/ServiceIcon";
import { getService, services } from "@/data/services";
import { getServiceMedia } from "@/data/service-media";
import { structureService } from "@/lib/structureService";

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
  if (!service) return { title: { absolute: "Service" } };
  return {
    title: { absolute: service.title },
    description: service.body,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const media = getServiceMedia(service.slug);
  const structured = structureService(service);
  const related = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

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
            href="/services"
            className="mb-8 inline-flex text-[0.7rem] font-medium tracking-[0.14em] text-muted uppercase transition hover:text-warm"
          >
            ← All services
          </Link>

          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] text-accent ring-1 ring-white/10">
              <ServiceIcon name={service.icon} className="h-5 w-5" />
            </span>
            <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-accent uppercase">
              Service {service.index}
            </p>
          </div>

          <h1 className="max-w-3xl font-display text-[clamp(2.4rem,5vw,3.8rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-warm">
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[1.1rem] leading-relaxed text-lede">
            {service.body}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/[0.04] px-3.5 py-1.5 text-[0.65rem] font-medium tracking-[0.06em] text-muted ring-1 ring-white/[0.08]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-[#F6F6F6] pt-[clamp(2rem,5vh,3.5rem)]">
        <div className="mx-auto w-[min(1120px,calc(100%-2.5rem))] overflow-hidden rounded-2xl shadow-[0_16px_44px_rgba(15,18,24,0.08)]">
          <div className="relative aspect-[16/9] min-h-[240px]">
            <Image
              src={media.hero}
              alt={service.coverAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#F6F6F6] py-[clamp(3rem,7vh,4.5rem)]">
        <div className="mx-auto w-[min(720px,calc(100%-2.5rem))] text-center">
          {structured.introTitle ? (
            <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold tracking-[-0.02em] text-ink">
              {structured.introTitle}
            </h2>
          ) : null}
          <p
            className={`text-[1.08rem] leading-[1.75] text-ink-soft ${structured.introTitle ? "mt-5" : ""}`}
          >
            {structured.intro || service.overview}
          </p>
        </div>
      </section>

      {/* Process with alternating images */}
      <section className="bg-white py-[clamp(3.5rem,8vh,5.5rem)]">
        <div className="mx-auto mb-12 w-[min(720px,calc(100%-2.5rem))] text-center">
          <p className="mb-3 font-ui text-[0.68rem] font-semibold tracking-[0.18em] text-[#2f7fe8] uppercase">
            Process
          </p>
          <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold tracking-[-0.02em] text-ink">
            {structured.processTitle}
          </h2>
          {structured.processIntro ? (
            <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft">
              {structured.processIntro}
            </p>
          ) : null}
        </div>

        <div className="mx-auto flex w-[min(1120px,calc(100%-2.5rem))] flex-col gap-14 md:gap-20">
          {structured.process.map((step, i) => {
            const image =
              media.process[i % media.process.length] || media.hero;
            const reverse = i % 2 === 1;
            return (
              <div
                key={`${step.title}-${i}`}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative aspect-[16/11] overflow-hidden rounded-2xl shadow-[0_16px_40px_rgba(15,18,24,0.08)]">
                  <Image
                    src={image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="mb-3 font-display text-[1.15rem] font-semibold tracking-[-0.02em] text-[#2f7fe8]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-[clamp(1.25rem,2.5vw,1.55rem)] font-semibold tracking-[-0.02em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
                    {step.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mid image band */}
      <section className="bg-[#F6F6F6] py-4 md:py-6">
        <div className="relative mx-auto aspect-[21/9] min-h-[200px] w-[min(1120px,calc(100%-2.5rem))] overflow-hidden rounded-2xl">
          <Image
            src={media.mid}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Benefits grid */}
      {structured.benefits.length > 0 ? (
        <section className="bg-[#F6F6F6] py-[clamp(3.5rem,8vh,5.5rem)]">
          <div className="mx-auto mb-10 w-[min(720px,calc(100%-2.5rem))] text-center">
            <p className="mb-3 font-ui text-[0.68rem] font-semibold tracking-[0.18em] text-[#2f7fe8] uppercase">
              Benefits
            </p>
            <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold tracking-[-0.02em] text-ink">
              {structured.benefitsTitle}
            </h2>
            {structured.benefitsIntro ? (
              <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft">
                {structured.benefitsIntro}
              </p>
            ) : null}
          </div>

          <div className="mx-auto grid w-[min(1120px,calc(100%-2.5rem))] gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {structured.benefits.map((item, i) => (
              <div key={`${item.title}-${i}`} className="bg-white p-6 md:p-7">
                <div className="relative mb-5 h-14 w-14">
                  <Image
                    src={media.icons[i % media.icons.length]}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-contain"
                  />
                </div>
                <h3 className="font-display text-[1.08rem] font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* Why / split */}
      {structured.why.length > 0 ? (
        <section className="bg-white py-[clamp(3.5rem,8vh,5.5rem)]">
          <div className="mx-auto grid w-[min(1120px,calc(100%-2.5rem))] items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_16px_40px_rgba(15,18,24,0.08)] sm:aspect-[5/6]">
              <Image
                src={media.split}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="mb-3 font-ui text-[0.68rem] font-semibold tracking-[0.18em] text-[#2f7fe8] uppercase">
                Why Tekvill
              </p>
              <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.1rem)] font-semibold tracking-[-0.02em] text-ink">
                {structured.whyTitle}
              </h2>
              {structured.whyIntro ? (
                <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft">
                  {structured.whyIntro}
                </p>
              ) : null}
              <div className="mt-8 space-y-6">
                {structured.why.map((item, i) => (
                  <div key={`${item.title}-${i}`}>
                    <h3 className="font-display text-[1.05rem] font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-10 inline-flex min-h-11 items-center justify-center rounded-full bg-black px-7 text-[0.72rem] font-semibold tracking-[0.12em] text-warm uppercase transition hover:bg-[#2f7fe8]"
              >
                Start a project
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-black py-[clamp(3.5rem,8vh,5rem)]">
          <div className="mx-auto flex w-[min(1120px,calc(100%-2.5rem))] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold text-warm">
                Ready to ship this?
              </p>
              <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-lede">
                Tell us the outcome you need — we&apos;ll map the engagement.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-warm px-7 text-[0.72rem] font-semibold tracking-[0.12em] text-black uppercase transition hover:bg-white"
            >
              Start a project
            </Link>
          </div>
        </section>
      )}

      <section className="border-t border-ink/[0.05] bg-[#F6F6F6] py-[clamp(4rem,9vh,6rem)]">
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
                className="group overflow-hidden rounded-2xl bg-white transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,18,24,0.08)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={getServiceMedia(item.slug).hero}
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
