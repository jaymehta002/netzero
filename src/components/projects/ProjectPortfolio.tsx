import { motion } from "framer-motion";
import Image from "next/image";
import data from "@/data/project.json";
const ProjectPortfolio = () => {
  const projects = data.projects;

  return (
    <div className="bg-white text-gray-800 py-32">
      <h2 className="text-5xl font-bold mb-12 text-center">
        Our Project Portfolio
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative h-96 rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} // Animation only triggers once
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggering effect
            >
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 transform hover:scale-110"
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
