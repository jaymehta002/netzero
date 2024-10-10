import React from "react";
import BorderButton from "./ui/BorderButton";
import { MoveUpRight } from "lucide-react";
import BlurFade from "./ui/blur_fade";

export default function Bento() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 mt-5 w-full p-2 sm:p-4 md:p-6 lg:p-10 gap-3 sm:gap-5">
      <BlurFade className="relative w-full lg:col-span-8 h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto">
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          style={{ display: "block" }}
          className="rounded-2xl sm:rounded-3xl border shadow-md h-full w-full object-cover"
        >
          <source src="/wildlife.webp" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-0 w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] left-0">
          <div className="w-[60%] rounded-se-xl sm:rounded-se-2xl flex items-start bg-stone-100 pt-2 pr-2 sm:pt-3 sm:pr-4 lg:pt-3 lg:pr-6">
            <BorderButton text="Temprature" className="text-xs sm:text-sm" />
          </div>
          <div className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold w-[80%] rounded-se-xl sm:rounded-se-2xl flex items-start bg-stone-100 pt-1 pr-2 sm:pt-2 sm:pr-4 lg:pt-3 lg:pr-6">
            2.5 Lakhs
          </div>
          <div className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold w-full rounded-se-xl sm:rounded-se-2xl flex items-start bg-stone-100 pt-1 pr-2 sm:pt-2 sm:pr-4 lg:pt-3 lg:pr-6">
            Wildlife fires
          </div>
        </div>
      </BlurFade>
      <div className="lg:col-span-4 flex flex-col gap-3 sm:gap-5 group/cardthree">
        <div className="mb-10 sm:mb-20 relative rounded-2xl sm:rounded-3xl h-[200px] sm:h-[250px] md:h-[300px] lg:h-[45%] p-4 sm:p-6 lg:p-8">
          <video
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            style={{
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
            className="rounded-2xl sm:rounded-3xl border"
          >
            <source src="/industry.webp" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <BorderButton
            text="Global Warming"
            group="cardthree"
            className="relative z-10"
          />
        </div>
        <div className="relative rounded-2xl sm:rounded-3xl h-[200px] sm:h-[250px] md:h-[300px] lg:h-[70%]">
          <div className="absolute top-3 sm:top-5 left-3 sm:left-5">
            <BorderButton
              text="Oxygenless?"
              className="border-white text-white"
            />
          </div>
          <video
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            style={{
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
            className="rounded-2xl sm:rounded-3xl border"
          >
            <source src="/warning.webp" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 rounded-full p-2 sm:p-3 transition-all duration-200 ease-in-out group-hover/cardthree:-translate-x-2 group-hover/cardthree:-translate-y-2 bg-white z-10 size-12 sm:size-16">
            <MoveUpRight className="group-hover/cardthree:-rotate-90 bg-black p-1 sm:p-2 transition-all duration-200 ease-in-out text-white size-full rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
