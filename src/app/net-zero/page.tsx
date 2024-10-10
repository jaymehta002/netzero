"use client";
import Benefits from "@/components/net-zero/Benefits";
import NetZeroHero from "@/components/net-zero/NetZeroHero";
import Services from "@/components/net-zero/Services";
import Steps from "@/components/net-zero/Steps";

export default function NetZero() {
  return (
    <div className="space-y-24 overflow-hidden">
      <NetZeroHero />
      <Benefits />
      <Steps />
      <Services />
    </div>
  );
}
