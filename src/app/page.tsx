"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"; // Add useEffect and useState
import { motion, useAnimation } from "framer-motion"; // Import framer-motion

export default function Home() {
  const [scrolled, setScrolled] = useState(false); // State to track scroll
  const controls = useAnimation(); // Animation controls

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // Update scroll state
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({ opacity: scrolled ? 1 : 0.8 }); // Animate opacity based on scroll
  }, [scrolled, controls]);

  return (
    <div className="space-y-24">
      <motion.nav
        className={`fixed top-0 left-0 w-full p-4 transition-all ${
          scrolled ? "bg-white" : "bg-transparent"
        }`}
        animate={controls}
      >
        {/* Navbar content here */}
      </motion.nav>
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <video
            src="/hero.webp" // Updated to use video source
            // layout="fill"
            className="object-cover h-screen w-full" // Use class for styling
            autoPlay
            loop
            muted
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Leveraging Sustainability Innovation for a Net-Zero Future
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your Partner for a Net-Zero Future
          </p>
          <Link
            href="/contact"
            className="bg-[#34D399] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2ebb85] transition-colors shadow-lg"
          >
            Start Your Sustainability Journey
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Tailored Sustainability Strategies",
              description:
                "Develop customized roadmaps aligning with your business goals and industry standards.",
            },
            {
              title: "Cutting-Edge Climate Change Solutions",
              description:
                "Leverage our AI-powered platform to optimize resource efficiency and minimize carbon emissions.",
            },
            {
              title: "Carbon Market Authority",
              description:
                "Comprehensive carbon credit solutions, including project development, trading, and digital transformation.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#34D399]"
            >
              <h2 className="text-2xl font-semibold mb-4 text-[#34D399]">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                quote:
                  "Terrasols helped us achieve our sustainability goals and reduce our carbon footprint by 30% in just one year.",
                author: "John Doe, CEO of Green Corp",
              },
              {
                quote:
                  "The carbon credit generation services provided by Terrasols have been invaluable to our company's environmental initiatives.",
                author:
                  "Jane Smith, Sustainability Director at Eco Innovations",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg relative"
              >
                <svg
                  className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 h-16 w-16 text-[#34D399] opacity-50"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative z-10 text-xl italic mb-4 text-gray-600">
                  {testimonial.quote}
                </p>
                <p className="font-semibold text-[#34D399]">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Sustainability Consulting",
              description:
                "Strategy development, climate risk assessment, and ESG reporting.",
            },
            {
              title: "Carbon Credit Generation",
              description:
                "Project development, trading, and verification for emission offsetting.",
            },
            {
              title: "Documentation and Registration",
              description:
                "Streamline ISO certifications and carbon footprint reporting.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#34D399]">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <Link
                href={`/services/${service.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="mt-4 text-[#34D399] hover:underline"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#34D399] text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Latest Insights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainability Trends for 2023",
                description:
                  "Explore the latest sustainability trends shaping the corporate landscape.",
              },
              {
                title: "Case Study: Achieving Net-Zero",
                description:
                  "Learn how our client reduced their carbon footprint and achieved net-zero emissions.",
              },
              {
                title: "The Future of Carbon Markets",
                description:
                  "Insights from our experts on the evolving landscape of carbon trading.",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog post image"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <Link
                    href={`/blog/${post.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-[#34D399] hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Make a Difference?</h2>
        <p className="text-xl mb-8 text-gray-600">
          Join us in creating a sustainable future for generations to come.
        </p>
        <Link
          href="/contact"
          className="bg-[#34D399] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2ebb85] transition-colors shadow-lg"
        >
          Get Started Today
        </Link>
      </section>
    </div>
  );
}
