"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Manish Kumar",
    role: "Founder & CEO",
    image: "/team/manish.png",
    description:
      "Manish Kumar is a professional with 10+ years in sales and project management, focusing on sustainability.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Vaibhav Tiwari",
    role: "Chief Sustainability Officer",
    image: "/team/vaibhav.jpg",
    description:
      "Vaibhav Tiwari, a law graduate with expertise in sustainability from WWF, actively works on Carbon Credit projects and embodies a sustainable lifestyle.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Dev Mehta",
    role: "Head of Sales",
    image: "/team/dev.jpeg",
    description:
      "Dev Mehta is an experienced Corporate Sales professional from Calcutta University, known for his strong client relationships and strategic sales skills.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Jay Mehta",
    role: "Chief Technology Officer",
    image: "/team/jay.png",
    description:
      "Jay Mehta is a Full Stack Developer experienced in building MVPs for startups, delivering scalable solutions.",
    linkedin: "https://www.linkedin.com/in/jaymehta002/",
    twitter: "https://twitter.com/jaymehta002",
    github: "https://github.com/jaymehta002",
  },
];

export default function RedesignedTeam() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section className="bg-gradient-to-b from-background to-secondary/20 py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Visionaries
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="overflow-hidden h-full"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="relative aspect-square">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-primary/80 flex items-center justify-center p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredMember === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-primary-foreground text-sm text-center">
                        {member.description}
                      </p>
                    </motion.div>
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {member.role}
                      </p>
                    </div>
                    <div className="flex space-x-2 mt-2">
                      <Button variant="outline" size="icon" asChild>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
