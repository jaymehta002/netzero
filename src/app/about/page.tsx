import { ArrowRight, Briefcase, Leaf, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const expertise = [
    {
      title: "Sustainability Strategy",
      description: "Developing tailored roadmaps aligned with business goals.",
      icon: Leaf,
    },
    {
      title: "Climate Change Mitigation",
      description:
        "Implementing innovative solutions to reduce carbon emissions.",
      icon: TrendingUp,
    },
    {
      title: "Carbon Market Expertise",
      description:
        "Providing guidance on carbon credit generation and trading.",
      icon: Briefcase,
    },
    {
      title: "Technology-Driven Solutions",
      description: "Leveraging AI and blockchain for sustainable practices.",
      icon: Zap,
    },
  ];

  const teamMembers = [
    { name: "John Doe", role: "Sustainability Expert" },
    { name: "Jane Smith", role: "Climate Change Specialist" },
    { name: "Mike Johnson", role: "Carbon Market Analyst" },
    { name: "Sarah Brown", role: "Technology Innovation Lead" },
  ];
  return (
    <div className="space-y-24">
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="About hero"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            About Terrasols
          </h1>
          <p className="text-xl md:text-2xl">
            Your Partner for a Sustainable Future
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-emerald-600">
            Our Story
          </h2>
          <p className="text-gray-600 mb-6">
            Terrasols Solutions Private Limited is a pioneering sustainability
            consultancy committed to driving positive change. With a team of
            seasoned professionals and a passion for innovation, we offer a
            comprehensive range of services tailored to meet the unique needs of
            our clients.
          </p>
          <p className="text-gray-600">
            Our journey began with a simple yet powerful idea: to empower
            businesses and organizations to achieve their sustainability goals
            while driving economic growth. Today, we&apos;re proud to be at the
            forefront of the sustainability revolution, helping our clients
            navigate the complexities of environmental stewardship and carbon
            management.
          </p>
        </div>
      </section>

      <section className="bg-emerald-50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-emerald-600">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-8">
                To empower businesses and organizations to achieve a sustainable
                future by providing innovative solutions, expert guidance, and
                cutting-edge technologies.
              </p>
              <h2 className="text-3xl font-bold mb-6 text-emerald-600">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To be a global leader in sustainability, setting the standard
                for excellence in environmental stewardship and inspiring
                positive change across industries.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Our mission and vision"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-emerald-600">
          Our Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-start"
            >
              <div className="bg-emerald-100 text-emerald-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-emerald-600 text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt={member.name}
                    layout="fill"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {member.name}
                </h3>
                <p className="text-emerald-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 text-center mb-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Join Us in Creating a Sustainable Future
        </h2>
        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
          Schedule a consultation with our team to discuss your sustainability
          goals and how we can help you achieve them.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl mb-4"
        >
          Book a Consultation
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
