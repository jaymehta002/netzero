"use client";
import BenefitsCarousel from "@/components/projects/BenefitsCarousel";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectPortfolio from "@/components/projects/ProjectPortfolio";
import Timeline from "@/components/projects/Timeline";

export default function CarbonCredits() {
  return (
    <div>
      <ProjectHero />

      <BenefitsCarousel />

      <Timeline />

      <ProjectPortfolio />

      {/* <ParallaxSection bgImage="/placeholder.svg?height=1080&width=1920"> */}
      {/* <div className="text-center text-white">
        <motion.h2
          className="text-6xl font-bold mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Invest in a Sustainable Future
        </motion.h2>
        <motion.p
          className="text-3xl mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Learn more about our carbon credit projects and how to invest in a
          sustainable future.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center bg-emerald-600 text-white px-16 py-8 rounded-full text-3xl font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Invest in Carbon Credits
            <ArrowRight className="ml-4 w-8 h-8" />
          </Link>
        </motion.div>
      </div> */}
      {/* </ParallaxSection> */}
    </div>
  );
}
