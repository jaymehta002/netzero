import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Terrasols Solutions",
  description:
    "Terrasols Solutions is a sustainability consulting company dedicated to creating positive changes.",
  keywords: [
    "sustainablity",
    "carbon-credits",
    "carbon-footprint",
    "sustainability consulting",
    "environmental consulting",
    "ESG",
    "sustainability reporting",
    "sustainability consulting services",
    "sustainability consulting company",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-800`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
