import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_TO } =
  process.env;

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: Number(EMAIL_PORT),
  secure: Number(EMAIL_PORT) === 465, // true ถ้าใช้ SSL (port 465)
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "กรุณากรอกข้อมูลให้ครบทุกช่อง" },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"Contact Form" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      subject: `ข้อความจาก ${name} (${email})`,
      text: message,
      html: `<p><strong>ชื่อ:</strong> ${name}</p>
             <p><strong>อีเมล:</strong> ${email}</p>
             <p><strong>ข้อความ:</strong></p>
             <p>${message}</p>`,
    });

    return NextResponse.json({ success: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { error: "ไม่สามารถส่งอีเมลได้ในขณะนี้" },
      { status: 500 }
    );
  }
}
