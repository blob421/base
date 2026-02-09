
export const runtime = "nodejs";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'

const EMAIL_HOST_USER ="go.team.xyz@gmail.com"
const SMTP_HOST = 'smtp.gmail.com'
const SMTP_PORT = 587
const EMAIL_HOST_PASSWORD = "efwd uyxp issf xuef"

export async function POST(req: Request) {
    
  try {
    const { name, subject, content, email } =
      await req.json();

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false,
      auth: {
        user: EMAIL_HOST_USER,
        pass: EMAIL_HOST_PASSWORD,
      },
    });

    await transporter.sendMail({
    from: EMAIL_HOST_USER, 
    to: EMAIL_HOST_USER,    
    replyTo: email,          
    subject: subject,
    text: `
    Name: ${name}
    Email: ${email}

    Message:
    ${content}
    `,
    });


    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Email failed" });
  }
}
