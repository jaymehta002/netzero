"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hover: { scale: 1.1, color: "#34A853", transition: { duration: 0.3 } },
  };

  return (
    <footer className="bg-green-900 text-white py-12 px-6">
      <motion.div
        className="max-w-screen-xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Mission Section */}
          <div className="text-center md:text-left">
            <Image
              src="/logo.svg"
              alt="Terrasols Logo"
              width={300}
              height={120}
              className="mx-auto md:mx-0"
            />
            {/* <h3 className="text-green-400 text-lg font-semibold mt-4">
              Terrasols.earth
            </h3> */}
            <p className="text-lg mt-2 leading-relaxed">
              Leveraging Sustainability Innovation for a Net-Zero Future.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl text-green-400 font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/net-zero", label: "Net Zero" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <motion.li
                  key={link.href}
                  whileHover="hover"
                  variants={linkVariants}
                >
                  <Link
                    href={link.href}
                    className="hover:text-green-300 transition duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl text-green-400 font-semibold mb-4">
              Connect With Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-6">
              {[
                {
                  href: "https://www.facebook.com/terrasols",
                  icon: Facebook,
                  label: "Facebook",
                },
                {
                  href: "https://x.com/terrasols_earth",
                  icon: Twitter,
                  label: "Twitter",
                },
                {
                  href: "https://www.instagram.com/terrasols_earth",
                  icon: Instagram,
                  label: "Instagram",
                },
                {
                  href: "https://www.linkedin.com/company/terrasols",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
              ].map((social) => (
                <Link
                  href={social.href}
                  key={social.label}
                  className="text-white hover:text-green-300 transition duration-300"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={28} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-800 mt-12 pt-6 text-center md:flex md:justify-between text-sm text-green-300">
          <p>
            © 2024 Terrasols Solutions Private Limited. All rights reserved.
          </p>
          <Link
            href="/privacy-policy"
            className="hover:text-green-400 transition duration-300 mt-2 md:mt-0"
          >
            Privacy Policy
          </Link>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
