"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

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

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="space-y-24">
      <motion.section
        className="relative h-screen flex items-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="absolute inset-0 z-0">
          <video
            src="/hero.webp"
            className="object-cover h-screen w-full"
            autoPlay
            loop
            muted
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Leveraging Sustainability Innovation for a Net-Zero Future
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Your Partner for a Net-Zero Future
          </p>
          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-[#2ebb85] transition-colors shadow-lg inline-block"
          >
            Start Your Sustainability Journey
          </Link>
        </div>
      </motion.section>

      <motion.section
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Carbon Footprint Assessment"
            description="Accurate measurement of your organization's carbon emissions across all scopes."
          />
          <ServiceCard
            title="Net-Zero Strategy Development"
            description="Tailored roadmaps to achieve your sustainability goals and reduce emissions."
          />
          <ServiceCard
            title="Carbon Credit Solutions"
            description="Access to high-quality carbon credits and offset programs to neutralize residual emissions."
          />
        </div>
      </motion.section>

      <motion.section
        className="bg-gray-100 py-16"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Expertise"
              description="Our team of sustainability experts brings years of experience to your projects."
            />
            <FeatureCard
              title="Innovation"
              description="We leverage cutting-edge technology and methodologies for accurate assessments and impactful strategies."
            />
            <FeatureCard
              title="Customization"
              description="Tailored solutions that align with your organization's unique needs and goals."
            />
            <FeatureCard
              title="Continuous Support"
              description="Ongoing guidance and support to ensure long-term success in your sustainability journey."
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Get Started Today
        </h2>
        <p className="text-center text-lg mb-8">
          Take the first step towards a sustainable future for your
          organization.
        </p>
        <div className="text-center">
          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-[#2ebb85] transition-colors shadow-lg inline-block"
          >
            Contact Us
          </Link>
        </div>
      </motion.section>
    </div>
  );
}

const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
    <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
    <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);
