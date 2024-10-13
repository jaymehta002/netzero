import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Terrasols Solutions",
  description:
    "Terrasols Solutions is a sustainability consulting company dedicated to creating positive changes.",
  keywords: [
    "sustainability",
    "carbon-credits",
    "carbon-footprint",
    "sustainability consulting",
    "environmental consulting",
    "ESG",
    "sustainability reporting",
    "sustainability consulting services",
    "sustainability consulting company",
  ],
  // Metadata for SEO
  robots: "index, follow", // Allows the page to be indexed
  viewport: "width=device-width, initial-scale=1.0", // Ensures proper scaling on mobile devices
  authors: [{ name: "Terrasols Solutions" }],
  applicationName: "Terrasols Solutions",

  // Open Graph Metadata for social sharing (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.terrasols.earth",
    title: "Terrasols Solutions - Sustainability Consulting Company",
    description:
      "Terrasols Solutions is a sustainability consulting company dedicated to creating positive environmental changes through innovative strategies.",
    siteName: "Terrasols Solutions",
    images: [
      {
        url: "https://www.terrasols.earth/dashboard.png",
        width: 1200,
        height: 630,
        alt: "Terrasols Solutions Dashoard",
      },
    ],
  },

  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    site: "https://x.com/terrasols_earth",
    title: "Terrasols Solutions - Sustainability Consulting",
    description:
      "Terrasols Solutions offers sustainability consulting services focused on carbon credits, environmental impact, and ESG strategies.",
    images: [
      {
        url: "https://www.terrasols.earth/logo.svg",
        alt: "Terrasols Solutions logo",
      },
    ],
  },
  // Additional metadata
  themeColor: "#4CAF50", // Matches your site's branding (green for sustainability)
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-800`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
