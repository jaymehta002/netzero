import Image from "next/image";

export default function NetZero() {
  return (
    <div className="space-y-24">
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Net Zero hero"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Net Zero Solutions
          </h1>
          <p className="text-xl md:text-2xl">
            Crafting a Sustainable Future: Your Tailored Sustainability Roadmap
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Our Approach to Net Zero
          </h2>
          <p className="text-gray-600 mb-6">
            Terrasols offers expert sustainability strategy development
            services, aligned with your business goals. We help you improve your
            brand reputation, reduce risks, and enhance financial performance on
            your journey to net zero emissions.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Enhanced brand reputation",
                description:
                  "Position your company as a responsible and sustainable leader.",
              },
              {
                title: "Increased competitiveness",
                description: "Gain a competitive edge in the market.",
              },
              {
                title: "Reduced risks",
                description:
                  "Mitigate climate-related risks and ensure long-term business resilience.",
              },
              {
                title: "Financial gains",
                description:
                  "Improve your bottom line through cost savings and increased efficiency.",
              },
              {
                title: "Stronger stakeholder relationships",
                description:
                  "Foster trust and engagement with investors, customers, employees, and communities.",
              },
              {
                title: "Environmental impact",
                description:
                  "Contribute to global efforts in combating climate change and preserving our planet.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          Our Net Zero Process
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
          <div className="space-y-24">
            {[
              {
                title: "1. Comprehensive Assessment",
                description:
                  "We conduct a thorough evaluation of your current sustainability performance to identify key areas for improvement.",
              },
              {
                title: "2. Ambitious Goal Setting",
                description:
                  "Together, we develop achievable sustainability goals that align with your business objectives.",
              },
              {
                title: "3. Customized Strategy Development",
                description:
                  "We create a tailored roadmap outlining the steps necessary to achieve your goals.",
              },
              {
                title: "4. Implementation Support",
                description:
                  "Our team provides guidance and resources to help you execute your sustainability strategy effectively.",
              },
              {
                title: "5. Monitoring and Reporting",
                description:
                  "We help you track progress, measure impact, and communicate results to stakeholders.",
              },
              {
                title: "6. Continuous Improvement",
                description:
                  "We work with you to refine and adapt your strategy as needed, ensuring long-term success.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="w-1/2 px-4">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className="w-10 h-10 bg-primary rounded-full border-4 border-white z-10"></div>
                <div className="w-1/2 px-4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Net Zero Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Sustainability Strategy and Roadmap",
              "Policy Development & Target Setting",
              "Stakeholder Engagement & Materiality Assessment",
              "ESG Rating Improvements",
              "Sustainability Reporting",
              "Verification and Assurance",
              "GHG Accounting/Carbon Footpr inting",
              "Carbon Neutrality Services",
              "Climate Risk Assessment",
              "SBTi & Target Validation",
              "Training Services",
              "Green Building Rating",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-gray-800"
              >
                <h3 className="text-lg font-semibold mb-2">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">
            Case Study
          </h2>
          <blockquote className="italic text-xl mb-4 text-gray-600">
            &quot;Terrasols&apos; sustainability strategy has transformed our
            business, reducing our environmental impact while improving our
            bottom line.&quot;
          </blockquote>

          <p className="font-semibold text-right text-primary">
            - Jane Doe, CEO of Eco Innovations
          </p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">
          Ready to Start Your Net Zero Journey?
        </h2>
        <a
          href="#"
          className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2ebb85] transition-colors shadow-lg"
        >
          Schedule a Consultation
        </a>
      </section>
    </div>
  );
}
