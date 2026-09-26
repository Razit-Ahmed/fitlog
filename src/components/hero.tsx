import React from "react";
import Image from "next/image";
import HeroImg from "@/assets/banner.png"

const hero = () => {
  return (
    <section className="bg-[#15171c] text-white container mx-auto w-10/11 rounded-2xl mt-10">
      <div className="mx-auto flex max-w-10/11 flex-col items-center justify-between gap-8 px-6 py-10 sm:py-14 md:flex-row md:gap-10">

        {/* Left Content */}
        <div className="w-full md:w-1/2">

          <p className="mb-4 text-[10px] font-bold tracking-wider text-[#baff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-xl text-4xl font-black uppercase leading-[0.95] sm:text-5xl md:text-6xl">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <button className="mt-6 rounded-md bg-[#baff00] px-5 py-3 text-xs font-bold text-black hover:bg-[#a8e600]">
            BROWSE WORKOUTS
          </button>

        </div>

        {/* Right Image */}
        <div className="flex w-full justify-center md:w-1/2 md:justify-end">
          <Image
            src={HeroImg}
            alt="heroimg"
            className="w-55 object-contain sm:w-70 md:w-85"
          />
        </div>

      </div>
    </section>
  );
};

export default hero;