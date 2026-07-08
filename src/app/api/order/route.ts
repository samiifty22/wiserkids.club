export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

interface OrderData {
  fullName: string;
  mobile: string;
  email: string;
  addressLine: string;
  city: string;
  quantity: number;
  unitPrice: number;
  notes?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^(?:\+8801[3-9]\d{8}|01[3-9]\d{8}|\+[1-9]\d{9,14})$/;

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

    const data: OrderData = await req.json();
    const { fullName, mobile, email, addressLine, city, quantity, unitPrice, notes } = data;

    if (!fullName?.trim() || !addressLine?.trim() || !city?.trim()) {
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

    if (!MOBILE_REGEX.test((mobile || "").trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid mobile number (e.g. 01XXXXXXXXX or +8801XXXXXXXXX)." },
        { status: 400 }
      );
    }

    const qty = Number(quantity);
    if (!Number.isInteger(qty) || qty < 1) {
      return NextResponse.json(
        { success: false, error: "Quantity must be at least 1." },
        { status: 400 }
      );
    }

    const total = qty * Number(unitPrice);

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
      from: `"WiserKids Orders" <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Handbook Order — ${fullName}`,
      html: `
        <h2>New WiserKids Handbook Order</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">Full Name</td>
            <td style="padding:8px;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">Mobile</td>
            <td style="padding:8px;">${mobile}</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">Email</td>
            <td style="padding:8px;">${email}</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">Delivery Address</td>
            <td style="padding:8px;">${addressLine}</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">City / Area</td>
            <td style="padding:8px;">${city}</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">Quantity</td>
            <td style="padding:8px;">${qty}</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">Unit Price</td>
            <td style="padding:8px;">৳${Number(unitPrice).toLocaleString()}</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">Total</td>
            <td style="padding:8px;font-weight:bold;">৳${total.toLocaleString()}</td>
          </tr>
          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">Notes</td>
            <td style="padding:8px;">${notes || "—"}</td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Order mail error:", error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    console.error("Unknown order mail error:", error);
    return NextResponse.json({ success: false, error: "Something went wrong" }, { status: 500 });
  }
}
