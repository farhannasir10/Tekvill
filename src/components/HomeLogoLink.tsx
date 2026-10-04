"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./Logo";

interface HomeLogoLinkProps {
  className?: string;
  logoClassName?: string;
  primaryColor?: string;
  textColor?: string;
}

let pendingHomeScrollTop = false;

function scrollWindowToTop() {
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  html.style.scrollBehavior = previous;
}

export default function HomeLogoLink({
  className = "",
  logoClassName = "",
  primaryColor,
  textColor,
}: HomeLogoLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!pendingHomeScrollTop || pathname !== "/") return;
    pendingHomeScrollTop = false;
    scrollWindowToTop();
  }, [pathname]);

  return (
    <Link
      href="/"
      className={className}
      onClick={(event) => {
        event.preventDefault();
        pendingHomeScrollTop = true;

        if (pathname === "/") {
          if (window.location.hash) {
            router.replace("/");
          }
          pendingHomeScrollTop = false;
          scrollWindowToTop();
          return;
        }

        router.push("/");
      }}
    >
      <Logo
        className={logoClassName}
        primaryColor={primaryColor}
        textColor={textColor}
      />
    </Link>
  );
}
