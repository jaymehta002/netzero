"use server";
import BrochureEmail from "@/components/emailTemplates/Broucher";
import { Resend } from "resend";
import { google } from "googleapis";

// Initialize Resend with your API key
const apiKey = process.env.RESEND_API_KEY;
const resend = new Resend(apiKey);
const pdfUrl = "https://heyzine.com/flip-book/6a449573b5.html";

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
  const { name, email, phone, message } = data;

  console.log(
    "🚀 ~ sendEmail ~ name, email, phone, message:",
    name,
    email,
    phone,
    message
  );

  try {
    // Send email using Resend
    const { data: resendData, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL as string,
      to: [email],
      subject: "New Contact Form Submission",
      react: BrochureEmail({
        userName: name,
        brochureTitle: "Ultimate Guide to Our Services",
      }),
      attachments: [
        {
          filename: "attachment.pdf",
          path: pdfUrl,
        },
      ],
    });

    if (error) {
      console.error("Error sending email:", error);
      return { success: false, message: "Failed to send email" };
    }

    console.log("Email sent successfully:", resendData);

    // Now, let's send data to the Google Sheet
    const url = process.env.GOOGLE_SCRIPT_URL;
    if (!url) {
      throw new Error("Google Script URL is not defined");
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const sheetId = process.env.GOOGLE_SHEET_ID;
    const range = "Sheet1!A1:D1";

    const request = {
      spreadsheetId: sheetId,
      range: range,
      valueInputOption: "RAW",
      resource: {
        values: [[name, email, phone, message]],
      },
    };

    const response = await sheets.spreadsheets.values.append(request);

    console.log("Google Sheet updated successfully:", response);

    return { success: true, message: "Email sent and data saved successfully" };
  } catch (error) {
    console.error("Error sending email or saving data:", error);
    return {
      success: false,
      message: "An error occurred while sending the email and saving data",
    };
  }
}
