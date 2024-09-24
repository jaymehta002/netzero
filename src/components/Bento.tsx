import { MoveUpRight } from "lucide-react";
import BorderButton from "./ui/BorderButton";

export default function Bento() {
  return (
    <section className=" grid grid-cols-1 lg:grid-cols-12 mt-5 w-full p-4 sm:p-10 gap-5 ">
      <div className=" relative w-full lg:col-span-8">
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          preload="none"
          style={{ display: "block" }}
          className=" rounded-3xl border"
        >
          <source src="/wildlife.webp" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className=" absolute bottom-0  w-[60%] lg:w-[40%] left-0">
          <div className=" w-[60%] rounded-se-2xl flex items-start bg-white  pt-3 pr-2 lg:pt-3 lg:pr-6">
            <BorderButton
              text="Wildlife Burning"
              className=" text-xs"
            ></BorderButton>
          </div>
          <div className=" text-2xl lg:text-6xl font-semibold w-[80%] rounded-se-2xl flex items-start bg-white  pt-1 pr-2 lg:pt-3 lg:pr-6">
            56,580
          </div>
          <div className=" text-2xl lg:text-6xl font-semibold w-full rounded-se-2xl flex items-start bg-white  pt-1 pr-2 lg:pt-3 lg:pr-6">
            wildfires
          </div>
        </div>
      </div>
      <div className=" md:col-span-4  flex flex-col gap-5 group/cardthree">
        <div className=" mb-8 relative rounded-3xl h-[45%] p-8">
          <video
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
            preload="none"
            style={{
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
            className=" rounded-3xl border"
          >
            <source src="/industry.webp" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <BorderButton
            text="Global Warming"
            group="cardthree"
            className="relative z-10"
          ></BorderButton>
        </div>
        <div className=" relative rounded-3xl h-[55%]">
          <div className="  absolute top-5 left-5">
            <BorderButton
              text="Oxygenless?"
              className=" border-white text-white"
            ></BorderButton>
          </div>
          <video
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
            preload="none"
            style={{
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
            className=" rounded-3xl border"
          >
            <source src="/warning.webp" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className=" absolute -bottom-3 -right-3  rounded-full p-3 transition-all duration-200 ease-in-out group-hover/cardthree:-translate-x-2 group-hover/cardthree:-translate-y-2 bg-white z-10 size-16">
            <MoveUpRight className=" group-hover/cardthree:-rotate-90 bg-black p-2 transition-all duration-200 ease-in-out  text-white size-full rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
