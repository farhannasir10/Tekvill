"use client";

import HomeLogoLink from "./HomeLogoLink";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
];

const linkClass =
  "text-[0.82rem] font-semibold tracking-[0.12em] text-warm/90 uppercase transition-colors hover:text-white";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <header className="animate-rise-header fixed top-0 right-0 left-0 z-50 grid h-15 grid-cols-[1fr_auto] items-center border-b border-warm/8 bg-black/95 px-[clamp(1.15rem,2.6vw,2.35rem)] backdrop-blur-md md:grid-cols-[1fr_auto_1fr]">
        <HomeLogoLink
          className="justify-self-start"
          logoClassName="h-9 w-auto md:h-10"
          primaryColor="#59abff"
          textColor="#ffffff"
        />

        <nav
          className="hidden items-center gap-[0.55rem] justify-self-center md:flex"
          aria-label="Primary"
        >
          {links.map((link, i) => (
            <span key={link.href} className="contents">
              {i > 0 ? (
                <span
                  className="text-[0.7rem] leading-none text-warm/40"
                  aria-hidden="true"
                >
                  ·
                </span>
              ) : null}
              <Link
                href={link.href}
                onClick={() => {
                  if (link.href === "/" && pathname === "/") {
                    window.scrollTo({ top: 0, behavior: "auto" });
                  }
                }}
                className={`${linkClass} ${
                  (link.href === "/" && pathname === "/") ||
                  (link.href !== "/" &&
                    (pathname === link.href ||
                      (link.href === "/services" &&
                        pathname?.startsWith("/services")) ||
                      (link.href === "/work" &&
                        pathname?.startsWith("/work")) ||
                      (link.href === "/about" &&
                        pathname?.startsWith("/about")) ||
                      (link.href === "/contact" &&
                        pathname?.startsWith("/contact"))))
                    ? "text-white"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>

        <Link
          href="/contact"
          className="justify-self-end rounded-full border border-warm/35 px-[0.95rem] py-2 text-[0.72rem] font-medium tracking-[0.14em] text-warm uppercase transition-colors hover:border-warm hover:bg-warm hover:text-black"
        >
          Let&apos;s talk
        </Link>
      </header>
      <div className="h-15 shrink-0" aria-hidden="true" />
    </>
  );
}
