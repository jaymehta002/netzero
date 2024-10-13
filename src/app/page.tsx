import Main from "@/components/home/Main";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        {/* Primary SEO metadata */}
        <title>Terrasols Solutions - Sustainability Consulting</title>
        <meta
          name="description"
          content="Terrasols Solutions is a sustainability consulting company dedicated to creating positive environmental changes through innovative sustainability strategies."
        />
        <meta
          name="keywords"
          content="sustainability, carbon credits, carbon footprint, sustainability consulting, environmental consulting, ESG, sustainability reporting, sustainability services, carbon reduction"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Terrasols Solutions" />
        <meta name="application-name" content="Terrasols Solutions" />
        <meta name="theme-color" content="#4CAF50" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.terrasols.earth" />

        {/* Favicon and icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Open Graph metadata */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Terrasols Solutions - Sustainability Consulting Company"
        />
        <meta
          property="og:description"
          content="Terrasols Solutions is a sustainability consulting company dedicated to creating positive environmental changes through innovative strategies."
        />
        <meta property="og:url" content="https://www.terrasols.earth" />
        <meta property="og:site_name" content="Terrasols Solutions" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://www.terrasols.earth/dashboard.png" /* Update with actual image */
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Terrasols Solutions Dashboard" />

        {/* Twitter Card metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://x.com/terrasols_earth" />
        <meta
          name="twitter:title"
          content="Terrasols Solutions - Sustainability Consulting"
        />
        <meta
          name="twitter:description"
          content="Terrasols Solutions offers sustainability consulting services focused on carbon credits, environmental impact, and ESG strategies."
        />
        <meta
          name="twitter:image"
          content="https://www.terrasols.earth/logo.svg" /* Update with actual image */
        />
        <meta name="twitter:image:alt" content="Terrasols Solutions Logo" />

        {/* Structured Data (JSON-LD) for SEO */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Terrasols Solutions",
            "url": "https://www.terrasols.earth",
            "logo": "https://www.terrasols.earth/logo.svg",
            "description": "Terrasols Solutions is a sustainability consulting company offering strategies for carbon reduction, environmental impact, and ESG compliance.",
            "sameAs": [
              "https://x.com/terrasols_earth",
              "https://linkedin.com/company/terrasols-solutions" /* Update with real links */
            ]
          }
          `}
        </script>
      </Head>

      <Main />
    </>
  );
}
