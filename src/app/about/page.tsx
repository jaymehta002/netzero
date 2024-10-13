import Expertise from "@/components/about/Expertise";
import Hero from "@/components/about/Hero";
import Mission from "@/components/about/Mission";
import Story from "@/components/about/Story";
import Team from "@/components/about/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Terrasols Solutions",
  description:
    "Learn about Terrasols Solutions, a leading sustainability consulting company dedicated to creating sustainable solutions for a greener tomorrow. Our team of passionate professionals drives innovation in carbon credits, ESG strategies, and sustainability services.",
  keywords: [
    "sustainability consulting",
    "environmental consulting",
    "carbon credits",
    "ESG",
    "carbon footprint",
    "sustainability services",
    "Terrasols Solutions",
    "green energy",
    "green technology",
    "sustainability strategies",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  authors: [{ name: "Terrasols Solutions" }],
  applicationName: "Terrasols Solutions",

  // Open Graph Metadata
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.terrasols.earth/about",
    title: "About Us - Terrasols Solutions",
    description:
      "Terrasols Solutions is a pioneering sustainability consultancy, driving positive change with innovative strategies and technologies aimed at creating a greener, more sustainable future.",
    siteName: "Terrasols Solutions",
    images: [
      {
        url: "https://www.terrasols.earth/images/team-photo.jpg", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "Terrasols Team",
      },
    ],
  },

  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    site: "@terrasols_earth", // Replace with actual Twitter handle
    title: "About Us - Terrasols Solutions",
    description:
      "Discover Terrasols Solutions, our mission, and our dedicated team driving sustainability and innovative solutions for a greener tomorrow.",
    images: [
      {
        url: "https://www.terrasols.earth/images/team-photo.jpg", // Replace with actual image
        alt: "Terrasols Team",
      },
    ],
  },

  // Structured Data (JSON-LD)

  // Additional metadata for mobile experience and appearance
  themeColor: "#4CAF50", // Sustainability-themed green color
  icons: {
    icon: "/favicon.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Terrasols Solutions",
  url: "https://www.terrasols.earth",
  logo: "https://www.terrasols.earth/images/logo.svg", // Replace with actual logo URL
  description:
    "Terrasols Solutions is a sustainability consulting company offering expertise in environmental, social, and governance (ESG) strategies, carbon footprint reduction, and green technology.",
  sameAs: [
    "https://linkedin.com/company/terrasols-solutions",
    "https://x.com/terrasols_earth",
  ],
  founder: {
    "@type": "Person",
    name: "Manish Kumar",
  },
  employee: [
    {
      "@type": "Person",
      name: "Jay Mehta",
    },
    {
      "@type": "Person",
      name: "Vaibhav Tiwari",
    },
    {
      "@type": "Person",
      name: "Dev Mehta",
    },
  ],
};

export default function Component() {
  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />

      <Story />

      <Team />

      <Mission />

      <Expertise />
    </div>
  );
}
