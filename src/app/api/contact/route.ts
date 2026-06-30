export const runtime = "nodejs";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

interface RegistrationData {
  participantName: string;
  schoolName?: string;
  age: string | number;
  bloodGroup?: string;
  gender: string;
  parentName: string;
  parentOccupation?: string;
  phone: string;
  email: string;
  admissionFor: string;
  note?: string;
}

export async function POST(req: Request) {
  try {
    // Validate env vars are present
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

    // Create transporter fresh per request so env vars are always resolved
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: true, // true for port 465
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const data: RegistrationData = await req.json();

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

    await transporter.sendMail({
      from: `"WiserKids Registration" <${smtpUser}>`,
      to: toEmail,
      subject: `New Registration — ${participantName}`,
      html: `
        <h2>New WiserKids Registration</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">Participant Name</td>
            <td style="padding:8px;">${participantName}</td>
          </tr>

          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">School Name</td>
            <td style="padding:8px;">${schoolName || "—"}</td>
          </tr>

          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">Age</td>
            <td style="padding:8px;">${age}</td>
          </tr>

          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">Blood Group</td>
            <td style="padding:8px;">${bloodGroup || "—"}</td>
          </tr>

          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">Gender</td>
            <td style="padding:8px;">${gender}</td>
          </tr>

          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">Parent Name</td>
            <td style="padding:8px;">${parentName}</td>
          </tr>

          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">Parent Occupation</td>
            <td style="padding:8px;">${parentOccupation || "—"}</td>
          </tr>

          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">Phone</td>
            <td style="padding:8px;">${phone}</td>
          </tr>

          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">Email</td>
            <td style="padding:8px;">${email}</td>
          </tr>

          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">Admission For</td>
            <td style="padding:8px;">${admissionFor}</td>
          </tr>

          <tr>
            <td style="padding:8px;font-weight:bold;background:#f9f9f9;">Note</td>
            <td style="padding:8px;">${note || "—"}</td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error: unknown) {

    if (error instanceof Error) {
      console.error("Mail error message:", error.message);
      console.error("Full error:", error);

      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 }
      );
    }

    console.error("Unknown mail error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong",
      },
      { status: 500 }
    );
  }
}