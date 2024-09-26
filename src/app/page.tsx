"use client";
import Bento from "@/components/Bento";
import Brochure from "@/components/Brochure";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

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
      <climate-clock />
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            <span className="text-primary">Terrasols Solutions</span> Private
            Limited is a sustainability consulting company dedicated to creating
            positive changes. We have a team of experienced professionals and a
            strong focus on innovation.
          </p>
        }
        className="h-[40rem] rounded-md"
        revealSize={400}
      >
        We&apos;re a global team on a mission to make sure that every business
        has an actionable sustainability programme.
      </MaskContainer>
      <Services />
      <Bento />
      {/* <Brochure /> */}
    </div>
  );
}
