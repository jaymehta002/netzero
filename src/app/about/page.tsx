"use client";

import Expertise from "@/components/about/Expertise";
import Hero from "@/components/about/Hero";
import Mission from "@/components/about/Mission";
import Team from "@/components/about/Team";
import TextRevealByWord from "@/components/magicui/text-reveal";

export default function Component() {
  return (
    <div className="bg-background text-foreground">
      <Hero />

      <div className="flex py-20 flex-col justify-center items-center w-full min-h-screen">
        <h2 className="text-7xl font-bold mb-12 text-center">Our Story</h2>
        <TextRevealByWord
          className="w-full  h-full max-w-5xl" // Increased width
          text="Terrasols Solutions Private Limited is a pioneering sustainability consultancy committed to driving positive change. With a team of seasoned professionals and a passion for innovation, we offer a comprehensive range of services tailored to meet the unique needs of our clients. Our approach combines cutting-edge technology with sustainable practices, ensuring that our solutions not only meet today's demands but also contribute to a healthier planet for future generations."
        />
      </div>

      {/* Team Section */}
      {/* <motion.section
        className="py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      ></motion.section> */}

      <Team />

      <Mission />

      <Expertise />

      {/* Consultation Section */}
      {/* <motion.section
        className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-8 text-center"
            variants={fadeIn}
          >
            Start Your Digital Journey
          </motion.h2>
          <motion.form className="max-w-md mx-auto" variants={fadeIn}>
            <div className="space-y-4">
              <Input placeholder="Your Name" className="bg-white text-black" />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-white text-black"
              />
              <Textarea
                placeholder="Tell us about your project"
                className="bg-white text-black"
              />
              <Button
                className="w-full bg-primary hover:bg-primary-dark text-white"
                size="lg"
              >
                Schedule Consultation <Calendar className="ml-2" />
              </Button>
            </div>
          </motion.form>
        </div>
      </motion.section> */}
    </div>
  );
}
