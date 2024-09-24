"use server"

import { Resend } from 'resend';
import fs from 'fs/promises';
import path from 'path';

// Initialize Resend with your API key
const apiKey = process.env.RESEND_API_KEY;
const resend = new Resend(apiKey);

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
  const { name, email, phone, message } = data;
  console.log("🚀 ~ sendEmail ~ name, email, phone, message:", name, email, phone, message)

  try {
    // Read the PDF file
    const pdfPath = path.join(process.cwd(), 'public', 'pdfs', 'netzero.pdf');
    const pdfContent = await fs.readFile(pdfPath);

    // Send email using Resend
    const { data: resendData, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL as string,
      to: [email],
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
      attachments: [
        {
          filename: 'attachment.pdf',
          content: pdfContent,
        },
      ],
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, message: 'Failed to send email' };
    }

    console.log('Email sent successfully:', resendData);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'An error occurred while sending the email' };
  }
}