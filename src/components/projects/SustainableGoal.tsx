import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const BackgroundElement = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute rounded-full bg-opacity-10 bg-green-200"
    style={{
      width: Math.random() * 100 + 50,
      height: Math.random() * 100 + 50,
    }}
    initial={{ x: "-100%", y: Math.random() * 100 + "%", opacity: 0 }}
    animate={{
      x: "100%",
      y: Math.random() * 100 + "%",
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration: Math.random() * 20 + 10,
      repeat: Infinity,
      delay: delay,
    }}
  />
);

export default function SDGDashboard() {
  return (
    <div className="min-h-screen bg-[#1D3E2D] text-white p-8 relative overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <BackgroundElement key={i} delay={i * 2} />
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold text-green-300 mb-6">
              Sustainable Development Goals
            </h1>
            <p className="text-xl text-green-100 mb-8">
              The United Nations&apos; blueprint for peace and prosperity for
              people and the planet, now and into the future.
            </p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="mb-8 bg-green-800 bg-opacity-30 border-green-600">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold text-green-300 mb-4">
                    What are the SDGs?
                  </h2>
                  <p className="text-green-100 mb-4">
                    The Sustainable Development Goals (SDGs) are a collection of
                    17 interlinked global goals designed to be a &quot;shared
                    blueprint for peace and prosperity for people and the
                    planet, now and into the future.&quot;
                  </p>
                  <p className="text-green-100 mb-4">
                    These goals were set up in 2015 by the United Nations
                    General Assembly and are intended to be achieved by 2030.
                    They address global challenges including poverty,
                    inequality, climate change, environmental degradation,
                    peace, and justice.
                  </p>
                  <p className="text-green-100">
                    The SDGs are interconnected – often the key to success in
                    one will involve tackling issues more commonly associated
                    with another. They balance the three dimensions of
                    sustainable development: economic, social, and
                    environmental.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:w-1/2 relative"
          >
            <Image
              src="/sdg.jpg"
              alt="Sustainable Development Goals"
              width={600}
              height={600}
              className="rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
        <motion.div
          className="mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-green-300 mb-6">
            The 2030 Agenda for Sustainable Development
          </h2>
          <div className="flex flex-col lg:flex-row gap-8">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Card className="bg-green-800 bg-opacity-30 border-green-600">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-300 mb-4">
                    Universal Call to Action
                  </h3>
                  <p className="text-green-100">
                    The SDGs are a universal call to action to end poverty,
                    protect the planet and improve the lives and prospects of
                    everyone, everywhere. All 193 UN Member States have
                    committed to these goals, recognizing that ending poverty
                    must go hand-in-hand with strategies that build economic
                    growth and address a range of social needs including
                    education, health, social protection, and job opportunities,
                    while tackling climate change and environmental protection.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Card className="bg-green-800 bg-opacity-30 border-green-600">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-300 mb-4">
                    Leave No One Behind
                  </h3>
                  <p className="text-green-100">
                    The principle of &quot;leaving no one behind&quot; is at the
                    core of the 2030 Agenda. It aims to ensure that all goals
                    and targets are met for all nations, peoples, and segments
                    of society, reaching those furthest behind first. This
                    principle reflects the Agenda&apos;s central focus on
                    equity, inclusion, and the promise to eradicate poverty in
                    all its forms.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="mt-12 text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <p className="text-xl text-green-100 mb-8">
            Together, we can transform our world and build a sustainable future
            for all. Learn more about each goal and how you can contribute to
            achieving the SDGs by 2030.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
