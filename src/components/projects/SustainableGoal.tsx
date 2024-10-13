import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

export default function SDGDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-green-800 mb-6">
              Sustainable Development Goals
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              The United Nations&apos; blueprint for peace and prosperity for
              people and the planet, now and into the future.
            </p>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                  What are the SDGs?
                </h2>
                <p className="text-gray-600 mb-4">
                  The Sustainable Development Goals (SDGs) are a collection of
                  17 interlinked global goals designed to be a &quot;shared
                  blueprint for peace and prosperity for people and the planet,
                  now and into the future.&quot;
                </p>
                <p className="text-gray-600 mb-4">
                  These goals were set up in 2015 by the United Nations General
                  Assembly and are intended to be achieved by 2030. They address
                  global challenges including poverty, inequality, climate
                  change, environmental degradation, peace, and justice.
                </p>
                <p className="text-gray-600">
                  The SDGs are interconnected – often the key to success in one
                  will involve tackling issues more commonly associated with
                  another. They balance the three dimensions of sustainable
                  development: economic, social, and environmental.
                </p>
              </CardContent>
            </Card>
            {/* <motion.button
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore SDGs
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button> */}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            The 2030 Agenda for Sustainable Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">
                  Universal Call to Action
                </h3>
                <p className="text-gray-600">
                  The SDGs are a universal call to action to end poverty,
                  protect the planet and improve the lives and prospects of
                  everyone, everywhere. All 193 UN Member States have committed
                  to these goals, recognizing that ending poverty must go
                  hand-in-hand with strategies that build economic growth and
                  address a range of social needs including education, health,
                  social protection, and job opportunities, while tackling
                  climate change and environmental protection.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">
                  Leave No One Behind
                </h3>
                <p className="text-gray-600">
                  The principle of &quot;leaving no one behind&quot; is at the
                  core of the 2030 Agenda. It aims to ensure that all goals and
                  targets are met for all nations, peoples, and segments of
                  society, reaching those furthest behind first. This principle
                  reflects the Agenda&apos;s central focus on equity, inclusion,
                  and the promise to eradicate poverty in all its forms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 mb-8">
            Together, we can transform our world and build a sustainable future
            for all. Learn more about each goal and how you can contribute to
            achieving the SDGs by 2030.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
