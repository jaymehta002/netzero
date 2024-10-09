import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2, // Faster stagger for smoother flow
    },
  },
};

const Expertise = () => {
  return (
    <motion.section
      className="py-24 bg-gradient-to-r from-green-100 to-blue-100"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <div className="container mx-auto px-8">
        <motion.h2
          className="text-5xl font-extrabold mb-16 text-center text-gray-800"
          variants={fadeIn}
        >
          Our Expertise
        </motion.h2>

        {/* Expertise Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={staggerChildren}
        >
          {[
            {
              title: "Tailored Sustainability Strategies",
              image: "/assets/sustainablity.webp",
              description:
                "Crafting customized plans for industry-specific sustainable development, ensuring a transformative impact for a greener future.",
            },
            {
              title: "Inclusive Participation",
              image: "/assets/carbon-credit.webp",
              description:
                "Engaging all stakeholders to build a collaborative and inclusive sustainable world for businesses, communities, and individuals alike.",
            },
            {
              title: "Technology-Driven Transformation",
              image: "/assets/green-building.webp",
              description:
                "Harnessing digital solutions and advanced technologies to accelerate sustainability and drive impactful change across industries.",
            },
          ].map((expertise, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              variants={fadeIn}
            >
              {/* Image with Hover Zoom */}
              <motion.div
                className="relative w-full h-48 bg-cover bg-center rounded-t-xl"
                style={{ backgroundImage: `url(${expertise.image})` }}
                whileHover={{ scale: 1.05 }} // Zoom effect on hover
                transition={{ duration: 0.4 }}
              ></motion.div>

              {/* Content */}
              <motion.div className="p-6" whileHover={{ y: -10 }}>
                <p className="font-bold text-2xl text-gray-900 mb-4">
                  {expertise.title}
                </p>
                <p className="font-normal text-gray-600 text-base">
                  {expertise.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Expertise;
