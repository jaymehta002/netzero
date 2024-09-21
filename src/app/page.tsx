"use client";
import { useAnimation } from "framer-motion"; // Import framer-motion
import { ArrowRight, BarChart3, FileText, Leaf, Lightbulb, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"; // Add useEffect and useState

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


  const services = [
    {
      title: "Sustainability Consulting",
      description: "Strategy development, climate risk assessment, and ESG reporting.",
      icon: Lightbulb,
    },
    {
      title: "Carbon Credit Generation",
      description: "Project development, trading, and verification for emission offsetting.",
      icon: BarChart3,
    },
    {
      title: "Documentation and Registration",
      description: "Streamline ISO certifications and carbon footprint reporting.",
      icon: FileText,
    },
  ]

  const insights = [
    {
      title: "Sustainability Trends for 2023",
      description: "Explore the latest sustainability trends shaping the corporate landscape.",
    },
    {
      title: "Case Study: Achieving Net-Zero",
      description: "Learn how our client reduced their carbon footprint and achieved net-zero emissions.",
    },
    {
      title: "The Future of Carbon Markets",
      description: "Insights from our experts on the evolving landscape of carbon trading.",
    },
  ]

  return (
    <div className="space-y-24">
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
        <div className="container flex flex-col items-center mx-auto px-4 z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center leading-tight">
            Driving <span className="text-green-400">Sustainable</span> Change
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your Partner for a Net-Zero Future
          </p>
          <Link href={"/contact"} className="relative px-6 py-3 group">
            {/* Blurred background */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-lg group-hover:bg-white/20 transition-colors duration-300 ease-in-out"></div>

            {/* Button content */}
            <div className="relative flex items-center space-x-2 text-white">
              <span className="font-medium">Get Started</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-emerald-50 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
    {
      title: "Tailored Sustainability Strategies",
      description: "Develop customized roadmaps aligning with your business goals and industry standards.",
      icon: Lightbulb,
    },
    {
      title: "Cutting-Edge Climate Change Solutions",
      description: "Leverage our AI-powered platform to optimize resource efficiency and minimize carbon emissions.",
      icon: Leaf,
    },
    {
      title: "Carbon Market Authority",
      description: "Comprehensive carbon credit solutions, including project development, trading, and digital transformation.",
      icon: BarChart3,
    },
  ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-full mr-4 group-hover:bg-emerald-200 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-300 flex items-center"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
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
                className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-lg shadow-md relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Quote className="absolute top-4 left-4 h-12 w-12 text-emerald-200 opacity-50" />
                <div className="relative z-10">
                  <p className="text-lg mb-4 text-gray-700 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="font-semibold text-emerald-600">
                    {testimonial.author}
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-emerald-100 rounded-tl-full opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-emerald-100 p-3 rounded-full mr-4 group-hover:bg-emerald-200 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <Link
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-300 flex items-center"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Latest Insights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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
                    href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-300 flex items-center"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="bg-gradient-to-b from-emerald-50 to-white py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Ready to Make a Difference?</h2>
          <p className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto">
            Join us in creating a sustainable future for generations to come.
          </p>
          <Link
            href="/contact"
            className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>

       
    </div>
  );
}
