"use client";
import Bento from "@/components/Bento";
import Hero from "@/components/Hero";
import TextRevealByWord from "@/components/magicui/text-reveal";
import Services from "@/components/Services";
import LandingGraph from "@/components/ui/LandingGraph";

import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      backgroundColor: scrolled ? "rgba(255, 255, 255, 0.5)" : "transparent",
      transition: { duration: 0.3 },
    });
  }, [scrolled, controls]);

  return (
    <div className="space-y-24">
      <Hero />
      <script src="https://climateclock.world/widget-v2.js" async></script>
      <TextRevealByWord
        text="Terrasols Solutions Private Limited is a sustainability consulting company dedicated to creating positive changes. We have a team of experienced professionals and a strong focus on innovation. We're a global team on a mission to make sure that every business has an actionable sustainability programme."
        className="text-4xl font-bold"
      />
      <Services />
      <LandingGraph />
      {/* <climate-clock /> */}
      <Bento />
      {/* <div className="flex justify-center items-center bg-secondary">
        <Button>Book a Call</Button>
      </div> */}
    </div>
  );
}
