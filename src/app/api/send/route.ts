import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req:NextRequest, res:NextResponse) {
  const { name,email,phone,message } = await req.json();
  
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
        <div>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
          <h2 style="color: #333;">Thank You for Contacting Us!</h2>
          <p>We appreciate your inquiry for {message} and will get back to you as soon as possible.</p>
          <p>Best regards,</p>
          <p>From Lakshya Roonwal</p>
        </div>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}