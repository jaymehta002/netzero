import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart, Leaf, Sprout, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CarbonCredits() {
  const benefits = [
    {
      title: "Environmental impact",
      description:
        "Reduce your carbon footprint and contribute to a cleaner, healthier planet.",
      icon: Leaf,
    },
    {
      title: "Regulatory compliance",
      description:
        "Meet your carbon emissions reduction targets and avoid penalties.",
      icon: BarChart,
    },
    {
      title: "Enhanced brand reputation",
      description:
        "Demonstrate your commitment to sustainability and corporate social responsibility.",
      icon: Zap,
    },
    {
      title: "Financial returns",
      description:
        "Generate potential financial returns through carbon credit trading.",
      icon: Sprout,
    },
  ];

  const approach = [
    {
      title: "Project Development",
      description:
        "We identify and develop high-quality carbon credit projects, such as reforestation, renewable energy, and energy efficiency initiatives.",
    },
    {
      title: "Verification",
      description:
        "We ensure that our projects meet rigorous standards for carbon credit generation and are verified by independent third parties.",
    },
    {
      title: "Issuance and Trading",
      description:
        "We facilitate the issuance and trading of carbon credits, allowing you to offset your emissions and support sustainable development.",
    },
  ];

  const projects = [
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
  ];

  return (
    <div className="space-y-24">
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Carbon Credits hero"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-transparent opacity-70"></div>
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
          <h2 className="text-3xl font-bold mb-6 text-emerald-600">
            Generate Carbon Credits with Terrasols
          </h2>
          <p className="text-gray-600 mb-6">
            Our innovative projects help you generate carbon credits,
            contributing to a cleaner, healthier planet while potentially
            creating financial returns.
          </p>
        </div>
      </section>

      <section className="bg-emerald-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-emerald-600">
            Benefits of Carbon Credit Generation
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-emerald-600 flex items-center">
                    <benefit.icon className="w-6 h-6 mr-2 text-emerald-500" />
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-emerald-600">
          Our Carbon Credit Approach
        </h2>
        <div className="flex flex-col md:flex-row items-stretch justify-center space-y-8 md:space-y-0 md:space-x-8">
          {approach.map((step, index) => (
            <Card
              key={index}
              className="flex-1 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <div className="bg-emerald-100 text-emerald-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-4">
                  {index + 1}
                </div>
                <CardTitle className="text-xl font-semibold text-emerald-600">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-emerald-600 text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Project Portfolio
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white text-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-emerald-600">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-emerald-600">
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
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Reforestation project"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <section className="text-center bg-emerald-50 py-24">
        <h2 className="text-3xl font-bold mb-6 text-emerald-600">
          Invest in a Sustainable Future
        </h2>
        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
          Learn more about our carbon credit projects and how to invest in a
          sustainable future.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Invest in Carbon Credits
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
