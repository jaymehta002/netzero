"use client"
import React, { useState, useId, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";



interface Category {
  category: string;
  services: string[];
}

const servicesData = [
  {
    category: "Sustainability",
    services: [
      "Sustainability Strategy and Roadmap",
      "Policy Development & Target Setting",
      "Stakeholder Engagement & Materiality Assessment",
      "ESG Rating Improvements",
      "Sustainability Reporting (GRI, BRSR, Integrated Reporting, CDP, UN SDGs, CFD, SASB, CBAM)",
      "Verification and Assurance",
    ],
  },
  {
    category: "Climate Change Mitigation & Adaptation",
    services: [
      "GHG Accounting/Carbon Footprinting (For Corporates, Companies, Projects, Products, & Events)",
      "GHG Scope 3 Inventory",
      "ISO 14064 Certification",
      "GHG Portfolio Emissions Inventory for FL",
      "Carbon Neutrality Services",
      "Carbon-Neutral Product Offerings",
      "Climate Change Mitigation",
      "Climate Risk and Policy Disclosure",
      "CDP Disclosure",
      "TCFD Disclosure",
      "Climate Risk Assessment (With Scenario Mapping: Qualitative & Quantitative)",
      "SBTi & Target Validation",
      "Climate Policy Development & Target Setting",
    ],
  },
  {
    category: "Training Services",
    services: [
      "Standard Awareness Training (ISO 14001, ISO 9001, ISO 22000/HACCP, ISO 28001)",
      "Internal Auditor Training Programs (ISO 14001, ISO 9001, ISO 22000/HACCP, ISO 28001)",
      "Energy Management and Sustainability Training (ISO 50001)",
      "Information Security Management Training (ISO 27001)",
      "Occupational Health and Safety Training (OHSAS 18001, BRC)",
    ],
  },
  {
    category: "Green Building Rating",
    services: [
      "LEED Certification (Platinum, Net Zero)",
      "Green Certification & Resource Efficiency Audits",
      "Green Building & Company Ratings",
      "Net Zero Certifications & Audits",
      "Life Cycle Assessment (LCA) & Product Ratings",
      "Specialized Certifications (Airport Carbon Accreditation, Water Footprinting, Waste Audits)",
    ],
  },
  {
    category: "Audit Services",
    services: [
      "Supplier Reliability and Quality Audits",
      "ESG Audits & Supplier Qualification (SA8000, SLCP, SMETA, ICS, SCI, WRAP, ICTI, C-TPAT, Security Audits, amfori's Speak for Change SCGM)",
      "CAPA Factory Audits",
    ],
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function ExpandableServicesSection() {
  const [active, setActive] = useState<Category | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  const handleOutsideClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setActive(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-16"> {/* Added mt-16 for top margin */}
      <motion.h2
        className="text-3xl font-bold text-center mb-8 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h2>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {servicesData.map((category) => (
          <motion.div
            key={category.category}
            variants={itemVariants}
            layoutId={`card-${category.category}-${id}`}
            onClick={() => setActive(category)}
            className="cursor-pointer"
          >
            <Card className="h-full hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-primary flex justify-between items-center">
                  {category.category}
                  <ChevronDown className="h-4 w-4" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {category.services.length} services available
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 flex items-center justify-center z-[100] p-4">
            <motion.div
              layoutId={`card-${active.category}-${id}`}
              ref={ref}
              className="w-full max-w-[90%] md:max-w-[500px] h-[50vh] md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="flex justify-between items-start p-4">
                <motion.h3
                  layoutId={`title-${active.category}-${id}`}
                  className="font-medium text-neutral-700 dark:text-neutral-200 text-xl"
                >
                  {active.category}
                </motion.h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setActive(null)}
                >
                  <ChevronDown className="h-4 w-4 rotate-180" />
                </Button>
              </div>
              <div className="p-4 overflow-y-auto flex-grow">
                <ul className="list-disc pl-5 space-y-2">
                  {active.services.map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="text-sm text-neutral-600 dark:text-neutral-400"
                    >
                      {service}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}