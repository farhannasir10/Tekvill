"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "sent" | "error";

const COMPANY_EMAIL = "info@tekvill.com";

function openMailto(fields: {
  name: string;
  email: string;
  company: string;
  message: string;
}) {
  const subject = encodeURIComponent(
    fields.company
      ? `Project inquiry — ${fields.company}`
      : `Project inquiry from ${fields.name}`
  );
  const body = encodeURIComponent(
    [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Company: ${fields.company || "—"}`,
      ``,
      fields.message,
    ].join("\n")
  );
  window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const fields = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      company: String(data.get("company") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      const json = (await res.json()) as {
        ok?: boolean;
        error?: string;
        code?: string;
      };

      // No Resend key yet — open the company inbox via mailto so submit still works
      if (json.code === "not_configured") {
        openMailto(fields);
        form.reset();
        setStatus("sent");
        return;
      }

      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(json.error || "Could not send message. Please try again.");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      // Network / API down — still deliver via company mailto
      openMailto(fields);
      form.reset();
      setStatus("sent");
    }
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
            disabled={status === "loading"}
            className="w-full rounded-xl border border-ink/10 bg-[#F6F6F6] px-4 py-3.5 font-ui text-[0.95rem] text-ink outline-none transition placeholder:text-ink/35 focus:border-[#6eb3ff] focus:bg-white focus:ring-2 focus:ring-[#6eb3ff]/20 disabled:opacity-60"
          />
        </label>
        <label className="block">
          <span className="mb-2 block font-ui text-[0.68rem] font-semibold tracking-[0.14em] text-ink/45 uppercase">
            Your email
          </span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            disabled={status === "loading"}
            className="w-full rounded-xl border border-ink/10 bg-[#F6F6F6] px-4 py-3.5 font-ui text-[0.95rem] text-ink outline-none transition placeholder:text-ink/35 focus:border-[#6eb3ff] focus:bg-white focus:ring-2 focus:ring-[#6eb3ff]/20 disabled:opacity-60"
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
          disabled={status === "loading"}
          className="w-full rounded-xl border border-ink/10 bg-[#F6F6F6] px-4 py-3.5 font-ui text-[0.95rem] text-ink outline-none transition placeholder:text-ink/35 focus:border-[#6eb3ff] focus:bg-white focus:ring-2 focus:ring-[#6eb3ff]/20 disabled:opacity-60"
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
          disabled={status === "loading"}
          className="w-full resize-y rounded-xl border border-ink/10 bg-[#F6F6F6] px-4 py-3.5 font-ui text-[0.95rem] text-ink outline-none transition placeholder:text-ink/35 focus:border-[#6eb3ff] focus:bg-white focus:ring-2 focus:ring-[#6eb3ff]/20 disabled:opacity-60"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#6eb3ff] px-7 text-[0.72rem] font-semibold tracking-[0.14em] text-white uppercase shadow-[0_10px_28px_rgba(110,179,255,0.35)] transition hover:-translate-y-0.5 hover:bg-[#5aa8ff] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Send message →"}
      </button>

      {status === "sent" ? (
        <p className="font-ui text-[0.88rem] text-[#2f7fe8]">
          Message ready for {COMPANY_EMAIL}. We&apos;ll reply within one
          business day.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="font-ui text-[0.88rem] text-red-600">
          {error} Or email{" "}
          <a href={`mailto:${COMPANY_EMAIL}`} className="underline">
            {COMPANY_EMAIL}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
