import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Tekvill",
  description:
    "Start a conversation with Tekvill. We reply within one business day.",
};

const points = [
  "Senior pod from day one",
  "Weekly demos, clear milestones",
  "Production standards, full handover",
];

const details = [
  { label: "Email", value: "hello@tekvill.com", href: "mailto:hello@tekvill.com" },
  { label: "Location", value: "Lahore · Remote" },
  { label: "Response", value: "Within 1 business day" },
];

export default function ContactPage() {
  return (
    <main className="bg-[#F6F6F6]">
      <Header />

      <section
        className="relative overflow-hidden pt-14 pb-16"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 85% 10%, rgba(255,255,255,0.2), transparent 55%), linear-gradient(155deg, #0f766e 0%, #14b8a6 48%, #2dd4bf 100%)",
        }}
      >
        <div className="relative mx-auto w-[min(1120px,calc(100%-2.5rem))]">
          <p className="mb-4 text-[0.68rem] font-semibold tracking-[0.2em] text-white/75 uppercase">
            Contact
          </p>
          <h1 className="max-w-2xl font-display text-[clamp(2.4rem,5vw,3.6rem)] font-semibold tracking-[-0.035em] text-white">
            Ready to start
            <br />
            your project?
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-white/85">
            Tell us what you&apos;re building. We reply within one business day
            — with a clear next step, not a pitch deck.
          </p>
        </div>
      </section>

      <section className="bg-[#F6F6F6] py-[clamp(3.5rem,8vh,5.5rem)]">
        <div className="mx-auto grid w-[min(1120px,calc(100%-2.5rem))] gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          <aside className="flex flex-col gap-5">
            <div className="rounded-2xl border border-ink/[0.06] bg-white p-7 shadow-[0_12px_36px_rgba(15,18,24,0.05)] md:p-8">
              <p className="mb-5 font-ui text-[0.68rem] font-semibold tracking-[0.18em] text-[#0f766e] uppercase">
                What to expect
              </p>
              <ul className="space-y-3.5">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 font-ui text-[0.95rem] text-ink-soft"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#14b8a6]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-ink/[0.06] bg-white p-7 shadow-[0_12px_36px_rgba(15,18,24,0.05)] md:p-8">
              <p className="mb-5 font-ui text-[0.68rem] font-semibold tracking-[0.18em] text-[#0f766e] uppercase">
                Details
              </p>
              <ul className="space-y-5">
                {details.map((item) => (
                  <li key={item.label}>
                    <p className="font-ui text-[0.65rem] font-semibold tracking-[0.14em] text-ink/40 uppercase">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block font-display text-[1.05rem] font-semibold text-ink transition hover:text-[#0f766e]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-display text-[1.05rem] font-semibold text-ink">
                        {item.value}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="mailto:hello@tekvill.com?subject=Book%20a%20call"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 bg-white px-6 text-[0.72rem] font-semibold tracking-[0.12em] text-ink uppercase transition hover:border-[#14b8a6] hover:text-[#0f766e]"
            >
              Book a call →
            </Link>
          </aside>

          <div className="rounded-2xl border border-ink/[0.06] bg-white p-7 shadow-[0_12px_36px_rgba(15,18,24,0.05)] md:p-9">
            <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-display text-[clamp(1.4rem,2.5vw,1.75rem)] font-semibold tracking-[-0.02em] text-ink">
                Start a conversation
              </h2>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#ecfdf8] px-3 py-1 font-ui text-[0.68rem] text-[#0f766e]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3db87a]" />
                Reply in 1 day
              </span>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
