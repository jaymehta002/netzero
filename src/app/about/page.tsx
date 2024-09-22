import Image from "next/image";

export default function About() {
  return (
    <div className="space-y-24">
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="About hero"
            layout="fill"
            objectFit="cover"
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
          <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
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

      <section className="bg-gray-100 py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
                To empower businesses and organizations to achieve a sustainable
                future by providing innovative solutions, expert guidance, and
                cutting-edge technologies.
              </p>
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To be a global leader in sustainability, setting the standard
                for excellence in environmental stewardship and inspiring
                positive change across industries.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Our mission and vision"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          Our Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Sustainability Strategy",
              description:
                "Developing tailored roadmaps aligned with business goals.",
            },
            {
              title: "Climate Change Mitigation",
              description:
                "Implementing innovative solutions to reduce carbon emissions.",
            },
            {
              title: "Carbon Market Expertise",
              description:
                "Providing guidance on carbon credit generation and trading.",
            },
            {
              title: "Technology-Driven Solutions",
              description:
                "Leveraging AI and blockchain for sustainable practices.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start"
            >
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "John Doe", role: "Sustainability Expert" },
              { name: "Jane Smith", role: "Climate Change Specialist" },
              { name: "Mike Johnson", role: "Carbon Market Analyst" },
              { name: "Sarah Brown", role: "Technology Innovation Lead" },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Join Us in Creating a Sustainable Future
        </h2>
        <p className="text-xl mb-8 text-gray-600">
          Schedule a consultation with our team to discuss your sustainability
          goals.
        </p>
        <a
          href="#"
          className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2ebb85] transition-colors shadow-lg"
        >
          Book a Consultation
        </a>
      </section>
    </div>
  );
}
