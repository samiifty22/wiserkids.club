export const runtime = "nodejs";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";


const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // true for port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  const data = await req.json();

  const {
    participantName,
    schoolName,
    age,
    bloodGroup,
    gender,
    parentName,
    parentOccupation,
    phone,
    email,
    admissionFor,
    note,
  } = data;

  try {
    await transporter.sendMail({
      from: `"WiserKids Registration" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `New Registration — ${participantName}`,
      html: `
        <h2>New WiserKids Registration</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
          <tr><td style="padding:8px;font-weight:bold;background:#f9f9f9;">Participant Name</td><td style="padding:8px;">${participantName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f9f9f9;">School Name</td><td style="padding:8px;">${schoolName || "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f9f9f9;">Age</td><td style="padding:8px;">${age}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f9f9f9;">Blood Group</td><td style="padding:8px;">${bloodGroup || "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f9f9f9;">Gender</td><td style="padding:8px;">${gender}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f9f9f9;">Parent Name</td><td style="padding:8px;">${parentName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f9f9f9;">Parent Occupation</td><td style="padding:8px;">${parentOccupation || "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f9f9f9;">Phone</td><td style="padding:8px;">${phone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f9f9f9;">Email</td><td style="padding:8px;">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f9f9f9;">Admission For</td><td style="padding:8px;">${admissionFor}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f9f9f9;">Note</td><td style="padding:8px;">${note || "—"}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Mail error code:", error.code);
    console.error("Mail error message:", error.message);
    console.error("Full error:", error);
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}