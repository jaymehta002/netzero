import { motion } from "framer-motion";
import Image from "next/image";

const ProjectPortfolio = () => {
  const projects = [
    {
      title: "Reforestation Projects",
      description:
        "Plant trees in degraded forests to sequester carbon and restore ecosystems.",
      image: "/assets/rainforest.jpg",
    },
    {
      title: "Renewable Energy Projects",
      description:
        "Support the development of solar, wind, and other renewable energy sources.",
      image: "/assets/rainforest.jpg",
    },
    {
      title: "Energy Efficiency Projects",
      description:
        "Implement energy-saving measures to reduce emissions and improve efficiency.",
      image: "/assets/rainforest.jpg",
    },
    {
      title: "Sustainable Agriculture Projects",
      description:
        "Promote sustainable farming practices to reduce deforestation and improve soil health.",
      image: "/assets/rainforest.jpg",
    },
  ];

  return (
    <div className="bg-white text-gray-800 py-32">
      <h2 className="text-5xl font-bold mb-12 text-center">
        Our Project Portfolio
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative h-96 rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} // Animation only triggers once
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggering effect
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 text-white bg-black bg-opacity-50 flex flex-col justify-end p-6">
                <h3 className="text-3xl font-semibold mb-2">{project.title}</h3>
                <p className="text-lg">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPortfolio;
