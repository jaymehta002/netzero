"use server";
import { google } from 'googleapis';

import BrochureEmail from "@/components/emailTemplates/Broucher";
import { Resend } from "resend";
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
    // Read the PDF file
    // const pdfPath = path.join(process.cwd(), 'public', 'pdfs', 'netzero.pdf');
    // const pdfContent = await fs.readFile(pdfPath);

    // Send email using Resend
    const { data: resendData, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL as string,
      to: [email],
      subject: "Here is Your Free Brochure Learn More Inside!",
      react: BrochureEmail({
        userName: name,
        brochureTitle: "Ultimate Guide to Our Services",
      }),
      attachments: [
        {
          filename: "attachment.pdf",
          // content: attachment,
          path: pdfUrl,
        },
      ],
    });

    if (error) {
      console.error("Error sending email:", error);
      return { success: false, message: "Failed to send email" };
    }

    // Create logic for sending data in google sheet
    const url = process.env.GOOGLE_SCRIPT_URL;
    if (!url) {
      throw new Error("Google Script URL is not defined");
    }

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("Google Sheet updated successfully:");

    console.log("Email sent successfully:", resendData);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "An error occurred while sending the email",
    };
  }
}

export async function sendContactForm(data: EmailData) {
  const { name, email, phone, message } = data;
  console.log("🚀 ~ sendEmail ~ name, email, phone, message:", name, email, phone, message);

  try {
    // Set up Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'), // Ensure newlines are handled
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Specify the spreadsheet ID and range
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = 'Sheet1!A:D'; // Adjust this to match your sheet name and range

    // Prepare the values to be inserted
    const values = [[name, email, phone, message]];

    // Append the data to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    console.log("Google Sheet updated successfully:", response.data);
    console.log("Data Saved Successfully");
    return { success: true, message: "Data Saved Successfully" };
  } catch (error) {
    console.error("Error Saving Data:", error.message || error); // More detailed error logging
    return {
      success: false,
      message: "An error occurred in contact form",
    };
  }
}
