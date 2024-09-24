import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

export default function AnimatedServicesSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h2
        className="text-3xl font-bold text-center mb-8 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h2>
      <motion.div
        className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {servicesData.map((category) => (
          <motion.div
            key={category.category}
            variants={itemVariants}
            className="break-inside-avoid"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-primary flex justify-between items-center">
                  {category.category}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <ChevronDown className="h-4 w-4" />
                        <span className="sr-only">
                          View {category.category} services
                        </span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-primary">
                          {category.category}
                        </DialogTitle>
                      </DialogHeader>
                      <ul className="list-disc pl-5 space-y-2 mt-4">
                        {category.services.map((service, index) => (
                          <motion.li
                            key={index}
                            className="text-sm"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            {service}
                          </motion.li>
                        ))}
                      </ul>
                    </DialogContent>
                  </Dialog>
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
    </div>
  );
}
