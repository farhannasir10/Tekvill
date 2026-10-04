"use client";

import { useId } from "react";

interface LogoProps {
  className?: string;
  primaryColor?: string;
  textColor?: string;
}

export default function Logo({
  className = "",
  primaryColor = "#0052cc",
  textColor = "currentColor",
}: LogoProps) {
  const clipId = useId().replace(/:/g, "");

  return (
    <svg
      className={`tekvill-logo ${className}`}
      viewBox="0 30 520 160"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Tekvill"
    >
      <defs>
        <clipPath id={clipId}>
          <polygon points="291,-144 326,-144 316,-74 281,-74" />
        </clipPath>
        <style>
          {`
            .tekvill-logo-font {
              font-family: 'Outfit', sans-serif;
              font-weight: 800;
              font-size: 144px;
              letter-spacing: -1.5px;
            }
          `}
        </style>
      </defs>
      <g transform="translate(60, 170)">
        <path
          d="M4 5C2.44769 17.2722 0.00136768 29.6088 0 42L30 42C31.5511 29.7374 34.4697 17.3521 35 5L4 5M39 42L70 42C70.9753 29.6419 73.4452 17.3026 75 5L53 5C50.5703 5.0011 46.7845 4.37651 44.7423 6.02779C42.356 7.95728 42.6445 13.2146 42.2816 16L39 42M84 5C83.7442 17.3941 80.2558 29.6059 80 42L97 42C93.8935 81.3625 86.8673 120.843 81.7184 160C79.3015 178.38 75.0512 197.449 75 216L119 216C119.181 194.153 124.019 171.671 126.715 150C131.194 114.007 135.452 77.986 140 42L198 42C198.534 29.5741 202.022 17.3877 203 5L84 5z"
          fill={primaryColor}
          transform="translate(-31, -130) scale(0.6009389671361502)"
        />
        <text x="50" y="0" className="tekvill-logo-font" fill={textColor}>
          ekvill
        </text>
        <text
          x="50"
          y="0"
          className="tekvill-logo-font"
          fill={primaryColor}
          clipPath={`url(#${clipId})`}
        >
          ekvill
        </text>
      </g>
    </svg>
  );
}
