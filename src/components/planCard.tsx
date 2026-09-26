"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { Ifit } from "@/types/fits.type";
import { workoutContext } from "@/context/workoutContext";

interface IPlanCardProps {
  fit: Ifit;
  activeTab: "today" | "saved";
}

const PlanCard = ({ fit, activeTab }: IPlanCardProps) => {
  const {
    removeFromTodayPlan,
    removeFromSaveLater,
  } = useContext(workoutContext);

  const handleRemove = () => {
    if (activeTab === "today") {
      removeFromTodayPlan(fit.id);
    } else {
      removeFromSaveLater(fit.id);
    }
  };

  return (
    <div className="mb-4 flex w-full items-center justify-between rounded-2xl border border-[#252a33] bg-[#12151a] p-3 transition duration-300 hover:border-[#343b47]">

      <div className="flex min-w-0 items-center gap-4">

        <div className="relative h-17 w-32 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={fit.image}
            alt={fit.name}
            fill
            className="object-cover"
            sizes="128px"
          />
        </div>

        <div className="min-w-0">

          <h2 className="truncate text-sm font-extrabold uppercase text-white">
            {fit.name}
          </h2>

          <p className="mt-0.5 truncate text-xs text-gray-500">
            {fit.equipment}
          </p>

          <div className="mt-2 flex items-center gap-3 text-xs text-gray-400">

            <div className="flex items-center gap-1">
              <span className="text-[#baff00]">
                ◷
              </span>
              <span>{fit.duration} min</span>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-[#baff00]">
                ♨
              </span>
              <span>{fit.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-[#baff00]">
                ☆
              </span>
              <span>{fit.rating}</span>
            </div>

          </div>
        </div>
      </div>

      <div className="ml-4 flex shrink-0 items-center gap-3">

        <Link
          href={`/workouts/${fit.id}`}
          className="rounded-full border border-[#343b47] px-4 py-2 text-xs font-medium text-gray-300 transition hover:border-[#baff00] hover:text-white"
        >
          View Details
        </Link>

        <button
          type="button"
          className="flex items-center gap-2 rounded-full bg-[#baff00] px-5 py-2 text-xs font-bold text-black transition hover:bg-[#a9eb00]"
        >
          <span>✓</span>
          Mark as Done
        </button>

        <button
          type="button"
          onClick={handleRemove}
          className="px-1 text-xl leading-none text-gray-500 transition hover:text-red-400"
        >
          ×
        </button>

      </div>

    </div>
  );
};

export default PlanCard;