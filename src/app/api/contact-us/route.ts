export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

interface ContactData {
  name: string;
  email: string;
  message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.TO_EMAIL;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !toEmail) {
      console.error("Missing SMTP env vars:", { smtpHost, smtpPort, smtpUser, toEmail });
      return NextResponse.json(
        { success: false, error: "Email configuration is missing on the server." },
        { status: 500 }
      );
    }

    const data: ContactData = await req.json();
    const { name, email, message } = data;

    if (!name?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email || "")) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"WiserKids Contact Form" <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Contact Message — ${name}`,
      html: `
        <h2>New Message from WiserKids Contact Page</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">Name</td>
            <td style="padding:8px;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">Email</td>
            <td style="padding:8px;">${email}</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">Message</td>
            <td style="padding:8px;white-space:pre-wrap;">${message}</td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Contact mail error:", error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    console.error("Unknown contact mail error:", error);
    return NextResponse.json({ success: false, error: "Something went wrong" }, { status: 500 });
  }
}
