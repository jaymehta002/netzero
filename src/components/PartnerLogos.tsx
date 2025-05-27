import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  {
    name: 'Partner 1',
    logo: '/images/partners/partner1.png',
  },
  {
    name: 'Partner 2',
    logo: '/images/partners/partner2.png',
  },
  {
    name: 'Partner 3',
    logo: '/images/partners/partner3.png',
  },
  {
    name: 'Partner 4',
    logo: '/images/partners/partner4.png',
  },
  {
    name: 'Partner 5',
    logo: '/images/partners/partner5.png',
  },
];

export default function PartnerLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
      {partners.map((partner, index) => (
        <motion.div
          key={partner.name}
          className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Image
            src={partner.logo}
            alt={partner.name}
            layout="fill"
            objectFit="contain"
            className="filter hover:brightness-110 transition-all duration-300"
          />
        </motion.div>
      ))}
    </div>
  );
} 