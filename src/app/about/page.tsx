"use client";

import Expertise from "@/components/about/Expertise";
import Hero from "@/components/about/Hero";
import Mission from "@/components/about/Mission";
import Story from "@/components/about/Story";
import Team from "@/components/about/Team";

export default function Component() {
  return (
    <div className="bg-background text-foreground">
      <Hero />

      <Story />

      <Team />

      <Mission />

      <Expertise />
    </div>
  );
}
