"use client";
import Link from "next/link";
import React from "react";
import { Facebook, Twitter, Instagram, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.footer
      className="bg-primary text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="w-6 h-6" />
              <h3 className="text-2xl font-bold">Terrasols.earth</h3>
            </div>
            <p className="text-white">
              Leveraging Sustainability Innovation for a Net-Zero Future
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/net-zero", label: "Net Zero" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { href: "#", icon: Facebook, label: "Facebook" },
                { href: "#", icon: Twitter, label: "Twitter" },
                { href: "#", icon: Instagram, label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-white hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white text-center">
          <p>
            &copy; 2023 Terrasols Solutions Private Limited. All rights
            reserved.
          </p>
          <Link
            href="/privacy-policy"
            className="inline-block mt-2 hover:text-white transition-colors duration-200 hover:underline"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
