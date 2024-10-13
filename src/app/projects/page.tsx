"use client";

import ProjectHero from "@/components/projects/ProjectHero";
import ProjectPortfolio from "@/components/projects/ProjectPortfolio";
import SustainableGoals from "@/components/projects/SustainableGoal";

export default function CarbonCredits() {
  return (
    <div>
      <ProjectHero />

      {/* <BenefitsCarousel /> */}

      {/* <Timeline /> */}
      <SustainableGoals />
      <ProjectPortfolio />
    </div>
  );
}
