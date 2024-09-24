"use client";
import Bento from "@/components/Bento";
import Hero from "@/components/Hero";
import TextRevealByWord from "@/components/magicui/text-reveal";
import Services from "@/components/Services";
// import Services from "@/components/Services";
import { useAnimation } from "framer-motion"; // Import framer-motion and motion
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react"; // Ensure useEffect is imported

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      backgroundColor: scrolled ? "rgba(255, 255, 255, 0.5)" : "transparent",
      transition: { duration: 0.3 },
    });
  }, [scrolled, controls]);

  // const insights = [
  //   {
  //     title: "Sustainability Trends for 2023",
  //     description:
  //       "Explore the latest sustainability trends shaping the corporate landscape.",
  //   },
  //   {
  //     title: "Case Study: Achieving Net-Zero",
  //     description:
  //       "Learn how our client reduced their carbon footprint and achieved net-zero emissions.",
  //   },
  //   {
  //     title: "The Future of Carbon Markets",
  //     description:
  //       "Insights from our experts on the evolving landscape of carbon trading.",
  //   },
  // ];

  return (
    <div className="space-y-24">
      <Hero />
      {/* <script src="https://climateclock.world/widget-v1.js" async></script>
      <climate-clock /> */}
      <TextRevealByWord text="Terrasols Solutions Private Limited is a sustainability consulting company dedicated to creating positive changes. We have a team of experienced professionals and a strong focus on innovation. We provide a wide range of services tailored to meet our clients' specific needs" />
      <Services />

      <Bento />
      {/* <motion.section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
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
              {
                quote:
                  "The carbon credit generation services provided by Terrasols have been invaluable to our company's environmental initiatives.",
                author:
                  "Jane Smith, Sustainability Director at Eco Innovations",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br w-1/ from-emerald-50 to-white p-8 rounded-lg shadow-md relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Quote className="absolute top-4 left-4 h-12 w-12 text-emerald-200 opacity-50" />
                <div className="relative z-10">
                  <p className="text-lg mb-4 w-80 text-gray-700 leading-relaxed">
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
      </motion.section> */}

      {/* <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Our Services
          </h2>
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
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-300 flex items-center"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="bg-emerald-600 text-white py-24">
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
                    href={`/blog/${post.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
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
      </section> */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-12 text-gray-600 max-w-2xl mx-auto">
            Join us in creating a sustainable future for generations to come.
          </p>
          <Link
            href="/contact"
            className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
}
