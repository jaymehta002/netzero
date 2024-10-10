import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 py-12 px-6 lg:px-12 text-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
          Privacy Policy
        </h1>
        <p className="text-md text-center mb-12">Effective Date: 10/08/2024</p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            1. Information We Collect
          </h2>
          <p className="leading-relaxed mb-4">
            We may collect personal and non-personal information in the
            following ways:
          </p>
          <h3 className="text-xl font-semibold text-green-500 mb-2">
            1.1. Personal Information
          </h3>
          <p className="leading-relaxed mb-4">
            Personal information you voluntarily provide when:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Filling out forms on the Website (e.g., contact forms).</li>
            <li>Subscribing to our newsletter or requesting services.</li>
            <li>Communicating with us via email or other methods.</li>
          </ul>
          <p className="leading-relaxed mb-4">
            This information may include your name, email address, phone number,
            company name, address, and other personal details.
          </p>
          <h3 className="text-xl font-semibold text-green-500 mb-2">
            1.2. Non-Personal Information
          </h3>
          <p className="leading-relaxed mb-4">
            Non-personal information may be automatically collected when you
            visit our Website, including your IP address, browser type,
            operating system, and pages viewed on the Website.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="leading-relaxed mb-4">
            We use the information collected for the following purposes:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>To provide, operate, and maintain our Website and services.</li>
            <li>To respond to inquiries and communicate with you.</li>
            <li>
              To send newsletters and communications, if you have opted-in.
            </li>
            <li>
              To analyze Website usage and improve functionality and content.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            3. How We Share Your Information
          </h2>
          <p className="leading-relaxed mb-4">
            We do not sell or rent your personal information. However, we may
            share your information with:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              Service providers who assist us in operating the Website and
              services.
            </li>
            <li>
              Legal authorities if required by law, or in response to valid
              requests.
            </li>
            <li>
              In the event of a merger or business transfer, your information
              may be part of the transaction.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            4. Data Security
          </h2>
          <p className="leading-relaxed mb-4">
            We take appropriate measures to protect your personal information.
            However, no method of transmission over the internet is completely
            secure, and we cannot guarantee its absolute security.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            5. Your Data Protection Rights
          </h2>
          <p className="leading-relaxed mb-4">
            Depending on your location, you may have the following rights:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Right to Access your personal data.</li>
            <li>Right to Rectification of inaccurate information.</li>
            <li>Right to Erasure of personal data.</li>
            <li>Right to Restrict Processing of your data.</li>
            <li>Right to Object to data processing for direct marketing.</li>
            <li>Right to Data Portability where applicable.</li>
          </ul>
          <p className="leading-relaxed mb-4">
            To exercise these rights, please contact us at{" "}
            <a
              href="mailto:info@netzerosolutions.in"
              className="text-green-600 underline"
            >
              info@netzerosolutions.in
            </a>
            .
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            6. Cookies and Tracking Technologies
          </h2>
          <p className="leading-relaxed mb-4">
            We may use cookies and tracking technologies to improve your
            experience. You can choose to disable cookies through your browser
            settings, but this may affect the functionality of our Website.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            7. Third-Party Links
          </h2>
          <p className="leading-relaxed mb-4">
            Our Website may contain links to external sites that are not
            operated by us. We are not responsible for their content or privacy
            policies, and encourage you to review their policies before sharing
            any information.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            8. Changes to This Privacy Policy
          </h2>
          <p className="leading-relaxed mb-4">
            We may update this Privacy Policy from time to time. The updated
            policy will be posted on this page with the updated &quot;Effective
            Date.&quot;
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            9. Contact Us
          </h2>
          <p className="leading-relaxed mb-4">
            If you have any questions, feel free to contact us at:
          </p>
          <address className="not-italic leading-relaxed mb-4">
            <strong>Terrasols Solutions Private Limited</strong> <br />
            Email:{" "}
            <a
              href="mailto:info@netzerosolutions.in"
              className="text-green-600 underline"
            >
              info@netzerosolutions.in
            </a>
            <br />
            Address: 49, Divine, G Noida, 201306 <br />
            Phone: +91 8789374657
          </address>
        </section>
      </div>
    </div>
  );
}
