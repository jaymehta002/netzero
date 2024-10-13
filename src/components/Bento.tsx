import React from "react";
import BorderButton from "./ui/BorderButton";
import { MoveUpRight } from "lucide-react";
import BlurFade from "./ui/blur_fade";

export default function Bento() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 w-full p-2 sm:p-4 md:p-6 lg:p-10 gap-3 sm:gap-5">
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
        <div className="absolute bottom-0 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] left-0 p-2 sm:p-4">
          <div className="w-full sm:w-[60%] rounded-se-xl sm:rounded-se-2xl flex items-start">
            <BorderButton
              text="Temperature"
              className="text-xs sm:text-sm text-white border-white"
            />
          </div>
          <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold w-full sm:w-[80%] text-white mt-1 sm:mt-2">
            2.5 Lakhs
          </div>
          <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold w-full text-white mt-1 sm:mt-2">
            Wildlife fires
          </div>
        </div>
      </BlurFade>
      <div className="lg:col-span-4 flex flex-col gap-3 sm:gap-5 group/cardthree">
        <div className="relative rounded-2xl sm:rounded-3xl h-[200px] sm:h-[250px] md:h-[300px] lg:h-[45%] p-4 sm:p-6 overflow-hidden">
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
              width: "100%",
              height: "100%",
              objectFit: "cover",
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
        <div className="relative rounded-2xl sm:rounded-3xl h-[200px] sm:h-[250px] md:h-[300px] lg:h-[55%] overflow-hidden">
          <div className="absolute top-3 sm:top-5 left-3 sm:left-5 z-10">
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
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            className="rounded-2xl sm:rounded-3xl border"
          >
            <source src="/warning.webp" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 rounded-full p-2 sm:p-3 transition-all duration-200 ease-in-out group-hover/cardthree:-translate-x-1 group-hover/cardthree:-translate-y-1 bg-white z-10 size-10 sm:size-12 md:size-14 lg:size-16">
            <MoveUpRight className="group-hover/cardthree:-rotate-90 bg-black p-1 sm:p-2 transition-all duration-200 ease-in-out text-white size-full rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
