import { motion } from "framer-motion";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Expertise = () => {
  return (
    <motion.section
      className="py-20"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          variants={fadeIn}
        >
          Our Expertise
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={staggerChildren}
        >
          {[
            {
              title: "Sustainable Energy Solutions",
              image: "/assets/sustainablity.webp",
              description:
                "Developing innovative energy solutions that minimize environmental impact.",
            },
            {
              title: "Eco-Friendly Product Design",
              image: "/assets/carbon-credit.webp",
              description: "Easy carbon credit generation and verification.",
            },
            {
              title: "Green Building Practices",
              image: "/assets/green-building.webp",
              description:
                "Implementing sustainable construction methods for a better future.",
            },
          ].map((expertise, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg shadow-md"
              variants={fadeIn}
            >
              <DirectionAwareHover imageUrl={expertise?.image}>
                <p className="font-bold text-xl">{expertise.title}</p>
                <p className="font-normal text-sm">{expertise.description}</p>
              </DirectionAwareHover>
              {/* <expertise.icon size={48} className="mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{expertise.title}</h3>
              <p>{expertise.description}</p> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Expertise;
