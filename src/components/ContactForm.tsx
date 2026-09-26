"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(
      company ? `Project inquiry — ${company}` : "Project inquiry from Tekvill site"
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || "—"}\n\n${message}`
    );

    window.location.href = `mailto:hello@tekvill.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-ui text-[0.68rem] font-semibold tracking-[0.14em] text-ink/45 uppercase">
            Name
          </span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className="w-full rounded-xl border border-ink/10 bg-[#F6F6F6] px-4 py-3.5 font-ui text-[0.95rem] text-ink outline-none transition placeholder:text-ink/35 focus:border-[#14b8a6] focus:bg-white focus:ring-2 focus:ring-[#14b8a6]/20"
          />
        </label>
        <label className="block">
          <span className="mb-2 block font-ui text-[0.68rem] font-semibold tracking-[0.14em] text-ink/45 uppercase">
            Email
          </span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className="w-full rounded-xl border border-ink/10 bg-[#F6F6F6] px-4 py-3.5 font-ui text-[0.95rem] text-ink outline-none transition placeholder:text-ink/35 focus:border-[#14b8a6] focus:bg-white focus:ring-2 focus:ring-[#14b8a6]/20"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block font-ui text-[0.68rem] font-semibold tracking-[0.14em] text-ink/45 uppercase">
          Company
        </span>
        <input
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Optional"
          className="w-full rounded-xl border border-ink/10 bg-[#F6F6F6] px-4 py-3.5 font-ui text-[0.95rem] text-ink outline-none transition placeholder:text-ink/35 focus:border-[#14b8a6] focus:bg-white focus:ring-2 focus:ring-[#14b8a6]/20"
        />
      </label>

      <label className="block">
        <span className="mb-2 block font-ui text-[0.68rem] font-semibold tracking-[0.14em] text-ink/45 uppercase">
          How can we help?
        </span>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Tell us what you're building…"
          className="w-full resize-y rounded-xl border border-ink/10 bg-[#F6F6F6] px-4 py-3.5 font-ui text-[0.95rem] text-ink outline-none transition placeholder:text-ink/35 focus:border-[#14b8a6] focus:bg-white focus:ring-2 focus:ring-[#14b8a6]/20"
        />
      </label>

      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#0f766e] px-7 text-[0.72rem] font-semibold tracking-[0.14em] text-white uppercase shadow-[0_10px_28px_rgba(15,118,110,0.28)] transition hover:-translate-y-0.5 hover:bg-[#0d9488] sm:w-auto"
      >
        Send message →
      </button>

      {status === "sent" ? (
        <p className="font-ui text-[0.88rem] text-ink-soft">
          Opening your email client… If nothing opens, write us at{" "}
          <a href="mailto:hello@tekvill.com" className="text-[#0f766e] underline">
            hello@tekvill.com
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
