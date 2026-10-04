import HomeLogoLink from "./HomeLogoLink";
import Link from "next/link";
import { services } from "@/data/services";

const company = [
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About us" },
];

const serviceLinks = services.slice(0, 5).map((service) => ({
  href: `/services/${service.slug}`,
  label: service.title,
}));

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
            <HomeLogoLink
              className="inline-block transition hover:opacity-80"
              logoClassName="h-10 w-auto"
              primaryColor="#6eb3ff"
              textColor="#ffffff"
            />
            <p className="mt-4 max-w-sm font-ui text-[0.95rem] leading-relaxed text-muted">
              Production studio for AI, product, and infrastructure — built for
              teams that need what still works after launch.
            </p>
            <a
              href="mailto:info@tekvill.com"
              className="mt-7 inline-flex items-center gap-2 font-ui text-[0.95rem] text-warm transition hover:text-accent"
            >
              info@tekvill.com
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
                Services
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((item) => (
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
            Gulberg Lahore · Murrieta, US · Toronto, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
