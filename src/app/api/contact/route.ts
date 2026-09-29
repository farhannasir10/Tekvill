import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type ContactBody = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactBody;
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const company = String(body.company || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          ok: false,
          code: "not_configured",
          error:
            "Email is not configured yet. Add RESEND_API_KEY to your environment.",
        },
        { status: 503 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL || "info@tekvill.com";
    const from =
      process.env.CONTACT_FROM_EMAIL ||
      "Tekvill Website <onboarding@resend.dev>";

    const resend = new Resend(apiKey);
    const subject = company
      ? `Project inquiry — ${company}`
      : `Project inquiry from ${name}`;

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject,
      text: [
        `New contact form submission from tekvill.com`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "—"}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
      html: `
        <div style="font-family: system-ui, sans-serif; line-height: 1.6; color: #111;">
          <p><strong>New contact form submission</strong></p>
          <p>
            <strong>Name:</strong> ${escapeHtml(name)}<br />
            <strong>Email:</strong> ${escapeHtml(email)}<br />
            <strong>Company:</strong> ${escapeHtml(company || "—")}
          </p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message || "Failed to send email." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
