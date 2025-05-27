import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  className = '',
}: ProjectCardProps) {
  return (
    <motion.div
      className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={link}>
        <div className="block">
          <div className="relative h-48">
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <div className="mt-4 flex items-center text-green-700 font-semibold">
              Learn More
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 