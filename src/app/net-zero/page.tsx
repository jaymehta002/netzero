"use client";
import { useRouter } from "next/navigation";
import Benefits from "@/components/net-zero/Benefits";
import NetZeroHero from "@/components/net-zero/NetZeroHero";
import Services from "@/components/net-zero/Services";
import Steps from "@/components/net-zero/Steps";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NetZero() {
  const router = useRouter();

  return (
    <div className="space-y-24 overflow-hidden">
      <NetZeroHero />
      <Benefits />
      <Steps />
      <Services />

      <section className="py-12 bg-primary rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl text-white font-bold mb-4">GET INVOLVED</h2>
          <p className="text-xl text-white mb-8">
            Be a Part of the Global Movement
          </p>
          <motion.div className={`transition-opacity duration-600 opacity-100`}>
            <Button
              className="bg-white hover:bg-white/90 text-primary"
              onClick={() => router.push("/book-a-call")}
            >
              Join Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
