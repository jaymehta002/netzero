import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/lib/projects-data.json";

const ProjectPortfolio = () => {
  return (
    <div className="bg-white text-gray-800 py-32">
      <h2 className="text-5xl font-bold mb-12 text-center">
        Our Project Portfolio
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projectsData.projects.map((project, index) => (
            <Link href={project.url} key={index}>
              <motion.div
                className="relative h-96 rounded-lg overflow-hidden cursor-pointer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPortfolio;