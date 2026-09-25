import Link from "next/link";

const company = [
  { href: "/#approach", label: "Impact" },
  { href: "/#testimonials", label: "Clients" },
  { href: "/#contact", label: "Contact" },
];

const work = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Case studies" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-black">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 80% at 10% 0%, rgba(110,179,255,0.06), transparent 55%)",
        }}
      />

      <div className="relative mx-auto w-[min(1120px,calc(100%-2.5rem))] pt-16 pb-8">
        <div className="grid gap-12 border-b border-white/[0.07] pb-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <div>
            <Link
              href="/"
              className="font-serif text-[1.65rem] font-medium tracking-[0.02em] text-white transition hover:text-warm"
            >
              Tekvill
            </Link>
            <p className="mt-4 max-w-sm font-ui text-[0.95rem] leading-relaxed text-muted">
              Production studio for AI, product, and infrastructure — built for
              teams that need what still works after launch.
            </p>
            <a
              href="mailto:hello@tekvill.com"
              className="mt-7 inline-flex items-center gap-2 font-ui text-[0.95rem] text-warm transition hover:text-accent"
            >
              hello@tekvill.com
              <span aria-hidden="true" className="text-accent">
                →
              </span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-14">
            <div>
              <h4 className="mb-5 font-ui text-[0.68rem] font-semibold tracking-[0.16em] text-muted uppercase">
                Company
              </h4>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-ui text-[0.95rem] text-lede transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-5 font-ui text-[0.68rem] font-semibold tracking-[0.16em] text-muted uppercase">
                Work
              </h4>
              <ul className="space-y-3">
                {work.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-ui text-[0.95rem] text-lede transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-7 sm:flex-row sm:items-center">
          <p className="font-ui text-[0.78rem] text-muted">
            © {new Date().getFullYear()} Tekvill. All rights reserved.
          </p>
          <p className="font-ui text-[0.72rem] tracking-[0.14em] text-muted/80 uppercase">
            Lahore · Remote
          </p>
        </div>
      </div>
    </footer>
  );
}
