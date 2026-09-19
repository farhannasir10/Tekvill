import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway, Manrope } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif-next",
  display: "swap",
});

const display = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-next",
  display: "swap",
});

const ui = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ui-next",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tekvill — Production Studio",
  description:
    "Tekvill plans, designs, and ships digital products, AI systems, and infrastructure for ambitious companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${display.variable} ${ui.variable} h-full`}
    >
      <body className="font-ui antialiased">{children}</body>
    </html>
  );
}
