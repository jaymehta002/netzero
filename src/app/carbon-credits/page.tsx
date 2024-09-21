import Image from "next/image";

export default function CarbonCredits() {
  return (
    <div className="space-y-24">
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Carbon Credits hero"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#34D399] to-transparent opacity-70"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Carbon Credits
          </h1>
          <p className="text-xl md:text-2xl">
            Offset Your Carbon Footprint and Support Sustainable Initiatives
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#34D399]">
            Generate Carbon Credits with Terrasols
          </h2>
          <p className="text-gray-600 mb-6">
            Our innovative projects help you generate carbon credits,
            contributing to a cleaner, healthier planet while potentially
            creating financial returns.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#34D399]">
            Benefits of Carbon Credit Generation
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Environmental impact",
                description:
                  "Reduce your carbon footprint and contribute to a cleaner, healthier planet.",
              },
              {
                title: "Regulatory compliance",
                description:
                  "Meet your carbon emissions reduction targets and avoid penalties.",
              },
              {
                title: "Enhanced brand reputation",
                description:
                  "Demonstrate your commitment to sustainability and corporate social responsibility.",
              },
              {
                title: "Financial returns",
                description:
                  "Generate potential financial returns through carbon credit trading.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#34D399]"
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#34D399]">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#34D399]">
          Our Carbon Credit Approach
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          {[
            {
              title: "1. Project Development",
              description:
                "We identify and develop high-quality carbon credit projects, such as reforestation, renewable energy, and energy efficiency initiatives.",
            },
            {
              title: "2. Verification",
              description:
                "We ensure that our projects meet rigorous standards for carbon credit generation and are verified by independent third parties.",
            },
            {
              title: "3. Issuance and Trading",
              description:
                "We facilitate the issuance and trading of carbon credits, allowing you to offset your emissions and support sustainable development.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow w-full md:w-1/3"
            >
              <div className="bg-[#34D399] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#34D399]">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#34D399] text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Project Portfolio
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Reforestation Projects",
                description:
                  "Plant trees in degraded forests to sequester carbon and restore ecosystems.",
              },
              {
                title: "Renewable Energy Projects",
                description:
                  "Support the development of solar, wind, and other renewable energy sources.",
              },
              {
                title: "Energy Efficiency Projects",
                description:
                  "Implement energy-saving measures to reduce emissions and improve efficiency.",
              },
              {
                title: "Sustainable Agriculture Projects",
                description:
                  "Promote sustainable farming practices to reduce deforestation and improve soil health.",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md text-gray-800"
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#34D399]">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#34D399]">
          Case Study: Reforestation Project in Brazil
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-600 mb-4">
              Our reforestation project in the Amazon rainforest has sequestered
              over 100,000 tons of carbon and provided habitat for 50 endangered
              species.
            </p>
            <ul className="text-gray-600 list-disc list-inside space-y-2">
              <li>100,000 tons of carbon sequestered</li>
              <li>50 endangered species protected</li>
              <li>1,000 hectares of forest restored</li>
              <li>500 local jobs created</li>
            </ul>
          </div>
          <div className="relative h-96">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Reforestation project"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="text-center bg-gray-100 py-24">
        <h2 className="text-3xl font-bold mb-6 text-[#34D399]">
          Invest in a Sustainable Future
        </h2>
        <p className="text-xl mb-8 text-gray-600">
          Learn more about our carbon credit projects and how to invest in a
          sustainable future.
        </p>
        <a
          href="#"
          className="bg-[#34D399] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2ebb85] transition-colors shadow-lg"
        >
          Invest in Carbon Credits
        </a>
      </section>
    </div>
  );
}
