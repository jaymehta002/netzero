import { cn } from "@/lib/utils";
import React from "react";

export default function BorderButton({
  text,
  className,
  group,
}: {
  text: string;
  className?: string;
  group?: string;
}) {
  return (
    <button
      className={cn(
        "group relative text-xs sm:text-sm md:text-base flex items-center justify-center h-6 sm:h-8 md:h-10 font-medium rounded-full border border-black bg-transparent px-2 sm:px-3 md:px-4 text-neutral-950",
        className,
        group !== undefined && ` group/${group}:`
      )}
    >
      <span className="relative inline-flex overflow-hidden">
        <div
          className={cn(
            "translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[135%] group-hover:skew-y-12",
            group !== undefined &&
              `group-hover/${group}:-translate-y-[135%] group-hover/${group}:skew-y-12`
          )}
        >
          {text}
        </div>
        <div
          className={cn(
            "absolute translate-y-[135%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0",
            group !== undefined &&
              `group-hover/${group}:-translate-y-[135%] group-hover/${group}:skew-y-12`
          )}
        >
          {text}
        </div>
      </span>
    </button>
  );
}
